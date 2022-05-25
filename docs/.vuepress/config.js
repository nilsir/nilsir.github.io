const { defaultTheme } = require("vuepress");

module.exports = {
  lang: 'zh-CN',
  title: 'Nilsir\'s Blog',
  description: 'nilsir\'s blog on github pages',
  theme: defaultTheme({
    darkMode: true,

    contributors: false,

    lastUpdatedText: '上次更新',

    sidebar: [
      // SidebarItem
      {
        text: '关于我',
        link: '/',
        children: [
        ],
      },
      {
        text: 'Php',
        link: '/php/',
        children: [
          '/php/php71-install-mcrypt-ext.md'
        ],
      },
      {
        text: 'Nginx',
        link: '/nginx/',
        // collapsible: true,
        children: [
          '/nginx/nginx-without-process.md'
        ],
      },
    ],
  })
}
