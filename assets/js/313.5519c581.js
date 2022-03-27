(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1708:function(s,a,t){s.exports=t.p+"assets/img/2018-08-2412.33.17.864c0013.png"},2669:function(s,a,t){"use strict";t.r(a);var n=t(9),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_1-准备工作-参考文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作-参考文档"}},[s._v("#")]),s._v(" 1. 准备工作 "),n("a",{attrs:{href:"https://about.gitlab.com/installation",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("以Centos7为例，准备一台至少内存为4G内存的服务器主机。如果小于4G内存，会出现502错误。")]),s._v(" "),n("h3",{attrs:{id:"_2-安装依赖软件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装依赖软件"}},[s._v("#")]),s._v(" 2. 安装依赖软件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo yum install -y git vim gcc glibc-static telnet\nsudo yum install -y curl policycoreutils-python openssh-server\nsudo systemctl enable sshd\nsudo systemctl start sshd\n\nsudo yum install postfix\nsudo systemctl enable postfix\nsudo systemctl start postfix\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_3-设置gitlab安装源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置gitlab安装源"}},[s._v("#")]),s._v(" 3. 设置gitlab安装源")]),s._v(" "),n("p",[s._v("如果在国内的话，可以尝试使用清华大学的源。")]),s._v(" "),n("p",[s._v("新建 /etc/yum.repos.d/gitlab-ce.repo，内容为")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[gitlab-ce]\nname=Gitlab CE Repository\nbaseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el$releasever/\ngpgcheck=0\nenabled=1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("如果在国外的话，可以使用")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_4-安装gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装gitlab"}},[s._v("#")]),s._v(" 4. 安装GitLab")]),s._v(" "),n("p",[s._v("关于域名，如果要是设置域名，则如下，这个域名可以是真实购买的域名，如果您要把gitlab安装到公网比如阿里云上的话。")]),s._v(" "),n("p",[s._v("如果只是想本地测试，则可以像下面一样，设置一个gitlab.9xkd.com的域名，然后记得在本地你的笔记本设置host, Linux就在 /etc/hosts里添加 一行 "),n("code",[s._v("192.168.1.110 gitlab.9xkd.com")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('sudo EXTERNAL_URL="http://gitlab.9xkd.com" yum install -y gitlab-ce\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果不想设置域名，或者想将来再考虑，可以直接")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo yum install -y gitlab-ce\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装完成以后，运行下面的命令进行配置(会安装所有的gitlab所需依赖)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo gitlab-ctl reconfigure\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装完毕后，可以查看目前gitlab所需的组件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@master ~]# gitlab-ctl status\nrun: alertmanager: (pid 1807) 34281s; run: log: (pid 1794) 34281s\nrun: gitaly: (pid 1815) 34281s; run: log: (pid 1800) 34281s\nrun: gitlab-exporter: (pid 1824) 34281s; run: log: (pid 1816) 34281s\nrun: gitlab-workhorse: (pid 1805) 34281s; run: log: (pid 1796) 34281s\nrun: grafana: (pid 1822) 34281s; run: log: (pid 1817) 34281s\nrun: logrotate: (pid 29557) 1880s; run: log: (pid 1798) 34281s\nrun: nginx: (pid 4355) 33215s; run: log: (pid 1818) 34281s\nrun: node-exporter: (pid 1819) 34281s; run: log: (pid 1814) 34281s\nrun: postgres-exporter: (pid 1806) 34281s; run: log: (pid 1797) 34281s\nrun: postgresql: (pid 1810) 34281s; run: log: (pid 1803) 34281s\nrun: prometheus: (pid 1808) 34281s; run: log: (pid 1795) 34281s\nrun: redis: (pid 1809) 34281s; run: log: (pid 1801) 34281s\nrun: redis-exporter: (pid 1812) 34281s; run: log: (pid 1802) 34281s\nrun: sidekiq: (pid 1813) 34281s; run: log: (pid 1799) 34281s\nrun: unicorn: (pid 1811) 34281s; run: log: (pid 1804) 34281s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_5-登陆和修改密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-登陆和修改密码"}},[s._v("#")]),s._v(" 5. 登陆和修改密码")]),s._v(" "),n("p",[s._v("打开http://gitlab.9xkd.com修改root用户密码，然后使用root和新密码登陆。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1708),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"_6-gitlab相关的配置修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-gitlab相关的配置修改"}},[s._v("#")]),s._v(" 6. gitlab相关的配置修改")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/etc/gitlab/gitlab.rb：文件中，保存了gitlab的相关配置, 可以直接修改。如果需要修改端口，那么\n\tnginx['listen_port'] = 81\n\texternal_url 'http://gitlab.yhyblog.cn:81'\n\t\n\ngitlab-ctl reconfigure：修改完毕之后，需要运行重新配置gitlab的各个组件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);