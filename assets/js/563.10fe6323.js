(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{2582:function(s,a,e){"use strict";e.r(a);var n=e(9),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"一-普通自定义函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-普通自定义函数"}},[s._v("#")]),s._v(" 一：普通自定义函数")]),s._v(" "),e("h3",{attrs:{id:"一-标量函数-scalarfunction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-标量函数-scalarfunction"}},[s._v("#")]),s._v(" (一)：标量函数（ScalarFunction）")]),s._v(" "),e("ul",[e("li",[s._v("使用扩展基类"),e("code",[s._v("ScalarFunction")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Add(ScalarFunction):\n  def eval(self, i, j):\n    return i + j\n\nadd = udf(Add(), result_type=DataTypes.BIGINT())\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("使用普通函数(最方便)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("def add(i, j):\n  return i + j\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("使用lambda函数")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("add = udf(lambda i, j: i + j, result_type=DataTypes.BIGINT())\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("使用callable函数")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class CallableAdd(object):\n  def __call__(self, i, j):\n    return i + j\n\nadd = udf(CallableAdd(), result_type=DataTypes.BIGINT())\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("使用partial函数")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("def partial_add(i, j, k):\n  return i + j + k\n\nadd = udf(functools.partial(partial_add, k=1), result_type=DataTypes.BIGINT())\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("将UDF函数进行注册，且使用自定义函数对字段进行处理")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 注册Python自定义函数\ntable_env.create_temporary_function("add", add)\n\n# 在Python Table API中使用Python自定义函数\nmy_table.select("add(a, b) as a_b")\n\n# 也可以在Python Table API中直接使用Python自定义函数\n# 那这样如何给字段命名呢\nmy_table.select(add(my_table.a, my_table.b))\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"二-表值函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-表值函数"}},[s._v("#")]),s._v(" 二：表值函数")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("表值函数与自定义函数不同的是：表值函数可以返回任意数量的行作为输出而不是单个值。表值函数的返回类型可以是Iterable，Iterator或generator类型")])]),s._v(" "),e("li",[e("p",[s._v("定义一个标志函数(基于"),e("code",[s._v("TableFunction")]),s._v(")")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 函数返回的是一个生成器函数\nclass Split(TableFunction):\n    def eval(self, string):\n        for s in string.split(" "):\n            yield s, len(s)\n\n# 注册这个split表值函数\nsplit = udtf(Split(), result_types=[DataTypes.STRING(), DataTypes.INT()])\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("ul",[e("li",[s._v("表值函数也可以使用如下三种方式定义")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 方式一：生成器函数\ndef generator_func(x):\n      yield 1\n      yield 2\n\n# 方式二：返回迭代器\ndef iterator_func(x):\n      return range(5)\n\n# 方式三：返回可迭代子类\ndef iterable_func(x):\n      result = [1, 2, 3]\n      return result\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("ul",[e("li",[s._v("在Python Table API中使用Python表值函数")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 相当于内连接\nmy_table.join_lateral(split(my_table.a).alias("word, length"))\n\n# 相当于左外连接\nmy_table.left_outer_join_lateral(split(my_table.a).alias("word, length"))\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("在SQL API中使用Python表值函数")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('table_env.create_temporary_function("split", udtf(Split(), result_types=[DataTypes.STRING(), DataTypes.INT()]))\n\n# 相当于内连接\ntable_env.sql_query("SELECT a, word, length FROM MyTable, LATERAL TABLE(split(a)) as T(word, length)")\n\n# 相当于左外连接\ntable_env.sql_query("SELECT a, word, length FROM MyTable LEFT JOIN LATERAL TABLE(split(a)) as T(word, length) ON TRUE")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"三-seal主机日志解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-seal主机日志解析"}},[s._v("#")]),s._v(" 三：Seal主机日志解析")]),s._v(" "),e("h3",{attrs:{id:"一-基于正则表达式过滤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-基于正则表达式过滤"}},[s._v("#")]),s._v(" (一)：基于正则表达式过滤")]),s._v(" "),e("ul",[e("li",[s._v("从Kafka读取数据，打印到标准输出")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from pyflink.table import EnvironmentSettings, StreamTableEnvironment, DataTypes\nfrom pyflink.table.udf import udf\n\ndef kafka_to_kafka():\n\n   # 1：获取环境\n   env_settings = EnvironmentSettings.new_instance().in_streaming_mode().use_blink_planner().build()\n   # 2：创建流table环境\n   table_env = StreamTableEnvironment.create(environment_settings=env_settings)\n   # 3: 配置task内存大小\n   table_env.get_config().get_configuration().set_string(\"taskmanager.memory.task.off-heap.size\", '200m')\n\n   # 4：添加依赖\n   base_dir = \"file:///Users/yinhuanyi/jar/\"\n   kafka_jar = f\"{base_dir}flink-sql-connector-kafka-0.11_2.11-1.11.1.jar\"\n   json_format_jar = f\"{base_dir}flink-json-1.11.1.jar\"\n   table_common_jar = f\"{base_dir}flink-table-common-1.11.1.jar\"\n   jar_seq = [kafka_jar, json_format_jar, table_common_jar]\n   jars = \";\".join(jar_seq)\n   table_env.get_config().get_configuration().set_string(\"pipeline.jars\", jars)\n\n   # 5：定义数据source sql\n   source_ddl = '''\n                CREATE TABLE kafka_source ( message STRING, fields MAP<STRING, STRING>, host MAP<STRING, STRING>, agent MAP<STRING, STRING> ) \n                WITH ( 'connector' = 'kafka-0.11', \n                       'topic' = 'seal', \n                       'properties.bootstrap.servers' = '10.102.0.13:9092', \n                       'format' = 'json', \n                       'scan.startup.mode' = 'latest-offset')\n                '''\n\n   # 6：定义数据print sql\n   sink_ddl = '''\n              CREATE TABLE print_table ( message STRING, fields MAP<STRING, STRING>,  agent MAP<STRING, STRING>, hostwithname STRING  ) WITH ( 'connector' = 'print')\n              '''\n\n   # 7：注册source和sink\n   table_env.execute_sql(source_ddl)\n   table_env.execute_sql(sink_ddl)\n\n\n   # 8：UDF定义\n   @udf(input_types=[DataTypes.MAP(DataTypes.STRING(), DataTypes.STRING())],result_type=DataTypes.STRING())\n   def map_value(line):\n      return line.get('name')\n\n   # 9：UDF注册\n   table_env.register_function(\"map_value\", map_value)\n\n\n   # 10：table api获取数据表\n   source_table1 = table_env.from_path(\"kafka_source\")\n\n   # 11： 正则匹配，且基于UDF转换字段的数据\n   result = table_env.sql_query(\"SELECT * FROM %s WHERE message LIKE '%%mashili%%'\" % source_table1).select(\"message, fields, agent, map_value(host) as hostwithname\")\n\n   # 12：基于table api写入到sink\n   result.execute_insert('print_table').get_job_client().get_job_execution_result().result()\n\n\nif __name__ == '__main__':\n    kafka_to_kafka()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br")])]),e("ul",[e("li",[s._v("结果显示")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("3> +I(2020-09-22T20:38:17.808+0800 INFO SEAL seal/db_v2.go:76 get seal task from mashili failed: leveldb: not found, key: Task-1235-171383,{kafka_topics=seal, ip=10.110.167.9, version=v2},{hostname=xb-cl01-se-167-009, id=49a9f970-0ead-485d-9332-b33732547e85, ephemeral_id=25f79f91-84aa-4323-9198-f8b2b80a99cf, type=filebeat, version=7.7.0},xb-cl01-se-167-009)\n1> +I(2020-09-22T20:38:17.808+0800 INFO SEAL seal/db_v2.go:76 get seal task from mashili failed: leveldb: not found, key: Task-1235-171383,{kafka_topics=seal, ip=10.110.167.9, version=v2},{hostname=xb-cl01-se-167-009, id=49a9f970-0ead-485d-9332-b33732547e85, ephemeral_id=25f79f91-84aa-4323-9198-f8b2b80a99cf, type=filebeat, version=7.7.0},xb-cl01-se-167-009)\n2> +I(2020-09-22T20:38:17.808+0800 INFO SEAL seal/db_v2.go:76 get seal task from mashili failed: leveldb: not found, key: Task-1235-171383,{kafka_topics=seal, ip=10.110.167.9, version=v2},{hostname=xb-cl01-se-167-009, id=49a9f970-0ead-485d-9332-b33732547e85, ephemeral_id=25f79f91-84aa-4323-9198-f8b2b80a99cf, type=filebeat, version=7.7.0},xb-cl01-se-167-009)\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("这里主要是两个知识点")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1: flink如何使用SQL过滤字段的内容\n\n2: flink如何使用UDF完成Map类型向String类型的转换\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"二-基于内建函数正则表达式提取日志信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-基于内建函数正则表达式提取日志信息"}},[s._v("#")]),s._v(" (二)：基于内建函数正则表达式提取日志信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('   result1 = table_env.sql_query("SELECT * FROM %s WHERE message LIKE \'%%terminate-pena%%\'" % source_table1) \\\n                      .select("message, \\\n                                get_topic(fields) as role, \\\n                                get_ip(fields) as ip, \\\n                                map_value(host) as hostname") \\\n                      .add_columns("\'robby test\' as key_phrase")\\\n                      .add_columns("localTimestamp() as modify_time")\\\n                      .add_columns("message.regexpExtract(\'terminate-pena:(.*),\', 1) as terminatePena")\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);