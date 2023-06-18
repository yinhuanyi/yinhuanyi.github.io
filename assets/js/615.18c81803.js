(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{2680:function(s,e,a){"use strict";a.r(e);var t=a(9),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一-新添加es节点到集群报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-新添加es节点到集群报错"}},[s._v("#")]),s._v(" 一：新添加ES节点到集群报错")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('cluster.name: xingji-cluster\nnode.name: yw2-1\npath.data: /data/elasticsearch\npath.logs: /var/log/elasticsearch\nbootstrap.memory_lock: true\nnetwork.host: 10.102.0.2\nhttp.port: 9200\ndiscovery.seed_hosts: ["10.102.0.11", "10.102.0.2", "10.102.0.12","10.102.0.3","10.102.0.13","10.102.0.4","10.102.0.14"]\ncluster.initial_master_nodes: ["10.102.0.11", "10.102.0.2", "10.102.0.12","10.102.0.3"]\n# #控制集群在达到多少个节点之后才会开始数据恢复,通过这个设置可以避免集群自动相互发现的初期,shard分片不全的>问题,假如es集群内一共有5个节点,就可以设置为5,那么这个集群必须有5个节点启动后才会开始数据分片,如果设置为3,就有可能另外两个节点没存储数据分片\ngateway.recover_after_nodes: 5\nhttp.cors.enabled: true\nhttp.cors.allow-origin: "*"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("报错内容")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("memory locking requested for elasticsearch process but memory is not locked\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("解决办法")])]),s._v(" "),a("li",[a("p",[s._v("编辑/etc/systemd/system.conf")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("DefaultLimitNOFILE=65536\nDefaultLimitNPROC=32000\nDefaultLimitMEMLOCK=infinity\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl daemon-reload\nsystemctl restart elasticsearch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);