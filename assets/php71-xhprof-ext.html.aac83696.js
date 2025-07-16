import{_ as t,r as p,o as c,c as l,a as n,e,F as o,b as s,d as i}from"./app.afab71f0.js";const d={},r=n("h1",{id:"php-7-1-macos-m4-\u82AF\u7247-\u5B89\u88C5-\u6027\u80FD\u8C03\u8BD5\u5DE5\u5177",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php-7-1-macos-m4-\u82AF\u7247-\u5B89\u88C5-\u6027\u80FD\u8C03\u8BD5\u5DE5\u5177","aria-hidden":"true"},"#"),s(" PHP 7.1 & MacOS M4 \u82AF\u7247 \u5B89\u88C5 \u6027\u80FD\u8C03\u8BD5\u5DE5\u5177")],-1),v={id:"\u5B89\u88C5-xhprof-4-1-7",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#\u5B89\u88C5-xhprof-4-1-7","aria-hidden":"true"},"#",-1),m=s(" \u5B89\u88C5 "),b={href:"https://codeload.github.com/tideways/php-xhprof-extension/tar.gz/refs/tags/v4.1.7",target:"_blank",rel:"noopener noreferrer"},k=s("xhprof 4.1.7"),h=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u538B\u6269\u5C55</span>
<span class="token function">tar</span> -zxvf php-xhprof-extension-4.1.7.tar.gz
<span class="token builtin class-name">cd</span> php-xhprof-extension-4.1.7
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/phpize
./configure --with-php-config<span class="token operator">=</span>/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php-config
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># \u6DFB\u52A0\u6269\u5C55</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;
[tideways]
extension=tideways.so
tideways.auto_prepend_library=0&quot;</span> <span class="token operator">&gt;&gt;</span> /opt/homebrew/etc/php/7.1/php.ini
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php -m <span class="token operator">|</span> <span class="token function">grep</span> tideways
<span class="token comment"># \u91CD\u542F\u670D\u52A1</span>
brew services restart php@7.1
<span class="token comment"># \u9A8C\u8BC1\u5B89\u88C5</span>
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php -m <span class="token operator">|</span> <span class="token function">grep</span> tideways
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g={id:"\u5B89\u88C5-mongodb-1-6-1",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#\u5B89\u88C5-mongodb-1-6-1","aria-hidden":"true"},"#",-1),_=s(" \u5B89\u88C5 "),x={href:"https://release-assets.githubusercontent.com/github-production-release-asset/19514152/798e6900-179a-11ea-99d2-0c8282ee286b?sp=r&sv=2018-11-09&sr=b&spr=https&se=2025-07-15T09%3A33%3A57Z&rscd=attachment%3B+filename%3Dmongodb-1.6.1.tgz&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2025-07-15T08%3A33%3A27Z&ske=2025-07-15T09%3A33%3A57Z&sks=b&skv=2018-11-09&sig=LuagKdEURPgZg8Pj8TpyWX3KN%2F5luaVNgbPY%2BSabefQ%3D&jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc1MjU2OTAzMywibmJmIjoxNzUyNTY4NzMzLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.JLW09f2xVKIKPRM7PV4p8BMeRONkFwpZfSQYrlRHxRc&response-content-disposition=attachment%3B%20filename%3Dmongodb-1.6.1.tgz&response-content-type=application%2Foctet-stream",target:"_blank",rel:"noopener noreferrer"},w=s("mongodb 1.6.1"),y=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf mongodb-1.6.1.tgz
<span class="token builtin class-name">cd</span> mongodb-1.6.1
<span class="token comment"># \u4FEE\u6539 zutil.h \u7684\u5B8F\u5B9A\u4E49\u4EE5\u907F\u514D fdopen \u51B2\u7A81</span>
<span class="token comment"># \u627E\u5230\uFF1A#define fdopen(fd,mode) NULL</span>
<span class="token comment"># \u6539\u6210\u4E0B\u9762\u8FD9\u6837\u6765\u907F\u514D\u51B2\u7A81\uFF1A</span>
<span class="token comment"># #ifdef fdopen</span>
<span class="token comment"># #undef fdopen</span>
<span class="token comment"># #endif</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-std=gnu89&quot;</span>
/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/phpize
./configure --with-php-config<span class="token operator">=</span>/opt/homebrew/Cellar/php@7.1/7.1.33_13/bin/php-config
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E-nginx" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-nginx" aria-hidden="true">#</a> \u914D\u7F6E nginx</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>.
.
.
<span class="token comment"># \u60F3\u8981\u6D4B\u8BD5\u6027\u80FD\u7684\u7F51\u7AD9ng\u8FFD\u52A0\u914D\u7F6E</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    .
    .
    .
    <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
        .
        .
        .
        <span class="token directive"><span class="token keyword">fastcgi_param</span>  PHP_VALUE <span class="token string">&quot;auto_prepend_file=/Users/alante/code/php/starlinke/api/xhgui-branch/external/header.php&quot;</span></span><span class="token punctuation">;</span>
        .
        .
        .
    <span class="token punctuation">}</span>
    .
    .
    .
<span class="token punctuation">}</span>

<span class="token comment"># \u6D4B\u8BD5\u6027\u80FD\u7684\u7F51\u7AD9ng\u914D\u7F6E</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> xhgui.test</span><span class="token punctuation">;</span>

    <span class="token comment"># root directive should be global</span>
    <span class="token directive"><span class="token keyword">root</span>   /Users/alante/code/php/starlinke/api/xhgui-branch/webroot/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>  index.php</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.php?<span class="token variable">$args</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">fastcgi_pass</span>    127.0.0.1:9009</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_index</span>   index.php</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> =404</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">include</span> fastcgi_params</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_param</span>  ENV <span class="token string">&#39;dev&#39;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_param</span>  site-env <span class="token string">&#39;dev&#39;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_param</span> SCRIPT_FILENAME <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
.
.
.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E2E\u52A9" aria-hidden="true">#</a> \u83B7\u53D6\u5E2E\u52A9</h2><p>\u8054\u7CFB\u90AE\u7BB1: nilsir@qq.com<br> \u8054\u7CFB\u5FAE\u4FE1: Alante28Jul</p>`,5);function I(V,z){const a=p("ExternalLinkIcon");return c(),l(o,null,[r,n("h2",v,[u,m,n("a",b,[k,e(a)])]),h,n("h2",g,[f,_,n("a",x,[w,e(a)])]),y],64)}var C=t(d,[["render",I],["__file","php71-xhprof-ext.html.vue"]]);export{C as default};
