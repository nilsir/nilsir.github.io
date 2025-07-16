import{_ as e,r as t,o as l,c as i,a as n,e as c,F as r,b as a,d}from"./app.afab71f0.js";const u={},o=n("h1",{id:"\u6211\u7684-vim-\u914D\u7F6E\u5907\u4EFD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6211\u7684-vim-\u914D\u7F6E\u5907\u4EFD","aria-hidden":"true"},"#"),a(" \u6211\u7684 Vim \u914D\u7F6E\u5907\u4EFD")],-1),v=n("h2",{id:"vim-dracula\u4E3B\u9898\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vim-dracula\u4E3B\u9898\u5B89\u88C5","aria-hidden":"true"},"#"),a(" Vim Dracula\u4E3B\u9898\u5B89\u88C5")],-1),p={href:"https://draculatheme.com/vim",target:"_blank",rel:"noopener noreferrer"},m=a("Dracula\u4E3B\u9898\u5B89\u88C5"),k=a(" \u6839\u636E\u6587\u7AE0\uFF0C\u6309\u6B65\u9AA4\u5B89\u88C5 dracula \u4E3B\u9898"),b=d(`<h2 id="vimrc-\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#vimrc-\u5185\u5BB9" aria-hidden="true">#</a> .vimrc \u5185\u5BB9</h2><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>if v:version &lt; 802
    packadd! dracula
endif
syntax enable
colorscheme dracula
set nocompatible
<span class="token key attr-name">set t_CO</span><span class="token punctuation">=</span><span class="token value attr-value">256</span>
<span class="token key attr-name">set linespace</span><span class="token punctuation">=</span><span class="token value attr-value">16</span>
set autowriteall
<span class="token key attr-name">set tabstop</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
set expandtab
<span class="token key attr-name">set softtabstop</span><span class="token punctuation">=</span><span class="token value attr-value">4</span>
<span class="token key attr-name">set shiftwidth</span><span class="token punctuation">=</span><span class="token value attr-value">4</span>
<span class="token key attr-name">set backspace</span><span class="token punctuation">=</span><span class="token value attr-value">indent,eol,start</span>
set number
set showmode
set showcmd
<span class="token key attr-name">set mouse</span><span class="token punctuation">=</span><span class="token value attr-value">a</span>
<span class="token key attr-name">set encoding</span><span class="token punctuation">=</span><span class="token value attr-value">utf-8</span>
filetype indent on
set autoindent
set cursorline
<span class="token key attr-name">set textwidth</span><span class="token punctuation">=</span><span class="token value attr-value">120</span>
set wrap
set linebreak
<span class="token key attr-name">set wrapmargin</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token key attr-name">set scrolloff</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">set sidescrolloff</span><span class="token punctuation">=</span><span class="token value attr-value">15</span>
<span class="token key attr-name">set laststatus</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
set ruler
set showmatch
set hlsearch
set incsearch
set ignorecase
set smartcase
<span class="token key attr-name">set spell spelllang</span><span class="token punctuation">=</span><span class="token value attr-value">en_us</span>
set autochdir
set noerrorbells
set visualbell
set autoread
<span class="token key attr-name">set listchars</span><span class="token punctuation">=</span><span class="token value attr-value">tab:\xBB\u25A0,trail:\u25A0</span>
set list
set wildmenu
<span class="token key attr-name">set wildmode</span><span class="token punctuation">=</span><span class="token value attr-value">longest:list,full</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E2E\u52A9" aria-hidden="true">#</a> \u83B7\u53D6\u5E2E\u52A9</h2><p>\u8054\u7CFB\u90AE\u7BB1: nilsir@qq.com<br> \u8054\u7CFB\u5FAE\u4FE1: Alante28Jul</p>`,4);function h(_,f){const s=t("ExternalLinkIcon");return l(),i(r,null,[o,v,n("p",null,[n("a",p,[m,c(s)]),k]),b],64)}var x=e(u,[["render",h],["__file","my-vim-config-backup.html.vue"]]);export{x as default};
