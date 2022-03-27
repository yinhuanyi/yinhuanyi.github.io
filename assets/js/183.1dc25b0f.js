(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{2262:function(s,n,a){"use strict";a.r(n);var t=a(9),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1-java中的基本数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-java中的基本数据类型"}},[s._v("#")]),s._v(" 1：Java中的基本数据类型")]),s._v(" "),t("ul",[t("li",[s._v("概念")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(782),alt:"Alt text"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1: 基本数据类型\n\t基本数据类型不具有引用特性，没有属性和方法\n\t包装类就是让基本数据类型具有属性和方法\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("Java中基本数据类型与包装类的关系")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(783),alt:"Alt text"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Java中的包装类都是final修饰的，因此不能够被继承，因此没有子类\n数值类型的包装类都是继承于Number类的，字符类型和布尔类型的包装类继承于Object类\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2-基本数据类型与包装类的转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本数据类型与包装类的转换"}},[s._v("#")]),s._v(" 2：基本数据类型与包装类的转换")]),s._v(" "),t("ul",[t("li",[s._v("int 与 Integer之间的转化")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" */\npublic class Test3 {\n    public static void main(String[] args){\n        // 自动装箱\n        int t1 = 2;\n        Integer t2 = t1;\n\n        // 自动拆箱(t2是包装类对象，t4是基本数据类型)\n        int t4 = t2;\n\n        // 手动装箱\n        Integer t3 = new Integer(t1);\n\n        // 手动拆箱(t2中提取数值，赋值到t5)\n        int t5 = t2.intValue();\n        \n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h3",{attrs:{id:"_3-基本数据类型和字符串之间的转化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-基本数据类型和字符串之间的转化"}},[s._v("#")]),s._v(" 3：基本数据类型和字符串之间的转化")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('public class Test4 {\n    public static void main(String[] args){\n\n        // 基本数据类型转换为字符串\n        int t1 = 2;\n        String t2 = Integer.toString(t1);\n\n        // 字符串转化为基本数据类型\n        int t3 = Integer.parseInt("2");\n\n        // 这个是先转化为包装类对象，然后自动转化为基本数据类型\n        int t4 = Integer.valueOf("2");\n\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports},782:function(s,n,a){s.exports=a.p+"assets/img/2019-01-1912.27.37.3de30fe0.png"},783:function(s,n,a){s.exports=a.p+"assets/img/2019-01-1912.31.12.288de0da.png"}}]);