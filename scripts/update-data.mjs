import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const dataDir = path.join(root, "data");
const globalMode = process.argv.includes("--global");
const historyDir = path.join(dataDir, globalMode ? "history-global" : "history");
const offline = process.argv.includes("--offline");
const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date());
const checkedAt = new Date().toISOString();

await fs.mkdir(historyDir, { recursive: true });
const sourceData = JSON.parse(await fs.readFile(path.join(dataDir, globalMode ? "global-apps.json" : "apps.json"), "utf8"));

function countReminders(app) {
  return app.categories.reduce((sum, category) => sum + category.items.length, 0);
}

function rankApps(apps) {
  const ordered = [...apps].sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    const aMau = Number.isFinite(a.usage?.activeUsers) ? a.usage.activeUsers : -1;
    const bMau = Number.isFinite(b.usage?.activeUsers) ? b.usage.activeUsers : -1;
    return bMau - aMau || a.name.localeCompare(b.name, "zh-CN");
  });
  return ordered.map((app, index) => ({ ...app, rank: index + 1 }));
}

async function readJson(file, fallback) {
  try { return JSON.parse(await fs.readFile(file, "utf8")); } catch { return fallback; }
}

async function findPreviousSnapshot() {
  const files = (await fs.readdir(historyDir).catch(() => []))
    .filter(name => /^\d{4}-\d{2}-\d{2}\.json$/.test(name) && name < `${today}.json`)
    .sort();
  if (!files.length) return null;
  return readJson(path.join(historyDir, files.at(-1)), null);
}

const previousSnapshot = await findPreviousSnapshot();
const previousRanks = new Map((previousSnapshot?.apps || []).map(app => [app.id, app.rank]));
const prepared = sourceData.apps.map(app => ({
  ...app,
  count: countReminders(app),
  categorySummary: app.categories.map(category => `${category.name} ${category.items.length}`).join("，")
}));
const ranked = rankApps(prepared).map(app => ({
  ...app,
  previousRank: previousRanks.get(app.id) ?? null,
  rankChange: previousRanks.has(app.id) ? previousRanks.get(app.id) - app.rank : 0
}));

const previousStatusPath = path.join(dataDir, globalMode ? "source-status-global.json" : "source-status.json");
const previousStatus = await readJson(previousStatusPath, { sources: [] });
const previousByUrl = new Map(previousStatus.sources.map(source => [source.url, source]));
const uniqueSources = [];
const seenUrls = new Set();
for (const app of sourceData.apps) {
  const appSources = [...app.sources, ...(app.usage?.source ? [{ ...app.usage.source, type: "usage-data" }] : [])];
  for (const source of appSources) {
    if (seenUrls.has(source.url)) continue;
    seenUrls.add(source.url);
    uniqueSources.push({ ...source, apps: sourceData.apps.filter(item => item.sources.some(entry => entry.url === source.url) || item.usage?.source?.url === source.url).map(item => item.id) });
  }
}

async function inspectSource(source) {
  const previous = previousByUrl.get(source.url);
  if (offline) {
    return previous || { ...source, status: "not-checked", checkedAt: null, hash: null, bytes: null, changed: false };
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(source.url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "Mozilla/5.0 NotificationRadar/1.0 (+https://github.com/)",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.5"
      }
    });
    const bytes = Buffer.from(await response.arrayBuffer());
    const hash = crypto.createHash("sha256").update(bytes).digest("hex");
    return {
      ...source,
      finalUrl: response.url,
      status: response.ok ? "ok" : "http-error",
      httpStatus: response.status,
      contentType: response.headers.get("content-type"),
      checkedAt,
      hash,
      bytes: bytes.length,
      changed: Boolean(previous?.hash && previous.hash !== hash)
    };
  } catch (error) {
    return {
      ...source,
      status: "fetch-error",
      checkedAt,
      hash: previous?.hash || null,
      bytes: previous?.bytes || null,
      changed: false,
      error: error.name === "AbortError" ? "timeout" : String(error.message || error)
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

const sourceStatuses = await mapWithConcurrency(uniqueSources, 4, inspectSource);
const changedSources = sourceStatuses.filter(source => source.changed);
const failedSources = sourceStatuses.filter(source => source.status === "fetch-error" || source.status === "http-error");

const snapshot = {
  date: today,
  generatedAt: checkedAt,
  apps: ranked.map(({ id, name, count, rank }) => ({ id, name, count, rank }))
};
await fs.writeFile(path.join(historyDir, `${today}.json`), `${JSON.stringify(snapshot, null, 2)}\n`);
await fs.writeFile(path.join(historyDir, "latest.json"), `${JSON.stringify(snapshot, null, 2)}\n`);

const statusDocument = {
  checkedAt: offline ? previousStatus.checkedAt || null : checkedAt,
  sourceCount: sourceStatuses.length,
  changedCount: changedSources.length,
  failedCount: failedSources.length,
  sources: sourceStatuses
};
await fs.writeFile(previousStatusPath, `${JSON.stringify(statusDocument, null, 2)}\n`);

const publicData = {
  meta: {
    ...sourceData.meta,
    snapshotDate: today,
    generatedAt: checkedAt,
    sourceCount: sourceStatuses.length,
    changedSourceCount: changedSources.length,
    failedSourceCount: failedSources.length,
    previousSnapshotDate: previousSnapshot?.date || null
  },
  apps: ranked
};
await fs.writeFile(path.join(dataDir, globalMode ? "global-app-data.js" : "app-data.js"), `window.APP_DATA = ${JSON.stringify(publicData, null, 2)};\n`);
await fs.writeFile(path.join(dataDir, globalMode ? "change-summary-global.json" : "change-summary.json"), `${JSON.stringify({ date: today, changedSources, failedSources }, null, 2)}\n`);

console.log(`Generated ${ranked.length} ${globalMode ? "global" : "domestic"} apps, ${sourceStatuses.length} sources, ${changedSources.length} changes, ${failedSources.length} failures.`);
