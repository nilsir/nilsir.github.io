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
          '/go/mac-go-update-err.md',
          '/go/mac-go-grpc-install.md',
          '/go/go-reflect-call-func.md'
        ],
      },
      {
        text: 'PHP',
        link: '/php/',
        children: [
          '/php/build-php-env-on-mac.md',
          '/php/php71-install-mcrypt-ext.md',
          '/php/php71-use-xdebug-test.md',
          '/php/use-local-composer-pkg.md',
          '/php/install-swoole-ext.md'
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
          '/mysql/mysql-binlog-to-sql.md',
          '/mysql/query-order-by-in.md'
        ],
      },
      {
        text: 'Mac',
        link: '/mac/',
        // collapsible: true,
        children: [
          '/mac/touch-gesture.md',
          '/mac/mouse-setting.md'
        ],
      },
      {
        text: 'Git',
        link: '/git/',
        // collapsible: true,
        children: [
          '/git/my-git-config-backup.md'
        ],
      }
      ,
      {
        text: 'Ide',
        link: '/ide/',
        // collapsible: true,
        children: [
          '/ide/open-ide-from-browser.md'
        ],
      },
      {
        text: 'Css',
        link: '/css/',
        // collapsible: true,
        children: [
          '/css/web-gray-css.md'
        ],
      }
    ],
  }),
  head: [
    [
      "script",
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5114673839802250",
        crossorigin: "anonymous"
      },
    ],
  ],
}
