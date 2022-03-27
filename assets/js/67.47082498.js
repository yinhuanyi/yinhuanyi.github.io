(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1621:function(s,e,a){s.exports=a.p+"assets/img/2020-03-1711.50.28.af8b0399.png"},1622:function(s,e,a){s.exports=a.p+"assets/img/2020-03-1711.50.35.c13f3c06.png"},1623:function(s,e,a){s.exports=a.p+"assets/img/2020-03-205.11.38.09568e26.png"},1624:function(s,e,a){s.exports=a.p+"assets/img/2020-03-205.12.50.6b3636a9.png"},1625:function(s,e,a){s.exports=a.p+"assets/img/2020-03-205.14.45.418501cd.png"},1626:function(s,e,a){s.exports=a.p+"assets/img/2020-03-205.17.12.a917c34e.png"},1627:function(s,e,a){s.exports=a.p+"assets/img/2020-03-205.24.40.a14b1b97.png"},1628:function(s,e,a){s.exports=a.p+"assets/img/2021-07-184.40.41.0ce862fc.png"},2607:function(s,e,a){"use strict";a.r(e);var t=a(9),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一-使用cerebro查看es的集群状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-使用cerebro查看es的集群状态"}},[s._v("#")]),s._v(" 一："),t("code",[s._v("使用Cerebro查看ES的集群状态")])]),s._v(" "),t("h3",{attrs:{id:"一-cerebro的安装与配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-cerebro的安装与配置"}},[s._v("#")]),s._v(" (一)Cerebro的安装与配置")]),s._v(" "),t("ul",[t("li",[s._v("github地址")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/lmenezes/cerebro\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("注意要下载cerebro的realease版本")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://github.com/lmenezes/cerebro/releases\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("启动")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /root/cerebro-0.8.5/bin &\\\n./cerebro -Dhttp.port=9000 -Dhttp.address=0.0.0.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("访问一个ES节点")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1621),alt:"Alt text"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(1622),alt:"Alt text"}})]),s._v(" "),t("h2",{attrs:{id:"二-启动集群节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-启动集群节点"}},[s._v("#")]),s._v(" 二："),t("code",[s._v("启动集群节点")])]),s._v(" "),t("h3",{attrs:{id:"一-使用命令行启动节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-使用命令行启动节点"}},[s._v("#")]),s._v(" (一)使用命令行启动节点")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 单台主机\nbin/elasticsearch -E cluster.name=my_cluster -E node.name=node1 -E http.port=9200\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"二-基于配置文件和systemctl启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-基于配置文件和systemctl启动"}},[s._v("#")]),s._v(" (二)基于配置文件和systemctl启动")]),s._v(" "),t("ul",[t("li",[s._v("配置文件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('cluster.name: yhy-es\nnode.name: yhy-node-2\npath.data: /var/lib/elasticsearch\npath.logs: /var/log/elasticsearch\n# 不使用swap交换分区\nbootstrap.memory_lock: false\nbootstrap.system_call_filter: false\nnode.master: true\nnode.data: true\n# 这里可以写0.0.0.0，那么就是监听在外网端口上\nnetwork.host: 172.16.18.202\ndiscovery.seed_hosts: ["172.16.18.202", "172.16.18.203", "172.16.18.204"]\ncluster.initial_master_nodes: ["172.16.18.202"]\nhttp.cors.enabled: true\nhttp.cors.allow-origin: "*"\nhttp.port: 9200\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"三-处理请求的节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-处理请求的节点"}},[s._v("#")]),s._v(" (三)处理请求的节点")]),s._v(" "),t("ul",[t("li",[s._v("说明")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("处理请求的节点为 coordinating节点，该节点为所有节点的默认角色，不能取消\n\t路由请求到正确的节点，比如创建索引的请求到master节点\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"四-提高系统的可用性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-提高系统的可用性"}},[s._v("#")]),s._v(" (四)提高系统的可用性")]),s._v(" "),t("ul",[t("li",[s._v("服务的可用性")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("2个节点的情况下，允许其中1个节点停止服务\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("数据可用性")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("引入replication解决，index的可用性\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("增大系统容量")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("分片(Shard)是ES支持PB级数据存储的基石。\n\t分片存储于部分数据，可以分布于任意节点上，一个索引可以有一个或多个分片组成\n\t分片在索引创建的时候就需要指定，一旦指定就不允许再次修改，ES7默认是1个shard，一个replication\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"五-分片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-分片"}},[s._v("#")]),s._v(" (五)分片")]),s._v(" "),t("ul",[t("li",[s._v("问题")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("此时增加节点是否能够提高 test_index 的数据容量？\n\t不能，因为test_index的shard数已经定义好了，增加节点无法对已有的index产生影响，增加节点只对新的index产生影响\n此时增加副本数是否能够提高 test_index 的读取吞吐量？\n\t不能，副本数是提供index的可用性的，增加shard数可以提供吞吐量\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("结论")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1：分片数过小会导致后续无法通过增加节点实现水平扩容\n2：分片数过大会导致一个节点上发布过多分片，造成资源浪费，同时会影响查询性能\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"六-集群状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-集群状态"}},[s._v("#")]),s._v(" (六)集群状态")]),s._v(" "),t("ul",[t("li",[s._v("说明")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("可以通过 GET _cluster/health 查看集群状态\n\n\tgreen: 表示健康状态，指所有的主分片和副分片都是正常的\n\tyellow: 所有的主分片都是正常的，有副本分片未分配\n\tred：有主分片未分配\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"七-文档到分片的映射算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七-文档到分片的映射算法"}},[s._v("#")]),s._v(" (七)文档到分片的映射算法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("shard = hash(routing) % number_of_primary_shards\nhash算法可以保证将数据均匀的发布在分片中\nrouting是一个关键参数，默认是文档的id，也是可以自行制定的\nnumber_of_primary_shards 是主分片数\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("文档创建的流程")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1623),alt:"Alt text"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("P1指的是索引的第二个发片的主发片\nR1指的是索引的第二个发片的副发片\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("文档读取的流程")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1624),alt:"Alt text"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("这里解释一下，为什么在kibana上，指定了一个ES集群的节点IP，这样可以让kibana查询数据的时候，向多个节点查询，起到负载均衡效果\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("文档批量创建的流程")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1625),alt:"Alt text"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("文档批量读取的流程")])])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1626),alt:"Alt text"}})]),s._v(" "),t("h3",{attrs:{id:"八-脑裂问题-split-brain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八-脑裂问题-split-brain"}},[s._v("#")]),s._v(" (八)脑裂问题(split-brain)")]),s._v(" "),t("ul",[t("li",[s._v("3个节点组成的集群，突然node1的网络和其他两个节点中断")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1627),alt:"Alt text"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("quorum是法定人数\n但是这种也存在一个缺点：比如我集群有8个节点，当我设置了discovery.zen.minimum_master_nodes（也就是quorum）为5，如果宕机了4个节点，那么怎么办呢？此时集群就无法正常使用了\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"九-shard发片详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九-shard发片详解"}},[s._v("#")]),s._v(" (九)shard发片详解")]),s._v(" "),t("ul",[t("li",[s._v("倒排索引一旦生成，就不能够修改的"),t("strong",[s._v("优点")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1：由于无法修改，因此不需要考虑修改倒排索引过程中加锁\n2：倒排索引不再修改，那么可以充分利用文件系统缓存，查询的时候，只需要读取一次，那么后面的查询都可以从内存中获取数据，查询性能提供\n3：ES可以根据倒排索引生成缓存\n4：可以针对倒排索引做压缩优化\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("倒排索引一旦生成，就不能够修改的"),t("strong",[s._v("缺点")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("需要写入新文档的时候，必须重新构建倒排索引文件，然后替换老倒排索引文件，那么新文档才能被检索，这样导致文档查询的实时性能低下\n\n\n解决的办法是，在新文档直接生成新的倒排索引文件，查询的时候查询的时候查询所有的倒排索引文件，最后做数据汇总，返回给client端\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("在Lucene中，就采取了上面的处理方案，每个倒排索引文件叫做一个"),t("code",[s._v("segment")]),s._v("，合并在一起称之为"),t("code",[s._v("index")]),s._v(", 这个index与ES中的Index不一样，ES中的一个"),t("code",[s._v("Shard")]),s._v("对应Lucene中的一个"),t("code",[s._v("index")]),s._v("，ES中的index是所有Shard的集合。在Lucene中，会有一个专门的文件来记录所有的"),t("code",[s._v("segment")]),s._v("，叫做"),t("code",[s._v("commit point")])])]),s._v(" "),t("li",[t("p",[s._v("Lucene的"),t("code",[s._v("segment")]),s._v("写入到磁盘的过程依然非常耗时，可以借助文件系统缓存的特性，先将"),t("code",[s._v("segment")]),s._v("在"),t("code",[s._v("buffer")]),s._v("中创建并且查询进一步提升性能，这个先写入到"),t("code",[s._v("buffer")]),s._v("的机制，在ES中叫做"),t("code",[s._v("Refresh")]),s._v("。在refresh之前，文档会先存储在buffer中，refresh时，先清空buffer，再生成segment。ES默认每一秒执行一次refresh，因此文档的实时性能为1秒，这也是ES被称之为"),t("code",[s._v("近实时")]),s._v("的原因")])]),s._v(" "),t("li",[t("p",[s._v("ES引入了translog机制，用于解决节点宕机时，文档丢失的风险：当文档写入到buffer同时，也会写入一份到translog，默认情况下ES每个请求都会落盘，也可以修改索引的settings配置，调整translog落盘的时间")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 可以动态修改索引的settings配置\nPUT /my_index/_settings\n{\n    "index.translog.durability": "async", # 异步写入\n    "index.translog.sync_interval": "5s"  # 落盘间隔为5秒\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("ES中的flush负责将内存中的segment写入磁盘，flush的主要工作如下")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1：将translog写入磁盘\n2：执行refresh操作，清空buffer，将segment写入磁盘\n3：更新commit point，并写入磁盘\n4：执行fsync操作，将内存中的segment写入磁盘\n5：删除旧的translog文件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("refresh发生的时机，主要是下面几种情况触发")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('1：间隔时间到达时候，通过settings设定，默认是1秒，可以改为5秒\nPUT /my-index-000001/_settings\n{\n  "index" : {\n    "refresh_interval" : "1s"\n  }\n}\n\n\n2：index.buffer占满，其大小通过indices.memory.index_buffer_size设置，默认是jvm heap的10%\n\n3：flush也会触发refresh操作\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("flush 发生的时机")]),s._v("，主要是下面几种情况触发")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1：间隔时间到达，默认是30分钟，无法修改\n2：translog占满时，其大小可以通过index.translog.flush_threshold_size设置，默认是512M，每个ES的index有自己的translog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("当ES删除文档和更新文档，Lucene如何操作呢")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Lucene有一个.del的文件，记录删除的文档，查询结果会过滤掉.del的文档，所以有多少个文档被删除，在ES中可以被查到\n\n更新的时候是Lucene先删除文档，然后再新建文档\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("从全局视角，看看ES的index和Lucene的index")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1628),alt:"Alt text"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t一个ES的Index由多个shard组成，每个shard就是Lucene的一个Index，在Lucene的index中有多个segment，每个segment都是一个小的倒排索引，所有的倒排索引被Commit point维护着，还有一个.del文件记录被删除的文档\n\n\tES每一次refresh都会生成一个segment，但是flush会将segment写入到磁盘中\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);