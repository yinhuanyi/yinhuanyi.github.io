(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1549:function(s,a,n){s.exports=n.p+"assets/img/peizhi.0b0a4e91.jpg"},2581:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-主机规划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-主机规划"}},[s._v("#")]),s._v(" 一：主机规划")]),s._v(" "),e("h3",{attrs:{id:"一-节点服务分配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-节点服务分配"}},[s._v("#")]),s._v(" (一)节点服务分配")]),s._v(" "),e("ul",[e("li",[s._v("知识点说明：\n"),e("ul",[e("li",[s._v("1：资源分配，1G内存")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:n(1549),alt:"Alt text"}})]),s._v(" "),e("h3",{attrs:{id:"二-设置主机名无密码通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-设置主机名无密码通信"}},[s._v("#")]),s._v(" (二)设置主机名无密码通信")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：编辑/etc/hosts文件\n192.168.43.201 node1\n192.168.43.201 node2\n192.168.43.201 node3\n\n\n2：设置kfk用户，可以无密码切换到root，编辑/etc/sudoers文件\nkfk        ALL=(ALL)       NOPASSWD: ALL\n\n3：免密码\nssh-keygen -t rsa -P ''\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"三-安装java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-安装java"}},[s._v("#")]),s._v(" (三)安装java")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("查看java安装包\nrpm -qa | grep java\n\n删除不需要的java sdk包\nrpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.65-3.b17.el7.x86_64 java-1.7.0-openjdk-headless-1.7.0.91-2.6.2.3.el7.x86_64 java-1.8.0-openjdk-1.8.0.65-3.b17.el7.x86_64   java-1.7.0-openjdk-1.7.0.91-2.6.2.3.el7.x86_64\n\n创建软件目录\nrm -fr /opt/rh\nmkdir /opt/{datas,modules,softwares,tools}\n\n下载jdk-1.8或直接yum安装\nyum -y install java-1.8.0*\n\n设置JAVA_HOME\nvi /etc/profile.d/java.sh\nexport JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.222.b10-0.el7_6.x86_64\nexport PATH=$JAVA_HOME/bin:$PATH\n\n. /etc/profile.d/java.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);