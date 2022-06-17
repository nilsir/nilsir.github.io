---
lang: zh-CN
title: PHP 7.1 使用 xdebug 调试
description: PHP 7.1 使用 xdebug 调试
---

# PHP 7.1 使用 xdebug 调试

## 安装扩展
1. 下载扩展源码并解压
```bash
pecl install https://pecl.php.net/get/xdebug-2.9.8.tgz
```
2. 修改php.ini
```ini
.
.
.
[xdebug]
zend_extension="xdebug.so"
xdebug.remote_enable=1
xdebug.remote_port=19009
xdebug.remote_host=localhost
xdebug.idekey="PHPSTORM"
.
.
.
```

## 重启服务
```bash
brew services restart php@7.1
```

## 验证扩展
```bash
/usr/local/Cellar/php@7.1/7.1.33_4/bin/php --ri xdebug
# 如果显示 xdebug 的扩展信息, 那么安装成功
```

## 配置PHPSTORM
1. PHP->DEBUG->XDEBUG 下 Debug port 增加 19009 端口
2. PHP->DEBUG->DBGp Proxy 设置:<br>
    IDE Key: PHPSTORM<br>
    Host: localhost<br>
    Port: 19009
3. 添加 server, Host 为本地待测试的域名
4. 配置 Debug 配置, 添加好了点击 Validate 验证下, 如果全部打钩那么配置正确, 如果有异常那么根据提示完成修改

## 进行调试
1. 浏览器端<br>
    安装 [xdebug-helper](https://chrome.google.com/webstore/detail/xdebug-helper/eadndfjplgieldjbigjakmdgkmoaaaoc)
2. Postman端<br>
    Header 里边增加 cookie, 值为: XDEBUG_SESSION=PHPSTORM

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: xiaoshilitong
