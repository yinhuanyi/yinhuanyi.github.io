(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{2082:function(s,a,t){s.exports=t.p+"assets/img/2020-11-0912.39.28.e9628ac7.png"},2083:function(s,a,t){s.exports=t.p+"assets/img/2020-11-091.05.25.bc7c753c.png"},2084:function(s,a,t){s.exports=t.p+"assets/img/2020-11-091.16.31.80107a23.png"},2085:function(s,a,t){s.exports=t.p+"assets/img/2020-11-091.19.24.be69d416.png"},2086:function(s,a,t){s.exports=t.p+"assets/img/2020-11-091.47.09.4813b36c.png"},2770:function(s,a,t){"use strict";t.r(a);var n=t(9),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一-icmp-ping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-icmp-ping"}},[s._v("#")]),s._v(" 一：ICMP ping")]),s._v(" "),n("h3",{attrs:{id:"一-ip协议的助手-icmp-协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-ip协议的助手-icmp-协议"}},[s._v("#")]),s._v(" "),n("strong",[n("code",[s._v("（一）IP协议的助手 —— ICMP 协议")])])]),s._v(" "),n("ul",[n("li",[s._v("ICMP 是什么？")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ping 是基于 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 协议工作的，所以要明白 ping 的工作，首先我们先来熟悉 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 协议。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 全称是 Internet Control Message Protocol，也就是互联网控制报文协议。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 网络包在复杂的网络传输环境里，常常会遇到各种问题。当遇到问题的时候，总不能死个不明不白，没头没脑的作风不是计算机网络的风格。所以需要传出消息，报告遇到了什么问题，这样才可以调整传输策略，以此来控制整个局面。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("ICMP 功能都有啥？")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 主要的功能包括：确认 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 包是否成功送达目标地址、报告发送过程中 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 包被废弃的原因和改善网络设置等\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：在 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 通信中如果某个 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 包因为某种原因未能达到目标地址，那么这个具体的原因将由 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 负责通知。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:t(2082),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 如上图例子，主机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" 向主机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),s._v(" 发送了数据包，由于某种原因，途中的路由器 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 未能发现主机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),s._v(" 的存在，这时，路由器 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 就会向主机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" 发送一个 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 目标不可达数据包，说明发往主机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),s._v(" 的包未能成功\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 的这种通知消息会使用 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 进行发送\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 因此，从路由器 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 返回的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 包会按照往常的路由控制先经过路由器 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 再转发给主机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" 。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 收到该 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 包的主机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" 则分解 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 的首部和数据域以后得知具体发生问题的原因。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("ICMP 包头格式")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(2083),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 报文是封装在 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 包里面，它工作在网络层，是 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 协议的助手\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 包头的类型字段，大致可以分为两大类\n\t一类是用于诊断的查询消息，也就是「查询报文类型」\n\t另一类是通知出错原因的错误消息，也就是「差错报文类型」\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:t(2084),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"二-查询报文类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-查询报文类型"}},[s._v("#")]),s._v(" "),n("strong",[n("code",[s._v("（二）查询报文类型")])])]),s._v(" "),n("p",[n("img",{attrs:{src:t(2085),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 回送消息 —— 类型 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 和 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 回送消息用于进行通信的主机或路由器之间，判断所发送的数据包是否已经成功到达对端的一种消息，ping 命令就是利用这个消息实现的。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 可以向对端主机发送回送请求的消息（"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" Echo Request Message，类型 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("），也可以接收对端主机发回来的回送应答消息（"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" Echo Reply Message，类型 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("）。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("目标不可达消息（Destination Unreachable Message） —— 类型为 3")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 路由器无法将 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 数据包发送给目标地址时，会给发送端主机返回一个目标不可达的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 消息，并在这个消息中显示不可达的具体原因，原因记录在 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 包头的代码字段。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 由此，根据 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 不可达的具体消息，发送端主机也就可以了解此次发送不可达的具体原因。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"三-ping-查询报文类型的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-ping-查询报文类型的使用"}},[s._v("#")]),s._v(" "),n("strong",[n("code",[s._v("（三）ping —— 查询报文类型的使用")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：ping 命令执行的时候，源主机首先会构建一个 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 回送请求消息数据包\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 数据包内包含多个字段，最重要的是两个：\n\t第一个是类型，对于回送请求消息而言该字段为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\t另外一个是序号，主要用于区分连续 ping 的时候发出的多个数据包\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：每发出一个请求数据包，序号会自动加 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("。为了能够计算往返时间 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RTT")]),s._v("，它会在报文的数据部分插入发送时间。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：然后，由 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 协议将这个数据包连同地址 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v(" 一起交给 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 层。"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 层将以 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v(" 作为目的地址，本机 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 地址作为源地址，协议字段设置为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 表示是 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 协议，在加上一些其他控制信息，构建一个 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 数据包\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"二-traceroute-差错报文类型的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-traceroute-差错报文类型的使用"}},[s._v("#")]),s._v(" 二：traceroute —— 差错报文类型的使用")]),s._v(" "),n("h3",{attrs:{id:"一-traceroute-作用一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-traceroute-作用一"}},[s._v("#")]),s._v(" "),n("strong",[n("code",[s._v("（一）traceroute 作用一")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 有一款充分利用 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 差错报文类型的应用叫做 traceroute（在"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UNIX")]),s._v("、MacOS中是这个命令，而在Windows中对等的命令叫做 tracert ）。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" traceroute 的第一个作用就是【意设置特殊的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TTL")]),s._v("，来追踪去往目的地时沿途经过的路由器。】\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("这个作用是如何工作的呢？")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 它的原理就是利用 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 包的生存期限 从 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 开始按照顺序递增的同时发送 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UDP")]),s._v(" 包，强制接收 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 超时消息的一种方法。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 比如，将 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TTL")]),s._v(" 设置 为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，则遇到第一个路由器，就牺牲了，接着返回 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 差错报文网络包，类型是时间超时\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 接下来将 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TTL")]),s._v(" 设置为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，第一个路由器过了，遇到第二个路由器也牺牲了，也同意返回了 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 差错报文数据包，如此往复，直到到达目的主机。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 这样的过程，traceroute 就可以拿到了所有的路由器 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v("。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 但是有的路由器根本就不会返回这个 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v("，所以【于有的公网地址，是看不到中间经过的路由的。】\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ul",[n("li",[s._v("发送方如何知道发出的 UDP 包是否到达了目的主机呢？")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" traceroute 在发送 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UDP")]),s._v(" 包时，会填入一个不可能的端口号值作为 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UDP")]),s._v(" 目标端口号（大于 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" ）。当目的主机，收到 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UDP")]),s._v(" 包后，会返回 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 差错报文消息，但这个差错报文消息的类型【端口不可达】\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：所以，当差错报文类型是端口不可达时，说明发送方发出的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UDP")]),s._v(" 包到达了目的主机。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"二-traceroute-作用二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-traceroute-作用二"}},[s._v("#")]),s._v(" "),n("strong",[n("code",[s._v("（二）traceroute 作用二")])])]),s._v(" "),n("ul",[n("li",[s._v("traceroute 还有一个作用是故意设置不分片，从而确定路径的 MTU")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 这样做的目的是为了路径"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MTU")]),s._v("发现。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 因为有的时候我们并不知道路由器的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MTU")]),s._v(" 大小，以太网的数据链路上的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MTU")]),s._v(" 通常是 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" 字节，但是非以太网的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MTU")]),s._v(" 值就不一样了，所以我们要知道 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MTU")]),s._v(" 的大小，从而控制发送的包大小。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:t(2086),alt:"Alt text"}})]),s._v(" "),n("ul",[n("li",[s._v("它的工作原理如下：")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 首先在发送端主机发送 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 数据报时，将 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" 包首部的分片禁止标志位设置为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("。根据这个标志位，途中的路由器不会对大数据包进行分片，而是将包丢弃。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 随后，通过一个 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 的不可达消息将数据链路上 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MTU")]),s._v(" 的值一起给发送主机，不可达消息的类型为「需要进行分片但设置了不分片位」。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 发送主机端每次收到 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ICMP")]),s._v(" 差错报文时就减少包的大小，以此来定位一个合适的 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MTU")]),s._v(" 值，以便能到达目标主机。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);