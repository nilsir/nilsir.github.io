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
        text: 'Go',
        link: '/go/',
        children: [
          '/go/mac-go-update-err.md'
        ],
      },
      {
        text: 'PHP',
        link: '/php/',
        children: [
          '/php/build-php-env-on-mac.md',
          '/php/php71-install-mcrypt-ext.md',
          '/php/php71-use-xdebug-test.md',
          '/php/use-local-composer-pkg.md'
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
      {
        text: 'MySQL',
        link: '/mysql/',
        // collapsible: true,
        children: [
          '/mysql/mysql-binlog-to-sql.md'
        ],
      },
    ],
  })
}
