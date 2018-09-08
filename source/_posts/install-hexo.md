---
title: hexo从部署到自动发布
date: 2018-09-08 16:37:15
tags:
- hexo
- git
- npm
- github
- travis-ci
- ci
categories:
- hexo
---
# hexo从部署到自动发布
> 很多时候我们想写一篇文章, 但是都止步在了环境部署上, 以致于写作的兴趣荡然无存, 使用hexo之后, 就可以随心所欲的写文章
<!--more-->
## 系统安装
1. 安装依赖
`Node.js`, `Git`
2. 安装hexo
```shell
$ npm install -g hexo-cli
```
3. 创建项目
```shell
$ hexo init <folder> #初始化项目
$ cd <folder> #切到项目目录
$ npm install #安装项目依赖
```
## 系统配置
```shell
.
├── _config.yml #系统配置文件
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```
[如何配置](https://hexo.io/zh-cn/docs/configuration)

## 启动服务
> 配置完成之后, 就可以启动服务(也可以先启动服务, 然后边查看效果, 边修改配置)
```shell
$ hexo server #启动服务器。默认情况下，访问网址为： http://localhost:4000/
```
[常用命令](https://hexo.io/zh-cn/docs/commands)
## 主题安装
### 安装nexT主题
```shell
$ cd hexo #切换到hexo 项目根目录
$ mkdir themes/next #创建next主题目录
$ curl -s https://api.github.com/repos/iissnan/hexo-theme-next/releases/latest | grep tarball_url | cut -d '"' -f 4 | wget -i - -O- | tar -zx -C themes/next --strip-components=1 #下载主题
```
## 主题配置
> 同配置系统
## 部署到githu
1. 用git进行版本控制
2. 推送到github
3. 创建测试配置文件
4. 配置token
5. 配置travis-ci
6. 推送代码到github进行ci测试
[参考地址](https://github.com/nilsir/nilsir.github.io)
