import{_ as n,d as s}from"./app.afab71f0.js";const e={},a=s(`<h1 id="\u4F7F\u7528\u672C\u5730-composer-\u7EC4\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u672C\u5730-composer-\u7EC4\u4EF6\u5305" aria-hidden="true">#</a> \u4F7F\u7528\u672C\u5730 composer \u7EC4\u4EF6\u5305</h1><h2 id="\u5047\u8BBE\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5047\u8BBE\u76EE\u5F55" aria-hidden="true">#</a> \u5047\u8BBE\u76EE\u5F55</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/opt/project // \u9879\u76EE\u76EE\u5F55
/opt/your_component // \u7EC4\u4EF6\u5305\u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h2><p>\u5047\u8BBE\u7EC4\u4EF6\u540D\u4E3A <code>your_component/your_component</code></p><p>\u4FEE\u6539 <code>/opt/project/composer.json</code></p><h2 id="composer-json-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#composer-json-\u914D\u7F6E" aria-hidden="true">#</a> composer.json \u914D\u7F6E</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>.
.
.
<span class="token punctuation">{</span>
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6CE8\u610F dev-master \u7684 master \u662F\u6307\u5206\u652F\u540D</span>
        <span class="token comment">// \u5982\u679C\u662F main \u7684\u8BDD \u4E0B\u8FB9\u7684\u503C\u5C31\u6539\u4E3A dev-main</span>
        <span class="token property">&quot;your_component/your_component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev-master&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;repositories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;your_component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/opt/your_component&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
.
.
.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6269\u5C55" aria-hidden="true">#</a> \u66F4\u65B0\u6269\u5C55</h2><p>\u6700\u540E\u5728\u76EE\u5F55 /opt/project \u4E2D\u6267\u884C composer update -o \u5373\u53EF</p><h2 id="\u83B7\u53D6\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E2E\u52A9" aria-hidden="true">#</a> \u83B7\u53D6\u5E2E\u52A9</h2><p>\u8054\u7CFB\u90AE\u7BB1: nilsir@qq.com<br> \u8054\u7CFB\u5FAE\u4FE1: Alante28Jul</p>`,12);function o(t,r){return a}var p=n(e,[["render",o],["__file","use-local-composer-pkg.html.vue"]]);export{p as default};
