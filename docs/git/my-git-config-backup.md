---
lang: zh-CN
title: 我的 git 配置备份
description: 我的 git 配置备份
---

# 我的 git 配置备份

## 推荐 git 学习地址
[Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)
熟读3遍以上, 并且要进行操作, 形成肌肉记忆

## .gitconfig 内容
```ini
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
    pl = pull --rebase

[filter "lfs"]
    clean = git-lfs clean -- %f
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
    required = true
[core]
    editor = vim
	excludesfile = /Users/nilsir/.gitignore_global
[difftool "sourcetree"]
	cmd = opendiff \"$LOCAL\" \"$REMOTE\"
	path =
[mergetool "sourcetree"]
	cmd = /Applications/Sourcetree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
	trustExitCode = true
[commit]
	template = /Users/nilsir/.stCommitMsg

[credential]
    helper = store

[init]
    defaultBranch = master

```
