(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{2573:function(a,e,n){"use strict";n.r(e);var s=n(9),t=Object(s.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h3",{attrs:{id:"一-概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-概念"}},[a._v("#")]),a._v(" 一：概念")]),a._v(" "),n("h3",{attrs:{id:"一-jobmanager-高可用-ha"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-jobmanager-高可用-ha"}},[a._v("#")]),a._v(" (一)：JobManager 高可用(HA)")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("JobManager协调每个flink任务部署。它负责任务调度和资源管理")])]),a._v(" "),n("li",[n("p",[a._v("默认情况下，每个flink集群只有一个JobManager，这将导致一个单点故障(SPOF)：如果JobManager挂了，则不能提交新的任务，并且运行中的程序也会失败")])]),a._v(" "),n("li",[n("p",[a._v("使用JobManager HA，集群可以从JobManager故障中恢复，从而避免SPOF(单点故障) 。 用户可以在standalone或 YARN集群 模式下，配置集群高可用")])])]),a._v(" "),n("h3",{attrs:{id:"二-jobmanager-ha配置步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-jobmanager-ha配置步骤"}},[a._v("#")]),a._v(" (二)：JobManager HA配置步骤")]),a._v(" "),n("ul",[n("li",[a._v("Standalone集群的高可用")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\tStandalone模式（独立模式）下JobManager的高可用性的基本思想是，任何时候都有一个 Master JobManager ，并且多个Standby JobManagers 。 Standby JobManagers可以在Master JobManager 挂掉的情况下接管集群成为Master JobManager。 这样保证了没有单点故障，一旦某一个Standby JobManager接管集群，程序就可以继续运行。 Standby JobManager和Master JobManager实例之间没有明确区别。 每个JobManager都可以成为Master或Standby节点\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("ul",[n("li",[a._v("Yarn 集群高可用")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("flink on yarn的 HA 其实主要是利用yarn自己的job恢复机制\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h3",{attrs:{id:"二-flink-standalone集群ha配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-flink-standalone集群ha配置"}},[a._v("#")]),a._v(" 二：Flink Standalone集群HA配置")]),a._v(" "),n("h3",{attrs:{id:"一-ha集群环境要求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-ha集群环境要求"}},[a._v("#")]),a._v(" (一)：HA集群环境要求")]),a._v(" "),n("ul",[n("li",[a._v("配置一个Standalone的HA Flink集群，必须具备如下条件")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("1：high-availability: (必须的) 一般指定使用zookeeper作为metadata数据的存储\n\n2：high-availability.storageDir：(必须的) JobManager metadata需要持久化，JobManager metadata一般需要存放在一个分布式文件系统中，官方建议使用hdfs文件系统，但是我们也可以NFS等分布式文件系统\n\n3：high-availability.zookeeper.quorum：(必须的) 这里是填写zookeeper的地址\n\n4：high-availability.zookeeper.path.root ：(不必须的) 设置flink在zookeeper的节点目录\n\n5：high-availability.cluster-id：(不必须的) 用于指定flink的集群名称，这个集群名称位于root节点下面\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("ul",[n("li",[a._v("官方给出示例配置如下(/usr/local/flink/conf/flink-conf.yaml)")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("high-availability: zookeeper\nhigh-availability.zookeeper.quorum: localhost:2181\nhigh-availability.zookeeper.path.root: /flink\nhigh-availability.cluster-id: /cluster_one # important: customize per cluster\nhigh-availability.storageDir: hdfs:///flink/recovery\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);