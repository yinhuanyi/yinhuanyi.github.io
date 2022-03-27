(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1631:function(s,a,e){s.exports=e.p+"assets/img/2021-07-194.55.08.2d4c58e9.png"},1632:function(s,a,e){s.exports=e.p+"assets/img/2021-07-195.38.51.86a7c2c0.png"},1633:function(s,a,e){s.exports=e.p+"assets/img/2021-07-195.44.36.c8000078.png"},1634:function(s,a,e){s.exports=e.p+"assets/img/2021-07-195.49.48.925a59ca.png"},1635:function(s,a,e){s.exports=e.p+"assets/img/2021-07-195.51.05.89b1caa6.png"},1636:function(s,a,e){s.exports=e.p+"assets/img/2021-07-196.03.46.4adad791.png"},2613:function(s,a,e){"use strict";e.r(a);var n=e(9),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一-数据建模的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-数据建模的概念"}},[s._v("#")]),s._v(" 一："),n("code",[s._v("数据建模的概念")])]),s._v(" "),n("h3",{attrs:{id:"一-数据建模三部曲"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-数据建模三部曲"}},[s._v("#")]),s._v(" (一)数据建模三部曲")]),s._v(" "),n("ul",[n("li",[s._v("概念模型")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("确定系统的核心需求和范围边界，设计实体和实体之间的关系\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("逻辑模型")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("进一步梳理业务需求，确定每个实体的属性，关系和约束\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("物理模型")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("基于数据库系统：MySQL，Redis，Elasticsearch确定最终物理表模型\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"二-es中数据建模的基本工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-es中数据建模的基本工作"}},[s._v("#")]),s._v(" (二)ES中数据建模的基本工作")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("ES是基于Lucene倒排索引(segment)为基础实现存储")])]),s._v(" "),n("li",[n("p",[s._v("Mapping中字段的设置")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：enabled: [true|false]：仅存储，不做搜索或聚合分析\n\n2：index：[true|false]：是否构建倒排索引，如果为false，不能被搜索\n\n3：index_options：[docs|freqs|positions|offsets]：存储倒排索引哪些信息\n\n4：norms：[true|false]，如果字段仅用于过滤和聚合分析，不算分，可以关闭\n\n5：doc_values：[true|false]，字段是否需要排序和聚合分析\n\n6：filed_data：[true|false]，是否为text类型启用filed_data，实现排序和聚合分析，一般不启用\n\n7：store：[true|false]，是否需要存储字段值，值都存储在_source中，所以不需要\n\n8：coerce：[true|false]，是否开启自动数据类型转换\n\n9：dynamic：[true|false]，控制mapping更新\n\n10：date_detection：[true|false]，是否自动识别日期\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("ul",[n("li",[s._v("mapping的设置流程")])]),s._v(" "),n("p",[n("img",{attrs:{src:e(1631),alt:"Alt text"}})]),s._v(" "),n("ul",[n("li",[s._v("确定字段的类型")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：字符串类型\n\t是否需要分词，需要分词使用text类型，否则使用keyword类型\n\n2：枚举类型\n\t基于性能考虑将其设定为keyword类型，即使数据为整形\n\n3：数值类型\n\t尽量选择贴近的类型\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("确定字段是否需要检索")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：完全不需要检索、排序、聚合分析的字段\n\t将enabled设置为false\n\n2：不需要检索的字段\n\tindex设置为false\n\n3：需要检索的字段，可以通过如下配置设定存储粒度\n\tindex_options 结合需要设定\n\n4：不需要排序和聚合分析\n\tdoc_values 设定为false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("是否需要专门存储当前字段数据")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("将store设置为true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"二-对博客文章创建index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-对博客文章创建index"}},[s._v("#")]),s._v(" 二："),n("code",[s._v("对博客文章创建Index")])]),s._v(" "),n("h3",{attrs:{id:"一-博客文件-blog-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-博客文件-blog-index"}},[s._v("#")]),s._v(" (一) 博客文件 blog_index")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：标题 title\n2：发布日期 publish_date\n3：作者 author\n4：摘要 abstract\n5：网络地址 url\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("blog_index的mapping设置")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('PUT /blog_index\n{\n  "mappings": {\n    "properties": {\n      "title": {\n        "type": "text",\n        "fields": {\n          "keyword": { # 设置keyword在不分词的情况下也可以检索到\n            "type" : "keyword",\n            "ignore_above" : 256\n          }\n        }\n      },\n      "publish_date": {\n        "type": "date"\n      },\n      "author": {\n        "type": "keyword"\n      },\n      "abstract": {\n        "type": "text"\n      },\n      "url": {\n        "enabled": false # 关闭后，默认类型是object\n      }\n    }\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h2",{attrs:{id:"三-es处理关联关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-es处理关联关系"}},[s._v("#")]),s._v(" 三："),n("code",[s._v("ES处理关联关系")])]),s._v(" "),n("h3",{attrs:{id:"一-es不擅长处理关联关系的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-es不擅长处理关联关系的"}},[s._v("#")]),s._v(" (一) ES不擅长处理关联关系的")]),s._v(" "),n("ul",[n("li",[s._v("通过blog_id关联，在ES中可以通过如下两种手段解决")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Nested Object\nParent/Child\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"二-使用nested-object解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-使用nested-object解决"}},[s._v("#")]),s._v(" (二) 使用"),n("code",[s._v("Nested Object")]),s._v("解决")]),s._v(" "),n("p",[n("img",{attrs:{src:e(1632),alt:"Alt text"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("将comments设置为Nested Object，直接将文章的评论嵌入到文章里面\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("查询的时候，这样查询："),n("code",[s._v("需要设定nested字段为comments")])])]),s._v(" "),n("p",[n("img",{attrs:{src:e(1633),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"三-es还提供了类似关系数据库中join的实现方式-使用join数据类型实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-es还提供了类似关系数据库中join的实现方式-使用join数据类型实现"}},[s._v("#")]),s._v(" (三) ES还提供了类似关系数据库中join的实现方式，使用join数据类型实现")]),s._v(" "),n("p",[n("img",{attrs:{src:e(1634),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"四-如何选择"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-如何选择"}},[s._v("#")]),s._v(" (四) 如何选择")]),s._v(" "),n("p",[n("img",{attrs:{src:e(1635),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"四-es的reindex操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-es的reindex操作"}},[s._v("#")]),s._v(" 四："),n("code",[s._v("ES的Reindex操作")])]),s._v(" "),n("h3",{attrs:{id:"一-重新创建所有数据的过程-一般会发生在如下情况中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-重新创建所有数据的过程-一般会发生在如下情况中"}},[s._v("#")]),s._v(" (一) 重新创建所有数据的过程，一般会发生在如下情况中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：mapping 设置变跟，比如字段类型变化，分词器字典更新\n\n2：index的settings变更，比如说shard数变更\n\n3：数据迁移\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("ES提供了API完成该工作")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：_update_by_query：在现有索引上重建\n\n2：_reindex：在其他索引上重建\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"二-reindex-允许将source的数据重建到dest"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-reindex-允许将source的数据重建到dest"}},[s._v("#")]),s._v(" (二) Reindex 允许将source的数据重建到dest")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("新建一个索引，并且设置好settings和mapping，例如新索引的名称为："),n("code",[s._v("new_new_index")])])]),s._v(" "),n("li",[n("p",[s._v("将source的数据重建到dest中")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('POST /_reindex\n{\n  "source": {\n    "index": "new_index"\n  },\n  "dest": {\n    "index": "new_new_index"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ul",[n("li",[s._v("如果新文档里面有数据，可以让Elasticsearch强制性的将文档转储到目标中，覆盖具有相同类型和ID的任何内容")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('POST /_reindex\n{\n  "source": {\n    "index": "new_index"\n  },\n  "dest": {\n    "index": "new_new_index",\n    "version_type": "internal"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("https://www.cnblogs.com/Ace-suiyuan008/p/9985249.html  记录一下")])]),s._v(" "),n("h3",{attrs:{id:"三-异步reindex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-异步reindex"}},[s._v("#")]),s._v(" (三) 异步reindex")]),s._v(" "),n("p",[n("img",{attrs:{src:e(1636),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"四-从远程进行reindex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-从远程进行reindex"}},[s._v("#")]),s._v(" (四) 从远程进行reindex")]),s._v(" "),n("ul",[n("li",[s._v("这里必须修改本地ES的elasticsearch.yaml文件，设置"),n("code",[s._v("reindex.remote.whitelist: 10.122.0.26:9200")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('POST _reindex\n{\n  "source": {\n    "index": "blogs",\n    "remote": {\n      "host": "http://remote_cluster_node1:9200",\n      "username": "USERNAME",\n      "password": "PASSWORD"\n    }\n  },\n  "dest": {\n    "index": "blogs"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("如果是curl请求")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('curl -X POST 192.168.100.203:9200/_reindex -H \'Content-Type: application/json\' -d \'\n{\n  "source": {\n    "index": "market_deals",\n    "remote": {\n      "host": "http://10.122.0.26:9200"\n    }\n  },\n  "dest": {\n    "index": "market_deals"\n  }\n}\n\'\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[s._v("连接vpn的命令")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd /etc/openvpn/meili/ && openvpn --config meili.ovpn --ca ca.crt --dev tun\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);