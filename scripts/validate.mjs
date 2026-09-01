import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = JSON.parse(await fs.readFile(path.join(root, "data", "apps.json"), "utf8"));
const html = await fs.readFile(path.join(root, "index.html"), "utf8");
const globalSource = JSON.parse(await fs.readFile(path.join(root, "data", "global-apps.json"), "utf8"));
const globalHtml = await fs.readFile(path.join(root, "global.html"), "utf8");
const ids = new Set();
const names = new Set();
const errors = [];

if (source.apps.length !== 65) errors.push(`Expected 65 apps, found ${source.apps.length}`);
if (globalSource.apps.length !== 63) errors.push(`Expected 63 global apps, found ${globalSource.apps.length}`);

for (const app of source.apps) {
  if (ids.has(app.id)) errors.push(`Duplicate id: ${app.id}`);
  if (names.has(app.name)) errors.push(`Duplicate name: ${app.name}`);
  ids.add(app.id);
  names.add(app.name);
  if (!app.categories?.length) errors.push(`${app.name}: no categories`);
  if (!app.appCategory) errors.push(`${app.name}: no app category`);
  if (!app.sources?.length) errors.push(`${app.name}: no sources`);
  if (app.usage) {
    if (!app.usage.source?.url || !app.usage.source?.title) errors.push(`${app.name}: usage source is incomplete`);
    for (const key of ["durationMinutes", "launches", "activeUsers"]) {
      if (app.usage[key] !== null && !Number.isFinite(app.usage[key])) errors.push(`${app.name}: invalid usage ${key}`);
    }
  }
  if (!app.zeroReminderConfirmed && !app.categories?.every(category => category.items?.length)) errors.push(`${app.name}: empty category`);
  try { await fs.access(path.join(root, app.logo)); } catch { errors.push(`${app.name}: missing logo ${app.logo}`); }
}

const globalIds = new Set();
const globalNames = new Set();
for (const app of globalSource.apps) {
  if (globalIds.has(app.id)) errors.push(`Global duplicate id: ${app.id}`);
  if (globalNames.has(app.name)) errors.push(`Global duplicate name: ${app.name}`);
  globalIds.add(app.id);
  globalNames.add(app.name);
  if (!app.categories?.length || !app.categories.every(category => category.items?.length)) errors.push(`${app.name}: global categories incomplete`);
  if (!app.sources?.length) errors.push(`${app.name}: global sources missing`);
  if (!app.countMethod) errors.push(`${app.name}: global count method missing`);
  try { await fs.access(path.join(root, app.logo)); } catch { errors.push(`${app.name}: missing global logo ${app.logo}`); }
}

if (!html.includes('data/app-data.js')) errors.push("index.html does not load generated data");
if (!html.includes('id="themeButton"')) errors.push("theme switch is missing");
if (html.includes('href="index-v0.html"')) errors.push("V0 fallback link should be removed");
if (!html.includes('id="notificationTotal"')) errors.push("notification total is missing");
if (!html.includes("通知/提醒个数")) errors.push("notification count column label is missing");
if (!html.includes('href="global.html"')) errors.push("domestic page global navigation is missing");
if (!globalHtml.includes('data/global-app-data.js')) errors.push("global.html does not load generated data");
if (!globalHtml.includes('href="index.html"')) errors.push("global page domestic navigation is missing");
if (!globalHtml.includes("通知/提醒个数")) errors.push("global notification count label is missing");

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1].trim())
  .filter(Boolean);
for (const script of inlineScripts) {
  try { new Function(script); } catch (error) { errors.push(`Inline JavaScript: ${error.message}`); }
}
const globalInlineScripts = [...globalHtml.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1].trim()).filter(Boolean);
for (const script of globalInlineScripts) {
  try { new Function(script); } catch (error) { errors.push(`Global inline JavaScript: ${error.message}`); }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const reminderCount = source.apps.reduce((sum, app) =>
  sum + app.categories.reduce((appSum, category) => appSum + category.items.length, 0), 0);
const sourceCount = new Set(source.apps.flatMap(app => [...app.sources.map(source => source.url), ...(app.usage?.source?.url ? [app.usage.source.url] : [])])).size;
console.log(`Validated ${source.apps.length} apps, ${reminderCount} reminder scenarios, ${sourceCount} unique sources and ${ids.size} logos.`);
const globalReminderCount = globalSource.apps.reduce((sum, app) => sum + app.categories.reduce((sub, category) => sub + category.items.length, 0), 0);
const globalSourceCount = new Set(globalSource.apps.flatMap(app => [...app.sources.map(source => source.url), ...(app.usage?.source?.url ? [app.usage.source.url] : [])])).size;
console.log(`Validated ${globalSource.apps.length} global apps, ${globalReminderCount} reminder scenarios, ${globalSourceCount} unique sources and ${globalIds.size} logos.`);
