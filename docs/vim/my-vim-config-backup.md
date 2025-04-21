---
lang: zh-CN
title: 我的 Vim 配置备份
description: 我的 Vim 配置备份
---

# 我的 Vim 配置备份

## Vim Dracula主题安装
[Dracula主题安装](https://draculatheme.com/vim)
根据文章，按步骤安装 dracula 主题

## .vimrc 内容
```ini
if v:version < 802
    packadd! dracula
endif
syntax enable
colorscheme dracula
set nocompatible
set t_CO=256
set linespace=16
set autowriteall
set tabstop=8
set expandtab
set softtabstop=4
set shiftwidth=4
set backspace=indent,eol,start
set number
set showmode
set showcmd
set mouse=a
set encoding=utf-8
filetype indent on
set autoindent
set cursorline
set textwidth=120
set wrap
set linebreak
set wrapmargin=2
set scrolloff=5
set sidescrolloff=15
set laststatus=2
set ruler
set showmatch
set hlsearch
set incsearch
set ignorecase
set smartcase
set spell spelllang=en_us
set autochdir
set noerrorbells
set visualbell
set autoread
set listchars=tab:»■,trail:■
set list
set wildmenu
set wildmode=longest:list,full

```

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: Alante28Jul
