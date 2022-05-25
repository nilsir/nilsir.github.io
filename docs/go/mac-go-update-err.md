---
lang: zh-CN
title: Mac 上更新 Go 版本
description: Mac 上更新 Go 版本
---

# Mac 上更新 Go 版本

## 问题表现
1. 从官网下载 dmg 包, 安装完成

2. 运行 `go version` 显示 `go version go1.5.3 darwin/amd64`

## 解决办法
1. 找到老版本的 go 的 $GOROOT 目录

2. rm -rf $GOROOT

3. 重新运行 `go version` 即可得到新的版本响应 `go version go1.18.2 darwin/amd64`
