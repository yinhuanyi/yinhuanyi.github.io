(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1542:function(a,s,l){a.exports=l.p+"assets/img/2020-09-245.26.42.2f232290.png"},1543:function(a,s,l){a.exports=l.p+"assets/img/2020-09-267.54.58.cc8924e4.png"},2575:function(a,s,l){"use strict";l.r(s);var e=l(9),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"一-概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-概念"}},[a._v("#")]),a._v(" 一：概念")]),a._v(" "),e("h3",{attrs:{id:"一-parallelism"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-parallelism"}},[a._v("#")]),a._v(" (一)：parallelism")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("parallelism指的是并行度的意思。在 Flink 里面代表每个任务的并行度，适当的提高并行度可以大大提高 job 的执行效率，比如你的 job 消费 kafka 数据过慢，适当调大可能就消费正常了。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"二-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-slot"}},[a._v("#")]),a._v(" (二)：slot")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("指的是插槽的意思，flink中任务的并行性由每个 Task Manager 上可用的 slot 决定。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"二-如何设置flink-job的parallelism"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-如何设置flink-job的parallelism"}},[a._v("#")]),a._v(" 二：如何设置flink job的parallelism")]),a._v(" "),e("ul",[e("li",[a._v("1：修改配置文件flink-conf.yaml")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("taskmanager.numberOfTaskSlots: 2\nparallelism.default: 4\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("2：flink run 提交任务的时候使用-p参数")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("flink run -p 10 -py word-count.py\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("3：在flink job程序内设置并行度")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\nenv.setParallelism(10);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("4：指定每个算子指定并行度")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("data.keyBy(new xxxKey())\n    .flatMap(new XxxFlatMapFunction()).setParallelism(5)\n    .map(new XxxMapFunction).setParallelism(5)\n    .addSink(new XxxSink()).setParallelism(1)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("ul",[e("li",[a._v("小结")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("并行度设置优先级是：算子设置并行度 > env 设置并行度 > 配置文件默认并行度\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"三-如何理解flink中的slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-如何理解flink中的slot"}},[a._v("#")]),a._v(" 三：如何理解flink中的slot")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("flink-conf.yaml中默认taskmanager.numberOfTaskSlots=1;")])]),a._v(" "),e("li",[e("p",[a._v("以flink架构模型为例进行分析：")])])]),a._v(" "),e("p",[e("img",{attrs:{src:l(1542),alt:"Alt text"}})]),a._v(" "),e("ul",[e("li",[e("p",[a._v("图中 Task Manager 是从 Job Manager 处接收需要部署的 Task，任务的并行性由每个 Task Manager 上可用的 slot 决定。"),e("code",[a._v("每个任务代表分配给任务槽的一组资源，slot 在 Flink 里面可以认为是资源组")]),a._v("，Flink 将每个任务分成子任务并且将这些子任务分配到 slot 来并行执行程序。")])]),a._v(" "),e("li",[e("p",[a._v("例如，如果 Task Manager 有四个 slot，那么它将为每个 slot 分配 25％ 的内存。 可以在一个 slot 中运行一个或多个线程。 同一 slot 中的线程共享相同的 JVM。 同一 JVM 中的任务共享 TCP 连接和心跳消息。Task Manager 的一个 Slot 代表一个可用线程，该线程具有固定的内存，注意 Slot 只对内存隔离，没有对 CPU 隔离。默认情况下，Flink 允许子任务共享 Slot，即使它们是不同 task 的 subtask，只要它们来自相同的 job。这种共享可以有更好的资源利用率。")])]),a._v(" "),e("li",[e("p",[a._v("如果Flink集群两个 Task Manager，每个 Task Manager 有三个 slot，这样我们的算子最大并行度那么就可以达到 6 个，在同一个 slot 里面可以执行 1 至多个子任务。")])]),a._v(" "),e("li",[e("p",[a._v("每个 Flink TaskManager 在集群中提供 slot。 slot 的数量通常与每个 TaskManager 的可用 CPU 内核数成比例。"),e("code",[a._v("一般情况下你的 slot 数是你每个 TaskManager 的 cpu 的核数")])])])]),a._v(" "),e("h3",{attrs:{id:"四-parallelism与slot的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-parallelism与slot的区别"}},[a._v("#")]),a._v(" 四：parallelism与slot的区别")]),a._v(" "),e("ul",[e("li",[a._v("slot 是指 taskmanager 的并发执行能力")])]),a._v(" "),e("p",[e("img",{attrs:{src:l(1543),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("每个TaskManager的slot，都可以同时处理多个任务\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("parallelism 是指 taskmanager 实际使用的并发能力")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("parallelism.default:1；即运行程序默认的并行度为 1，集群中9 个 TaskSlot 只用了 1 个，有 8 个空闲\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);