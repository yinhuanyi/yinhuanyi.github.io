(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{2261:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"_1-创建gradle项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建gradle项目"}},[s._v("#")]),s._v(" 1：创建gradle项目")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("1：点击Create New Project")])]),s._v(" "),e("li",[e("p",[s._v("2：选择gradle项目，选择Java")])])]),s._v(" "),e("p",[e("img",{attrs:{src:n(783),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("3：填写基本信息")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("groupId \n定义了项目属于哪个组，举个例子，如果你的公司是mycom，有一个项目为myapp，那么groupId就应该是com.mycom.myapp. \n\nartifacted \n定义了当前maven项目在组中唯一的ID,比如，myapp-util,myapp-domain,myapp-web等。 \n\nversion \n指定了myapp项目的当前版本，SNAPSHOT意为快照，说明该项目还处于开发中，是不稳定的版本。 \n\nname \n声明了一个对于用户更为友好的项目名称，不是必须的，推荐为每个pom声明name，以方便信息交流\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("img",{attrs:{src:n(784),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("4：填写基本信息")])]),s._v(" "),e("p",[e("img",{attrs:{src:n(785),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("5：在gradle项目中的java目录下，创建一个包(com.valor), 且新建一个Main的 java 类")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package com.valor;\n\n/**\n * Description:\n * Author:         Robby\n * CreateDate:     2019-03-14 13:18\n * Version:        1.0.0\n */\npublic class Main {\n    public static void main(String[] args) {\n        Main m = new Main();\n        m.sayHello("hello gradle");\n    }\n\n    public void sayHello(String arg){\n        System.out.println("arg");\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("ul",[e("li",[s._v("6: 编辑build.gradle文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 指定项目入口为 com.valor包下的 Main java类\njar {\n    // jar包的名称\n    baseName = "gradle_project"\n    manifest {\n        attributes (\n                "Main-Class":"com.valor.Main"\n        )\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("ul",[e("li",[s._v("7：点击gradle, build项目")])]),s._v(" "),e("p",[e("img",{attrs:{src:n(786),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("8： 在libs目录下会生成一个jar包")])]),s._v(" "),e("p",[e("img",{attrs:{src:n(787),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("9：在命令行运行这个编译的jar包")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("java -jar /Users/yinhuanyi/Java_Project/RobbyWorkSpace/gradle_project/build/libs/gradle_project-1.0-SNAPSHOT.jar\n\n// 输出结果\nhello gradle\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports},783:function(s,a,n){s.exports=n.p+"assets/img/2019-03-141.14.24.2772255b.png"},784:function(s,a,n){s.exports=n.p+"assets/img/2019-03-141.15.21.9e48ec0c.png"},785:function(s,a,n){s.exports=n.p+"assets/img/2019-03-141.16.40.6e90f770.png"},786:function(s,a,n){s.exports=n.p+"assets/img/2019-03-141.25.39.ec6670c4.png"},787:function(s,a,n){s.exports=n.p+"assets/img/2019-03-141.27.37.c53a7a15.png"}}]);