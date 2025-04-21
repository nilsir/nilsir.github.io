---
lang: zh-CN
title: Mac 上 Nginx 设置开机自启动
description: Mac 上 Nginx 设置开机自启动
---

# Mac 上 Nginx 设置开机自启动

## 问题表现

1. 拷贝启动配置文件
```bash
sudo cp /usr/local/Cellar/nginx/1.21.6_1/homebrew.mxcl.nginx.plist /Library/LaunchDaemons
```

2. 设置开机启动
```bash
sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
```

3. 查看启动配置文件内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>homebrew.mxcl.nginx</string>
	<key>ProgramArguments</key>
	<array>
		<string>/usr/local/opt/nginx/bin/nginx</string>
		<string>-g</string>
		<string>daemon off;</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
	<key>WorkingDirectory</key>
	<string>/usr/local</string>
</dict>
</plist>
```

## 此时查看服务列表, 发现nginx未启动
```bash
sudo brew services lis
# 显示内容
# Name    Status     User File
# dnsmasq started    root /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
# httpd   none
# nginx   error  256 root /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
# php     none       root
# php@7.1 none       root
# php@7.4 none       root
# redis   none       root
```

## 重启之后, nginx正常工作
```bash
sudo brew services lis
# 显示内容
# Name    Status  User File
# dnsmasq started root /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist
# httpd   none
# nginx   started root /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
# php     none    root
# php@7.1 none    root
# php@7.4 none    root
# redis   none    root
```

## 注意:
操作 `brew` 的时候要带上 `sudo`
```bash
sudo brew services stop nginx
sudo brew services start nginx
sudo brew services restart nginx
```

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: Alante28Jul
