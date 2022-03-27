(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{2583:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-将kafka数据写入mysql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-将kafka数据写入mysql数据库"}},[s._v("#")]),s._v(" 一：将Kafka数据写入MySQL数据库")]),s._v(" "),a("h3",{attrs:{id:"一-添加mysql依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-添加mysql依赖"}},[s._v("#")]),s._v(" (一)添加MySQL依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    \x3c!-- java连接MySQL --\x3e\n    <dependency>\n      <groupId>mysql</groupId>\n      <artifactId>mysql-connector-java</artifactId>\n      <version>5.1.45</version>\n    </dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"二-启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-启动服务"}},[s._v("#")]),s._v(" (二)启动服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1: node2、node3启动日志写入服务\nbash weblog-shell.sh\n\n2: 三台节点启动flume\nbash flume-agent-start.sh\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"三-spark代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-spark代码"}},[s._v("#")]),s._v(" (三)spark代码")]),s._v(" "),a("ul",[a("li",[s._v("main文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.spark.test\n\nimport org.apache.spark.sql.SparkSession\nimport org.apache.log4j.{Level, Logger}\nimport org.apache.spark.sql.execution.streaming.ProcessingTimeExecutor\nimport org.apache.spark.sql.streaming.ProcessingTime\n\n\n/**\n  * Description:    \n  * Author:         Robby\n  * CreateDate:     2019-09-02 16:08\n  * Version:        1.0.0\n  */\nobject StructureStreamingKafka extends  App {\n\n//    Logger.getLogger("org").setLevel(Level.WARN)\n\n    case class Weblogs(datetime:   String,\n                      userid:     String,\n                      searchname: String,\n                      retorder:   String,\n                      cliorder:   String,\n                      cliurl:     String)\n\n\n    val spark = SparkSession\n        .builder()\n        .master("local[2]")\n        .appName("structure streaming")\n        .getOrCreate()\n\n    // 从kafka获取数据\n    val df = spark.readStream\n        .format("kafka")\n        .option("kafka.bootstrap.servers", "node1:9092,node2:9092,node3:9092")\n        .option("subscribe", "weblogs")\n//        .option("startingOffsets", "latest")\n//        .option("auto.offset.reset", "latest")\n        .load()\n\n    import spark.implicits._\n\n    // 将DataFrame转换为Dataset， 且只取value值\n    // kafka的数据模型为：00:00:20,683385,[三国之见龙卸甲影片],8,1,www.29192.com.html\n    val line = df.selectExpr("CAST(value AS STRING)").as[String]\n\n    // 将每一行的数据赋值给Weblogs类, 对searchname字段分组，计算个数，转换为DataFrame\n    val words = line.map(x=### x.split(","))\n        .map(x =### Weblogs(x(0), x(1), x(2), x(3), x(4), x(5)))\n        .groupBy("searchname")\n        .count()\n        // 将每一行数据转换为DataFrame，在Sink中取每一行数据的时候，可以使用dataframe.getAs()方法\n        .toDF("titleName", "count")\n\n    // 设置MySQL属性\n    val url = "jdbc:mysql://node1:3306/test"\n    val username = "root"\n    val password = "yhy3426356"\n\n    // 初始化writer, write完成了MySQL数据的实时更新操作\n    var writer = new JDBCSink(url, username, password)\n\n    val query = words.writeStream\n            // 给foreach传递自定义的writer\n            .foreach(writer)\n            .outputMode("complete")\n            // 输出到控制台\n//            .format("console")\n            .trigger(ProcessingTime("25 seconds"))\n            .start()\n\n    query.awaitTermination()\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br")])]),a("ul",[a("li",[s._v("mysqlSink文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.spark.test\n\nimport java.sql.{Connection, DriverManager, ResultSet, Statement}\n\nimport org.apache.spark.sql.{ForeachWriter, Row}\n\n\n/**\n  * Description:    \n  * Author:         Robby\n  * CreateDate:     2019-09-02 21:32\n  * Version:        1.0.0\n  */\n\n// 这个是自定义的sink\nclass JDBCSink(url: String, username: String, password: String) extends ForeachWriter[Row]{\n    // 连接\n    var connection: Connection = _\n    // 类似游标\n    var statement: Statement = _\n    // 查询的结果集\n    var resultSet: ResultSet = _\n\n    // 打开一个数据库连接\n    override def open(partitionId: Long, version: Long): Boolean = {\n        Class.forName("com.mysql.jdbc.Driver")\n        connection = DriverManager.getConnection(url, username, password)\n        statement = connection.createStatement()\n        return true\n    }\n\n    // 处理每一行数据\n    override def process(value: Row): Unit = {\n        // 这里的value是dataframe\n        // 只要匹配到[]就替换为空\n        val titleName = value.getAs[String]("titleName").replaceAll("[\\\\[\\\\]]", "")\n        val count = value.getAs[Long]("count")\n        println(titleName)\n\n        // 这样通过SQL的方式去更新，那spark内存中维护无边界表就越来越多\n        val querySql = s"select count(*) from webcount where titleName = \'$titleName\'"\n        val updateSql = s"update webcount set count = $count where titleName = \'$titleName\'"\n        val insertSql = s"insert into webcount(titleName, count) values (\'$titleName\', \'$count\')"\n\n        // 先查询\n        var resultSet = statement.executeQuery(querySql)\n\n\n        println(resultSet)\n        println(resultSet.next())\n\n        // 如果存在就更新count\n        if (resultSet.next()){\n            statement.executeUpdate(updateSql)\n\n        }else{  // 如果不存在就直接插入count\n\n            statement.execute(insertSql)\n        }\n    }\n\n    // 关闭所有连接\n    override def close(errorOrNull: Throwable): Unit = {\n\n        if (statement == null){\n            statement.close()\n        }\n\n        if (connection == null){\n            connection.close()\n        }\n\n    }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br")])]),a("h3",{attrs:{id:"四-mysql数据库中的结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-mysql数据库中的结果"}},[s._v("#")]),s._v(" (四)MySQL数据库中的结果")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------------------+-------+\n| titleName                                | count |\n+-----------------------------------------+-------+\n| 莎朗斯通+本能                            |     1 |\n| 特种部队的大跳                          |     1 |\n| 范跑跑                                  |     1 |\n| 开车什么速度换档合适                     |     1 |\n| 李成儒+离婚                              |     1 |\n| 救灾帐篷                                |     2 |\n| 北京房价暴跌                             |     2 |\n| 韩国首都为什么改名                       |     1 |\n| 女王男奴                                |     1 |\n| h                                       |     2 |\n| 甜品店                                  |     2 |\n| 木板加工厂                               |     2 |\n| 珠海健康中心                             |     2 |\n| 有声小说下载                             |     1 |\n| *.huang+zhan+图                          |     1 |\n| site:fs2you.com+清代官员履历档案全编     |     2 |\n| 哄抢救灾物资                             |    10 |\n| 新疆奇人艾米尔                          |     2 |\n| DXXDXX                                  |     1 |\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);