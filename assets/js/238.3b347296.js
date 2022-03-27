(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{2193:function(s,t,n){"use strict";n.r(t);var a=n(9),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-go-test工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-go-test工具"}},[s._v("#")]),s._v(" 一：go test工具")]),s._v(" "),a("h3",{attrs:{id:"一-go代码的测试-一般是以-test-go为后缀名的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-go代码的测试-一般是以-test-go为后缀名的文件"}},[s._v("#")]),s._v(" (一)：go代码的测试，一般是以_test.go为后缀名的文件")]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("*_test.go文件")]),s._v("中有三种类型的函数，"),a("code",[s._v("单元测试函数")]),s._v("、"),a("code",[s._v("基准测试函数")]),s._v("和"),a("code",[s._v("示例函数")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("格式")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("测试函数")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("函数名前缀为Test")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("测试程序的一些逻辑行为是否正确")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("基准函数")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("函数名前缀为Benchmark")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("测试函数的性能")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("示例函数")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("函数名前缀为Example")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("为文档提供示例文档")])])])]),s._v(" "),a("h3",{attrs:{id:"二-测试函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-测试函数"}},[s._v("#")]),s._v(" (二)：测试函数")]),s._v(" "),a("ul",[a("li",[s._v("测试函数的结构")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("func TestAdd(t *testing.T){ ... }\nfunc TestSum(t *testing.T){ ... }\nfunc TestLog(t *testing.T){ ... }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("参数t")]),s._v("用于生成"),a("code",[s._v("测试失败和附加的日志信息")]),s._v("，在测试函数中，可以调用的方法有：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("func (c *T) Error(args ...interface{})\nfunc (c *T) Errorf(format string, args ...interface{})\nfunc (c *T) Fail()\nfunc (c *T) FailNow()\nfunc (c *T) Failed() bool\nfunc (c *T) Fatal(args ...interface{})\nfunc (c *T) Fatalf(format string, args ...interface{})\nfunc (c *T) Log(args ...interface{})\nfunc (c *T) Logf(format string, args ...interface{})\nfunc (c *T) Name() string\nfunc (t *T) Parallel()\nfunc (t *T) Run(name string, f func(t *T)) bool\nfunc (c *T) Skip(args ...interface{})\nfunc (c *T) SkipNow()\nfunc (c *T) Skipf(format string, args ...interface{})\nfunc (c *T) Skipped() bool\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("例如， split.go 有一个字符串切割函数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("func Split(s, sep string) (result []string) {\n\ti := strings.Index(s, sep)\n\n\tfor i > -1 {\n\t\tresult = append(result, s[:i])\n\t\ts = s[i+1:]\n\t\ti = strings.Index(s, sep)\n\t}\n\tresult = append(result, s)\n\treturn\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("split_test.go，对这个函数进行测试")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('func TestSplit(t *testing.T) { // 测试函数名必须以Test开头，必须接收一个*testing.T类型参数\n\tgot := Split("a:b:c", ":")         // 程序输出的结果\n\twant := []string{"a", "b", "c"}    // 期望的结果\n\tif !reflect.DeepEqual(want, got) { // 因为slice不能比较直接，借助反射包中的方法比较\n\t\tt.Errorf("excepted:%v, got:%v", want, got) // 测试失败输出错误提示\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("在当前文件所在的目录下，执行"),a("code",[s._v("go test")]),s._v("，就可以测试函数的运行结果了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ go test\nPASS\nok      canal-es/utils  0.124s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("也可以使用"),a("code",[s._v('go test -v -run="Split"')]),s._v("，只测试run中正则匹配的函数，且显示详细结果")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ go test\n=== RUN   TestSplit\n--- PASS: TestSplit (0.00s)\nPASS\nok      canal-es/utils  0.432s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"三-测试组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-测试组"}},[s._v("#")]),s._v(" (三)：测试组")]),s._v(" "),a("ul",[a("li",[s._v("测试组是测试函数的升级，也就是在测试函数的基础上，测试多组数据，重新改下"),a("code",[s._v("TestSplit")]),s._v("函数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('func TestSplit(t *testing.T) {\n\t// 定义一个测试用例结构体\n\ttype test struct {\n\t\tinput string\n\t\tsep string\n\t\twant []string\n\t}\n\n\ttest1 := test{\n\t\tinput: "a,b,c,d",\n\t\tsep: ",",\n\t\twant: []string{"a", "b", "c", "d"},\n\t}\n\n\ttest2 := test{\n\t\tinput: "a:b:c:d",\n\t\tsep: ":",\n\t\twant: []string{"a", "b", "c", "d"},\n\t}\n\n\ttest3 := test{\n\t\tinput: "a|45545|adf|3",\n\t\tsep: "|",\n\t\twant: []string{"a", "45545", "adf", "3"},\n\t}\n\n\tvar  tests []test\n\ttests = append(tests, test1, test2, test3)\n\n\n\tfor _, item := range tests {\n\t\tgot := Split(item.input, item.sep)\n\t\tif !reflect.DeepEqual(got, item.want) {\n\t\t\tt.Errorf("excepted:%v, got:%v", item.want, got)\n\t\t}\n\t}\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h3",{attrs:{id:"四-子测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-子测试"}},[s._v("#")]),s._v(" (四)：子测试")]),s._v(" "),a("ul",[a("li",[s._v("子测试就是给测试组的每个用例取一个名称，那么如果测试出错了，就知道是哪个用例出错了，再次修改"),a("code",[s._v("TestSplit")]),s._v("测试函数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('func TestSplit(t *testing.T) {\n\t// 定义一个测试用例结构体\n\ttype test struct {\n\t\tinput string\n\t\tsep string\n\t\twant []string\n\t}\n\n\ttest1 := test{\n\t\tinput: "a,b,c,d",\n\t\tsep: ",",\n\t\twant: []string{"a", "b", "c", "d"},\n\t}\n\n\ttest2 := test{\n\t\tinput: "a:b:c:d",\n\t\tsep: ":",\n\t\twant: []string{"a", "b", "c", "d"},\n\t}\n\n\ttest3 := test{\n\t\tinput: "a|45545|adf|3",\n\t\tsep: "|",\n\t\twant: []string{"a", "45545", "adf", "3"},\n\t}\n\n\ttests := map[string]test{\n\t\t"逗号测试": test1,\n\t\t"分号测试": test2,\n\t\t"竖线测试": test3,\n\t}\n\t\n\tfor name, item := range tests {\n\t\tt.Run(name, func(t *testing.T) {  // 使用t.Run()执行子测试\n\t\t\tgot := Split(item.input, item.sep)\n\t\t\tif !reflect.DeepEqual(got, item.want) {\n\t\t\t\tt.Errorf("excepted:%v, got:%v", item.want, got)\n\t\t\t}\n\t\t})\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("ul",[a("li",[s._v("执行测试，可以看到每个测试用例的名称了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ go test -v -run="Split"\n=== RUN   TestSplit\n=== RUN   TestSplit/逗号测试\n=== RUN   TestSplit/分号测试\n=== RUN   TestSplit/竖线测试\n--- PASS: TestSplit (0.00s)\n    --- PASS: TestSplit/逗号测试 (0.00s)\n    --- PASS: TestSplit/分号测试 (0.00s)\n    --- PASS: TestSplit/竖线测试 (0.00s)\nPASS\nok      canal-es/utils  0.661s\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("当然也可以只执行一个测试用例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('go test -v -run="TestSplit/逗号测试"\n=== RUN   TestSplit\n=== RUN   TestSplit/逗号测试\n--- PASS: TestSplit (0.00s)\n    --- PASS: TestSplit/逗号测试 (0.00s)\nPASS\nok      canal-es/utils  0.353s\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"五-测试的覆盖率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-测试的覆盖率"}},[s._v("#")]),s._v(" (五)：测试的覆盖率")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("go test -cover -coverprofile=c.out")]),s._v("命令，可以将测试代码覆盖结果到c.out文件，如果不指定"),a("code",[s._v("-coverprofile=c.out")]),s._v("，那么就会输出到终端")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ go test -cover\nPASS\ncoverage: 1.7% of statements\nok      canal-es/utils  0.476s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("go tool cover -html=c.out")]),s._v("可以生成一个html查看测试覆盖率")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(703),alt:"Alt text"}})]),s._v(" "),a("h2",{attrs:{id:"二-基准测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-基准测试"}},[s._v("#")]),s._v(" 二：基准测试")]),s._v(" "),a("h3",{attrs:{id:"一-基准测试函数格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-基准测试函数格式"}},[s._v("#")]),s._v(" (一)：基准测试函数格式")]),s._v(" "),a("ul",[a("li",[s._v("基准测试可以用于测试代码的"),a("code",[s._v("耗时、内存占用、内存分配次数")]),s._v("，基准测试格式如下")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("func BenchmarkName(b *testing.B){ }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("基准测试以Benchmark为前缀，需要一个*testing.B类型的参数b，b.N是执行函数的次数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("func (c *B) Error(args ...interface{})\nfunc (c *B) Errorf(format string, args ...interface{})\nfunc (c *B) Fail()\nfunc (c *B) FailNow()\nfunc (c *B) Failed() bool\nfunc (c *B) Fatal(args ...interface{})\nfunc (c *B) Fatalf(format string, args ...interface{})\nfunc (c *B) Log(args ...interface{})\nfunc (c *B) Logf(format string, args ...interface{})\nfunc (c *B) Name() string\nfunc (b *B) ReportAllocs()\nfunc (b *B) ResetTimer()\nfunc (b *B) Run(name string, f func(b *B)) bool\nfunc (b *B) RunParallel(body func(*PB))\nfunc (b *B) SetBytes(n int64)\nfunc (b *B) SetParallelism(p int)\nfunc (c *B) Skip(args ...interface{})\nfunc (c *B) SkipNow()\nfunc (c *B) Skipf(format string, args ...interface{})\nfunc (c *B) Skipped() bool\nfunc (b *B) StartTimer()\nfunc (b *B) StopTimer()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ul",[a("li",[s._v("在split_test.go中创建一个"),a("code",[s._v("基准测试")]),s._v("，这里的b.N，是系统自动调整的")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// BenchmarkSplit 基准测试\nfunc BenchmarkSplit(b *testing.B) {\n\tfor i := 0; i < b.N; i++ {  \n\t\tSplit("s,d,f,a,s,d,f", ",")\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("测试一下上面的代码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ go test -bench=Split -benchmem\ngoos: darwin\ngoarch: amd64\npkg: canal-es/utils\nBenchmarkSplit-4         3806982               313 ns/op             240 B/op          4 allocs/op\nPASS\nok      canal-es/utils  2.092s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("测试结果分析")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1：BenchmarkSplit-4：这里的4是GOMAXPROCS\n2：3806982是b.N的值\n3：313是每次执行的耗时\n4：240B是每次执行占用了240字节\n5：4 allocs是每次执行有4次内存分配\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"二-性能比较函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-性能比较函数"}},[s._v("#")]),s._v(" (二)：性能比较函数")]),s._v(" "),a("ul",[a("li",[s._v("很多时候在测试的时候，会根据不同的数据集进行对比，那此时基准测试就可以这样写，一个函数对应多个基准测试，那么所有的基准测试的数据集不一样，就可以进行对比")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// benchmarkFib 这个函数用于给Fib(n)传递n的值\nfunc benchmarkFib(b *testing.B, n int) {\n\tfor i := 0; i < b.N; i++ {\n\t\tFib(n)\n\t}\n}\n\n// 在基准测试中，调用了benchmarkFib函数，改变每次基准测试的数据集\nfunc BenchmarkFib1(b *testing.B)  { benchmarkFib(b, 1) }\nfunc BenchmarkFib2(b *testing.B)  { benchmarkFib(b, 2) }\nfunc BenchmarkFib3(b *testing.B)  { benchmarkFib(b, 3) }\nfunc BenchmarkFib10(b *testing.B) { benchmarkFib(b, 10) }\nfunc BenchmarkFib20(b *testing.B) { benchmarkFib(b, 20) }\nfunc BenchmarkFib40(b *testing.B) { benchmarkFib(b, 40) }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[s._v("测试")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ go test -bench=. -benchmem -benchtime=20s\ngoos: darwin\ngoarch: amd64\npkg: canal-es/utils\nBenchmarkSplit-4        71142721               328 ns/op             240 B/op          4 allocs/op\nBenchmarkFib1-4         1000000000               2.10 ns/op            0 B/op          0 allocs/op\nBenchmarkFib2-4         1000000000               5.36 ns/op            0 B/op          0 allocs/op\nBenchmarkFib3-4         1000000000               8.92 ns/op            0 B/op          0 allocs/op\nBenchmarkFib10-4        73751079               337 ns/op               0 B/op          0 allocs/op\nBenchmarkFib20-4          480640             42854 ns/op               0 B/op          0 allocs/op\nBenchmarkFib40-4              37         625334898 ns/op               0 B/op          0 allocs/op\nPASS\nok      canal-es/utils  111.903s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"三-重置时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-重置时间"}},[s._v("#")]),s._v(" (三)：重置时间")]),s._v(" "),a("ul",[a("li",[s._v("b.ResetTimer之前的处理不会放到执行时间里，也不会输出到报告中，所以可以在之前做一些不计划作为测试报告的操作")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('func BenchmarkSplit(b *testing.B) {\n\ttime.Sleep(5 * time.Second) // 假设需要做一些耗时的无关操作\n\tb.ResetTimer()              // 重置计时器\n\tfor i := 0; i < b.N; i++ {\n\t\tSplit("沙河有沙又有河", "沙")\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"四-并行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-并行测试"}},[s._v("#")]),s._v(" (四)：并行测试")]),s._v(" "),a("ul",[a("li",[s._v("基准测试可以使用"),a("code",[s._v("BenchmarkSplitParallel")]),s._v("，进行并行测试")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('func BenchmarkSplitParallel(b *testing.B) {\n\t// b.SetParallelism(1) // 设置使用的CPU数\n\tb.RunParallel(func(pb *testing.PB) {\n\t\tfor pb.Next() {\n\t\t\tSplit("沙河有沙又有河", "沙")\n\t\t}\n\t})\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"三-示例函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-示例函数"}},[s._v("#")]),s._v(" 三：示例函数")]),s._v(" "),a("ul",[a("li",[s._v("示例函数的格式")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('func ExampleSplit() {\n\tfmt.Println(split.Split("a:b:c", ":"))\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("测试运行")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ go test -run Example\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports},703:function(s,t,n){s.exports=n.p+"assets/img/2021-07-202.57.25.28b2ad4c.png"}}]);