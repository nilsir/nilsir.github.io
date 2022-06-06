---
lang: zh-CN
title: MySQL binlog 日志转 sql 文件
description: MySQL binlog 日志转 sql 文件
---

# MySQL binlog 日志转 sql 文件

## 安装命令
1. 检查命令
```bash
# mysqlbinlog 一般是绑定到 mysql-client 里边的
mysqlbinlog --help # 如果有信息, 那么则可以进行下一步
```

## 转存文件
2. 执行命令
```bash
mysqlbinlog --base64-output=decode-rows -v mysql-bin-changelog.167292 > /Users/nilsir/Downloads/mysql-bin-changelog.167292.sql
```
