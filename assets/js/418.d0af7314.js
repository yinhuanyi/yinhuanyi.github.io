(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{2328:function(n,s,r){"use strict";r.r(s);var a=r(9),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,r=n._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("h2",{attrs:{id:"异常处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[n._v("#")]),n._v(" 异常处理")]),n._v(" "),r("h3",{attrs:{id:"一-什么是异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是异常"}},[n._v("#")]),n._v(" (一) 什么是异常")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("1：异常与错误有区别：异常可以被捕获，而错误有时候无法被捕获，语法错误会被IDE检查到，但是逻辑错误无法被知晓\n\n2：异常的产生有两种方式\n    ①：raise语句，显式的抛出异常\n    ②：由于代码错误，解释器抛出的异常，会中断程序的运行\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br")])]),r("h3",{attrs:{id:"二-如何捕获异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-如何捕获异常"}},[n._v("#")]),n._v(" (二) 如何捕获异常")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("try:\n    需要被捕获异常的代码块\n\nexcept 异常类型对象:\n    处理捕获到的异常\n\n\n示例1：\ntry:\n    # 这里会抛出异常\n    a = 1 / 0\n\nexcept Exception:\n    print('开始处理异常')\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br")])]),r("h3",{attrs:{id:"三-异常的继承关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-异常的继承关系"}},[n._v("#")]),n._v(" (三) 异常的继承关系")]),n._v(" "),r("ul",[r("li",[n._v("继承关系")])]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("BaseException\n +-- SystemExit\n +-- KeyboardInterrupt\n +-- GeneratorExit\n +-- Exception\n      +-- StopIteration\n      +-- StopAsyncIteration\n      +-- ArithmeticError\n      |    +-- FloatingPointError\n      |    +-- OverflowError\n      |    +-- ZeroDivisionError\n      +-- AssertionError\n      +-- AttributeError\n      +-- BufferError\n      +-- EOFError\n      +-- ImportError\n      |    +-- ModuleNotFoundError\n      +-- LookupError\n      |    +-- IndexError\n      |    +-- KeyError\n      +-- MemoryError\n      +-- NameError\n      |    +-- UnboundLocalError\n      +-- OSError\n      |    +-- BlockingIOError\n      |    +-- ChildProcessError\n      |    +-- ConnectionError\n      |    |    +-- BrokenPipeError\n      |    |    +-- ConnectionAbortedError\n      |    |    +-- ConnectionRefusedError\n      |    |    +-- ConnectionResetError\n      |    +-- FileExistsError\n      |    +-- FileNotFoundError\n      |    +-- InterruptedError\n      |    +-- IsADirectoryError\n      |    +-- NotADirectoryError\n      |    +-- PermissionError\n      |    +-- ProcessLookupError\n      |    +-- TimeoutError\n      +-- ReferenceError\n      +-- RuntimeError\n      |    +-- NotImplementedError\n      |    +-- RecursionError\n      +-- SyntaxError\n      |    +-- IndentationError\n      |         +-- TabError\n      +-- SystemError\n      +-- TypeError\n      +-- ValueError\n      |    +-- UnicodeError\n      |         +-- UnicodeDecodeError\n      |         +-- UnicodeEncodeError\n      |         +-- UnicodeTranslateError\n      +-- Warning\n           +-- DeprecationWarning\n           +-- PendingDeprecationWarning\n           +-- RuntimeWarning\n           +-- SyntaxWarning\n           +-- UserWarning\n           +-- FutureWarning\n           +-- ImportWarning\n           +-- UnicodeWarning\n           +-- BytesWarning\n           +-- ResourceWarning\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br"),r("span",{staticClass:"line-number"},[n._v("15")]),r("br"),r("span",{staticClass:"line-number"},[n._v("16")]),r("br"),r("span",{staticClass:"line-number"},[n._v("17")]),r("br"),r("span",{staticClass:"line-number"},[n._v("18")]),r("br"),r("span",{staticClass:"line-number"},[n._v("19")]),r("br"),r("span",{staticClass:"line-number"},[n._v("20")]),r("br"),r("span",{staticClass:"line-number"},[n._v("21")]),r("br"),r("span",{staticClass:"line-number"},[n._v("22")]),r("br"),r("span",{staticClass:"line-number"},[n._v("23")]),r("br"),r("span",{staticClass:"line-number"},[n._v("24")]),r("br"),r("span",{staticClass:"line-number"},[n._v("25")]),r("br"),r("span",{staticClass:"line-number"},[n._v("26")]),r("br"),r("span",{staticClass:"line-number"},[n._v("27")]),r("br"),r("span",{staticClass:"line-number"},[n._v("28")]),r("br"),r("span",{staticClass:"line-number"},[n._v("29")]),r("br"),r("span",{staticClass:"line-number"},[n._v("30")]),r("br"),r("span",{staticClass:"line-number"},[n._v("31")]),r("br"),r("span",{staticClass:"line-number"},[n._v("32")]),r("br"),r("span",{staticClass:"line-number"},[n._v("33")]),r("br"),r("span",{staticClass:"line-number"},[n._v("34")]),r("br"),r("span",{staticClass:"line-number"},[n._v("35")]),r("br"),r("span",{staticClass:"line-number"},[n._v("36")]),r("br"),r("span",{staticClass:"line-number"},[n._v("37")]),r("br"),r("span",{staticClass:"line-number"},[n._v("38")]),r("br"),r("span",{staticClass:"line-number"},[n._v("39")]),r("br"),r("span",{staticClass:"line-number"},[n._v("40")]),r("br"),r("span",{staticClass:"line-number"},[n._v("41")]),r("br"),r("span",{staticClass:"line-number"},[n._v("42")]),r("br"),r("span",{staticClass:"line-number"},[n._v("43")]),r("br"),r("span",{staticClass:"line-number"},[n._v("44")]),r("br"),r("span",{staticClass:"line-number"},[n._v("45")]),r("br"),r("span",{staticClass:"line-number"},[n._v("46")]),r("br"),r("span",{staticClass:"line-number"},[n._v("47")]),r("br"),r("span",{staticClass:"line-number"},[n._v("48")]),r("br"),r("span",{staticClass:"line-number"},[n._v("49")]),r("br"),r("span",{staticClass:"line-number"},[n._v("50")]),r("br"),r("span",{staticClass:"line-number"},[n._v("51")]),r("br"),r("span",{staticClass:"line-number"},[n._v("52")]),r("br"),r("span",{staticClass:"line-number"},[n._v("53")]),r("br"),r("span",{staticClass:"line-number"},[n._v("54")]),r("br"),r("span",{staticClass:"line-number"},[n._v("55")]),r("br"),r("span",{staticClass:"line-number"},[n._v("56")]),r("br"),r("span",{staticClass:"line-number"},[n._v("57")]),r("br"),r("span",{staticClass:"line-number"},[n._v("58")]),r("br"),r("span",{staticClass:"line-number"},[n._v("59")]),r("br"),r("span",{staticClass:"line-number"},[n._v("60")]),r("br"),r("span",{staticClass:"line-number"},[n._v("61")]),r("br"),r("span",{staticClass:"line-number"},[n._v("62")]),r("br"),r("span",{staticClass:"line-number"},[n._v("63")]),r("br"),r("span",{staticClass:"line-number"},[n._v("64")]),r("br")])]),r("ul",[r("li",[n._v("常用异常类介绍和自定义异常")])]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("1：BaseException\n所有异常类的基类都是BaseException\n\n2：Exception\n所有内建，非系统退出的异常类的基类\n所有自定义异常类需要继承Exception\n\n3：自定义异常\nclass XKDException(ArithmeticError):\n    def __init__(self, ):\n        pass\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br")])]),r("h3",{attrs:{id:"四-一个完整的异常捕获"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-一个完整的异常捕获"}},[n._v("#")]),n._v(" (四) 一个完整的异常捕获")]),n._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("try:\n    a = 1\n    b = 0\n    result = a / b\n\nexcept ArithmeticError:\n    print('ArithmeticError')\n\nexcept Exception as e:\n    print(e)\nelse:\n    print('ok')\n\nfinally:\n    print(a)\n    print(b)\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br"),r("span",{staticClass:"line-number"},[n._v("15")]),r("br"),r("span",{staticClass:"line-number"},[n._v("16")]),r("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);