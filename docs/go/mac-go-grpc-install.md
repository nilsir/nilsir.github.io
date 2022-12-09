---
lang: zh-CN
title: Mac 上安装 gRPC 开发环境
description: Mac 上安装 gRPC 开发环境
---

# Mac 上安装 gRPC 开发环境

## 安装 protoc
```bash
# 1. 下载运行程序
$ wget https://github.com/protocolbuffers/protobuf/releases/download/v3.15.7/protoc-3.15.7-osx-x86_64.zip
# 2. 解压文件
$ tar zxvf protoc-3.15.7-osx-x86_64.zip
# 3. 复制文件到环境变量下
$ cp protoc-3.15.7-osx-x86_64/bin/protoc /usr/local/bin
# 4. 修改权限
$ chmod a+x /usr/local/bin/protoc
# 5. 检查安装是否完成
$ protoc --version
# 如果输出 libprotoc 3.15.7 那么则安装成功
```
## 安装 protoc-gen-go
```bash
$ go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
```

## 安装 protoc-gen-go-grpc
```bash
$ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

## 安装 protobuf
```bash
$ go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
$ go get -u google.golang.org/grpc
```

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: xiaoshilitong
