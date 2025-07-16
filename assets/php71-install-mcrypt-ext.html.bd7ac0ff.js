import{_ as e,d as a}from"./app.afab71f0.js";const n={},s=a(`<h1 id="php-7-1-\u5B89\u88C5-mcrypt-\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#php-7-1-\u5B89\u88C5-mcrypt-\u6269\u5C55" aria-hidden="true">#</a> PHP 7.1 \u5B89\u88C5 mcrypt \u6269\u5C55</h1><h2 id="\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> \u5B89\u88C5\u6B65\u9AA4</h2><ol><li>\u4E0B\u8F7D\u6269\u5C55\u6E90\u7801\u5E76\u89E3\u538B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://pecl.php.net/get/mcrypt-1.0.1.tgz

<span class="token function">tar</span> zxvf mcrypt-1.0.1.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8FD0\u884Cphpize</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> mcrypt-1.0.1

/usr/local/Cellar/php@7.1/7.1.33_4/bin/phpize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u6307\u5B9Aphp\u914D\u7F6E</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> mcrypt-1.0.1

./configure --with-php-config<span class="token operator">=</span>/usr/local/Cellar/php@7.1/7.1.33_4/bin/php-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u7F16\u8BD1\u548C\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>\u4FEE\u6539php.ini</li></ol><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>.
.
.
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">mcrypt.so</span>&quot;</span>
.
.
.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91CD\u542F\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F\u670D\u52A1" aria-hidden="true">#</a> \u91CD\u542F\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew services restart php@7.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9A8C\u8BC1\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u6269\u5C55" aria-hidden="true">#</a> \u9A8C\u8BC1\u6269\u5C55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/Cellar/php@7.1/7.1.33_4/bin/php --ri mcrypt
<span class="token comment"># \u5982\u679C\u663E\u793A mcrypt \u7684\u6269\u5C55\u4FE1\u606F, \u90A3\u4E48\u5B89\u88C5\u6210\u529F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function i(l,d){return s}var c=e(n,[["render",i],["__file","php71-install-mcrypt-ext.html.vue"]]);export{c as default};
