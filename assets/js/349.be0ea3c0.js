(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{2190:function(e,a,t){"use strict";t.r(a);var s=t(9),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ul",[t("li",[e._v("Go语言中的变量是分为两部分的：类型信息、值信息")])]),e._v(" "),t("h2",{attrs:{id:"一-反射介绍-反射在配置文件解析-数据库记录解析应用比较广泛"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-反射介绍-反射在配置文件解析-数据库记录解析应用比较广泛"}},[e._v("#")]),e._v(" 一：反射介绍(反射在配置文件解析，数据库记录解析应用比较广泛)")]),e._v(" "),t("h3",{attrs:{id:"一-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-介绍"}},[e._v("#")]),e._v(" (一)：介绍")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    反射是指在程序运行期对程序本身进行访问和修改的能力。程序在编译时，变量被转换为内存地址，变量名不会被编译器写入到可执行部分。在运行程序时，程序无法获取自身的信息\n\n    支持反射的语言可以在程序编译期将变量的反射信息，如字段名称、类型信息、结构体信息等整合到可执行文件中，并给程序提供接口访问反射信息，这样就可以在程序运行期获取类型的反射信息，并且有能力修改它们\n\n    Go程序在运行期使用reflect包访问程序的反射信息\n\n\t空接口可以存储任意类型的变量，那我们如何知道这个空接口保存的数据是什么呢？ 反射就可以在运行时动态的获取一个变量的类型信息和值信息\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h2",{attrs:{id:"二-reflect包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-reflect包"}},[e._v("#")]),e._v(" 二：reflect包")]),e._v(" "),t("ul",[t("li",[e._v("在Go语言的反射机制中，接口都由是一个具体类型和具体类型的值两部分组成的。 在Go语言中反射的相关功能由内置的reflect包提供，任意接口值在反射中都可以理解为由reflect.Type和reflect.Value两部分组成，并且**"),t("code",[e._v("reflect包提供了reflect.TypeOf和reflect.ValueOf两个函数来获取任意对象的Type和Value")]),e._v("**")])]),e._v(" "),t("h3",{attrs:{id:"一-reflect-typeof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-reflect-typeof"}},[e._v("#")]),e._v(" (一)：reflect.TypeOf()")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("可以使用reflect.TypeOf(x)获取x的类型，一般在项目中x都被设置为接口类型，那么"),t("code",[e._v("reflect.TypeOf(x)")]),e._v("可以获取到x的真实类型，返回的类型是"),t("code",[e._v("reflect.Type")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("reflect.Type")]),e._v("类型可以动态获取结构体信息，具有的常用方法如下")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1：Field(i int) StructField：根据索引，返回索引对应的结构体字段的信息。\n\n2：NumField() int：返回结构体成员字段数量。\n\n3：FieldByName(name string) (StructField, bool)：根据给定字符串返回字符串对应的结构体字段的信息。\n\n4：FieldByIndex(index []int) StructField：多层成员访问时，根据 []int 提供的每个结构体的字段索引，返回字段的信息。\n\n5：FieldByNameFunc(match func(string) bool) (StructField,bool)：根据传入的匹配函数匹配需要的字段。\n\n6：NumMethod() int：返回该类型的方法集中方法的数目\n\n7：Method(int) Method：返回该类型方法集中的第i个方法\n\n8：MethodByName(string)(Method, bool)：根据方法名返回该类型方法集中的方法\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])]),t("ul",[t("li",[e._v("小结")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" 因此，在Golang中，任何类型的对象，都可以转变为 interface{}类型 或者 reflect.Type类型，基于 reflect.Type类型 的各种方法，就可以动态的从对象中获取到信息\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"二-reflect-valueof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-reflect-valueof"}},[e._v("#")]),e._v(" (二)：reflect.ValueOf()")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("可以使用reflect.TypeOf(x)获取x的值，一般在项目中x都被设置为接口类型，那么"),t("code",[e._v("reflect.ValueOf(x)")]),e._v("可以获取到x的真实值，返回的类型是"),t("code",[e._v("reflect.Value")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("reflect.Value")]),e._v("类型是一个结构体，具有的常用方法如下，这里只是部分")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1：func (v Value) Set(x Value)：给v设置值，必须保证v的类型与x的类型一致，否则会panic\n\n2：func (v Value) SetBool(x bool)：设置bool值\n\n3：func (v Value) SetInt(x int64)：设置整型的值，如果v不是Int, Int8, Int16, Int32, or Int64类型，那么就会panic\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("h2",{attrs:{id:"三-结构体反射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-结构体反射"}},[e._v("#")]),e._v(" 三：结构体反射")]),e._v(" "),t("h3",{attrs:{id:"一-应用点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-应用点"}},[e._v("#")]),e._v(" (一)：应用点")]),e._v(" "),t("ul",[t("li",[e._v("结构体反射可以将一个map类型的数据结构映射到结构体中，一个很典型的例子就是"),t("code",[e._v("从数据库中获取的数据，映射到结构体中")]),e._v("，这个在sqlx或gorm中都有应用")])]),e._v(" "),t("h3",{attrs:{id:"二-举个例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-举个例子"}},[e._v("#")]),e._v(" (二)：举个例子")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("下面的代码中，"),t("code",[e._v("DataToStructByTagSql")]),e._v("函数接收两个变量，一个是map，一个是interface{}，在调用DataToStructByTagSql方法的时候，"),t("code",[e._v("给interface{}传递的是结构体指针")]),e._v("，目的是将may的数据，映射到结构体中。"),t("code",[e._v("函数中遍历结构体的字段，获取tag为sql对应的字段名称，获取结构体字段名称，获取结构体字段类型。基于sql对应的字段名从map获取value值，判断value是否与结构体字段类型一样，如果不一样将value的类型转换，将转换后的值赋值给结构体对应的字段")])])]),e._v(" "),t("li",[t("p",[e._v("这里"),t("code",[e._v("reflect.ValueOf(x).Type()")]),e._v("也可以获取到x的类型")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//DataToStructByTagSql 将map类型映射到结构体，根据结构体中sql标签映射数据到结构体中并且转换类型\nfunc DataToStructByTagSql(data map[string]string, obj interface{}) {\n\n\tobjValue := reflect.ValueOf(obj).Elem()  // reflect.ValueOf(obj)获取接口的类型值，.Elem()是获取指针对应的值\n\t// objValue.NumField()获取到结构体的成员数量\n\tfor i := 0; i < objValue.NumField(); i++ {\n\t\t/*\n\t\t这里以结构体Product的第一个属性为例： Id int64 `json:"id" sql:"id" ipfsmain:"id"`\n\t\t*/\n\t\t//获取sql对应的值，这里是获取data这个map中id对应的value值\n\t\tvalue := data[objValue.Type().Field(i).Tag.Get("sql")] // 其中objValue.Type()获取了值的类型, 这里获取了sql标签的值：id\n\t\t//获取对应字段的名称\n\t\tname := objValue.Type().Field(i).Name  // 名称是Id\n\t\t//获取对应字段类型\n\t\tstructFieldType := objValue.Field(i).Type() // 获取Id属性类型 int64\n\t\t//获取变量类型，也可以直接写"string类型"\n\t\tval := reflect.ValueOf(value) // 获取原始值\n\t\tvar err error\n\t\t// 如果map中id对应的value类型与结构体中id对应的类型不相等，那么就进行类型转换\n\t\tif structFieldType != val.Type() {\n\t\t\t//类型转换，将map中id对应的值，转换为结构体id对应的类型\n\t\t\tval, err = TypeConversion(value, structFieldType.Name()) //类型转换\n\t\t\tif err != nil {\n\n\t\t\t}\n\t\t}\n\t\t// 给objValue结构体对应的字段设置值\n\t\tobjValue.FieldByName(name).Set(val)\n\t}\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);