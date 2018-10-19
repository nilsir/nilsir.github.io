---
title: ubuntu16.04安装gitlab
date: 2018-10-19 16:06:27
tags:
- ubuntu
- gitlab
- install
categories:
- gitlab
---
> 在ubuntu下安装gitlab, 亲测可用
<!--more-->
## 安装
```sh
$ su -
```
```sh
$ env | grep lc -i
```
```sh
$ sudo apt-get update
```
```sh
$ sudo apt-get install -y curl openssh-server ca-certificates
```
```sh
$ curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```
```sh
$ sudo EXTERNAL_URL="http://gitlab.example.com" apt-get install gitlab-ce`
```
## 配置
```sh
$ gitlab-rails console
```
```sh
$ u=User.where(id:1).first
```
```sh
u.password = 'YOUR_PASSWORD'
```
```sh
u.password_confirmation = 'YOUR_PASSWORD'
```
```sh
u.save!
```
```sh
exit
```
