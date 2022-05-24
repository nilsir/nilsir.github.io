---
lang: zh-CN
title: Mac 上 Nginx 启动失败, 无进程
description: Mac 上 Nginx 启动失败, 无进程
---

# Mac 上 Nginx 启动失败, 无进程

## 问题表现

1. 没有端口
```bash
lsof -i:80
# 没有数据
```

2. 没有进程
```bash
ps aux | grep nginx
lsof -i:80
# 没有数据
```

3. 重载报错
```bash
sudo nginx -s reload
# 显示
nginx: [error] open() "/usr/local/var/run/nginx.pid" failed (2: No such file or directory)
```

## 解决办法
```bash
# 指定配置文件启动
sudo nginx -c /usr/local/etc/nginx/nginx.conf
# 重启之后解决
sudo nginx -s reload
```
