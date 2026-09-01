# 社交应用提醒雷达

演示网址：
https://jeffreylexxx.github.io/social-notification-radar/index.html

一个可直接部署到 GitHub Pages 的双页互动研究仪表盘：国内页统计 65 个常用中国手机应用与独立服务入口；全球页统计经纠错确认的 63 个全球常用 App。两页都对通知、红点与提醒场景进行分类、计数和排名。

顶部按 7 类列出全部应用。应用默认全部勾选；取消某个应用后，纳入应用数、总通知数和排行榜显示范围会即时更新。

## 数据口径

- 一个可以独立触发提醒的用户场景计 1 项。
- 锁屏、横幅、声音、角标属于同一提醒的展示方式，不重复计数。
- 数字是基于公开资料逐项核实后的“已确认下限”，不是应用官方公布的功能总数。
- 每项分类和来源均保存在 `data/apps.json`，网页展开行可查看明细。
- 排名先按通知/提醒数量降序，同数量时按 MAU 降序，MAU 未披露者置后，最终使用连续且唯一的排名；排名变化只与前一个日期快照比较。
- 美团外卖和抖音商城按独立服务入口统计，可能与美团和抖音的提醒场景重叠；总通知数不等同于跨应用去重后的系统通知总量。

### 使用行为指标口径

- 日均时长、日均打开和 MAU 只采用能够对应到具体 App 的公开数据；行业均值、集团总用户、注册用户、交易客户和 DAU 不替代 App MAU。
- 公开资料只有月人均时长或月人均使用次数时，按该自然月实际天数换算为日均，并在展开详情中显示原数值、公式、数据期及历史标记。
- 跨期资料、图表读取值、特定人群样本、DAU 收听时长和节假日峰值都会在行内明确标注，不能视为同一时期的完整用户画像。
- 截至 2026-09-01，65 个应用中已填入日均时长 57 项、日均打开 52 项、MAU 64 项。其余空缺代表本轮仍未找到可公开核验的同口径数值，不以推测值补齐。
- 全球页目前有 63 项、534 个提醒场景和 88 条公开来源。全球使用行为数据优先采用官方财报/新闻稿与 Similarweb App Intelligence 经 DataReportal 发布的全球 Android 样本；会员、订阅、账户、DAU/WAU 等代理口径只显示标签，不写入 App MAU 排序字段。

## 本地查看

在项目根目录运行：

```bash
python -m http.server 8000
```

然后打开 `http://localhost:8000/`。无需安装前端依赖。

重新生成网页数据但不访问网络：

```bash
npm run update:offline
```

执行完整来源监测：

```bash
npm run update
```

## 上传与启用 GitHub Pages

1. 将本目录全部文件上传到 GitHub 仓库的 `main` 分支。
2. 在仓库 `Settings → Pages → Build and deployment` 中选择 `GitHub Actions`。
3. 手动运行一次 `Deploy GitHub Pages` 工作流，或再次推送代码。
4. `Daily source monitor` 每天北京时间 02:15 运行，也支持手动触发。

## 自动更新如何工作

每日工作流会重新抓取国内与全球两套公开来源，记录 HTTP 状态、正文指纹和抓取时间，分别生成当天历史快照并提交到仓库。来源内容改变时，它会建立一个 GitHub Issue，标明国内/全球范围及需要人工复核的页面。

工作流不会让模型依据网页变化自动猜测新的提醒数量。提醒分类属于研究判断，自动改数容易制造虚假精度；正确流程是复核 Issue、修改 `data/apps.json` 的分类条目，再运行工作流。排名和与昨日相比的升降会自动重算。

部分网站会阻止 GitHub 服务器抓取。失败来源会在 `data/source-status.json` 标注，已有研究数据会保留，不会被删除或归零。

## 文件结构

```text
index.html                 V1 正式首页
global.html                全球 63 项研究页
index-v0.html              保留的 V0 页面
index-v1.html              V1 设计源页
assets/logos/              65 个在用应用图标（目录可保留历史素材）
assets/logos/global/       63 个全球 App 官方商店图标
data/apps.json             人工核实的分类、条目与来源
data/global-apps.json      全球分类、条目、严格使用指标与来源
data/app-data.js           自动生成的网页数据
data/global-app-data.js    自动生成的全球网页数据
data/history/              每日排名快照
data/history-global/       全球每日排名快照
scripts/update-data.mjs    来源监测、计数、排名与快照生成器
.github/workflows/         每日更新与 Pages 部署工作流
```

## 修改研究数据

在 `data/apps.json` 中增删某个分类的 `items` 即可改变计数。每个来源至少保留标题、网址和来源类型。修改后运行 `npm run update:offline`，确认页面数据，再提交到 GitHub。
