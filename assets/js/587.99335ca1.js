(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{2641:function(s,a,t){"use strict";t.r(a);var e=t(9),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"一-redis是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-redis是什么"}},[s._v("#")]),s._v(" 一：Redis是什么")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("(一)：基本概念")])])]),s._v(" "),t("ul",[t("li",[s._v("特点")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：内存数据库，速度快，支持数据持久化\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：支持"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("KV")]),s._v("、Lists、Hashes、Sets、Sorted Sets等多种数据结构\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：Redis支持master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slave、集群、以及sentinel监控机制\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：支持事务操作\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("优势")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：性能极高：Redis读速度"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110000")]),s._v("次"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s，写速度"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81000")]),s._v("次"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：丰富的数据类型：Redis支持Strings、Lists、Hashes、Sets、Sorted Sets\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：原子操作：Redis的所有操作都是原子性的，也支持事务操作\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：丰富的特性：Redis还支持发布"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("订阅，通知，key过期等特性\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"二-redis高并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-redis高并发"}},[s._v("#")]),s._v(" 二：Redis高并发")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("(一)：原理")])])]),s._v(" "),t("ul",[t("li",[s._v("Redis是纯内存数据库，所以读写速度快")]),s._v(" "),t("li",[s._v("Redis基于非阻塞IO，IO多路复用，减少了线程上下文切换的开销")]),s._v(" "),t("li",[s._v("Redis采用了单线程的模型，保证了每个操作的原子性")]),s._v(" "),t("li",[s._v("Redis存储结构多样化")]),s._v(" "),t("li",[s._v("Redis采用自己的事件分离器，内部使用非阻塞的执行方式，吞吐能力比较大")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("(二)：Redis单线程")])])]),s._v(" "),t("ul",[t("li",[s._v("优势")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：不需要加锁解决并发问题\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：单线程和多进程集群方案\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("："),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),s._v("消耗低\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：与Memcached比较，Memcached不支持多种数据类型\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("劣势")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("无法发挥多核"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),s._v("的优势，但是可以启动多个Redis实例\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"三-redis-安装-最新6-0版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-redis-安装-最新6-0版本"}},[s._v("#")]),s._v(" 三：Redis 安装 (最新6.0版本)")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("(一)：各历史版本的特性")])])]),s._v(" "),t("ul",[t("li",[s._v("2.6")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：key过期时间支持毫秒\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：从节点支持只读功能\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("2.8")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：可以用bind命令绑定多个"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v("地址\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：新增发布"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("订阅功能\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：新增Redis sentinel监控机制\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("3.0")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：新增Redis cluster集群模式\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("3.2")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：添加"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GEO")]),s._v("功能\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：新的list编码类型，quicklist\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("4.0")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：提供了模块化系统，方便第三方开发者扩展Redis功能\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：提供了新的缓存剔除算法："),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LFU")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Last Frequently Userd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，并且对已有算法进行了优化\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：提供了非阻塞del和flushall"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("flushdb功能，有效解决了删除bigkey可能造成的Redis阻塞\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：提供了"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("混合持久化机制，充分利用了"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("和"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("各自优势\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("5.0")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：新增stream数据类型\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：客户端经常连接和断开性能更好\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("6.0")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：新增多线程，用于处理网络数据的读写和协议解析，命令执行依然是单线程\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[t("code",[s._v("(二)：安装和升级centos 7的依赖，以及启动")])])]),s._v(" "),t("ul",[t("li",[s._v("下载安装包")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("wget "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("P")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("download"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("releases"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("升级依赖")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("yum install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y centos"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("release"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scl scl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("utils"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("build\n\nyum install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y devtoolset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("toolchain\n\nscl enable devtoolset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" bash\n\ngcc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("创建安装目录，安装")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("mkdir "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis\n\ncd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\n\nmake "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis  install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("启动Redis")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("cd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Redis启动会使用"),t("code",[s._v("/usr/local/src/redis-6.0.0/redis.conf")]),s._v("文件作为配置文件")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("# 编辑配置文件\ncp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n\nvi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n将daemonize改为yes，让\n\n# 启动Redis\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("给Redis创建systemd文件")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("vi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("systemd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("system"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nDescription"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server\nAfter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\nExecStart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\nPrivateTmp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nWantBy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[s._v("重载系统服务")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("systemctl daemon"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[t("code",[s._v("(三)：Redis的基本配置")])])]),s._v(" "),t("ul",[t("li",[s._v("Redis支持很多参数，但都有默认值")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("daemonize：默认情况下，为no，改为yes使Redis后台运行\n\nbind：指定Redis绑定的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v("\n\nport：端口\n\ndatabases：设置数据库个数\n\nsave：设置redis进行数据库镜像的频率\n\ndbfilename：镜像备份文件的名称\n\ndir：数据库镜像备份文件存储路径\n\nrequirepass：设置密码\n\nmaxclients：同时连接最大客户端数据量\n\nmaxmemory：设置Redis可以使用的最大内存\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("blockquote",[t("p",[t("code",[s._v("(四)：Redis连接")])])]),s._v(" "),t("ul",[t("li",[s._v("连接")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h localhost "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"四-项目业务和redis使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-项目业务和redis使用场景"}},[s._v("#")]),s._v(" 四：项目业务和Redis使用场景")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("(一)：相关的业务和需要的工作事项")])])]),s._v(" "),t("ul",[t("li",[s._v("Redis可以涉及到的业务")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：注册、单点登录\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：好友功能：关注、取消、互粉\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：排行榜：积分、热度排行\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：缓存：缓存餐厅数据\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("：秒杀：预售、倒计时秒杀\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("：订单：分布式锁\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("：附件的人：地理位置搜索\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("：反馈：添加、点赞、评论、列表\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ul",[t("li",[s._v("分布式系统响应很慢怎么办")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：用Redis最合适的数据类型缓存\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("缓存异常怎么办？")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：使用分布式锁\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("："),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LRU")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Least Recently Used"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("淘汰算法优化\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("缓存数据丢失怎么办")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：使用"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("和"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AOF")]),s._v("两种混合持久化方案\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：全量复制和增量复制\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("主从复制数据一致性问题如何保证")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：保证主从同步的监控\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：使用sentinel哨兵机制\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("集群的分布式存储")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：使用Redis自带集群解决\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("如何解决故障")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：集群动态伸缩\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：Move和Ash转向\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：故障演示和恢复方案\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("：解决数据延时、数据脏读、数据抖动、数据一致性、热点数据存储、"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RDB")]),s._v("文件损坏等问题\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);