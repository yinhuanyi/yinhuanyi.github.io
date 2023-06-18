(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{2212:function(n,s,t){"use strict";t.r(s);var a=t(9),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("ul",[a("li",[n._v("fx是一个golang版本的依赖注入框架，它使得golang通过可重用、可组合的模块化来构建golang应用程序变得非常容易，可直接在项目中添加以下内容即可体验fx效果")])]),n._v(" "),a("h2",{attrs:{id:"一-fx基本使用-go-uber-org-fx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-fx基本使用-go-uber-org-fx"}},[n._v("#")]),n._v(" 一：fx基本使用(go.uber.org/fx)")]),n._v(" "),a("h3",{attrs:{id:"一-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-原理"}},[n._v("#")]),n._v(" (一)：原理")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\t举个例子，一个服务里面有日志模块，配置模块，DB模块，业务模块等，其中日志模块依赖配置模块，DB模块依赖日志模块，配置模块，业务模块依赖所有基础模块。这样带来的一个问题是，如果有模块要修改，势必会影响其他模块，如果模块很多，还需要人为的规定初始化顺序，这对大型项目的维护来说是一件很恐怖的事，因此依赖注入的引入可以减少维护依赖关系的精力，专心使开发人员投入到业务开发中来\n\n\tFx是通过使用依赖注入的方式替换了全局通过手动方式来连接不同函数调用的复杂度，也不同于其他的依赖注入方式，Fx能够像普通golang函数去使用，而不需要通过使用struct标签或内嵌特定类型。这样使得Fx能够在很多go的包中很好的使用。\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("ul",[a("li",[n._v("接下来会提供一些Fx的简单demo，并说明其中的一些定义。")])]),n._v(" "),a("p",[a("img",{attrs:{src:t(736),alt:"Alt text"}})]),n._v(" "),a("h2",{attrs:{id:"二-fx应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-fx应用"}},[n._v("#")]),n._v(" 二：fx应用")]),n._v(" "),a("ul",[a("li",[n._v("主要概念说明")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("1：constructor： 普通的 go 函数， 返回一些类型类型的实例， 默认懒加载。\n\n2：invocation: 普通 go 函数， 其参数也是通过依赖注入的方式提供的， 其会立即执行， 并且其也可以返回一个 error ， 表示运行失败，其他的任何参数都会被忽略。\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("h3",{attrs:{id:"一-第一个示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-第一个示例"}},[n._v("#")]),n._v(" (一)：第一个示例")]),n._v(" "),a("ul",[a("li",[n._v("示例代码")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"go.uber.org/fx"\n)\n\ntype Boy struct {\n\tName string\n}\n\ntype Girl struct {\n\tName string\n}\n\ntype Class struct {\n\tb *Boy\n\tg *Girl\n}\n\n// InitBoy 构造函数\nfunc InitBoy() *Boy {\n\treturn &Boy{Name: "xiaoming"}\n}\n\n// InitGirl 构造函数\nfunc InitGirl() *Girl {\n\treturn &Girl{Name: "xiaohong"}\n}\n\n// InitClass 构造函数\nfunc InitClass(b *Boy, g *Girl) *Class {\n\treturn &Class{\n\t\tb: b,\n\t\tg: g,\n\t}\n}\n\nfunc main() {\n\t// 创建一个container\n\tapp := fx.New(\n\t\tfx.Provide(InitGirl, InitBoy),\n\n\t\tfx.Invoke(InitClass),\n\t)\n\n\terr := app.Start(context.Background())\n\n\tif err != nil {\n\t\tfmt.Println(err)\n\t}\n\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br")])]),a("ul",[a("li",[n._v("分析代码")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("1：fx 通过两个接口解决依赖，fx包的执行顺序是先执行Invoke里面的函数列表，按照写的顺序一个个执行，fx.Provide提供了一系列的构造函数，如果Invoke里面的函数如果有用到Provide的参数，就调用它的构造函数。\n\n2：比如Class的初始函数执行时，发现它需要Boy和Girl两个对象，就会通过参数的类型去调用这两个对象的初始化函数。这是通过反射的方式去实现的，类似于一种懒加载的方式。但是fx有个缺点就是如果有多个初始化函数依赖同一个初始化构造函数，那么这个初始化构造函数会调用多遍，感觉这是一个不太合理的设计。\n\n3：有人可能会问如果有两个对象循环引用了怎么办，那么fx怎么处理。如果出现循环引用fx是没法处理的，而且在Golang中如果模块循环引用是会报错的，这是代码结构不合理的表现。\n\n4：很多模块在初始化之后会有一个启动函数，比如很多微服务框架初始化一些配置之后会调用它的Start或者Run接口启动服务，在fx里面是通过lifecycle实现的。\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("h3",{attrs:{id:"二-第二个示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-第二个示例"}},[n._v("#")]),n._v(" (二)：第二个示例")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("按需定义一些构造函数：主要用于生成依赖注入的具体类型")])]),n._v(" "),a("li",[a("p",[n._v("整个fx包执行的顺序为：")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("(一)：fx.Invoke\n1：先执行fx.Invoke中的函数列表，按顺序一个一个执行。\n2：执行Invoke中的函数时，当前执行的函数传入参数，如果用到的变量，则先调用其构造函数。\n3：这里构造函数构造出来的变量不需要明显的进行定义，会自动传给invoke函数，因为构造函数返回的时候，有类型，Invoke函数会自动获取对应构造函数返回的具体类型\n4：invoke执行invokeNothingUse函数的时候，由于invokeNothingUse函数不需要任何参数，因此不会执行任何构造函数\n5：当invoke执行Register函数的时候，需要mux *http.ServeMux, h http.Handler, logger *log.Logger 三个传入参数，那么就会执行NewMux、NewHandler、NewLogger这三个函数\n6：\n\n(二)：fx.Provide\n1. 在fx.Provide中的构造函数，在Invoke需要的时候，再去执行\n\n(三)：fx.Lifecycle\n1：在fx.Lifecycle中注册的Onstart、Onstop函数主要是在app.start后，按构造函数的顺序来执行，stop时时候，按相反顺序执行\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("ul",[a("li",[n._v("示例代码如下")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('// mystruct 自定义类型\ntype mystruct struct{}\n\n// NewMyConstruct 返回mystruct结构体实例, 会初始化日志\nfunc NewMyConstruct(logger *log.Logger) mystruct {\n\tlogger.Println("Executing NewMyConstruct.")\n\treturn mystruct{}\n}\n\n// NewHandler 获取handler\nfunc NewHandler(lc fx.Lifecycle, logger *log.Logger) (http.Handler, error) {\n\tlogger.Print("Executing NewHandler.")\n\tlc.Append(fx.Hook{\n\t\t// app.start调用\n\t\tOnStart: func(i context.Context) error {\n\t\t\tlogger.Println("handler onstart..")\n\t\t\treturn nil\n\t\t},\n\t\tOnStop: func(i context.Context) error {\n\t\t\tlogger.Println("handler onstop..")\n\t\t\treturn nil\n\t\t},\n\t})\n\n\tsayHello := func(w http.ResponseWriter, r *http.Request) {\n\t\tfmt.Fprintln(w, "Hello Robby")\n\t}\n\n\treturn http.HandlerFunc(sayHello), nil\n}\n\n// NewMux 启动http server\nfunc NewMux(lc fx.Lifecycle, logger *log.Logger) *http.ServeMux {\n\tlogger.Print("Executing NewMux.")\n\tmux := http.NewServeMux()\n\tserver := &http.Server{\n\t\tAddr:    ":8080",\n\t\tHandler: mux,\n\t}\n\tlc.Append(fx.Hook{\n\t\t// app.start调用\n\t\tOnStart: func(context.Context) error {\n\t\t\tlogger.Print("Starting HTTP server.")\n\t\t\tgo func() {\n\t\t\t\tif err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {\n\t\t\t\t\tlogger.Print(err)\n\t\t\t\t}\n\t\t\t}()\n\t\t\treturn nil\n\t\t},\n\t\tOnStop: func(ctx context.Context) error {\n\t\t\tlogger.Print("Stopping HTTP server.")\n\t\t\treturn server.Shutdown(ctx)\n\t\t},\n\t})\n\n\treturn mux\n}\n\n// NewLogger : fx 懒惰的调用 构造器， 仅有其它的函数需要 logger时， 才会调用 Newlogger. 一旦 被初始化，loggere 将会缓存并重用，因此在整个程序内， 其将是一个单实例\nfunc NewLogger(lc fx.Lifecycle) *log.Logger {\n\tlogger := log.New(os.Stdout, "" /* prefix */, 0 /* flags */)\n\tlogger.Print("Executing NewLogger.")\n\t\n\tlc.Append(fx.Hook{\n\t\t// app.start调用\n\t\tOnStart: func(i context.Context) error {\n\t\t\tlogger.Println("logger onstart..")\n\t\t\treturn nil\n\t\t},\n\t\t// app.stop调用\n\t\tOnStop: func(i context.Context) error {\n\t\t\tlogger.Println("logger onstop..")\n\t\t\treturn nil\n\t\t},\n\t})\n\treturn logger\n}\n\n// invokeNothingUse 什么都不做\nfunc invokeNothingUse() {\n\tfmt.Println("invokeNothingUse...")\n}\n\n// invokeRegister (最重要)将路由配置与handler匹配，初始化ServeMux、HandlerLogger\nfunc invokeRegister(mux *http.ServeMux, h http.Handler, logger *log.Logger) {\n\tlogger.Println("invokeRegiste...")\n\tmux.Handle("/", h)\n}\n\n// invokeAnotherFunc 初始化 loger\nfunc invokeAnotherFunc(logger *log.Logger) {\n\tlogger.Println("invokeAnotherFunc...")\n}\n\n// invokeUseMyconstruct 初始化日志、mystruct结构体实例\nfunc invokeUseMyconstruct(logger *log.Logger, c mystruct) {\n\tlogger.Println("invokeUseMyconstruct..")\n}\n\nfunc main() {\n\tapp := fx.New(\n\t\tfx.Provide(\n\t\t\tNewMyConstruct,\n\t\t\tNewHandler,\n\t\t\tNewMux,\n\t\t\tNewLogger,\n\t\t),\n\n\t\tfx.Invoke(invokeNothingUse, invokeRegister, invokeAnotherFunc, invokeUseMyconstruct),\n\t)\n\n\t// 启动container\n\t// 在典型的应用程序中， 我们仅需要运行 app.Run 。应为我们不想要程序永远的运行在这儿， 因此我们需要更加复杂的 Start 和 Stop\n\tapp.Run()\n\n\t/*\n\t\t如果使用start和stop启动app, 那么程序会停止，http server不会在后台运行\n\t*/\n\t//startCtx, cancel := context.WithTimeout(context.Background(), 15*time.Second)\n\t//defer cancel()\n\t//if err := app.Start(startCtx); err != nil {\n\t//\tlog.Fatal(err)\n\t//}\n\n\t//http.Get("http://localhost:8080/")\n\n\t//// 停止container\n\t//stopCtx, cancel := context.WithTimeout(context.Background(), 15*time.Second)\n\t//defer cancel()\n\t//if err := app.Stop(stopCtx); err != nil {\n\t//\tlog.Fatal(err)\n\t//}\n\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br"),a("span",{staticClass:"line-number"},[n._v("126")]),a("br"),a("span",{staticClass:"line-number"},[n._v("127")]),a("br"),a("span",{staticClass:"line-number"},[n._v("128")]),a("br"),a("span",{staticClass:"line-number"},[n._v("129")]),a("br"),a("span",{staticClass:"line-number"},[n._v("130")]),a("br"),a("span",{staticClass:"line-number"},[n._v("131")]),a("br"),a("span",{staticClass:"line-number"},[n._v("132")]),a("br"),a("span",{staticClass:"line-number"},[n._v("133")]),a("br"),a("span",{staticClass:"line-number"},[n._v("134")]),a("br"),a("span",{staticClass:"line-number"},[n._v("135")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports},736:function(n,s,t){n.exports=t.p+"assets/img/2021-06-033.19.28.2d3164cb.png"}}]);