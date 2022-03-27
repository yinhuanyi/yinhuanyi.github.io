(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{2146:function(s,n,e){"use strict";e.r(n);var a=e(9),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-安装-kong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-安装-kong"}},[s._v("#")]),s._v(" 一：安装 Kong")]),s._v(" "),a("h3",{attrs:{id:"一-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-安装"}},[s._v("#")]),s._v(" (一)：安装")]),s._v(" "),a("ul",[a("li",[s._v("安装postgresql")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('sudo docker run -d --name kong-database -p 5432:5432 -e "POSTGRES_USER=kong" -e "POSTGRES_DB=kong" -e "POSTGRES_PASSWORD=kong" postgres:12\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("连接到postgresql")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("psql -hlocalhost -p5432 -Ukong\n密码也是kong\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("这里是初始化postgresql的表")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('docker run --rm -e "KONG_DATABASE=postgres" -e "KONG_PG_HOST=192.168.100.203" -e "KONG_PG_PASSWORD=kong" -e "POSTGRES_USER=kong" -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" kong kong migrations bootstrap\n\n\n# 执行完毕后，显示\nsession migrated up to: 000_base_session (executed)\nsession migrated up to: 001_add_ttl_index (executed)\n41 migrations processed\n41 executed\nDatabase is up-to-date\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("Ubuntu 18.04安装kong")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('echo "deb [trusted=yes] https://download.konghq.com/gateway-2.x-ubuntu-$(lsb_release -sc)/ default all" | sudo tee /etc/apt/sources.list.d/kong.list \n\nsudo apt-get update\n\nsudo apt install -y kong\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"二-配置kong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-配置kong"}},[s._v("#")]),s._v(" (二)：配置kong")]),s._v(" "),a("ul",[a("li",[s._v("配置文件修改")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cp /etc/kong/kong.conf.default /etc/kong/kong.conf\nvi /etc/kong/kong.conf\n\n# 内容如下\ndatabase = postgres             \npg_host = 192.168.100.203             \npg_port = 5432                 \npg_timeout = 5000                          \npg_user = kong                  \npg_password = kong                \npg_database = kong             \npg_schema = kong\n\n# 这里是配置cosul的地址\ndns_resolver = 192.168.100.203:8600\n\n# \nadmin_listen = 0.0.0.0:8001 reuseport backlog=16384, 0.0.0.0:8444 http2 ssl reuseport backlog=16384\n\n# \nproxy_listen = 0.0.0.0:8000 reuseport backlog=16384, 0.0.0.0:8443 http2 ssl reuseport backlog=16384\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("ul",[a("li",[s._v("启动")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 如果之前没有使用docker初始化表数据，那么现在可以使用配置初始化表数据\n# kong migrations bootstrap up -c /etc/kong/kong.conf\n\n# 启动kong\nkong migrations bootstrap # 更新数据表\nkong start -c /etc/kong/kong.conf # 启动\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("访问http://192.168.100.203:8000/")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("正常访问，说明启动成功\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"三-安装kong的图形化工具kongka"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-安装kong的图形化工具kongka"}},[s._v("#")]),s._v(" (三)：安装kong的图形化工具kongka")]),s._v(" "),a("ul",[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d -p 1337:1337 --name konga pantsel/konga\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("访问konga")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://192.168.100.203:1337/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("填写kong admin的信息")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(595),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("konga和kong直接的作用关系")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(596),alt:"Alt text"}})]),s._v(" "),a("h2",{attrs:{id:"二-配置kong-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-配置kong-2"}},[s._v("#")]),s._v(" 二：配置Kong")]),s._v(" "),a("h3",{attrs:{id:"一-kong的service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-kong的service"}},[s._v("#")]),s._v(" (一) Kong的service")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Service：就是我们自己定义的上游服务，通过Kong匹配到相应的请求要转发的地方，Service可以与下面的Route进行关联，一个Service可以有很多Route，匹配到的Route就会转发到Service中，当然中间也会通过Plugin的处理，增加或者减少一些相应的Header或者其他信息")])]),s._v(" "),a("li",[a("p",[s._v("Routes：路由相当于Nginx配置中的location，"),a("code",[s._v("Route实体定义匹配客户端请求的规则，每个路由都与一个服务相关联，而服务可能有多个与之相关联的路由")]),s._v("，每个匹配给定路线的请求都将被提交给它的相关服务。路由和服务的组合提供了一种强大的路由机制，"),a("code",[s._v("可以在kong中定义细粒度的入口点，从而引导您访问到不同的upstream服务中")]),s._v("，这点和Nginx配置很像")])])]),s._v(" "),a("h3",{attrs:{id:"二-创建kong的service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-创建kong的service"}},[s._v("#")]),s._v(" (二) 创建Kong的service")]),s._v(" "),a("ul",[a("li",[s._v("创建一个goods-web Service")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(597),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在goods-web Service下创建Routes实例（这个Paths是路由路径）\n"),a("img",{attrs:{src:e(598),alt:"Alt text"}})])]),s._v(" "),a("li",[a("p",[s._v("那么就可以通过kong访问goods-web服务了, kong的端口是8000")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://192.168.100.203:8000/g/v1/goods\n\n或者\n\nhttp://192.168.100.203:8000/g/v1/goods\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"三-创建kong的service从consul中获取goods-web的ip和端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-创建kong的service从consul中获取goods-web的ip和端口"}},[s._v("#")]),s._v(" (三) 创建Kong的service从consul中获取goods-web的IP和端口")]),s._v(" "),a("ul",[a("li",[s._v("只需要修改Host和Port，kong会从consul获取goods-web的IP和端口")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(599),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("将goods-web服务的端口设置为随机端口，修改main.go文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\t// 7：如果是debug为true，为配置文件中的端口号，如果是false，随机端口号\n\tviper.AutomaticEnv()\n\tdebug := viper.GetBool("ALL_SERVER_DEBUG")\n\t// debug为false\n\tdebug = false\n\tif !debug {\n\t\tport, err := utils.GetFreePort()\n\t\tif err == nil {\n\t\t\tglobal.Conf.Port = port\n\t\t}\n\t}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("再启动一个goods-web进程")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("go run goods_web/main.go goods_web/config-debug.yaml\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("再次请求kong的goods-web服务，就可以发现kong进行了负载均衡了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://192.168.100.203:8000/v1/goods\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"四-kong的plugin插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-kong的plugin插件"}},[s._v("#")]),s._v(" (四) kong的plugin插件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("kong的插件有很多：这里主要以JWT插件的配置讲解为例对plugin进行说明")])]),s._v(" "),a("li",[a("p",[s._v("配置过程")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1：新建一个consumer\n\n2：为这个consumer添加jwt，点击credentials，要记住key为ipfsmain，与gin框架中的Issuer保持一致，才能正确解析\n\n3：配置全局的plugin\n\t设置header names为x-token\n\t\n4：在jwt生成token\n\t在 https://jwt.io 网站上生成，playload中添加一个字段，"iss":"ipfsmain", 将consumers中的credentials中的jwt生成的secret填写到【VERIFY SIGNATURE】中的secret中，生成一个token\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("此时使用生成的token，在postman可以获取goods列表")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(600),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("但是注意：这里的jwt认证功能是Kong控制的，业务层中也会校验每个请求的jwt")])]),s._v(" "),a("li",[a("p",[s._v("那么如果把goods商品的接口，加上jwt认证，那么此时再次访问就会被拒绝")])]),s._v(" "),a("li",[a("p",[s._v("因此，这里还需要考虑到业务层的jwt认证，因此先将kong中的consumers的credentials的jwt删除掉，重新生成，这里生成的时候需注意的是，key为ipfmain，secret与gin框架中的secret保持一致")])]),s._v(" "),a("li",[a("p",[s._v("重新在https://jwt.io 网站上生成一个token")])]),s._v(" "),a("li",[a("p",[s._v("当前已经将goods的路由添加了jwt校验，以前的x-token是不带Bearer的，现在是带有Bearer，因此需要修改一下jwt.go中JWTAuth中间件的代码")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 此时的从x-token中获取的是 Bearer Token, 这里是获取到Token的值\n\t\ttoken = strings.Split(token, " ")[1] // 如果使用了kong作为api网关，那么需要加上一个Bearer，所以这里\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("再次访问，发现可以访问了")])]),s._v(" "),a("h2",{attrs:{id:"三-此时就可以将所有的gin框架开发的web服务都添加到kong中-让kong进行负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-此时就可以将所有的gin框架开发的web服务都添加到kong中-让kong进行负载均衡"}},[s._v("#")]),s._v(" 三：此时就可以将所有的gin框架开发的web服务都添加到Kong中，让Kong进行负载均衡")]),s._v(" "),a("h3",{attrs:{id:"一-以后总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-以后总结"}},[s._v("#")]),s._v(" (一) 以后总结")])])}),[],!1,null,null,null);n.default=t.exports},595:function(s,n,e){s.exports=e.p+"assets/img/2021-07-239.44.06.f269784b.png"},596:function(s,n,e){s.exports=e.p+"assets/img/2021-07-239.52.20.03b616ad.png"},597:function(s,n,e){s.exports=e.p+"assets/img/2021-07-2310.38.32.3a1bd56a.png"},598:function(s,n,e){s.exports=e.p+"assets/img/2021-07-2311.13.17.e7a39a7a.png"},599:function(s,n,e){s.exports=e.p+"assets/img/2021-07-2311.32.08.79ea5730.png"},600:function(s,n,e){s.exports=e.p+"assets/img/2021-07-232.25.04.09cb142c.png"}}]);