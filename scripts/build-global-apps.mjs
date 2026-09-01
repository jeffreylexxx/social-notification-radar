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
  instagram: [73,12,300000,"2025-08 / MAU 2025-09","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开次数来自 Similarweb App Intelligence 的全球 Android 样本（不含中国）；MAU 由 Meta 另页披露为 30 亿。"],
  facebook: [67,null,305000,"2025-08 / MAU 2023 Q3","Android 全球日均；MAU 为官方历史值","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长来自 Similarweb 全球 Android 样本；Meta 已停止披露 Facebook 单产品 MAU，保留 2023 Q3 官方历史值 30.5 亿。"],
  x: [28,null,null,"2025-08","Android 全球日均","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","Similarweb App Intelligence 全球 Android 样本，不含中国。"],
  whatsapp: [59,20.3,null,"2025-08 / 用户规模 2025-09","Android 全球日均","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与日均打开来自 Similarweb 全球 Android 样本；Meta 披露超过 30 亿人使用，但原文未明确称 MAU。","超过 30 亿用户"],
  youtube: [85,5.9,200000,"2025-08 / 月用户历史下限","Android 全球日均；月用户下限","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长与打开来自 Similarweb 全球 Android 样本；20 亿为 YouTube 官方登录月用户历史下限。"],
  messenger: [19,null,null,"2025-08","Android 全球日均","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","Similarweb App Intelligence 全球 Android 样本，不含中国。"],
  tiktok: [97,9.7,null,"2025-08","Android 全球日均","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","Similarweb App Intelligence 全球 Android 样本，不含中国；公开广告触达量不等同 MAU。"],
  spotify: [null,null,69600,"2025 Q2","MAU","https://newsroom.spotify.com/2025-07-29/spotify-reports-second-quarter-2025-earnings/","Spotify 2025 Q2 业绩","官方披露 MAU 6.96 亿。"],
  telegram: [30,null,100000,"2025-08 / MAU 2025","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长来自 Similarweb 全球 Android 样本；Telegram 官方称 2025 年 MAU 超过 10 亿。"],
  discord: [15,null,20000,"2025-08 / MAU 2025","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长来自 Similarweb 全球 Android 样本；Discord 官方披露 MAU 超过 2 亿。"],
  line: [null,null,20000,"公开页面当前口径","MAU 约值","https://www.linecorp.com/en/csr/","LINE Social Responsibility","LINE 官方页面称全球约 2 亿 MAU。"],
  threads: [4,null,50000,"2025-08 / MAU 2026-06","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长来自 Similarweb 全球 Android 样本；Meta 2026-06 披露 Threads 达 5 亿 MAU。"],
  linkedin: [6,null,null,"2025-08 / 会员规模 2023–2025","Android 全球日均；会员账户数","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长来自 Similarweb 全球 Android 样本；会员数不是 App MAU。","超过 10 亿会员"],
  snapchat: [17,null,94600,"2025-08 / MAU 2025 Q4","Android 全球日均；MAU 官方","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","时长来自 Similarweb 全球 Android 样本；Snap 2025 Q4 披露 MAU 9.46 亿。"],
  reddit: [19,null,null,"2025-08","Android 全球日均","https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media","DataReportal Digital 2026","Similarweb App Intelligence 全球 Android 样本，不含中国；Reddit 财报核心口径为 DAUq，未写入 MAU。"],
  "google-maps": [null,null,200000,"2024 Q3","月用户里程碑","https://abc.xyz/2024-q3-earnings-call/","Alphabet 2024 Q3 Earnings Call","Alphabet 披露 Google Maps 超过 20 亿月用户；为跨端产品口径。"],
  github: [null,null,null,"2025","开发者账户数","https://github.blog/news-insights/octoverse/","GitHub Octoverse","开发者账户不是 App MAU，仅作规模参考。","超过 1.5 亿开发者"],
  netflix: [null,null,null,"2024 Q4","付费会员数","https://ir.netflix.net/financials/quarterly-earnings/default.aspx","Netflix 投资者关系","订阅会员不是 App MAU，不参与 MAU 并列排序。","3.016 亿付费会员"],
  paypal: [null,null,null,"2024","活跃账户","https://investor.pypl.com/financials/annual-reports-and-proxies/default.aspx","PayPal 年报","活跃账户可能含商户且不是 App MAU。","约 4.34 亿活跃账户"],
  "microsoft-teams": [null,null,null,"2023","月活用户（跨端）","https://www.microsoft.com/en-us/microsoft-365/blog/2023/10/31/introducing-new-microsoft-teams-now-available-for-windows-and-mac/","Microsoft Teams 官方博客","跨桌面、网页和移动端产品 MAU，不等同手机 App MAU。","3.2 亿月活用户"]
};

const additionalEvidence = {
  instagram:["Instagram 30 亿 MAU","https://about.fb.com/news/2025/09/in-india-instagram-debuts-a-reels-first-experience-for-its-mobile-app/","官方规模数据","Meta 2025-09 明确披露 Instagram 30 亿 MAU。"],
  facebook:["Facebook 2023 Q3 MAU","https://investor.fb.com/files/doc_earnings/2023/q3/earnings-result/Meta-09-30-2022-Exhibit-99-1-FINAL.pdf","官方财报","最后阶段单产品官方值为 30.5 亿 MAU；之后停止披露。"],
  whatsapp:["WhatsApp 用户规模","https://about.fb.com/news/2025/09/introducing-message-translations-whatsapp/","官方规模数据","Meta 称超过 30 亿人使用 WhatsApp；未把措辞提升为 MAU。"],
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
