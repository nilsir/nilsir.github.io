import{_ as n,d as s}from"./app.afab71f0.js";const a={},e=s(`<h1 id="\u5B89\u88C5swoole\u6269\u5C55\u5E76\u542F\u7528\u6240\u6709\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5swoole\u6269\u5C55\u5E76\u542F\u7528\u6240\u6709\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5Swoole\u6269\u5C55\u5E76\u542F\u7528\u6240\u6709\u63D2\u4EF6</h1><h2 id="\u4F7F\u7528pecl\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528pecl\u5B89\u88C5" aria-hidden="true">#</a> \u4F7F\u7528pecl\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pecl <span class="token function">install</span> swoole
<span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
<span class="token builtin class-name">enable</span> sockets supports? <span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token builtin class-name">:</span> <span class="token function">yes</span>
<span class="token builtin class-name">enable</span> openssl support? <span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token builtin class-name">:</span> <span class="token function">yes</span> --with-openssl-dir<span class="token operator">=</span>/usr/local/opt/openssl@1.1
<span class="token builtin class-name">enable</span> http2 support? <span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token builtin class-name">:</span> <span class="token function">yes</span>
<span class="token builtin class-name">enable</span> mysqlnd support? <span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token builtin class-name">:</span> <span class="token function">yes</span>
<span class="token builtin class-name">enable</span> json support? <span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token builtin class-name">:</span> <span class="token function">yes</span>
<span class="token builtin class-name">enable</span> <span class="token function">curl</span> support? <span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token builtin class-name">:</span> <span class="token function">yes</span>
<span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
<span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539php-ini\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539php-ini\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539php.ini\u6587\u4EF6</h2><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>.
.
.
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">swoole</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">swoole.so</span>&quot;</span>
<span class="token key attr-name">swoole.use_shortname</span> <span class="token punctuation">=</span> <span class="token value attr-value">off</span>
.
.
.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E2E\u52A9" aria-hidden="true">#</a> \u83B7\u53D6\u5E2E\u52A9</h2><p>\u8054\u7CFB\u90AE\u7BB1: nilsir@qq.com<br> \u8054\u7CFB\u5FAE\u4FE1: Alante28Jul</p>`,7);function l(i,t){return e}var p=n(a,[["render",l],["__file","install-swoole-ext.html.vue"]]);export{p as default};
