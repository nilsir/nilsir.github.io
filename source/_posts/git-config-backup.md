---
title: git配置备份(别名)
date: 2019-01-07 20:32:53
tags:
- git
- config
- backup
categories:
- gitconfig
---
> 备份我自己的git常用别名

<!--more-->

配置文件路径:~/.gitconfig

```shell
[user]
	name = nilsir
	email = nilsir@qq.com
[alias]
	st = status
	co = checkout
	br = branch
	unstage = reset HEAD
        last = log -1
        ci = commit
	lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```
