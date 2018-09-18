---
title: macOS下安装pecl
date: 2018-09-18 09:47:36
tags:
- macos
- install
- php
- pecl
categories:
- pecl
---
# macOS下安装pecl
## 简介
> PECL(The PHP Extension Community Library)是PHP扩展的存储库,为PHP所有的扩展提供提供托管和下载服务. 通过PEAR(PHP Extension and Application Repository)的Package Manager的安装管理方式,可以对 PECL 扩展进行下载和安装
<!--more-->
## 安装
官方提供了PEAR在各个平台的安装方式,直接看官方文档的请进[传送门](http://pear.php.net/manual/en/installation.getting.php), macOS平台官方安装翻译如下
1. 下载PEAR
```shell
$ curl -O https://pear.php.net/go-pear.phar # 使用 curl 命令下载即可
```
2. 安装PEAR
```shell
$ sudo php -d detect_unicode=0 go-pear.phar # 使用 sudo 授权进行安装
```
3. 安装过程需要进行简单的配置，如下：
```shell
Below is a suggested file layout for your new PEAR installation.  To
change individual locations, type the number in front of the
directory.  Type 'all' to change all of them or simply press Enter to
accept these locations.

 1. Installation base ($prefix)                   : /usr
 2. Temporary directory for processing            : /tmp/pear/install
 3. Temporary directory for downloads             : /tmp/pear/install
 4. Binaries directory                            : /usr/bin
 5. PHP code directory ($php_dir)                 : /usr/share/pear
 6. Documentation directory                       : /usr/docs
 7. Data directory                                : /usr/data
 8. User-modifiable configuration files directory : /usr/cfg
 9. Public Web Files directory                    : /usr/www
10. System manual pages directory                 : /usr/man
11. Tests directory                               : /usr/tests
12. Name of configuration file                    : /private/etc/pear.conf

1-12, 'all' or Enter to continue: 1

# 输入 1, 将安装根目录修改为 /usr/local/pear
# 输入 4, 将命令安装到 /usr/local/bin
```
4. 检测是否安装成功
```shell
$ pear version
PEAR Version: 1.10.5
PHP Version: 7.1.7
Zend Engine Version: 3.1.0
# 如果正常显示上边的信息, 那么就说明安装成功了
```
5. 通过pecl安装一个php扩展
```shell
$ pecl install swoole #安装swoole扩展
.
.
.
# 安装完成之后, 查看php模块是否已经有该扩展
$ php -m | grep swoole
swoole # 如果出现结果, 那么说明该扩展安装成功
```
## 参考
[PECL官方地址](http://pecl.php.net)
[PEAR官方地址](http://pear.php.net)
