(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{2173:function(s,a,t){"use strict";t.r(a);var n=t(9),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一-隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-隔离"}},[s._v("#")]),s._v(" 一：隔离")]),s._v(" "),n("h3",{attrs:{id:"一-服务隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-服务隔离"}},[s._v("#")]),s._v(" (一) 服务隔离")]),s._v(" "),n("p",[n("img",{attrs:{src:t(674),alt:"Alt text"}})]),s._v(" "),n("ul",[n("li",[s._v("1：上面是两张表，一个张稿件原表，一个张是稿件信息的统计表，将一张表中更新频繁的信息作为从表独立出来")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("\t在投稿的流程中，一旦稿件创建了，基本不会改变\n\t但是稿件的统计信息，包括稿件的播放、点赞、收藏、投币数量等，这些信息会更新的比较频繁\n\n\tMySQL的BufferPool 是用于缓存DataPage，缓存的是查询结果集的行，更新频繁的表，BufferPool的命中率会下降。因此主表archive更新频率底，可以存储有效的BufferPool，从表是统计信息，更新频繁。这就是将【稿件表】和【稿件统计表】分离的目的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"二-热点隔离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-热点隔离"}},[s._v("#")]),s._v(" (二) 热点隔离")]),s._v(" "),n("ul",[n("li",[s._v("1：场景一：比如说banner数据，每个登录的用户都会返回到，那么如果此时使用的remote cache是Redis Cluster，那么Cluster基于一致性哈希算法，会将请求调度到某个Redis节点，无法分散请求。")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(675),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("\t那对于更新频率比较低的数据，又是热点数据，会将其从Remote Cache提升到Local Cache，当服务启动的时候，开启一个goroutine， 这个goroutine只做一件事情，从数据库或者Redis中，把热点数据加载到Map中。Map是并发不安全的，那么解决方法有两个，一个是使用atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Value存储，另外一个是使用sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Mutex\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("2：场景二：一个房间的播放人数增多，那么此时做一个room-monitor，去监控房间的人数，如果人数到达阈值，那么给room-service发送消息，让room-service将这个房间的remote cache 提升到 local cache，让进程本地缓存数据，且设置一个数据的ttl值就可以了，如果数据过期了，再从Redis中读取或MySQL中读取即可 。但是如果可以room-service自己通过某种机制，发现热点数据，然后进行local cache会更好")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(676),alt:"Alt text"}})]),s._v(" "),n("h2",{attrs:{id:"二-超时"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-超时"}},[s._v("#")]),s._v(" 二：超时")]),s._v(" "),n("h3",{attrs:{id:"一-超时的几个层面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-超时的几个层面"}},[s._v("#")]),s._v(" (一) 超时的几个层面")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("1：网络传递具有不确定性")])]),s._v(" "),n("li",[n("p",[s._v("2：客户端和服务器端不一致的超时策略，可能会造成客户端超时了，但是服务器端依然在执行操作")])]),s._v(" "),n("li",[n("p",[s._v("3 ：高延时服务导致client调用端资源浪费")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("\t超时控制是微服务的第一道关，良好的超时策略可以尽可能让服务不堆积，尽快清空高延时的请求\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("连接超时")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DialTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("、写超时")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WriteTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("、读超时")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ReadTimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 三种超时都必须要考虑\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"二-超时控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-超时控制"}},[s._v("#")]),s._v(" (二) 超时控制")]),s._v(" "),n("p",[n("img",{attrs:{src:t(677),alt:"Alt text"}})]),s._v(" "),n("ul",[n("li",[s._v("超时传递的思想")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" gRPC请求到"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),s._v("，"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("的超时为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),s._v("使用了"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("ms的处理请求，将请求转发个"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),s._v("配置了"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("ms超时，但是实际使用了"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("ms\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")]),s._v("再转发请求的时候，发现余量不足，那么直接timeout，取消请求传递\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"三-请求超时发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-请求超时发布"}},[s._v("#")]),s._v(" (三) 请求超时发布")]),s._v(" "),n("ul",[n("li",[s._v("合理控制好超时，就可以避免goroutine无限增长，可以有效避免OOM")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("双峰发布："),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("的请求耗时在"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("ms以内，"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("的请求可能永远不会完成\n\n对于监控不只需要看mean，可以看看耗时发布统计，比如"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v("th、"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("th\n\n设计合理超时，拒绝超长请求，或者当Server不可用要主动失败\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"四-超时案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-超时案例"}},[s._v("#")]),s._v(" (四) 超时案例")]),s._v(" "),n("ul",[n("li",[s._v("设置超时出问题，导致的故障")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SLB")]),s._v("入口"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NGINX")]),s._v("没有配置超时导致连锁故障\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：服务依赖的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DB")]),s._v("连接池漏配超时，导致请求阻塞，最终服务集体"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OOM")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：下游服务发版本耗时增加，上游服务配置超时过段，导致上游请求失败，下游依然在处理请求，浪费资源\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"三-过载保护-和-限流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-过载保护-和-限流"}},[s._v("#")]),s._v(" 三：过载保护 和 限流")]),s._v(" "),n("h3",{attrs:{id:"一-过载保护"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-过载保护"}},[s._v("#")]),s._v(" (一) 过载保护")]),s._v(" "),n("ul",[n("li",[s._v("1：什么是过载保护")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("\t过载保护是当服务请求流量过多的时候，一种拒绝请求的机制\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("2："),n("strong",[s._v("令牌桶算法")]),s._v("进行过载保护")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(678),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("\tgithub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("juju"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ratelimit这个库中关于令牌数计算的源代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("3："),n("strong",[s._v("漏斗算法")]),s._v("进行过载保护")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(679),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("uber团队有一个开源的github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("uber"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("go"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ratelimit库 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("4："),n("strong",[s._v("令牌桶算法")]),s._v("和"),n("strong",[s._v("漏斗算法")]),s._v("都有一个问题")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("\t他们的防护思想都是设定一个阈值指标，当超过改指标后就阻止或者减少被处理，当系统负载降低到某一水平后，流量恢复进入。\n\t\n\t这种设定阈值的解决方法，一般是被动的，算法的实际效果取决于阈值的设置是否合理\n\n\t因此需要一个自动设置阈值的方法，此方法是动态的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("5：解决方法：可以"),n("code",[s._v("动态计算系统临近过载时的峰值吞吐综合数据")]),s._v("作为限流的阈值来进行流量控制，达到系统的保护")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("①：开启一个goroutine，每间隔"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),s._v("ms采集一次"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("使用率，基于")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("滑动均值Vt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" β "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Vt"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("β"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("θt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("消峰\n\n②：开启一个goroutine，计算当前服务的请求数量Inflight，进来一个请求就加一，完成一个请求就减一\n\n③：开启一个goroutine，最近的"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("秒内，pass为每"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("ms滑动窗口内，成功的请求数量，rt为单个采用窗口平均响应时间。那么就可以计算出这"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("秒内，平均的请求数量和响应时间，那么 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("QPS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("平均的请求数"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("平均的响应时间\n\n\n\n那么过载保护的动态阈值计算方式为：\n\t如果"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("，那么作为启发阈值，一旦pass"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("rt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" Inflight 就认为需要进入过载保护，就需要丢弃一些请求，丢弃一些流量后，"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),s._v("就会立即下降，那么又会有很多流量允许放行，"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),s._v("会继续到达阈值，使得再次过载保护，那么pass的流量，那就需要想一个办法，让过载保护冷启动\n\t冷启动的特点是当"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),s._v("降低后，在"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("秒内依然启动过载保护，过了"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("秒再次评估是否需要启动过载保护，这样使得pass的流量是平稳的\n\n\n\n下面是算法实现源码：\nhttps"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("go"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("kratos"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("kratos"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("blob"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pkg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ratelimit"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bbr"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bbr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("go\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"二-限流和分布式限流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-限流和分布式限流"}},[s._v("#")]),s._v(" (二) 限流和分布式限流")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("限流指的是一段时间内，定义某个客户或者应用可以接受多少个请求。通过限流可以过滤到产生流量峰值的客户，或者确保你的应用程序在自动扩容失效前都不会出现过载的情况")])]),s._v(" "),n("li",[n("p",[s._v("前面说介绍的过载保护存在如下的问题")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：令牌桶主要是针对单个节点，无法分布式的限流保护\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("QPS")]),s._v("限流不是特别准确\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：无法给每个用户设置限制\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：无法按照优先级丢弃请求\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("：拒绝请求也需要成本开销\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ul",[n("li",[s._v("传统的分布式限流思想是基于Redis来做的，这样对Redis的节点连接负载很高")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("incr key\nexpire key "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("需要解决两个问题")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(516),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("- ①：节点异步批量从Redis中获取令牌，减少对Redis的访问频率，在节点内部基于令牌桶拦截流量\n- ②：节点批量申请的Redis令牌数需要动态设置，避免节点获取流量不公平\n")])])]),n("ul",[n("li",[s._v("节点每次请求的令牌数量由节点的动态qps计算得到，再基于"),n("code",[s._v("最大最小公平分享")]),s._v("算法，分配给每个节点可以满足的最小需求，然后将没有使用的资源平均分配给需要"),n("code",[s._v("大资源")]),s._v("的用户")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(680),alt:"Alt text"}})]),s._v(" "),n("ul",[n("li",[n("p",[s._v("由上图可知，最开始每个节点分配"),n("code",[s._v("2.5")]),s._v("，A只需要2，那么其他节点就可以多分配上"),n("code",[s._v("(2.5-2)/3 + 2.5")]),s._v("，按照这个算法，最后将流量分配的结果是 "),n("code",[s._v("2 2.6 2.7 2.7")])])]),s._v(" "),n("li",[n("p",[s._v("因此分布式限流最常用的地方是BFF层(Backend For Frontend ) 最流量限制")])])]),s._v(" "),n("p",[n("img",{attrs:{src:t(516),alt:"Alt text"}})]),s._v(" "),n("ul",[n("li",[s._v("由于给接口设置限流太细了，但是给服务设置限流又太粗了，因此，"),n("code",[s._v("决定给接口设置优先级来解决问题")]),s._v("。每个接口配置阈值，运维工作繁重，最简单就是在Server服务级别设置quota，更加细粒度，我们可以根据不同的接口设置接口的重要性")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：Critical_plus 如果拒绝请求，会对业务系统产生比较严重影响\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：Critical 如果拒绝请求，可以对用户造成可见性问题\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：Sheddable_plus 任务系统流量，流量可以通过几分钟后重试\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：Sheddable 可以丢弃\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("在gRPC系统之间，需要自动传递信息，如果后端接收到A请求，在处理过程中又会调用B请求，那么B会使用A相同的优先级")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：当全局配额不足时候，优先拒绝低优先级的流量\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：全局配额按照重要性分别设置\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：过载保护的时候，低优先级的请求可以先被拒绝\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"三-熔断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-熔断"}},[s._v("#")]),s._v(" (三) 熔断")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("如果外网接口打入了大量流量，服务器端还是扛不住，一样会被打挂掉。那么就需要客户端来控制，"),n("code",[s._v("那么在客户端做节流就称为熔断")])])]),s._v(" "),n("li",[n("p",[s._v("客户端使用熔断可以选择阿里的Sentinel库")])])]),s._v(" "),n("h2",{attrs:{id:"四-降级和重试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-降级和重试"}},[s._v("#")]),s._v(" 四：降级和重试")]),s._v(" "),n("h3",{attrs:{id:"一-降级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-降级"}},[s._v("#")]),s._v(" (一) 降级")]),s._v(" "),n("ul",[n("li",[s._v("降级本质上是一种：提供有损失的服务")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("①："),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UI")]),s._v("模块化，非核心模块降级\n②：页面缓存副本\n③：默认值，热门推荐\n④：流量拦截、定期数据缓存\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"二-重试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-重试"}},[s._v("#")]),s._v(" (二) 重试")]),s._v(" "),n("ul",[n("li",[s._v("当请求返回错误(例如：配额不足，超时，内部错误等)，对于backend部分节点过载情况下，应该要重试，但是重试会带来流量放大")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：限制重试次数，和重试发布策略\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：随机化、指数递增的重试周期\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：应该在失败这层进行重试\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"五-重试和负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五-重试和负载均衡"}},[s._v("#")]),s._v(" 五：重试和负载均衡")]),s._v(" "),n("h3",{attrs:{id:"一-负载均衡思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-负载均衡思想"}},[s._v("#")]),s._v(" (一) 负载均衡思想")]),s._v(" "),n("ul",[n("li",[s._v("P2C负载均衡策略，主要用于为每个RPC请求返回一个Server节点以供调用")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("https"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("go"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("kratos"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("kratos"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("blob"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pkg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("net"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rpc"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("warden"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("balancer"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p2c"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p2c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("go\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports},516:function(s,a,t){s.exports=t.p+"assets/img/2021-08-3110.16.34.4dfefd64.png"},674:function(s,a,t){s.exports=t.p+"assets/img/2021-08-296.57.57.aa45b645.png"},675:function(s,a,t){s.exports=t.p+"assets/img/2021-08-297.51.42.c4a1314a.png"},676:function(s,a,t){s.exports=t.p+"assets/img/2021-08-297.52.07.668c8401.png"},677:function(s,a,t){s.exports=t.p+"assets/img/2021-08-3010.49.48.b5f427a8.png"},678:function(s,a,t){s.exports=t.p+"assets/img/2021-08-3011.23.07.3a473e83.png"},679:function(s,a,t){s.exports=t.p+"assets/img/2021-08-3011.33.47.82fb14b1.png"},680:function(s,a,t){s.exports=t.p+"assets/img/2021-08-3110.09.53.ef50f346.png"}}]);