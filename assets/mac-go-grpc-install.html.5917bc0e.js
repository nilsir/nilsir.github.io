import{_ as n,d as a}from"./app.ea40bb9c.js";const e={},s=a(`<h1 id="mac-\u4E0A\u5B89\u88C5-grpc-\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#mac-\u4E0A\u5B89\u88C5-grpc-\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> Mac \u4E0A\u5B89\u88C5 gRPC \u5F00\u53D1\u73AF\u5883</h1><h2 id="\u5B89\u88C5-protoc" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-protoc" aria-hidden="true">#</a> \u5B89\u88C5 protoc</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u4E0B\u8F7D\u8FD0\u884C\u7A0B\u5E8F</span>
$ <span class="token function">wget</span> https://github.com/protocolbuffers/protobuf/releases/download/v3.15.7/protoc-3.15.7-osx-x86_64.zip
<span class="token comment"># 2. \u89E3\u538B\u6587\u4EF6</span>
$ <span class="token function">tar</span> zxvf protoc-3.15.7-osx-x86_64.zip
<span class="token comment"># 3. \u590D\u5236\u6587\u4EF6\u5230\u73AF\u5883\u53D8\u91CF\u4E0B</span>
$ <span class="token function">cp</span> protoc-3.15.7-osx-x86_64/bin/protoc /usr/local/bin
<span class="token comment"># 4. \u4FEE\u6539\u6743\u9650</span>
$ <span class="token function">chmod</span> a+x /usr/local/bin/protoc
<span class="token comment"># 5. \u68C0\u67E5\u5B89\u88C5\u662F\u5426\u5B8C\u6210</span>
$ protoc --version
<span class="token comment"># \u5982\u679C\u8F93\u51FA libprotoc 3.15.7 \u90A3\u4E48\u5219\u5B89\u88C5\u6210\u529F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5-protoc-gen-go" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-protoc-gen-go" aria-hidden="true">#</a> \u5B89\u88C5 protoc-gen-go</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go <span class="token function">install</span> google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5-protoc-gen-go-grpc" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-protoc-gen-go-grpc" aria-hidden="true">#</a> \u5B89\u88C5 protoc-gen-go-grpc</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go <span class="token function">install</span> google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5-protobuf" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-protobuf" aria-hidden="true">#</a> \u5B89\u88C5 protobuf</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ go get -u github.com/golang/protobuf/<span class="token punctuation">{</span>proto,protoc-gen-go<span class="token punctuation">}</span>
$ go get -u google.golang.org/grpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E2E\u52A9" aria-hidden="true">#</a> \u83B7\u53D6\u5E2E\u52A9</h2><p>\u8054\u7CFB\u90AE\u7BB1: nilsir@qq.com<br> \u8054\u7CFB\u5FAE\u4FE1: xiaoshilitong</p>`,11);function o(i,c){return s}var d=n(e,[["render",o],["__file","mac-go-grpc-install.html.vue"]]);export{d as default};
