import{_ as n,d as s}from"./app.ea40bb9c.js";const a={},e=s(`<h1 id="\u5B89\u5168\u7684\u6E05\u7406\u6240\u6709\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u7684\u6E05\u7406\u6240\u6709\u53D8\u66F4" aria-hidden="true">#</a> \u5B89\u5168\u7684\u6E05\u7406\u6240\u6709\u53D8\u66F4</h1><h2 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h2><p>\u6709\u65F6\u5019 git \u5DE5\u4F5C\u533A\u6709\u4E00\u4E9B\u53D8\u66F4, \u8FD9\u4E9B\u53D8\u66F4\u90FD\u662F\u4E34\u65F6\u7684, \u60F3\u8981\u76F4\u63A5\u4E22\u5F03\u6389\u7684\u8BDD, \u53EF\u4EE5\u4F7F\u7528\u4E00\u4E0B\u914D\u7F6E</p><h2 id="\u5728-zshrc\u4E2D\u914D\u7F6E\u5982\u4E0B\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5728-zshrc\u4E2D\u914D\u7F6E\u5982\u4E0B\u5185\u5BB9" aria-hidden="true">#</a> \u5728.zshrc\u4E2D\u914D\u7F6E\u5982\u4E0B\u5185\u5BB9</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">nah</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Are you sure you want to clear all changes in git? (yes/no): &quot;</span>
    <span class="token builtin class-name">read</span> response
    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token string">&quot;<span class="token variable">$response</span>&quot;</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Resetting changes in git...&quot;</span>
        <span class="token function">git</span> reset --hard HEAD
        <span class="token function">git</span> clean -df
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;changes cleared successfully.&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Operation aborted.&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment"># YOU (MIGHT) NEED THIS IF YOU AREN&#39;T USING ZSH</span>
<span class="token builtin class-name">alias</span> nah <span class="token operator">=</span> <span class="token string">&#39;nah&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E2E\u52A9" aria-hidden="true">#</a> \u83B7\u53D6\u5E2E\u52A9</h2><p>\u8054\u7CFB\u90AE\u7BB1: nilsir@qq.com<br> \u8054\u7CFB\u5FAE\u4FE1: xiaoshilitong</p>`,7);function i(t,c){return e}var o=n(a,[["render",i],["__file","nah.html.vue"]]);export{o as default};
