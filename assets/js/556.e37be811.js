(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{2568:function(n,s,e){"use strict";e.r(s);var a=e(9),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h3",{attrs:{id:"一-processing-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-processing-time"}},[n._v("#")]),n._v(" "),e("strong",[e("code",[n._v("（一）Processing Time")])])]),n._v(" "),e("ul",[e("li",[n._v("Flink中的三种时间")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("事件时间： 10:30\n摄取时间:  11:30\n处理时间:  12:30\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("ul",[e("li",[n._v("使用滚动时间窗口")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('import org.apache.flink.api.common.functions.FlatMapFunction;\nimport org.apache.flink.api.java.tuple.Tuple2;\nimport org.apache.flink.streaming.api.datastream.DataStreamSource;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.api.windowing.time.Time;\nimport org.apache.flink.util.Collector;\n\n/**\n * Author: Robby\n * Create Date: 2019-04-11 00:32\n * Function：\n */\npublic class JavaWindow {\n    public static void main(String[] args) throws Exception{\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n\n        DataStreamSource<String### text = env.socketTextStream("localhost", 9000);\n\n        text.flatMap(new FlatMapFunction<String, Tuple2<String, Integer>>() {\n            @Override\n            public void flatMap(String value, Collector<Tuple2<String, Integer>### collector) throws Exception {\n                String[] tokens = value.toLowerCase().split(",");\n\n                for (String token: tokens){\n                    if (token.length() ### 0){\n                        // 返回一个tuple出去\n                        collector.collect(new Tuple2<String, Integer>(token, 1));\n                    }\n                }\n            }\n        }).keyBy(0).timeWindow(Time.seconds(5)).sum(1).print().setParallelism(1);\n\n        env.execute("JavaWindow");\n    }\n\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br")])]),e("ul",[e("li",[n._v("滑动时间窗口")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Time.seconds(10), Time.seconds(5)\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);