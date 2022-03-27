(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{2185:function(s,n,a){"use strict";a.r(n);var t=a(9),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[s._v("接口（interface）定义了一个对象的行为规范，只定义规范不实现，由具体的对象来实现规范的细节。")])]),s._v(" "),t("h2",{attrs:{id:"一-接口的基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-接口的基本概念"}},[s._v("#")]),s._v(" 一：接口的基本概念")]),s._v(" "),t("h3",{attrs:{id:"一-接口类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-接口类型"}},[s._v("#")]),s._v(" (一)：接口类型")]),s._v(" "),t("ul",[t("li",[s._v("在Go语言中接口（interface）是一种类型，一种抽象的类型。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("interface是一组method的集合，是duck-type programming的一种体现。接口做的事情就像是定义一个协议（规则），只要一台机器有洗衣服和甩干的功能，我就称它为洗衣机。不关心属性（数据），只关心行为（方法）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"二-为什么要使用接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-为什么要使用接口"}},[s._v("#")]),s._v(" (二)：为什么要使用接口")]),s._v(" "),t("ul",[t("li",[s._v("来看下这段代码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('type Cat struct{}\n\nfunc (c Cat) Say() string { return "喵喵喵" }\n\ntype Dog struct{}\n\nfunc (d Dog) Say() string { return "汪汪汪" }\n\nfunc main() {\n\tc := Cat{}\n\tfmt.Println("猫:", c.Say())\n\td := Dog{}\n\tfmt.Println("狗:", d.Say())\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[s._v("分析")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("上面的代码中定义了猫和狗，然后它们都会叫，你会发现main函数中明显有重复的代码，如果我们后续再加上猪、青蛙等动物的话，我们的代码还会一直重复下去。那我们能不能把它们当成“能叫的动物”来处理呢？\n\n像类似的例子在我们编程过程中会经常遇到：\n\n比如一个网上商城可能使用支付宝、微信、银联等方式去在线支付，我们能不能把它们当成“支付方式”来处理呢？\n\n比如三角形，四边形，圆形都能计算周长和面积，我们能不能把它们当成“图形”来处理呢？\n\n比如销售、行政、程序员都能计算月薪，我们能不能把他们当成“员工”来处理呢？\n\nGo语言中为了解决类似上面的问题，就设计了接口这个概念。接口区别于我们之前所有的具体类型，接口是一种抽象的类型。当你看到一个接口类型的值时，你不知道它是什么，唯一知道的是通过它的方法能做什么\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"三-接口的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-接口的定义"}},[s._v("#")]),s._v(" (三)：接口的定义")]),s._v(" "),t("ul",[t("li",[s._v("每个接口由数个方法组成，接口的定义格式如下")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("type 接口类型名 interface{\n    方法名1( 参数列表1 ) 返回值列表1\n    方法名2( 参数列表2 ) 返回值列表2\n    …\n}\n\n\n\n1：接口名：使用type将接口定义为自定义的类型名。Go语言的接口在命名时，一般会在单词后面添加er，如有写操作的接口叫Writer，有字符串功能的接口叫Stringer等。接口名最好要能突出该接口的类型含义。\n\n2：方法名：当方法名首字母是大写且这个接口类型名首字母也是大写时，这个方法可以被接口所在的包（package）之外的代码访问。\n\n3：参数列表、返回值列表：参数列表和返回值列表中的参数变量名可以省略。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[s._v("举个例子：当你看到这个接口类型的值时，你不知道它是什么，唯一知道的就是可以通过它的Write方法来做一些事情")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("type writer interface{\n    Write([]byte) error\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"四-实现接口的条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-实现接口的条件"}},[s._v("#")]),s._v(" (四)：实现接口的条件")]),s._v(" "),t("ul",[t("li",[s._v("一个对象只要全部实现了接口中的方法，那么就实现了这个接口。换句话说，接口就是一个需要实现的方法列表")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// Sayer 接口\ntype Sayer interface {\n\tsay()\n}\n\ntype dog struct {}\n\ntype cat struct {}\n\n// dog实现了Sayer接口\nfunc (d dog) say() {\n\tfmt.Println("汪汪汪")\n}\n\n// cat实现了Sayer接口\nfunc (c cat) say() {\n\tfmt.Println("喵喵喵")\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ul",[t("li",[s._v("接口的实现就是这么简单，只要实现了接口中的所有方法，就实现了这个接口。")])]),s._v(" "),t("h3",{attrs:{id:"五-接口类型变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-接口类型变量"}},[s._v("#")]),s._v(" (五)：接口类型变量")]),s._v(" "),t("ul",[t("li",[s._v("实现了接口有什么用呢")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("只有实现了接口方法的结构体，才能够赋值给接口变量，否则会报错，例如【Type does not implement 'Sayer' as some methods are missing: say()】\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("阅读下面的代码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('type Sayer interface {\n\tsay()\n}\n\ntype dog struct {}\n\ntype cat struct {}\n\n// dog实现了Sayer接口\nfunc (d dog) say() {\n\tfmt.Println("汪汪汪")\n}\n\n// cat实现了Sayer接口\nfunc (c cat) say() {\n\tfmt.Println("喵喵喵")\n}\n\nfunc main() {\n\n\tvar x Sayer // 声明一个Sayer类型的变量x\n\ta := cat{}  // 实例化一个cat\n\tb := dog{}  // 实例化一个dog\n\n\t// 如果cat没有实现say方法，是不能赋值的\n\tx = a       // 可以把cat实例直接赋值给x\n\tx.say()     // 喵喵喵\n\n\t// 如果dog没有实现say方法，是不能赋值的\n\tx = b       // 可以把dog实例直接赋值给x\n\tx.say()     // 汪汪汪\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("ul",[t("li",[s._v("在Gin框架中，接口用来校验结构体是否实现了方法")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 摘自gin框架routergroup.go\ntype IRouter interface{ ... }\n\ntype RouterGroup struct { ... }\n\n// 确保RouterGroup实现了接口IRouter，_ 是 IRouter的类型变量，使用_的目的是不关心变量，只要赋值成功，说明RouterGroup结构体实现了IRouter接口的方法\nvar _ IRouter = &RouterGroup{} \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"六-值接收者和指针接收者实现接口的区别-看方法是值类型实现还是指针类型实现-如果是指针类型实现的-那么必须是地址赋值给接口变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-值接收者和指针接收者实现接口的区别-看方法是值类型实现还是指针类型实现-如果是指针类型实现的-那么必须是地址赋值给接口变量"}},[s._v("#")]),s._v(" (六)：值接收者和指针接收者实现接口的区别：看方法是值类型实现还是指针类型实现，如果是指针类型实现的，那么必须是地址赋值给接口变量")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("方法是值类型接受者")]),s._v("(无论是结构体还是结构体指针都可以赋值给接口变量, 有go语法糖自动转换)")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('type Mover interface {\n\tmove()\n}\n\ntype dog struct {}\n\nfunc (d dog) move() {\n\tfmt.Println("狗会动")\n}\n\n\n\nfunc main() {\n\n\tvar x Mover         // 接口变量\n\n\tvar wangcai = dog{} // 旺财是dog类型\n\tx = wangcai         // x可以接收dog类型\n\t\n\t// dog指针fugui内部会自动求值*fugui\n\tvar fugui = &dog{}  // 富贵是*dog类型\n\tx = fugui           // x可以接收*dog类型\n\n\tx.move()\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("方法是指针类型接受者")]),s._v("(如果接受者是指针类型，那么必须是结构体指针才能赋值给接口变量)")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('type Mover interface {\n\tmove()\n}\n\ntype dog struct {}\n\nfunc (d *dog) move() {\n\tfmt.Println("狗会动")\n}\n\n\n\nfunc main() {\n\n\tvar x Mover         // 接口变量\n\n\tvar wangcai = dog{} // 旺财是dog类型\n\tx = wangcai         // x不可以接收dog类型\n\n\tvar fugui = &dog{}  // 富贵是*dog类型\n\tx = fugui           // x可以接收*dog类型\n\n\tx.move()\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"二-类型与接口的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-类型与接口的关系"}},[s._v("#")]),s._v(" 二：类型与接口的关系")]),s._v(" "),t("h3",{attrs:{id:"一-一个结构体实现多个接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-一个结构体实现多个接口"}},[s._v("#")]),s._v(" (一)：一个结构体实现多个接口")]),s._v(" "),t("ul",[t("li",[s._v("只要结构体实现了某个接口的方法，那么就可以赋值给这个接口的变量")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// Sayer 接口\ntype Sayer interface {\n\tsay()\n}\n\n// Mover 接口\ntype Mover interface {\n\tmove()\n}\n\n\ntype dog struct {\n\tname string\n}\n\n// 实现Sayer接口\nfunc (d dog) say() {\n\tfmt.Printf("%s会叫汪汪汪\\n", d.name)\n}\n\n// 实现Mover接口\nfunc (d dog) move() {\n\tfmt.Printf("%s会动\\n", d.name)\n}\n\n\n\nfunc main() {\n\n\tvar x Sayer\n\tvar y Mover\n\n\tvar a = dog{name: "旺财"}\n\tx = a\n\ty = a\n\tx.say()\n\ty.move()\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])]),t("h3",{attrs:{id:"二-多个接口体实现同一个接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-多个接口体实现同一个接口"}},[s._v("#")]),s._v(" (二)：多个接口体实现同一个接口")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\ntype Mover interface {\n\tmove()\n}\n\ntype dog struct {\n\tname string\n}\n\ntype car struct {\n\tbrand string\n}\n\n// dog类型实现Mover接口\nfunc (d dog) move() {\n\tfmt.Printf("%s会跑\\n", d.name)\n}\n\n// car类型实现Mover接口\nfunc (c car) move() {\n\tfmt.Printf("%s速度70迈\\n", c.brand)\n}\n\n\nfunc main() {\n\n\tvar x Mover\n\tvar a = dog{name: "旺财"}\n\tvar b = car{brand: "保时捷"}\n\t\n\tx = a\n\tx.move()\n\tx = b\n\tx.move()\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("h3",{attrs:{id:"三-接口的方法-可以由多个结构体实现-因为结构体可以嵌套哇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-接口的方法-可以由多个结构体实现-因为结构体可以嵌套哇"}},[s._v("#")]),s._v(" (三)：接口的方法，可以由多个结构体实现，因为结构体可以嵌套哇")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// WashingMachine 洗衣机\ntype WashingMachine interface {\n\twash()\n\tdry()\n}\n\n// 甩干器\ntype dryer struct{}\n\n// 海尔洗衣机具备甩干器\ntype haier struct {\n\tname string\n\tdryer //嵌入甩干器\n}\n\n// 实现WashingMachine接口的dry()方法\nfunc (d dryer) dry() {\n\tfmt.Println("甩一甩")\n}\n\n// 实现WashingMachine接口的wash()方法\nfunc (h haier) wash() {\n\tfmt.Printf("%s 洗刷刷\\n", h.name)\n}\n\n\nfunc main() {\n\n\tvar w WashingMachine\n\n\th := haier{\n\t\tname: "海尔",\n\t\tdryer: dryer{},\n\t}\n\t\n\t// 这里结构体可以赋值给接口变量，说明结构体实现了接口的方法\n\tw = h\n\n\tw.wash()\n\tw.dry()\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br")])]),t("h3",{attrs:{id:"四-接口嵌套"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-接口嵌套"}},[s._v("#")]),s._v(" (四)：接口嵌套")]),s._v(" "),t("ul",[t("li",[s._v("接口与接口间可以通过嵌套创造出新的接口(这个与结构体类似，结构体可以嵌套组成新的结构体)，")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// Sayer 接口\ntype Sayer interface {\n\tsay()\n}\n\n// Mover 接口\ntype Mover interface {\n\tmove()\n}\n\n// 接口嵌套\ntype animal interface {\n\tSayer\n\tMover\n}\n\ntype cat struct {\n\tname string\n}\n\nfunc (c cat) say() {\n\tfmt.Println("喵喵喵")\n}\n\nfunc (c cat) move() {\n\tfmt.Println("猫会动")\n}\n\n\nfunc main() {\n\n\tvar x animal\n\tx = cat{name: "花花"}\n\t\n\tx.move()\n\tx.say()\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("h2",{attrs:{id:"三-空接口和类型断言-很重要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-空接口和类型断言-很重要"}},[s._v("#")]),s._v(" 三：空接口和类型断言(很重要)")]),s._v(" "),t("h3",{attrs:{id:"一-空接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-空接口"}},[s._v("#")]),s._v(" (一)：空接口")]),s._v(" "),t("ul",[t("li",[s._v("空接口的定义")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("空接口是没有定义任何方法的接口，因此Golang中任何类型都实现了空接口\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("那么，在开发过程中，空接口的变量，可以存储任意类型的变量")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// 空接口变量这样定义\nvar x interface{}\n\ns := "Hello 沙河"\nx = s\nfmt.Printf("type:%T value:%v\\n", x, x)\n\ni := 100\nx = i\nfmt.Printf("type:%T value:%v\\n", x, x)\n\nb := true\nx = b\nfmt.Printf("type:%T value:%v\\n", x, x)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"二-空接口的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-空接口的应用"}},[s._v("#")]),s._v(" (二)：空接口的应用")]),s._v(" "),t("ul",[t("li",[s._v("空接口作为函数的参数")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// 空接口作为函数参数\nfunc show(a interface{}) {\n\tfmt.Printf("type:%T value:%v\\n", a, a)\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("空接口作为map的值(使用空接口实现可以保存任意值的字典)")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('type Address struct {\n\tname string\n\tnumber string\n}\n\n\nfunc main() {\n\n\t// 空接口作为map值\n\tvar studentInfo = make(map[string]interface{})\n\n\tstudentInfo["name"] = "沙河娜扎"\n\tstudentInfo["age"] = 18\n\tstudentInfo["married"] = false\n\tstudentInfo["address"] = &Address{\n\t\tname: "长安街道",\n\t\tnumber: "1010101-1-1-1333",\n\t}\n\n\tfmt.Println(studentInfo)\n\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h3",{attrs:{id:"三-类型断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-类型断言"}},[s._v("#")]),s._v(" (三)：类型断言")]),s._v(" "),t("ul",[t("li",[s._v("空接口可以存储任意类型的值，那我们如何获取其存储的具体数据呢，例如在开发【事件中心】的时候，http返回的数据不确定，获取的是空接口，那么如何获取其真实的数据")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("一个接口的值:（简称接口值）是由一个具体类型和具体类型的值两部分组成的。这两部分分别称为接口的动态类型和动态值。\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("下面例子中都实现了Write方法")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("var w io.Writer\n\nw = os.Stdout\nw = new(bytes.Buffer)\nw = nil\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("接口的动态类型和动态值")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(697),alt:"Alt text"}})]),s._v(" "),t("ul",[t("li",[s._v("想要判断空接口中的值这个时候就可以使用类型断言，其语法格式：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("x.(T)\n\nx：表示类型为interface{}的变量\nT：表示断言x可能是的类型。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("下面是一个断言的例子")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('func main() {\n\tvar x interface{}\n\tx = "Hello 沙河"\n\tv, ok := x.(string)\n\tif ok {\n\t\tfmt.Println(v)\n\t} else {\n\t\tfmt.Println("类型断言失败")\n\t}\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("断言与switch语句结合判断接口的真实类型")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('func justifyType(x interface{}) {\n\tswitch v := x.(type) {\n\tcase string:\n\t\tfmt.Printf("x is a string，value is %v\\n", v)\n\tcase int:\n\t\tfmt.Printf("x is a int is %v\\n", v)\n\tcase bool:\n\t\tfmt.Printf("x is a bool is %v\\n", v)\n\tdefault:\n\t\tfmt.Println("unsupport type！")\n\t}\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("小结")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1：因为空接口可以存储任意类型值的特点，所以空接口在Go语言中的使用十分广泛\n\n2：关于接口需要注意的是，【只有当有两个或两个以上的具体类型必须以相同的方式进行处理时才需要定义接口】，例如：使用接口的方式实现一个既可以往终端写日志也可以往文件写日志的简易日志库，这里就有两个类型，这两个类型必须实现接口的write方法\n\n\n3：不要为了接口而写接口，那样只会增加不必要的抽象，导致不必要的运行时损耗\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports},697:function(s,n,a){s.exports=a.p+"assets/img/2021-06-015.06.44.3a224e78.png"}}]);