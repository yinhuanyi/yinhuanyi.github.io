(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{2210:function(a,s,t){"use strict";t.r(s);var n=t(9),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("ul",[t("li",[a._v("Go语言内置的flag包实现了命令行参数的解析，flag包使得开发命令行工具更为简单")])]),a._v(" "),t("h2",{attrs:{id:"一-os-args"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-os-args"}},[a._v("#")]),a._v(" 一：os.Args")]),a._v(" "),t("h3",{attrs:{id:"一-参数解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-参数解析"}},[a._v("#")]),a._v(" (一)：参数解析")]),a._v(" "),t("ul",[t("li",[a._v("os.Args来获取命令行参数")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('if len(os.Args) > 0 {\n\tfor index, arg := range os.Args {\n\t\t// os.Args是一个存储命令行参数的字符串切片，它的第一个元素是执行文件的名称\n\t\tfmt.Printf("args[%d]=%v\\n", index, arg)\n\t\tfmt.Printf("%s\\n", arg)\n\t}\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"二-flag包基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-flag包基本使用"}},[a._v("#")]),a._v(" 二：flag包基本使用")]),a._v(" "),t("h3",{attrs:{id:"一-flag参数类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-flag参数类型"}},[a._v("#")]),a._v(" (一)：flag参数类型")]),a._v(" "),t("ul",[t("li",[a._v("flag包支持的命令行参数类型有bool、int、int64、uint、uint64、float、 float64、string、duration")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[a._v("flag参数")]),a._v(" "),t("th",{staticStyle:{"text-align":"right"}},[a._v("有效值")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("整数flag")]),a._v(" "),t("td",{staticStyle:{"text-align":"right"}},[a._v("1234、0664、0x1234等类型，也可以是负数")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("浮点数flag")]),a._v(" "),t("td",{staticStyle:{"text-align":"right"}},[a._v("合法浮点数")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("bool类型flag")]),a._v(" "),t("td",{staticStyle:{"text-align":"right"}},[a._v("1, 0, t, f, T, F, true, false, TRUE, FALSE, True, False。")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[a._v("时间段flag")]),a._v(" "),t("td",{staticStyle:{"text-align":"right"}},[a._v("任何合法的时间段字符串。如”300ms”、”-1.5h”、”2h45m”。合法的单位有”ns”、”us” /“µs”、”ms”、”s”、”m”、”h”。")])])])]),a._v(" "),t("h3",{attrs:{id:"二-定义命令行flag参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-定义命令行flag参数"}},[a._v("#")]),a._v(" (二)：定义命令行flag参数")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("有以下两种常用的定义命令行flag参数的方法")])]),a._v(" "),t("li",[t("p",[a._v("flag.Type(flag名, 默认值, 帮助信息) *Type 例如我们要定义姓名、年龄、婚否三个命令行参数，我们可以按如下方式定义：(需要注意的是，此时name、age、married、delay均为对应类型的指针)")])])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('name := flag.String("name", "张三", "姓名")\nage := flag.Int("age", 18, "年龄")\nmarried := flag.Bool("married", false, "婚否")\ndelay := flag.Duration("d", 0, "时间间隔")\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ul",[t("li",[a._v("flag.TypeVar( ) 方法 , 基本格式如下： flag.TypeVar(Type指针, flag名, 默认值, 帮助信息) 例如我们要定义姓名、年龄、婚否三个命令行参数，我们可以按如下方式定义：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var name string\nvar age int\nvar married bool\nvar delay time.Duration\nflag.StringVar(&name, "name", "张三", "姓名")\nflag.IntVar(&age, "age", 18, "年龄")\nflag.BoolVar(&married, "married", false, "婚否")\nflag.DurationVar(&delay, "d", 0, "时间间隔")\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h3",{attrs:{id:"三-flag-parse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-flag-parse"}},[a._v("#")]),a._v(" (三)：flag.Parse()")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("通过以上两种方法定义好命令行flag参数后，需要通过调用flag.Parse()来对命令行参数进行解析")])]),a._v(" "),t("li",[t("p",[a._v("支持的命令行参数格式有以下几种：")])])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-flag xxx （使用空格，一个-符号）\n--flag xxx （使用空格，两个-符号）\n-flag=xxx （使用等号，一个-符号）\n--flag=xxx （使用等号，两个-符号）\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ul",[t("li",[t("p",[a._v("其中，布尔类型的参数必须使用等号的方式指定")])]),a._v(" "),t("li",[t("p",[a._v("Flag解析在第一个非flag参数（单个”-“不是flag参数）之前停止，或者在终止符”–“之后停止")])])]),a._v(" "),t("h3",{attrs:{id:"四-flag其他函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-flag其他函数"}},[a._v("#")]),a._v(" (四)：flag其他函数")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("flag.Args()  //返回命令行参数后的其他参数，以[]string类型\nflag.NArg()  //返回命令行参数后的其他参数个数\nflag.NFlag() //返回使用的命令行参数个数\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"五-完整示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-完整示例"}},[a._v("#")]),a._v(" (五)：完整示例")]),a._v(" "),t("ul",[t("li",[a._v("定义")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('func main() {\n\t// 这里设置了默认值，默认值是张三，姓名是帮助信息\n\tname := flag.String("name", "张三", "姓名")\n\tage := flag.Int("age", 18, "年龄")\n\tmarried := flag.Bool("married", false, "婚否")\n\tdelay := flag.Duration("d", 0, "时间间隔")\n\n\tflag.Parse()\n\tfmt.Println(*name, *age, *married, *delay)\n\n\tfmt.Printf("命令行参数个数： %d", flag.NFlag())\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("ul",[t("li",[a._v("使用(命令行参数使用提示)")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('$ ./flag_demo -help\n\nUsage of ./flag_demo:\n  -age int\n        年龄 (default 18)\n  -d duration\n        时间间隔\n  -married\n        婚否\n  -name string\n        姓名 (default "张三")\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("ul",[t("li",[a._v("正常使用命令行flag参数")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ ./flag_demo -name 沙河娜扎 --age 28 -married=false -d=1h30m\n沙河娜扎 28 false 1h30m0s\n[]\n0\n4\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ul",[t("li",[a._v("使用非flag命令行参数")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ ./flag_demo a b c\n张三 18 false 0s\n[a b c]\n3\n0\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);