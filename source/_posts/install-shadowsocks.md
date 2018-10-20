---
title: ubuntu下安装shadowsocks
date: 2018-10-20 18:41:35
tags:
- ubuntu
- shadowsocks
- install
categories:
- shadowsocks
---
> 在ubuntu下安装shadowsocks, 亲测可用
<!--more-->

## 安装
```shell
$ sudo apt-get install shadowsocks
```
## 配置
```shell
$ touch ~/sslocal/shadowsocks.json
$ vim ~/sslocal/shadowsocks.json
{
"server":"**",
"server_port":"**",
"local_port":"1080",
"password":"*",
"timeout":"600",
"method":"chacha20-ietf-poly1305"
}

```
## 启动
```shell
$ sslocal -c ~/sslocal/shadowsocks.json
```
