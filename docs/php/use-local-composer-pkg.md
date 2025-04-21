---
lang: zh-CN
title: 使用本地 composer 组件包
description: 使用本地 composer 组件包
---
# 使用本地 composer 组件包

## 假设目录
```
/opt/project // 项目目录
/opt/your_component // 组件包目录
```

## 说明

假设组件名为 `your_component/your_component`

修改 `/opt/project/composer.json`

## composer.json 配置
```json
.
.
.
{
    "require": {
        // 注意 dev-master 的 master 是指分支名
        // 如果是 main 的话 下边的值就改为 dev-main
        "your_component/your_component": "dev-master"
    },
    "repositories": {
        "your_component": {
            "type": "path",
            "url": "/opt/your_component"
        }
    }
}
.
.
.
```

## 更新扩展

最后在目录 /opt/project 中执行 composer update -o 即可

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: Alante28Jul
