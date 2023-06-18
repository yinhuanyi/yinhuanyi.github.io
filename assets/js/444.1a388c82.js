(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{2361:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"反射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[s._v("#")]),s._v(" 反射")]),s._v(" "),a("h3",{attrs:{id:"一-什么是反射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是反射"}},[s._v("#")]),s._v(" (一) 什么是反射")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("定义：解释类型的语言，在程序被加载到内存运行的时候，可以通过某种方式获取对象的类型、属性等信息的过程叫做反射\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二-具有反射能力的内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-具有反射能力的内置函数"}},[s._v("#")]),s._v(" (二) 具有反射能力的内置函数")]),s._v(" "),a("ul",[a("li",[s._v("1：判断对象是否有对应的属性：getattr(object, name, default=None)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class XKD:\n    def showName(self, name):\n        print(name)\n\n\n\nxkd = XKD()\n# 如果xkd有showName这个属性，那么将showName的值赋值给fun1， 如果没有将匿名函数赋值给fun1\nfun1 = getattr(xkd, 'showName', lambda x: print(x))  \nfun1('Robby')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("2：给对象添加属性：setattr(x, y, v)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class XKD:\n    def showName(self, name):\n        print(name)\n\nxkd = XKD()\n# 如果xkd有showAge这个属性，直接覆盖，如果没有，直接添加\nsetattr(xkd, 'showAge', lambda x: print(x))\nxkd.showAge(27)\nprint(xkd.__dir__())\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("3：判断对象是否有对应的属性：hasattr(*args, **kwargs)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class XKD:\n    def showName(self, name):\n        print(name)\n\nxkd = XKD()\n\n# 判断xkd是否有showAge属性, 返回bool值\nif not hasattr(xkd, 'showAge'):\n    setattr(xkd, 'showAge', lambda x: print(x))\n\nxkd.showAge(27)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("小结")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("反射比装饰器和Mixin的方式更加具有灵活性，装饰器和Mixin对功能的增强是在定义的时候对功能进行增强的，而反射是程序运行过程中对功能进行增强的\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"三-反射魔术方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-反射魔术方法"}},[s._v("#")]),s._v(" (三) 反射魔术方法")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class XKD:\n\n    def __init__(self):\n        pass\n\n\n    # 如果属性找不到，会调用这个方法\n    def __getattr__(self, item):\n        return '调用了__getattr__方法，{}属性找不到'.format(item)\n\n\n    # 赋值会调用这个方法\n    def __setattr__(self, key, value):\n        self.__dict__[key] = value\n\n\n        # todo: 千万不要写成死循环\n        # self.key = value\n\n    # 删除属性会调用这个方法\n    def __delattr__(self, item):\n        del self.__dict__[item]\n\n\nxkd = XKD()\nprint(xkd.name)\nxkd.name = 'Robby'\nprint(xkd.__dict__)\ndel xkd.name\nprint(xkd.__dict__)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("ul",[a("li",[s._v("示例2：封装字典，让字典具有点语法访问和赋值的能力")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class DictObj:\n    def __init__(self, obj: dict):\n        if isinstance(obj, dict):\n            self.__dict__['__dict'] = obj\n        else:\n            self.__dict__['__dict'] = {}\n\n    def __getattr__(self, item):\n        try:\n            return self.__dict__['__dict'][item]\n        except KeyError:\n            print('{} 属性找不到'.format(item))\n\n    def __setattr__(self, key, value):\n        self.__dict__['__dict'][key] = value\n\n    def __delattr__(self, item):\n        del self.__dict__['__dict'][item]\n\nif __name__ == '__main__':\n\n    obj = {\n        'org': 'XKD',\n        'name': 'Robby',\n        'age': 27,\n        'course': 'Python'\n    }\n\n    dict_obj = DictObj(obj)\n\n    # 访问属性\n    print(dict_obj.org)\n    print(dict_obj.name)\n    print(dict_obj.age)\n    print(dict_obj.course)\n\n    # 新增属性\n    dict_obj.hobby = 'Running'\n    print(dict_obj.hobby)\n\n    # 删除属性\n    del dict_obj.age\n    print(dict_obj.age)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("ul",[a("li",[s._v("小结")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("实例的属性查找顺序是: instance.__getattribute__ --\x3e instance.__dict__  --\x3e instance.__class__.__dict__ --\x3e 父类或祖先类.__dict__ --\x3e 调用__getattr__()方法\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);