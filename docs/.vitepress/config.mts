import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "吾所谓",
  description: "一个Coder的个人专栏",
  head: [["link", { rel: "icon", href: "index.ico" }]],

  lastUpdated: true,
  cleanUrls: true,
  base: "/DevGuide/",
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  themeConfig: {
    logo: "/header.png",
    nav: nav(),
    externalLinkIcon: false,
    i18nRouting: true,
    sidebar: {
      "/bigdata/": sidebarBigData(),
      "/cryptography/": sidebarCryptography(),
      "/algorithm/": sidebarAlgorithm(),
    },

    editLink: {
      pattern: "https://github.com/wyx-hhhh/DevGuide/edit/main/docs/:path",
      text: "在 github 上编辑此页",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/wyx-hhhh" }],

    // footer: {
    //   message: "🎉 Design by vitepress",
    //   copyright: "",
    // },

    search: {
      provider: "algolia",
      options: {
        appId: "M37AYU4B3I",
        apiKey: "0f63857542b55a6862093024f0daa824",
        indexName: "wyx-hhhhio",
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },

    lastUpdatedText: "最后更新",

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: [2, 4],
    outlineTitle: "这一页",
  },
});

function nav() {
  return [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "大数据",
      link: "/bigdata/index",
      activeMatch: "/bigdata/",
    },
    {
      text: "算法与数据结构",
      link: "/algorithm/index",
      activeMatch: "/algorithm/",
    },

    {
      text: "密码学",
      link: "/cryptography/index",
      activeMatch: "/cryptography/",
    },
    {
      text: "关于我",
      items: [
        {
          text: "个人小站",
          link: "https://wyxhhhh.cn/",
        },
        {
          text: "掘金",
          link: "https://juejin.cn/user/2815165688982270",
        },
      ],
    },
  ];
}

function sidebarBigData() {
  return [
    {
      text: "导论",
      collapsed: false,
      items: [
        { text: "大数据基础", link: "/bigdata/导论/大数据基础" },
        { text: "大数据处理流程", link: "/bigdata/导论/大数据处理流程" },
      ],
    },
    {
      text: "Hadoop",
      collapsed: false,
      items: [
        { text: "Hadoop基础", link: "/bigdata/Hadoop/Hadoop基础" },
        { text: "环境搭建", link: "/bigdata/Hadoop/环境搭建" },
      ],
    },
  ];
}

function sidebarAlgorithm() {
  return [
    // {
    //   text: "介绍",
    //   collapsible: true,
    //   items: [{ text: "123456?", link: "/cryptography/api-examples" }],
    // },
  ];
}
function sidebarCryptography() {
  return [];
}
