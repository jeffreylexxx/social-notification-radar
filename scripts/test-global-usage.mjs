import fs from "node:fs/promises";
import assert from "node:assert/strict";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const root = new URL("../", import.meta.url);
const read = p => fs.readFile(new URL(p, root), "utf8");
const source = JSON.parse(await read("data/global-apps.json"));
const supplement = JSON.parse(await read("data/global-usage-supplement.json"));
const context = {window:{}};
vm.runInNewContext(await read("data/global-app-data.js"), context);
const generated = context.window.APP_DATA.apps;
assert.equal(generated.length, 55);
let added = 0;
for (const [id, metrics] of Object.entries(supplement.apps)) {
  const app = source.apps.find(a => a.id === id);
  const browserApp = generated.find(a => a.id === id);
  assert.ok(app && browserApp, id);
  for (const [key, metric] of Object.entries(metrics)) {
    added++;
    assert.equal(app.usage[key], metric.value);
    assert.equal(browserApp.usage[key], metric.value);
    assert.equal(app.usage.metricMeta[key].period, metric.period);
    assert.equal(app.usage.metricMeta[key].source.url, metric.source.url);
    assert.ok(app.sources.some(s => s.url === metric.source.url));
    if (metric.prefix) assert.equal(browserApp.usage[`${key}Prefix`], metric.prefix);
  }
}
assert.equal(added, 12);
generated.forEach((app, i) => {
  assert.equal(app.rank, i + 1);
  if (i) {
    const prev = generated[i-1];
    assert.ok(prev.count >= app.count);
    if (prev.count === app.count) assert.ok((prev.usage.activeUsers ?? -1) >= (app.usage.activeUsers ?? -1));
  }
});
const html = await read("global.html");
const start = html.indexOf("    function usageMetricMarkup(");
const end = html.indexOf("\n    function ", start + 10);
assert.ok(start > 0 && end > start);
const renderContext = {escapeHtml: s => String(s), formatActiveUsers: () => "MAU"};
vm.runInNewContext(html.slice(start, end), renderContext);
const spotify = generated.find(a => a.id === "spotify");
const spotifyOpens = renderContext.usageMetricMarkup(spotify, "launches", "次", "日均打开");
assert.ok(spotifyOpens.includes("2.01次"));
assert.ok(spotifyOpens.includes("2016-09-27"));
assert.ok(!spotifyOpens.includes("2026 Q2"));
assert.ok(renderContext.usageMetricMarkup(spotify, "durationMinutes", "分钟", "日均时长").includes("约58分钟"));
assert.ok(renderContext.usageMetricMarkup(generated.find(a=>a.id==='slack'), "launches", "次", "日均打开").includes("未披露"));
console.log(`Verified ${added} supplemental metrics, per-field labels, sources and 55 sequential ranks (${fileURLToPath(root)}).`);
