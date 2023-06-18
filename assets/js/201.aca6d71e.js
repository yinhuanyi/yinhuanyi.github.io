(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1443:function(e,s,a){e.exports=a.p+"assets/img/2021-03-147.56.06.cbe95e8b.png"},1444:function(e,s,a){e.exports=a.p+"assets/img/2021-03-149.25.37.4191eb42.png"},2517:function(e,s,a){"use strict";a.r(s);var n=a(9),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"一-修改vue-element-admin-github项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-修改vue-element-admin-github项目"}},[e._v("#")]),e._v(" 一：修改vue-element-admin(GitHub项目)")]),e._v(" "),n("h3",{attrs:{id:"一-这里选择v4-3-0的release版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-这里选择v4-3-0的release版本"}},[e._v("#")]),e._v(" （一）这里选择v4.3.0的Release版本")]),e._v(" "),n("ul",[n("li",[e._v("在Webstorm中打开vue-element-admin-4.3.0")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# 进入到项目\n1：cd vue-element-admin-4.3.0 \n# 下载依赖模块\n2：cnpm install\n# 启动项目\n3：npm run dev\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("ul",[n("li",[e._v("解决运行vue-element-admin项目的时候，出现"),n("code",[e._v("core-js")]),e._v("报错的问题(这个问题的解决思路是："),n("code",[e._v("找到与项目兼容性一致的依赖版本，然后按照，此时以前安装的版本就会被覆盖")]),e._v(")")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('报错内容为：Error: Cannot find module \'core-js/modules/es6.regexp.constructor\'\n\n分析：在node_modules目录下，找到core-js/modules/，发现目录下面的文件都是es开头的，没有es6开头的文件，因此会报错，是因为我们使用了一个比较新的core-js版本\n\n解决办法：在www.npmjs.com网站中，找到core-js，在core-js的github地址中发现，在core.js的3.0版本之前的最新版本是2.6.12，那么就下载这个2.6.12的版本\n\n在项目中下载依赖：cnpm i -S core-js@2.6.12\n\n安装完成之后，在package.json中的dependencies配置项中，会发现有"core-js": "^2.6.12", 此时说明core-js@2.6.12版本安装完毕\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("ul",[n("li",[e._v("此时可以看到管理后台的登录页面")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(1443),alt:"Alt text"}})]),e._v(" "),n("h3",{attrs:{id:"二-接入vue-element-admin登录api接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-接入vue-element-admin登录api接口"}},[e._v("#")]),e._v(" （二）接入vue-element-admin登录api接口")]),e._v(" "),n("ul",[n("li",[e._v("点击【Login】登录按钮，会调用两个接口，来完成用户登录的")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# 会发起一个POST请求，请求参数为{username: "admin", password: "111111"}\n# 返回数据为：{"code":20000,"data":{"token":"admin-token"}} 这里的token是一个jwt的token\n1：http://localhost:9527/dev-api/vue-element-admin/user/login\n\n\n# 会发起一个GET请求，请求参数为空，请求头会带上X-Token: admin-token，来验证用户的身份\n# 返回数据为：{"code":20000,"data":{"roles":["admin"],"introduction":"I am a super administrator","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif","name":"Super Admin"}}\n2：http://localhost:9527/dev-api/vue-element-admin/user/info?token=admin-token\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("ul",[n("li",[e._v("需要开发一个后台登录的用户接口，由于前端的项目是使用mock完成的登录，那么需要在项目的"),n("code",[e._v("vue.config.js")]),e._v("中将"),n("code",[e._v("before: require('./mock/mock-server.js')")]),e._v("这行代码注释掉即可。然后重新运行项目")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm run dev\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("那此时，再次点击登录按钮的时候，页面已经无法登陆了，返回404的状态码")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(1444),alt:"Alt text"}})]),e._v(" "),n("ul",[n("li",[e._v("如果在项目上线后，依然想看到productionSourceMap，那么可以在"),n("code",[e._v("vue.config.js")]),e._v("配置文件中，将productionSourceMap设置为"),n("code",[e._v("true")])])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("把productionSourceMap改为false。不然在最终打包的文件中会出现一些map文件，map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。\n有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。\n如果不关掉，生产环境是可以通过map文件看到源码的。\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ul",[n("li",[e._v("在src/api/user.js文件中，修改登录接口的URL")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);