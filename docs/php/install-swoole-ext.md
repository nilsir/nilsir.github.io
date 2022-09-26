---
lang: zh-CN
title: 安装Swoole扩展并启用所有插件
description: 安装Swoole扩展并启用所有插件
---
# 安装Swoole扩展并启用所有插件

## 使用pecl安装

```bash
sudo pecl install swoole
.
.
.
enable sockets supports? [no] : yes
enable openssl support? [no] : yes --with-openssl-dir=/usr/local/opt/openssl@1.1
enable http2 support? [no] : yes
enable mysqlnd support? [no] : yes
enable json support? [no] : yes
enable curl support? [no] : yes
.
.
.
```

## 修改php.ini文件
```ini
.
.
.
[swoole]
extension="swoole.so"
swoole.use_shortname = off
.
.
.
```

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: xiaoshilitong
