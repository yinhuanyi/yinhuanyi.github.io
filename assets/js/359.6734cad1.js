(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{2208:function(t,s,r){"use strict";r.r(s);var e=r(9),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一-基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-基本概念"}},[t._v("#")]),t._v(" 一：基本概念")]),t._v(" "),r("h3",{attrs:{id:"一-什么是csrf攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是csrf攻击"}},[t._v("#")]),t._v(" (一)：什么是csrf攻击")]),t._v(" "),r("ul",[r("li",[t._v("csrf攻击发起的原因是后台服务器运行跨域访问")])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("\t由于后台服务器运行跨域访问，那么用户登录官方网站的时候，会下发cookie(jwt token)，然后浏览器写入到当前域名下，或者写入到当前域名的父域下\n\n\t当用户访问一个黑客网站，里面有个自动执行的Form表单，直接访问了官方的转账地址，并且携带了一系列Form参数，例如将多少钱转给谁，此时这个请求会携带cookie(jwt token)，请求官方的转账地址，cookie(jwt token)认证通过后，就把钱转账走了\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("h3",{attrs:{id:"二-如何预防csrf攻击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-如何预防csrf攻击"}},[t._v("#")]),t._v(" (二)：如何预防csrf攻击")]),t._v(" "),r("ul",[r("li",[t._v("首先需要明确的是："),r("code",[t._v("jwt token验证")]),t._v("和"),r("code",[t._v("csrf token验证")]),t._v("不是同一回事。"),r("strong",[t._v("jwt token是存储在cookie中的，csrf token需要每次刷新页面的时候，就需要变化，也就是刷新一次页面就从服务器端请求一次csrf token")])])]),t._v(" "),r("h2",{attrs:{id:"二-基于vue-gin-gorilla-csrf库实现-csrf-token认证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-基于vue-gin-gorilla-csrf库实现-csrf-token认证"}},[t._v("#")]),t._v(" 二：基于Vue + Gin + gorilla/csrf库实现 csrf token认证")]),t._v(" "),r("h3",{attrs:{id:"一-未完成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-未完成"}},[t._v("#")]),t._v(" (一)：未完成")])])}),[],!1,null,null,null);s.default=a.exports}}]);