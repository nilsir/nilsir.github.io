import{_ as n,d as s}from"./app.789a1b42.js";const a={},t=s(`<h1 id="mac-\u4E0A-nginx-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#mac-\u4E0A-nginx-\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> Mac \u4E0A Nginx \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</h1><h2 id="\u95EE\u9898\u8868\u73B0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u8868\u73B0" aria-hidden="true">#</a> \u95EE\u9898\u8868\u73B0</h2><ol><li>\u62F7\u8D1D\u542F\u52A8\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> /usr/local/Cellar/nginx/1.21.6_1/homebrew.mxcl.nginx.plist /Library/LaunchDaemons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u67E5\u770B\u542F\u52A8\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">plist</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//Apple//DTD PLIST 1.0//EN&quot;</span> <span class="token string">&quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plist</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dict</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>Label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>homebrew.mxcl.nginx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>ProgramArguments<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>/usr/local/opt/nginx/bin/nginx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>-g<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>daemon off;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>RunAtLoad<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>true</span><span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">&gt;</span></span>WorkingDirectory<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">&gt;</span></span>/usr/local<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dict</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plist</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6B64\u65F6\u67E5\u770B\u670D\u52A1\u5217\u8868-\u53D1\u73B0nginx\u672A\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6B64\u65F6\u67E5\u770B\u670D\u52A1\u5217\u8868-\u53D1\u73B0nginx\u672A\u542F\u52A8" aria-hidden="true">#</a> \u6B64\u65F6\u67E5\u770B\u670D\u52A1\u5217\u8868, \u53D1\u73B0nginx\u672A\u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> brew services lis
<span class="token comment"># \u663E\u793A\u5185\u5BB9</span>
<span class="token comment"># Name    Status     User File</span>
<span class="token comment"># dnsmasq started    root /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist</span>
<span class="token comment"># httpd   none</span>
<span class="token comment"># nginx   error  256 root /Library/LaunchDaemons/homebrew.mxcl.nginx.plist</span>
<span class="token comment"># php     none       root</span>
<span class="token comment"># php@7.1 none       root</span>
<span class="token comment"># php@7.4 none       root</span>
<span class="token comment"># redis   none       root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91CD\u542F\u4E4B\u540E-nginx\u6B63\u5E38\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F\u4E4B\u540E-nginx\u6B63\u5E38\u5DE5\u4F5C" aria-hidden="true">#</a> \u91CD\u542F\u4E4B\u540E, nginx\u6B63\u5E38\u5DE5\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> brew services lis
<span class="token comment"># \u663E\u793A\u5185\u5BB9</span>
<span class="token comment"># Name    Status  User File</span>
<span class="token comment"># dnsmasq started root /Library/LaunchDaemons/homebrew.mxcl.dnsmasq.plist</span>
<span class="token comment"># httpd   none</span>
<span class="token comment"># nginx   started root /Library/LaunchDaemons/homebrew.mxcl.nginx.plist</span>
<span class="token comment"># php     none    root</span>
<span class="token comment"># php@7.1 none    root</span>
<span class="token comment"># php@7.4 none    root</span>
<span class="token comment"># redis   none    root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F:</h2><p>\u64CD\u4F5C <code>brew</code> \u7684\u65F6\u5019\u8981\u5E26\u4E0A <code>sudo</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> brew services stop nginx
<span class="token function">sudo</span> brew services start nginx
<span class="token function">sudo</span> brew services restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E2E\u52A9" aria-hidden="true">#</a> \u83B7\u53D6\u5E2E\u52A9</h2><p>\u8054\u7CFB\u90AE\u7BB1: nilsir@qq.com<br> \u8054\u7CFB\u5FAE\u4FE1: xiaoshilitong</p>`,17);function e(p,l){return t}var c=n(a,[["render",e],["__file","nginx-start-on-boot.html.vue"]]);export{c as default};