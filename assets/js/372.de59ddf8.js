(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{2229:function(n,s,t){"use strict";t.r(s);var a=t(9),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"一-golang中的类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-golang中的类型转换"}},[n._v("#")]),n._v(" 一：Golang中的类型转换")]),n._v(" "),t("h3",{attrs:{id:"一-静态类型概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-静态类型概念"}},[n._v("#")]),n._v(" (一)：静态类型概念")]),n._v(" "),t("ul",[t("li",[n._v("Go 是一门静态语言，所有的变量都必须为标量类型，不同的类型之间不能够进行赋值、计算等跨类型的操作；在Golang中，指针也对应着相对的类型，静态类型检查的范围内；同时静态语言，也称为强类型语言，也就是一旦定义了，就不能再改变它。"),t("code",[n._v("下面来看一个整型指针向浮点型指针转换的过程")])])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("func main(){\n    num := 5\n    numPointer := &num\n\n    flnum := (*float32)(numPointer)\n    fmt.Println(flnum)\n}\n\n代码报错如下：无法将int指针类型，转换为float32指针类型\ncannot convert numPointer (type *int) to type *float32\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br")])]),t("h3",{attrs:{id:"二-unsafe-pointer介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-unsafe-pointer介绍"}},[n._v("#")]),n._v(" (二)：unsafe.Pointer介绍")]),n._v(" "),t("ul",[t("li",[t("code",[n._v("unsafe.Pointer表示可以指向任意类型的指针，可以在不同的指针类型之间进行转换，")]),n._v("；unsafe.Pointer其包含下面四种核心操作")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1：任何类型的指针值都可以转换为 Pointer\n\n2：Pointer 可以转换为任何类型的指针值\n\n3：uintptr 可以转换为 Pointer\n\n4：Pointer 可以转换为 uintptr\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br")])]),t("ul",[t("li",[n._v("下面例子中，尝试将"),t("code",[n._v("*int类型")]),n._v("转换为"),t("code",[n._v("Pointer类型")]),n._v("，然后再将"),t("code",[n._v("Pointer类型")]),n._v("转换为"),t("code",[n._v("*float32类型")])])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("func main() {\n\tnum := 5\n\tnumPointer := &num\n\n\tflnum := (*float32)(unsafe.Pointer(numPointer))\n\tfmt.Println(flnum)\n}\n\n\n输出结果：输出了一个内存地址\n0xc000016098\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br")])]),t("ul",[t("li",[n._v("分析：虽然借助Pointer，成功的将"),t("code",[n._v("*int类型")]),n._v("转换为了"),t("code",[n._v("*float32类型")]),n._v("，但这时还无法对变量进行操作或访问，因为不知道"),t("code",[n._v("该指针地址指向的东西")]),n._v("具体是什么类型，因此无法进行解析")])]),n._v(" "),t("h3",{attrs:{id:"三-uintptr类型和offsetof函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-uintptr类型和offsetof函数"}},[n._v("#")]),n._v(" (三)：uintptr类型和Offsetof函数")]),n._v(" "),t("ul",[t("li",[n._v("回顾一下结构体的基本概念")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1：结构体的成员变量在内存存储上是一段连续的内存空间\n\n2：结构体的初始地址就是第一个成员变量的内存地址\n\n3：基于结构体的成员地址去计算偏移量，就能够得出其他成员变量的内存地址\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br")])]),t("ul",[t("li",[n._v("下面代码中，对Person结构体成员的值进行了修改")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('func main() {\n\n\t// 实例化结构体\n\tperson := Person{\n\t\tname: "Robby",\n\t\tage:  30,\n\t}\n\n\t// 获取person实例的Pointer指针\n\tpersonPointer := unsafe.Pointer(&person)\n\n\t// 将结构体第一个属性的Pointer类型转换为*string指针类型\n\tname := (*string)(personPointer)\n\t// 对结构体第一个属性的值进行赋值\n\t*name = "尹欢一"\n\n\t// uintptr(personPointer)是获取到Pointer类型指针的结构体地址，这里返回的是一个无符号整形\n\t// unsafe.Offsetof(person.age)是计算结构体成员内存地址的偏移量\n\t// 那么uintptr(personPointer) + unsafe.Offsetof(person.age)就是获取结构体第二个属性的内存地址\n\tage := (*int64)(unsafe.Pointer(uintptr(personPointer) + unsafe.Offsetof(person.age)))   // 获取结构体第二个属性的Pointer指针，将Pointer指针转换为*int64类型\n\t*age = 31\n\t\n\tfmt.Printf("name=%s, age=%d\\n", person.name, person.age)\n\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br")])]),t("ul",[t("li",[n._v("分析 uintptr类型和Offsetof函数")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1：uintptr 是内置的无符号整型，可以将Pointer类型转换为无符号整数类型，可存储一个完整的地址，常用于指针运算，将Pointer类型转换为无符号整型再与偏移量做运算\n\n2：func Offsetof(x ArbitraryType) uintptr 函数：接收ArbitraryType类型， ArbitraryType类型，表示任意类型，返回成员变量 x 在结构体当中的偏移量\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br")])]),t("h3",{attrs:{id:"四-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-总结"}},[n._v("#")]),n._v(" (四)：总结")]),n._v(" "),t("ul",[t("li",[n._v("是不建议使用 unsafe 标准库，它并不安全")])]),n._v(" "),t("h2",{attrs:{id:"二-atomic-与-unsafe-pointer-解决并发同步问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-atomic-与-unsafe-pointer-解决并发同步问题"}},[n._v("#")]),n._v(" 二：atomic 与 unsafe.Pointer 解决并发同步问题")]),n._v(" "),t("h3",{attrs:{id:"一-mutex和atomic对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-mutex和atomic对比"}},[n._v("#")]),n._v(" (一)：mutex和atomic对比")]),n._v(" "),t("ul",[t("li",[n._v("mutex互斥锁是API级别的并发同步的解决方法，atomic是CPU指令级别的并发解决方法，很多时候使用atomic解决并发同步问题更加方便。但是atomic的同步指令集一般只能操作基本数据类型，对于自定义数据类型，还需要借助unsafe.Pointer类型来解决。主要思路是：将自定义数据类型转变为unsafe.Pointer类型，然后使用atomic.LoadPointer、atomic.StorePointer来进行并发同步操作")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 将newcookie对象封装为unsafe.Pointer，并且赋值改&currentCookie\natomic.StorePointer(&currentCookie, unsafe.Pointer(newcookie))\n\n// 将&currentCookie取出的是unsafe.Pointer类型，然后再进行数据类型转换\n(*securecookie.SecureCookie)(atomic.LoadPointer(&currentCookie))\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);