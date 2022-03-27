(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1821:function(s,n,e){s.exports=e.p+"assets/img/dockerhub.6f353cb9.jpg"},2714:function(s,n,e){"use strict";e.r(n);var a=e(9),r=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一-批量删除停止运行的docker-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-批量删除停止运行的docker-容器"}},[s._v("#")]),s._v(" "),a("code",[s._v("（一）批量删除停止运行的docker 容器")])]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("（1）\n$(docker container ls -aq) # 列出所有的后台运行的container id\ndocker rm $(docker container ls -aq)   # 批量删除后台运行的container, 正在运行的不会删除\n\n（2）或者\ndocker ps -f 'status=exited' -q # 列出已经退出的container id\ndocker rm (docker ps -f 'status=exited' -q) # 删除已经退出的container id\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("启动容器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -itd --name centos centos\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("登录到容器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it centos /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二-dockerfile-全面解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-dockerfile-全面解析"}},[s._v("#")]),s._v(" "),a("code",[s._v("（二）dockerfile 全面解析")])]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1: FROM\n指定基于官方的哪个镜像创建Dockerfile\n\n2：MAINTAINER\n指定镜像的提供者\n\n3: LABEL\n指定镜像的元数据信息\nLABEL desc="made by yhy in 2017.04"\nLABEL version="0.1"\n\n3：RUN（每执行一次RUN都会在原有的镜像中再次添加一层镜像，因此会好将所有的RUN命令写在一行，以便于减少镜像层数）\nRUN yum install -y httpd\n# /bin/bash -c 后面需要接字符串\nRUN ["/bin/bash","-c","yum install -y httpd"]  \n\n4：CMD (设置容器启动后，默认执行的命令和参数)\nCMD命令在dockerfile中只能够有一条，如果用户在运行容器的时候，指定了容器运行的命令，那么CMD命令就会被覆盖掉。因此，其余在构建镜像中执行的命令都用RUN即可\nCMD ["httpd", "-f", "-h", "/web/html"]\nCMD echo "hello"\n\n5：ENTRYPOIT\nENTRYPOIT与CMD类似，不同的是，不会被用户运行容器的时候，指定了容器运行的命令而被覆盖，因此以后用ENTRYPOIT吧 \n\n6：EXPOSE\n指定需要暴露的端口，在运行容器的时候，使用-p选项将宿主机与容器的端口一一映射\nEXPOSE 22 80 3000\n\n7：ENV\n给镜像设置环境变量\nEXPOSE 3000 （我们公司是这样做的）\nENV PORT 3000\n\nENV MYSQL-VERSION 5.7\nRUN yum install mysql-"$(MYSQL-VERSION)"  # 可以在构建镜像的时候引用环境变量\n\n\n8：COPY <src### <dest>\n将宿主机的文件拷贝到容器中，<src>为宿主机的路径为Dockerfile的相对路径，而<dest>为容器中的路径，如果<dest>不存在，会自动创建\n\n8：ADD <src### <dest> （将当前宿主机所在的目录文件拷贝到镜像路径中, src可以是压缩文件，拷贝到dest会解压缩）\nADD hello /  # 将宿主机的hello文件拷贝到镜像的/目录下\n\n8: WORKDIR与ADD联合使用\nWORKDIR /root\nADD hello test/   # 这两步相当于将hello文件拷贝到/root/test/目录下，为/root/test/hello\n\n\n9：VOLUME\nVOLUME 指令创建的挂载点，无法指定主机上对应的目录，是自动生成的\nVOLUME ["/data1","/data2"]\n\n10：USER \n指定运行容器的用户，默认是root\nUSER apache\n\n11：WORKDIR（推荐使用WORKDIR， 不要使用RUN cd, 且尽量使用绝对路径）\n指定工作目录，类似于cd /app, 如果没有会自动创建/app\nWORKDIR /app\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br")])]),a("ul",[a("li",[a("strong",[a("code",[s._v("使用dockerfile构建一个C的代码镜像")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('FROM scratch\nLABEL made by yhy\n# 将hello这个二级制文件加入到根目录下\nADD hello /    \nCMD ["/hello"]\n\n\n\ndocker build -t yhy/hello .\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:e(1821),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("搭建私有的docker registry")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 拉去镜像\ndocker pull registry:2\n\n# 启动一个registry\ndocker run -d -p 127.0.0.1:8004:5000 --name registry -v /data/docker_image:/var/lib/registry  registry:2\n\n# NGINX的server段配置文件\nupstream registry {\n      server 127.0.0.1:8004;\n}\n\n\nserver {\n    listen 443;\n    server_name registry.yhyblog.cn;\n    ssl on;\n    ssl_certificate   "/etc/nginx/1525917516815.pem";\n    ssl_certificate_key  "/etc/nginx/1525917516815.key";\n    ssl_session_timeout 5m;\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n    ssl_prefer_server_ciphers on;\n    client_max_body_size 10240m;\n    location / {\n        proxy_pass     http://registry;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("ul",[a("li",[a("strong",[a("code",[s._v("docker-compose总结")]),s._v("(只适合于本地开发测试，不适合于生产环境)")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1: service ：定义启动的容器\n2：network：定义网络\n3：volume：定义存储\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"三-docker-swarm-全面解析-docker自带的编排工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-docker-swarm-全面解析-docker自带的编排工具"}},[s._v("#")]),s._v(" "),a("code",[s._v("（三）docker swarm 全面解析（docker自带的编排工具）")])]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# (1)创建一个swarm的manager节点\ndocker swarm init --advertise-addr=172.20.10.12  \n\n# (2)创建worker节点添加到manager节点的管理中\ndocker swarm join --token SWMTKN-1-5y8rvnvnakvvzrvpdor16lq2qwca9ha9095pa8wkemzcpwego2-558n6mj3dzpg9inau564ncpkw 172.20.10.12:2377 \n\n# (3)在manager节点查看哪些节点在cluster内部\n[root@swarm1 ~]# docker node ls\nID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS\nigs545fmurqddjdjikp95218z *   swarm1              Ready               Active              Leader\nqnmzzglch6ahkm0c9yfa63wan     swarm2              Ready               Active\n\n# (4)使用docker service create创建container（如果是基于容器编排工具运行容器的话， 不再使用docker run 而是 docker service create， --detach=false表示后台运行 ）\ndocker service create --name demo --detach=false busybox  sh -c "while true; do sleep 3600; done" \n\n# 查看这个demo的container在哪个机器上运行\ndocker service ps demo\n\n# 将service进行扩容为五个container, scale扩展可以保证容器如果停止，可以被重新启动,实现高可用\ndocker service scale demo=5\n\n# 删除一个service\ndocker service rm demo\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"四-使用docker-swarm-搭建wordpress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-使用docker-swarm-搭建wordpress"}},[s._v("#")]),s._v(" （四）使用docker swarm 搭建WordPress")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1：创建一个新的overlay网络（-d 指定网络的驱动， demo是网络的名称）\ndocker network create -d overlay demo\n\n2：查看新的网络\ndocker network ls\n\n3: 运行一个MySQL的容器（这个 --mount type=volume,source=mysql-data, destination=/var/lib/mysql 参数的指定，相当于docker run中的 -v参数， 这里是volume的形式, --network 指定使用新建的demo网络）\ndocker service create --name mysql --env MYSQL_ROOT_PASSWORD=root --env MYSQL_DATABASE=wordpress --env MYSQL_ROOT_PASSWORD=yhy123456  --network demo --mount type=volume,source=mysql-data,destination=/var/lib/mysql mysql\n\n4: 查看MySQL容器在哪个节点运行\ndocker service ps mysql\n\n5： 运行一个WordPress容器\ndocker service create --name wordpress -p 80:80 --network demo  --env WORDPRESS_DB_HOST=mysql --env WORDPRESS_DB_NAME=wordpress --env WORDPRESS_DB_USER=root --env WORDPRESS_DB_PASSWORD=yhy123456 wordpress\n\n6：发现WordPress容器运行在另外一个节点上，可以访问WordPress\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"五-swarm-的-routing-mesh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-swarm-的-routing-mesh"}},[s._v("#")]),s._v(" （五）swarm 的 routing mesh")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("swarm的routing mesh有两种体现\n1：internal   同一个overlay网络之间通过容器的主机名相互访问的时候，访问的不是容器的IP地址，而是一个lvs的虚拟ip的地址，这里类似于lvs + keepalived, 如果是一个容器需要访问多个容器的时候，且被访问多个容器是通过docker service scale 容器名=5，这种方式在swarm集群中扩容的，那么lvs会实现负载均衡调度的能力，默认是轮询调度。\n\n2: ingress    同一个overlay网络之间通过容器的主机名相互访问的时候，如果有一个容器的端口暴露了，那么在swarm 集群中指定任何的宿主机的IP地址+端口都可以访问到这个容器提供的服务\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"六-docker-stack部署wordpress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-docker-stack部署wordpress"}},[s._v("#")]),s._v(" （六）docker stack部署WordPress")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"七-docker-secret可以将数据库这样的密码加密-然后启动mysql容器的时候指定-secret-将密码传递到容器里面-在容器里面读取与这个secret同名的文件-获取mysql的密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-docker-secret可以将数据库这样的密码加密-然后启动mysql容器的时候指定-secret-将密码传递到容器里面-在容器里面读取与这个secret同名的文件-获取mysql的密码"}},[s._v("#")]),s._v(" （七）docker secret可以将数据库这样的密码加密，然后启动MySQL容器的时候指定--secret 将密码传递到容器里面，在容器里面读取与这个secret同名的文件，获取MySQL的密码")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"八-docker-service-update-更新正在运行的service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八-docker-service-update-更新正在运行的service"}},[s._v("#")]),s._v(" （八）docker service update 更新正在运行的service")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"九-使用docker发布django程序-示例程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九-使用docker发布django程序-示例程序"}},[s._v("#")]),s._v(" （九）使用docker发布Django程序（示例程序）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 构建\ndocker build -t feiyu/django-app .\n\n# 运行, 最后在docker容器里面使用uwsgi托起Django程序\ndocker run --name django \\\n-v /usr/src/jianshu \\\n-v /usr/src/jianshu/static \\\n--link mysql:mysql \\\n--link redis:redis \\\n-p 12000:8000 \\\n-d feiyu/django-app /usr/local/bin/uwsgi --http :8000 --chdir /usr/src/jianshu -w jianshu.wsgi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);