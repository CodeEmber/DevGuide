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
      "/go/": sidebarGo(),
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
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
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
      text: "算法与数据结构",
      link: "/algorithm/index",
      activeMatch: "/algorithm/",
    },

    {
      text: "Golang",
      link: "/go/index",
      activeMatch: "/go/",
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
    //   items: [{ text: "123456?", link: "/go/api-examples" }],
    // },
  ];
}
function sidebarGo() {
  return [
    {
      text: "Golang入门指南",
      collapsed: false,
      items: [
        { text: "基础介绍", link: "/go/入门指南/基础介绍" },
        { text: "开发环境", link: "/go/入门指南/开发环境" },
        { text: "基础知识", link: "/go/入门指南/基础知识" },
        { text: "函数", link: "/go/入门指南/函数" },
        { text: "结构体", link: "/go/入门指南/结构体" },
      ],
    },
  ];
}
