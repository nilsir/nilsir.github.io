---
lang: zh-CN
title: PHP 7.1 & MacOS M4 芯片 安装 性能调试工具
description: PHP 7.1 & MacOS M4 芯片 安装 性能调试工具
---
# PHP 7.1 & MacOS M4 芯片 安装 性能调试工具

## 安装 [xhprof 4.1.7](https://codeload.github.com/tideways/php-xhprof-extension/tar.gz/refs/tags/v4.1.7)

```bash
# 解压扩展
tar -zxvf php-xhprof-extension-4.1.7.tar.gz
cd php-xhprof-extension-4.1.7
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/phpize
./configure --with-php-config=/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php-config
make && sudo make install
# 添加扩展
echo "
[tideways]
extension=tideways.so
tideways.auto_prepend_library=0" >> /opt/homebrew/etc/php/7.1/php.ini
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php -m | grep tideways
# 重启服务
brew services restart php@7.1
# 验证安装
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php -m | grep tideways
```


## 安装 [mongodb 1.6.1](https://release-assets.githubusercontent.com/github-production-release-asset/19514152/798e6900-179a-11ea-99d2-0c8282ee286b?sp=r&sv=2018-11-09&sr=b&spr=https&se=2025-07-15T09%3A33%3A57Z&rscd=attachment%3B+filename%3Dmongodb-1.6.1.tgz&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2025-07-15T08%3A33%3A27Z&ske=2025-07-15T09%3A33%3A57Z&sks=b&skv=2018-11-09&sig=LuagKdEURPgZg8Pj8TpyWX3KN%2F5luaVNgbPY%2BSabefQ%3D&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc1MjU2OTAzMywibmJmIjoxNzUyNTY4NzMzLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.JLW09f2xVKIKPRM7PV4p8BMeRONkFwpZfSQYrlRHxRc&response-content-disposition=attachment%3B%20filename%3Dmongodb-1.6.1.tgz&response-content-type=application%2Foctet-stream)

```bash
tar -zxvf mongodb-1.6.1.tgz
cd mongodb-1.6.1
# 修改 zutil.h 的宏定义以避免 fdopen 冲突
# 找到：#define fdopen(fd,mode) NULL
# 改成下面这样来避免冲突：
# #ifdef fdopen
# #undef fdopen
# #endif
export CFLAGS="-std=gnu89"
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/phpize
./configure --with-php-config=/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php-config
make && sudo make install
```

## 配置 nginx
```nginx
.
.
.
# 想要测试性能的网站ng追加配置
server {
    .
    .
    .
    location ~ \.php$ {
        .
        .
        .
        fastcgi_param  PHP_VALUE "auto_prepend_file=/Users/alante/code/php/starlinke/api/xhgui-branch/external/header.php";
        .
        .
        .
    }
    .
    .
    .
}

# 测试性能的网站ng配置
server {
    listen   80;
    server_name xhgui.test;

    # root directive should be global
    root   /Users/alante/code/php/starlinke/api/xhgui-branch/webroot/;
    index  index.php;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        fastcgi_pass    127.0.0.1:9009;
        fastcgi_index   index.php;
        try_files $uri =404;
        include fastcgi_params;
        fastcgi_param  ENV 'dev';
        fastcgi_param  site-env 'dev';
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
.
.
.
```

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: Alante28Jul
