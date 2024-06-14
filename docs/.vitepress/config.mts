import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "吾所谓",
  description: "一个Coder的个人专栏",
  head: [["link", { rel: "icon", href: "index.ico" }]],

  lastUpdated: true,
  cleanUrls: true,
  base: "/DevGuide/",

  themeConfig: {
    logo: "/header.png",
    nav: nav(),

    sidebar: {
      "/bigdata/": sidebarBigData(),
    },

    editLink: {
      pattern: "https://github.com/process1024/vitepress/edit/main/docs/:path",
      text: "在 github 上编辑此页",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/wyx-hhhh" }],

    // footer: {
    //   message: "🎉 Design by vitepress",
    //   copyright: "",
    // },

    search: {
      provider: "local",
    },

    lastUpdatedText: "最后更新",

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
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
      link: "/bigdata/markdown-examples",
      activeMatch: "/bigdata/",
    },
    // { text: "配置", link: "/config/introduction", activeMatch: "/config/" },
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
      text: "介绍",
      collapsible: true,
      items: [{ text: "123456?", link: "/bigdata/api-examples" }],
    },
    // {
    //   text: "编写",
    //   collapsible: true,
    //   items: [
    //     { text: "Markdown", link: "/guide/markdown" },
    //     { text: "静态资源", link: "/guide/asset-handling" },
    //     { text: "Frontmatter", link: "/guide/frontmatter" },
    //     { text: "在Markdown中使用Vue", link: "/guide/using-vue" },
    //     { text: "API参考", link: "/guide/api" },
    //   ],
    // },
  ];
}
