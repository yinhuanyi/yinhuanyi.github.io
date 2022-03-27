(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{2162:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-常见的单点登录方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-常见的单点登录方法"}},[s._v("#")]),s._v(" 一：常见的单点登录方法")]),s._v(" "),e("h3",{attrs:{id:"一-session共享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-session共享"}},[s._v("#")]),s._v(" (一) Session共享")]),s._v(" "),e("ul",[e("li",[s._v("如下图所示，在任何一个系统完成了用户的登录，session将会被存储都公共的Redis中，当用户登录另外一个系统时，可以基于Redis中的session验证用户的身份")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(630),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("这种情况需要解决一个问题，cookie无法跨域的问题，那么解决方法有两种")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("第一种方法：\n\t后台设置cookie时，将cookie的domain设置为二级域名。例如A系统的域名为www.abc.com，B系统的域名为bbs.abc.com，默认情况下cookie的domain为当前域名，那么用户访问A系统，只会携带www.abc.com域名下的cookie，用户访问B系统，只会携带bbs.abc.com下的cookie\n\t那么这种情况下，设置cookie的domain为abc.com(二级域名)，那么用户访问A系统会携带www.abc.com域名下的cookie和bbs.abc.com下的cookie\n\n第二种方法：\n\t如果A系统域名为www.abc.com，B系统的域名为www.def.com，这种情况下系统不是相同的二级域名，因此需要设置一个NGINX反向代理，让用户请求同一个www.kkk.com域名，然后根据uri路径匹配，将请求转发到对应的系统。例如 www.kkk.com/a请求，会转发给A系统，www.kkk.com/b请求，会转发给B系统\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"二-sso系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-sso系统"}},[s._v("#")]),s._v(" (二) SSO系统")]),s._v(" "),e("ul",[e("li",[s._v("SSO系统是"),e("code",[s._v("一个鉴权系统")]),s._v("，可以作为分布式系统中的认证中心。用户登录任何子系统，都需要携带Token，如果没有Token或者Token过期，那么需要去SSO系统认证，认证通过下发Token，用户带着Token再次登录子系统，子系统校验Token，或者转发到SSO验证Token，如果验证通过，就可以访问子系统资源。一个适合生产环境使用的SSO系统具备下面几个功能")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(631),alt:"Alt text"}})]),s._v(" "),e("h3",{attrs:{id:"三-sso系统-登录、登出、登录态校验时序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-sso系统-登录、登出、登录态校验时序"}},[s._v("#")]),s._v(" (三) SSO系统：登录、登出、登录态校验时序")]),s._v(" "),e("ul",[e("li",[s._v("登录流程逻辑图")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(632),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("前后端分离项目中，登录流程图 (SSO单点登录系统细节图)")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(633),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("验证流程逻辑图")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(634),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("登出流程逻辑图")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(635),alt:"Alt text"}})]),s._v(" "),e("h2",{attrs:{id:"二-go-oauth2-oauth2库-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-go-oauth2-oauth2库-介绍"}},[s._v("#")]),s._v(" 二：go-oauth2/oauth2库 介绍")]),s._v(" "),e("h3",{attrs:{id:"一-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-介绍"}},[s._v("#")]),s._v(" (一) 介绍")]),s._v(" "),e("ul",[e("li",[s._v("go-oauth2/oauth2库实现了OAuth2.0规定了四种授权方式：授权码、隐藏式、密码式、客户端凭证。在SSO单点登录系统中，常用授权码模式设计单点登录模型")])]),s._v(" "),e("h3",{attrs:{id:"二-授权码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-授权码模式"}},[s._v("#")]),s._v(" (二) 授权码模式")]),s._v(" "),e("ul",[e("li",[s._v("授权码模式的Protocal Flow如下：当用户登录SSO系统，用户授权后，SSO系统会给Client端颁发授权码，Client获取到授权码后，直接基于授权码向SSO系统获取Token，然后返回给浏览器端")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("     +--------+                               +---------------+\n     |        |--(A)- Authorization Request ->|   Resource    |\n     |        |                               |     Owner     |\n     |        |<-(B)-- Authorization Grant ---|               |\n     |        |                               +---------------+\n     |        |\n     |        |                               +---------------+\n     |        |--(C)-- Authorization Grant --\x3e| Authorization |\n     | Client |                               |     Server    |\n     |        |<-(D)----- Access Token -------|               |\n     |        |                               +---------------+\n     |        |\n     |        |                               +---------------+\n     |        |--(E)----- Access Token ------\x3e|    Resource   |\n     |        |                               |     Server    |\n     |        |<-(F)--- Protected Resource ---|               |\n     +--------+                               +---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h3",{attrs:{id:"三-go-oauth2-oauth2-example源码分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-go-oauth2-oauth2-example源码分析"}},[s._v("#")]),s._v(" (三) go-oauth2/oauth2/example源码分析")]),s._v(" "),e("ul",[e("li",[s._v("在go-oauth2/oauth2/example目录下，包括client端和server端的实现，"),e("strong",[s._v("server端提供了用户登录页面，但是在企业商用项目中登录页面会由前端提供，因此实际使用过程中需要对源码进行改造")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("├── client\n│   └── main.go\n├── server\n│   ├── README.md\n│   ├── server.go\n│   └── static\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("整个SSO登录逻辑，获取Token的流程如下")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('请求流程如下：\n\n1：用户请求client端，client判断请求没有token，client将请求重定向到服务器端的：http://localhost:9096/oauth/authorize接口\n\n2：服务器端的/oauth/authorize接口处理函数中，调用srv.HandleAuthorizeRequest(w, r)，就是调用userAuthorizeHandler函数\n\n3：在userAuthorizeHandler函数中，将客户端请求的form写入到session中，{"ReturnUri": form} ，并且重定向到/login接口，调用loginHandler函数\n\t\tform的内容如下：\n\t\tclient_id=222222&\n\t\tcode_challenge=Qn3Kywp0OiU4NK_AFzGPlmrcYJDJ13Abj_jdL08Ahg8%3D&\n\t\tcode_challenge_method=S256&\n\t\tredirect_uri=http://localhost:10001/cb\n\t\tresponse_type=code&\n\t\tscope=all&\n\t\tstate=xyz\n\n4：在loginHandler函数中，判断是GET方法，直接渲染login.html登录页面 (这个过程直接返回数据吧，放在Vue中来做)\n\n5：当用户在登录页面点击登录后，再次调用loginHandler函数中，判断是POST方法，将 {"LoggedInUserID":"username"}，然后重定向到/auth接口，调用authHandler函数\n\n5：在authHandler函数中判断，如果session中LoggedInUserID存在，直接返回auth.html授权页面。如果session中LoggedInUserID不存在，重新跳转到login接口\n\n6：在auth.html授权页面中，用户完成用户授权。这里是Oauth2.0的第一步。此时Resource Owner是用户自己，当用户点击allow，会以POST方法，请求/oauth/authorize接口\n\n\n7：会再次调用/oauth/authorize接口处理函数，从session中，取出 ReturnUri的form对象，然后删除session中的ReturnUri这个key。调用srv.HandleAuthorizeRequest(w, r)，就是调用userAuthorizeHandler函数\n\n8：在userAuthorizeHandler函数中，从session中获取LoggedInUserID对应的username值，作为uid。删除session中的LoggedInUserID，然后服务器端 请求会到地址：http://localhost:9094/oauth2\n\n     +--------+                               +---------------+\n     |        |--(A)- Authorization Request ->|   Resource    |\n     |        |                               |     Owner     |\n     |Client  |<-(B)-- Authorization Grant ---|               |\n     |        |                               +---------------+\n     ----------\t\n\n这里完成了获取授权码code (这里是对用户屏蔽的)\n\n\n1：客户端响应/oauth2接口的请求，验证state，获取code授权码，然后向服务器端发起请求 /oauth/token (token, err := config.Exchange(context.Background(), code, oauth2.SetAuthURLParam("code_verifier", "s256example")))\n\n2：服务器端响应/oauth/token请求， 调用srv.HandleTokenRequest(w, r)，返回access_token和refresh_token给客户端\n\n3：客户端获取到token，返回给用户\n\n这里完成了获取token\n\t +--------+\n     |        |                               +---------------+\n     |        |--(C)-- Authorization Grant --\x3e| Authorization |\n     | Client |                               |     Server    |\n     |        |<-(D)----- Access Token -------|               |\n     |        |                               +---------------+\n\t +--------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports},630:function(s,n,a){s.exports=a.p+"assets/img/2021-11-095.04.44.6e6271a9.png"},631:function(s,n,a){s.exports=a.p+"assets/img/2021-11-096.38.12.192f76ed.png"},632:function(s,n,a){s.exports=a.p+"assets/img/v2-a384d0c3f621d86ce62150226a05c8cc_r.abb85dbe.jpeg"},633:function(s,n,a){s.exports=a.p+"assets/img/1643963111778.41c1f6b4.png"},634:function(s,n,a){s.exports=a.p+"assets/img/v2-e6772b5a1a73910efbe5c77704fccee3_r.8f460b57.jpeg"},635:function(s,n,a){s.exports=a.p+"assets/img/v2-fe1d3127be77de05eaf6c637ecf41059_720w.fc4d0ff1.jpeg"}}]);