(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{2652:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"ansible-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-安装"}},[s._v("#")]),s._v(" Ansible 安装")]),s._v(" "),a("ul",[a("li",[s._v("Ansible安装与配置")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": 在ansible主机上安装ansible\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y ansible \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：配置文件介绍\n主配置文件：/etc/ansible/ansible.cfg\n主程序： \n    ansible\n    ansible-playbook \n    ansible-doc -l 可以列出所有的ansible所支持的模块\n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：在ansible的配置目录中一共有三个文件\n\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18066")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("月   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 05:49 ansible.cfg\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1016")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("月   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 05:49 hosts\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("月   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 05:49 roles\nhosts文件是用来指定被ansible管理的主机，也就是资产清单\nroles是用来指定每一个节点的角色\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": 编辑hosts文件（hosts文件有些注释的说明，可以先删除）, 只要是hosts文件中定义的主机都可被ansible管理\n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ansible/hosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Inventory文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定web服务的主机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.202\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.202\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定db服务的主机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbservers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.202\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.203\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.205\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("：ansible不需要启动，就像一个脚本程序一样，可以直接的运行（确保所有的主机都必须安装Python）\nansible all -m "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的all指的是所有在hosts文件中定义的主机 -m：表示调用ansible自带的模块ping，对所有被管控的主机执行ping操作")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("：获取所有的ansible的模块列表，模块的使用\nansible-doc -l ：查看哪些模块可以用\nansible-doc -s module_name：查看如何使用模块\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("ul",[a("li",[a("strong",[a("code",[s._v("Ansible初体验")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1： 显示ansible自身可调用的模块\nansible-doc -l\n\n2：显示指定模块ping的功能\nansible-doc -s ping\n\n3：command模块介绍\ncommand模块就是在远程主机上执行命令，执行shell命令的模块，例如下面的 -a：指的是运行命令。而 -m：command可以省略掉，默认就是 -m command，就是执行shell命令。 下面两条命令是一样的结果\nansible  webservers -m command -a "ifconfig"\nansible webservers -a "ifconfig"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);