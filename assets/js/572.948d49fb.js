(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{2608:function(s,n,t){"use strict";t.r(n);var a=t(9),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("strong",[s._v("这里使用的是"),t("code",[s._v("olivere/elastic")]),s._v("，这个库，所有的使用方法都可以在wiki中找到")])])]),s._v(" "),t("h2",{attrs:{id:"一-实践过程中碰到的困难点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-实践过程中碰到的困难点"}},[s._v("#")]),s._v(" 一："),t("code",[s._v("实践过程中碰到的困难点")])]),s._v(" "),t("h3",{attrs:{id:"一-单个es节点-必须让es监听在外网ip-golang才能访问到节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-单个es节点-必须让es监听在外网ip-golang才能访问到节点"}},[s._v("#")]),s._v(" (一) 单个ES节点，必须让ES监听在外网IP，golang才能访问到节点")]),s._v(" "),t("ul",[t("li",[s._v("如果ES监听到0.0.0.0，那么会报错提示")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("no active connection found: no Elasticsearch node available\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("解决方法：初始化ES客户端时候，关闭sniffer嗅探器，设置为false")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("client, err := elastic.NewClient(elastic.SetErrorLog(errorLog), elastic.SetURL(host), elastic.SetSniff(false))\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二-插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-插入数据"}},[s._v("#")]),s._v(" 二："),t("code",[s._v("插入数据")])]),s._v(" "),t("h3",{attrs:{id:"一-直接指定索引名称-添加数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-直接指定索引名称-添加数据"}},[s._v("#")]),s._v(" (一) 直接指定索引名称，添加数据")]),s._v(" "),t("ul",[t("li",[s._v("指定索引名称为"),t("code",[s._v("spark_test1")]),s._v("， 写入结构体中的数据")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('client, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\nif err != nil {\n\tpanic(err)\n}\n\nfmt.Println("connect to es success")\n\np := Person{Name: "rion", Age: 22, Married: false}\nret, err := client.Index().\n\tIndex("spark_test1").\n\tBodyJson(p).\n\tDo(context.Background())\nif err != nil {\n\t// Handle error\n\tpanic(err)\n}\n\nfmt.Println(ret)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ul",[t("li",[s._v("这个里面直接向索引中写入"),t("code",[s._v("字符串")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('client, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\nif err != nil {\n\n\tpanic(err)\n}\n\nfmt.Println("connect to es success")\n\n//p := Person{Name: "rion", Age: 22, Married: false}\np := `{"name": "robby", "age": 22, "married": false}`\nret, err := client.Index().\n\tIndex("spark_test1").\n\tBodyString(p).\n\tDo(context.Background())\nif err != nil {\n\tpanic(err)\n}\n\nfmt.Println(ret)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"三-查询数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-查询数据"}},[s._v("#")]),s._v(" 三："),t("code",[s._v("查询数据")])]),s._v(" "),t("h3",{attrs:{id:"一-基于id查询数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-基于id查询数据"}},[s._v("#")]),s._v(" (一) 基于id查询数据")]),s._v(" "),t("ul",[t("li",[s._v("代码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('client, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\nif err != nil {\n\n\tpanic(err)\n}\n\nret, err := client.Get().\n\tIndex("spark_test1").\n\tId("CwdTmXoBDF2KmowbBpXR").\n\tDo(context.Background())\n\nif err != nil {\n\tpanic(err)\n}\n\nif ret.Found {\n\tfmt.Printf("%s\\n", ret.Source)\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"四-更新数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-更新数据"}},[s._v("#")]),s._v(" 四："),t("code",[s._v("更新数据")])]),s._v(" "),t("h3",{attrs:{id:"一-基于id更新数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-基于id更新数据"}},[s._v("#")]),s._v(" (一) 基于id更新数据")]),s._v(" "),t("ul",[t("li",[s._v("代码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('client, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\n\nif err != nil {\n\tpanic(err)\n}\n\nret, err := client.Update().\n\tIndex("spark_test1").\n\tId("CwdTmXoBDF2KmowbBpXR").\n\tDoc(map[string]interface{}{"age": 1000}).\n\tDo(context.Background())\n\t\nif err != nil {\n\tpanic(err)\n}\n\nfmt.Printf("%s\\n", ret)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"五-删除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-删除数据"}},[s._v("#")]),s._v(" 五："),t("code",[s._v("删除数据")])]),s._v(" "),t("h3",{attrs:{id:"一-基于id删除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-基于id删除数据"}},[s._v("#")]),s._v(" (一) 基于id删除数据")]),s._v(" "),t("ul",[t("li",[s._v("代码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('client, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\n\nif err != nil {\n\tpanic(err)\n}\n\nret, err := client.Delete().\n\tIndex("spark_test1").\n\tId("CwdTmXoBDF2KmowbBpXR").\n\tDo(context.Background())\n\nif err != nil {\n\tpanic(err)\n}\n\nfmt.Printf("%s\\n", ret.Result)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"六-搜索数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-搜索数据"}},[s._v("#")]),s._v(" 六："),t("code",[s._v("搜索数据")])]),s._v(" "),t("h3",{attrs:{id:"一-查询一个索引下的所有数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-查询一个索引下的所有数据"}},[s._v("#")]),s._v(" (一) 查询一个索引下的所有数据")]),s._v(" "),t("ul",[t("li",[s._v("代码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('client, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\nif err != nil {\n\tpanic(err)\n}\n\nret, err := client.Search("spark_test").Do(context.Background())\n\nif err != nil {\n\tpanic(err)\n}\nvar p Person\n// 遍历索引中所有的数据\nfor _, item := range ret.Each(reflect.TypeOf(p)) {\n\tt := item.(Person)\n\tfmt.Printf("%#v\\n", t)\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"二-查询单个-字符串-字段-newquerystringquery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-查询单个-字符串-字段-newquerystringquery"}},[s._v("#")]),s._v(" (二) 查询单个(字符串)字段，NewQueryStringQuery")]),s._v(" "),t("ul",[t("li",[s._v("使用queryString，查询出，age为28的记录")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('client, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\nif err != nil {\n\tpanic(err)\n}\n\nret, err := client.Search("spark_test").Query(elastic.NewQueryStringQuery("age: 28")).Do(context.Background())\n\nif err != nil {\n\tpanic(err)\n}\nvar p Person\n// 遍历索引中所有的数据, 这里用到了reflect反射\nfor _, item := range ret.Each(reflect.TypeOf(p)) {\n\tt := item.(Person)\n\tfmt.Printf("%#v\\n", t)\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ul",[t("li",[s._v("也可以使用"),t("code",[s._v("Hits")]),s._v("，获取查询结果，这里会先判断一下，是否搜索到")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\tclient, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tret, err := client.Search("spark_test").Query(elastic.NewQueryStringQuery("age: 28")).Do(context.Background())\n\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tif ret.Hits.TotalHits.Value ### 0 {\n\t\tfmt.Printf("%d\\n", ret.Hits.TotalHits.Value)\n\n\t\tp := new(Person)\n\t\t// 这里是获取搜索到的数据， 使用ret.Hits.Hits\n\t\tfor _, hit := range ret.Hits.Hits {\n\t\t\terr = json.Unmarshal(hit.Source, p)\n\t\t\tif err != nil {\n\t\t\t\tpanic(err)\n\t\t\t}\n\t\t\tfmt.Printf("%v - %d\\n", p.Married, p.Age)\n\t\t}\n\t}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h3",{attrs:{id:"三-查询单个-bool-字段-这里有多个条件的查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-查询单个-bool-字段-这里有多个条件的查询"}},[s._v("#")]),s._v(" (三) 查询单个(bool)字段(这里有多个条件的查询)")]),s._v(" "),t("ul",[t("li",[s._v("查询字段")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\tclient, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// boolQueue\n\tboolQueue := elastic.NewBoolQuery()\n\tboolQueue.Must(elastic.NewMatchQuery("name", "rion"))\n\tboolQueue.Filter(elastic.NewRangeQuery("age").Gt(20))\n\n\tret, err := client.Search("spark_test").Query(boolQueue).Do(context.Background())\n\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tif ret.Hits.TotalHits.Value ### 0 {\n\t\tfmt.Printf("%d\\n", ret.Hits.TotalHits.Value)\n\n\t\tp := new(Person)\n\t\t// 这里是获取搜索到的数据， 使用ret.Hits.Hits\n\t\tfor _, hit := range ret.Hits.Hits {\n\t\t\terr = json.Unmarshal(hit.Source, p)\n\t\t\tif err != nil {\n\t\t\t\tpanic(err)\n\t\t\t}\n\t\t\tfmt.Printf("%v - %d\\n", p.Name, p.Age)\n\t\t}\n\t}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("h3",{attrs:{id:"四-短语匹配查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-短语匹配查询"}},[s._v("#")]),s._v(" (四) 短语匹配查询")]),s._v(" "),t("ul",[t("li",[s._v("查询字段")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\tclient, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// 短语匹配\n\tmatchPhrase := elastic.NewMatchPhraseQuery("name", "like")\n\n\tret, err := client.Search("spark_test").Query(matchPhrase).Do(context.Background())\n\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tif ret.Hits.TotalHits.Value ### 0 {\n\t\tfmt.Printf("%d\\n", ret.Hits.TotalHits.Value)\n\n\t\tp := new(Person)\n\t\t// 这里是获取搜索到的数据， 使用ret.Hits.Hits\n\t\tfor _, hit := range ret.Hits.Hits {\n\t\t\terr = json.Unmarshal(hit.Source, p)\n\t\t\tif err != nil {\n\t\t\t\tpanic(err)\n\t\t\t}\n\t\t\tfmt.Printf("%v - %d\\n", p.Name, p.Age)\n\t\t}\n\t}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h3",{attrs:{id:"五-分页查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-分页查询"}},[s._v("#")]),s._v(" (五) 分页查询")]),s._v(" "),t("ul",[t("li",[s._v("列表分页查询")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\tpSize := 1\n\tpage := 2\n\n\tclient, err := elastic.NewClient(elastic.SetURL("http://192.168.100.203:9200"))\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tp := new(Person)\n\tret, err := client.Search("spark_test").Size(pSize).From((page - 1) * pSize).Do(context.Background())\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tfor _, hit := range ret.Hits.Hits {\n\t\terr = json.Unmarshal(hit.Source, p)\n\t\tif err != nil {\n\t\t\tpanic(err)\n\t\t}\n\t\tfmt.Printf("%v - %d\\n", p.Married, p.Age)\n\t}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"六-写入数据-需要将数据刷新打磁盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-写入数据-需要将数据刷新打磁盘"}},[s._v("#")]),s._v(" (六) 写入数据，需要将数据刷新打磁盘")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 将索引刷新到磁盘，释放内存\n_, err = client.Flush().Index("twitter").Do(ctx)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);