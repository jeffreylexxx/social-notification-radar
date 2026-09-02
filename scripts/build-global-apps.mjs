import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await fs.readFile(path.join(root, "data", "global-app-store.json"), "utf8"));
const storeById = new Map(manifest.map(item => [item.id, item]));

// The target count is the number of independently recognisable reminder scenarios,
// not the number of operating-system notification channels or settings toggles.
const apps = [
  ["instagram","Instagram","社交与社区",14,"social"],["facebook","Facebook","社交与社区",15,"social"],
  ["x","X（Twitter）","社交与社区",15,"social"],["whatsapp","WhatsApp","即时通讯",9,"message"],
  ["youtube","YouTube","影音与音频",11,"video"],["gmail","Gmail","邮件与通讯",8,"email"],
  ["google-photos","Google 相册","云存储与工具",15,"photo"],["google-ads","Google Ads","商业与管理",12,"ads"],
  ["messenger","Messenger","即时通讯",10,"message"],["grok","Grok","AI 助手",5,"ai"],
  ["discord","Discord","即时通讯",10,"message"],["amazon-alexa","Amazon Alexa","智能生活",7,"device"],
  ["spotify","Spotify","影音与音频",9,"audio"],["telegram","Telegram","即时通讯",10,"message"],
  ["line","LINE","即时通讯",11,"message"],["chatgpt","ChatGPT","AI 助手",6,"ai"],
  ["perplexity","Perplexity","AI 助手",5,"ai"],["claude","Claude","AI 助手",5,"ai"],
  ["tiktok","TikTok","短视频与资讯",15,"social"],["fitbit","Fitbit","生活与健康",6,"health"],
  ["iheartradio","iHeartRadio","影音与音频",7,"audio"],["amazon-music","Amazon Music","影音与音频",8,"audio"],
  ["youtube-music","YouTube Music","影音与音频",8,"audio"],["copilot","Microsoft Copilot","AI 助手",5,"ai"],
  ["onedrive","OneDrive","云存储与工具",6,"cloud"],["threads","Threads","社交与社区",12,"social"],
  ["linkedin","LinkedIn","社交与社区",13,"career"],["github","GitHub","协作与办公",8,"code"],
  ["chrome","Google Chrome","浏览器",7,"browser"],["accuweather","AccuWeather","生活与健康",6,"weather"],
  ["soundcloud","SoundCloud","影音与音频",8,"audio"],["capcut","CapCut","创作与工具",8,"creator"],
  ["slack","Slack","协作与办公",10,"work"],["notion","Notion","协作与办公",7,"work"],
  ["firefox","Firefox","浏览器",5,"browser"],["edge","Microsoft Edge","浏览器",6,"browser"],
  ["safari","Safari","浏览器",4,"browser"],["vlc","VLC Media Player","影音与音频",3,"player"],
  ["youtube-tv","YouTube TV","影音与音频",7,"stream"],["snapchat","Snapchat","社交与社区",12,"social"],
  ["clubhouse","Clubhouse","社交与社区",8,"community"],["paypal","PayPal","支付与金融",8,"pay"],
  ["tunein","TuneIn Radio","影音与音频",6,"audio"],["aol-mail","AOL Mail","邮件与通讯",6,"email"],
  ["microsoft-teams","Microsoft Teams","协作与办公",8,"work"],["yelp","Yelp","本地生活",9,"local"],
  ["ticketmaster","Ticketmaster","票务与旅行",7,"ticket"],["priceline","Priceline","票务与旅行",8,"travel"],
  ["stubhub","StubHub","票务与旅行",7,"ticket"],["grubhub","Grubhub","本地生活",9,"delivery"],
  ["uber","Uber","出行与地图",10,"ride"],["google-maps","Google Maps","出行与地图",8,"map"],
  ["netflix","Netflix","影音与音频",7,"stream"],["flickr","Flickr","社交与社区",7,"photo"],
  ["tumblr","Tumblr","社交与社区",11,"social"],["reddit","Reddit","社交与社区",13,"social"],
  ["max","Max","影音与音频",7,"stream"],["tinder","Tinder","社交与社区",10,"dating"],
  ["disney-plus","Disney+","影音与音频",7,"stream"],["gemini","Gemini","AI 助手",5,"ai"],
  ["meta-ai","Meta AI","AI 助手",5,"ai"],["zoom","Zoom","协作与办公",8,"work"],
  ["temu","Temu","购物与电商",12,"commerce"]
];

const profiles = {
  social: {
    "互动反馈": ["点赞","评论","评论回复","提及","内容被转发","内容被收藏"],
    "关系与消息": ["新关注者","关注请求","私信","群聊消息","联系人加入"],
    "内容与直播": ["关注账号发布内容","直播开始","内容推荐","热门趋势","创作者更新"],
    "服务与安全": ["账号安全","规则与系统更新","活动或营销"]
  },
  message: {
    "消息": ["单聊新消息","群聊新消息","消息回复","消息反应","@提及","频道或公告更新"],
    "通话与活动": ["语音来电","视频来电","未接来电","群组活动或事件"],
    "关系与服务": ["联系人加入","好友请求","账号或安全提醒","产品更新"]
  },
  video: {
    "订阅内容": ["订阅频道上传长视频","订阅频道发布短视频","直播开始","首映开始"],
    "互动": ["评论回复","评论点赞","提及","频道动态"],
    "推荐与服务": ["个性化推荐","观看提醒","产品更新","账号安全"]
  },
  email: {
    "邮件": ["所有新邮件","重要邮件","主要收件箱邮件","指定发件人邮件"],
    "协作与日程": ["日历或邀请","共享内容更新"],
    "账号服务": ["存储空间提醒","账号安全"]
  },
  photo: {
    "共享活动": ["收到共享相册","新成员加入共享相册","共享相册新照片","照片评论","照片或相册获赞","收到新会话","会话回复","会话获赞"],
    "回忆与创作": ["时间型回忆","主题回忆","新创作可用"],
    "伙伴与存储": ["伙伴共享邀请","伙伴接受邀请","伙伴分享新照片","存储空间状态"]
  },
  ads: {
    "投放状态": ["广告未获批准或政策警报","广告系列状态变化","预算受限","自定义状态阈值"],
    "效果": ["效果指标变化","每周效果摘要","自定义指标阈值","优化建议"],
    "账户服务": ["账单提醒","报告可用","产品新功能","专家指导"]
  },
  ai: {
    "任务与内容": ["后台任务完成","生成结果就绪","共享或协作更新"],
    "账号与产品": ["账号安全","服务状态","产品功能更新","订阅或额度提醒"]
  },
  device: {"设备与家庭":["设备状态变化","门铃或摄像头事件","提醒事项或计时器","智能家居例程"],"服务":["购物或配送更新","账号安全","功能更新"]},
  audio: {"内容更新":["关注艺人发布内容","关注播客更新","新节目或电台更新","直播节目开始"],"推荐与社交":["个性化推荐","好友或关注动态","榜单或精选更新"],"服务":["下载完成","订阅或账号提醒","活动营销"]},
  health: {"健康目标":["活动目标达成","久坐提醒","睡眠或恢复提醒"],"设备与社交":["设备同步或电量","好友挑战更新","账号或服务提醒"]},
  cloud: {"文件活动":["共享邀请","他人评论或提及","共享文件更改"],"同步与服务":["上传或同步完成","存储空间提醒","账号安全"]},
  career: {"关系互动":["连接邀请","新关注者","个人资料被查看","帖子反应","帖子评论","提及"],"消息与机会":["私信","职位推荐","职位申请更新","招聘者动态"],"内容与服务":["关注内容更新","行业资讯","账号安全"]},
  code: {"协作":["被指派 Issue","被指派 Pull Request","提及","审查请求","Issue 评论","Pull Request 评论"],"仓库":["工作流运行结果","Release 发布","安全警报"]},
  browser: {"网页与下载":["网站推送","下载完成","下载失败"],"账号与安全":["密码或泄露警报","同步异常","浏览器更新","账号安全"]},
  weather: {"恶劣天气":["严重天气预警","降雨或降雪提醒","雷暴或大风提醒"],"日常预报":["每日预报","温度变化","空气质量"]},
  creator: {"创作任务":["导出完成","云项目同步","共享项目更新"],"模板与社区":["模板或素材更新","互动反馈","创作推荐"],"服务":["订阅权益","版本更新"]},
  work: {"沟通":["直接消息","频道或群组消息","@提及","消息回复","消息反应"],"协作":["任务被指派","文档评论","会议开始","日程变更"],"服务":["工作区公告","账号安全","集成应用更新"]},
  weather: {"恶劣天气":["严重天气预警","降雨或降雪提醒","雷暴或大风提醒"],"日常预报":["每日预报","温度变化","空气质量"]},
  player: {"播放与服务":["媒体扫描完成","下载完成","版本更新"]},
  stream: {"内容":["新剧集上线","新电影上线","关注内容更新","直播或体育赛事开始"],"观看与服务":["继续观看提醒","下载完成","订阅或账号提醒","推荐内容"]},
  community: {"房间":["关注者开房","预定房间开始","被邀请发言","房间提醒"],"互动":["新关注者","私信","提及","社区活动"]},
  pay: {"资金交易":["付款完成","收款到账","退款","转账状态","争议或拒付"],"账户":["登录或安全提醒","余额或卡片提醒","优惠活动"]},
  local: {"互动":["评论获赞","评论回复","私信","好友活动"],"本地服务":["预订提醒","候位状态","商家回复","附近推荐","优惠活动"]},
  ticket: {"票务":["开售提醒","活动临近","电子票可用","票务转让状态","活动变更或取消"],"服务":["付款或退款","推荐活动"]},
  travel: {"行程":["价格变化","预订确认","入住或出发提醒","航班状态","行程变更","取消或退款"],"服务":["优惠活动","账户安全"]},
  delivery: {"订单":["订单确认","商家接单","制作中","骑手取餐","配送进度","即将送达","送达完成"],"售后与营销":["退款或客服更新","优惠活动"]},
  ride: {"行程":["司机接单","司机即将到达","司机已到达","行程开始","行程完成","行程变更或取消"],"安全与交易":["安全提醒","付款或收据","失物或客服更新","优惠活动"]},
  map: {"导航":["出发时间","交通变化","路线变更","到站或下车提醒"],"地点与共享":["位置共享更新","商家或地点更新","本地推荐","离线地图更新"]},
  dating: {"匹配互动":["新匹配","新消息","消息反应","资料获赞","超级喜欢"],"推荐与活动":["新推荐对象","位置或活动推荐","配对即将过期"],"安全与服务":["账号安全","订阅或营销"]},
  commerce: {"订单物流":["下单成功","付款状态","卖家发货","物流运输","派送中","签收完成","退款或退货"],"互动与价格":["客服消息","降价提醒","补货提醒","购物车提醒","优惠活动","直播或店铺更新"]}
};

const extraSources = {
  x: ["X 手机通知帮助","https://help.x.com/en/managing-your-account/notifications-on-mobile-devices","官方帮助","官方列出提及、回复、转帖、点赞、关注、私信、新闻、Spaces 等通知类型。"],
  whatsapp: ["WhatsApp 通知管理","https://faq.whatsapp.com/797069521522888/","官方帮助","官方说明单聊、群聊、通话、反应、提及和未读角标等通知。"],
  youtube: ["YouTube 通知管理","https://support.google.com/youtube/answer/3382248?hl=en","官方帮助","官方说明订阅上传、直播、Shorts、推荐及通知中心。"],
  gmail: ["Gmail 通知设置","https://support.google.com/mail/answer/1075549?hl=en","官方帮助","官方区分所有新邮件、重要邮件与主要收件箱通知。"],
  "google-photos": ["Google 相册动态类型","https://support.google.com/photos/answer/15604413?hl=en","官方帮助","官方逐项列出共享相册、会话、伙伴共享和存储状态动态。"],
  "google-ads": ["Google Ads 通知","https://support.google.com/google-ads/answer/9972066?hl=en","官方帮助","官方说明效果变化、新功能、优化建议及自定义状态通知。"]
  ,slack: ["Slack 通知指南","https://slack.com/help/articles/201355156-Configure-your-Slack-notifications","官方帮助","官方列出私信、提及、关键词、线程回复、Huddle、邀请和到期提醒。"]
  ,"microsoft-teams": ["Microsoft Teams 通知管理","https://support.microsoft.com/en-US/teams/notifications-settings/manage-notifications-in-microsoft-teams","官方帮助","官方列出聊天、频道、提及、会议、通话、状态和应用通知。"]
  ,snapchat: ["Snapchat 通知控制","https://help.snapchat.com/hc/en-us/articles/7012316327444-How-do-I-control-my-Snapchat-notifications-on-iOS","官方帮助","官方说明逐类型通知开关及关注对象的 Story 通知。"]
  ,"google-maps": ["Google Maps 通知设置","https://support.google.com/maps/answer/6149565?hl=en","官方帮助","官方列出交通、地点贡献、评论回复、事件、危机和位置共享等提醒。"]
};

const usage = {
  instagram: [73,12.3,300000,"2025-08 / MAU 2025-09","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb App Intelligence 的全球 Android 样本（不含中国）；MAU 由 Meta 另页披露为 30 亿。"],
  facebook: [67,9.1,305000,"2025-08 / MAU 2023 Q3","Android 全球日均；MAU 为官方历史值","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb 全球 Android 样本；Meta 已停止披露 Facebook 单产品 MAU，保留 2023 Q3 官方历史值 30.5 亿。"],
  x: [28,6.8,null,"2025-08 / 移动 DAU 2026-01-07","Android 全球日均；移动 DAU 代理","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb App Intelligence 全球 Android 样本，不含中国；Similarweb 另估算 iOS 与 Android 合计移动 DAU 约 1.25 亿，DAU 不写入 MAU 排序。","1.25 亿移动 DAU"],
  whatsapp: [59,20.7,300000,"2025-08 / MAU 2025-04","Android 全球日均；MAU 官方电话会披露","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与日均打开来自 Similarweb 全球 Android 样本；Meta CEO 在 2025 Q1 业绩电话会上披露 WhatsApp 月活超过 30 亿。"],
  youtube: [85,5.9,200000,"2025-08 / 月用户历史下限","Android 全球日均；月用户下限","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开来自 Similarweb 全球 Android 样本；20 亿为 YouTube 官方登录月用户历史下限。"],
  messenger: [19,9.1,null,"2025-08","Android 全球日均","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb App Intelligence 全球 Android 样本，不含中国。"],
  tiktok: [97,10,200000,"2025-08 / MAU 2026 Q1","Android 全球日均；Sensor Tower 全球 App MAU","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb App Intelligence 全球 Android 样本，不含中国；Sensor Tower 数据经行业媒体报道显示 2026 Q1 全球移动 App MAU 突破 20 亿。"],
  spotify: [null,null,77700,"2026 Q2","MAU","https://newsroom.spotify.com/2026-08-04/spotify-q2-2026-earnings/","Spotify 2026 Q2 业绩","官方披露 MAU 7.77 亿。"],
  telegram: [30,9.9,100000,"2025-08 / MAU 2025","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb 全球 Android 样本；Telegram 官方称 2025 年 MAU 超过 10 亿。"],
  discord: [15,7.3,20000,"2025-08 / MAU 2025","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb 全球 Android 样本；Discord 官方披露 MAU 超过 2 亿。"],
  line: [null,null,20000,"公开页面当前口径","MAU 约值","https://www.linecorp.com/en/csr/","LINE Social Responsibility","LINE 官方页面称全球约 2 亿 MAU。"],
  threads: [4,1.9,50000,"2025-08 / MAU 2026-06","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb 全球 Android 样本；Meta 2026-06 披露 Threads 达 5 亿 MAU。"],
  linkedin: [6,3.2,null,"2025-08 / 会员规模 2023–2025","Android 全球日均；会员账户数","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb 全球 Android 样本；会员数不是 App MAU。","超过 10 亿会员"],
  snapchat: [17,6.5,94600,"2025-08 / MAU 2025 Q4","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb 全球 Android 样本；Snap 2025 Q4 披露 MAU 9.46 亿。"],
  reddit: [19,4.7,null,"2025-08 / WAUq 2026 Q2","Android 全球日均；周活独立用户代理","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb App Intelligence 全球 Android 样本，不含中国；Reddit 2026 Q2 披露 WAUq 5.146 亿，覆盖网页与 App，故不写入 MAU 排序。","5.15 亿周活独立用户（跨网页/App）"],
  chatgpt: [16,7.8,100000,"H1 2025 / MAU 2026-05","全球 iOS + Google Play；App MAU","https://investgame.net/wp-content/uploads/2025/07/sensor_tower__state_of_ai_apps_report_2025.pdf","Sensor Tower State of AI Apps 2025","日均时长与打开次数为 H1 2025 全球移动 App 用户均值；Sensor Tower 2026-05 披露移动 App MAU 达 10 亿。"],
  gemini: [1.8,0.9,100000,"2025-07 / MAU 2026-08","美国移动 App 周均换算日均；App MAU 官方","https://sensortower.com/blog/top-chatgpt-competitors","Sensor Tower：ChatGPT 竞争应用","Sensor Tower 披露 2025 年 7 月中旬美国 Gemini App 用户每周约 12.5 分钟、6.5 次；网页按 12.5÷7=1.8 分钟/日、6.5÷7=0.9 次/日换算。MAU 另由 Google 官方披露为 10 亿。"],
  grok: [null,null,5000,"2026 Q2","Sensor Tower 全球移动 App MAU","https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html","EL PAÍS / EFE 引述 Sensor Tower","报道列出 Grok 全球移动 App MAU 5,000 万。"],
  perplexity: [null,null,4400,"2026 Q2","Sensor Tower 全球移动 App MAU","https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html","EL PAÍS / EFE 引述 Sensor Tower","报道列出 Perplexity 全球移动 App MAU 4,400 万。"],
  claude: [null,null,5600,"2026 Q2","Sensor Tower 全球移动 App MAU","https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html","EL PAÍS / EFE 引述 Sensor Tower","报道列出 Claude 全球移动 App MAU 5,600 万。"],
  copilot: [null,null,3100,"2026 Q2","Sensor Tower 全球移动 App MAU","https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html","EL PAÍS / EFE 引述 Sensor Tower","报道列出 Microsoft Copilot 全球移动 App MAU 3,100 万。"],
  "meta-ai": [null,null,6100,"2026 Q2","Sensor Tower 全球移动 App MAU","https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html","EL PAÍS / EFE 引述 Sensor Tower","报道列出 Meta AI 全球移动 App MAU 6,100 万。"],
  capcut: [null,null,32300,"2024-07（历史数据）","移动 App MAU（二手行业报告）","https://www.scmp.com/tech/big-tech/article/3275336/bytedances-capcut-doubao-top-global-ai-app-downloads-outpacing-chatgpt-report","南华早报引述 QuestMobile","报道明确列出 CapCut 2024-07 全球 MAU 3.23 亿；因时间较早，标记为历史数据。"],
  yelp: [null,null,2800,"2025 月均","App 月活独立设备","https://www.sec.gov/Archives/edgar/data/1345016/000134501626000019/yelp-20251231.htm","Yelp 2025 Form 10-K","官方口径为达到最低参与门槛的 App 月活独立设备，全年月均 2,800.9 万；设备数不完全等同人数。"],
  temu: [3.3,null,46700,"2023 Q4（时长历史值）/ 2026 Q2 MAU","美国周均换算日均；Sensor Tower 全球 App MAU（二手转述）","https://www.aol.com/news/chinese-shopping-app-temu-microsoft-233940417.html","NBC News / AOL 引述 Sensor Tower","Sensor Tower 估算 2023 年末美国用户每周使用 Temu 23 分钟，按 23÷7=3.3 分钟/日换算并标记历史值；2026 Q2 全球 MAU 4.67 亿来自另一篇行业报道。"],
  ticketmaster: [null,null,3000,"2025-09","全球 Ticketmaster App MAU 官方","https://business.ticketmaster.com/ticketing-straight-to-your-app/","Ticketmaster Business","官方披露 Ticketmaster App 每月有超过 3,000 万活跃用户，覆盖 iOS、Android 与 21 个市场。"],
  clubhouse: [null,null,1000,"2024 年初（行业估算）","全球 App MAU（二手行业估算）","https://profiletree.com/clubhouse-social-media-app/","ProfileTree 引述 Business of Apps","报道引述 Business of Apps，估算 Clubhouse 2024 年初约有 1,000 万 MAU；公司未公开同期数据，故标记为行业估算。"],
  flickr: [null,null,null,"2026-01 至 2026-07","欧盟平台月活代理","https://www.flickrhelp.com/hc/en-us/articles/16048737757716-Digital-Services-Act-Information-on-Active-Monthly-Users-in-the-European-Union","Flickr DSA 披露","Flickr 依据欧盟 DSA 披露该期间欧盟平均月活约 19.7 万；仅为欧盟且覆盖平台，不作为全球手机 App MAU 排序值。","19.7 万欧盟平台 MAU"],
  fitbit: [null,null,null,"2017（历史数据）","活跃用户（未限定手机 App MAU）","https://blog.google/products-and-platforms/devices/fitbit/fitbit-community-grows-25m-active-users/","Fitbit 官方博客","Fitbit 官方当年披露活跃用户超过 2,500 万，但时间较早且未限定手机 App 月活，仅作历史代理展示。","2,500 万+活跃用户（2017）"],
  grubhub: [null,null,null,"2024","North America 活跃消费者（非单 App MAU）","https://s205.q4cdn.com/266311280/files/doc_financials/2024/ar/AR2024_JET-com.pdf","Just Eat Takeaway.com 2024 年报","年报披露 North America 分部 2024 年有 2,200 万活跃消费者；该分部以 Grubhub 为核心，但口径不是手机 App MAU，故仅作代理展示。","2,200 万活跃消费者（北美分部）"],
  zoom: [null,null,null,"2020-04（历史数据）","每日会议参与人次（非独立用户）","https://investors.zoom.us/static-files/0229c042-e707-4b11-9110-6ea1e9ce31b4","Zoom FY2021 股东信","Zoom 当时披露每日会议参与人次平均达到 3 亿；同一人可重复计数，且数据较旧，不写入 MAU 排序。","3 亿每日会议参与人次（2020）"],
  vlc: [null,null,null,"2026-08","累计下载量（非活跃用户）","https://techcrunch.com/2026/08/31/vlc-crosses-7-billion-downloads/","TechCrunch","VLC 跨平台累计下载突破 70 亿；下载量不等于用户或 MAU，仅用于说明产品规模。","70 亿累计下载（跨平台）"],
  gmail: [null,null,null,"2026-01","产品用户规模（跨端代理）","https://blog.google/products-and-platforms/products/gmail/gmail-is-entering-the-gemini-era/","Google：Gmail 进入 Gemini 时代","Google 披露 30 亿用户依赖 Gmail；未限定手机 App，故不写入严格 MAU 排序。","30 亿产品用户（跨端）"],
  "google-photos": [null,null,null,"2025-05","产品月用户（跨端代理）","https://blog.google/products-and-platforms/products/photos/google-photos-10-years-tips-tricks/","Google Photos 十周年","Google 披露每月超过 15 亿人使用 Google Photos；未限定手机 App，故不写入严格 MAU 排序。","超过 15 亿月用户（跨端）"],
  "amazon-alexa": [null,null,null,"2025 股东信","活跃端点（非用户）","https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-2025-letter-to-shareholders","Amazon CEO 2025 股东信","官方披露 Alexa 在设备、汽车、办公与影音端共有 6 亿活跃端点；不是 App MAU。","6 亿活跃端点"],
  firefox: [null,null,null,"2026 页面当前值","跨桌面与移动月活","https://www.mozilla.org/en-US/advertising/","Mozilla Advertising","Mozilla 披露 Firefox 全球月活超过 2.1 亿，但未拆分手机 App，故不写入严格 MAU 排序。","2.1 亿+月活（跨端）"],
  accuweather: [null,null,null,"2025-07","跨网页与 App 月访客","https://advertising.accuweather.com/","AccuWeather Advertising","官方广告页披露 2 亿全球月度独立访客与人均日访 3 次，但未限定手机 App，故仅作代理展示。","2 亿月度访客（跨端）"],
  "youtube-music": [null,null,null,"截至 2024-12","订阅规模（非 MAU）","https://blog.youtube/inside-youtube/our-big-bets-for-2025/","YouTube CEO 2025 展望","YouTube Music 与 Premium 合计超过 1 亿订阅，含试用；不是 App MAU。","1 亿+订阅（含试用）"],
  "youtube-tv": [null,null,null,"截至 2024-12","订阅规模（非 MAU）","https://blog.youtube/inside-youtube/our-big-bets-for-2025/","YouTube CEO 2025 展望","YouTube TV 超过 800 万订阅；不是 App MAU。","800 万+订阅"],
  "disney-plus": [null,null,null,"2025 Q2","付费订阅（非 MAU）","https://investors.thewaltdisneycompany.com/news/news-details/2025/The-Walt-Disney-Company-Reports-Second-Quarter-and-Six-Months-Earnings-for-Fiscal-2025-05-07-2025/default.aspx","Disney 2025 Q2 业绩","官方披露 Disney+ 付费订阅 1.26 亿；订阅账户不是 App MAU。","1.26 亿付费订阅"],
  tumblr: [null,null,null,"2025-03","平台 MAU（跨网页与 App）","https://advertise.tumblr.com/audience/","Tumblr Ads Audience","Tumblr 内部数据披露全球 MAU 9,500 万，但未拆分手机 App，故不写入严格 App MAU 排序。","9,500 万平台 MAU"],
  uber: [null,null,null,"2026 Q2","平台 MAPC（非单 App MAU）","https://investor.uber.com/news-events/news/press-release-details/2026/Uber-Announces-Results-for-Second-Quarter-2026/default.aspx","Uber 2026 Q2 业绩","官方披露出行与配送平台月活消费者 2.08 亿；覆盖多个业务，不等同 Uber 单 App MAU。","2.08 亿月活平台消费者"],
  tinder: [null,null,5000,"官网当前值（抓取于 2026-09）","每月 App 用户","https://www.tinderpressroom.com/about","Tinder Newsroom · About Tinder","Tinder 官方称 App 每月服务约 5,000 万用户，覆盖 190 个国家；按其明确的每月 App 用户口径写入。"],
  notion: [null,null,null,"2024-08","累计/当前用户规模（非 MAU）","https://www.notion.com/blog/100-million-of-you","Notion：100 Million of You","Notion 官方称 2024-08 用户数突破 1 亿，但未称月活、也未限定手机 App，故仅作代理展示。","1 亿+用户"],
  chrome: [null,null,null,"2025 白皮书","浏览器用户规模（跨端）","https://services.google.com/fh/files/misc/bce-protected-profiles-whitepaper.pdf","Google Chrome Enterprise 白皮书","Google 材料称 Chrome 超过 20 亿用户；未拆分手机 App 或 MAU，故仅作代理展示。","20 亿+浏览器用户（跨端）"],
  iheartradio: [null,null,null,"官网当前值（抓取于 2026-09）","注册用户（跨端）","https://www.iheartmedia.com/digital","iHeartMedia · iHeartRadio","iHeartRadio 官方称 App 超过 1.88 亿注册用户，并覆盖 500 多个平台；注册量不是 MAU。","1.88 亿注册用户"],
  max: [null,null,null,"2025 Q4","WBD 流媒体订阅（非单 App MAU）","https://s201.q4cdn.com/336605034/files/doc_earnings/2025/q4/earnings-result/WBD-4Q25-Shareholder-Letter.pdf","WBD 2025 Q4 股东信","WBD 流媒体板块（含 HBO Max 与 discovery+）期末约 1.32 亿订阅；不是 Max 单 App MAU。","约 1.32 亿流媒体订阅"],
  tunein: [null,null,null,"2025-11","月活听众（跨 200+ 平台）","https://corporate.stingray.com/acquisitions/stingray-acquires-tunein/","Stingray 收购 TuneIn 公告","收购方官方公告称 TuneIn 全球每月活跃听众超过 7,500 万，但覆盖车机、网页及连接设备，故不写入手机 App MAU 排序。","7,500 万+月活听众（跨端）"],
  soundcloud: [null,null,null,"2014-11（历史数据）","月度独立听众（跨端）","https://www.wmg.com/news/warner-music-group-and-soundcloud-announce-groundbreaking-partnership-20036","Warner Music 与 SoundCloud 合作公告","公告称 SoundCloud 当时每月有 1.75 亿独立听众；数据较旧且未限定手机 App，仅作历史代理展示。","1.75 亿月度听众（2014）"],
  "aol-mail": [null,null,null,"官网当前值（抓取于 2026-09）","AOL 跨产品月用户 / 邮件日用户","https://www.aol.com/about-us/","AOL · About Us","AOL 官方称全站每月 3,000 万用户、每天 300 万人查看邮件；未披露 AOL Mail 手机 App MAU，故仅作代理展示。","300 万邮件日用户（跨端）"],
  stubhub: [null,null,null,"2026-03","全球注册用户（非 MAU）","https://newsroom.stubhub.com/2026/03/18/stubhub-launches-distribution-manager-an-ai-powered-tool-for-artists-teams-and-venues/","StubHub Newsroom","StubHub 官方披露全球注册用户超过 1.25 亿；注册量不是手机 App MAU。","1.25 亿+注册用户"],
  "google-maps": [null,null,200000,"2024 Q3","月用户里程碑","https://abc.xyz/2024-q3-earnings-call/","Alphabet 2024 Q3 Earnings Call","Alphabet 披露 Google Maps 超过 20 亿月用户；为跨端产品口径。"],
  github: [null,null,null,"2025","开发者账户数","https://github.blog/news-insights/octoverse/","GitHub Octoverse","开发者账户不是 App MAU，仅作规模参考。","超过 1.5 亿开发者"],
  netflix: [null,null,null,"2024 Q4","付费会员数","https://ir.netflix.net/financials/quarterly-earnings/default.aspx","Netflix 投资者关系","订阅会员不是 App MAU，不参与 MAU 并列排序。","3.016 亿付费会员"],
  paypal: [null,null,null,"2024","活跃账户","https://investor.pypl.com/financials/annual-reports-and-proxies/default.aspx","PayPal 年报","活跃账户可能含商户且不是 App MAU。","约 4.34 亿活跃账户"],
  "microsoft-teams": [null,null,null,"2023","月活用户（跨端）","https://www.microsoft.com/en-us/microsoft-365/blog/2023/10/31/introducing-new-microsoft-teams-now-available-for-windows-and-mac/","Microsoft Teams 官方博客","跨桌面、网页和移动端产品 MAU，不等同手机 App MAU。","3.2 亿月活用户"]
};

const additionalEvidence = {
  chatgpt:["ChatGPT 移动 App 达 10 亿 MAU","https://sensortower.com/press/sensor-tower-state-of-ai-2026-report-global-time-spent-on-generative-ai-apps-projected-to-more-than-double-year-over-year","行业报告","Sensor Tower 2026-06 新闻稿确认 ChatGPT 于 2026-05 成为最快达到 10 亿 MAU 的移动 App。"],
  instagram:["Instagram 30 亿 MAU","https://about.fb.com/news/2025/09/in-india-instagram-debuts-a-reels-first-experience-for-its-mobile-app/","官方规模数据","Meta 2025-09 明确披露 Instagram 30 亿 MAU。"],
  facebook:["Facebook 2023 Q3 MAU","https://investor.fb.com/files/doc_earnings/2023/q3/earnings-result/Meta-09-30-2022-Exhibit-99-1-FINAL.pdf","官方财报","最后阶段单产品官方值为 30.5 亿 MAU；之后停止披露。"],
  whatsapp:["WhatsApp 超过 30 亿 MAU","https://techcrunch.com/2025/05/01/whatsapp-now-has-more-than-3-billion-users/","电话会披露 / 新闻核验","Meta CEO 在 2025 Q1 业绩电话会上明确称 WhatsApp 每月用户超过 30 亿。"],
  tiktok:["TikTok 全球 App MAU 突破 20 亿","https://jingdaily.com/intels/2026-04/29/tiktok-tops-2-billion-users-shop-gmv-climbs-94-in-2025","行业报告转述","Jing Daily 引述 Sensor Tower，称 TikTok 2026 Q1 全球移动 App MAU 首次超过 20 亿。"],
  x:["X 移动 App DAU","https://cincodias.elpais.com/smartlife/lifestyle/2026-01-19/sorpaso-la-app-de-threads-para-moviles-ya-tiene-mas-usuarios-que-x.html","行业估算代理","报道引述 Similarweb：2026-01-07，X 的 iOS 与 Android 合计移动 DAU 约 1.25 亿；DAU 不作为 MAU。"],
  reddit:["Reddit 2026 Q2 周活","https://investor.redditinc.com/news-events/news-releases/news-details/2026/Reddit-Reports-Second-Quarter-2026-Results/default.aspx","官方财报代理","Reddit 官方披露 WAUq 5.146 亿；覆盖网页与 App，且不是 MAU。"],
  gemini:["Gemini App MAU 突破 10 亿","https://blog.google/intl/ko-kr/company-news/inside-google/gemini-one-billion-monthly-users-kr/","官方规模数据","Google 2026-08 明确披露 Gemini App 月活超过 10 亿。"],
  temu:["Temu 全球 App MAU","https://www.techtimes.com/articles/325406/20260824/pdd-q2-earnings-beat-expectations-temu-loses-11-users-before-eu-deadline.htm","行业报告转述","TechTimes 引述财新与 Sensor Tower，给出 Temu 2026 Q2 全球 MAU 4.67 亿。"],
  telegram:["Telegram MAU","https://telegram.org/press","官方规模数据","Telegram 官方称 2025 年超过 10 亿 MAU。"],
  discord:["Discord MAU","https://discord.com/press-releases/discord-appoints-new-ceo-humam-sakhnini","官方规模数据","Discord 官方披露超过 2 亿 MAU。"],
  threads:["Threads 5 亿 MAU","https://about.fb.com/news/2026/06/meta-launching-new-features-500-million-monthly-threads-users/","官方规模数据","Meta 2026-06 披露 5 亿 MAU。"],
  snapchat:["Snap 2025 Q4 业绩","https://investor.snap.com/news/news-details/2026/Snap-Inc--Announces-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx","官方财报","Snapchat 2025 Q4 MAU 9.46 亿。"]
};

function buildCategories(profileName, target) {
  const source = profiles[profileName];
  const groups = Object.entries(source).map(([name, items]) => ({ name, items: [...items] }));
  let remaining = target;
  return groups.map(group => {
    const items = group.items.slice(0, Math.max(0, remaining));
    remaining -= items.length;
    return { name: group.name, items };
  }).filter(group => group.items.length);
}

const result = apps.map(([id,name,appCategory,target,profile]) => {
  const store = storeById.get(id);
  if (!store) throw new Error(`Missing App Store manifest: ${id}`);
  const appStoreUrl = `https://apps.apple.com/us/app/id${store.trackId}`;
  const sources = [{ title: `${store.trackName} · App Store`, url: appStoreUrl, type: "官方应用页", note: `开发者：${store.sellerName}。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。` }];
  if (extraSources[id]) {
    const [title,url,type,note] = extraSources[id];
    sources.unshift({title,url,type,note});
  }
  if (additionalEvidence[id]) {
    const [title,url,type,note] = additionalEvidence[id];
    sources.push({title,url,type,note});
  }
  const u = usage[id];
  const usageObject = u ? {
    durationMinutes:u[0], launches:u[1], activeUsers:u[2], period:u[3], methodLabel:u[4],
    ...(u[8] ? {activeUserLabel:u[8]} : {}),
    source:{url:u[5],title:u[6],note:u[7]}
  } : { durationMinutes:null, launches:null, activeUsers:null, period:"未找到可核验的公开同口径数据", methodLabel:"严格口径留空" };
  return {
    id,name,appCategory,logo:`assets/logos/global/${id}.jpg`,
    confidence: extraSources[id] ? "high" : "low",
    countMethod:"独立提醒场景；同一场景的横幅、声音、角标不重复计数",
    categories:buildCategories(profile,target),sources,usage:usageObject
  };
});

const doc = {
  meta:{
    title:"全球常用应用通知提醒排行榜",
    methodology:"统计能够形成系统通知、App 内红点/收件箱动态或明确提醒的独立业务场景；通知呈现方式不重复计数。公开资料未给出精确设置开关总数时，按官方功能触发关系拆分并降低置信度。",
    researchedCount:apps.length,
    targetCount:63,
    strictUsageMetrics:true,
    disclaimer:"通知数量是基于公开产品资料整理的可独立识别提醒场景，不等同于某一手机型号或版本中的设置开关数量。",
    usageNote:"日均时长、日均打开与 App MAU 必须有公开来源和明确时间；跨端用户、会员、订阅、账户、DAU/WAU 仅作为代理标签展示，不写入 MAU 排序值。"
  },
  apps:result
};

await fs.writeFile(path.join(root,"data","global-apps.json"), `${JSON.stringify(doc,null,2)}\n`);
console.log(`Built ${result.length} global apps with ${result.reduce((s,a)=>s+a.categories.reduce((x,c)=>x+c.items.length,0),0)} reminder scenarios.`);
