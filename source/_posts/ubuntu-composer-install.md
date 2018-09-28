---
title: ubuntu下composer安装
date: 2018-09-28 17:46:44
tags:
- composer
- install
- ubuntu
categories:
- composer
---
## 下载
```shell
$ sudo curl -sS https://getcomposer.org/installer | php
```

<!--more-->
## 移动
```shell
$ sudo mv composer.phar /usr/local/bin/composer
```
## 修改权限
```shell
$ sudo chmod +x /usr/local/bin/composer
```

## 检测安装
```shell
composer --version
# Composer version 1.7.2 2018-08-16 16:57:12
# 如果出现版本信息, 那么证明安装成功
```
