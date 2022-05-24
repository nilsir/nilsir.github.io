const { defaultTheme } = require("vuepress");

module.exports = {
  lang: 'zh-CN',
  title: 'Nilsir\'s Blog',
  description: 'nilsir\'s blog on github pages',
  theme: defaultTheme({
    darkMode: true,
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
