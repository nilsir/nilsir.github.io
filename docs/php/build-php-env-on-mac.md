---
lang: zh-CN
title: PHP环境搭建(MAC版)
description: PHP环境搭建(MAC版)
---
# PHP环境搭建(MAC版)

## 搭建前必看
1. 仔细阅读文档

2. 按照文档步骤依次来执行<br>
按照文档步骤依次来执行<br>
按照文档步骤依次来执行

3. 禁止 brew 自动更新, 在你的 .profile 文件, 或者 .zshrc 文件中追加如下内容:
```text
export HOMEBREW_AUTO_UPDATING=0
export HOMEBREW_NO_AUTO_UPDATE=1
export HOMEBREW_NO_INSTALL_CLEANUP=1
```

4. 拉取代码的时候一定要注意, web 的目录会重命名为 pc

5. 遇到问题仔细对照文档, 超过半个小时没法解决再问

## 搭建步骤

### 一、拉取代码
1. 配置代码目录 `md ~/code/www`

2. 拉取 admin 代码 `git clone http://code.starlinke.cn/galaxyme/admin.git`

3. 拉取 api 代码 `git clone http://code.starlinke.cn/galaxyme/api.git`

4. 拉取 pc 代码 `git clone http://code.starlinke.cn/galaxyme/web.git pc`

### 二、安装php
1. 安装 php `brew install shivammathur/php/php@7.1`

2. 设置软连接 `brew unlink php@7.1 && brew link --force php@7.1`

3. 重启终端

4. 确认版本 `php -v` 是不是显示7.1

5. 重启php `brew services restart php@7.1`

### 三、 nginx安装并配置
1. 安装 nginx `brew install nginx`

2. 配置starverse.conf `vim /usr/local/etc/nginx/servers/starverse.conf`
```nginx
server {
    listen 80;
    server_name ~^.*\.(.*)-(?<site>.+)\.com\.(?<branch>.+)\.fpm.testsdlk\.test$;
    # 需要改为自己的目录
    root /Users/nilsir/code/starlink/galaxy/$site/htdocs;

    location / {
        index index.php;
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        # 需要改为自己php-fpm的端口
        fastcgi_pass 127.0.0.1:9009;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_param ENV 'dev';
        fastcgi_param site-env 'dev';
    }

    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|css|woff2)$ {
        # 需要改为自己的目录
        root /Users/nilsir/code/starlink/galaxy/$site/htdocs;
    }

    location ~ .*(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)$ {
        deny all;
    }

    location ^~ /runtime/log/ {
        deny all;
    }

    # 需要改为自己的目录, 并创建文件
    access_log /Users/nilsir/data/wwwlogs/nginx/starverse_access.log;
    error_log /Users/nilsir/data/wwwlogs/nginx/starverse_error.log;
}
```

3. 重启nginx `brew services restart nginx`

### 四、 dnsmasq安装
1. `brew install dnsmasq`

2. /usr/local/etc/dnsmasq.conf 中解开 conf-dir=/usr/local/etc/dnsmasq.d/,*.conf 的注释

3. 在 /usr/local/etc/dnsmasq.d 目录下增加 starlinke.conf 文件, 写入内容:
```text
address=/.test/127.0.0.1
listen-address=127.0.0.1
```
4. 配置 /etc/resolver/test 文件内容:
```text
#注意: 如果没有该文件, 就先创建目录 sudo mkdir -p /etc/resolver, 再创建一个文件 sudo touch /etc/resolver/test
nameserver 127.0.0.1
```

5. 重启 dnsmasq `sudo brew services restart  dnsmasq`

### 五、 域名访问
参考域名: [Starverse/V(语言|域名|支付)](https://wiki.rd.starlinke.cn/pages/viewpage.action?pageId=6790273)<br>
分支可以使用 release 分支<br>
本地域名以 .test 结尾, 例如: http://admin.vivaiacollection-admin.com.release.fpm.testsdlk.test<br>

注意: 本地域名上的分支只做访问使用, 代码不会根据域名上的分支切换, 访问的还是本地代码, 如果需要切换分支, 可以本地切换<br>


## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: Alante28Jul
