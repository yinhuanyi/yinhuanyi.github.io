(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{2355:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"面向对象2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象2"}},[s._v("#")]),s._v(" 面向对象2")]),s._v(" "),a("h3",{attrs:{id:"一-类的继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-类的继承"}},[s._v("#")]),s._v(" (一) 类的继承")]),s._v(" "),a("ul",[a("li",[s._v("面向对象中的继承可以很方便的帮助子类拥有父类的属性和方法，可以减少冗余代码，子类可以定义自己的方法和属性，也可以覆盖父类的方法和属性")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Animal:\n    def __init__(self):\n        self.type = 'animal'\n\n    def eat(self):\n        print('{} eat'.format(self.__class__.__name__))\n\nclass Person(Animal):\n\n    def talk(self):\n        print('talk')\n\n\nif __name__ == '__main__':\n    animal = Animal()\n    animal.eat()\n    print(\"animal type = {}\".format(animal.type))\n\n\n    print('*' * 100)\n\n    person = Person()\n    print(\"persion type = {}\".format(person.type))\n    person.eat()\n    person.talk()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"二-新式类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-新式类"}},[s._v("#")]),s._v(" (二) 新式类")]),s._v(" "),a("ul",[a("li",[s._v("在Python3中object是所有的类的基类，自定义类如果不写基类，默认是继承与基类")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Person:\n    def __init__(self):\n        pass\n\n\nclass Person(object):\n    def __init__(self):\n        pass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"三-类可以多继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-类可以多继承"}},[s._v("#")]),s._v(" (三) 类可以多继承")]),s._v(" "),a("ul",[a("li",[s._v("Python的多继承安装mro的算法进行查找父类的方法和属性")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Foo:\n    def __init__(self):\n        print('Foo')\n\nclass Animal:\n    def __init__(self):\n        print('Animal')\n\nclass Person(Foo, Animal):\n    def __init__(self):\n        super().__init__()\n        pass\n\nif __name__ == '__main__':\n    \n    print(Person.__base__)\n    print(Person.__bases__)  # 显示基类的元组\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"四-属性查找顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-属性查找顺序"}},[s._v("#")]),s._v(" (四) 属性查找顺序")]),s._v(" "),a("ul",[a("li",[s._v("在继承中，属性的查找顺序是："),a("code",[s._v("实例的__dict__中")]),s._v("查找 --\x3e"),a("code",[s._v("类的__dict__中")]),s._v("查找 --\x3e "),a("code",[s._v("父类的__dict__中")]),s._v("查找, 如果没有找到，会报AttributeError的错误")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Animal:\n    __name = 'animal' # 私有属性无法访问到\n    age = 20\n    def __init__(self):\n        self.type = 'animal'\n\n    def eat(self):\n        print('{} eat'.format(self.__class__.__name__))\n\nclass Person(Animal):\n\n    def talk(self):\n        print('talk')\n        \nif __name__ == '__main__':\n    \n    person = Person()\n    print(person.__name) # 报错\n    print(person.age)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"五-方法重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-方法重写"}},[s._v("#")]),s._v(" (五) 方法重写")]),s._v(" "),a("ul",[a("li",[s._v("子类可以覆盖父类的方法，可以在覆盖的方法中调用父类的方法，静态方法也可以被覆盖")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Animal:\n    def __init__(self):\n        self.type = 'animal'\n\n    def eat(self):\n        print('{} eat'.format(self.__class__.__name__))\n\n\n\nclass Person(Animal):\n    def eat(self):\n        super().eat()  # 调用父类的方法\n        print('洗手')\n        print('{} eat'.format(self.__class__.__name__))\n\nif __name__ == '__main__':\n\n    person = Person()\n    person.eat()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[s._v("重写父类的"),a("code",[s._v("__init__方法")]),s._v("，如果"),a("code",[s._v("父类有__init__方法")]),s._v("，且"),a("code",[s._v("子类也有__init__方法")]),s._v("，最好在"),a("code",[s._v("子类的__init__方法")]),s._v("中手动调用"),a("code",[s._v("父类的__init__方法")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Animal:\n    def __init__(self):\n        self.one = 'one'\n\n\nclass Person(Animal):\n    def __init__(self):\n        super().__init__()\n        self.two = 'two'\n        self.three = 'three'\n\n    def show(self):\n        print(self.one, self.two, self.three)\n\n\nperson = Person()  \nprint(person.__dict__) # 输出：{'one': 'one', 'two': 'two', 'three': 'three'}\nperson.show()   # 输出：one two three\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"六-装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-装饰器"}},[s._v("#")]),s._v(" (六) 装饰器")]),s._v(" "),a("ul",[a("li",[s._v("函数装饰器装饰类")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def dec(name):\n    def wrapper(cls): # 这里的cls就是Person类\n        cls.name = name\n        return cls\n    return wrapper\n\n\n\nclass Person():\n    def __init__(self):\n        pass\n\nprint(Person.name) # 输出：Petter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("类装饰器装饰函数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import datetime\nimport time\nfrom functools import wraps\n\n\n# 这是上下文管理的类\nclass Decorator:\n    '''this is dec class '''\n\n    def __init__(self, fn):\n        if fn is not None:\n            self.fn = fn\n            wraps(fn)(self)  # 这里是将fn的属性赋值给self实例，因为self实例会返回\n\n    def __call__(self, *args, **kwargs):\n        self.start = datetime.datetime.now()\n        ret = self.fn(*args, **kwargs)\n        self.interval = (datetime.datetime.now() - self.start).total_seconds()\n        return 'interval is {}, result is {}'.format(self.interval, ret)\n\n\n\n# 被装饰的函数\ndef add(x,y):\n    ''' this is a function '''\n    time.sleep(2)\n    return x + y\n\n\nprint(add(3,4))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h3",{attrs:{id:"七-mixin与装饰器对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-mixin与装饰器对比"}},[s._v("#")]),s._v(" (七) Mixin与装饰器对比")]),s._v(" "),a("ul",[a("li",[s._v("装饰器实现功能增强")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 1：装饰器增强\ndef watch4k(cls):\n    \n    def __watch4ktv(self):\n        print('{} Watch 4k TV'.format(self.__class__.__name__))\n        \n    # 添加了一个方法    \n    cls.watch4ktv = __watch4ktv\n    \n    return cls\n\n\ndef watch5k(cls):\n    \n    def __watch5ktv(self):\n        print('{} Watch 5k TV'.format(self.__class__.__name__))\n        \n    cls.watch5ktv = __watch5ktv\n    \n    return cls\n\n\n# 基类\nclass Television:\n    \n    def __init__(self, function='watching'):\n        self.function = function\n\n# 子类\nclass Television4K(Television):\n    pass\n\nclass Television5K(Television):\n    pass\n\n\ntv4k = Television4K()\ntv4k.watch4ktv()\n\n\ntv5k = Television5K()\ntv5k.watch5ktv()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("ul",[a("li",[s._v("Mixin实现功能增强：直接实现对于的功能，谁继承这个Mixin就具有这个功能，Mixin是一种设计模式，通过多继承的方式对类的功能进行增强")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Watch4kMinix:\n    def watch4ktv(self):\n        print('{} Watch 4k TV'.format(self.__class__.__name__))\n\nclass Watch5kMinix:\n    def watch5ktv(self):\n        print('{} Watch 5k TV'.format(self.__class__.__name__))\n\n# 基类\nclass Television:\n    def __init__(self, function='watching'):\n        self.function = function\n\n# 子类\nclass Television4K(Watch4kMinix,Television):\n    pass\n\nclass Television5K(Watch5kMinix,Television):\n    pass\n\n\ntv4k = Television4K()\ntv4k.watch4ktv()\n\n\ntv5k = Television5K()\ntv5k.watch5ktv()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("ul",[a("li",[s._v("Mixin类编写的注意点")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("总结：对于Mixin类的书写规则：\n\n    1：在Mixin类中，不能写初始化的__init__方法，因为Mixin类不做为独立类使用\n    \n    2：Mixin类原则上必须作为其他类的基类，实现其他类的功能增强\n    \n    3：Mixin类的基类必须也是Mixin类\n    \n    4：使用Mixin方式增强功能的的类，必须将Mixin类写在继承列表的第一个位置\n    \n    5：Mixin比decorator更加强大\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);