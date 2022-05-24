---
lang: zh-CN
title: Php 7.1 安装 mcrypt 扩展
description: Php 7.1 安装 mcrypt 扩展
---

# Php 7.1 安装 mcrypt 扩展

## 安装步骤
1. 下载扩展源码并解压
```bash
wget https://pecl.php.net/get/mcrypt-1.0.1.tgz

tar zxvf mcrypt-1.0.1.tgz
```
2. 运行phpize
```bash
cd mcrypt-1.0.1

/usr/local/Cellar/php@7.1/7.1.33_4/bin/phpize
```
3. 指定php配置
```bash
cd mcrypt-1.0.1

./configure --with-php-config=/usr/local/Cellar/php@7.1/7.1.33_4/bin/php-config
```
4. 编译和安装
```bash
make && make install
```
5. 修改php.ini
```ini
.
.
.
extension="mcrypt.so"
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
/usr/local/Cellar/php@7.1/7.1.33_4/bin/php --ri mcrypt
# 如果显示 mcrypt 的扩展信息, 那么安装成功
```
