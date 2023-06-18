(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{2249:function(n,s,t){"use strict";t.r(s);var e=t(9),a=Object(e.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"一-etcd功能与原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-etcd功能与原理"}},[n._v("#")]),n._v(" 一：etcd功能与原理")]),n._v(" "),e("h3",{attrs:{id:"一-etcd作为服务发现系统的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-etcd作为服务发现系统的特点"}},[n._v("#")]),n._v(" (一) etcd作为服务发现系统的特点")]),n._v(" "),e("ul",[e("li",[n._v("特点")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1：简单：安装配置简单，而且提供了HTTP API进行交互，使用也很简单\n2：安全：支持SSL证书验证\n3：快速：根据官方提供的benchmark数据，单实例支持每秒2k+读操作\n4：允许外部应用实时的监听K-V变化\n5：可靠：采用raft算法，实现分布式系统数据的可用性和一致性\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("ul",[e("li",[n._v("etcd应用场景")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Etcd要解决服务发现的问题，需要下面三大支柱，缺一不可\n\t1：一个强一致性、高可用的服务存储目录：raft协议\n\t2：一种注册服务和健康服务健康状况的机制：对注册的服务配置key生存时间值，保持服务的心跳以达到监控健康状态的效果\n\t3：一种查找和连接服务的机制：在主题下注册的服务，能在对应的主题下查找到\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("ul",[e("li",[n._v("Etcd与Raft的关系")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1：Raft是强一致性集群日志同步算法\n2：Etcd基于Raft算法在集群中同步K/V\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("ul",[e("li",[e("strong",[n._v("Etcd高性能写入的原理")]),n._v("（集群需要2N+1个节点）")])]),n._v(" "),e("p",[e("img",{attrs:{src:t(775),alt:"Alt text"}})]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1：客户端请求leader写入数据\n2：Leader基于raft协议，将数据同步到Follow\n3：只要满足N+1个Follow同步到了数据，那么Leader执行本地提交事务，且响应客户端请求\n4：最后Leader将本地的提交事务同步到所有Follow\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br")])]),e("h2",{attrs:{id:"二-etcd搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-etcd搭建"}},[n._v("#")]),n._v(" 二：etcd搭建")]),n._v(" "),e("ul",[e("li",[n._v("在github上下载Realease版本")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# -listen-client-urls 用于指定etcd和客户端的连接端口\n# -advertise-client-urls 用于指定etcd服务器之间通讯的端口 \nnohup ./etcd  --listen-client-urls 'http://0.0.0.0:2379' --advertise-client-urls 'http://0.0.0.0:2379' > ./etcd.log 2>&1 &\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("h2",{attrs:{id:"三-etcd相关操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-etcd相关操作"}},[n._v("#")]),n._v(" 三：etcd相关操作")]),n._v(" "),e("ul",[e("li",[e("strong",[n._v("Etcd的watch功能，可以很容易的监听到key的变化，因此很适合服务注册发现和配置更新业务")])])]),n._v(" "),e("h3",{attrs:{id:"一-安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-安装依赖"}},[n._v("#")]),n._v(" (一) 安装依赖")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("go get -u go.etcd.io/etcd/client/v3\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("h3",{attrs:{id:"二-golang-crud-etcd操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-golang-crud-etcd操作"}},[n._v("#")]),n._v(" (二) Golang CRUD Etcd操作")]),n._v(" "),e("ul",[e("li",[n._v("PUT操作")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('func main() {\n\t\n\t// 生成配置\n\tconfig := clientv3.Config{\n\t\tEndpoints: []string{"127.0.0.1:2379"},\n\t\tDialTimeout: 5 * time.Second,\n\t}\n\n\t// 创建连接\n\tclient, err := clientv3.New(config)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tdefer client.Close()\n\n\t// 读写k/v客户端\n\tkvClient := clientv3.NewKV(client)\n\t\n\t// 写入数据\n\tputResp, err := kvClient.Put(context.Background(), "/cron/jobs/job1", "hello1", clientv3.WithPrevKV())\n\tif err !=nil {\n\t\tfmt.Println(err)\n\t}\n\t\n\t// 输出：3\n\tfmt.Println(putResp.Header.Revision)\n\t// 输出：hello\n\tfmt.Println(putResp.PrevKv.Value)\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br")])]),e("ul",[e("li",[n._v("GET**"),e("code",[n._v("key")]),n._v("**操作")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 创建读写k/v客户端\nkvClient := clientv3.NewKV(client)\n\n// 查询\ngetResp, err := kvClient.Get(context.Background(), "/cron/jobs/job1")\nif err !=nil {\n\tfmt.Println(err)\n}\n\n// 输出：[key:"/cron/jobs/job1" create_revision:2 mod_revision:3 version:2 value:"hello1" ]\nfmt.Println(getResp.Kvs)\n// 输出：1\nfmt.Println(getResp.Count)\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br")])]),e("ul",[e("li",[n._v("GET "),e("strong",[e("code",[n._v("目录")])]),n._v(" 操作")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 读写k/v客户端\nkvClient := clientv3.NewKV(client)\n\ngetResp, err := kvClient.Get(context.Background(), "/cron/jobs/", clientv3.WithPrefix())\nif err !=nil {\n\tfmt.Println(err)\n}\n\n// 输出：[key:"/cron/jobs/job1" create_revision:2 mod_revision:3 version:2 value:"hello1"  key:"/cron/jobs/job2" create_revision:4 mod_revision:4 version:1 value:"hello2" ]\nfmt.Println(getResp.Kvs)\n// 输出：2\nfmt.Println(getResp.Count)\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br")])]),e("ul",[e("li",[n._v("DELETE 操作")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 删除单个key\ndeleteResp, err := kvClient.Delete(context.Background(), "/cron/jobs/job2", clientv3.WithPrevKV())\n// 删除目录下所有的key\n//deleteResp, err := kvClient.Delete(context.Background(), "/cron/jobs、", clientv3.WithPrefix()) \nif err !=nil {\n\tfmt.Println(err)\n}\n\n// 查看长度\nif len(deleteResp.PrevKvs) != 0 {\n\tfor _, kvPair := range deleteResp.PrevKvs { // 遍历以前的key\n\t\tfmt.Println("删除了：", string(kvPair.Key), string(kvPair.Value))\n\t}\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br")])]),e("h3",{attrs:{id:"三-设置key过期以及自动续约"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-设置key过期以及自动续约"}},[n._v("#")]),n._v(" (三) 设置key过期以及自动续约")]),n._v(" "),e("ul",[e("li",[n._v("代码如下")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('func main() {\n\n\t// 生成配置\n\tconfig := clientv3.Config{\n\t\tEndpoints: []string{"127.0.0.1:2379"},\n\t\tDialTimeout: 5 * time.Second,\n\t}\n\n\t// 创建连接\n\tclient, err := clientv3.New(config)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tdefer client.Close()\n\n\t// 申请租约， 申请一个10秒的租约\n\tlease := clientv3.NewLease(client)\n\tleaseGrantResp, err := lease.Grant(context.Background(), 10)\n\tif err !=nil {\n\t\tfmt.Println(err)\n\t}\n\t\n\t// 获取租约ID\n\tleaseId := leaseGrantResp.ID\n\n\t// 让这个leaseId自动续租，到了9秒就续租\n\tkeepRespChan, err := lease.KeepAlive(context.Background(), leaseId)\n\tif err !=nil {\n\t\tfmt.Println(err)\n\t}\n\n\t// 验证自动续约\n\tgo func() {\n\t\tfor {\n\t\t\tselect {\n\t\t\tcase keepResp := <- keepRespChan:\n\t\t\t\tif keepRespChan == nil {\n\t\t\t\t\tfmt.Println("租约已经失效了")\n\t\t\t\t\t// 跳出for循环\n\t\t\t\t\tgoto END\n\t\t\t\t}else { // 每秒续租一次，所以会收到一次应答\n\t\t\t\t\tfmt.Printf("收到自动续租的应答: %#v\\n", keepResp)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tEND:\n\t}()\n\n\t// 写入数据\n\tkv := clientv3.NewKV(client)\n\tputResp, err := kv.Put(context.Background(), "/cron/lock/job1", "", clientv3.WithLease(leaseId))\n\tif err !=nil {\n\t\tfmt.Println(err)\n\t}\n\tfmt.Println("写入成功：", putResp.Header.Revision)\n\n\n\t// 定时看下key是否过期, 使用for循环一直查看\n\tvar getResp *clientv3.GetResponse\n\tfor {\n\t\tgetResp, err = kv.Get(context.Background(), "/cron/lock/job1")\n\t\tif err !=nil {\n\t\t\tfmt.Println(err)\n\t\t}\n\t\tif getResp.Count == 0 {\n\t\t\tfmt.Println("kv过期了")\n\t\t\tbreak\n\t\t}\n\t\tfmt.Println("还没有过期：", getResp.Kvs)\n\t\ttime.Sleep(2 * time.Second)\n\t}\n\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br")])]),e("h3",{attrs:{id:"四-watch监听etcd的kv数据变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-watch监听etcd的kv数据变化"}},[n._v("#")]),n._v(" (四) watch监听Etcd的kv数据变化")]),n._v(" "),e("ul",[e("li",[n._v("监听kv的PUT和Delete变化")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('func main() {\n\n\t// 生成配置\n\tconfig := clientv3.Config{\n\t\tEndpoints: []string{"127.0.0.1:2379"},\n\t\tDialTimeout: 5 * time.Second,\n\t}\n\n\t// 创建连接\n\tclient, err := clientv3.New(config)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tdefer client.Close()\n\n\t// 模拟kv变化, 先创建kv，然后删除\n\tkv := clientv3.NewKV(client)\n\tgo func() {\n\t\tfor {\n\t\t\tkv.Put(context.Background(), "/cron/jobs/job3", "i am job3")\n\t\t\tkv.Delete(context.Background(), "/cron/jobs/job3")\n\t\t\ttime.Sleep(1 * time.Second)\n\t\t}\n\t}()\n\n\t// 先查询到值，然后再watch变化\n\tgetResp, err := kv.Get(context.Background(), "/cron/jobs/job3")\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\n\t// 如果可以获取到数据\n\tif len(getResp.Kvs) != 0 {\n\t\tfmt.Println("当前值：", string(getResp.Kvs[0].Value))\n\t}\n\n\t// 获取 "/cron/jobs/job3" 当前的revisionID后一个ID值，表示从这个ID开始监听\n\twatchStartRevision := getResp.Header.Revision + 1\n\n\t// 创建一个watch\n\twatcher := clientv3.NewWatcher(client)\n\n\tfmt.Printf("从当前%d开始监听\\n", watchStartRevision)\n\n\t// 开始监控, 5秒后停止监控\n\tctx, _ := context.WithTimeout(context.Background(), 5 * time.Second)\n\twatchRespChan := watcher.Watch(ctx, "/cron/jobs/job3", clientv3.WithRev(watchStartRevision))\n\n\t// 从通道中获取事件\n\tfor watchResp := range watchRespChan {\n\t\t// 获取事件\n\t\tfor _, event := range watchResp.Events {\n\t\t\tswitch event.Type {\n\t\t\tcase mvccpb.DELETE:\n\t\t\t\tfmt.Printf("这是一个Delete操作, ModRevision=%d\\n", event.Kv.ModRevision)\n\t\t\tcase mvccpb.PUT:\n\t\t\t\tfmt.Printf("这是一个Put操作, value=%s, CreateRevision=%d, ModRevision=%d\\n", event.Kv.Value, event.Kv.CreateRevision, event.Kv.ModRevision)\n\t\t\t}\n\t\t}\n\t}\n}\n\n\n// 输出结果：\n从当前36开始监听\n这是一个Put操作, value=i am job3, CreateRevision=36, ModRevision=36\n这是一个Delete操作, ModRevision=37\n这是一个Put操作, value=i am job3, CreateRevision=38, ModRevision=38\n这是一个Delete操作, ModRevision=39\n这是一个Put操作, value=i am job3, CreateRevision=40, ModRevision=40\n这是一个Delete操作, ModRevision=41\n这是一个Put操作, value=i am job3, CreateRevision=42, ModRevision=42\n这是一个Delete操作, ModRevision=43\n这是一个Put操作, value=i am job3, CreateRevision=44, ModRevision=44\n这是一个Delete操作, ModRevision=45\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br")])]),e("h3",{attrs:{id:"五-option操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-option操作"}},[n._v("#")]),n._v(" (五) Option操作")]),n._v(" "),e("ul",[e("li",[n._v("在Etcd中，可以将"),e("code",[n._v("所有的CRUD操作")]),n._v("都抽象为OP操作")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('func main() {\n\n\t// 生成配置\n\tconfig := clientv3.Config{\n\t\tEndpoints: []string{"127.0.0.1:2379"},\n\t\tDialTimeout: 5 * time.Second,\n\t}\n\n\t// 创建连接\n\tclient, err := clientv3.New(config)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tdefer client.Close()\n\n\t// 模拟kv变化\n\tkv := clientv3.NewKV(client)\n\n\t// 创建putOp\n\tputOp := clientv3.OpPut("/cron/jobs/job8", "haha")\n\t// 执行opResp\n\topResp, err := kv.Do(context.Background(), putOp)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\n\tfmt.Printf("写入Revision：%d\\n", opResp.Put().Header.Revision)\n\n\t// 创建getOp\n\tgetOp := clientv3.OpGet("/cron/jobs/job8" )\n\t// 执行getOp\n\topResp, err = kv.Do(context.Background(), getOp)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tfmt.Printf("查询的value：%s\\n", opResp.Get().Kvs[0].Value)\n}\n\n\n// 输出：\n写入Revision：48\n查询的value：haha\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br")])]),e("h2",{attrs:{id:"四-etcd事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-etcd事务"}},[n._v("#")]),n._v(" 四：etcd事务")]),n._v(" "),e("h3",{attrs:{id:"一-基于option操作、txn事务实现乐观锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-基于option操作、txn事务实现乐观锁"}},[n._v("#")]),n._v(" (一) 基于Option操作、txn事务实现乐观锁")]),n._v(" "),e("ul",[e("li",[n._v("主要思路："),e("code",[n._v("申请租约、创建key、执行业务、删除租约让key失效")])])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('func main() {\n\n\t// 生成配置\n\tconfig := clientv3.Config{\n\t\tEndpoints: []string{"127.0.0.1:2379"},\n\t\tDialTimeout: 5 * time.Second,\n\t}\n\n\t// 创建连接\n\tclient, err := clientv3.New(config)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tdefer client.Close()\n\n\t// 模拟kv变化\n\tkv := clientv3.NewKV(client)\n\n\t// lease实现锁自动过期\n\t// op操作\n\t// txn事务\n\n\t// 1：上锁\n\tlease := clientv3.NewLease(client)\n\tleaseGrantResp, err := lease.Grant(context.Background(), 5)\n\tif err !=nil {\n\t\tfmt.Println(err)\n\t}\n\t// 获取租约ID\n\tleaseId := leaseGrantResp.ID\n\n\t// 创建context，用于取消自动续租\n\tctx, cancel := context.WithCancel(context.Background())\n\tdefer cancel() // 取消context\n\tdefer lease.Revoke(context.TODO(), leaseId) // 取消lease，让key过期\n\n\tkeepRespChan, err := lease.KeepAlive(ctx, leaseId)\n\tif err !=nil {\n\t\tfmt.Println(err)\n\t}\n\n\tgo func() {\n\t\tfor {\n\t\t\tselect {\n\t\t\tcase keepResp := <- keepRespChan:\n\t\t\t\tif keepRespChan == nil { // 如果租约被remove了,通道关闭了，就会获取到nil\n\t\t\t\t\tfmt.Println("租约已经失效了")\n\t\t\t\t\t// 跳出for循环\n\t\t\t\t\tgoto END\n\t\t\t\t}else { // 每秒续租一次，所以会收到一次应答\n\t\t\t\t\tfmt.Printf("收到自动续租的应答: %d\\n", keepResp.ID)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\tEND:\n\t}()\n\n\ttxn := kv.Txn(context.Background())  // 创建事务\n\t// 如果CreateRevision创建成功，表明key过期，创建key，也就是添加锁\n\ttxn.If(clientv3.Compare(clientv3.CreateRevision("/cron/lock/job9"), "=", 0)). // 判断key是否已经存在，如果存在返回1，不存在返回0\n\t\tThen(clientv3.OpPut("/cron/lock/job9", "", clientv3.WithLease(leaseId))).  // 创建key\n\t\tElse(clientv3.OpGet("/cron/lock/job9")) // 抢锁失败\n\n\ttxnResp, err := txn.Commit() // 提交事务\n\tif err !=nil {\n\t\tfmt.Println(err)\n\t}\n\t// 如果没有创建key，也就是没有抢到锁\n\tif !txnResp.Succeeded {\n\t\tfmt.Println("锁被占用", string(txnResp.Responses[0].GetResponseRange().Kvs[0].Value))\n\t\treturn\n\t}\n\n\t// 2：处理业务\n\tfmt.Println("处理业务")\n\ttime.Sleep(30 * time.Second)\n\n\t// 3：执行完业务后，必须释放锁(取消自动续租，并且释放租约)\n\tfmt.Println("执行defer操作")\n\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br"),e("span",{staticClass:"line-number"},[n._v("81")]),e("br"),e("span",{staticClass:"line-number"},[n._v("82")]),e("br")])])])}),[],!1,null,null,null);s.default=a.exports},775:function(n,s,t){n.exports=t.p+"assets/img/2021-08-101.59.33.83697696.png"}}]);