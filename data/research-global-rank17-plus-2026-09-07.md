# 第 17、18 名及第 20 名以后：使用行为补充研究

名单以本轮开始时的 55 项通知排行榜为准。重点补日均时长和日均打开，不改通知场景或 MAU。网页排序会纳入新值，但通知数量主榜不会因此变化。

## 本轮写入：12 个缺失字段

| 原排名 | 应用 | 新增日均时长 | 新增日均打开 | 范围 |
| --- | --- | --- | --- | --- |
| 20 | Spotify | 约 58 分钟 | 2.01 次 | 时长：2021 德国移动端图表；打开：2016 英国 Android |
| 26 | Amazon Music | 约 43 分钟 | 仍缺失 | 2021 德国移动端图表 |
| 30 | SoundCloud | 约 32 分钟 | 仍缺失 | 2021 德国移动端图表 |
| 31 | YouTube Music | 约 25 分钟 | 仍缺失 | 2021 德国移动端图表 |
| 35 | Disney+ | 保留已有值 | 2.7 次 | 2019 上线四周，已上线五国，每 DAU 会话 |
| 38 | Max | 63.4 分钟 | 仍缺失 | 2026 年 1—2 月美国手机端，每 DAU |
| 46 | TuneIn Radio | 约 38 分钟 | 仍缺失 | 2021 德国移动端图表 |
| 49 | Claude | 34.7 分钟 | 仍缺失 | 2026-01 每 DAU；正文时长段未单独交代地区 |
| 50 | Grok | 近 22 分钟 | 仍缺失 | 2026-02 每 DAU；正文时长段未单独交代地区 |
| 51 | Perplexity | 15 分钟 | 仍缺失 | 2026-03 美国市场手机日活分析 |
| 52 | Microsoft Copilot | 27.2 分钟 | 仍缺失 | 2026-01 消费者手机 App，每 DAU；地区未单独明确 |

新增时长 10 项、打开 2 项，涉及 11 个 App。整个全球版覆盖变为时长 30/55、打开 19/55；MAU 仍为 25/55。

## 主要来源与边界

1. [WIK 德国音视频研究](https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf)：2022-12 出版，图 9，印刷页 14。已下载并渲染核对。图只有坐标刻度，无逐柱精确标签，按整数分钟读图并保留“约”。研究的移动端包含 Android/iOS，未单独剔除平板。不是当前全球或仅手机前台屏幕使用时间。
2. [Ofcom CMR 2017 互联网章节](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/cmr/cmr17/uk/uk-internet-online.pdf)：印刷页 166—167 明确给出 Spotify 每日 2.01 次；总行为面板 1,200 名，2016-09-27 至 12-23。仅自愿参与的英国 Android 样本，不计后台或不足 5 秒的会话。
3. [Apptopia Disney+ 四周报告](https://engage.apptopia.com/hubfs/Disney%2B/New%20Disney%2B%20Month.pdf)：第 5 页明确为每 DAU 2.7 次。仅当时已上线市场，不复制此值给 Netflix。
4. [Apptopia 2026 Q1 流媒体研究](https://apptopia.com/en/insights/investor-note-mid-q1-2026-look-at-potential-and-peril-for-streamers-nflx-wbd-cmcsa-dis/)：美国手机端，截至 2 月。Max 63.4 为全体日活均值，不是青少年或重度子群。虽另有 Netflix/Disney+ 新数据，但本轮只补缺，不用不同分母的新值覆盖已有时长。
5. [Apptopia 2 月简报](https://apptopia.com/en/insights/gen-ai-chatbots-february-2026-apptopia-data-brief/)、[3 月简报](https://apptopia.com/en/insights/gen-ai-chatbots-march-2026-apptopia-data-brief-claude-gets-traction/)、[4 月简报](https://apptopia.com/en/insights/gen-ai-chatbots-april-2026-apptopia-data-brief-chatgpt-drops-below-40-market-share/)：采用明确写出的全体日活行为值；不使用 top 10% Power Users 的 120、139、154、186 分钟。地区没有在时长段明确的记录已标明，不包装成全球均值。

网页每个新增字段有独立数据期和口径，MAU 原有日期保留，展开详情列出来源与说明。图表约值进入时长排序，但不应解读为精确测量排名；每 DAU 与月均除自然日也不是同一分母。

## 第 17、18 名的检索结论

- Slack：[官方页面](https://slack.com/intl/en-in/blog/productivity/whats-new-in-slack-ipad-app-split-screen) 提到每天 90 分钟活跃工作，但覆盖跨设备，没有拆出手机端，因此两项仍留空。
- Uber：[官方工程文章](https://www.uber.com/us/en/blog/unified-session-for-analytical-events/) 是系统总会话与日志事件；Ofcom 报告展示时段分布而非人均日次数；司机研究是司机工作会话，网页分析是网站单次访问。这些均不能换成乘客手机 App 的日均时长或日均打开。

## 其他命中但未采用的线索

- Spotify 的 Verto 调查：8.4 次属于自报每日用户子群、活跃日、跨设备，未采用。
- Google Maps：Ofcom 2025 月时长 153 分钟包含网站和跨设备，不填手机专属指标。
- Clubhouse：官方“每天超过一小时”是早期听众口径的下限，不填全体用户精确平均数。
- Grubhub/Yelp/PayPal/票务应用：网站单次访问、订单/送达时间、交易频次不能当作 App 日均；PayPal 的会话图表本轮未取得可确认数值。
- Fitbit：期刊多为特定干预受试者、佩戴时长或合并 App/网站频次，没有提取为大众 App 日均。
- CapCut、GitHub、Zoom、Notion、Priceline、Ticketmaster、StubHub、Amazon Alexa、Flickr、iHeartRadio、YouTube TV、AccuWeather、Meta AI、Firefox、Safari、VLC 仍未补齐相应行为项。搜索命中包括行业总量、付费入口、子群、增长率及功能文档；本轮不宣称这些产品从未公开过数据。

此次为定向增补，不是所有旧值的全面重审。离线构建只更新本地网页，不代表抓取了全部来源；没有对 GitHub 仓库进行上传或写入。
