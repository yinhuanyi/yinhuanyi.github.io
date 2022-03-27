(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{2277:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_1-private-public关键字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-private-public关键字"}},[s._v("#")]),s._v(" 1：private, public关键字")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 声明name属性只能在当前类中被访问\nprivate String name;\n\n// 可以在类的外部被访问\npublic String name;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"_2-static关键字-可以不看"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-static关键字-可以不看"}},[s._v("#")]),s._v(" 2：static关键字（可以不看）")]),s._v(" "),n("ul",[n("li",[s._v("静态成员")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：static 将成员定义为静态成员，在内存中只开辟一块存储空间， 任何实例访问静态资源的时候，访问的都是同一个静态成员， 属于类对象共享的，属于类属性\n\n2：静态方法中无法反问非静态成员，可以直接访问静态成员\n\n3： 静态方法中不能使用this访问非静态方法和非静态属性,但是可以构造一个新的实例对象，来访问\n\n// 静态属性可以使用实例访问，也可以使用类访问, static修饰的内容属性都可以认为是类属性\npublic static String hobby;\n\nSystem.out.println(animalCat.hobby);\nSystem.out.println(Cat.hobby);\n\n4：静态成员的生命周期是：类加载时产生，销毁的时候释放\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"_3-static关键字-抽象类比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-static关键字-抽象类比"}},[s._v("#")]),s._v(" 3：static关键字 抽象类比")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：static 修饰的属性就是类属性，其他的都是对象属性\n2：static 修饰的方法就是类方法，其他的都是对象方法\n3：类方法中不能使用this，但是可以将类实例化访问对象属性、类属性、类方法、对象方法\n4：this可以在对象方法，构造方法出现，但是不能在类方法中出现\n5: this可以访问对象方法、类方法, 不可以访问构造方法\n6：类只能调用类方法和类属性\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_4-public、protected、private-修饰"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-public、protected、private-修饰"}},[s._v("#")]),s._v(" 4：public、protected、private 修饰")]),s._v(" "),n("ul",[n("li",[s._v("概念")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public：   表示其后的元素对任何人都可以使用 \nprivate：  只能在当前类中被访问，私有方法 \nprotected：与private相当，差别在于继承的类可以访问protected修饰的元素，同包中的其他类元素可以访问\n默认权限：同包中的其他类可以访问\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("总结")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(823),alt:"Alt text"}})])])}),[],!1,null,null,null);t.default=e.exports},823:function(s,t,a){s.exports=a.p+"assets/img/2019-03-1411.50.00.d9cac2fb.png"}}]);