(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{2650:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"ansible-主要模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-主要模块"}},[s._v("#")]),s._v(" Ansible 主要模块")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1： 显示ansible自身可调用的模块\nansible-doc -l\n\n2：显示指定模块ping的功能\nansible-doc -s ping\nansible-doc -s command\n\n3：command模块介绍\ncommand模块就是在远程主机上执行命令，执行shell命令的模块，例如下面的 -a：指的是运行命令。而 -m：command可以省略掉，默认就是 -m command，就是执行shell命令。 下面两条命令是一样的结果\nansible  webservers -m command -a "ifconfig"\nansible webservers -a "ifconfig" \n\n4：shell模块介绍\n-m command模块是不支持管道的，如果要支持管道的话，需要使用shell模块\n下面是通过shell模块给被管理主机的yhy用户创建密码\nansible webservers -m command -a "useradd robby"\nansible  webservers -m shell -a "echo \'123\' | passwd --stdin robby" \n\n5：copy模块介绍\n将ansible主机上的文件复制到指定的远程节点上\nansible all -m copy -a "src=/etc/hosts dest=/tmp/hosts"\n当然在复制过程中也可以指定 owner=，group= ，mode= ， 例如:\nansible all -m copy -a "src=/etc/fstab dest=/tmp owner=yhy group=yhy mode=644"\n同样的也可以将内容复制过去。例如\nansible all -m copy -a "content=\'hello i will come back \' dest=/tmp/hello owner=yhy group=yhy mode=644"\n\n6：cron模块\n设置远程节点的cron定时任务，这里的minute指的是时间，job指的是定时任务，name指的是这个定时任务的名称，其实这里隐含了一个state参数，默认的state参数是present，表示是创建名称为synctime的任务\nansible all -m cron -a "minute=*/30 job=\'/usr/sbin/ntpdate time.nist.gov $### /dev/null\' name=time_async"\n既然有创建任务也有删除任务，指定absent就是删除任务\nansible all -m cron -a "state=absent name=time_async"\n\n7：fetch模块(基本不用)\n从远端节点拉取文件到本地，将/etc/fstab拷贝到本机的/tmp目录下\nansible 192.168.43.13 -m fetch -a "src=/etc/fstab  dest=/tmp"\n[root@7 ansible]# ll /tmp/192.168.43.13/etc/fstab \n-rw-r--r-- 1 root root 501 9月  27 19:30 /tmp/192.168.43.13/etc/fstab\n\n8：file模块\n设定被管控主机的文件的属性\n创建链接文件\n创建目录\nansible all -m file -a "src=/tmp/fstab path=/tmp/fstab.link state=link" 给管控主机的文件创建链接文件\nansible 192.168.43.13 -m file -a "path=/root/anaconda-ks.cfg owner=root group=root mode=777"  给被管控主机的文件修改权限和属主\nansible all -m file -a "path=/tmp/tmpdir state=directory" 给被管控主机创建目录\n\n9： hostname模块\n管理远程节点的hostname\nansible 192.168.23.10 -m hostname -a "name=nginx"\n\n10：pip模块\n管理Python库依赖（首先确保pip2已经安装，如果没有安装，需要先安装python2-pip）\n ansible 192.168.43.11 -m pip -a "name=Jinja2"\n\n11：yum模块：\n基于yum管理程序包\nansible all -m yum -a "name=httpd state=latest"  安装httpd程序包,latest表示安装最新的包\nansible all -m yum -a "name=httpd state=absent"  卸载httpd程序包\n\n12：service模块\n管理被监控主机的服务\nansible all -m service -a "name=httpd state=stopped"\nansible all -m service -a "name=httpd enabled=1 runlevel=3" \n\n13：user模块\n管理用户账号，创建用户\nansible all -m user -a "name=user2 system=yes uid=306"\n还可以指定这么多参数：name=  system= yes|no uid= shell= group= groups= comment= home= \n\n13：group模块\n创建用户组，且指定gid\nansible 192.168.23.10 -m group -a "name=apache gid=48"\n\n14: setup模块：\n获取被管控主机的系统指标，拿到这些指标后，ansible就可以直接调用这些系统指标了，就像采集系统数据一样的\nansible 192.168.23.10 -m setup \n\n15: script模块：\n将ansible主机的脚本传递到被管控的主机上执行\nansible 192.168.43.11  -m script -a "/root/useradd.sh"  将本地的/root/useradd.sh脚本在192.168.43.11中执行\n\n16: template模块：\n基于模板的方式生成一个文件复制到被管理的主机，这样就可以在模板语言中判断，不同的系统复制不同的配置文件，这就是template模块区别与copy模块的地方\n\n17：unarchive模块\n将本地的归档文件拷贝到被管控的主机上，解压归档文件\nansible all -m unarchive -a "src=/files/wordpress.tar dest=/data/dynamic/"\n\n18：mount模块\n挂载和卸载模块，path指定本地挂载点，src指定需要挂载的设备\nansible 192.168.23.12 -m mount -a "path=/var/www/html src=192.168.23.25:/data/static  fstype=nfs state=mounted" \n\n小结：这里列举了18个常用的模块，当然，远远不止这18个模块，可以通过ansible-doc -l 查看其他模块，也可以使用ansible-doc -s moduels_name 查看模块的使用方式，还有官方文档\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);