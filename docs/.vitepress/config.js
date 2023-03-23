export default {
    siteTitle: false,
    logo: "./logo.jpg",
    title: '赚钱居士',
    description: '总结归纳学习中的知识',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    lang: 'zh-CN',
    lastUpdated: '最近更新时间',
    themeConfig: {
        // 顶部导航栏配置
        nav: [
            {text: '首页', link: '/'},
            {
                text: '旅行',
                items: [
                    {
                        text: '西藏',
                        items: [
                            {text: '拉萨', link: '/journey/'},
                            {text: '喜马拉雅', link: '/journey/'},
                            {text: '纳木错', link: '/journey/'},
                        ]
                    },
                    {
                        text: '新疆',
                        items: [
                            {text: '可可托海', link: '/journey/'}
                        ],
                    },
                    {text: '黄山', link: '/journey/'},
                    {text: '鄱阳湖', link: '/journey/'},
                ]
            },
            {
                text: '技术',
                items: [
                    {text: 'Java', link: '/tech/java'},
                    {text: 'Swift', link: '/tech/swift'}
                ]
            },
            {
                text: '我的作品',
                items: [
                    {text: 'MyCar', link: '/projects/mycar'},
                    {text: 'Coco', link: '/projects/coco'},
                ]
            },
            {text: '关于作者', link: '/about/'},
        ],
        // 社交链接
        socialLinks: [
            { icon: "github", link: "https://github.com/Sinton" },
            { icon: "twitter", link: "https://github.com/Sinton" },
            { icon: "facebook", link: "https://github.com/Sinton" },
        ],
        // 左侧导航栏配置
        sidebar: {
            "/journey/" : [
                {
                    text: '旅行',
                    items: [
                        {
                            text: '西藏',
                            items: [
                                {text: '拉萨', link: '/journey/'},
                                {text: '喜马拉雅', link: '/journey/'},
                                {text: '纳木错', link: '/journey/'},
                            ]
                        },
                        {
                            text: '新疆',
                            items: [
                                {text: '可可托海', link: '/journey/'},
                            ],
                        },
                        {text: '黄山', link: '/journey/'},
                        {text: '鄱阳湖', link: '/journey/'},
                    ]
                }
            ],
        }
    }
}
