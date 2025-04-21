---
lang: zh-CN
title: 安全的清理所有变更
description: 安全的清理所有变更
---

# 安全的清理所有变更

## 问题描述
有时候 git 工作区有一些变更, 这些变更都是临时的, 想要直接丢弃掉的话, 可以使用一下配置

## 在.zshrc中配置如下内容
```bash
function nah {
    echo -n "Are you sure you want to clear all changes in git? (yes/no): "
    read response
    if ["$response"="yes" ]; then
        echo "Resetting changes in git..."
        git reset --hard HEAD
        git clean -df
        echo "changes cleared successfully."
    else
        echo "Operation aborted."
    fi
}

# YOU (MIGHT) NEED THIS IF YOU AREN'T USING ZSH
alias nah = 'nah';
```

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: Alante28Jul
