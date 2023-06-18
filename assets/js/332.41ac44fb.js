(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{2150:function(s,n,a){"use strict";a.r(n);var t=a(9),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-配置中心-nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-配置中心-nacos"}},[s._v("#")]),s._v(" 一：配置中心 nacos")]),s._v(" "),a("h3",{attrs:{id:"一-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-安装"}},[s._v("#")]),s._v(" (一)：安装")]),s._v(" "),a("ul",[a("li",[s._v("使用docker安装(容器启动失败了)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --name nacos-standalone -e JVM_XMS=512m -e JVM_XMX=512m -e JVM_XMN=256m -e MODE=standalone -p 8848:8848 -d nacos/nacos-server:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("访问nacos")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://192.168.100.203:8848/nacos/index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-概念"}},[s._v("#")]),s._v(" (二)：概念")]),s._v(" "),a("ul",[a("li",[s._v("命名空间")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("可以隔离配置集，将某个配置放在某个命名空间下\n命名空间是用来区分微服务\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("组")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("组一般用于区别微服务的开发环境，测试环境，生产环境\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("dataid 配置集")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("一个配置集就是一个配置文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二-python-集成-nacos-https-github-com-nacos-group-nacos-sdk-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-python-集成-nacos-https-github-com-nacos-group-nacos-sdk-python"}},[s._v("#")]),s._v(" 二：Python 集成 nacos (https://github.com/nacos-group/nacos-sdk-python)")]),s._v(" "),a("h3",{attrs:{id:"一-集成方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-集成方法"}},[s._v("#")]),s._v(" (一)：集成方法")]),s._v(" "),a("ul",[a("li",[s._v("安装"),a("code",[s._v("nacos sdk")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install nacos-sdk-python\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("服务中需要用到配置的地方，是"),a("code",[s._v("user_srv/settings/setting.py")]),s._v("模块")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 1：nacos的配置\nNACOS = {\n    "Host": "192.168.100.203",\n    "Port": 8848,\n    "NameSpace": "eee6b77f-47b2-45da-ade6-dd816290f8cc",\n    "User": "nacos",\n    "Password": "nacos",\n    "DataId": "user-srv",\n    "Group": "dev"\n}\n\n# 2：创建nacos client\nclient = nacos.NacosClient("{}:{}".format(NACOS["Host"], NACOS["Port"]),\n                           namespace=NACOS["NameSpace"],\n                           username=NACOS["User"],\n                           password=NACOS["Password"])\n\n# 3：获取nacos配置数据\ndata = client.get_config(NACOS["DataId"], NACOS["Group"])\ndata = json.loads(data)\nlogger.info(data)\n\n# 4：下面是填充配置数据到全局变量中\n# MySQL配置\nMYSQL_DB = data["mysql"]["db"]\nMYSQL_HOST = data["mysql"]["host"]\nMYSQL_PORT = data["mysql"]["port"]\nMYSQL_USER = data["mysql"]["user"]\nMYSQL_PASSWORD = data["mysql"]["password"]\n\n# Consul配置\nCONSUL_HOST = data["consul"]["host"]\nCONSUL_PORT = data["consul"]["port"]\n\n# user-srv配置\nSERVICE_NAME = data["name"]\nSERVICE_TAGS = data["tags"]\nSERVICE_IP = data["ip"]\n\n\n\nDB = ReconectMysqlDatabase(MYSQL_DB,\n                           host=MYSQL_HOST,\n                           port=MYSQL_PORT,\n                           user=MYSQL_USER,\n                           password=MYSQL_PASSWORD)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("ul",[a("li",[s._v("如果nacos的配置更新了，可以在server.py中注册一个回调函数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 监听nacos配置的修改\nsetting.client.add_config_watcher(setting.NACOS[\"DataId\"], setting.NACOS[\"Group\"], setting.update_cfg)\n\n\n# 回调函数如下\n# 如果nacos配置更新了，那么直接重新覆盖全局配置即可。这里不好做\ndef update_cfg(args):\n    logger.info('配置文件更新')\n    data = json.loads(args['raw_content'])\n    print(data)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"三-golang-集成-nacos-https-github-com-nacos-group-nacos-sdk-go-blob-master-readme-cn-md"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-golang-集成-nacos-https-github-com-nacos-group-nacos-sdk-go-blob-master-readme-cn-md"}},[s._v("#")]),s._v(" 三：golang 集成 nacos (https://github.com/nacos-group/nacos-sdk-go/blob/master/README_CN.md)")]),s._v(" "),a("h3",{attrs:{id:"一-集成方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-集成方法-2"}},[s._v("#")]),s._v(" (一)：集成方法")]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("all-server/user_web/initailize/config.go")]),s._v("中，需要完成两个工作")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1：第一个工作是基于viper解析，user_web/config-debug.yaml文件中定义的nacos的配置，并且映射到NacosConf结构体\n\n2：基于NacosConf结构体信息，获取nacos中，user-web的json配置信息，将json数据映射到Conf结构体\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("all-server/user_web/initailize/config.go")]),s._v("中具体代码如下")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// GetEnvInfo 获取环境变量的值，新设置的环境变量，必须关闭所有的golang，重启，才会生效\nfunc GetEnvInfo(env string) bool {\n\tviper.AutomaticEnv()\n\treturn viper.GetBool(env)\n}\n\n\n\n// InitConfig 从nacos上获取配置文件\nfunc InitConfig() (err error) {\n\t//  在golang设置了work dir路径为：/Users/yinhuanyi/Yinhuanyi_Project/all-server, 所以任何配置开始是从all-server往下找\n\t/*\n\t1：加载nacos的配置信息\n\t*/\n\tdebug := GetEnvInfo("ALL_SERVER_DEBUG")\n\tfmt.Printf("debug=%v\\n", debug)\n\tconfigFileName := "user_web/config-pro.yaml"\n\tif debug {\n\t\tconfigFileName = "user_web/config-debug.yaml"\n\t}\n\tviper.SetConfigFile(configFileName)\n\tif err = viper.ReadInConfig(); err != nil {\n\t\tzap.L().Error("配置文件读取失败", zap.Error(err))\n\t\tfmt.Printf("配置文件读取失败: %v\\n", err)\n\t\treturn\n\t}\n\t// 这里只对nacos结构体进行赋值\n\tif err = viper.Unmarshal(global.NacosConf); err != nil {\n\t\tzap.L().Error("配置文件读取失败", zap.Error(err))\n\t\tfmt.Printf("配置文件映射到结构体失败")\n\t\treturn\n\t}\n\tviper.WatchConfig()\n\tviper.OnConfigChange(func(in fsnotify.Event) {\n\t\tfmt.Printf("配置文件修改了")\n\t\tzap.L().Info("配置文件修改了")\n\t\tif err = viper.Unmarshal(global.NacosConf); err != nil {\n\t\t\tzap.L().Info("配置文件映射到结构体失败")\n\t\t\tfmt.Printf("配置文件映射到结构体失败")\n\t\t\treturn\n\t\t}\n\t})\n\n\n\t/*\n\t2：从nacos的配置文件中，获取配置数据\n\t*/\n\t// nacos\n\tserverConfigs := []constant.ServerConfig{\n\t\t{\n\t\t\tIpAddr:     global.NacosConf.Host,\n\t\t\t//ContextPath: "/nacos",\n\t\t\tPort:        global.NacosConf.Port,\n\t\t\tScheme:      "http",\n\t\t},\n\t}\n\n\t// nacos\n\tclientConfig := constant.ClientConfig{\n\t\tNamespaceId:         global.NacosConf.Namespace, // 如果需要支持多namespace，我们可以场景多个client,它们有不同的NamespaceId。当namespace是public时，此处填空字符串。\n\t\tTimeoutMs:           5000,\n\t\tNotLoadCacheAtStart: true,\n\t\tLogDir:              "initailize/tmp/nacos/log",\n\t\tCacheDir:            "initailize/tmp/nacos/cache",\n\t\tRotateTime:          "1h",\n\t\tMaxAge:              3,\n\t\tLogLevel:            "debug",\n\t}\n\n\t// 创建client\n\tconfigClient, err := clients.CreateConfigClient(map[string]interface{}{\n\t\t"serverConfigs": serverConfigs,\n\t\t"clientConfig":  clientConfig,\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tcontent, err := configClient.GetConfig(\n\t\tvo.ConfigParam{\n\t\t\tDataId: global.NacosConf.DataId,\n\t\t\tGroup:  global.NacosConf.Group,\n\t\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\t// 解析nacos的json配置文件\n\terr = json.Unmarshal([]byte(content), global.Conf)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// 监听配置文件的变化\n\t//err = configClient.ListenConfig(vo.ConfigParam{\n\t//\tDataId: global.NacosConf.DataId,\n\t//\tGroup:  global.NacosConf.Group,\n\t//\tOnChange: func(namespace, group, dataId, data string) {\n\t//\t\tfmt.Println("配置文件改变了")\n\t//\t\tfmt.Println("group:" + group + ", dataId:" + dataId + ", data:" + data)\n\t//\t\terr = json.Unmarshal([]byte(data), global.Conf)\n\t//\t\tif err != nil {\n\t//\t\t\tpanic(err)\n\t//\t\t}\n\t//\t},\n\t//})\n\t//if err != nil {\n\t//\tpanic(err)\n\t//}\n\n\treturn\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);