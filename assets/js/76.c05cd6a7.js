(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1385:function(a,s,t){a.exports=t.p+"assets/img/2019-08-156.20.50.bc395044.png"},1386:function(a,s,t){a.exports=t.p+"assets/img/2019-08-156.20.56.2e342e21.png"},1387:function(a,s,t){a.exports=t.p+"assets/img/2019-08-156.21.03.8a8db1b0.png"},1388:function(a,s,t){a.exports=t.p+"assets/img/2019-08-156.21.18.3b2f5877.png"},1389:function(a,s,t){a.exports=t.p+"assets/img/2019-08-156.21.24.37baa77e.png"},1390:function(a,s,t){a.exports=t.p+"assets/img/2019-08-277.00.41.e7691efb.png"},1391:function(a,s,t){a.exports=t.p+"assets/img/2019-08-277.03.13.2cfd64a5.png"},2470:function(a,s,t){"use strict";t.r(s);var e=t(9),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"一-val和var的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-val和var的区别"}},[a._v("#")]),a._v(" 一：val和var的区别")]),a._v(" "),e("h3",{attrs:{id:"一-val和var"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-val和var"}},[a._v("#")]),a._v(" (一)val和var")]),a._v(" "),e("ul",[e("li",[a._v("区别")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("val相当于java里面的final，无法改变变量的值\nval age: Int = 20\n在Scala中，编译器可以推动变量的类型，因此，可以简写为\nval age = 20\n\nvar声明变量，可以改变变量的值\nvar age: Int = 20\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"二-数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-数据类型"}},[a._v("#")]),a._v(" (二)数据类型")]),a._v(" "),e("ul",[e("li",[a._v("基本数据类型")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Byte/Char\nShort/Int/Long/Float/Double\nBoolean\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("ul",[e("li",[a._v("示例")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("scala### val a = 20.1\na: Double = 20.1\n\nscala### val a = 20.1F\na: Float = 20.1\n\nscala### val a = 20.1D\na: Double = 20.1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("ul",[e("li",[a._v("数值类型转换")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("scala### val b = a.asInstanceOf[Double]\nb: Double = 20.1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ul",[e("li",[a._v("判断数据类型")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("scala### a.isInstanceOf[Double]\nres0: Boolean = true\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"三-lazy的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-lazy的使用"}},[a._v("#")]),a._v(" (三)lazy的使用")]),a._v(" "),e("ul",[e("li",[a._v("当声明一个变量为lazy的时候，只有在变量被引用的时候才会加载数据")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("scala### lazy val a = 1\na: Int = <lazy>\n\nscala### a\nres1: Int = 1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"四-使用maven构建scala应用程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-使用maven构建scala应用程序"}},[a._v("#")]),a._v(" (四)使用Maven构建Scala应用程序")]),a._v(" "),e("ul",[e("li",[a._v("第一次使用maven创建Scala应用出现了问题，按照如下步骤可以解决")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1：在IDEA中搜索插件\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1385),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("2：必须在IDEA的插件中下载Scala\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1386),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("3：选择maven-Scala模板\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1387),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("4：选择File->Project Structure\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1388),alt:"Alt text"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("5：选择本地的SCALA_HOME路径\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1389),alt:"Alt text"}})]),a._v(" "),e("p",[a._v("6：再把测试文件移除掉，因为有两个依赖加载不了")]),a._v(" "),e("p",[a._v("7: 选择 Use plugin registry,")]),a._v(" "),e("p",[e("img",{attrs:{src:t(1390),alt:"Alt text"}})]),a._v(" "),e("p",[a._v("8: 在哪个包下创建xxx.scala文件，就将哪个包设置为source")]),a._v(" "),e("p",[e("img",{attrs:{src:t(1391),alt:"Alt text"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);