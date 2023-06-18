(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{2685:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"一-pushgateway介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-pushgateway介绍"}},[s._v("#")]),s._v(" 一：pushgateway介绍")]),s._v(" "),n("h3",{attrs:{id:"一-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-介绍"}},[s._v("#")]),s._v(" (一)介绍")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pushgateway是一种被动推送数据的方式可以安装在任何主机上\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"二-pushgateway安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-pushgateway安装"}},[s._v("#")]),s._v(" 二：pushgateway安装")]),s._v(" "),n("ul",[n("li",[s._v("安装pushgateway-0.9.1.linux-amd64.tar.gz版本")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1: 添加环境变量\nvi /etc/profile.d/pushgateway.sh\nexport PATH=/opt/modules/pushgateway-0.9.1.linux-amd64:$PATH\n. /etc/profile.d/pushgateway.sh\n\n2: 启动\nnohup pushgateway &\n\n3: 修改prometheus配置，添加pushgateway的监控\n  - job_name: 'pushgateway'\n    static_configs:\n    - targets: ['node1:9091','node1:9092']\n\n4： 启动prometheus\nkill -HUP `ps aux | grep prometheus | grep -v grep  | awk '{print $2}'`\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"三-编写数据采集脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-编写数据采集脚本"}},[s._v("#")]),s._v(" 三：编写数据采集脚本")]),s._v(" "),n("ul",[n("li",[s._v("采集TCP waiting_connection等待连接数")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#!/bin/bash\n\n# 获取主机名\ninstance_name=`hostname`\n\nif [ $instance_name == "localhost" ];then\n  echo "can not be localhost"\n  exit 1\nfi\n\n\n# 定义key\nlabel="count_netstat_connected_connections"\n\n# 获取值\ncount_netstat_connected_connections=`netstat -anp | grep -i connected |wc -l`\n\necho "$label: $count_netstat_connected_connections"\n\n# 使用curl发送post请求，--data-binary 发送二进制数据\n# http://node1:9091/metrics是pushgateway的HTTP端口，\n# job/pushgateway中job是第一个标签，pushgateway是prometheus.yml中定义的job的名称，\n# instance/$instance_name中instance是第二个标签，$instance_name是第二个标签的值，标明是哪个主机\necho "$label $count_netstat_connected_connections" | curl --data-binary @-  http://node1:9091/metrics/job/pushgateway/instance/$instance_name\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"四-自定义的exporter-需要补充内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-自定义的exporter-需要补充内容"}},[s._v("#")]),s._v(" 四：自定义的exporter(需要补充内容)")]),s._v(" "),n("ul",[n("li",[s._v("自定义exporter要求")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：自身是HTTP服务器，可响应外界发过来的Http get请求\n\n2：自身需要运行在后台，可以定义触发本地数据的采集\n\n3：返回给prometheus_server的内容必须符合prometheus的metrics类型（key/value）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);