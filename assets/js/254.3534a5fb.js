(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{2263:function(n,s,a){"use strict";a.r(s);var e=a(9),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h3",{attrs:{id:"_1-设计模式分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-设计模式分类"}},[n._v("#")]),n._v(" 1：设计模式分类")]),n._v(" "),e("p",[e("img",{attrs:{src:a(788),alt:"Alt text"}})]),n._v(" "),e("h3",{attrs:{id:"_2-单例的设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-单例的设计模式"}},[n._v("#")]),n._v(" 2：单例的设计模式")]),n._v(" "),e("ul",[e("li",[n._v("单例的要求")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1： 某各类只能有一个实例\n\n2： 必须自行创建实例\n\n3：必须自行向整个系统提供这个实例\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("ul",[e("li",[n._v("实现方式")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1：只提供私有的构造方法\n\n2：含有一个该类的静态私有对象\n\n3：提供一个静态的公有方法用于创建、获取静态私有对象\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("h3",{attrs:{id:"_3-单例实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-单例实现"}},[n._v("#")]),n._v(" 3：单例实现")]),n._v(" "),e("ul",[e("li",[n._v("1: 以空间换时间，创建类的同时创建实例对象。先创建，后引用模式")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# com.valor.singleton包中的SingletonOne类实现代码\npackage com.valor.singleton;\n\n// 特点：创建实例对象的时候直接初始化, 以空间换时间的方式\npublic class SingletonOne {\n    // 1：创建类中的私有构造方法\n    private SingletonOne(){\n\n    }\n\n    // 2: 创建该类型的私有静态实例对象\n    private static SingletonOne instance = new SingletonOne();\n\n    // 3: 创建公有静态方法，返回静态实例对象\n    public static SingletonOne getInstance(){\n        return instance;\n    }\n\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# 测试单例模式的代码\npackage com.valor.test;\nimport com.valor.singleton.SingletonOne;\n\npublic class Test {\n\n    public static void main(String[] args){\n        SingletonOne one = SingletonOne.getInstance();\n        SingletonOne two = SingletonOne.getInstance();\n        System.out.println(one);\n        System.out.println(two);\n        System.out.println(one == two);\n\n    }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# python 代码实现一个单例模式缓存，也是以空间换时间\nclass Singleton:\n\n    __dictionary = dict()\n\n    def __init__(self):\n        pass\n\n    @classmethod\n    def getCacheInstance(cls):\n        return cls.__dictionary\n\n\nif __name__ == '__main__':\n    one = Singleton.getCacheInstance()\n    two = Singleton.getCacheInstance()\n    print(id(one))\n    print(id(two))\n    print(one == two)\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("ul",[e("li",[n._v("2: 以时间换空间，先调用的时候再创建实例对象。使用时候再创建模式")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# com.valor.singleton包中的SingletonTwo类实现代码\npackage com.valor.singleton;\n\n// 特点：实例对象创建时不初始化，直到第一次调用的时候进行初始化\npublic class SingletonTwo {\n\n    private SingletonTwo(){\n\n    }\n\n    // instance先不初始化\n    private static SingletonTwo instance = null;\n\n    // 这里必须是公共的静态方法，因为SingletonTwo构造器是私有的，只能在类内部访问\n    public static SingletonTwo getInstance(){\n        if(instance==null){\n            instance = new SingletonTwo();\n        }\n        return instance;\n    }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("package com.valor.test;\nimport com.valor.singleton.SingletonTwo;\n\npublic class Test {\n\n    public static void main(String[] args){\n        SingletonTwo one = SingletonTwo.getInstance();\n        SingletonTwo two = SingletonTwo.getInstance();\n        System.out.println(one);\n        System.out.println(two);\n        System.out.println(one == two);\n\n    }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# python 代码实现\nclass Singleton:\n\n    __dictionary = None\n\n    def __init__(self):\n        pass\n\n    @classmethod\n    def getCacheInstance(cls):\n        if  cls.__dictionary == None:\n            cls.__dictionary = dict()\n        return cls.__dictionary\n\n\nif __name__ == '__main__':\n    one = Singleton.getCacheInstance()\n    two = Singleton.getCacheInstance()\n    print(id(one))\n    print(id(two))\n    print(id(one) == id(two))\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br")])]),e("ul",[e("li",[n._v("对比两种实现方式")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("第一种：当类加载的时候类实例被创建，线程安全\n第二种：多线程情况下，线程不安全，但是可以使用加锁等机制解决\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("h3",{attrs:{id:"_4-单例模式的使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-单例模式的使用场景"}},[n._v("#")]),n._v(" 4：单例模式的使用场景")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1: 创建对象时，占用资源过多，但是同时又需要用到该类对象\n\n2：对系统内资源要求统一读写，如读写配置信息\n\n3：当多个实例存在，造成逻辑错误时候\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports},788:function(n,s,a){n.exports=a.p+"assets/img/2019-01-0811.17.27.f6ad6148.png"}}]);