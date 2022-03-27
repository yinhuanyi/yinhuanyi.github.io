(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1684:function(s,a,n){s.exports=n.p+"assets/img/2021-10-2611.29.41.28042d3f.png"},2642:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"一-redis主从模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-redis主从模式"}},[s._v("#")]),s._v(" 一：Redis主从模式")]),s._v(" "),e("h3",{attrs:{id:"一-主节点配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-主节点配置"}},[s._v("#")]),s._v(" (一)：主节点配置")]),s._v(" "),e("ul",[e("li",[s._v("主节点配置")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("bind "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\ndaemonize yes "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后台启动")]),s._v("\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/data/redis.log"')]),s._v("\ndbfinename dump"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rdb\nappendonly yes\nappendfilename "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\ndir "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data \nrequirepass "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 密码")]),s._v("\nmasterauth "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从节点访问主节点密码")]),s._v("\nreplica"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("read"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("only "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从节点只读")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("ul",[e("li",[s._v("从节点配置")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("bind "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\ndaemonize yes "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后台启动")]),s._v("\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/data/redis.log"')]),s._v("\ndbfinename dump"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rdb\nappendonly yes\nappendfilename "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\ndir "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data \nrequirepass "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 密码")]),s._v("\nmasterauth "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从节点访问主节点密码")]),s._v("\nreplica"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("read"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("only "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从节点只读")]),s._v("\n\n\nslaveof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".23")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定谁是主节点")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("ul",[e("li",[s._v("查看主从配置的信息")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("info replication 查看从节点信息\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("主从复制过程")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：主从复制过程中，主节点依然可以处理外界的访问\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：主从复制过程中，从节点也可以接受外界查询请求，但是这时候查到的是以前的老数据\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("加速复制")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主节点设置，无需写入磁盘，直接生成RDB快照发送给从节点")]),s._v("\nrepl"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("diskless"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sync yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"二-redis-sentinel哨兵"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-redis-sentinel哨兵"}},[s._v("#")]),s._v(" 二：Redis Sentinel哨兵")]),s._v(" "),e("h3",{attrs:{id:"一-部署哨兵需要的基本要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-部署哨兵需要的基本要求"}},[s._v("#")]),s._v(" (一)：部署哨兵需要的基本要求")]),s._v(" "),e("p",[e("img",{attrs:{src:n(1684),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("注意点")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：端口"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：至少"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("个sentinel实例\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：运行sentinel必须指定配置文件\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：独立的虚拟机或物理机运行\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("：可配置sentinel允许丢失有限的写入\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("：客户端要支持sentinel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ul",[e("li",[s._v("哨兵机制的优点")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：哨兵模式是基于主从模式的，所有主从的优点，哨兵模式都有\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：主从可以自由切换，系统更加健壮\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：sentinel会不断检查主从节点是否正常，如果不正常，可以通过"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API")]),s._v("发送通知\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("缺点")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：主从切换需要时间，会丢失数据\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：没有解决主节点写的压力\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：扩容复杂\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"二-哨兵机制的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-哨兵机制的配置"}},[s._v("#")]),s._v(" (二)：哨兵机制的配置")]),s._v(" "),e("ul",[e("li",[s._v("配置文件")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("bind "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("26379")]),s._v("\ndaemonize yes\nlogfile "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/redis/log/sentinel.log"')]),s._v("\npidfile "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sentinel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mymaster指定主节点的主机名（可以随便取一个名），127.0.0.1 6379：指明主节点的IP和端口，2表示一个节点要成为主节点必须拥有的票数")]),s._v("\nsentinel monitor mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".23")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定与master通信的密码")]),s._v("\nsentinel auth"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pass mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指明主节点多少秒联系不上，认定主服务器宕机，默认30000毫秒")]),s._v("\nsentinel down"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("after"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("milliseconds mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定故障转移的超时时长。如果超过180000毫秒，无法从服务器选择主服务器，则故障转移失败")]),s._v("\nsentinel failover"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("timeout mymaster "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("180000")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("ul",[e("li",[s._v("启动过程")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：启动三个Redis节点\nredis"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：启动三个sentinel节点\nredis"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sentinel sentinel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"三-哨兵机制工作的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-哨兵机制工作的原理"}},[s._v("#")]),s._v(" (三)：哨兵机制工作的原理")]),s._v(" "),e("ul",[e("li",[s._v("sentinel内部有三个定时命令")])]),s._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：每"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("秒每个sentinel对其他sentinel节点执行"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PING")]),s._v("操作\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：每"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("秒每个sentinel通过master的channel交换信息\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：每"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("秒每个sentinel会对master和slave执行一次"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INFO")]),s._v("命令\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("sentinel在监控主从节点的时候，只要有2个sentinel(配置文件中配置了)认为master下线了，就会执行故障转移操作，会在从节点中重新选择一个节点作为主节点，并且Redis的相关配置文件也会给自动修改")])])])}),[],!1,null,null,null);a.default=t.exports}}]);