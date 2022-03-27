(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{2309:function(s,n,a){"use strict";a.r(n);var e=a(9),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器"}},[s._v("#")]),s._v(" 装饰器")]),s._v(" "),a("h3",{attrs:{id:"一-如何理解装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-如何理解装饰器"}},[s._v("#")]),s._v(" (一) 如何理解装饰器")]),s._v(" "),a("ul",[a("li",[s._v("Python中装饰器的定义")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("装饰器的功能在于对函数或类功能的增强，这是一种低耦合的功能增强\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二-无参装饰器-简单的装饰器-返回包裹函数-不带参数的装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-无参装饰器-简单的装饰器-返回包裹函数-不带参数的装饰器"}},[s._v("#")]),s._v(" (二) 无参装饰器，简单的装饰器，返回包裹函数（不带参数的装饰器）")]),s._v(" "),a("ul",[a("li",[s._v("下面的例子就是装饰器的原型，目的是对add函数增强，在add执行的前后可以做一些操作")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def add(x, y):\n    return x + y\n\ndef decorator(fn):\n    def wrapper(*args, **kwargs):\n        print('start')\n        result = fn(*args, **kwargs)\n        print('end')\n        return result\n    return wrapper\n\n\nwrapper = decorator(add)\nresult = wrapper(x=1, y=2)\nprint(result)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("可以将上面例子的调用过程进行改造")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def add(x, y):\n    return x + y\n\ndef decorator(fn):\n    def wrapper(*args, **kwargs):\n        print('start')\n        result = fn(*args, **kwargs)\n        print('end')\n        return result\n\n    return wrapper\n\n\nresult = decorator(add)(x=1, y=2)\nprint(result)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("对上面的例子进行再次改造："),a("strong",[a("code",[s._v("这是Python的装饰器语法糖，@decorator相当于对add函数进行了一次调用，返回的是wrapper相当于 add = decorator(add)， 再次调用add函数的时候，其实是调用的wrapper函数，而wrapper函数中调用了原始的add函数且完成了add函数的增强")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def decorator(fn):\n    def wrapper(*args, **kwargs):\n        print('start')\n        result = fn(*args, **kwargs)\n        print('end')\n        return result\n\n    return wrapper\n\n\ndef add(x, y):\n    return x + y\n\nresult = add(x=1, y=2)\nprint(result)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"三-装饰器引入的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-装饰器引入的问题"}},[s._v("#")]),s._v(" (三) 装饰器引入的问题")]),s._v(" "),a("ul",[a("li",[s._v("被装饰的函数名称发生了变化：此时被装饰器装饰的函数不是原始的add函数，函数名称变化了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("print(add.__name__)  # wrapper\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("解决被装饰器装饰的函数属性不一致的问题，引入functools库")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import functools\n\ndef decorator(fn):\n    @functools.wraps(fn)  # 拷贝函数对象的属性\n    def wrapper(*args, **kwargs):\n        print('start')\n        result = fn(*args, **kwargs)\n        print('end')\n        return result\n\n    return wrapper\n\n\ndef add(x, y):\n    return x + y\n\nresult = add(x=1, y=2)\nprint(result)\nprint(add.__name__)  # 输出：add\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"三-带参装饰器-复杂装饰器-返回包裹函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-带参装饰器-复杂装饰器-返回包裹函数"}},[s._v("#")]),s._v(" (三) 带参装饰器，复杂装饰器，返回包裹函数")]),s._v(" "),a("ul",[a("li",[s._v("带参数的装饰器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import functools\nimport datetime\nimport time\n\n# 第一次调用的装饰器，带参数的装饰器\ndef decorator(t): # 这里只是一个简单的函数\n    def timer(fn): # 这里才是装饰器\n        @functools.wraps(fn)\n        def wrapper(*args, **kwargs):\n            '''\n            this is a wrap function\n            '''\n            print(\"args={} kwargs={}\".format(args,kwargs))\n            start = datetime.datetime.now()\n            ret = fn(*args, **kwargs)\n            end = datetime.datetime.now()\n            duration = (end - start).total_seconds()\n            if duration > t:\n                print('Time out')\n            return ret\n        return wrapper\n    return timer\n\n\n\ndef add(x,y):\n    time.sleep(3)\n    return x + y\n\nadd(1,2)\n\nprint(add.__name__, add.__doc__, sep='\\n')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h3",{attrs:{id:"四-带参装饰器不返回包裹函数-返回原始函数本身"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-带参装饰器不返回包裹函数-返回原始函数本身"}},[s._v("#")]),s._v(" (四) 带参装饰器不返回包裹函数，返回原始函数本身")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import datetime\nimport time\n\ndef decorator(t):\n    def timer(fn):\n        start = datetime.datetime.now()\n        duration = (datetime.datetime.now() - start).total_seconds()\n        print(duration)\n        print(t)\n        return fn\n    return timer\n\ndef add(x,y):\n    time.sleep(2)\n    return x+y\n\n# 这里调用的是add函数本身\nprint(add(1,2))\nprint(add.__name__)  # 输出：add\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"五-不带参装饰器不返回包裹函数-返回原始函数本身"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-不带参装饰器不返回包裹函数-返回原始函数本身"}},[s._v("#")]),s._v(" (五) 不带参装饰器不返回包裹函数，返回原始函数本身")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import time\n\ndef decorator(fn):\n    print('调用函数之前我可以做些事情')\n    return fn\n\n\ndef add(x,y):\n    time.sleep(2)\n    print(x+y)\n\nadd(1,2)\nprint(add.__name__)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"六-函数装饰器装饰类返回原始类本身"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-函数装饰器装饰类返回原始类本身"}},[s._v("#")]),s._v(" (六) 函数装饰器装饰类返回原始类本身")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 思想类似，在调用类之前给类封装一些属性和方法\ndef dec(cls):\n    cls.name = 'Robby'\n    return cls\n\nclass Person(): # Person = cls\n    def __init__(self):\n        pass\n\nprint(Person.name)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"七-函数装饰器装饰类返回原始类本身-带参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-函数装饰器装饰类返回原始类本身-带参数"}},[s._v("#")]),s._v(" (七)函数装饰器装饰类返回原始类本身(带参数)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def dec(name):\n    def wrapper(cls): # 这里的cls就是Person类\n        cls.name = name\n        return cls\n    return wrapper\n\n\n\n\n# 这种带参数的装饰器就理解为函数调用即可\nclass Person():\n    def __init__(self):\n        pass\n\nprint(Person.name)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"八-类装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八-类装饰器"}},[s._v("#")]),s._v(" (八)类装饰器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import datetime\nimport time\nfrom functools import wraps\n\n\n# 这是上下文管理的类\nclass Decorator:\n    '''this is dec class '''\n\n    def __init__(self, fn):\n        if fn is not None:\n            self.fn = fn\n            wraps(fn)(self)  # 这里是将fn的属性赋值给self实例，因为self实例会返回\n\n    def __call__(self, *args, **kwargs):\n        self.start = datetime.datetime.now()\n        ret = self.fn(*args, **kwargs)\n        self.interval = (datetime.datetime.now() - self.start).total_seconds()\n        return 'interval is {}, result is {}'.format(self.interval, ret)\n\n\n\n# 被装饰的函数\ndef add(x,y):\n    time.sleep(2)\n    return x + y\n\n\nprint(add(3,4))  # add调用的是Decorator的实例self，不是以前的函数add了\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);