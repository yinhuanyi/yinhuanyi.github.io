(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{2701:function(s,a,e){"use strict";e.r(a);var n=e(9),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"一-修复消费的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-修复消费的问题"}},[s._v("#")]),s._v(" 一：修复消费的问题")]),s._v(" "),e("h3",{attrs:{id:"一-kafka-offsetcommit-for-group-adhoc-failed-error-25-unknownmemberiderror-adhoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-kafka-offsetcommit-for-group-adhoc-failed-error-25-unknownmemberiderror-adhoc"}},[s._v("#")]),s._v(" （一）kafka OffsetCommit for group adhoc failed: [Error 25] UnknownMemberIdError: adhoc")]),s._v(" "),e("ul",[e("li",[s._v("分析")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("这个消费者在提交offset的时候，出现了个异常。kafka的消费者在消费了消息数据后，会提交一个offset值，在kafka集群中记录这个消费动作\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("产生问题的原因")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("在消费者消费的过程中，由于执行引擎消费数据是同步阻塞的，导致消费过程耗时太长，在session time out这段时间内，没有处理完成，导致心跳检测信号没发出来。\n这时候，consumers的协调器coordinator 就会认为，这个消费者挂掉了，所以，消费者的offset提交失败\n这时候，所有的consumers进行reblance过程(partition要在consumer中重新分配)，由于之前消费了的消息，进行了partitiion的重新分配，又要重新被消费，可能会进入一个恶性循环。\n在Kafka-Manager管理系统中，可以看到，有一个partition一直有Lag数据未被消费\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("解决方法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：更改 session.timeout.ms的值，加大消费时间\n\n2：调高心跳检测heartbeat.interval.ms的值\n\n3：将消费者的自动提交offset，改为手动提交enable.auto.commit=false\n\n4：最有效的方法，提高partition的个数，增加消费水平\n\n5：将消费过程改为异步非阻塞，缩短消费时长\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("ul",[e("li",[s._v("针对以上问题(重复消费)，实际解决的方法是")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("修改kafka的server配置文件：\n配置项group.min.session.timeout.ms,默认值6秒\n配置项group.max.session.timeout.ms,默认值30秒\n那么session.timeout.ms的值就必须在6秒到30秒直接，消费者执行任务的时间会超过30秒，导致消费者被移除，coordinator重新rebalance，导致消息给重复消费\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);