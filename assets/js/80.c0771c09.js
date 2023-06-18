(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1781:function(s,n,t){s.exports=t.p+"assets/img/2020-05-2411.27.09.29dece2b.png"},1782:function(s,n,t){s.exports=t.p+"assets/img/2020-05-2411.28.18.483625fa.png"},1783:function(s,n,t){s.exports=t.p+"assets/img/2020-05-2411.31.03.7c3289e5.png"},1784:function(s,n,t){s.exports=t.p+"assets/img/2020-05-2411.33.29.bfa7e9a8.png"},1785:function(s,n,t){s.exports=t.p+"assets/img/2020-05-2411.48.00.d2e21faf.png"},1786:function(s,n,t){s.exports=t.p+"assets/img/2020-05-2411.50.16.beaf7b1d.png"},1787:function(s,n,t){s.exports=t.p+"assets/img/2020-05-242.19.53.50630ed7.png"},2696:function(s,n,t){"use strict";t.r(n);var a=t(9),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-zabbix-自动发现进程配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-zabbix-自动发现进程配置"}},[s._v("#")]),s._v(" 一：Zabbix 自动发现进程配置")]),s._v(" "),a("ul",[a("li",[s._v("创建新模板")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1781),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("在模板上创建一个自动发现规则")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1782),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("给发现规则配置过滤器，也就是配置宏变量")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1783),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("在发现规则上，配置监控项原型")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1784),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("west-yw4-1")]),s._v("主机上的/tmp/目录下，创建一个"),a("code",[s._v("/tmp/proc.discovery.sh")]),s._v("脚本")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#!/bin/bash\n# get the list service if running in the server\nprintf '{\\n'\nprintf '\\t\"data\":[\\n'\n\ngetservice() {\n        ps axu | grep -v grep | grep $1 &> /dev/null\n        if [ $? == 0 ];then\n                if [ $1 != 'sshd' ]; then\n                        printf '\\t {\\n'\n                        echo '\"{#PROCNAME}\":' \\\"$1\\\" '},'\n                else\n                        printf '\\t {\\n'\n                        echo '\"{#PROCNAME}\":' \\\"$1\\\" '}'\n                fi\n        fi\n}\n\nservices=\"httpd mysqld haproxy sshd\"\n\nfor srv in $services;do\n        getservice $srv\ndone\nprintf '\\t ]\\n'\n\nprintf '}\\n'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("ul",[a("li",[s._v("执行脚本, 会输出一个jons格式的字符串，json中有{#PROCNAME}宏变量对应的数据")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('root@west-yw4-1:~# bash /tmp/proc.discovery.sh\n{\n\t"data":[\n\t {\n"{#PROCNAME}": "mysqld" },\n\t {\n"{#PROCNAME}": "sshd" }\n\t ]\n}\nroot@west-yw4-1:~#\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("在被监控主机的/etc/zabbix/zabbix_agentd.conf文件中，添加名称执行的参数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("UserParameter=proc.discovery,/bin/bash /tmp/proc.discovery.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("重启zabbix-agent")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl restart zabbix-agent\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在"),a("code",[s._v("west-yw4-1")]),s._v("主机上链接ipfsmain模板")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1785),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("此时在"),a("code",[s._v("west-yw4-1")]),s._v("主机的监控项中会发现已经存在自动发现的监控项了")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1786),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("查看最新的监控数据")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1787),alt:"Alt text"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);