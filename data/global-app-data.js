window.APP_DATA = {
  "meta": {
    "title": "全球常用应用通知提醒排行榜",
    "methodology": "统计能够形成系统通知、App 内红点/收件箱动态或明确提醒的独立业务场景；通知呈现方式不重复计数。公开资料未给出精确设置开关总数时，按官方功能触发关系拆分并降低置信度。",
    "researchedCount": 55,
    "targetCount": 55,
    "strictUsageMetrics": true,
    "disclaimer": "通知数量是基于公开产品资料整理的可独立识别提醒场景，不等同于某一手机型号或版本中的设置开关数量。",
    "usageNote": "日均时长、日均打开与 App MAU 必须有公开来源和明确时间；跨端用户、会员、订阅、账户、DAU/WAU 仅作为代理标签展示，不写入 MAU 排序值。",
    "snapshotDate": "2026-09-10",
    "generatedAt": "2026-09-09T20:56:57.150Z",
    "sourceCount": 121,
    "changedSourceCount": 107,
    "failedSourceCount": 6,
    "previousSnapshotDate": "2026-09-09"
  },
  "apps": [
    {
      "id": "facebook",
      "name": "Facebook",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/facebook.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        },
        {
          "name": "内容与直播",
          "items": [
            "关注账号发布内容",
            "直播开始",
            "内容推荐",
            "热门趋势"
          ]
        }
      ],
      "sources": [
        {
          "title": "Facebook · App Store",
          "url": "https://apps.apple.com/us/app/id284882215",
          "type": "官方应用页",
          "note": "开发者：Meta Platforms, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Facebook 2023 Q3 MAU",
          "url": "https://investor.fb.com/files/doc_earnings/2023/q3/earnings-result/Meta-09-30-2022-Exhibit-99-1-FINAL.pdf",
          "type": "官方财报",
          "note": "最后阶段单产品官方值为 30.5 亿 MAU；之后停止披露。"
        }
      ],
      "usage": {
        "durationMinutes": 67,
        "launches": 9.1,
        "activeUsers": 305000,
        "period": "2025-08 / MAU 2023 Q3",
        "methodLabel": "Android 全球日均；MAU 为官方历史值",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb 全球 Android 样本；Meta 已停止披露 Facebook 单产品 MAU，保留 2023 Q3 官方历史值 30.5 亿。"
        }
      },
      "count": 15,
      "categorySummary": "互动反馈 6，关系与消息 5，内容与直播 4",
      "rank": 1,
      "previousRank": 1,
      "rankChange": 0
    },
    {
      "id": "tiktok",
      "name": "TikTok",
      "appCategory": "短视频与资讯",
      "logo": "assets/logos/global/tiktok.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        },
        {
          "name": "内容与直播",
          "items": [
            "关注账号发布内容",
            "直播开始",
            "内容推荐",
            "热门趋势"
          ]
        }
      ],
      "sources": [
        {
          "title": "TikTok - Videos, Shop & LIVE · App Store",
          "url": "https://apps.apple.com/us/app/id835599320",
          "type": "官方应用页",
          "note": "开发者：TIKTOK PTE. LTD.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "TikTok 全球 App MAU 突破 20 亿",
          "url": "https://jingdaily.com/intels/2026-04/29/tiktok-tops-2-billion-users-shop-gmv-climbs-94-in-2025",
          "type": "行业报告转述",
          "note": "Jing Daily 引述 Sensor Tower，称 TikTok 2026 Q1 全球移动 App MAU 首次超过 20 亿。"
        }
      ],
      "usage": {
        "durationMinutes": 97,
        "launches": 10,
        "activeUsers": 200000,
        "period": "2025-08 / MAU 2026 Q1",
        "methodLabel": "Android 全球日均；Sensor Tower 全球 App MAU",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb App Intelligence 全球 Android 样本，不含中国；Sensor Tower 数据经行业媒体报道显示 2026 Q1 全球移动 App MAU 突破 20 亿。"
        }
      },
      "count": 15,
      "categorySummary": "互动反馈 6，关系与消息 5，内容与直播 4",
      "rank": 2,
      "previousRank": 2,
      "rankChange": 0
    },
    {
      "id": "x",
      "name": "X（Twitter）",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/x.jpg",
      "confidence": "high",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        },
        {
          "name": "内容与直播",
          "items": [
            "关注账号发布内容",
            "直播开始",
            "内容推荐",
            "热门趋势"
          ]
        }
      ],
      "sources": [
        {
          "title": "X 手机通知帮助",
          "url": "https://help.x.com/en/managing-your-account/notifications-on-mobile-devices",
          "type": "官方帮助",
          "note": "官方列出提及、回复、转帖、点赞、关注、私信、新闻、Spaces 等通知类型。"
        },
        {
          "title": "X · App Store",
          "url": "https://apps.apple.com/us/app/id333903271",
          "type": "官方应用页",
          "note": "开发者：X Corp.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "X 移动 App DAU",
          "url": "https://cincodias.elpais.com/smartlife/lifestyle/2026-01-19/sorpaso-la-app-de-threads-para-moviles-ya-tiene-mas-usuarios-que-x.html",
          "type": "行业估算代理",
          "note": "报道引述 Similarweb：2026-01-07，X 的 iOS 与 Android 合计移动 DAU 约 1.25 亿；DAU 不作为 MAU。"
        }
      ],
      "usage": {
        "durationMinutes": 28,
        "launches": 6.8,
        "activeUsers": null,
        "period": "2025-08 / 移动 DAU 2026-01-07",
        "methodLabel": "Android 全球日均；移动 DAU 代理",
        "activeUserLabel": "1.25 亿移动 DAU",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb App Intelligence 全球 Android 样本，不含中国；Similarweb 另估算 iOS 与 Android 合计移动 DAU 约 1.25 亿，DAU 不写入 MAU 排序。"
        }
      },
      "count": 15,
      "categorySummary": "互动反馈 6，关系与消息 5，内容与直播 4",
      "rank": 3,
      "previousRank": 3,
      "rankChange": 0
    },
    {
      "id": "instagram",
      "name": "Instagram",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/instagram.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        },
        {
          "name": "内容与直播",
          "items": [
            "关注账号发布内容",
            "直播开始",
            "内容推荐"
          ]
        }
      ],
      "sources": [
        {
          "title": "Instagram · App Store",
          "url": "https://apps.apple.com/us/app/id389801252",
          "type": "官方应用页",
          "note": "开发者：Instagram, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Instagram 30 亿 MAU",
          "url": "https://about.fb.com/news/2025/09/in-india-instagram-debuts-a-reels-first-experience-for-its-mobile-app/",
          "type": "官方规模数据",
          "note": "Meta 2025-09 明确披露 Instagram 30 亿 MAU。"
        }
      ],
      "usage": {
        "durationMinutes": 73,
        "launches": 12.3,
        "activeUsers": 300000,
        "period": "2025-08 / MAU 2025-09",
        "methodLabel": "Android 全球日均；MAU 官方",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb App Intelligence 的全球 Android 样本（不含中国）；MAU 由 Meta 另页披露为 30 亿。"
        }
      },
      "count": 14,
      "categorySummary": "互动反馈 6，关系与消息 5，内容与直播 3",
      "rank": 4,
      "previousRank": 4,
      "rankChange": 0
    },
    {
      "id": "linkedin",
      "name": "LinkedIn",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/linkedin.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "关系互动",
          "items": [
            "连接邀请",
            "新关注者",
            "个人资料被查看",
            "帖子反应",
            "帖子评论",
            "提及"
          ]
        },
        {
          "name": "消息与机会",
          "items": [
            "私信",
            "职位推荐",
            "职位申请更新",
            "招聘者动态"
          ]
        },
        {
          "name": "内容与服务",
          "items": [
            "关注内容更新",
            "行业资讯",
            "账号安全"
          ]
        }
      ],
      "sources": [
        {
          "title": "LinkedIn: Community & Network · App Store",
          "url": "https://apps.apple.com/us/app/id288429040",
          "type": "官方应用页",
          "note": "开发者：LinkedIn Corporation。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": 6,
        "launches": 3.2,
        "activeUsers": null,
        "period": "2025-08 / 会员规模 2023–2025",
        "methodLabel": "Android 全球日均；会员账户数",
        "activeUserLabel": "超过 10 亿会员",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb 全球 Android 样本；会员数不是 App MAU。"
        }
      },
      "count": 13,
      "categorySummary": "关系互动 6，消息与机会 4，内容与服务 3",
      "rank": 5,
      "previousRank": 5,
      "rankChange": 0
    },
    {
      "id": "reddit",
      "name": "Reddit",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/reddit.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        },
        {
          "name": "内容与直播",
          "items": [
            "关注账号发布内容",
            "直播开始"
          ]
        }
      ],
      "sources": [
        {
          "title": "Reddit · App Store",
          "url": "https://apps.apple.com/us/app/id1064216828",
          "type": "官方应用页",
          "note": "开发者：REDDIT, INC.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Reddit 2026 Q2 周活",
          "url": "https://investor.redditinc.com/news-events/news-releases/news-details/2026/Reddit-Reports-Second-Quarter-2026-Results/default.aspx",
          "type": "官方财报代理",
          "note": "Reddit 官方披露 WAUq 5.146 亿；覆盖网页与 App，且不是 MAU。"
        }
      ],
      "usage": {
        "durationMinutes": 19,
        "launches": 4.7,
        "activeUsers": null,
        "period": "2025-08 / WAUq 2026 Q2",
        "methodLabel": "Android 全球日均；周活独立用户代理",
        "activeUserLabel": "5.15 亿周活独立用户（跨网页/App）",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb App Intelligence 全球 Android 样本，不含中国；Reddit 2026 Q2 披露 WAUq 5.146 亿，覆盖网页与 App，故不写入 MAU 排序。"
        }
      },
      "count": 13,
      "categorySummary": "互动反馈 6，关系与消息 5，内容与直播 2",
      "rank": 6,
      "previousRank": 6,
      "rankChange": 0
    },
    {
      "id": "snapchat",
      "name": "Snapchat",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/snapchat.jpg",
      "confidence": "high",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        },
        {
          "name": "内容与直播",
          "items": [
            "关注账号发布内容"
          ]
        }
      ],
      "sources": [
        {
          "title": "Snapchat 通知控制",
          "url": "https://help.snapchat.com/hc/en-us/articles/7012316327444-How-do-I-control-my-Snapchat-notifications-on-iOS",
          "type": "官方帮助",
          "note": "官方说明逐类型通知开关及关注对象的 Story 通知。"
        },
        {
          "title": "Snapchat · App Store",
          "url": "https://apps.apple.com/us/app/id447188370",
          "type": "官方应用页",
          "note": "开发者：Snap, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Snap 2025 Q4 业绩",
          "url": "https://investor.snap.com/news/news-details/2026/Snap-Inc--Announces-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx",
          "type": "官方财报",
          "note": "Snapchat 2025 Q4 MAU 9.46 亿。"
        }
      ],
      "usage": {
        "durationMinutes": 17,
        "launches": 6.5,
        "activeUsers": 94600,
        "period": "2025-08 / MAU 2025 Q4",
        "methodLabel": "Android 全球日均；MAU 官方",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb 全球 Android 样本；Snap 2025 Q4 披露 MAU 9.46 亿。"
        }
      },
      "count": 12,
      "categorySummary": "互动反馈 6，关系与消息 5，内容与直播 1",
      "rank": 7,
      "previousRank": 7,
      "rankChange": 0
    },
    {
      "id": "threads",
      "name": "Threads",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/threads.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        },
        {
          "name": "内容与直播",
          "items": [
            "关注账号发布内容"
          ]
        }
      ],
      "sources": [
        {
          "title": "Threads · App Store",
          "url": "https://apps.apple.com/us/app/id6446901002",
          "type": "官方应用页",
          "note": "开发者：Instagram, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Threads 5 亿 MAU",
          "url": "https://about.fb.com/news/2026/06/meta-launching-new-features-500-million-monthly-threads-users/",
          "type": "官方规模数据",
          "note": "Meta 2026-06 披露 5 亿 MAU。"
        }
      ],
      "usage": {
        "durationMinutes": 4,
        "launches": 1.9,
        "activeUsers": 50000,
        "period": "2025-08 / MAU 2026-06",
        "methodLabel": "Android 全球日均；MAU 官方",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb 全球 Android 样本；Meta 2026-06 披露 Threads 达 5 亿 MAU。"
        }
      },
      "count": 12,
      "categorySummary": "互动反馈 6，关系与消息 5，内容与直播 1",
      "rank": 8,
      "previousRank": 8,
      "rankChange": 0
    },
    {
      "id": "temu",
      "name": "Temu",
      "appCategory": "购物与电商",
      "logo": "assets/logos/global/temu.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "订单物流",
          "items": [
            "下单成功",
            "付款状态",
            "卖家发货",
            "物流运输",
            "派送中",
            "签收完成",
            "退款或退货"
          ]
        },
        {
          "name": "互动与价格",
          "items": [
            "客服消息",
            "降价提醒",
            "补货提醒",
            "购物车提醒",
            "优惠活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "Temu: Shop Like a Billionaire · App Store",
          "url": "https://apps.apple.com/us/app/id1641486558",
          "type": "官方应用页",
          "note": "开发者：Whaleco Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Temu 全球 App MAU",
          "url": "https://www.techtimes.com/articles/325406/20260824/pdd-q2-earnings-beat-expectations-temu-loses-11-users-before-eu-deadline.htm",
          "type": "行业报告转述",
          "note": "TechTimes 引述财新与 Sensor Tower，给出 Temu 2026 Q2 全球 MAU 4.67 亿。"
        }
      ],
      "usage": {
        "durationMinutes": 3.3,
        "launches": null,
        "activeUsers": 46700,
        "period": "2023 Q4（时长历史值）/ 2026 Q2 MAU",
        "methodLabel": "美国周均换算日均；Sensor Tower 全球 App MAU（二手转述）",
        "source": {
          "url": "https://www.aol.com/news/chinese-shopping-app-temu-microsoft-233940417.html",
          "title": "NBC News / AOL 引述 Sensor Tower",
          "note": "Sensor Tower 估算 2023 年末美国用户每周使用 Temu 23 分钟，按 23÷7=3.3 分钟/日换算并标记历史值；2026 Q2 全球 MAU 4.67 亿来自另一篇行业报道。"
        }
      },
      "count": 12,
      "categorySummary": "订单物流 7，互动与价格 5",
      "rank": 9,
      "previousRank": 9,
      "rankChange": 0
    },
    {
      "id": "youtube",
      "name": "YouTube",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/youtube.jpg",
      "confidence": "high",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "订阅内容",
          "items": [
            "订阅频道上传长视频",
            "订阅频道发布短视频",
            "直播开始",
            "首映开始"
          ]
        },
        {
          "name": "互动",
          "items": [
            "评论回复",
            "评论点赞",
            "提及",
            "频道动态"
          ]
        },
        {
          "name": "推荐与服务",
          "items": [
            "个性化推荐",
            "观看提醒",
            "产品更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "YouTube 通知管理",
          "url": "https://support.google.com/youtube/answer/3382248?hl=en",
          "type": "官方帮助",
          "note": "官方说明订阅上传、直播、Shorts、推荐及通知中心。"
        },
        {
          "title": "YouTube · App Store",
          "url": "https://apps.apple.com/us/app/id544007664",
          "type": "官方应用页",
          "note": "开发者：Google LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": 85,
        "launches": 5.9,
        "activeUsers": 200000,
        "period": "2025-08 / 月用户历史下限",
        "methodLabel": "Android 全球日均；月用户下限",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开来自 Similarweb 全球 Android 样本；20 亿为 YouTube 官方登录月用户历史下限。"
        }
      },
      "count": 11,
      "categorySummary": "订阅内容 4，互动 4，推荐与服务 3",
      "rank": 10,
      "previousRank": 10,
      "rankChange": 0
    },
    {
      "id": "line",
      "name": "LINE",
      "appCategory": "即时通讯",
      "logo": "assets/logos/global/line.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "消息",
          "items": [
            "单聊新消息",
            "群聊新消息",
            "消息回复",
            "消息反应",
            "@提及",
            "频道或公告更新"
          ]
        },
        {
          "name": "通话与活动",
          "items": [
            "语音来电",
            "视频来电",
            "未接来电",
            "群组活动或事件"
          ]
        },
        {
          "name": "关系与服务",
          "items": [
            "联系人加入"
          ]
        }
      ],
      "sources": [
        {
          "title": "LINE · App Store",
          "url": "https://apps.apple.com/us/app/id443904275",
          "type": "官方应用页",
          "note": "开发者：LY Corporation。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "LINE 全球约 2 亿 MAU",
          "url": "https://www.linecorp.com/en/csr/",
          "type": "官方规模数据",
          "note": "LINE 官方社会责任页面称全球约 2 亿月活；与 2024-11 Android 行为样本时间和覆盖平台不同。"
        }
      ],
      "usage": {
        "durationMinutes": 13.9,
        "launches": 10.7,
        "activeUsers": 20000,
        "period": "2024-11 行为历史值 / MAU 官网约值",
        "methodLabel": "全球 Android 月均换算日均（不含中国）",
        "source": {
          "url": "https://learn.meltwater.com/rs/814-WJU-189/images/2025_Kepios_Digital_Global_Overview_Report.pdf",
          "title": "Digital 2025 Global Overview · 第 383、385 页",
          "note": "2024 年 11 月全球 Android 活跃用户样本，不含中国：月人均时长 6 小时 57 分钟，(6×60+57)÷30=13.9 分钟/日；月人均会话 322.3 次，322.3÷30≈10.7 次/日。会话次数作为打开次数近似口径；历史样本不是当前全球全平台均值。MAU 约 2 亿另见 LINE 官方来源。"
        }
      },
      "count": 11,
      "categorySummary": "消息 6，通话与活动 4，关系与服务 1",
      "rank": 11,
      "previousRank": 11,
      "rankChange": 0
    },
    {
      "id": "tumblr",
      "name": "Tumblr",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/tumblr.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动反馈",
          "items": [
            "点赞",
            "评论",
            "评论回复",
            "提及",
            "内容被转发",
            "内容被收藏"
          ]
        },
        {
          "name": "关系与消息",
          "items": [
            "新关注者",
            "关注请求",
            "私信",
            "群聊消息",
            "联系人加入"
          ]
        }
      ],
      "sources": [
        {
          "title": "Tumblr: Social Media & Art · App Store",
          "url": "https://apps.apple.com/us/app/id305343404",
          "type": "官方应用页",
          "note": "开发者：Tumblr, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2025-03",
        "methodLabel": "平台 MAU（跨网页与 App）",
        "activeUserLabel": "9,500 万平台 MAU",
        "source": {
          "url": "https://advertise.tumblr.com/audience/",
          "title": "Tumblr Ads Audience",
          "note": "Tumblr 内部数据披露全球 MAU 9,500 万，但未拆分手机 App，故不写入严格 App MAU 排序。"
        }
      },
      "count": 11,
      "categorySummary": "互动反馈 6，关系与消息 5",
      "rank": 12,
      "previousRank": 12,
      "rankChange": 0
    },
    {
      "id": "telegram",
      "name": "Telegram",
      "appCategory": "即时通讯",
      "logo": "assets/logos/global/telegram.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "消息",
          "items": [
            "单聊新消息",
            "群聊新消息",
            "消息回复",
            "消息反应",
            "@提及",
            "频道或公告更新"
          ]
        },
        {
          "name": "通话与活动",
          "items": [
            "语音来电",
            "视频来电",
            "未接来电",
            "群组活动或事件"
          ]
        }
      ],
      "sources": [
        {
          "title": "Telegram Messenger · App Store",
          "url": "https://apps.apple.com/us/app/id686449807",
          "type": "官方应用页",
          "note": "开发者：Telegram FZ-LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Telegram MAU",
          "url": "https://telegram.org/press",
          "type": "官方规模数据",
          "note": "Telegram 官方称 2025 年超过 10 亿 MAU。"
        }
      ],
      "usage": {
        "durationMinutes": 30,
        "launches": 9.9,
        "activeUsers": 100000,
        "period": "2025-08 / MAU 2025",
        "methodLabel": "Android 全球日均；MAU 官方",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb 全球 Android 样本；Telegram 官方称 2025 年 MAU 超过 10 亿。"
        }
      },
      "count": 10,
      "categorySummary": "消息 6，通话与活动 4",
      "rank": 13,
      "previousRank": 13,
      "rankChange": 0
    },
    {
      "id": "discord",
      "name": "Discord",
      "appCategory": "即时通讯",
      "logo": "assets/logos/global/discord.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "消息",
          "items": [
            "单聊新消息",
            "群聊新消息",
            "消息回复",
            "消息反应",
            "@提及",
            "频道或公告更新"
          ]
        },
        {
          "name": "通话与活动",
          "items": [
            "语音来电",
            "视频来电",
            "未接来电",
            "群组活动或事件"
          ]
        }
      ],
      "sources": [
        {
          "title": "Discord - Talk, Play, Hang Out · App Store",
          "url": "https://apps.apple.com/us/app/id985746746",
          "type": "官方应用页",
          "note": "开发者：Discord Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Discord MAU",
          "url": "https://discord.com/press-releases/discord-appoints-new-ceo-humam-sakhnini",
          "type": "官方规模数据",
          "note": "Discord 官方披露超过 2 亿 MAU。"
        }
      ],
      "usage": {
        "durationMinutes": 15,
        "launches": 7.3,
        "activeUsers": 20000,
        "period": "2025-08 / MAU 2025",
        "methodLabel": "Android 全球日均；MAU 官方",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb 全球 Android 样本；Discord 官方披露 MAU 超过 2 亿。"
        }
      },
      "count": 10,
      "categorySummary": "消息 6，通话与活动 4",
      "rank": 14,
      "previousRank": 14,
      "rankChange": 0
    },
    {
      "id": "tinder",
      "name": "Tinder",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/tinder.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "匹配互动",
          "items": [
            "新匹配",
            "新消息",
            "消息反应",
            "资料获赞",
            "超级喜欢"
          ]
        },
        {
          "name": "推荐与活动",
          "items": [
            "新推荐对象",
            "位置或活动推荐",
            "配对即将过期"
          ]
        },
        {
          "name": "安全与服务",
          "items": [
            "账号安全",
            "订阅或营销"
          ]
        }
      ],
      "sources": [
        {
          "title": "Tinder Dating App: Date & Chat · App Store",
          "url": "https://apps.apple.com/us/app/id547702041",
          "type": "官方应用页",
          "note": "开发者：Tinder LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Tinder 每月 App 用户约 5,000 万",
          "url": "https://www.tinderpressroom.com/about",
          "type": "官方规模数据",
          "note": "官网于 2026-09 核验：每月 App 用户约 5,000 万，覆盖 190 个国家；不要与 2014 年行为历史值视为同一期样本。"
        }
      ],
      "usage": {
        "durationMinutes": 77,
        "launches": 11,
        "activeUsers": 5000,
        "period": "2014-01 行为历史值 / MAU 官网 2026-09 核验",
        "methodLabel": "早期公司披露；历史时长按会话换算",
        "source": {
          "url": "https://dailytrojan.com/2014/01/27/usc-alumni-and-tinder-co-founders-meet-with-students-on-campus/",
          "title": "Daily Trojan · Tinder 创始团队校园访谈",
          "note": "2014-01-27 现场报道引述联合创始人兼 CMO Justin Mateen：用户平均每天打开 11 次，每次 7 分钟，11×7=77 分钟/日。未披露抽样方法与地区细分；这是非常早期的公司自报历史值，不代表当前使用情况。当前官网约 5,000 万每月 App 用户另列官方来源。"
        }
      },
      "count": 10,
      "categorySummary": "匹配互动 5，推荐与活动 3，安全与服务 2",
      "rank": 15,
      "previousRank": 15,
      "rankChange": 0
    },
    {
      "id": "messenger",
      "name": "Messenger",
      "appCategory": "即时通讯",
      "logo": "assets/logos/global/messenger.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "消息",
          "items": [
            "单聊新消息",
            "群聊新消息",
            "消息回复",
            "消息反应",
            "@提及",
            "频道或公告更新"
          ]
        },
        {
          "name": "通话与活动",
          "items": [
            "语音来电",
            "视频来电",
            "未接来电",
            "群组活动或事件"
          ]
        }
      ],
      "sources": [
        {
          "title": "Messenger · App Store",
          "url": "https://apps.apple.com/us/app/id454638411",
          "type": "官方应用页",
          "note": "开发者：Meta Platforms, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Messenger 2018 年平台月用户",
          "url": "https://about.fb.com/news/2018/05/f8-2018-new-tools-for-businesses-and-people-to-deepen-connections-in-messenger/",
          "type": "官方历史规模",
          "note": "2018-05-01 Meta 官方称 Messenger 每月用户 13 亿，未分离移动端，只作历史平台规模参考。"
        }
      ],
      "usage": {
        "durationMinutes": 19,
        "launches": 9.1,
        "activeUsers": null,
        "period": "行为 2025-08 / 平台月用户 2018-05",
        "methodLabel": "Android 全球日均；历史跨端规模代理",
        "activeUserLabel": "13.00 亿平台月用户（2018）",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与打开次数来自 Similarweb 全球 Android 样本，不含中国。2018 年官方另披露平台月用户 13 亿，未分离手机端，不写入 App MAU 排序。"
        }
      },
      "count": 10,
      "categorySummary": "消息 6，通话与活动 4",
      "rank": 16,
      "previousRank": 16,
      "rankChange": 0
    },
    {
      "id": "slack",
      "name": "Slack",
      "appCategory": "协作与办公",
      "logo": "assets/logos/global/slack.jpg",
      "confidence": "high",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "沟通",
          "items": [
            "直接消息",
            "频道或群组消息",
            "@提及",
            "消息回复",
            "消息反应"
          ]
        },
        {
          "name": "协作",
          "items": [
            "任务被指派",
            "文档评论",
            "会议开始",
            "日程变更"
          ]
        },
        {
          "name": "服务",
          "items": [
            "工作区公告"
          ]
        }
      ],
      "sources": [
        {
          "title": "Slack 通知指南",
          "url": "https://slack.com/help/articles/201355156-Configure-your-Slack-notifications",
          "type": "官方帮助",
          "note": "官方列出私信、提及、关键词、线程回复、Huddle、邀请和到期提醒。"
        },
        {
          "title": "Slack · App Store",
          "url": "https://apps.apple.com/us/app/id618783545",
          "type": "官方应用页",
          "note": "开发者：SLACK TECHNOLOGIES L.L.C.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2019-09（历史值）",
        "methodLabel": "跨端 DAU；不是手机 MAU",
        "activeUserLabel": "超过 1,200 万跨端 DAU",
        "source": {
          "url": "https://slack.com/blog/news/slacks-growth-in-asia",
          "title": "Slack 官方 · 亚洲增长回顾",
          "note": "Slack 官方于 2019-10-16 披露，2019 年 9 月跨端日活超过 1,200 万；未分离手机端，不将 DAU 转成 MAU，也不采用跨端在线或工作时长填充手机日均。"
        }
      },
      "count": 10,
      "categorySummary": "沟通 5，协作 4，服务 1",
      "rank": 17,
      "previousRank": 17,
      "rankChange": 0
    },
    {
      "id": "uber",
      "name": "Uber",
      "appCategory": "出行与地图",
      "logo": "assets/logos/global/uber.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "行程",
          "items": [
            "司机接单",
            "司机即将到达",
            "司机已到达",
            "行程开始",
            "行程完成",
            "行程变更或取消"
          ]
        },
        {
          "name": "安全与交易",
          "items": [
            "安全提醒",
            "付款或收据",
            "失物或客服更新",
            "优惠活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "Uber - Request a ride · App Store",
          "url": "https://apps.apple.com/us/app/id368677368",
          "type": "官方应用页",
          "note": "开发者：Uber Technologies, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2026 Q2",
        "methodLabel": "平台 MAPC（非单 App MAU）",
        "activeUserLabel": "2.08 亿月活平台消费者",
        "source": {
          "url": "https://investor.uber.com/news-events/news/press-release-details/2026/Uber-Announces-Results-for-Second-Quarter-2026/default.aspx",
          "title": "Uber 2026 Q2 业绩",
          "note": "官方披露出行与配送平台月活消费者 2.08 亿；覆盖多个业务，不等同 Uber 单 App MAU。"
        }
      },
      "count": 10,
      "categorySummary": "行程 6，安全与交易 4",
      "rank": 18,
      "previousRank": 18,
      "rankChange": 0
    },
    {
      "id": "whatsapp",
      "name": "WhatsApp",
      "appCategory": "即时通讯",
      "logo": "assets/logos/global/whatsapp.jpg",
      "confidence": "high",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "消息",
          "items": [
            "单聊新消息",
            "群聊新消息",
            "消息回复",
            "消息反应",
            "@提及",
            "频道或公告更新"
          ]
        },
        {
          "name": "通话与活动",
          "items": [
            "语音来电",
            "视频来电",
            "未接来电"
          ]
        }
      ],
      "sources": [
        {
          "title": "WhatsApp 通知管理",
          "url": "https://faq.whatsapp.com/797069521522888/",
          "type": "官方帮助",
          "note": "官方说明单聊、群聊、通话、反应、提及和未读角标等通知。"
        },
        {
          "title": "WhatsApp Messenger · App Store",
          "url": "https://apps.apple.com/us/app/id310633997",
          "type": "官方应用页",
          "note": "开发者：WhatsApp Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "WhatsApp 超过 30 亿 MAU",
          "url": "https://techcrunch.com/2025/05/01/whatsapp-now-has-more-than-3-billion-users/",
          "type": "电话会披露 / 新闻核验",
          "note": "Meta CEO 在 2025 Q1 业绩电话会上明确称 WhatsApp 每月用户超过 30 亿。"
        }
      ],
      "usage": {
        "durationMinutes": 59,
        "launches": 20.7,
        "activeUsers": 300000,
        "period": "2025-08 / MAU 2025-04",
        "methodLabel": "Android 全球日均；MAU 官方电话会披露",
        "source": {
          "url": "https://datareportal.com/reports/digital-2026-two-in-three-people-on-earth-now-use-social-media",
          "title": "DataReportal Digital 2026",
          "note": "时长与日均打开来自 Similarweb 全球 Android 样本；Meta CEO 在 2025 Q1 业绩电话会上披露 WhatsApp 月活超过 30 亿。"
        }
      },
      "count": 9,
      "categorySummary": "消息 6，通话与活动 3",
      "rank": 19,
      "previousRank": 19,
      "rankChange": 0
    },
    {
      "id": "spotify",
      "name": "Spotify",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/spotify.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容更新",
          "items": [
            "关注艺人发布内容",
            "关注播客更新",
            "新节目或电台更新",
            "直播节目开始"
          ]
        },
        {
          "name": "推荐与社交",
          "items": [
            "个性化推荐",
            "好友或关注动态",
            "榜单或精选更新"
          ]
        },
        {
          "name": "服务",
          "items": [
            "下载完成",
            "订阅或账号提醒"
          ]
        }
      ],
      "sources": [
        {
          "title": "Spotify: Music and Podcasts · App Store",
          "url": "https://apps.apple.com/us/app/id324684580",
          "type": "官方应用页",
          "note": "开发者：Spotify。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "WIK · 德国音视频流媒体研究，图 9（印刷页 14）",
          "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
          "note": "2022-12 发布，研究 2020 Q1 至 2021 Q3；图 9 标注 2021，德国 Android/iOS 移动端（未单独剔除平板）。Spotify 柱高约 58 分钟；图中没有数值标签，本网页按刻度读至整数分钟，非原始精确值；不是仅前台屏幕时间或当前全球均值。",
          "type": "使用行为补充研究"
        },
        {
          "title": "Ofcom CMR 2017 · 5.2 节，印刷页 166—167",
          "url": "https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/cmr/cmr17/uk/uk-internet-online.pdf",
          "note": "报告正文明确给出 Spotify 用户平均每天打开 2.01 次。研究总样本 1,200 名自愿参加的英国 Android 用户，不保证代表全体英国人；不捕获后台运行或不足 5 秒的会话。该数值为原文日均，不用总会话数除以未经核实的用户观测天数。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 58,
        "launches": 2.01,
        "activeUsers": 77700,
        "period": "2026 Q2",
        "methodLabel": "MAU",
        "source": {
          "url": "https://newsroom.spotify.com/2026-08-04/spotify-q2-2026-earnings/",
          "title": "Spotify 2026 Q2 业绩",
          "note": "官方披露 MAU 7.77 亿。 日均时长补充：2021（历史，德国）；移动端活跃用户日均；图表约值。2022-12 发布，研究 2020 Q1 至 2021 Q3；图 9 标注 2021，德国 Android/iOS 移动端（未单独剔除平板）。Spotify 柱高约 58 分钟；图中没有数值标签，本网页按刻度读至整数分钟，非原始精确值；不是仅前台屏幕时间或当前全球均值。 日均打开补充：2016-09-27—12-23（历史，英国）；Android 日均会话；Ofcom 实测样本。报告正文明确给出 Spotify 用户平均每天打开 2.01 次。研究总样本 1,200 名自愿参加的英国 Android 用户，不保证代表全体英国人；不捕获后台运行或不足 5 秒的会话。该数值为原文日均，不用总会话数除以未经核实的用户观测天数。"
        },
        "durationMinutesPrefix": "约",
        "metricMeta": {
          "durationMinutes": {
            "period": "2021（历史，德国）",
            "methodLabel": "移动端活跃用户日均；图表约值",
            "source": {
              "title": "WIK · 德国音视频流媒体研究，图 9（印刷页 14）",
              "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
              "note": "2022-12 发布，研究 2020 Q1 至 2021 Q3；图 9 标注 2021，德国 Android/iOS 移动端（未单独剔除平板）。Spotify 柱高约 58 分钟；图中没有数值标签，本网页按刻度读至整数分钟，非原始精确值；不是仅前台屏幕时间或当前全球均值。"
            }
          },
          "launches": {
            "period": "2016-09-27—12-23（历史，英国）",
            "methodLabel": "Android 日均会话；Ofcom 实测样本",
            "precision": 2,
            "source": {
              "title": "Ofcom CMR 2017 · 5.2 节，印刷页 166—167",
              "url": "https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/cmr/cmr17/uk/uk-internet-online.pdf",
              "note": "报告正文明确给出 Spotify 用户平均每天打开 2.01 次。研究总样本 1,200 名自愿参加的英国 Android 用户，不保证代表全体英国人；不捕获后台运行或不足 5 秒的会话。该数值为原文日均，不用总会话数除以未经核实的用户观测天数。"
            }
          }
        }
      },
      "count": 9,
      "categorySummary": "内容更新 4，推荐与社交 3，服务 2",
      "rank": 20,
      "previousRank": 20,
      "rankChange": 0
    },
    {
      "id": "yelp",
      "name": "Yelp",
      "appCategory": "本地生活",
      "logo": "assets/logos/global/yelp.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "互动",
          "items": [
            "评论获赞",
            "评论回复",
            "私信",
            "好友活动"
          ]
        },
        {
          "name": "本地服务",
          "items": [
            "预订提醒",
            "候位状态",
            "商家回复",
            "附近推荐",
            "优惠活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "Yelp: Food, Services & Reviews · App Store",
          "url": "https://apps.apple.com/us/app/id284910350",
          "type": "官方应用页",
          "note": "开发者：Yelp, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 2800,
        "period": "2025 月均",
        "methodLabel": "App 月活独立设备",
        "source": {
          "url": "https://www.sec.gov/Archives/edgar/data/1345016/000134501626000019/yelp-20251231.htm",
          "title": "Yelp 2025 Form 10-K",
          "note": "官方口径为达到最低参与门槛的 App 月活独立设备，全年月均 2,800.9 万；设备数不完全等同人数。"
        }
      },
      "count": 9,
      "categorySummary": "互动 4，本地服务 5",
      "rank": 21,
      "previousRank": 21,
      "rankChange": 0
    },
    {
      "id": "grubhub",
      "name": "Grubhub",
      "appCategory": "本地生活",
      "logo": "assets/logos/global/grubhub.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "订单",
          "items": [
            "订单确认",
            "商家接单",
            "制作中",
            "骑手取餐",
            "配送进度",
            "即将送达",
            "送达完成"
          ]
        },
        {
          "name": "售后与营销",
          "items": [
            "退款或客服更新",
            "优惠活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "Grubhub: Food Delivery · App Store",
          "url": "https://apps.apple.com/us/app/id302920553",
          "type": "官方应用页",
          "note": "开发者：GrubHub Inc。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2024",
        "methodLabel": "North America 活跃消费者（非单 App MAU）",
        "activeUserLabel": "2,200 万活跃消费者（北美分部）",
        "source": {
          "url": "https://s205.q4cdn.com/266311280/files/doc_financials/2024/ar/AR2024_JET-com.pdf",
          "title": "Just Eat Takeaway.com 2024 年报",
          "note": "年报披露 North America 分部 2024 年有 2,200 万活跃消费者；该分部以 Grubhub 为核心，但口径不是手机 App MAU，故仅作代理展示。"
        }
      },
      "count": 9,
      "categorySummary": "订单 7，售后与营销 2",
      "rank": 22,
      "previousRank": 22,
      "rankChange": 0
    },
    {
      "id": "google-maps",
      "name": "Google Maps",
      "appCategory": "出行与地图",
      "logo": "assets/logos/global/google-maps.jpg",
      "confidence": "high",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "导航",
          "items": [
            "出发时间",
            "交通变化",
            "路线变更",
            "到站或下车提醒"
          ]
        },
        {
          "name": "地点与共享",
          "items": [
            "位置共享更新",
            "商家或地点更新",
            "本地推荐",
            "离线地图更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "Google Maps 通知设置",
          "url": "https://support.google.com/maps/answer/6149565?hl=en",
          "type": "官方帮助",
          "note": "官方列出交通、地点贡献、评论回复、事件、危机和位置共享等提醒。"
        },
        {
          "title": "Google Maps · App Store",
          "url": "https://apps.apple.com/us/app/id585027354",
          "type": "官方应用页",
          "note": "开发者：Google LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 200000,
        "period": "2024 Q3",
        "methodLabel": "月用户里程碑",
        "source": {
          "url": "https://abc.xyz/2024-q3-earnings-call/",
          "title": "Alphabet 2024 Q3 Earnings Call",
          "note": "Alphabet 披露 Google Maps 超过 20 亿月用户；为跨端产品口径。"
        }
      },
      "count": 8,
      "categorySummary": "导航 4，地点与共享 4",
      "rank": 23,
      "previousRank": 23,
      "rankChange": 0
    },
    {
      "id": "capcut",
      "name": "CapCut",
      "appCategory": "创作与工具",
      "logo": "assets/logos/global/capcut.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "创作任务",
          "items": [
            "导出完成",
            "云项目同步",
            "共享项目更新"
          ]
        },
        {
          "name": "模板与社区",
          "items": [
            "模板或素材更新",
            "互动反馈",
            "创作推荐"
          ]
        },
        {
          "name": "服务",
          "items": [
            "订阅权益",
            "版本更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "CapCut: Photo & Video Editor · App Store",
          "url": "https://apps.apple.com/us/app/id1500855883",
          "type": "官方应用页",
          "note": "开发者：BYTEDANCE PTE. LTD.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 32300,
        "period": "2024-07（历史数据）",
        "methodLabel": "移动 App MAU（二手行业报告）",
        "source": {
          "url": "https://www.scmp.com/tech/big-tech/article/3275336/bytedances-capcut-doubao-top-global-ai-app-downloads-outpacing-chatgpt-report",
          "title": "南华早报引述 QuestMobile",
          "note": "报道明确列出 CapCut 2024-07 全球 MAU 3.23 亿；因时间较早，标记为历史数据。"
        }
      },
      "count": 8,
      "categorySummary": "创作任务 3，模板与社区 3，服务 2",
      "rank": 24,
      "previousRank": 24,
      "rankChange": 0
    },
    {
      "id": "clubhouse",
      "name": "Clubhouse",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/clubhouse.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "房间",
          "items": [
            "关注者开房",
            "预定房间开始",
            "被邀请发言",
            "房间提醒"
          ]
        },
        {
          "name": "互动",
          "items": [
            "新关注者",
            "私信",
            "提及",
            "社区活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "Clubhouse · App Store",
          "url": "https://apps.apple.com/us/app/id1503133294",
          "type": "官方应用页",
          "note": "开发者：Alpha Exploration Co.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 1000,
        "period": "2024 年初（行业估算）",
        "methodLabel": "全球 App MAU（二手行业估算）",
        "source": {
          "url": "https://profiletree.com/clubhouse-social-media-app/",
          "title": "ProfileTree 引述 Business of Apps",
          "note": "报道引述 Business of Apps，估算 Clubhouse 2024 年初约有 1,000 万 MAU；公司未公开同期数据，故标记为行业估算。"
        }
      },
      "count": 8,
      "categorySummary": "房间 4，互动 4",
      "rank": 25,
      "previousRank": 25,
      "rankChange": 0
    },
    {
      "id": "amazon-music",
      "name": "Amazon Music",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/amazon-music.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容更新",
          "items": [
            "关注艺人发布内容",
            "关注播客更新",
            "新节目或电台更新",
            "直播节目开始"
          ]
        },
        {
          "name": "推荐与社交",
          "items": [
            "个性化推荐",
            "好友或关注动态",
            "榜单或精选更新"
          ]
        },
        {
          "name": "服务",
          "items": [
            "下载完成"
          ]
        }
      ],
      "sources": [
        {
          "title": "Amazon Music: Songs & Podcasts · App Store",
          "url": "https://apps.apple.com/us/app/id510855668",
          "type": "官方应用页",
          "note": "开发者：AMZN Mobile LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "WIK · 德国音视频流媒体研究，图 9",
          "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
          "note": "图 9 的 Amazon Music 柱高约 43 分钟/活跃用户/日；德国 Android/iOS 移动端，未单独剔除平板，2021 历史样本。图表没有精确值标签，整数分钟为读图约值，不是全球全体用户均值。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 43,
        "launches": null,
        "activeUsers": null,
        "period": "2020-01 公布（历史值）",
        "methodLabel": "全球客户数；不是 App MAU",
        "activeUserLabel": "超过 5,500 万客户（跨端）",
        "source": {
          "url": "https://press.aboutamazon.com/2020/1/amazon-com-announces-fourth-quarter-sales-up-21-to-87-4-billion",
          "title": "Amazon 官方 · 2019 Q4 业绩公告",
          "note": "2020-01-30 公告披露 Amazon Music 全球客户超过 5,500 万，未定义月度活跃或区分手机端，因此仅作历史规模参考，不参与 MAU 排序。 日均时长补充：2021（历史，德国）；移动端活跃用户日均；图表约值。图 9 的 Amazon Music 柱高约 43 分钟/活跃用户/日；德国 Android/iOS 移动端，未单独剔除平板，2021 历史样本。图表没有精确值标签，整数分钟为读图约值，不是全球全体用户均值。"
        },
        "durationMinutesPrefix": "约",
        "metricMeta": {
          "durationMinutes": {
            "period": "2021（历史，德国）",
            "methodLabel": "移动端活跃用户日均；图表约值",
            "source": {
              "title": "WIK · 德国音视频流媒体研究，图 9",
              "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
              "note": "图 9 的 Amazon Music 柱高约 43 分钟/活跃用户/日；德国 Android/iOS 移动端，未单独剔除平板，2021 历史样本。图表没有精确值标签，整数分钟为读图约值，不是全球全体用户均值。"
            }
          }
        }
      },
      "count": 8,
      "categorySummary": "内容更新 4，推荐与社交 3，服务 1",
      "rank": 26,
      "previousRank": 26,
      "rankChange": 0
    },
    {
      "id": "github",
      "name": "GitHub",
      "appCategory": "协作与办公",
      "logo": "assets/logos/global/github.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "协作",
          "items": [
            "被指派 Issue",
            "被指派 Pull Request",
            "提及",
            "审查请求",
            "Issue 评论",
            "Pull Request 评论"
          ]
        },
        {
          "name": "仓库",
          "items": [
            "工作流运行结果",
            "Release 发布"
          ]
        }
      ],
      "sources": [
        {
          "title": "GitHub · App Store",
          "url": "https://apps.apple.com/us/app/id1477376905",
          "type": "官方应用页",
          "note": "开发者：GitHub。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2025",
        "methodLabel": "开发者账户数",
        "activeUserLabel": "超过 1.5 亿开发者",
        "source": {
          "url": "https://github.blog/news-insights/octoverse/",
          "title": "GitHub Octoverse",
          "note": "开发者账户不是 App MAU，仅作规模参考。"
        }
      },
      "count": 8,
      "categorySummary": "协作 6，仓库 2",
      "rank": 27,
      "previousRank": 27,
      "rankChange": 0
    },
    {
      "id": "paypal",
      "name": "PayPal",
      "appCategory": "支付与金融",
      "logo": "assets/logos/global/paypal.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "资金交易",
          "items": [
            "付款完成",
            "收款到账",
            "退款",
            "转账状态",
            "争议或拒付"
          ]
        },
        {
          "name": "账户",
          "items": [
            "登录或安全提醒",
            "余额或卡片提醒",
            "优惠活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "PayPal - Pay, Send, Save · App Store",
          "url": "https://apps.apple.com/us/app/id283646709",
          "type": "官方应用页",
          "note": "开发者：PayPal, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2024",
        "methodLabel": "活跃账户",
        "activeUserLabel": "约 4.34 亿活跃账户",
        "source": {
          "url": "https://investor.pypl.com/financials/annual-reports-and-proxies/default.aspx",
          "title": "PayPal 年报",
          "note": "活跃账户可能含商户且不是 App MAU。"
        }
      },
      "count": 8,
      "categorySummary": "资金交易 5，账户 3",
      "rank": 28,
      "previousRank": 28,
      "rankChange": 0
    },
    {
      "id": "priceline",
      "name": "Priceline",
      "appCategory": "票务与旅行",
      "logo": "assets/logos/global/priceline.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "行程",
          "items": [
            "价格变化",
            "预订确认",
            "入住或出发提醒",
            "航班状态",
            "行程变更",
            "取消或退款"
          ]
        },
        {
          "name": "服务",
          "items": [
            "优惠活动",
            "账户安全"
          ]
        }
      ],
      "sources": [
        {
          "title": "Priceline - Hotel, Car, Flight · App Store",
          "url": "https://apps.apple.com/us/app/id336381998",
          "type": "官方应用页",
          "note": "开发者：priceline.com。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "未找到可核验的公开同口径数据",
        "methodLabel": "严格口径留空"
      },
      "count": 8,
      "categorySummary": "行程 6，服务 2",
      "rank": 29,
      "previousRank": 29,
      "rankChange": 0
    },
    {
      "id": "soundcloud",
      "name": "SoundCloud",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/soundcloud.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容更新",
          "items": [
            "关注艺人发布内容",
            "关注播客更新",
            "新节目或电台更新",
            "直播节目开始"
          ]
        },
        {
          "name": "推荐与社交",
          "items": [
            "个性化推荐",
            "好友或关注动态",
            "榜单或精选更新"
          ]
        },
        {
          "name": "服务",
          "items": [
            "下载完成"
          ]
        }
      ],
      "sources": [
        {
          "title": "SoundCloud: The Music You Love · App Store",
          "url": "https://apps.apple.com/us/app/id336353151",
          "type": "官方应用页",
          "note": "开发者：SoundCloud Global Limited & Co KG。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "WIK · 德国音视频流媒体研究，图 9",
          "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
          "note": "图 9 的 SoundCloud 柱高约 32 分钟/活跃用户/日；德国 Android/iOS 移动端，未单独剔除平板。无精确数值标签，按刻度读至整数分钟，保留约字，不代表当前全球均值。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 32,
        "launches": null,
        "activeUsers": null,
        "period": "2014-11（历史数据）",
        "methodLabel": "月度独立听众（跨端）",
        "activeUserLabel": "1.75 亿月度听众（2014）",
        "source": {
          "url": "https://www.wmg.com/news/warner-music-group-and-soundcloud-announce-groundbreaking-partnership-20036",
          "title": "Warner Music 与 SoundCloud 合作公告",
          "note": "公告称 SoundCloud 当时每月有 1.75 亿独立听众；数据较旧且未限定手机 App，仅作历史代理展示。 日均时长补充：2021（历史，德国）；移动端活跃用户日均；图表约值。图 9 的 SoundCloud 柱高约 32 分钟/活跃用户/日；德国 Android/iOS 移动端，未单独剔除平板。无精确数值标签，按刻度读至整数分钟，保留约字，不代表当前全球均值。"
        },
        "durationMinutesPrefix": "约",
        "metricMeta": {
          "durationMinutes": {
            "period": "2021（历史，德国）",
            "methodLabel": "移动端活跃用户日均；图表约值",
            "source": {
              "title": "WIK · 德国音视频流媒体研究，图 9",
              "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
              "note": "图 9 的 SoundCloud 柱高约 32 分钟/活跃用户/日；德国 Android/iOS 移动端，未单独剔除平板。无精确数值标签，按刻度读至整数分钟，保留约字，不代表当前全球均值。"
            }
          }
        }
      },
      "count": 8,
      "categorySummary": "内容更新 4，推荐与社交 3，服务 1",
      "rank": 30,
      "previousRank": 30,
      "rankChange": 0
    },
    {
      "id": "youtube-music",
      "name": "YouTube Music",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/youtube-music.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容更新",
          "items": [
            "关注艺人发布内容",
            "关注播客更新",
            "新节目或电台更新",
            "直播节目开始"
          ]
        },
        {
          "name": "推荐与社交",
          "items": [
            "个性化推荐",
            "好友或关注动态",
            "榜单或精选更新"
          ]
        },
        {
          "name": "服务",
          "items": [
            "下载完成"
          ]
        }
      ],
      "sources": [
        {
          "title": "YouTube Music · App Store",
          "url": "https://apps.apple.com/us/app/id1017492454",
          "type": "官方应用页",
          "note": "开发者：Google LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "WIK · 德国音视频流媒体研究，图 9",
          "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
          "note": "图 9 的 YouTube Music 柱高约 25 分钟/活跃用户/日，指独立音乐 App，不是 YouTube 中的音乐视频。德国 Android/iOS 移动端，未单独剔除平板；无精确数字标签，为 2021 历史读图约值。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 25,
        "launches": null,
        "activeUsers": null,
        "period": "截至 2024-12",
        "methodLabel": "订阅规模（非 MAU）",
        "activeUserLabel": "1 亿+订阅（含试用）",
        "source": {
          "url": "https://blog.youtube/inside-youtube/our-big-bets-for-2025/",
          "title": "YouTube CEO 2025 展望",
          "note": "YouTube Music 与 Premium 合计超过 1 亿订阅，含试用；不是 App MAU。 日均时长补充：2021（历史，德国）；移动端活跃用户日均；图表约值。图 9 的 YouTube Music 柱高约 25 分钟/活跃用户/日，指独立音乐 App，不是 YouTube 中的音乐视频。德国 Android/iOS 移动端，未单独剔除平板；无精确数字标签，为 2021 历史读图约值。"
        },
        "durationMinutesPrefix": "约",
        "metricMeta": {
          "durationMinutes": {
            "period": "2021（历史，德国）",
            "methodLabel": "移动端活跃用户日均；图表约值",
            "source": {
              "title": "WIK · 德国音视频流媒体研究，图 9",
              "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
              "note": "图 9 的 YouTube Music 柱高约 25 分钟/活跃用户/日，指独立音乐 App，不是 YouTube 中的音乐视频。德国 Android/iOS 移动端，未单独剔除平板；无精确数字标签，为 2021 历史读图约值。"
            }
          }
        }
      },
      "count": 8,
      "categorySummary": "内容更新 4，推荐与社交 3，服务 1",
      "rank": 31,
      "previousRank": 31,
      "rankChange": 0
    },
    {
      "id": "zoom",
      "name": "Zoom",
      "appCategory": "协作与办公",
      "logo": "assets/logos/global/zoom.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "沟通",
          "items": [
            "直接消息",
            "频道或群组消息",
            "@提及",
            "消息回复",
            "消息反应"
          ]
        },
        {
          "name": "协作",
          "items": [
            "任务被指派",
            "文档评论",
            "会议开始"
          ]
        }
      ],
      "sources": [
        {
          "title": "Zoom Workplace · App Store",
          "url": "https://apps.apple.com/us/app/id546505307",
          "type": "官方应用页",
          "note": "开发者：Zoom Communications, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2020-04（历史数据）",
        "methodLabel": "每日会议参与人次（非独立用户）",
        "activeUserLabel": "3 亿每日会议参与人次（2020）",
        "source": {
          "url": "https://investors.zoom.us/static-files/0229c042-e707-4b11-9110-6ea1e9ce31b4",
          "title": "Zoom FY2021 股东信",
          "note": "Zoom 当时披露每日会议参与人次平均达到 3 亿；同一人可重复计数，且数据较旧，不写入 MAU 排序。"
        }
      },
      "count": 8,
      "categorySummary": "沟通 5，协作 3",
      "rank": 32,
      "previousRank": 32,
      "rankChange": 0
    },
    {
      "id": "ticketmaster",
      "name": "Ticketmaster",
      "appCategory": "票务与旅行",
      "logo": "assets/logos/global/ticketmaster.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "票务",
          "items": [
            "开售提醒",
            "活动临近",
            "电子票可用",
            "票务转让状态",
            "活动变更或取消"
          ]
        },
        {
          "name": "服务",
          "items": [
            "付款或退款",
            "推荐活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "Ticketmaster－Buy, Sell Tickets · App Store",
          "url": "https://apps.apple.com/us/app/id500003565",
          "type": "官方应用页",
          "note": "开发者：Ticketmaster L.L.C。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 3000,
        "period": "2025-09",
        "methodLabel": "全球 Ticketmaster App MAU 官方",
        "source": {
          "url": "https://business.ticketmaster.com/ticketing-straight-to-your-app/",
          "title": "Ticketmaster Business",
          "note": "官方披露 Ticketmaster App 每月有超过 3,000 万活跃用户，覆盖 iOS、Android 与 21 个市场。"
        }
      },
      "count": 7,
      "categorySummary": "票务 5，服务 2",
      "rank": 33,
      "previousRank": 33,
      "rankChange": 0
    },
    {
      "id": "amazon-alexa",
      "name": "Amazon Alexa",
      "appCategory": "智能生活",
      "logo": "assets/logos/global/amazon-alexa.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "设备与家庭",
          "items": [
            "设备状态变化",
            "门铃或摄像头事件",
            "提醒事项或计时器",
            "智能家居例程"
          ]
        },
        {
          "name": "服务",
          "items": [
            "购物或配送更新",
            "账号安全",
            "功能更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "Amazon Alexa · App Store",
          "url": "https://apps.apple.com/us/app/id944011620",
          "type": "官方应用页",
          "note": "开发者：AMZN Mobile LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2025 股东信",
        "methodLabel": "活跃端点（非用户）",
        "activeUserLabel": "6 亿活跃端点",
        "source": {
          "url": "https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-2025-letter-to-shareholders",
          "title": "Amazon CEO 2025 股东信",
          "note": "官方披露 Alexa 在设备、汽车、办公与影音端共有 6 亿活跃端点；不是 App MAU。"
        }
      },
      "count": 7,
      "categorySummary": "设备与家庭 4，服务 3",
      "rank": 34,
      "previousRank": 34,
      "rankChange": 0
    },
    {
      "id": "disney-plus",
      "name": "Disney+",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/disney-plus.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容",
          "items": [
            "新剧集上线",
            "新电影上线",
            "关注内容更新",
            "直播或体育赛事开始"
          ]
        },
        {
          "name": "观看与服务",
          "items": [
            "继续观看提醒",
            "下载完成",
            "订阅或账号提醒"
          ]
        }
      ],
      "sources": [
        {
          "title": "Disney+ · App Store",
          "url": "https://apps.apple.com/us/app/id1446075923",
          "type": "官方应用页",
          "note": "开发者：Disney Electronic Content, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Disney 2025 Q2 业绩",
          "url": "https://investors.thewaltdisneycompany.com/news/news-details/2025/The-Walt-Disney-Company-Reports-Second-Quarter-and-Six-Months-Earnings-for-Fiscal-2025-05-07-2025/default.aspx",
          "type": "官方财报代理",
          "note": "Disney+ 付费订阅 1.26 亿；订阅账户不是 App MAU。"
        },
        {
          "title": "Apptopia · Disney+ 4 Week Report，第 5 页",
          "url": "https://engage.apptopia.com/hubfs/Disney%2B/New%20Disney%2B%20Month.pdf",
          "note": "2019-11-12 上线后四周报告明确披露 recent global sessions per DAU 为 2.7，即当天活跃用户的日均会话；当时仅在美国、加拿大、澳大利亚、新西兰、荷兰上线。不能外推为当前全球用户平均每天打开次数，也不能把该值复制给竞争应用。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 23,
        "launches": 2.7,
        "activeUsers": null,
        "period": "时长 2025 Q4 美国 / 订阅 2025 Q2",
        "methodLabel": "美国手机日均历史样本；订阅非 MAU",
        "activeUserLabel": "1.26 亿付费订阅",
        "source": {
          "url": "https://omdia.tech.informa.com/pr/2026/feb/microdramas-overtake-streamers-on-mobile-engagement-says-omdia",
          "title": "Omdia · 2026-02-23 移动视频研究",
          "note": "Omdia 分析 Sensor Tower 2025 Q4 美国移动端数据，Disney+ 人均每天 23.0 分钟，不代表全球或电视端时长。1.26 亿付费订阅来自另一条官方财报，不是 App MAU。 日均打开补充：2019-12（上线四周，历史）；全球已上线市场；每 DAU 日均会话。2019-11-12 上线后四周报告明确披露 recent global sessions per DAU 为 2.7，即当天活跃用户的日均会话；当时仅在美国、加拿大、澳大利亚、新西兰、荷兰上线。不能外推为当前全球用户平均每天打开次数，也不能把该值复制给竞争应用。"
        },
        "metricMeta": {
          "launches": {
            "period": "2019-12（上线四周，历史）",
            "methodLabel": "全球已上线市场；每 DAU 日均会话",
            "source": {
              "title": "Apptopia · Disney+ 4 Week Report，第 5 页",
              "url": "https://engage.apptopia.com/hubfs/Disney%2B/New%20Disney%2B%20Month.pdf",
              "note": "2019-11-12 上线后四周报告明确披露 recent global sessions per DAU 为 2.7，即当天活跃用户的日均会话；当时仅在美国、加拿大、澳大利亚、新西兰、荷兰上线。不能外推为当前全球用户平均每天打开次数，也不能把该值复制给竞争应用。"
            }
          }
        }
      },
      "count": 7,
      "categorySummary": "内容 4，观看与服务 3",
      "rank": 35,
      "previousRank": 35,
      "rankChange": 0
    },
    {
      "id": "flickr",
      "name": "Flickr",
      "appCategory": "社交与社区",
      "logo": "assets/logos/global/flickr.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "共享活动",
          "items": [
            "收到共享相册",
            "新成员加入共享相册",
            "共享相册新照片",
            "照片评论",
            "照片或相册获赞",
            "收到新会话",
            "会话回复"
          ]
        }
      ],
      "sources": [
        {
          "title": "Flickr · App Store",
          "url": "https://apps.apple.com/us/app/id328407587",
          "type": "官方应用页",
          "note": "开发者：Flickr, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2026-01 至 2026-07",
        "methodLabel": "欧盟平台月活代理",
        "activeUserLabel": "19.7 万欧盟平台 MAU",
        "source": {
          "url": "https://www.flickrhelp.com/hc/en-us/articles/16048737757716-Digital-Services-Act-Information-on-Active-Monthly-Users-in-the-European-Union",
          "title": "Flickr DSA 披露",
          "note": "Flickr 依据欧盟 DSA 披露该期间欧盟平均月活约 19.7 万；仅为欧盟且覆盖平台，不作为全球手机 App MAU 排序值。"
        }
      },
      "count": 7,
      "categorySummary": "共享活动 7",
      "rank": 36,
      "previousRank": 36,
      "rankChange": 0
    },
    {
      "id": "iheartradio",
      "name": "iHeartRadio",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/iheartradio.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容更新",
          "items": [
            "关注艺人发布内容",
            "关注播客更新",
            "新节目或电台更新",
            "直播节目开始"
          ]
        },
        {
          "name": "推荐与社交",
          "items": [
            "个性化推荐",
            "好友或关注动态",
            "榜单或精选更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "iHeart: Radio, Music, Podcasts · App Store",
          "url": "https://apps.apple.com/us/app/id290638154",
          "type": "官方应用页",
          "note": "开发者：iHeartMedia Management Services, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "官网当前值（抓取于 2026-09）",
        "methodLabel": "注册用户（跨端）",
        "activeUserLabel": "1.88 亿注册用户",
        "source": {
          "url": "https://www.iheartmedia.com/digital",
          "title": "iHeartMedia · iHeartRadio",
          "note": "iHeartRadio 官方称 App 超过 1.88 亿注册用户，并覆盖 500 多个平台；注册量不是 MAU。"
        }
      },
      "count": 7,
      "categorySummary": "内容更新 4，推荐与社交 3",
      "rank": 37,
      "previousRank": 37,
      "rankChange": 0
    },
    {
      "id": "max",
      "name": "Max",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/max.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容",
          "items": [
            "新剧集上线",
            "新电影上线",
            "关注内容更新",
            "直播或体育赛事开始"
          ]
        },
        {
          "name": "观看与服务",
          "items": [
            "继续观看提醒",
            "下载完成",
            "订阅或账号提醒"
          ]
        }
      ],
      "sources": [
        {
          "title": "HBO Max: Stream Movies & TV · App Store",
          "url": "https://apps.apple.com/us/app/id1666653815",
          "type": "官方应用页",
          "note": "开发者：WarnerMedia Global Digital Services, LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Apptopia · Mid-Q1 2026 Streaming Investor Note",
          "url": "https://apptopia.com/en/insights/investor-note-mid-q1-2026-look-at-potential-and-peril-for-streamers-nflx-wbd-cmcsa-dis/",
          "note": "2026-03-10 发布，明确限定全部为美国 mobile app 数据，2026 Q1 仅截至 2 月。HBO Max 每日活跃用户平均使用 63.4 分钟；对应表内 Max 的同一产品品牌沿革。不是全年全球均值，也不是月活用户自然日摊均。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 63.4,
        "launches": null,
        "activeUsers": null,
        "period": "2025 Q4",
        "methodLabel": "WBD 流媒体订阅（非单 App MAU）",
        "activeUserLabel": "约 1.32 亿流媒体订阅",
        "source": {
          "url": "https://s201.q4cdn.com/336605034/files/doc_earnings/2025/q4/earnings-result/WBD-4Q25-Shareholder-Letter.pdf",
          "title": "WBD 2025 Q4 股东信",
          "note": "WBD 流媒体板块（含 HBO Max 与 discovery+）期末约 1.32 亿订阅；不是 Max 单 App MAU。 日均时长补充：2026-01—02（美国）；手机端；每 DAU 日均时长。2026-03-10 发布，明确限定全部为美国 mobile app 数据，2026 Q1 仅截至 2 月。HBO Max 每日活跃用户平均使用 63.4 分钟；对应表内 Max 的同一产品品牌沿革。不是全年全球均值，也不是月活用户自然日摊均。"
        },
        "metricMeta": {
          "durationMinutes": {
            "period": "2026-01—02（美国）",
            "methodLabel": "手机端；每 DAU 日均时长",
            "source": {
              "title": "Apptopia · Mid-Q1 2026 Streaming Investor Note",
              "url": "https://apptopia.com/en/insights/investor-note-mid-q1-2026-look-at-potential-and-peril-for-streamers-nflx-wbd-cmcsa-dis/",
              "note": "2026-03-10 发布，明确限定全部为美国 mobile app 数据，2026 Q1 仅截至 2 月。HBO Max 每日活跃用户平均使用 63.4 分钟；对应表内 Max 的同一产品品牌沿革。不是全年全球均值，也不是月活用户自然日摊均。"
            }
          }
        }
      },
      "count": 7,
      "categorySummary": "内容 4，观看与服务 3",
      "rank": 38,
      "previousRank": 38,
      "rankChange": 0
    },
    {
      "id": "netflix",
      "name": "Netflix",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/netflix.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容",
          "items": [
            "新剧集上线",
            "新电影上线",
            "关注内容更新",
            "直播或体育赛事开始"
          ]
        },
        {
          "name": "观看与服务",
          "items": [
            "继续观看提醒",
            "下载完成",
            "订阅或账号提醒"
          ]
        }
      ],
      "sources": [
        {
          "title": "Netflix · App Store",
          "url": "https://apps.apple.com/us/app/id363590051",
          "type": "官方应用页",
          "note": "开发者：Netflix, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Netflix 2024 Q4 付费会员",
          "url": "https://ir.netflix.net/financials/quarterly-earnings/default.aspx",
          "type": "官方财报代理",
          "note": "保留原历史规模记录：2024 Q4 付费会员 3.016 亿，既不是 App MAU，也不等于本次美国移动 MAU。"
        }
      ],
      "usage": {
        "durationMinutes": 24.8,
        "launches": null,
        "activeUsers": null,
        "period": "2025 Q4（美国移动端历史样本）",
        "methodLabel": "美国手机日均；地区 MAU 仅作参考",
        "activeUserLabel": "约 1,200 万美国移动 MAU",
        "source": {
          "url": "https://omdia.tech.informa.com/pr/2026/feb/microdramas-overtake-streamers-on-mobile-engagement-says-omdia",
          "title": "Omdia · 2026-02-23 移动视频研究",
          "note": "Omdia 分析 Sensor Tower 2025 Q4 数据：美国移动端人均每日 24.8 分钟，月活约 1,200 万。地区 MAU 不是全球 MAU，不填入全球 MAU 数值字段，也不参与 MAU 排序。"
        }
      },
      "count": 7,
      "categorySummary": "内容 4，观看与服务 3",
      "rank": 39,
      "previousRank": 39,
      "rankChange": 0
    },
    {
      "id": "notion",
      "name": "Notion",
      "appCategory": "协作与办公",
      "logo": "assets/logos/global/notion.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "沟通",
          "items": [
            "直接消息",
            "频道或群组消息",
            "@提及",
            "消息回复",
            "消息反应"
          ]
        },
        {
          "name": "协作",
          "items": [
            "任务被指派",
            "文档评论"
          ]
        }
      ],
      "sources": [
        {
          "title": "Notion: Notes, Tasks, AI · App Store",
          "url": "https://apps.apple.com/us/app/id1232780281",
          "type": "官方应用页",
          "note": "开发者：Notion Labs, Incorporated。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2024-08",
        "methodLabel": "累计/当前用户规模（非 MAU）",
        "activeUserLabel": "1 亿+用户",
        "source": {
          "url": "https://www.notion.com/blog/100-million-of-you",
          "title": "Notion：100 Million of You",
          "note": "Notion 官方称 2024-08 用户数突破 1 亿，但未称月活、也未限定手机 App，故仅作代理展示。"
        }
      },
      "count": 7,
      "categorySummary": "沟通 5，协作 2",
      "rank": 40,
      "previousRank": 40,
      "rankChange": 0
    },
    {
      "id": "stubhub",
      "name": "StubHub",
      "appCategory": "票务与旅行",
      "logo": "assets/logos/global/stubhub.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "票务",
          "items": [
            "开售提醒",
            "活动临近",
            "电子票可用",
            "票务转让状态",
            "活动变更或取消"
          ]
        },
        {
          "name": "服务",
          "items": [
            "付款或退款",
            "推荐活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "StubHub: Event Tickets · App Store",
          "url": "https://apps.apple.com/us/app/id366562751",
          "type": "官方应用页",
          "note": "开发者：Stubhub, Inc。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2026-03",
        "methodLabel": "全球注册用户（非 MAU）",
        "activeUserLabel": "1.25 亿+注册用户",
        "source": {
          "url": "https://newsroom.stubhub.com/2026/03/18/stubhub-launches-distribution-manager-an-ai-powered-tool-for-artists-teams-and-venues/",
          "title": "StubHub Newsroom",
          "note": "StubHub 官方披露全球注册用户超过 1.25 亿；注册量不是手机 App MAU。"
        }
      },
      "count": 7,
      "categorySummary": "票务 5，服务 2",
      "rank": 41,
      "previousRank": 41,
      "rankChange": 0
    },
    {
      "id": "youtube-tv",
      "name": "YouTube TV",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/youtube-tv.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容",
          "items": [
            "新剧集上线",
            "新电影上线",
            "关注内容更新",
            "直播或体育赛事开始"
          ]
        },
        {
          "name": "观看与服务",
          "items": [
            "继续观看提醒",
            "下载完成",
            "订阅或账号提醒"
          ]
        }
      ],
      "sources": [
        {
          "title": "YouTube TV · App Store",
          "url": "https://apps.apple.com/us/app/id1193350206",
          "type": "官方应用页",
          "note": "开发者：Google LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "截至 2024-12",
        "methodLabel": "订阅规模（非 MAU）",
        "activeUserLabel": "800 万+订阅",
        "source": {
          "url": "https://blog.youtube/inside-youtube/our-big-bets-for-2025/",
          "title": "YouTube CEO 2025 展望",
          "note": "YouTube TV 超过 800 万订阅；不是 App MAU。"
        }
      },
      "count": 7,
      "categorySummary": "内容 4，观看与服务 3",
      "rank": 42,
      "previousRank": 42,
      "rankChange": 0
    },
    {
      "id": "chatgpt",
      "name": "ChatGPT",
      "appCategory": "AI 助手",
      "logo": "assets/logos/global/chatgpt.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "任务与内容",
          "items": [
            "后台任务完成",
            "生成结果就绪",
            "共享或协作更新"
          ]
        },
        {
          "name": "账号与产品",
          "items": [
            "账号安全",
            "服务状态",
            "产品功能更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "ChatGPT · App Store",
          "url": "https://apps.apple.com/us/app/id6448311069",
          "type": "官方应用页",
          "note": "开发者：OpenAI OpCo, LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "ChatGPT 移动 App 达 10 亿 MAU",
          "url": "https://sensortower.com/press/sensor-tower-state-of-ai-2026-report-global-time-spent-on-generative-ai-apps-projected-to-more-than-double-year-over-year",
          "type": "行业报告",
          "note": "Sensor Tower 2026-06 新闻稿确认 ChatGPT 于 2026-05 成为最快达到 10 亿 MAU 的移动 App。"
        }
      ],
      "usage": {
        "durationMinutes": 16,
        "launches": 7.8,
        "activeUsers": 100000,
        "period": "H1 2025 / MAU 2026-05",
        "methodLabel": "全球 iOS + Google Play；App MAU",
        "source": {
          "url": "https://investgame.net/wp-content/uploads/2025/07/sensor_tower__state_of_ai_apps_report_2025.pdf",
          "title": "Sensor Tower State of AI Apps 2025",
          "note": "日均时长与打开次数为 H1 2025 全球移动 App 用户均值；Sensor Tower 2026-05 披露移动 App MAU 达 10 亿。"
        }
      },
      "count": 6,
      "categorySummary": "任务与内容 3，账号与产品 3",
      "rank": 43,
      "previousRank": 43,
      "rankChange": 0
    },
    {
      "id": "accuweather",
      "name": "AccuWeather",
      "appCategory": "生活与健康",
      "logo": "assets/logos/global/accuweather.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "恶劣天气",
          "items": [
            "严重天气预警",
            "降雨或降雪提醒",
            "雷暴或大风提醒"
          ]
        },
        {
          "name": "日常预报",
          "items": [
            "每日预报",
            "温度变化",
            "空气质量"
          ]
        }
      ],
      "sources": [
        {
          "title": "AccuWeather: Weather Forecast · App Store",
          "url": "https://apps.apple.com/us/app/id300048137",
          "type": "官方应用页",
          "note": "开发者：AccuWeather International, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2025-07",
        "methodLabel": "跨网页与 App 月访客",
        "activeUserLabel": "2 亿月度访客（跨端）",
        "source": {
          "url": "https://advertising.accuweather.com/",
          "title": "AccuWeather Advertising",
          "note": "官方广告页披露 2 亿全球月度独立访客与人均日访 3 次，但未限定手机 App，故仅作代理展示。"
        }
      },
      "count": 6,
      "categorySummary": "恶劣天气 3，日常预报 3",
      "rank": 44,
      "previousRank": 44,
      "rankChange": 0
    },
    {
      "id": "fitbit",
      "name": "Fitbit",
      "appCategory": "生活与健康",
      "logo": "assets/logos/global/fitbit.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "健康目标",
          "items": [
            "活动目标达成",
            "久坐提醒",
            "睡眠或恢复提醒"
          ]
        },
        {
          "name": "设备与社交",
          "items": [
            "设备同步或电量",
            "好友挑战更新",
            "账号或服务提醒"
          ]
        }
      ],
      "sources": [
        {
          "title": "Google Health (Fitbit) · App Store",
          "url": "https://apps.apple.com/us/app/id462638897",
          "type": "官方应用页",
          "note": "开发者：Google LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2017（历史数据）",
        "methodLabel": "活跃用户（未限定手机 App MAU）",
        "activeUserLabel": "2,500 万+活跃用户（2017）",
        "source": {
          "url": "https://blog.google/products-and-platforms/devices/fitbit/fitbit-community-grows-25m-active-users/",
          "title": "Fitbit 官方博客",
          "note": "Fitbit 官方当年披露活跃用户超过 2,500 万，但时间较早且未限定手机 App 月活，仅作历史代理展示。"
        }
      },
      "count": 6,
      "categorySummary": "健康目标 3，设备与社交 3",
      "rank": 45,
      "previousRank": 45,
      "rankChange": 0
    },
    {
      "id": "tunein",
      "name": "TuneIn Radio",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/tunein.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "内容更新",
          "items": [
            "关注艺人发布内容",
            "关注播客更新",
            "新节目或电台更新",
            "直播节目开始"
          ]
        },
        {
          "name": "推荐与社交",
          "items": [
            "个性化推荐",
            "好友或关注动态"
          ]
        }
      ],
      "sources": [
        {
          "title": "TuneIn Radio: Music & Sports · App Store",
          "url": "https://apps.apple.com/us/app/id418987775",
          "type": "官方应用页",
          "note": "开发者：TuneIn。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "WIK · 德国音视频流媒体研究，图 9",
          "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
          "note": "图 9 的 TuneIn Radio 柱高约 38 分钟/活跃用户/日，德国 Android/iOS 移动端，未单独剔除平板。图无精确值标签，为 2021 历史读图约值，不是车载/智能音箱所有终端的收听时长。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 38,
        "launches": null,
        "activeUsers": null,
        "period": "2025-11",
        "methodLabel": "月活听众（跨 200+ 平台）",
        "activeUserLabel": "7,500 万+月活听众（跨端）",
        "source": {
          "url": "https://corporate.stingray.com/acquisitions/stingray-acquires-tunein/",
          "title": "Stingray 收购 TuneIn 公告",
          "note": "收购方官方公告称 TuneIn 全球每月活跃听众超过 7,500 万，但覆盖车机、网页及连接设备，故不写入手机 App MAU 排序。 日均时长补充：2021（历史，德国）；移动端活跃用户日均；图表约值。图 9 的 TuneIn Radio 柱高约 38 分钟/活跃用户/日，德国 Android/iOS 移动端，未单独剔除平板。图无精确值标签，为 2021 历史读图约值，不是车载/智能音箱所有终端的收听时长。"
        },
        "durationMinutesPrefix": "约",
        "metricMeta": {
          "durationMinutes": {
            "period": "2021（历史，德国）",
            "methodLabel": "移动端活跃用户日均；图表约值",
            "source": {
              "title": "WIK · 德国音视频流媒体研究，图 9",
              "url": "https://plasma.wik.org/static/PDF/WIK_DOTT_A%20first%20analysis%20of%20Audio%20and%20Video%20streaming%20markets%20in%20Germany_23122022.pdf",
              "note": "图 9 的 TuneIn Radio 柱高约 38 分钟/活跃用户/日，德国 Android/iOS 移动端，未单独剔除平板。图无精确值标签，为 2021 历史读图约值，不是车载/智能音箱所有终端的收听时长。"
            }
          }
        }
      },
      "count": 6,
      "categorySummary": "内容更新 4，推荐与社交 2",
      "rank": 46,
      "previousRank": 46,
      "rankChange": 0
    },
    {
      "id": "gemini",
      "name": "Gemini",
      "appCategory": "AI 助手",
      "logo": "assets/logos/global/gemini.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "任务与内容",
          "items": [
            "后台任务完成",
            "生成结果就绪",
            "共享或协作更新"
          ]
        },
        {
          "name": "账号与产品",
          "items": [
            "账号安全",
            "服务状态"
          ]
        }
      ],
      "sources": [
        {
          "title": "Google Gemini · App Store",
          "url": "https://apps.apple.com/us/app/id6477489729",
          "type": "官方应用页",
          "note": "开发者：Google LLC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Gemini App MAU 突破 10 亿",
          "url": "https://blog.google/intl/ko-kr/company-news/inside-google/gemini-one-billion-monthly-users-kr/",
          "type": "官方规模数据",
          "note": "Google 2026-08 明确披露 Gemini App 月活超过 10 亿。"
        }
      ],
      "usage": {
        "durationMinutes": 1.8,
        "launches": 0.9,
        "activeUsers": 100000,
        "period": "2025-07 / MAU 2026-08",
        "methodLabel": "美国移动 App 周均换算日均；App MAU 官方",
        "source": {
          "url": "https://sensortower.com/blog/top-chatgpt-competitors",
          "title": "Sensor Tower：ChatGPT 竞争应用",
          "note": "Sensor Tower 披露 2025 年 7 月中旬美国 Gemini App 用户每周约 12.5 分钟、6.5 次；网页按 12.5÷7=1.8 分钟/日、6.5÷7=0.9 次/日换算。MAU 另由 Google 官方披露为 10 亿。"
        }
      },
      "count": 5,
      "categorySummary": "任务与内容 3，账号与产品 2",
      "rank": 47,
      "previousRank": 47,
      "rankChange": 0
    },
    {
      "id": "meta-ai",
      "name": "Meta AI",
      "appCategory": "AI 助手",
      "logo": "assets/logos/global/meta-ai.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "任务与内容",
          "items": [
            "后台任务完成",
            "生成结果就绪",
            "共享或协作更新"
          ]
        },
        {
          "name": "账号与产品",
          "items": [
            "账号安全",
            "服务状态"
          ]
        }
      ],
      "sources": [
        {
          "title": "Meta AI · App Store",
          "url": "https://apps.apple.com/us/app/id1558240027",
          "type": "官方应用页",
          "note": "开发者：Meta Platforms, Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 6100,
        "period": "2026 Q2",
        "methodLabel": "Sensor Tower 全球移动 App MAU",
        "source": {
          "url": "https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html",
          "title": "EL PAÍS / EFE 引述 Sensor Tower",
          "note": "报道列出 Meta AI 全球移动 App MAU 6,100 万。"
        }
      },
      "count": 5,
      "categorySummary": "任务与内容 3，账号与产品 2",
      "rank": 48,
      "previousRank": 48,
      "rankChange": 0
    },
    {
      "id": "claude",
      "name": "Claude",
      "appCategory": "AI 助手",
      "logo": "assets/logos/global/claude.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "任务与内容",
          "items": [
            "后台任务完成",
            "生成结果就绪",
            "共享或协作更新"
          ]
        },
        {
          "name": "账号与产品",
          "items": [
            "账号安全",
            "服务状态"
          ]
        }
      ],
      "sources": [
        {
          "title": "Claude by Anthropic · App Store",
          "url": "https://apps.apple.com/us/app/id6473753684",
          "type": "官方应用页",
          "note": "开发者：Anthropic PBC。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Apptopia · Gen AI Chatbots February 2026 Data Brief",
          "url": "https://apptopia.com/en/insights/gen-ai-chatbots-february-2026-apptopia-data-brief/",
          "note": "2026-02-03 报告正文明确给出 Claude Average Time Spent per DAU 为 34.7 分钟（1 月），不是 top 10% 重度用户。正文没有在该时长段落单独明确地域，故不称全球或美国均值；适用 Apptopia 移动端日活研究样本。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 34.7,
        "launches": null,
        "activeUsers": 5600,
        "period": "2026 Q2",
        "methodLabel": "Sensor Tower 全球移动 App MAU",
        "source": {
          "url": "https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html",
          "title": "EL PAÍS / EFE 引述 Sensor Tower",
          "note": "报道列出 Claude 全球移动 App MAU 5,600 万。 日均时长补充：2026-01（研究样本）；手机 App 每 DAU；地区未单独明确。2026-02-03 报告正文明确给出 Claude Average Time Spent per DAU 为 34.7 分钟（1 月），不是 top 10% 重度用户。正文没有在该时长段落单独明确地域，故不称全球或美国均值；适用 Apptopia 移动端日活研究样本。"
        },
        "metricMeta": {
          "durationMinutes": {
            "period": "2026-01（研究样本）",
            "methodLabel": "手机 App 每 DAU；地区未单独明确",
            "source": {
              "title": "Apptopia · Gen AI Chatbots February 2026 Data Brief",
              "url": "https://apptopia.com/en/insights/gen-ai-chatbots-february-2026-apptopia-data-brief/",
              "note": "2026-02-03 报告正文明确给出 Claude Average Time Spent per DAU 为 34.7 分钟（1 月），不是 top 10% 重度用户。正文没有在该时长段落单独明确地域，故不称全球或美国均值；适用 Apptopia 移动端日活研究样本。"
            }
          }
        }
      },
      "count": 5,
      "categorySummary": "任务与内容 3，账号与产品 2",
      "rank": 49,
      "previousRank": 49,
      "rankChange": 0
    },
    {
      "id": "grok",
      "name": "Grok",
      "appCategory": "AI 助手",
      "logo": "assets/logos/global/grok.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "任务与内容",
          "items": [
            "后台任务完成",
            "生成结果就绪",
            "共享或协作更新"
          ]
        },
        {
          "name": "账号与产品",
          "items": [
            "账号安全",
            "服务状态"
          ]
        }
      ],
      "sources": [
        {
          "title": "Grok AI · App Store",
          "url": "https://apps.apple.com/us/app/id6670324846",
          "type": "官方应用页",
          "note": "开发者：X Corp.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Apptopia · Gen AI Chatbots March 2026 Data Brief",
          "url": "https://apptopia.com/en/insights/gen-ai-chatbots-march-2026-apptopia-data-brief-claude-gets-traction/",
          "note": "2026-03-06 报告比较 2025-08 至 2026-02，明确称 Grok Average Time Spent per DAU 增至 nearly 22 分钟。保留近字，是原报告近似值，不是精确 22；正文混合美国/全球份额，未单独交代时长地域，不能当作全球均值。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 22,
        "launches": null,
        "activeUsers": 5000,
        "period": "2026 Q2",
        "methodLabel": "Sensor Tower 全球移动 App MAU",
        "source": {
          "url": "https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html",
          "title": "EL PAÍS / EFE 引述 Sensor Tower",
          "note": "报道列出 Grok 全球移动 App MAU 5,000 万。 日均时长补充：2026-02（研究样本）；手机 App 每 DAU；地区未单独明确。2026-03-06 报告比较 2025-08 至 2026-02，明确称 Grok Average Time Spent per DAU 增至 nearly 22 分钟。保留近字，是原报告近似值，不是精确 22；正文混合美国/全球份额，未单独交代时长地域，不能当作全球均值。"
        },
        "durationMinutesPrefix": "近",
        "metricMeta": {
          "durationMinutes": {
            "period": "2026-02（研究样本）",
            "methodLabel": "手机 App 每 DAU；地区未单独明确",
            "source": {
              "title": "Apptopia · Gen AI Chatbots March 2026 Data Brief",
              "url": "https://apptopia.com/en/insights/gen-ai-chatbots-march-2026-apptopia-data-brief-claude-gets-traction/",
              "note": "2026-03-06 报告比较 2025-08 至 2026-02，明确称 Grok Average Time Spent per DAU 增至 nearly 22 分钟。保留近字，是原报告近似值，不是精确 22；正文混合美国/全球份额，未单独交代时长地域，不能当作全球均值。"
            }
          }
        }
      },
      "count": 5,
      "categorySummary": "任务与内容 3，账号与产品 2",
      "rank": 50,
      "previousRank": 50,
      "rankChange": 0
    },
    {
      "id": "perplexity",
      "name": "Perplexity",
      "appCategory": "AI 助手",
      "logo": "assets/logos/global/perplexity.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "任务与内容",
          "items": [
            "后台任务完成",
            "生成结果就绪",
            "共享或协作更新"
          ]
        },
        {
          "name": "账号与产品",
          "items": [
            "账号安全",
            "服务状态"
          ]
        }
      ],
      "sources": [
        {
          "title": "Perplexity - AI Search & Chat · App Store",
          "url": "https://apps.apple.com/us/app/id1668000334",
          "type": "官方应用页",
          "note": "开发者：Perplexity AI Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Apptopia · Gen AI Chatbots April 2026 Data Brief",
          "url": "https://apptopia.com/en/insights/gen-ai-chatbots-april-2026-apptopia-data-brief-chatgpt-drops-below-40-market-share/",
          "note": "2026-04-02 美国手机聊天机器人市场报告给出 Perplexity average time spent per user 从 13 增至 15 分钟，处于日活使用分析语境；与文中单独标明的 Power Users 口径区分。非网页访问时长，不把 120/139/154 分钟重度用户数值用作全体均值。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 15,
        "launches": null,
        "activeUsers": 4400,
        "period": "2026 Q2",
        "methodLabel": "Sensor Tower 全球移动 App MAU",
        "source": {
          "url": "https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html",
          "title": "EL PAÍS / EFE 引述 Sensor Tower",
          "note": "报道列出 Perplexity 全球移动 App MAU 4,400 万。 日均时长补充：2026-03（美国市场研究）；手机 App 日活用户日均；非重度子群。2026-04-02 美国手机聊天机器人市场报告给出 Perplexity average time spent per user 从 13 增至 15 分钟，处于日活使用分析语境；与文中单独标明的 Power Users 口径区分。非网页访问时长，不把 120/139/154 分钟重度用户数值用作全体均值。"
        },
        "metricMeta": {
          "durationMinutes": {
            "period": "2026-03（美国市场研究）",
            "methodLabel": "手机 App 日活用户日均；非重度子群",
            "source": {
              "title": "Apptopia · Gen AI Chatbots April 2026 Data Brief",
              "url": "https://apptopia.com/en/insights/gen-ai-chatbots-april-2026-apptopia-data-brief-chatgpt-drops-below-40-market-share/",
              "note": "2026-04-02 美国手机聊天机器人市场报告给出 Perplexity average time spent per user 从 13 增至 15 分钟，处于日活使用分析语境；与文中单独标明的 Power Users 口径区分。非网页访问时长，不把 120/139/154 分钟重度用户数值用作全体均值。"
            }
          }
        }
      },
      "count": 5,
      "categorySummary": "任务与内容 3，账号与产品 2",
      "rank": 51,
      "previousRank": 51,
      "rankChange": 0
    },
    {
      "id": "copilot",
      "name": "Microsoft Copilot",
      "appCategory": "AI 助手",
      "logo": "assets/logos/global/copilot.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "任务与内容",
          "items": [
            "后台任务完成",
            "生成结果就绪",
            "共享或协作更新"
          ]
        },
        {
          "name": "账号与产品",
          "items": [
            "账号安全",
            "服务状态"
          ]
        }
      ],
      "sources": [
        {
          "title": "Microsoft Copilot · App Store",
          "url": "https://apps.apple.com/us/app/id541164041",
          "type": "官方应用页",
          "note": "开发者：Microsoft Corporation。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        },
        {
          "title": "Apptopia · Gen AI Chatbots February 2026 Data Brief",
          "url": "https://apptopia.com/en/insights/gen-ai-chatbots-february-2026-apptopia-data-brief/",
          "note": "2026-02-03 报告明确披露消费者版 Microsoft Copilot 为 27.2 分钟/DAU，不是企业集成版 Microsoft 365 Copilot，也不是重度用户的 154 分钟。时长段落未单独明确地域，因此只标记为移动端研究样本，不称全球均值。",
          "type": "使用行为补充研究"
        }
      ],
      "usage": {
        "durationMinutes": 27.2,
        "launches": null,
        "activeUsers": 3100,
        "period": "2026 Q2",
        "methodLabel": "Sensor Tower 全球移动 App MAU",
        "source": {
          "url": "https://elpais.com/tecnologia/2026-06-04/chatgpt-se-convierte-en-la-aplicacion-mas-rapida-en-conseguir-1000-millones-de-usuarios.html",
          "title": "EL PAÍS / EFE 引述 Sensor Tower",
          "note": "报道列出 Microsoft Copilot 全球移动 App MAU 3,100 万。 日均时长补充：2026-01（研究样本）；手机 App 每 DAU；地区未单独明确。2026-02-03 报告明确披露消费者版 Microsoft Copilot 为 27.2 分钟/DAU，不是企业集成版 Microsoft 365 Copilot，也不是重度用户的 154 分钟。时长段落未单独明确地域，因此只标记为移动端研究样本，不称全球均值。"
        },
        "metricMeta": {
          "durationMinutes": {
            "period": "2026-01（研究样本）",
            "methodLabel": "手机 App 每 DAU；地区未单独明确",
            "source": {
              "title": "Apptopia · Gen AI Chatbots February 2026 Data Brief",
              "url": "https://apptopia.com/en/insights/gen-ai-chatbots-february-2026-apptopia-data-brief/",
              "note": "2026-02-03 报告明确披露消费者版 Microsoft Copilot 为 27.2 分钟/DAU，不是企业集成版 Microsoft 365 Copilot，也不是重度用户的 154 分钟。时长段落未单独明确地域，因此只标记为移动端研究样本，不称全球均值。"
            }
          }
        }
      },
      "count": 5,
      "categorySummary": "任务与内容 3，账号与产品 2",
      "rank": 52,
      "previousRank": 52,
      "rankChange": 0
    },
    {
      "id": "firefox",
      "name": "Firefox",
      "appCategory": "浏览器",
      "logo": "assets/logos/global/firefox.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "网页与下载",
          "items": [
            "网站推送",
            "下载完成",
            "下载失败"
          ]
        },
        {
          "name": "账号与安全",
          "items": [
            "密码或泄露警报",
            "同步异常"
          ]
        }
      ],
      "sources": [
        {
          "title": "Firefox Fast & Private Browser · App Store",
          "url": "https://apps.apple.com/us/app/id989804926",
          "type": "官方应用页",
          "note": "开发者：Mozilla Corporation。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2026 页面当前值",
        "methodLabel": "跨桌面与移动月活",
        "activeUserLabel": "2.1 亿+月活（跨端）",
        "source": {
          "url": "https://www.mozilla.org/en-US/advertising/",
          "title": "Mozilla Advertising",
          "note": "Mozilla 披露 Firefox 全球月活超过 2.1 亿，但未拆分手机 App，故不写入严格 MAU 排序。"
        }
      },
      "count": 5,
      "categorySummary": "网页与下载 3，账号与安全 2",
      "rank": 53,
      "previousRank": 53,
      "rankChange": 0
    },
    {
      "id": "safari",
      "name": "Safari",
      "appCategory": "浏览器",
      "logo": "assets/logos/global/safari.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "网页与下载",
          "items": [
            "网站推送",
            "下载完成",
            "下载失败"
          ]
        },
        {
          "name": "账号与安全",
          "items": [
            "密码或泄露警报"
          ]
        }
      ],
      "sources": [
        {
          "title": "Safari · App Store",
          "url": "https://apps.apple.com/us/app/id1146562112",
          "type": "官方应用页",
          "note": "开发者：Apple Inc.。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "未找到可核验的公开同口径数据",
        "methodLabel": "严格口径留空"
      },
      "count": 4,
      "categorySummary": "网页与下载 3，账号与安全 1",
      "rank": 54,
      "previousRank": 54,
      "rankChange": 0
    },
    {
      "id": "vlc",
      "name": "VLC Media Player",
      "appCategory": "影音与音频",
      "logo": "assets/logos/global/vlc.jpg",
      "confidence": "low",
      "countMethod": "独立提醒场景；同一场景的横幅、声音、角标不重复计数",
      "categories": [
        {
          "name": "播放与服务",
          "items": [
            "媒体扫描完成",
            "下载完成",
            "版本更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "VLC media player · App Store",
          "url": "https://apps.apple.com/us/app/id650377962",
          "type": "官方应用页",
          "note": "开发者：VideoLAN。用于确认产品身份和现有功能；通知场景按功能触发关系拆分。"
        }
      ],
      "usage": {
        "durationMinutes": null,
        "launches": null,
        "activeUsers": null,
        "period": "2026-08",
        "methodLabel": "累计下载量（非活跃用户）",
        "activeUserLabel": "70 亿累计下载（跨平台）",
        "source": {
          "url": "https://techcrunch.com/2026/08/31/vlc-crosses-7-billion-downloads/",
          "title": "TechCrunch",
          "note": "VLC 跨平台累计下载突破 70 亿；下载量不等于用户或 MAU，仅用于说明产品规模。"
        }
      },
      "count": 3,
      "categorySummary": "播放与服务 3",
      "rank": 55,
      "previousRank": 55,
      "rankChange": 0
    }
  ]
};
