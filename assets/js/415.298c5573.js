(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{2328:function(n,s,a){"use strict";a.r(s);var e=a(9),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"嵌套函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套函数"}},[n._v("#")]),n._v(" 嵌套函数")]),n._v(" "),a("h3",{attrs:{id:"一-什么是嵌套函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是嵌套函数"}},[n._v("#")]),n._v(" (一) 什么是嵌套函数")]),n._v(" "),a("ul",[a("li",[n._v("函数内部定义的函数称为嵌套函数")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('def outer_function():\n    # 内部函数\n    def inner_function():\n        print("inner_function")\n    print("outer_function")\n\n    # 内部调用\n    inner_function()\n\n\n\nouter_function()\n\n注意：inner_function函数只能在outer_function函数内部调用，无法再outer_function函数外部被调用\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br")])]),a("ul",[a("li",[n._v("函数作用域：作用域指的是一个标识符的作用范围就是这个标识符的作用域")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 示例1: z变量只能在函数内部被访问无法在函数外部被访问，z变量的作用域就是add函数内部\ndef add(x, y):\n    z = 100\n    print(x, y , z)\n\n\nadd(1,2)\nprint(z)\n\n# 示例2：z可以在add函数外部被访问到，\nz = 100\ndef add(x, y):\n    print(x, y , z)\n\n\nadd(1,2)\nprint(z)\n\n小结：\n全局作用域：整个运行环境中都可见，也就是整个模块内可见\n局部作用域：函数或类中可见，函数体或类就是作用域\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("h3",{attrs:{id:"二-函数的闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-函数的闭包"}},[n._v("#")]),n._v(" (二) 函数的闭包")]),n._v(" "),a("ul",[a("li",[n._v("对比下列中的函数")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("x=5\ndef add():\n    y = x + 1\nadd()\n\n# 示例2\nx=5\ndef add():\n    x = x + 1  # 报错：local variable 'x' referenced before assignment\nadd()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("ul",[a("li",[n._v("报错原因分析：")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("在示例1中，函数内部引用的x为函数外部的x, 因此x的值为5\n\n在示例2中，函数内部重新定义了x的值，那么整个函数内部都会使用这个内部x，因此在运算x + 1的时候，x还没有完成定义就被引用了，这里的x引用的一定是内部正在定义的x，不是函数外部的x=5\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("ul",[a("li",[n._v("再看一个函数内部未定义先赋值的例子")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("x=5\ndef add():\n    print(x) # 这里的x引用的是x = 1的x，但是执行print(x)时，x还没有被定义，所以报错：local variable 'x' referenced before assignment\n    x =  1\nadd()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("ul",[a("li",[a("strong",[n._v("什么是闭包")]),n._v("：内部函数引用了外部函数的变量，这就是闭包的定义")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("def outer_function():\n    x = 100\n    \n    def inner_function(y):\n        print(x+y)        # 内部函数引用了外部函数的自由变量\n        \n    return inner_function # 返回的是函数对象\n\nret = outer_function()\nret(1)  # 输出：101\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("h3",{attrs:{id:"三-nonlocal关键字、global关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-nonlocal关键字、global关键字"}},[n._v("#")]),n._v(" (三) nonlocal关键字、global关键字")]),n._v(" "),a("ul",[a("li",[n._v("global关键字解决"),a("code",[n._v("local variable 'x' referenced before assignment")]),n._v("，global一般在函数内部使用")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("x=5\ndef add():\n    global x  # 使用global关键字，指定x的引用全局的x变量\n    x = x + 1\n    print(x)\n\nadd()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("ul",[a("li",[n._v("global关键字对全局变量的污染，因此需要慎用")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("x = 100\ndef foo():\n    global x  # x被声明了全局变量\n    x = 10\n    x += 1\n    print(x)  # x的值为11\n\nfoo()\nprint(x)      # x的值为11， 因此global关键字污染了全局变量x\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("ul",[a("li",[n._v("nonlocal关键字：nonlocal关键字的意义在于，"),a("strong",[n._v("在内部函数中，指定x引用外部函数x的值，不是引用全局作用域的值，因此不会污染全局作用域")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("def outer_function():\n    x = 100\n    def inner_function():\n        x = x + 1       # 这样会报错，因为在内部函数中对x赋值了\n        print(x)\n    return inner_function\n\nret = outer_function()\nret()\n\n\n# 修改上面代码\ndef outer_function():\n    x = 100\n    def inner_function():\n        nonlocal x      # 在内部函数中，指定x引用外部函数x的值\n        x = x + 1       # 这样就不会报错了\n        print(x)\n    return inner_function\n\nret = outer_function()\nret()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br")])]),a("h3",{attrs:{id:"四-函数默认值的作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-函数默认值的作用域"}},[n._v("#")]),n._v(" (四) 函数默认值的作用域")]),n._v(" "),a("ul",[a("li",[n._v("函数的默认值绑定在函数对象的整个生命周期，不会因为函数内部对默认值操作而发生改变, 默认值只会在函数创建的时候初始化一次，"),a("strong",[n._v("如果再次调用函数，默认值不会再次进行初始化")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("def add(lst = []):\n    lst.append('hello')\n    print(lst)\n\nadd() # 输出：['hello']\nprint('id={}'.format(id(add)))   # 输出：id=4334350952\nadd() # 输出['hello', 'hello']\nprint('id={}'.format(id(add)))   # 输出：id=4334350952\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("ul",[a("li",[n._v("查看函数的默认值")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 查看函数的位置参数的默认值\nprint(add.__defaults__)\n\n# 查看函数的关键字参数的默认值\nprint(add.__kwdefaults__)\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("ul",[a("li",[n._v("解决默认值带了的弊端方法一：浅拷贝")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("def add(lst = []):\n    lst = lst[:]\n    lst.append('hello')\n    print(lst)\n\nadd() # 输出：['hello']\nadd() # 输出：['hello']\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("h3",{attrs:{id:"五-函数销毁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-函数销毁"}},[n._v("#")]),n._v(" (五) 函数销毁")]),n._v(" "),a("ul",[a("li",[n._v("函数对象的销毁有3种方式")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("1：函数运行结束时销毁\n\n2：del 删除函数对象\n\n3：重命名覆盖函数对象\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("ul",[a("li",[n._v("del关键字函数对象")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("def add():\n    print('add')\n\ndel add\nadd()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);