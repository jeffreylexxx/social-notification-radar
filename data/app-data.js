window.APP_DATA = {
  "meta": {
    "title": "中国常用手机应用通知与提醒功能研究",
    "version": 2,
    "verifiedAt": "2026-09-01",
    "scope": "应用内提醒、消息中心、未读红点以及能够触发手机系统通知的独立事件场景；服务型应用入口可能与母应用存在场景重叠。",
    "countingRule": "可由不同事件独立触发的一种提醒场景计为一项；声音、横幅、锁屏和角标等展示方式不重复计数。",
    "disclaimer": "数量为公开资料能够支持的已确认下限，不代表厂商公布的官方总数。应用版本、系统、账号身份和地区可能导致实际项目不同。",
    "snapshotDate": "2026-09-01",
    "generatedAt": "2026-09-01T12:35:09.851Z",
    "sourceCount": 167,
    "changedSourceCount": 0,
    "failedSourceCount": 6,
    "previousSnapshotDate": "2026-08-31"
  },
  "apps": [
    {
      "id": "didi",
      "name": "滴滴出行",
      "appCategory": "出行、地图与物流",
      "logo": "assets/logos/didi.jpg",
      "confidence": "high",
      "usage": {
        "period": "2024 / 2026-01",
        "durationMinutes": 10.7,
        "launches": 6.6,
        "activeUsers": 12436,
        "methodLabel": "月均时长按31天换算；跨期数据",
        "source": {
          "title": "月狐 2024 年网约车行业发展洞察与 App 榜单",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202501141641912513_1.pdf?1736865459000.pdf=",
          "note": "月狐 iApp 披露滴滴出行 2024 年全年单日人均使用时长与启动次数均值分别为 10.7 分钟、6.6 次；月狐另披露 2026 年 1 月 MAU 1.2436 亿。使用指标与 MAU 跨期。"
        }
      },
      "categories": [
        {
          "name": "叫车与行程",
          "items": [
            "司机接单",
            "司机到达",
            "车辆位置变化",
            "行程开始",
            "行程结束",
            "预约出发提醒",
            "订单取消或改派"
          ]
        },
        {
          "name": "安全",
          "items": [
            "行程分享与安全提醒",
            "异常停留提醒",
            "紧急联系人消息",
            "服务或天气安全提示"
          ]
        },
        {
          "name": "支付与服务",
          "items": [
            "车费支付结果",
            "费用调整",
            "退款进度",
            "发票开具",
            "客服与投诉处理"
          ]
        },
        {
          "name": "其他业务",
          "items": [
            "骑行订单",
            "顺风车行程",
            "代驾或送货进度",
            "会员与优惠活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "滴滴 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id554499054",
          "type": "app-store",
          "note": "官方应用商店页面确认网约车、骑行、顺风车、火车票、租车、代驾、送货、会员等服务范围。"
        }
      ],
      "count": 20,
      "categorySummary": "叫车与行程 7，安全 4，支付与服务 5，其他业务 4",
      "rank": 1,
      "previousRank": 1,
      "rankChange": 0
    },
    {
      "id": "wechat",
      "name": "微信",
      "appCategory": "社交与社区",
      "logo": "assets/logos/wechat.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2025-12 / 2026-Q1",
        "durationMinutes": 17.9,
        "launches": 29.8,
        "activeUsers": 140000,
        "activeUsersPrefix": "≥",
        "source": {
          "title": "腾讯微信产品页及艾瑞 2025 年移动互联网报告",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202603111820499244_1.pdf?1773302021000.pdf=",
          "note": "艾瑞 mUserTracker 披露微信 2025 年 12 月单机单日有效时间 17.9 分钟、单机单日使用 29.8 次；腾讯官方披露截至 2026 年第一季度微信与 WeChat 合并 MAU 超过 14 亿。MAU 含海外 WeChat，行为指标为中国区第三方设备监测口径。"
        }
      },
      "categories": [
        {
          "name": "聊天与联系",
          "items": [
            "私聊新消息",
            "群聊新消息",
            "群聊@及特别提醒",
            "语音通话邀请",
            "视频通话邀请",
            "好友申请"
          ]
        },
        {
          "name": "社交与内容",
          "items": [
            "朋友圈点赞",
            "朋友圈评论",
            "朋友圈更新",
            "视频号内容更新",
            "视频号私信",
            "视频号点赞及评论",
            "视频号直播"
          ]
        },
        {
          "name": "服务与账户",
          "items": [
            "公众号更新",
            "服务通知",
            "小程序订阅通知",
            "微信支付及资金变动",
            "系统与账号安全"
          ]
        }
      ],
      "sources": [
        {
          "title": "微信隐私保护指引",
          "url": "https://oper.my-qcloud.com/readtemplate?lang=zh_CN&s=privacy_220413&t=weixin_agreement",
          "type": "official",
          "note": "列出新消息通知和订阅管理等设置入口。"
        },
        {
          "title": "微信视频号通知设置说明",
          "url": "https://www.php.cn/faq/2517049.html",
          "type": "article",
          "note": "列出视频号更新、私信、直播、点赞及评论提醒。"
        }
      ],
      "count": 18,
      "categorySummary": "聊天与联系 6，社交与内容 7，服务与账户 5",
      "rank": 2,
      "previousRank": 2,
      "rankChange": 0
    },
    {
      "id": "alipay",
      "name": "支付宝",
      "appCategory": "支付与智能生活",
      "logo": "assets/logos/alipay.jpg",
      "confidence": "high",
      "usage": {
        "period": "2023春节 / 2025-12 / 2026-01",
        "durationMinutes": 7.8,
        "launches": 3.7,
        "activeUsers": 88273,
        "source": {
          "title": "QuestMobile 春节监测、艾瑞报告及月狐榜单",
          "url": "https://www.yunbaogao.cn/index/partFile/1/cbndata/2023-02/1_51985.pdf",
          "note": "QuestMobile 披露 2023 年春节假期支付宝人均单日使用 7.8 分钟；艾瑞披露 2025 年 12 月单机单日使用 3.7 次；月狐披露 2026 年 1 月 MAU 8.8273 亿。三项指标跨期。"
        }
      },
      "categories": [
        {
          "name": "支付与资金",
          "items": [
            "支付成功",
            "收款到账",
            "余额或资金变动",
            "退款到账",
            "可疑交易"
          ]
        },
        {
          "name": "账单与履约",
          "items": [
            "账单生成",
            "信用卡还款",
            "贷款还款",
            "生活缴费",
            "物流更新",
            "服务订单状态"
          ]
        },
        {
          "name": "账户安全",
          "items": [
            "身份验证",
            "安全验证",
            "账号风险"
          ]
        },
        {
          "name": "生活与运营",
          "items": [
            "生日提醒",
            "生活号消息",
            "服务提醒",
            "优惠与活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "支付宝客户端隐私权政策副本",
          "url": "https://www.elawcn.com/agreement/2025/1103/1599.html",
          "type": "policy-copy",
          "note": "说明服务提醒、新消息通知、消息盒子、生日提醒和通知栏消息。"
        },
        {
          "title": "支付宝支付隐私权政策副本",
          "url": "https://www.elawcn.com/agreement/2025/1103/1598.html",
          "type": "policy-copy",
          "note": "确认支付消息、安全提醒和不可退订支付通知。"
        },
        {
          "title": "支付宝生活号平台",
          "url": "https://open.alipay.com/channel/publicAppIndex.htm",
          "type": "official",
          "note": "确认生活号信息推送和模板消息。"
        }
      ],
      "count": 18,
      "categorySummary": "支付与资金 5，账单与履约 6，账户安全 3，生活与运营 4",
      "rank": 3,
      "previousRank": 3,
      "rankChange": 0
    },
    {
      "id": "ctrip",
      "name": "携程",
      "appCategory": "出行、地图与物流",
      "logo": "assets/logos/ctrip.jpg",
      "confidence": "high",
      "usage": {
        "period": "2020-06 / 2023-01 / 2026-01",
        "durationMinutes": 2.8,
        "launches": 18.8,
        "launchesPrefix": "≈",
        "activeUsers": 10643,
        "methodLabel": "月均时长按31天换算；跨期数据",
        "source": {
          "title": "国信证券在线旅游研究、易观洞察与月狐榜单",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202303311584767048_1.pdf",
          "note": "国信证券图表显示 2020 年 6 月携程人均日启动约 18.8 次（据图读取，故标≈）；易观披露 2023 年 1 月月人均使用 1.38 小时，1.38×60÷31=日均约 2.8 分钟；月狐披露 2026 年 1 月 MAU 1.0643 亿。三项跨期，打开次数为历史近似值。"
        }
      },
      "categories": [
        {
          "name": "行程与交通",
          "items": [
            "航班起飞与登机提醒",
            "航班延误或取消",
            "值机柜台或登机口变化",
            "火车票出票与开车提醒",
            "抢票结果",
            "汽车票与用车行程",
            "行李提取信息"
          ]
        },
        {
          "name": "住宿与订单",
          "items": [
            "酒店预订确认",
            "入住提醒",
            "订单支付结果",
            "订单变更或取消",
            "退款进度",
            "客服与售后消息"
          ]
        },
        {
          "name": "内容与账户",
          "items": [
            "社区互动回复",
            "关注内容更新",
            "会员权益或积分变化",
            "优惠券与活动提醒",
            "账户安全通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "携程旅行 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id379395415",
          "type": "app-store",
          "note": "官方应用商店页面确认酒店、机票、火车票、门票、用车、社区及账户服务范围。"
        },
        {
          "title": "携程 Apple Watch 功能说明",
          "url": "https://apps.apple.com/cn/app/id688037240",
          "type": "official",
          "note": "明确列出登机提醒、航班变更、值机柜台、登机口及行李转盘等行程提醒。"
        }
      ],
      "count": 18,
      "categorySummary": "行程与交通 7，住宿与订单 6，内容与账户 5",
      "rank": 4,
      "previousRank": 4,
      "rankChange": 0
    },
    {
      "id": "netease-cloud-music",
      "name": "网易云音乐",
      "appCategory": "影音与音频",
      "logo": "assets/logos/netease-cloud-music.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2019-06 / 2025 / 2026-01",
        "durationMinutes": 26.4,
        "launches": 6.8,
        "activeUsers": 10529,
        "methodLabel": "跨期历史监测",
        "source": {
          "title": "易观用户黏性监测、艾瑞报告及月狐 App 榜单",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP201909231365565830_1.pdf",
          "note": "易观披露 2019 年 6 月人均单日使用约 26.4 分钟；艾瑞 2025 年报告披露日均打开约 6.8 次；月狐披露 2026 年 1 月 MAU 1.0529 亿。三项指标跨期。"
        }
      },
      "categories": [
        {
          "name": "音乐与内容",
          "items": [
            "关注歌手新歌",
            "订阅歌单或节目更新",
            "直播或演出开始",
            "每日推荐与私人推荐",
            "下载完成"
          ]
        },
        {
          "name": "互动",
          "items": [
            "评论回复",
            "评论获赞",
            "动态互动",
            "私信",
            "新增关注"
          ]
        },
        {
          "name": "社交与一起听",
          "items": [
            "一起听邀请",
            "好友上线或房间消息",
            "歌房互动",
            "云村活动"
          ]
        },
        {
          "name": "会员与账户",
          "items": [
            "会员到期或续费",
            "数字专辑与订单",
            "活动和优惠",
            "账户安全通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "网易云音乐 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id590338362",
          "type": "app-store",
          "note": "官方应用商店页面确认音乐、播客、评论、动态、一起听、歌房、会员和账户服务范围。"
        }
      ],
      "count": 18,
      "categorySummary": "音乐与内容 5，互动 5，社交与一起听 4，会员与账户 4",
      "rank": 5,
      "previousRank": 5,
      "rankChange": 0
    },
    {
      "id": "dianping",
      "name": "大众点评",
      "appCategory": "本地生活与服务",
      "logo": "assets/logos/dianping.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2017-Q1 / 2026-01",
        "durationMinutes": 0.7,
        "launches": 0.2,
        "activeUsers": 14542,
        "methodLabel": "历史月频次与单次时长换算；MAU为较新监测",
        "source": {
          "title": "QuestMobile 历史监测与月狐 App 榜单",
          "url": "https://img3.gelonghui.com/pdf201812/pdf20181225151140386.pdf",
          "note": "历史报告披露 2017 年第一季度月人均使用 7.31 次、单次约 2.67 分钟；以 30 天换算为日均约 0.2 次、0.7 分钟。月狐披露 2026 年 1 月 MAU 1.4542 亿，指标跨期。"
        }
      },
      "categories": [
        {
          "name": "互动与内容",
          "items": [
            "评论回复",
            "点赞或收藏互动",
            "新增关注",
            "笔记或榜单更新"
          ]
        },
        {
          "name": "订单与服务",
          "items": [
            "团购订单确认",
            "预约成功或变更",
            "排队叫号",
            "支付结果",
            "退款与售后"
          ]
        },
        {
          "name": "商户与位置",
          "items": [
            "附近热门商户",
            "收藏商户动态",
            "新店或榜单提醒",
            "到店与核销提醒"
          ]
        },
        {
          "name": "账户与营销",
          "items": [
            "优惠券到期",
            "会员权益变化",
            "活动推送",
            "账户安全通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "大众点评 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id351091731",
          "type": "app-store",
          "note": "官方应用商店页面确认本地商户、用户评价、团购、预约、酒店门票和客服服务范围。"
        }
      ],
      "count": 17,
      "categorySummary": "互动与内容 4，订单与服务 5，商户与位置 4，账户与营销 4",
      "rank": 6,
      "previousRank": 6,
      "rankChange": 0
    },
    {
      "id": "taobao",
      "name": "淘宝",
      "appCategory": "电商与交易",
      "logo": "assets/logos/taobao.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2025-09 / 2026-01",
        "durationMinutes": 8.8,
        "launches": 2.5,
        "activeUsers": 95897,
        "methodLabel": "月人均÷30天",
        "source": {
          "title": "QuestMobile 秋季报告及月狐 2026 年 1 月 App 榜",
          "url": "https://www.moonfox.cn/insight/news/2005",
          "note": "QuestMobile 披露 2025 年 9 月淘宝 App 月人均使用时长 4.4 小时、使用 73.9 次，页面按 30 天换算；月狐披露 2026 年 1 月 MAU 为 95,897 万。"
        }
      },
      "categories": [
        {
          "name": "交易",
          "items": [
            "订单状态",
            "付款状态",
            "物流更新",
            "退款进度",
            "售后进度",
            "确认收货及评价"
          ]
        },
        {
          "name": "店铺与互动",
          "items": [
            "店铺客服消息",
            "平台互动消息",
            "订阅店铺更新",
            "店铺会员消息"
          ]
        },
        {
          "name": "商品与活动",
          "items": [
            "商品降价或补货",
            "优惠活动",
            "平台推荐"
          ]
        },
        {
          "name": "账户",
          "items": [
            "服务通知",
            "安全验证"
          ]
        }
      ],
      "sources": [
        {
          "title": "淘宝隐私政策副本",
          "url": "https://www.bochk.com/creditcard/pdf/smp/taobao_privacy.pdf",
          "type": "policy-copy",
          "note": "说明店铺交易、客服、订阅、会员以及弹窗推送。"
        },
        {
          "title": "淘宝开放平台消息类目",
          "url": "https://developer.alibaba.com/docs/topicDetail.htm?apiId=1926",
          "type": "official",
          "note": "列出退款、物流、工单和服务状态变更消息。"
        }
      ],
      "count": 15,
      "categorySummary": "交易 6，店铺与互动 4，商品与活动 3，账户 2",
      "rank": 7,
      "previousRank": 7,
      "rankChange": 0
    },
    {
      "id": "qq",
      "name": "QQ",
      "appCategory": "社交与社区",
      "logo": "assets/logos/qq.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2017-04 / 2025-12",
        "durationMinutes": 83,
        "launches": 19,
        "activeUsers": 50800,
        "methodLabel": "行为为2017年历史监测；MAU为2025年官方口径",
        "source": {
          "title": "易观千帆社交应用监测及腾讯 2025 年业绩公告",
          "url": "https://nos.netease.com/cloud-website-bucket/%E7%A4%BE%E4%BA%A4%E7%94%B5%E5%95%86%E7%9A%84%E5%8F%91%E5%B1%95%E4%B8%8E%E5%88%9B%E6%96%B0-%E5%BC%A0%E9%93%81%E6%88%90.pdf",
          "note": "易观千帆披露 2017 年 4 月 QQ 人均单日启动 19 次、使用 83 分钟；腾讯披露 2025 年 12 月 QQ 移动设备 MAU 为 5.08 亿。行为数据较旧，因此仅作为有明确年份的历史基准。"
        }
      },
      "categories": [
        {
          "name": "聊天",
          "items": [
            "单聊新消息",
            "群聊新消息",
            "群聊@及特别关注",
            "语音通话邀请",
            "视频通话邀请",
            "好友申请"
          ]
        },
        {
          "name": "社交",
          "items": [
            "空间点赞",
            "空间评论",
            "动态更新",
            "新增关注",
            "频道互动"
          ]
        },
        {
          "name": "服务",
          "items": [
            "订阅号更新",
            "支付与账户变动",
            "系统与安全",
            "活动通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "QQ App Store 页面",
          "url": "https://apps.apple.com/cn/app/id444934666",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 15,
      "categorySummary": "聊天 6，社交 5，服务 4",
      "rank": 8,
      "previousRank": 8,
      "rankChange": 0
    },
    {
      "id": "xianyu",
      "name": "闲鱼",
      "appCategory": "电商与交易",
      "logo": "assets/logos/xianyu.jpg",
      "confidence": "high",
      "usage": {
        "period": "2025-03 / 2025-04",
        "durationMinutes": 8.2,
        "launches": 1.9,
        "activeUsers": 20000,
        "activeUsersPrefix": "≥",
        "methodLabel": "时长与次数仅代表闲鱼×淘宝重合用户（月值÷30天）",
        "source": {
          "title": "QuestMobile 春季报告及闲鱼重合用户监测报道",
          "url": "https://news.sina.com.cn/sx/2025-05-08/detail-inevvssv2616533.shtml",
          "note": "QuestMobile 数据显示闲鱼 2025 年 3 月 MAU 超过 2 亿；闲鱼与淘宝重合用户月人均使用时长 247.1 分钟、月人均打开 56 次，页面按 30 天换算为日均 8.2 分钟、1.9 次。时长和次数不是全体闲鱼用户口径。"
        }
      },
      "categories": [
        {
          "name": "沟通与交易",
          "items": [
            "聊天消息",
            "出价",
            "砍价",
            "叮一下催回复",
            "订单状态",
            "付款状态",
            "物流更新",
            "退款与售后"
          ]
        },
        {
          "name": "商品与社区",
          "items": [
            "商品降价",
            "求购匹配",
            "关注卖家上新",
            "互动消息"
          ]
        },
        {
          "name": "平台",
          "items": [
            "活动信息",
            "服务通知",
            "系统与安全"
          ]
        }
      ],
      "sources": [
        {
          "title": "闲鱼社区隐私政策",
          "url": "https://terms.goofish.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao202103021554_43790.html",
          "type": "official",
          "note": "列出交易物流、活动、互动、服务、订单和叮一下提醒。"
        },
        {
          "title": "闲鱼消息设置说明",
          "url": "https://ask.zol.com.cn/x/33767472.html",
          "type": "article",
          "note": "补充聊天、交易、砍价、降价和求购匹配等设置。"
        }
      ],
      "count": 15,
      "categorySummary": "沟通与交易 8，商品与社区 4，平台 3",
      "rank": 9,
      "previousRank": 9,
      "rankChange": 0
    },
    {
      "id": "mijia",
      "name": "米家",
      "appCategory": "支付与智能生活",
      "logo": "assets/logos/mijia.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2026-01",
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 13472,
        "source": {
          "title": "月狐数据 2026 年 1 月移动 App TOP100",
          "url": "https://www.moonfox.cn/insight/news/2005",
          "note": "月狐披露米家 App 2026 年 1 月 MAU 为 1.3472 亿；未披露日均时长和打开次数。"
        }
      },
      "categories": [
        {
          "name": "设备告警",
          "items": [
            "设备报警",
            "移动侦测",
            "门铃按下",
            "强拆报警",
            "自动化执行异常",
            "定时任务成功或失败"
          ]
        },
        {
          "name": "家庭与共享",
          "items": [
            "新增家庭成员",
            "移除家庭成员",
            "管理员变化",
            "新增设备",
            "设备分享"
          ]
        },
        {
          "name": "平台",
          "items": [
            "设备状态变化",
            "用户反馈更新",
            "官方通知",
            "固件或功能更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "小米相机通知帮助",
          "url": "https://www.mi.com/tw/support/faq/details/KA-493432/",
          "type": "official",
          "note": "确认检测推送和可配置的事件通知类型。"
        },
        {
          "title": "小米智能门铃 3 手册",
          "url": "https://cdn.cnbj1.fds.api.mi-img.com/ics-resources/articles/6126fd1575d428dbf4056f07.html",
          "type": "official",
          "note": "确认门铃、移动侦测、强拆报警和消息通知。"
        },
        {
          "title": "米家隐私政策",
          "url": "https://g.home.mi.com/views/user-terms/user_license/zh/user_privacy_2024.pdf",
          "type": "official",
          "note": "确认家庭、设备、摄像机和门锁相关场景。"
        }
      ],
      "count": 15,
      "categorySummary": "设备告警 6，家庭与共享 5，平台 4",
      "rank": 10,
      "previousRank": 10,
      "rankChange": 0
    },
    {
      "id": "hema",
      "name": "盒马",
      "appCategory": "电商与交易",
      "logo": "assets/logos/hema.jpg",
      "confidence": "high",
      "usage": {
        "period": "2018 / 2020-02 / 2025-12",
        "durationMinutes": 10.4,
        "launches": 2,
        "launchesPrefix": "≥",
        "activeUsers": 8303,
        "methodLabel": "使用指标为历史监测；MAU为较新监测",
        "source": {
          "title": "盒马历史用户黏性监测与 QuestMobile 生鲜商超榜单",
          "url": "https://caifuhao.eastmoney.com/news/20200507165020462710940",
          "note": "行业监测披露 2020 年 2 月盒马 App 人均日使用时长 10.37 分钟，页面按一位小数显示 10.4；2018 年报道指出近一年人均日启动保持在 2 次以上，故按下限显示≥2.0；QuestMobile 披露 2025 年 12 月 MAU 8,303 万。三项跨期且使用指标为历史值。"
        }
      },
      "categories": [
        {
          "name": "订单与支付",
          "items": [
            "订单确认",
            "支付结果",
            "订单变更或取消",
            "退款进度"
          ]
        },
        {
          "name": "拣货与配送",
          "items": [
            "开始拣货",
            "缺货或替换商品",
            "配送出发",
            "配送进度",
            "即将送达",
            "订单送达"
          ]
        },
        {
          "name": "售后与咨询",
          "items": [
            "售后处理进度",
            "客服或咨询回复"
          ]
        },
        {
          "name": "商品与会员",
          "items": [
            "优惠券或权益变化",
            "商品活动推送",
            "账户与安全通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "盒马 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1063183999",
          "type": "app-store",
          "note": "官方应用商店页面确认生鲜商超、即时配送、会员和订单服务范围。"
        },
        {
          "title": "盒马用户服务协议",
          "url": "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201708030951_75955.html",
          "type": "official",
          "note": "明确说明订单信息、预计送达、配送服务信息以及软件推送、短信和电话通知。"
        },
        {
          "title": "盒马基本功能隐私政策",
          "url": "https://terms.alicdn.com/legal-agreement/terms/suit_bu1_alibaba_hema/suit_bu1_alibaba_hema202203300948_54070.html",
          "type": "official",
          "note": "确认服务、安全、体验调研、支付、物流、交付进度及营销类通知。"
        }
      ],
      "count": 15,
      "categorySummary": "订单与支付 4，拣货与配送 6，售后与咨询 2，商品与会员 3",
      "rank": 11,
      "previousRank": 11,
      "rankChange": 0
    },
    {
      "id": "jd",
      "name": "京东",
      "appCategory": "电商与交易",
      "logo": "assets/logos/jd.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2025-04 / 2025-10",
        "durationMinutes": 14.27,
        "launches": 1.6,
        "activeUsers": 64800,
        "methodLabel": "时长为4月23日单日值；打开次数为5月月人均÷30天",
        "source": {
          "title": "MoonFox 即时零售报告及 QuestMobile 流量报告",
          "url": "https://www.globenewswire.com/news-release/2025/06/03/3092506/0/en/MoonFox-Data-Releases-New-Report-Instant-Retail-Becomes-the-Next-Battleground-as-JD-com-and-Meituan-Intensify-Food-Delivery-Competition-in-China.html",
          "note": "月狐披露京东 App 2025 年 4 月 23 日人均在线时长 14.27 分钟；QuestMobile 披露 2025 年 5 月月人均使用 47.9 次（按30天换算1.6次）及 2025 年 10 月 MAU 6.48 亿。"
        }
      },
      "categories": [
        {
          "name": "订单与物流",
          "items": [
            "订单状态",
            "付款状态",
            "配送进度",
            "签收提醒",
            "退款",
            "售后"
          ]
        },
        {
          "name": "商品与资产",
          "items": [
            "降价或到货",
            "关注商品",
            "优惠券",
            "京东E卡及资产"
          ]
        },
        {
          "name": "互动与服务",
          "items": [
            "客服消息",
            "评价晒单",
            "活动通知",
            "营销短信"
          ]
        }
      ],
      "sources": [
        {
          "title": "京东帮助中心",
          "url": "https://help.jd.com/user/service.html",
          "type": "official",
          "note": "包含消息订阅、我的关注、资产、订单和活动入口。"
        },
        {
          "title": "京东隐私帮助",
          "url": "https://help.jd.com/user/issue/965-4268.html",
          "type": "official",
          "note": "说明消息中心和消息设置。"
        },
        {
          "title": "京东营销短信管理",
          "url": "https://h5.m.jd.com/babelDiy/Zeus/Ytn9faMn8XjDH9GuaRT1dHvunc4/index.html",
          "type": "official",
          "note": "区分营销、交易物流和客服通知。"
        }
      ],
      "count": 14,
      "categorySummary": "订单与物流 6，商品与资产 4，互动与服务 4",
      "rank": 12,
      "previousRank": 12,
      "rankChange": 0
    },
    {
      "id": "58",
      "name": "58同城",
      "appCategory": "本地生活与服务",
      "logo": "assets/logos/58.jpg",
      "confidence": "low",
      "usage": {
        "period": "2014-12 / 2026-01",
        "durationMinutes": 1.1,
        "launches": 0.5,
        "activeUsers": 6723,
        "methodLabel": "2014年安卓月均÷31天；MAU为2026年",
        "source": {
          "title": "QuestMobile 2014 年移动电商监测及月狐 App TOP100",
          "url": "https://www.questmobile.com.cn/blog/blog-7.html",
          "note": "QuestMobile 披露 2014 年 12 月安卓端 58同城月人均使用 33 分钟、16 次，页面按 31 天换算为日均 1.1 分钟、0.5 次；月狐披露 2026 年 1 月 MAU 为 6,723 万。行为数据较旧且仅限安卓端。"
        }
      },
      "categories": [
        {
          "name": "求职招聘",
          "items": [
            "职位匹配",
            "简历被查看",
            "招聘方回复",
            "面试邀请"
          ]
        },
        {
          "name": "房产与本地",
          "items": [
            "房源上新",
            "房源咨询回复",
            "收藏或关注变化",
            "本地服务订单",
            "商家回复"
          ]
        },
        {
          "name": "沟通与平台",
          "items": [
            "聊天消息",
            "发布审核",
            "系统通知",
            "账户安全",
            "广告促销"
          ]
        }
      ],
      "sources": [
        {
          "title": "58同城隐私政策",
          "url": "https://static.58.com/git/passport-mapp/pdf/privacypolicy.pdf",
          "type": "official",
          "note": "确认消息管理、求职、招聘和定向推送。"
        },
        {
          "title": "58同城移动站",
          "url": "https://m.m.58.com/",
          "type": "official",
          "note": "列出求职、招聘及反馈及时提醒。"
        },
        {
          "title": "58同城消息控制",
          "url": "https://weixin.58.com/m/home/redirect/?veiwPage=zhaofuwu",
          "type": "official",
          "note": "确认消息类型和接收时间可单独控制。"
        }
      ],
      "count": 14,
      "categorySummary": "求职招聘 4，房产与本地 5，沟通与平台 5",
      "rank": 13,
      "previousRank": 13,
      "rankChange": 0
    },
    {
      "id": "weibo",
      "name": "微博",
      "appCategory": "社交与社区",
      "logo": "assets/logos/weibo.jpg",
      "confidence": "high",
      "usage": {
        "period": "2020-06 / 2025-03 / 2025-12",
        "durationMinutes": 35.1,
        "launches": 2.8,
        "activeUsers": 56700,
        "methodLabel": "打开为2020年月均84次÷30；时长与MAU为2025年",
        "source": {
          "title": "36氪泛资讯报告、微博业绩公告及艾瑞流量报告",
          "url": "https://chengzhaoxi.xyz/download/pdf/report/36Kr-2020%E5%B9%B4%E4%B8%AD%E5%9B%BD%E6%B3%9B%E8%B5%84%E8%AE%AF%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf",
          "note": "36氪研究院援引 TalkingData 披露微博 2020 年 6 月月人均使用 84 次，按 30 天换算为 2.8 次/日；艾瑞监测显示 2025 年 3 月单日有效时间 35.1 分钟；微博官方披露 2025 年 12 月 MAU 5.67 亿。三个指标来自不同数据期。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "@我的",
            "评论",
            "赞",
            "转发"
          ]
        },
        {
          "name": "社交",
          "items": [
            "私信",
            "群聊",
            "好友圈消息",
            "新增粉丝"
          ]
        },
        {
          "name": "内容订阅",
          "items": [
            "特别关注",
            "小铃铛订阅",
            "关注内容更新"
          ]
        },
        {
          "name": "平台",
          "items": [
            "系统通知",
            "内容处理或删除"
          ]
        }
      ],
      "sources": [
        {
          "title": "微博客服功能帮助",
          "url": "https://kefu.weibo.com/faqclassifylist?id=2793&typename=%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8",
          "type": "official",
          "note": "明确列出@、评论、赞、私信、好友圈、小铃铛和特别关注提醒。"
        },
        {
          "title": "微博一键防护说明",
          "url": "https://kefu.weibo.com/faqdetail?id=21580",
          "type": "official",
          "note": "说明私信、评论、转赞评@和粉丝提醒。"
        }
      ],
      "count": 13,
      "categorySummary": "互动 4，社交 4，内容订阅 3，平台 2",
      "rank": 14,
      "previousRank": 14,
      "rankChange": 0
    },
    {
      "id": "meituan",
      "name": "美团",
      "appCategory": "本地生活与服务",
      "logo": "assets/logos/meituan.jpg",
      "confidence": "high",
      "usage": {
        "period": "2025-07 / 2025-12",
        "durationMinutes": 14.3,
        "launches": 5,
        "activeUsers": 52500,
        "source": {
          "title": "QuestMobile 2025 中国移动互联网年度大报告",
          "url": "https://www.questmobile.cn/research/report/2031215896219979777/",
          "note": "年度报告披露美团 App 2025 年 12 月日均使用时长 14.3 分钟、使用次数 5.0 次；MAU 的独立来源列于下方研究来源。"
        }
      },
      "categories": [
        {
          "name": "订单与履约",
          "items": [
            "订单状态",
            "配送进度",
            "骑手联系或到达",
            "退款进度"
          ]
        },
        {
          "name": "预约",
          "items": [
            "直播订阅",
            "榜单发布预定",
            "行程提醒",
            "秒杀活动",
            "签到提醒"
          ]
        },
        {
          "name": "账户与服务",
          "items": [
            "身份验证",
            "安全提醒",
            "客服与售后",
            "商业推广"
          ]
        }
      ],
      "sources": [
        {
          "title": "美团基本功能隐私政策",
          "url": "https://rules-center.meituan.com/m/detail/2",
          "type": "official",
          "note": "列出服务、安全、商业通知以及直播、榜单、行程、秒杀、签到提醒。"
        },
        {
          "title": "美团退款帮助",
          "url": "https://i.meituan.com/help/refund",
          "type": "official",
          "note": "说明退款短信和App到账推送。"
        },
        {
          "title": "QuestMobile 2026 APP 流量竞争新特征",
          "url": "https://www.questmobile.cn/research/report/2043979270875897857/",
          "type": "usage-data",
          "note": "披露美团 App 2025 年 7 月 MAU 为 5.25 亿。"
        }
      ],
      "count": 13,
      "categorySummary": "订单与履约 4，预约 5，账户与服务 4",
      "rank": 15,
      "previousRank": 15,
      "rankChange": 0
    },
    {
      "id": "luckin",
      "name": "瑞幸咖啡",
      "appCategory": "本地生活与服务",
      "logo": "assets/logos/luckin.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2023-05",
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 1900,
        "methodLabel": "历史数据；QuestMobile App MAU",
        "source": {
          "title": "华泰证券：餐饮品牌 App 月活跃用户规模",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202309121598298658_1.pdf",
          "note": "报告援引 QuestMobile 数据披露瑞幸咖啡 App 2023 年 5 月 MAU 约 1,900 万。该值为历史数据，参与同提醒数排序；未找到可核验的 App 日均时长和打开次数。公司后续披露的月均交易客户包含 App、小程序等多入口，未混作 App MAU。"
        }
      },
      "categories": [
        {
          "name": "订单与履约",
          "items": [
            "下单确认",
            "支付结果",
            "订单开始制作",
            "制作完成与取餐",
            "外送配送进度",
            "订单完成",
            "退款或赔付进度"
          ]
        },
        {
          "name": "会员与权益",
          "items": [
            "积分变化",
            "优惠券到账或到期",
            "自由卡权益变化"
          ]
        },
        {
          "name": "内容与账户",
          "items": [
            "新品推荐",
            "营销活动",
            "账户或服务变更通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "瑞幸咖啡 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1296749505",
          "type": "app-store",
          "note": "官方应用商店页面确认在线点单、自提外送、优惠券、会员、积分与自由卡等功能。"
        },
        {
          "title": "瑞幸咖啡隐私权政策",
          "url": "https://termshub.cn/public/version/7458",
          "type": "official",
          "note": "明确说明订单管理、交易服务以及手机推送、短信和营销通知。"
        },
        {
          "title": "瑞幸数字化服务研究",
          "url": "https://www.ccidanpo.org/sites/default/files/c26636204.2020.01.03.pdf",
          "type": "research",
          "note": "记录制作、配送状态短信以及交易结束后的优惠券触达。"
        }
      ],
      "count": 13,
      "categorySummary": "订单与履约 7，会员与权益 3，内容与账户 3",
      "rank": 16,
      "previousRank": 16,
      "rankChange": 0
    },
    {
      "id": "pinduoduo",
      "name": "拼多多",
      "appCategory": "电商与交易",
      "logo": "assets/logos/pinduoduo.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2019-Q3 / 2025-09 / 2025-10",
        "durationMinutes": 14.1,
        "launches": 7.5,
        "activeUsers": 72000,
        "methodLabel": "打开为2019Q3日均；时长为2025年月均÷30天",
        "source": {
          "title": "QuestMobile 电商监测与拼多多研报",
          "url": "https://files.bocomgroup.com/download/Internet_Sector-191111s.pdf",
          "note": "交银国际援引 QuestMobile 披露拼多多 2019 年第三季度 DAU 人均日使用 7.5 次；QuestMobile 披露 2025 年 9 月月人均使用 422.2 分钟，按 30 天换算为日均 14.1 分钟；2025 年 10 月 MAU 为 7.20 亿。打开次数是历史指标。"
        }
      },
      "categories": [
        {
          "name": "交易",
          "items": [
            "订单状态",
            "物流变动",
            "拼单成功",
            "客服消息"
          ]
        },
        {
          "name": "商品",
          "items": [
            "降价提醒",
            "优惠活动",
            "每日精选"
          ]
        },
        {
          "name": "活动",
          "items": [
            "现金签到",
            "直播开播",
            "直播互动",
            "活动订阅"
          ]
        },
        {
          "name": "平台",
          "items": [
            "系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "拼多多隐私政策",
          "url": "https://www.yangkeduo.com/pdd_privacy_policy.pdf",
          "type": "official",
          "note": "确认交易、物流和优惠活动短信设置。"
        },
        {
          "title": "拼多多消息通知管理",
          "url": "https://www.php.cn/faq/2305396.html",
          "type": "article",
          "note": "列出订单、物流、拼单、降价、活动、精选、签到和直播提醒。"
        },
        {
          "title": "拼多多通知设置实录",
          "url": "https://www.toutiao.com/article/7446359798192276031/",
          "type": "article",
          "note": "补充交易、物流、订阅、活动与直播通知。"
        }
      ],
      "count": 12,
      "categorySummary": "交易 4，商品 3，活动 4，平台 1",
      "rank": 17,
      "previousRank": 17,
      "rankChange": 0
    },
    {
      "id": "toutiao",
      "name": "今日头条",
      "appCategory": "短视频与资讯",
      "logo": "assets/logos/toutiao.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-06 / 2026-01",
        "durationMinutes": 73.4,
        "launches": 22.6,
        "activeUsers": 28828,
        "methodLabel": "月人均677次÷30天；MAU为2026年",
        "source": {
          "title": "36氪 2020 泛资讯行业报告及月狐 App TOP100",
          "url": "https://chengzhaoxi.xyz/download/pdf/report/36Kr-2020%E5%B9%B4%E4%B8%AD%E5%9B%BD%E6%B3%9B%E8%B5%84%E8%AE%AF%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6%E6%8A%A5%E5%91%8A.pdf",
          "note": "36氪研究院援引 TalkingData 披露今日头条 2020 年 6 月人均单日使用 73.4 分钟、月人均使用 677 次；页面将次数按 30 天换算为日均 22.6 次。月狐披露 2026 年 1 月 MAU 为 2.8828 亿。行为指标为历史数据。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "评论回复",
            "点赞",
            "@提及",
            "新增关注",
            "私信"
          ]
        },
        {
          "name": "内容",
          "items": [
            "关注作者更新",
            "重要新闻",
            "热点推荐",
            "视频或直播更新"
          ]
        },
        {
          "name": "平台",
          "items": [
            "活动通知",
            "账号安全",
            "内容审核或处理"
          ]
        }
      ],
      "sources": [
        {
          "title": "今日头条隐私政策",
          "url": "https://www.toutiao.com/privacy_protection/?external=true",
          "type": "official",
          "note": "确认关注、评论、收藏、点赞、分享、预约和推送记录。"
        },
        {
          "title": "今日头条通知设置说明",
          "url": "https://www.toutiao.com/article/7591685551246279178/",
          "type": "platform-article",
          "note": "明确提及关注作者更新、私信和重要新闻推送。"
        }
      ],
      "count": 12,
      "categorySummary": "互动 5，内容 4，平台 3",
      "rank": 18,
      "previousRank": 18,
      "rankChange": 0
    },
    {
      "id": "youku",
      "name": "优酷视频",
      "appCategory": "影音与音频",
      "logo": "assets/logos/youku.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2018-10 / 2024-09 / 2026-01",
        "durationMinutes": 59.5,
        "launches": 8,
        "activeUsers": 21584,
        "methodLabel": "跨期历史监测",
        "source": {
          "title": "QuestMobile 视频应用监测与月狐 App 榜单",
          "url": "https://www.36kr.com/p/3032764919279872",
          "note": "QuestMobile 披露 2024 年 9 月优酷视频月人均单日使用 59.5 分钟；2018 年 10 月监测显示人均单日使用约 8 次；月狐披露 2026 年 1 月 MAU 2.1584 亿。三项指标跨期。"
        }
      },
      "categories": [
        {
          "name": "内容更新",
          "items": [
            "预约节目开播",
            "追剧或订阅更新",
            "直播开始",
            "下载或缓存完成"
          ]
        },
        {
          "name": "互动",
          "items": [
            "评论回复",
            "点赞互动",
            "私信或站内消息",
            "关注用户动态"
          ]
        },
        {
          "name": "会员与账户",
          "items": [
            "会员到期或续费",
            "权益变化",
            "活动与优惠",
            "登录或账户安全"
          ]
        }
      ],
      "sources": [
        {
          "title": "优酷视频 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id336141475",
          "type": "app-store",
          "note": "官方应用商店页面确认影视、综艺、动漫、直播、缓存、会员及多屏同步等功能。"
        }
      ],
      "count": 12,
      "categorySummary": "内容更新 4，互动 4，会员与账户 4",
      "rank": 19,
      "previousRank": 19,
      "rankChange": 0
    },
    {
      "id": "dingtalk",
      "name": "钉钉",
      "appCategory": "协作与办公",
      "logo": "assets/logos/dingtalk.jpg",
      "confidence": "high",
      "usage": {
        "period": "2025-12 / 2026-01",
        "durationMinutes": 5.2,
        "launches": 4.2,
        "activeUsers": 10099,
        "methodLabel": "月人均÷30天",
        "source": {
          "title": "QuestMobile 年度报告及月狐 2026 年 1 月 App TOP100",
          "url": "https://www.moonfox.cn/insight/news/2005",
          "note": "QuestMobile 原始披露钉钉 App 2025 年 12 月月人均使用时长 156.9 分钟、使用次数 124.8 次，页面按 30 天换算为日均 5.2 分钟、4.2 次；月狐披露 2026 年 1 月 MAU 为 1.0099 亿。"
        }
      },
      "categories": [
        {
          "name": "沟通",
          "items": [
            "单聊新消息",
            "群聊新消息",
            "DING 强提醒",
            "消息已读变化"
          ]
        },
        {
          "name": "协作",
          "items": [
            "文档评论及@提及",
            "待办任务",
            "日程与会议",
            "视频会议邀请"
          ]
        },
        {
          "name": "组织流程",
          "items": [
            "待审批",
            "审批结果",
            "请假报销采购流转",
            "企业公告"
          ]
        }
      ],
      "sources": [
        {
          "title": "钉钉 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id930368978",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "钉钉官网",
          "url": "https://web.j-dingtalk.com.cn/index.html",
          "type": "official",
          "note": "列出即时通讯、DING提醒、文档评论@、审批、日程、任务和会议。"
        }
      ],
      "count": 12,
      "categorySummary": "沟通 4，协作 4，组织流程 4",
      "rank": 20,
      "previousRank": 20,
      "rankChange": 0
    },
    {
      "id": "zhihu",
      "name": "知乎",
      "appCategory": "社交与社区",
      "logo": "assets/logos/zhihu.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2017-10 / 2024-FY / 2025-Q2",
        "durationMinutes": 39,
        "launches": 5.4,
        "activeUsers": 8300,
        "methodLabel": "打开次数为历史监测；其余为公司披露",
        "source": {
          "title": "知乎年报、业绩电话会与移动阅读研究",
          "url": "https://xmtxy.xjtu.edu.cn/__local/5/AA/EF/3BE98F474CD453829B6160BC84F_30025676_245211.pdf",
          "note": "研究资料披露 2017 年 10 月知乎人均日启动 5.35 次，页面按一位小数显示为 5.4 次；年报披露 2024 年平均 MAU 8,300 万，2025 年第二季度业绩电话会披露日均用户时长超过 39 分钟。三项跨期。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "赞同",
            "喜欢",
            "收藏",
            "评论",
            "回复"
          ]
        },
        {
          "name": "社交",
          "items": [
            "新增关注",
            "私信",
            "邀请回答"
          ]
        },
        {
          "name": "关注内容",
          "items": [
            "关注用户动态",
            "关注问题更新",
            "话题及专栏更新"
          ]
        },
        {
          "name": "平台",
          "items": [
            "系统与审核通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "知乎个人信息保护指引",
          "url": "https://www.zhihu.com/term/old-privacy-5",
          "type": "official",
          "note": "列出赞同、喜欢、收藏、评论、订阅、关注、私信和推送设置。"
        },
        {
          "title": "知乎消息推送设置说明",
          "url": "https://www.php.cn/faq/2343515.html",
          "type": "article",
          "note": "补充关注内容、评论、私信与赞同推送。"
        },
        {
          "title": "知乎 2025 年第二季度业绩电话会记录",
          "url": "https://www.roic.ai/quote/ZH/transcripts/2025-year/2-quarter",
          "type": "usage-data",
          "note": "业绩电话会披露日均用户时长超过 39 分钟；该项与年报的平均 MAU 分别标注，避免混淆统计周期。"
        }
      ],
      "count": 12,
      "categorySummary": "互动 5，社交 3，关注内容 3，平台 1",
      "rank": 21,
      "previousRank": 21,
      "rankChange": 0
    },
    {
      "id": "wecom",
      "name": "企业微信",
      "appCategory": "协作与办公",
      "logo": "assets/logos/wecom.jpg",
      "confidence": "high",
      "usage": {
        "period": "2020-03 / 2026-01",
        "durationMinutes": 9.6,
        "launches": null,
        "activeUsers": 8047,
        "source": {
          "title": "艾瑞企业微信监测及月狐移动 App 榜单",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202004281378879493_1.pdf",
          "note": "艾瑞 mUserTracker 披露企业微信 2020 年 3 月人均单日使用时长为 9.6 分钟；月狐披露 2026 年 1 月 MAU 为 8,047 万。两项指标跨期，未找到可核验的日均打开次数。"
        }
      },
      "categories": [
        {
          "name": "沟通",
          "items": [
            "单聊消息",
            "群聊消息",
            "@提及",
            "公告"
          ]
        },
        {
          "name": "协作",
          "items": [
            "日程与会议邀请",
            "待办任务",
            "文档评论或更新",
            "审批待处理",
            "审批结果"
          ]
        },
        {
          "name": "组织与客户",
          "items": [
            "通讯录变化",
            "客户联系消息",
            "系统与安全通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "企业微信 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1087897068",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 12,
      "categorySummary": "沟通 4，协作 5，组织与客户 3",
      "rank": 22,
      "previousRank": 22,
      "rankChange": 0
    },
    {
      "id": "cainiao",
      "name": "菜鸟",
      "appCategory": "出行、地图与物流",
      "logo": "assets/logos/cainiao.jpg",
      "confidence": "high",
      "usage": {
        "period": "2026-01",
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 4303,
        "source": {
          "title": "月狐数据 2026 年 1 月移动 App TOP100",
          "url": "https://www.moonfox.cn/insight/news/2005",
          "note": "月狐披露菜鸟 App 2026 年 1 月 MAU 为 4,303 万；未披露日均时长和打开次数。"
        }
      },
      "categories": [
        {
          "name": "包裹轨迹",
          "items": [
            "已发货",
            "运输中",
            "派送中",
            "已签收",
            "异常物流"
          ]
        },
        {
          "name": "取寄服务",
          "items": [
            "包裹到站",
            "快递柜或驿站取件",
            "上门取件预约",
            "退货寄件进度"
          ]
        },
        {
          "name": "服务",
          "items": [
            "预计送达时间",
            "物流服务通知",
            "活动消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "菜鸟 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id951610982",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "菜鸟 App 官方介绍",
          "url": "https://www.cainiao.com/technology-cainiao-app.html",
          "type": "official",
          "note": "明确说明到站立马通知、包裹状态与预测送达。"
        }
      ],
      "count": 12,
      "categorySummary": "包裹轨迹 5，取寄服务 4，服务 3",
      "rank": 23,
      "previousRank": 23,
      "rankChange": 0
    },
    {
      "id": "tmall",
      "name": "天猫商城",
      "appCategory": "电商与交易",
      "logo": "assets/logos/tmall.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-07 / 2025-09 / 2026-01",
        "durationMinutes": 4.2,
        "launches": 0.7,
        "activeUsers": 4174,
        "methodLabel": "时长为2020年90后样本月均约130分钟÷31；打开为2025年月均÷30",
        "source": {
          "title": "QuestMobile 90后人群报告、秋季报告及月狐 App TOP100",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202009111410916202_1.pdf",
          "note": "QuestMobile 2020 年 7 月 90 后样本图显示手机天猫月人均使用时长约 130 分钟，按 31 天换算为约 4.2 分钟/日；2025 年 9 月月人均使用 21.7 次，按 30 天换算为 0.7 次/日；月狐披露 2026 年 1 月 MAU 为 4,174 万。时长仅代表历史 90 后样本。"
        }
      },
      "categories": [
        {
          "name": "交易",
          "items": [
            "订单状态",
            "物流状态",
            "签收提醒",
            "退款售后",
            "降价或补货"
          ]
        },
        {
          "name": "店铺与互动",
          "items": [
            "店铺上新",
            "客服消息",
            "评价回复",
            "直播开播"
          ]
        },
        {
          "name": "账户",
          "items": [
            "优惠券",
            "会员权益",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "天猫商城 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id518966501",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 12,
      "categorySummary": "交易 5，店铺与互动 4，账户 3",
      "rank": 24,
      "previousRank": 24,
      "rankChange": 0
    },
    {
      "id": "douyin-mall",
      "name": "抖音商城",
      "appCategory": "电商与交易",
      "logo": "assets/logos/douyin-mall.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2025-02",
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 2960.2,
        "source": {
          "title": "QuestMobile 2025 APP 流量竞争新观察",
          "url": "https://www.questmobile.com.cn/research/report/1904427484746715138/",
          "note": "报告图表披露抖音商城 App 2025 年 2 月 MAU 为 2,960.2 万；未披露日均时长和打开次数。"
        }
      },
      "categories": [
        {
          "name": "交易",
          "items": [
            "订单状态",
            "物流状态",
            "签收提醒",
            "退款售后",
            "降价或补货"
          ]
        },
        {
          "name": "店铺与内容",
          "items": [
            "店铺上新",
            "客服消息",
            "评价回复",
            "直播开播"
          ]
        },
        {
          "name": "权益",
          "items": [
            "积分变化",
            "优惠券",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "抖音商城 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1485191072",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 12,
      "categorySummary": "交易 5，店铺与内容 4，权益 3",
      "rank": 25,
      "previousRank": 25,
      "rankChange": 0
    },
    {
      "id": "feishu",
      "name": "飞书",
      "appCategory": "协作与办公",
      "logo": "assets/logos/feishu.jpg",
      "confidence": "high",
      "usage": {
        "period": "2025-04",
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 1200,
        "activeUsersPrefix": "≈",
        "source": {
          "title": "新浪科技对协同办公市场的报道",
          "url": "https://finance.sina.com.cn/tech/csj/2025-04-11/doc-inestzxy5144025.shtml",
          "note": "报道援引行业估算称飞书 MAU 约 1,200 万，并注明并非官方披露；页面以近似值展示。未找到可核验的日均时长和打开次数。"
        }
      },
      "categories": [
        {
          "name": "沟通",
          "items": [
            "单聊消息",
            "群聊消息",
            "评论@提及",
            "催一催提醒"
          ]
        },
        {
          "name": "任务与项目",
          "items": [
            "任务分配",
            "任务到期",
            "任务进度订阅",
            "项目节点完成"
          ]
        },
        {
          "name": "组织协作",
          "items": [
            "系统变更",
            "审批结果",
            "日程会议邀请",
            "自动化消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "飞书 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1401729613",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "飞书项目通知中心",
          "url": "https://www.feishu.cn/content/3wjpjvaj",
          "type": "official",
          "note": "明确列出@、催办、节点完成、负责人变更和系统变更通知。"
        }
      ],
      "count": 12,
      "categorySummary": "沟通 4，任务与项目 4，组织协作 4",
      "rank": 26,
      "previousRank": 26,
      "rankChange": 0
    },
    {
      "id": "douyin",
      "name": "抖音",
      "appCategory": "短视频与资讯",
      "logo": "assets/logos/douyin.jpg",
      "confidence": "high",
      "usage": {
        "period": "2019-06 / 2025 监测 / 2025-10",
        "durationMinutes": 98.45,
        "launches": 23,
        "activeUsers": 94800,
        "methodLabel": "打开为2019年历史监测；时长与MAU为2025年",
        "source": {
          "title": "巨量商业算数中心抖音画像及 QuestMobile 流量监测",
          "url": "https://www.sdyanbao.com/detail/100034",
          "note": "巨量商业算数中心报告援引 QuestMobile 披露抖音 2019 年 6 月人均单日使用 23 次；行业流量分析披露 2025 年单机单日使用时长 98.45 分钟；QuestMobile 披露 2025 年 10 月 MAU 9.48 亿。打开次数是历史指标。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "点赞",
            "评论",
            "提及"
          ]
        },
        {
          "name": "社交",
          "items": [
            "私信",
            "新增关注",
            "朋友上线"
          ]
        },
        {
          "name": "内容",
          "items": [
            "朋友发布作品",
            "关注用户发布作品",
            "推荐作品"
          ]
        },
        {
          "name": "直播与运营",
          "items": [
            "直播开播",
            "活动通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "抖音常见问题",
          "url": "https://www.douyin.com/help",
          "type": "official",
          "note": "逐项列出私信、点赞、评论、提及、关注、上线、作品、推荐、直播和活动通知。"
        },
        {
          "title": "抖音隐私政策",
          "url": "https://www.douyin.com/draft/douyin_agreement/douyin_agreement_privacy.html?id=6773901168964798477",
          "type": "official",
          "note": "说明账号动态、关注内容动态、热点与推荐内容的系统推送。"
        }
      ],
      "count": 11,
      "categorySummary": "互动 3，社交 3，内容 3，直播与运营 2",
      "rank": 27,
      "previousRank": 27,
      "rankChange": 0
    },
    {
      "id": "iqiyi",
      "name": "爱奇艺",
      "appCategory": "影音与音频",
      "logo": "assets/logos/iqiyi.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-07 / 2025-Q3",
        "durationMinutes": 102,
        "launches": 1.8,
        "activeUsers": 38500,
        "methodLabel": "打开为2020年90后样本月均约55次÷31；时长与MAU为2025年",
        "source": {
          "title": "QuestMobile 90后人群报告及月狐 2025Q3 报告",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202009111410916202_1.pdf",
          "note": "QuestMobile 2020 年 7 月 90 后样本图显示爱奇艺月人均使用约 55 次，按 31 天换算为约 1.8 次/日；月狐披露 2025 年第三季度 MAU 3.85 亿、日均使用 102 分钟。打开次数仅代表历史 90 后样本。"
        }
      },
      "categories": [
        {
          "name": "内容",
          "items": [
            "追剧更新",
            "预约内容上线",
            "直播开播",
            "关注动态"
          ]
        },
        {
          "name": "互动",
          "items": [
            "弹幕回复",
            "评论回复",
            "点赞"
          ]
        },
        {
          "name": "会员与活动",
          "items": [
            "会员到期",
            "自动续费或扣款",
            "签到",
            "平台活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "爱奇艺追剧帮助",
          "url": "https://help.iqiyi.com/m/q4LchN1g/questionInfo/1959.html",
          "type": "official",
          "note": "确认加追、预约与在追功能。"
        },
        {
          "title": "爱奇艺平台通知帮助",
          "url": "https://intl-help.iq.com/m/iqiyi-app-help/questionInfo/5468.html",
          "type": "official",
          "note": "确认消息页面与平台通知。"
        },
        {
          "title": "爱奇艺互动提醒设置",
          "url": "https://www.php.cn/faq/2810115.html",
          "type": "article",
          "note": "列出弹幕回复、点赞、评论、关注、会员和签到提醒。"
        }
      ],
      "count": 11,
      "categorySummary": "内容 4，互动 3，会员与活动 4",
      "rank": 28,
      "previousRank": 28,
      "rankChange": 0
    },
    {
      "id": "tencent-video",
      "name": "腾讯视频",
      "appCategory": "影音与音频",
      "logo": "assets/logos/tencent-video.jpg",
      "confidence": "low",
      "usage": {
        "period": "2020-07 / 2025-Q3",
        "durationMinutes": 78,
        "launches": 0.6,
        "activeUsers": 38400,
        "methodLabel": "打开为2020年90后样本月均约20次÷31；时长与MAU为2025年",
        "source": {
          "title": "QuestMobile 90后人群报告及月狐 2025Q3 报告",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202009111410916202_1.pdf",
          "note": "QuestMobile 2020 年 7 月 90 后样本图显示腾讯视频月人均使用约 20 次，按 31 天换算为约 0.6 次/日；月狐披露 2025 年第三季度 MAU 3.84 亿、日均使用 78 分钟。打开次数仅代表历史 90 后样本。"
        }
      },
      "categories": [
        {
          "name": "内容",
          "items": [
            "追剧更新",
            "看单或订阅更新",
            "节目预约",
            "直播开播"
          ]
        },
        {
          "name": "互动",
          "items": [
            "评论回复",
            "弹幕互动",
            "点赞",
            "关注更新"
          ]
        },
        {
          "name": "账户与运营",
          "items": [
            "会员或续费",
            "系统通知",
            "推广活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "腾讯视频隐私保护指引",
          "url": "https://privacy.tencent.com/document/priview/a0ad886041e644af93f2a2ab91dd84bb",
          "type": "official",
          "note": "确认内容推送、预约提醒、评论、点赞、关注和订阅记录。"
        },
        {
          "title": "腾讯视频隐私版本对比",
          "url": "https://termshub.cn/public/version/5938",
          "type": "policy-history",
          "note": "补充消息告知、身份、安全和预约服务。"
        }
      ],
      "count": 11,
      "categorySummary": "内容 4，互动 4，账户与运营 3",
      "rank": 29,
      "previousRank": 29,
      "rankChange": 0
    },
    {
      "id": "qq-music",
      "name": "QQ音乐",
      "appCategory": "影音与音频",
      "logo": "assets/logos/qq-music.jpg",
      "confidence": "low",
      "usage": {
        "period": "2026-01 / 2026-03",
        "durationMinutes": 17.68,
        "launches": 6.84,
        "activeUsers": 32399,
        "source": {
          "title": "艾瑞 2026Q1 流量报告及月狐 App TOP100",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202605191822433573_1.pdf?1779196254000.pdf=",
          "note": "艾瑞监测显示 QQ音乐 App 2026 年 3 月单机单日有效时间 17.68 分钟、使用 6.84 次；月狐披露 2026 年 1 月 MAU 为 3.2399 亿。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "私信",
            "评论回复",
            "评论点赞",
            "新增关注"
          ]
        },
        {
          "name": "音乐与直播",
          "items": [
            "关注歌手新歌",
            "新MV",
            "数字专辑动态",
            "直播开播"
          ]
        },
        {
          "name": "平台",
          "items": [
            "系统消息",
            "会员到期或续费",
            "活动推广"
          ]
        }
      ],
      "sources": [
        {
          "title": "QQ音乐隐私保护指引副本",
          "url": "https://dacat.peopledata.org.cn/docs/QQ%E9%9F%B3%E4%B9%90/privacy-police",
          "type": "policy-copy",
          "note": "确认评论、私信、关注、直播和定向推送。"
        },
        {
          "title": "QQ音乐推送设置说明",
          "url": "https://www.php.cn/faq/3046045.html",
          "type": "article",
          "note": "列出系统、私信、点赞评论、新歌、新MV和直播更新。"
        },
        {
          "title": "QQ音乐评论点赞提醒",
          "url": "https://jingyan.baidu.com/article/066074d623fc0282c31cb064.html",
          "type": "article",
          "note": "确认评论点赞独立推送开关。"
        }
      ],
      "count": 11,
      "categorySummary": "互动 4，音乐与直播 4，平台 3",
      "rank": 30,
      "previousRank": 30,
      "rankChange": 0
    },
    {
      "id": "hellobike",
      "name": "哈啰",
      "appCategory": "出行、地图与物流",
      "logo": "assets/logos/hellobike.jpg",
      "confidence": "high",
      "usage": {
        "period": "2020-03 / 2026-01",
        "durationMinutes": 9.6,
        "launches": null,
        "activeUsers": 3905,
        "source": {
          "title": "月狐数据 2026 年 1 月移动 App TOP100",
          "url": "https://www.moonfox.cn/insight/news/2005",
          "note": "月狐披露哈啰 App 2026 年 1 月 MAU 为 3,905 万；未披露日均时长和打开次数。"
        }
      },
      "categories": [
        {
          "name": "骑行",
          "items": [
            "开锁或骑行中",
            "骑行结束",
            "待支付",
            "订单完成"
          ]
        },
        {
          "name": "叫车与顺风车",
          "items": [
            "订单匹配",
            "司机接单",
            "司机到达",
            "订单取消或变更"
          ]
        },
        {
          "name": "安全与权益",
          "items": [
            "安全提醒",
            "优惠券及骑行卡",
            "服务消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "哈啰 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1165227346",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "荣耀：哈啰骑行订单进度提醒",
          "url": "https://www.honor.com/cn/support/content/zh-cn15882785/",
          "type": "official",
          "note": "确认骑行、待支付和完成等订单状态会以系统动态通知展示。"
        }
      ],
      "count": 11,
      "categorySummary": "骑行 4，叫车与顺风车 4，安全与权益 3",
      "rank": 31,
      "previousRank": 31,
      "rankChange": 0
    },
    {
      "id": "bilibili",
      "name": "哔哩哔哩",
      "appCategory": "影音与音频",
      "logo": "assets/logos/bilibili.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-07 / 2026-Q1",
        "durationMinutes": 119,
        "launches": 3.5,
        "activeUsers": 37600,
        "activeUsersPrefix": ">",
        "methodLabel": "打开为2020年90后样本月均约110次÷31；时长与MAU为2026年官方口径",
        "source": {
          "title": "QuestMobile 90后人群报告及 Bilibili 2026Q1 公告",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202009111410916202_1.pdf",
          "note": "QuestMobile 2020 年 7 月 90 后样本图显示哔哩哔哩月人均使用约 110 次，按 31 天换算为约 3.5 次/日；公司 2026 年第一季度公告披露 MAU 超过 3.76 亿、日均使用 119 分钟。打开次数仅代表历史 90 后样本。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "回复我的",
            "@我",
            "收到的赞"
          ]
        },
        {
          "name": "消息",
          "items": [
            "私信",
            "系统通知",
            "应援团消息"
          ]
        },
        {
          "name": "关注内容",
          "items": [
            "UP主动态",
            "直播开播",
            "新增关注"
          ]
        },
        {
          "name": "创作",
          "items": [
            "投稿审核及处理"
          ]
        }
      ],
      "sources": [
        {
          "title": "Bilibili 消息设置接口整理",
          "url": "https://git.xfe.studio/XFEstudio/bilibili-API-collect/Blob?branch=master&path=docs%2Fmessage%2Fsettings.md",
          "type": "community-doc",
          "note": "列出赞、回复、@、应援团和未关注人消息开关。"
        },
        {
          "title": "Bilibili 消息中心使用说明",
          "url": "https://daiki-zinsei.com/bilibili-app-download/",
          "type": "article",
          "note": "列出回复、@、赞和系统通知入口。"
        },
        {
          "title": "Bilibili 自动回复",
          "url": "https://message.bilibili.com/h5/app/auto-reply",
          "type": "official",
          "note": "确认私信和新增关注触发场景。"
        }
      ],
      "count": 10,
      "categorySummary": "互动 3，消息 3，关注内容 3，创作 1",
      "rank": 32,
      "previousRank": 32,
      "rankChange": 0
    },
    {
      "id": "vipshop",
      "name": "唯品会",
      "appCategory": "电商与交易",
      "logo": "assets/logos/vipshop.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-07 / 2024-03",
        "durationMinutes": 1.1,
        "launches": 0.7,
        "activeUsers": 9618.2,
        "methodLabel": "行为为2020年90后样本图近似值÷31；MAU为2024年月独立设备",
        "source": {
          "title": "QuestMobile 90后人群报告及艾瑞 2024Q1 流量报告",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202009111410916202_1.pdf",
          "note": "QuestMobile 2020 年 7 月 90 后样本散点图显示唯品会月人均使用约 35 分钟、22 次，按 31 天换算为约 1.1 分钟、0.7 次/日；艾瑞监测显示 2024 年 3 月月独立设备 9,618.2 万。行为仅代表历史 90 后样本，MAU 为设备口径。"
        }
      },
      "categories": [
        {
          "name": "交易",
          "items": [
            "订单状态",
            "物流状态",
            "签收提醒",
            "退款售后",
            "降价或补货"
          ]
        },
        {
          "name": "权益",
          "items": [
            "品牌特卖开售",
            "优惠券",
            "会员权益",
            "客服消息"
          ]
        },
        {
          "name": "平台",
          "items": [
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "唯品会 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id417200582",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 10,
      "categorySummary": "交易 5，权益 4，平台 1",
      "rank": 33,
      "previousRank": 33,
      "rankChange": 0
    },
    {
      "id": "suning",
      "name": "苏宁易购",
      "appCategory": "电商与交易",
      "logo": "assets/logos/suning.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-07 / 2024-2025报告口径",
        "durationMinutes": 1.1,
        "launches": 0.4,
        "activeUsers": 3500,
        "activeUsersPrefix": "≈",
        "methodLabel": "行为为2020年90后样本图近似值÷31；MAU为研究报告近似值",
        "source": {
          "title": "QuestMobile 90后人群报告及苏宁易购数字化转型研究",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202009111410916202_1.pdf",
          "note": "QuestMobile 2020 年 7 月 90 后样本散点图显示苏宁易购月人均使用约 35 分钟、11 次，按 31 天换算为约 1.1 分钟、0.4 次/日；研究报告提及 MAU 约 3,500 万。三项均为近似或历史口径。"
        }
      },
      "categories": [
        {
          "name": "交易",
          "items": [
            "订单状态",
            "物流状态",
            "签收提醒",
            "退款售后",
            "降价或补货"
          ]
        },
        {
          "name": "店铺与服务",
          "items": [
            "客服消息",
            "店铺上新",
            "优惠券",
            "会员权益"
          ]
        },
        {
          "name": "平台",
          "items": [
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "苏宁易购 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id424598114",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 10,
      "categorySummary": "交易 5，店铺与服务 4，平台 1",
      "rank": 34,
      "previousRank": 34,
      "rankChange": 0
    },
    {
      "id": "hongguo",
      "name": "红果免费短剧",
      "appCategory": "短视频与资讯",
      "logo": "assets/logos/hongguo.jpg",
      "confidence": "low",
      "usage": {
        "period": "2026-02 / 2026-05",
        "durationMinutes": 125,
        "launches": 4.35,
        "activeUsers": 35600,
        "methodLabel": "跨期公开监测",
        "source": {
          "title": "QuestMobile 2026 短剧行业洞察及短剧应用监测",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202605271822903507_1.pdf?1779867860000.pdf=",
          "note": "QuestMobile 披露红果免费短剧 2026 年 2 月 MAU 30,378.4 万、月人均单日使用 125 分钟；2026 年 5 月公开监测披露 MAU 3.56 亿、人均单日启动 4.35 次。三个指标存在跨期。"
        }
      },
      "categories": [
        {
          "name": "内容",
          "items": [
            "连载更新",
            "预约短剧上线",
            "直播开播",
            "评论回复",
            "评论点赞"
          ]
        },
        {
          "name": "福利与平台",
          "items": [
            "签到提醒",
            "吃饭补贴",
            "阅读奖励",
            "系统通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "红果短剧 App Store 页面",
          "url": "https://apps.apple.com/cn/app/%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7-%E6%B5%B7%E9%87%8F%E7%83%AD%E9%97%A8%E7%9F%AD%E5%89%A7%E9%9A%8F%E5%BF%83%E7%9C%8B/id6451407032",
          "type": "app-store",
          "note": "确认追剧、预约上线通知和评论功能。"
        },
        {
          "title": "红果追剧提醒设置",
          "url": "https://www.php.cn/faq/2188465.html",
          "type": "article",
          "note": "列出连载、开播、签到、补贴和奖励提醒。"
        }
      ],
      "count": 9,
      "categorySummary": "内容 5，福利与平台 4",
      "rank": 35,
      "previousRank": 35,
      "rankChange": 0
    },
    {
      "id": "xigua",
      "name": "西瓜视频",
      "appCategory": "短视频与资讯",
      "logo": "assets/logos/xigua.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2018-10 / 2020 / 2026-01",
        "durationMinutes": 100,
        "launches": 19,
        "activeUsers": 13000,
        "methodLabel": "历史跨期数据；MAU为较新监测",
        "source": {
          "title": "QuestMobile 视频应用监测及月狐 App 榜单",
          "url": "https://www.ichdata.com/wp-content/pdf/rta/2019%E7%A9%BF%E5%B1%B1%E7%94%B2%E6%95%88%E6%9E%9C%E8%90%A5%E9%94%80%E9%80%9A%E6%A1%88%28%E5%90%ABRTA%29.pdf",
          "note": "QuestMobile 2018 年 10 月监测显示西瓜视频人均单日使用约 19 次；公开平台数据披露 2020 年平均使用时长超过 100 分钟；月狐 2026 年 1 月榜单记录 MAU 约 1.30 亿。三项指标跨期，时长按公开下限展示。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "评论回复",
            "点赞",
            "@提及",
            "新增关注",
            "私信"
          ]
        },
        {
          "name": "内容",
          "items": [
            "关注作者更新",
            "直播开播",
            "推荐内容"
          ]
        },
        {
          "name": "平台",
          "items": [
            "活动与系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "西瓜视频 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1134496215",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "互动 5，内容 3，平台 1",
      "rank": 36,
      "previousRank": 36,
      "rankChange": 0
    },
    {
      "id": "baidu-netdisk",
      "name": "百度网盘",
      "appCategory": "创作与工具",
      "logo": "assets/logos/baidu-netdisk.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2021-12 / 2022-Q4 / 2026-01",
        "durationMinutes": 15.6,
        "launches": 1.4,
        "activeUsers": 11000,
        "methodLabel": "跨期；次数按月度值/31换算",
        "source": {
          "title": "艾瑞个人网盘报告及月狐云盘监测",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP202210241579387908_1.pdf",
          "note": "艾瑞披露百度网盘 2021 年 12 月月单机使用 43.9 次，按 31 天换算约 1.4 次/日；月狐披露 2022 年第四季度单日人均使用 15.6 分钟，并在 2026 年 1 月榜单中记录 MAU 约 1.10 亿。"
        }
      },
      "categories": [
        {
          "name": "文件",
          "items": [
            "上传完成",
            "下载完成",
            "转存完成",
            "分享文件更新"
          ]
        },
        {
          "name": "空间与账户",
          "items": [
            "空间容量提醒",
            "会员到期或续费",
            "登录与安全"
          ]
        },
        {
          "name": "服务",
          "items": [
            "系统消息",
            "活动通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "百度网盘 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id547166701",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "文件 4，空间与账户 3，服务 2",
      "rank": 37,
      "previousRank": 37,
      "rankChange": 0
    },
    {
      "id": "ximalaya",
      "name": "喜马拉雅",
      "appCategory": "影音与音频",
      "logo": "assets/logos/ximalaya.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2017-Q2 / 2023 / 2025-Q1",
        "durationMinutes": 130,
        "launches": 0.8,
        "activeUsers": 9461,
        "methodLabel": "周频次÷7；时长为DAU收听口径；跨期历史监测",
        "source": {
          "title": "喜马拉雅招股书、移动知识付费研究及月狐监测",
          "url": "https://pdf.hanspub.org/hjdm20180300000_43341897.pdf",
          "note": "研究资料披露 2017 年第二季度喜马拉雅周人均启动 5.8 次，5.8÷7=日均约 0.8 次；招股书披露移动端 2023 年 DAU 日均收听 130 分钟；月狐披露 2025 年第一季度移动端季度平均 MAU 9,461 万。三项跨期，打开次数为历史值。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "评论回复",
            "点赞",
            "私信",
            "新增关注"
          ]
        },
        {
          "name": "内容",
          "items": [
            "订阅节目更新",
            "关注主播开播",
            "听书或收听提醒"
          ]
        },
        {
          "name": "账户",
          "items": [
            "会员到期或续费",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "喜马拉雅 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id876336838",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "互动 4，内容 3，账户 2",
      "rank": 38,
      "previousRank": 38,
      "rankChange": 0
    },
    {
      "id": "dewu",
      "name": "得物",
      "appCategory": "电商与交易",
      "logo": "assets/logos/dewu.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-2021 / 2024-03",
        "durationMinutes": 10,
        "launches": null,
        "activeUsers": 8799.5,
        "methodLabel": "历史近似时长",
        "source": {
          "title": "QuestMobile 得物流量监测及社区电商分析",
          "url": "https://m.thepaper.cn/newsDetail_forward_28258340",
          "note": "QuestMobile 披露得物 2024 年 3 月 MAU 8,799.5 万；较早社区电商分析援引监测图称得物人均单日使用时长长期约 10 分钟。未找到可核验的日均打开次数，时长按近似历史值展示。"
        }
      },
      "categories": [
        {
          "name": "交易与鉴定",
          "items": [
            "订单状态",
            "鉴定结果",
            "物流状态",
            "签收提醒",
            "退款售后"
          ]
        },
        {
          "name": "社区与权益",
          "items": [
            "私信或评论互动",
            "降价或补货",
            "优惠券",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "得物 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1012871328",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "交易与鉴定 5，社区与权益 4",
      "rank": 39,
      "previousRank": 39,
      "rankChange": 0
    },
    {
      "id": "meituan-food",
      "name": "美团外卖",
      "appCategory": "本地生活与服务",
      "logo": "assets/logos/meituan-food.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2021-09 / 2024-10",
        "durationMinutes": 7.58,
        "launches": 2.77,
        "activeUsers": 6318,
        "methodLabel": "跨期历史口径",
        "source": {
          "title": "易观外卖 App 监测及 QuestMobile 独立 App 监测",
          "url": "https://www.tmtpost.com/5879786.html",
          "note": "易观披露 2021 年 9 月美团外卖 APP 人均单日使用 7.58 分钟、日均打开 2.77 次；QuestMobile 披露 2024 年 10 月美团外卖独立 APP MAU 为 6,318 万。指标跨期，未使用微信小程序 MAU。"
        }
      },
      "categories": [
        {
          "name": "订单履约",
          "items": [
            "下单确认",
            "商家接单",
            "配送进度",
            "骑手到达",
            "订单完成",
            "退款售后"
          ]
        },
        {
          "name": "服务",
          "items": [
            "优惠券",
            "评价回复",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "美团外卖 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id737310995",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "美团外卖官方下载",
          "url": "https://waimai.meituan.com/mobile/download",
          "type": "official",
          "note": "确认美团外卖独立 App 下载入口。"
        }
      ],
      "count": 9,
      "categorySummary": "订单履约 6，服务 3",
      "rank": 40,
      "previousRank": 40,
      "rankChange": 0
    },
    {
      "id": "netease-news",
      "name": "网易新闻",
      "appCategory": "搜索与资讯",
      "logo": "assets/logos/netease-news.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2020-06 / 2025-05",
        "durationMinutes": 36.2,
        "launches": 4.1,
        "activeUsers": 5782,
        "methodLabel": "跨期；月度值换算",
        "source": {
          "title": "QuestMobile 2025 全景生态半年报告及泛资讯报告",
          "url": "https://www.questmobile.cn/research/report/1950089049332092929/",
          "note": "QuestMobile 披露网易新闻 2025 年 5 月 MAU 5,782 万、月人均使用 18.7 小时，按 31 天换算约 36.2 分钟/日；TalkingData 2020 年 6 月披露月人均使用 122 次，按 30 天换算约 4.1 次/日。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "评论回复",
            "点赞",
            "@提及",
            "新增关注",
            "私信"
          ]
        },
        {
          "name": "资讯",
          "items": [
            "关注内容更新",
            "要闻推送",
            "直播或视频更新",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "网易新闻 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id425349261",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "互动 5，资讯 4",
      "rank": 41,
      "previousRank": 41,
      "rankChange": 0
    },
    {
      "id": "huajiao",
      "name": "花椒直播",
      "appCategory": "直播与社区",
      "logo": "assets/logos/huajiao.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2016-04 / 2020-Q2 / 2022-01至05",
        "durationMinutes": 67.8,
        "launches": 1,
        "activeUsers": 3063,
        "methodLabel": "历史跨期口径；月启动次数按30天换算",
        "source": {
          "title": "花房集团招股书、易观直播监测及历史运营数据",
          "url": "https://www.a-site.cn/article/150796.html",
          "note": "历史运营数据披露 2016 年 4 月月人均启动 29 次，按 30 天换算为日均约 1.0 次；易观披露 2020 年第二季度人均单日使用 67.8 分钟；花房招股资料披露 2022 年前五个月平均 MAU 约 3,063 万。三项指标跨期。"
        }
      },
      "categories": [
        {
          "name": "直播",
          "items": [
            "关注主播开播",
            "直播预约",
            "直播间互动",
            "礼物或收益"
          ]
        },
        {
          "name": "社交",
          "items": [
            "私信",
            "评论回复",
            "点赞或关注",
            "@提及"
          ]
        },
        {
          "name": "平台",
          "items": [
            "活动与系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "花椒直播 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id988396858",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "直播 4，社交 4，平台 1",
      "rank": 42,
      "previousRank": 42,
      "rankChange": 0
    },
    {
      "id": "duoshan",
      "name": "多闪",
      "appCategory": "社交与社区",
      "logo": "assets/logos/duoshan.jpg",
      "confidence": "low",
      "usage": {
        "period": "2019-04 / 2026-03",
        "durationMinutes": 1,
        "durationMinutesPrefix": "<",
        "launches": 1,
        "activeUsers": 3000,
        "activeUsersPrefix": ">",
        "methodLabel": "跨期数据",
        "source": {
          "title": "国金证券移动互联网月报及 QuestMobile 春季报告",
          "url": "https://pdf.dfcfw.com/pdf/H3_AP201905201331052350_1.pdf",
          "note": "国金证券监测显示 2019 年 4 月多闪人均每天使用不足 1 分钟、每天约 1 次；QuestMobile 2026 年春季报告披露 2026 年 3 月 MAU 突破 3,000 万。使用深度为历史值，MAU 为较新值。"
        }
      },
      "categories": [
        {
          "name": "聊天",
          "items": [
            "私聊消息",
            "群聊消息",
            "语音通话",
            "视频通话"
          ]
        },
        {
          "name": "朋友",
          "items": [
            "好友或关注变化",
            "朋友动态更新",
            "动态互动"
          ]
        },
        {
          "name": "产品",
          "items": [
            "火花及任务提醒",
            "系统公告"
          ]
        }
      ],
      "sources": [
        {
          "title": "多闪用户服务协议",
          "url": "https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/NowCN/9a409919-c476-4522-be9b-f09241e236e4.html?hide_nav_bar=1",
          "type": "official",
          "note": "说明即时通信、内容发布、系统提示、弹窗和站内信。"
        },
        {
          "title": "多闪 App Store 页面",
          "url": "https://apps.apple.com/cn/app/%E5%A4%9A%E9%97%AA/id1435602536",
          "type": "app-store",
          "note": "列出聊天、群聊、视频通话、朋友动态和任务。"
        }
      ],
      "count": 9,
      "categorySummary": "聊天 4，朋友 3，产品 2",
      "rank": 43,
      "previousRank": 43,
      "rankChange": 0
    },
    {
      "id": "inke",
      "name": "映客直播",
      "appCategory": "直播与社区",
      "logo": "assets/logos/inke.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2016 / 2017-Q4",
        "durationMinutes": 30.3,
        "launches": 3,
        "activeUsers": 2518.4,
        "methodLabel": "历史APP口径",
        "source": {
          "title": "映客招股书报道及移动直播研究",
          "url": "https://m.thepaper.cn/newsDetail_forward_2044301",
          "note": "映客招股书披露 2017 年第四季度 APP 平均 MAU 为 2,518.4 万；移动直播行业研究披露 2016 年映客人均日启动时长 30.3 分钟、人均日启动 2.8 次；极光历史监测另给出 3.03 次。页面采用较保守的一位小数 3.0 次。"
        }
      },
      "categories": [
        {
          "name": "直播",
          "items": [
            "关注主播开播",
            "直播预约",
            "直播间互动",
            "礼物或收益"
          ]
        },
        {
          "name": "社交",
          "items": [
            "私信",
            "评论回复",
            "点赞或关注",
            "@提及"
          ]
        },
        {
          "name": "平台",
          "items": [
            "活动与系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "映客直播 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id978985106",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "直播 4，社交 4，平台 1",
      "rank": 44,
      "previousRank": 44,
      "rankChange": 0
    },
    {
      "id": "zhuanzhuan",
      "name": "转转",
      "appCategory": "电商与交易",
      "logo": "assets/logos/zhuanzhuan.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2016-05",
        "durationMinutes": 11.4,
        "launches": 5.5,
        "activeUsers": 410,
        "methodLabel": "历史 QuestMobile 口径",
        "source": {
          "title": "QuestMobile 二手交易 App 监测报道",
          "url": "https://www.ikanchai.com/article/20160613/83540.shtml",
          "note": "QuestMobile 2016 年 5 月监测披露转转 MAU 410 万、人均单日使用 11.4 分钟、人均单日使用 5.5 次。数据较旧，仅作为有明确年份的历史基准。"
        }
      },
      "categories": [
        {
          "name": "交易",
          "items": [
            "商品咨询",
            "订单状态",
            "验机或质检结果",
            "物流状态",
            "退款售后"
          ]
        },
        {
          "name": "社区与权益",
          "items": [
            "出价或议价",
            "收藏商品降价",
            "优惠券",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "转转 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1002355194",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 9,
      "categorySummary": "交易 5，社区与权益 4",
      "rank": 45,
      "previousRank": 45,
      "rankChange": 0
    },
    {
      "id": "amap",
      "name": "高德地图",
      "appCategory": "出行、地图与物流",
      "logo": "assets/logos/amap.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2021-10 / 2022-09 / 2025-03",
        "durationMinutes": 11.5,
        "launches": 4.4,
        "activeUsers": 87300,
        "methodLabel": "国庆峰值打开次数；其余为跨期监测",
        "source": {
          "title": "高德国庆 App 监测、QuestMobile 春季报告及车生活报告",
          "url": "https://www.36kr.com/p/1446168040974214",
          "note": "监测显示高德地图 2021 年 10 月 1 日人均日启动达到 4.42 次，页面按一位小数显示 4.4 次；该值是国庆峰值而非普通日均。QuestMobile 另披露 2022 年 9 月平均单日使用 11.5 分钟、2025 年 3 月 MAU 8.73 亿，三项跨期。"
        }
      },
      "categories": [
        {
          "name": "导航出行",
          "items": [
            "路线与路况变化",
            "到达目的地",
            "公交或地铁到站",
            "限行与道路提示"
          ]
        },
        {
          "name": "订单服务",
          "items": [
            "打车订单状态",
            "司机到达",
            "行程安全",
            "出行服务活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "高德地图 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id461703208",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 8,
      "categorySummary": "导航出行 4，订单服务 4",
      "rank": 46,
      "previousRank": 46,
      "rankChange": 0
    },
    {
      "id": "baidu",
      "name": "百度",
      "appCategory": "搜索与资讯",
      "logo": "assets/logos/baidu.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2017 / 2024-11 / 2025-12",
        "durationMinutes": 40,
        "launches": 8,
        "activeUsers": 67900,
        "source": {
          "title": "百度财报、QuestMobile监测及百度营销资料",
          "url": "https://aigc.idigital.com.cn/djyanbao/%E3%80%90%E5%8D%8E%E6%B3%B0%E8%AF%81%E5%88%B8%E3%80%91%E7%99%BE%E5%BA%A6%E9%9B%86%E5%9B%A2-SW%EF%BC%8809888%EF%BC%89%EF%BC%9A%E5%85%85%E6%B2%9B%E7%8E%B0%E9%87%91%E5%82%A8%E5%A4%87%E6%94%AF%E6%8C%81AI%E8%BD%AC%E5%9E%8B%E9%95%BF%E8%B7%AF-2025-01-12.pdf",
          "note": "QuestMobile 披露百度 App 2024 年 11 月人均单日使用约 40 分钟；百度营销资料披露 2017 年人均单日使用 8 次；百度官方披露 2025 年 12 月 MAU 6.79 亿。三项指标跨期。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "评论回复",
            "点赞或收藏互动",
            "私信",
            "新增关注"
          ]
        },
        {
          "name": "内容与服务",
          "items": [
            "关注内容更新",
            "热点资讯",
            "服务消息",
            "账号安全"
          ]
        }
      ],
      "sources": [
        {
          "title": "百度 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id382201985",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 8,
      "categorySummary": "互动 4，内容与服务 4",
      "rank": 47,
      "previousRank": 47,
      "rankChange": 0
    },
    {
      "id": "baidu-maps",
      "name": "百度地图",
      "appCategory": "出行、地图与物流",
      "logo": "assets/logos/baidu-maps.jpg",
      "confidence": "high",
      "usage": {
        "period": "2023春节 / 2025-11",
        "durationMinutes": 30.3,
        "launches": null,
        "activeUsers": 55411,
        "source": {
          "title": "QuestMobile 春节监测与移动互联网月报",
          "url": "https://www.yunbaogao.cn/index/partFile/1/cbndata/2023-02/1_51985.pdf",
          "note": "QuestMobile 图表披露 2023 年春节期间百度地图人均单日使用约 30.3 分钟；证券研究报告引述 QuestMobile 披露 2025 年 11 月 MAU 为 5.5411 亿。两项跨期，未找到可核验的日均打开次数。"
        }
      },
      "categories": [
        {
          "name": "导航",
          "items": [
            "路线及路况变化",
            "到达目的地",
            "公交地铁到站",
            "道路与限行提示"
          ]
        },
        {
          "name": "出行服务",
          "items": [
            "打车订单状态",
            "司机到达",
            "停车或充电服务",
            "出行活动"
          ]
        }
      ],
      "sources": [
        {
          "title": "百度地图 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id452186370",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "百度地图交通信息发布服务手册",
          "url": "https://jiaotong.baidu.com/cms/trafficinforelease/%E3%80%8A%E4%BA%A4%E9%80%9A%E4%BF%A1%E6%81%AF%E5%8F%91%E5%B8%83%E6%9C%8D%E5%8A%A1%E6%89%8B%E5%86%8C%E3%80%8B.pdf",
          "type": "official",
          "note": "说明道路、限行等提醒可通过地图界面和导航语音触达。"
        }
      ],
      "count": 8,
      "categorySummary": "导航 4，出行服务 4",
      "rank": 48,
      "previousRank": 48,
      "rankChange": 0
    },
    {
      "id": "jianying",
      "name": "剪映",
      "appCategory": "创作与工具",
      "logo": "assets/logos/jianying.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2024-06 / 2024-11",
        "durationMinutes": 1.7,
        "launches": 0.8,
        "activeUsers": 31800,
        "source": {
          "title": "QuestMobile 图表与剪辑 App 行业报道",
          "url": "https://www.10100.com/article/180795",
          "note": "2024 年 6 月月人均使用时长 50.2 分钟，按 30 天换算为日均 1.7 分钟；2024 年 11 月 MAU 3.18 亿、月总使用 76.47 亿次，据此换算月人均约 24.1 次、日均约 0.8 次。指标跨期。"
        }
      },
      "categories": [
        {
          "name": "创作",
          "items": [
            "渲染或导出完成",
            "云端草稿同步",
            "模板或素材更新"
          ]
        },
        {
          "name": "社区互动",
          "items": [
            "评论回复",
            "点赞或关注",
            "私信"
          ]
        },
        {
          "name": "账户",
          "items": [
            "会员与订阅",
            "活动及系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "剪映 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1458072671",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 8,
      "categorySummary": "创作 3，社区互动 3，账户 2",
      "rank": 49,
      "previousRank": 49,
      "rankChange": 0
    },
    {
      "id": "xiaohongshu",
      "name": "小红书",
      "appCategory": "社交与社区",
      "logo": "assets/logos/xiaohongshu.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2021-10 / 2024-02 / 2025-10",
        "durationMinutes": 139,
        "launches": 4.7,
        "activeUsers": 23500,
        "methodLabel": "跨期历史监测",
        "source": {
          "title": "月狐双十一监测与 QuestMobile 流量数据",
          "url": "https://www.dcbbs.com/p-183112.html",
          "note": "月狐披露 2021 年 10 月小红书人均日启动次数由 3.9 次升至 4.7 次；原有日均时长为 2024 年 2 月监测，QuestMobile 披露 2025 年 10 月 App MAU 2.35 亿。三项跨期，打开次数为历史值。"
        }
      },
      "categories": [
        {
          "name": "内容互动",
          "items": [
            "收到点赞",
            "收到收藏",
            "收到评论",
            "被@提及"
          ]
        },
        {
          "name": "社交",
          "items": [
            "新增关注",
            "私信消息"
          ]
        },
        {
          "name": "平台",
          "items": [
            "系统通知",
            "关注内容更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "小红书官方深链文档",
          "url": "https://pages.xiaohongshu.com/activity/deeplink",
          "type": "official",
          "note": "明确列出赞和收藏、关注、评论和@、系统通知页面。"
        },
        {
          "title": "小红书评论与点赞提醒设置",
          "url": "https://www.ntszjs.com/glzx/111.html",
          "type": "article",
          "note": "补充评论、赞、收藏和应用内消息横幅。"
        }
      ],
      "count": 8,
      "categorySummary": "内容互动 4，社交 2，平台 2",
      "rank": 50,
      "previousRank": 50,
      "rankChange": 0
    },
    {
      "id": "sams",
      "name": "山姆会员商店",
      "appCategory": "电商与交易",
      "logo": "assets/logos/sams.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2022-06 / 2025-12",
        "durationMinutes": null,
        "launches": 2.2,
        "activeUsers": 3177,
        "source": {
          "title": "CTR 移动互联网趋势报告与山姆 App 月活报道",
          "url": "https://www.ctrchina.cn/static/upload/2022%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E4%BA%92%E8%81%94%E7%BD%91%E7%94%A8%E6%88%B7%E8%B6%8B%E5%8A%BF%E8%A7%82%E5%AF%9F%EF%BC%88CTR%E5%8F%91%E5%B8%83%EF%BC%89_20220920132702732.pdf",
          "note": "CTR 图表披露 2022 年 6 月山姆会员商店 App 月人均使用 67 次，按 30 天换算为日均约 2.2 次；公开报道披露 2025 年 12 月 MAU 3,177 万。两项跨期，未找到可核验日均时长。"
        }
      },
      "categories": [
        {
          "name": "订单",
          "items": [
            "订单状态",
            "配送进度",
            "签收提醒",
            "退款售后"
          ]
        },
        {
          "name": "会员与商品",
          "items": [
            "会员到期或续费",
            "优惠券",
            "补货或降价",
            "活动和系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "山姆会员商店 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id818237113",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 8,
      "categorySummary": "订单 4，会员与商品 4",
      "rank": 51,
      "previousRank": 51,
      "rankChange": 0
    },
    {
      "id": "douban",
      "name": "豆瓣",
      "appCategory": "社交与社区",
      "logo": "assets/logos/douban.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2021",
        "durationMinutes": 30,
        "launches": 7,
        "activeUsers": 1200,
        "source": {
          "title": "南方+：易观千帆豆瓣 App 历史监测",
          "url": "https://static.nfnews.com/content/202112/19/c6053456.html?enterColumnId=4285",
          "note": "文章引述易观千帆 2021 年数据：豆瓣 App 月活约 1,200 万、人均单日启动约 7 次、人均单日使用约 30 分钟；属于历史监测值。"
        }
      },
      "categories": [
        {
          "name": "互动",
          "items": [
            "评论回复",
            "点赞",
            "@提及",
            "私信"
          ]
        },
        {
          "name": "内容",
          "items": [
            "关注用户动态",
            "小组或话题更新",
            "活动或同城消息"
          ]
        },
        {
          "name": "平台",
          "items": [
            "系统通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "豆瓣 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id907002334",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 8,
      "categorySummary": "互动 4，内容 3，平台 1",
      "rank": 52,
      "previousRank": 52,
      "rankChange": 0
    },
    {
      "id": "starbucks",
      "name": "STARBUCKS",
      "appCategory": "本地生活与服务",
      "logo": "assets/logos/starbucks.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2017-09",
        "durationMinutes": 0.2,
        "launches": 0.1,
        "activeUsers": 151.43,
        "source": {
          "title": "界面新闻：易观星巴克 App 月度监测",
          "url": "https://www.jiemian.com/article/1746239.html",
          "note": "历史数据：2017 年 9 月活跃用户 151.43 万、月启动 523.10 万次、月使用 18.55 万小时；按活跃用户及 30 天换算为日均约 0.1 次、0.2 分钟。"
        }
      },
      "categories": [
        {
          "name": "订单",
          "items": [
            "下单确认",
            "饮品制作或取餐",
            "配送进度",
            "退款或售后"
          ]
        },
        {
          "name": "会员与活动",
          "items": [
            "星享俱乐部权益",
            "优惠券",
            "会员等级变化",
            "活动与新品"
          ]
        }
      ],
      "sources": [
        {
          "title": "星巴克中国 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id499819758",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 8,
      "categorySummary": "订单 4，会员与活动 4",
      "rank": 53,
      "previousRank": 53,
      "rankChange": 0
    },
    {
      "id": "xiaoyuzhou",
      "name": "小宇宙",
      "appCategory": "影音与音频",
      "logo": "assets/logos/xiaoyuzhou.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2025",
        "durationMinutes": 80,
        "launches": null,
        "activeUsers": null,
        "source": {
          "title": "杨浦时报：小宇宙播客用户观察",
          "url": "https://yptimes.shyp.gov.cn/resfile/2025-03-20/05/ypsb-20250320-005.pdf",
          "note": "报道披露小宇宙日活用户日均收听约 80 分钟；该口径是 DAU 收听时长，不等同于全体 MAU 使用时长。累计用户数不作为 MAU，日均打开次数亦未找到可核验数据。"
        }
      },
      "categories": [
        {
          "name": "订阅内容",
          "items": [
            "订阅节目更新",
            "节目公告",
            "关注用户语音动态",
            "热门内容推送"
          ]
        },
        {
          "name": "社区",
          "items": [
            "评论回复",
            "评论点赞",
            "新增粉丝",
            "实时活动精彩评论"
          ]
        }
      ],
      "sources": [
        {
          "title": "小宇宙主播手册",
          "url": "https://blog.xiaoyuzhoufm.com/podcaster-manual/",
          "type": "official",
          "note": "确认节目公告会向订阅者发送提醒通知。"
        },
        {
          "title": "小宇宙 App Store 页面",
          "url": "https://apps.apple.com/vu/app/%E5%B0%8F%E5%AE%87%E5%AE%99-%E4%B8%80%E8%B5%B7%E5%90%AC%E6%92%AD%E5%AE%A2/id1488894313",
          "type": "app-store",
          "note": "版本记录确认语音动态和实时活动评论设置。"
        },
        {
          "title": "小宇宙产品报道",
          "url": "https://www.jiemian.com/article/4188072.html",
          "type": "article",
          "note": "确认回复、新增粉丝、订阅更新和评论互动。"
        }
      ],
      "count": 8,
      "categorySummary": "订阅内容 4，社区 4",
      "rank": 54,
      "previousRank": 54,
      "rankChange": 0
    },
    {
      "id": "moji-weather",
      "name": "墨迹天气",
      "appCategory": "生活与健康",
      "logo": "assets/logos/moji-weather.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2017-01至09 / 2020-Q4",
        "durationMinutes": 2.6,
        "launches": 1,
        "activeUsers": 15900,
        "source": {
          "title": "墨迹天气招股资料与易观天气 App 监测",
          "url": "https://www.analysys.cn/article/detail/20020141",
          "note": "招股资料披露 2017 年 1—9 月日均使用 2 分 36 秒，折合 2.6 分钟；易观披露 2020 年第四季度 MAU 1.59 亿、月人均启动 29.4 次，后者按 30 天换算为日均约 1.0 次。指标跨期。"
        }
      },
      "categories": [
        {
          "name": "天气",
          "items": [
            "降雨提醒",
            "恶劣天气预警",
            "温度或天气变化",
            "台风或空气质量"
          ]
        },
        {
          "name": "生活服务",
          "items": [
            "出行提醒",
            "城市天气订阅",
            "活动及系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "墨迹天气 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id434209233",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 7,
      "categorySummary": "天气 4，生活服务 3",
      "rank": 55,
      "previousRank": 55,
      "rankChange": 0
    },
    {
      "id": "tencent-meeting",
      "name": "腾讯会议",
      "appCategory": "协作与办公",
      "logo": "assets/logos/tencent-meeting.jpg",
      "confidence": "high",
      "usage": {
        "period": "2022-08",
        "durationMinutes": 35,
        "launches": null,
        "activeUsers": 6500,
        "source": {
          "title": "交银国际互联网行业报告（引述 QuestMobile）",
          "url": "https://files.bocomgroup.com/download/700_HK-flash-221104s.pdf",
          "note": "报告披露 2022 年 8 月腾讯会议 MAU 约 6,500 万、人均单日使用约 35 分钟；未找到可核验的日均打开次数。"
        }
      },
      "categories": [
        {
          "name": "会议",
          "items": [
            "会议邀请",
            "会议开始提醒",
            "会议变更或取消",
            "会议内聊天"
          ]
        },
        {
          "name": "协作",
          "items": [
            "主持人提醒",
            "录制完成",
            "活动或系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "腾讯会议 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id1484048379",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "腾讯会议：会议前",
          "url": "https://meeting.tencent.com/support/topic/1625/",
          "type": "official",
          "note": "确认会议邀请、开始前提醒和移动端消息通知。"
        }
      ],
      "count": 7,
      "categorySummary": "会议 4，协作 3",
      "rank": 56,
      "previousRank": 56,
      "rankChange": 0
    },
    {
      "id": "kimi",
      "name": "Kimi",
      "appCategory": "AI 助手",
      "logo": "assets/logos/kimi.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2026-06",
        "durationMinutes": 1.9,
        "launches": 1.1,
        "activeUsers": 729,
        "methodLabel": "月人均指标按30天换算；QuestMobile App口径",
        "source": {
          "title": "QuestMobile 2026 年 6 月 AI App 榜单",
          "url": "https://www.chooseai.net/news/5058/",
          "note": "榜单披露 Kimi App MAU 729 万、月人均时长 56.8 分钟、月人均使用 33.5 次；56.8÷30=日均约 1.9 分钟，33.5÷30=日均约 1.1 次。AI产品榜同期给出 2,269 万 MAU，存在监测口径差异；页面统一采用同一 QuestMobile 榜单的三项 App 口径。"
        }
      },
      "categories": [
        {
          "name": "任务与生成",
          "items": [
            "定时任务执行结果",
            "定时任务未读结果",
            "长任务或Agent完成",
            "文档、PPT或文件生成完成"
          ]
        },
        {
          "name": "账户与服务",
          "items": [
            "会员或额度变化",
            "客服与服务变更",
            "政策、安全事件或营销通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "Kimi App Store 页面",
          "url": "https://apps.apple.com/cn/app/id6474233312",
          "type": "app-store",
          "note": "官方应用商店页面确认搜索、文件处理、PPT、Agent、插件及会员等功能范围。"
        },
        {
          "title": "Kimi 定时任务帮助",
          "url": "https://www.kimi.ai/zh-hant/help/features/scheduled-tasks",
          "type": "official",
          "note": "明确说明每次定时任务执行都会建立一条标记为未读的通知。"
        },
        {
          "title": "Kimi 隐私政策",
          "url": "https://www.kimi.com/user/agreement/userprivacy?version=v2",
          "type": "official",
          "note": "明确列出政策更新、服务变更、客服沟通、营销活动和安全事件通知。"
        }
      ],
      "count": 7,
      "categorySummary": "任务与生成 4，账户与服务 3",
      "rank": 57,
      "previousRank": 57,
      "rankChange": 0
    },
    {
      "id": "jimeng",
      "name": "即梦AI",
      "appCategory": "创作与工具",
      "logo": "assets/logos/jimeng.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2025-10",
        "durationMinutes": 2.6,
        "launches": 1.6,
        "activeUsers": 1263,
        "methodLabel": "月度总量与MAU换算",
        "source": {
          "title": "月狐 2025 年 10 月中国移动互联网 AIGC 赛道报告",
          "url": "https://chuanhaizhiku.com/reports/18903-zhong-guo-yi-dong-hu-lian-wang-aigc-sai-dao-liu-liang-bao-gao-2025-nian/",
          "note": "报告披露即梦 AI App MAU 1,263.0 万、月总使用 63,944.3 万次、月总使用时长 1,668.2 万小时。63,944.3÷1,263÷31=日均约 1.6 次；1,668.2×60÷1,263÷31=日均约 2.6 分钟。"
        }
      },
      "categories": [
        {
          "name": "创作任务",
          "items": [
            "生成完成",
            "生成失败或异常",
            "作品审核结果"
          ]
        },
        {
          "name": "社区与服务",
          "items": [
            "互动消息",
            "活动或功能更新",
            "系统通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "即梦AI App Store 页面",
          "url": "https://apps.apple.com/cn/app/id6503676563",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 6,
      "categorySummary": "创作任务 3，社区与服务 3",
      "rank": 58,
      "previousRank": 58,
      "rankChange": 0
    },
    {
      "id": "qianwen",
      "name": "千问",
      "appCategory": "AI 助手",
      "logo": "assets/logos/qianwen.jpg",
      "confidence": "high",
      "usage": {
        "period": "2026-06",
        "durationMinutes": 0.8,
        "launches": 0.6,
        "activeUsers": 16700,
        "source": {
          "title": "界面新闻：QuestMobile 生成式 AI App 月度数据",
          "url": "https://www.jiemian.com/article/14994136.html",
          "note": "2026 年 6 月月人均使用时长 22.9 分钟、月人均使用次数 17.4 次，按 30 天换算为日均 0.8 分钟和 0.6 次；QuestMobile 同期报告披露 MAU 1.67 亿。"
        }
      },
      "categories": [
        {
          "name": "任务与预约",
          "items": [
            "定时任务触发",
            "定时任务结果",
            "新功能预约提醒"
          ]
        },
        {
          "name": "服务",
          "items": [
            "功能或服务消息",
            "应用更新通知"
          ]
        }
      ],
      "sources": [
        {
          "title": "千问 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id6466733523",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "千问产品隐私政策",
          "url": "https://terms.alicdn.com/legal-agreement/terms/privacy_policy_full/20231011201849846/20231011201849846.html",
          "type": "official",
          "note": "明确说明预约提醒与功能或服务消息推送。"
        }
      ],
      "count": 5,
      "categorySummary": "任务与预约 3，服务 2",
      "rank": 59,
      "previousRank": 59,
      "rankChange": 0
    },
    {
      "id": "meitu",
      "name": "美图秀秀",
      "appCategory": "创作与工具",
      "logo": "assets/logos/meitu.jpg",
      "confidence": "low",
      "usage": {
        "period": "2016-12 / 2017-08 / 2026-01",
        "durationMinutes": 1.1,
        "launches": 0.5,
        "activeUsers": 12690,
        "methodLabel": "历史月均指标按当月天数换算；MAU为较新监测",
        "source": {
          "title": "QuestMobile 历史监测、招银国际研究与月狐榜单",
          "url": "https://www.cmbi.com.hk/upload/201801072629.pdf",
          "note": "QuestMobile 披露 2016 年 12 月月人均时长约 35 分钟，35÷31=日均约 1.1 分钟；招银国际援引 QuestMobile 披露 2017 年 8 月月人均使用 17 次，17÷31=日均约 0.5 次；月狐披露 2026 年 1 月 MAU 1.269 亿。三项跨期且使用指标为历史值。"
        }
      },
      "categories": [
        {
          "name": "创作服务",
          "items": [
            "AI 创作结果",
            "云端作品处理完成",
            "素材与模板更新"
          ]
        },
        {
          "name": "账户",
          "items": [
            "会员到期或续费",
            "活动与系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "美图秀秀 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id416048305",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 5,
      "categorySummary": "创作服务 3，账户 2",
      "rank": 60,
      "previousRank": 60,
      "rankChange": 0
    },
    {
      "id": "youdao-translate",
      "name": "有道翻译官",
      "appCategory": "创作与工具",
      "logo": "assets/logos/youdao-translate.jpg",
      "confidence": "low",
      "usage": {
        "period": "2019-08",
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 251,
        "methodLabel": "历史公开口径",
        "source": {
          "title": "网易有道公开运营数据整理",
          "url": "https://tool.lu/deck/qu/detail",
          "note": "公开资料披露截至 2019 年 8 月 31 日有道翻译官 MAU 约 251 万，属于历史数据。未找到可核验且可比的日均使用时长或日均打开次数。"
        }
      },
      "categories": [
        {
          "name": "学习",
          "items": [
            "单词或学习提醒",
            "课程任务",
            "学习打卡"
          ]
        },
        {
          "name": "服务",
          "items": [
            "会员与活动",
            "系统消息"
          ]
        }
      ],
      "sources": [
        {
          "title": "有道翻译官 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id576337924",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        }
      ],
      "count": 5,
      "categorySummary": "学习 3，服务 2",
      "rank": 61,
      "previousRank": 61,
      "rankChange": 0
    },
    {
      "id": "yuanbao",
      "name": "元宝",
      "appCategory": "AI 助手",
      "logo": "assets/logos/yuanbao.jpg",
      "confidence": "medium",
      "usage": {
        "period": "2026-06",
        "durationMinutes": 2,
        "launches": 1,
        "activeUsers": 4984,
        "methodLabel": "月人均指标按30天换算",
        "source": {
          "title": "QuestMobile 2026 年 6 月 AI App 榜单",
          "url": "https://www.chooseai.net/news/5058/",
          "note": "榜单披露腾讯元宝 App MAU 4,984 万、月人均时长 58.6 分钟、月人均使用 29.2 次；58.6÷30=日均约 2.0 分钟，29.2÷30=日均约 1.0 次。"
        }
      },
      "categories": [
        {
          "name": "任务",
          "items": [
            "任务提醒",
            "任务完成结果"
          ]
        },
        {
          "name": "服务",
          "items": [
            "功能更新",
            "系统或安全公告"
          ]
        }
      ],
      "sources": [
        {
          "title": "元宝 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id6480446430",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "元宝任务功能研究资料",
          "url": "https://www.cdut.edu.cn/__local/F/C9/EB/C02614CCC4A0369B16A7EC1C52A_B628CD50_6125D1.pdf",
          "type": "official",
          "note": "记录元宝任务功能可设置提醒。"
        }
      ],
      "count": 4,
      "categorySummary": "任务 2，服务 2",
      "rank": 62,
      "previousRank": 62,
      "rankChange": 0
    },
    {
      "id": "doubao",
      "name": "豆包",
      "appCategory": "AI 助手",
      "logo": "assets/logos/doubao.jpg",
      "confidence": "high",
      "usage": {
        "period": "2026-04 / 2026-06",
        "durationMinutes": 4.8,
        "launches": 2.5,
        "activeUsers": 38200,
        "source": {
          "title": "QuestMobile AI 应用价值榜及半年报告",
          "url": "https://www.questmobile.com.cn/research/report/2059118379722096641/",
          "note": "2026 年 4 月月人均使用时长 144.6 分钟、月人均使用次数 75.7 次，均按 30 天换算为日均 4.8 分钟和 2.5 次；2026 年 6 月 MAU 为 3.82 亿，三项指标跨月。"
        }
      },
      "categories": [
        {
          "name": "主动提醒",
          "items": [
            "日程提醒",
            "服务或功能更新通知"
          ]
        },
        {
          "name": "设备协同",
          "items": [
            "锁屏应用通知总结与耳机播报"
          ]
        }
      ],
      "sources": [
        {
          "title": "豆包隐私政策",
          "url": "https://www.doubao.com/legal/privacy",
          "type": "official",
          "note": "明确列出日程提醒和应用通知总结播报。"
        },
        {
          "title": "华为耳机豆包通知播报说明",
          "url": "https://consumer.huawei.com/cn/support/content/zh-cn16094391/",
          "type": "official-partner",
          "note": "确认豆包生成消息并播报通知栏消息的功能。"
        }
      ],
      "count": 3,
      "categorySummary": "主动提醒 2，设备协同 1",
      "rank": 63,
      "previousRank": 63,
      "rankChange": 0
    },
    {
      "id": "deepseek",
      "name": "DeepSeek",
      "appCategory": "AI 助手",
      "logo": "assets/logos/deepseek.jpg",
      "confidence": "low",
      "usage": {
        "period": "2026-04 / 2026-06",
        "durationMinutes": 3.7,
        "launches": 1.8,
        "activeUsers": 13000,
        "source": {
          "title": "QuestMobile AI 应用价值榜及半年报告",
          "url": "https://www.questmobile.com.cn/research/report/2059118379722096641/",
          "note": "2026 年 4 月月人均使用时长 109.5 分钟、月人均使用次数 54.5 次，按 30 天换算为日均 3.7 分钟和 1.8 次；2026 年 6 月 MAU 为 1.30 亿，三项指标跨月。"
        }
      },
      "categories": [
        {
          "name": "服务",
          "items": [
            "服务公告",
            "功能与版本更新"
          ]
        }
      ],
      "sources": [
        {
          "title": "DeepSeek App Store 页面",
          "url": "https://apps.apple.com/cn/app/id6737597349",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "DeepSeek 官方网站",
          "url": "https://www.deepseek.com/zh/",
          "type": "official",
          "note": "确认官方 App 产品入口；公开资料未找到可细分的推送设置，按保守下限计。"
        }
      ],
      "count": 2,
      "categorySummary": "服务 2",
      "rank": 64,
      "previousRank": 64,
      "rankChange": 0
    },
    {
      "id": "chrome",
      "name": "Chrome 浏览器",
      "appCategory": "创作与工具",
      "logo": "assets/logos/chrome.jpg",
      "confidence": "high",
      "usage": {
        "period": "2026-01",
        "durationMinutes": null,
        "launches": null,
        "activeUsers": 4895,
        "methodLabel": "Android/移动端活跃监测；通知计数采用iPhone口径",
        "source": {
          "title": "月狐数据 2026 年 1 月移动 App TOP100",
          "url": "https://www.moonfox.cn/insight/news/2005",
          "note": "月狐披露 Chrome 2026 年 1 月 MAU 为 4,895 万。月狐应用详情页列有启动次数与使用时长模块，但公开页面不显示具体数值，因此两项继续标记未披露；浏览器市场份额没有换算为用户数。"
        }
      },
      "categories": [
        {
          "name": "iPhone 限制",
          "items": []
        }
      ],
      "sources": [
        {
          "title": "Chrome 浏览器 App Store 页面",
          "url": "https://apps.apple.com/cn/app/id535886823",
          "type": "app-store",
          "note": "官方应用商店的功能说明、版本记录与开发者信息。"
        },
        {
          "title": "Google Chrome：通过通知接收快讯",
          "url": "https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DiOS&hl=zh-Hant",
          "type": "official",
          "note": "官方明确 iPhone 或 iPad 不显示 Chrome 通知；此占位项不计入通知数。"
        }
      ],
      "zeroReminderConfirmed": true,
      "count": 0,
      "categorySummary": "iPhone 限制 0",
      "rank": 65,
      "previousRank": 65,
      "rankChange": 0
    }
  ]
};
