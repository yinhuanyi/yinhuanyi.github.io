(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{2465:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"一-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-安装"}},[s._v("#")]),s._v(" (一)：安装")]),s._v(" "),n("ul",[n("li",[s._v("从 PYPI 安装")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pip install influxdb-async\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("从 Github 安装")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("pip isntall git+https://github.com/yinhuanyi/influxdb-async.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"二-使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-使用方法"}},[s._v("#")]),s._v(" (二)：使用方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from influxdb_async import InfluxdbMultiFieldsAsync\n\n\nhost = '100.122.0.2'\nport = 8086\ndatabase = 'db1'\nmeasurement = 'measurement1'\n               {\"value\": 2}, \n               {\"value\": 3}]\nusername = 'username'\npassword = 'password'\n\n# 如果influxdb没有用户名和密码\nwith InfluxdbMultiFieldsAsync(host, port, database, measurement, tags, fields_list) as influxdb:\n    influxdb.start()\n    \n    \n# 如果influxdb有用户名和密码\nwith InfluxdbMultiFieldsAsync(host, port, database, measurement, tags, fields_list, username=username, password=password) as influxdb:\n    influxdb.start()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"三-influxdb显示效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-influxdb显示效果"}},[s._v("#")]),s._v(" (三)：influxdb显示效果")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("> use db1;\nUsing database db1\n> select * from measurement1;\nname: measurement1\ntime                env  host    value\n----                ---  ----    -----\n1591946958016786087 env1 server1 1\n1591946958229993773 env1 server1 2\n1591946958438736358 env1 server1 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);