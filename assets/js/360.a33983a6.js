(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{2213:function(n,a,s){"use strict";s.r(a);var t=s(9),r=Object(t.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"一-encoding-binary包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-encoding-binary包"}},[n._v("#")]),n._v(" 一：encoding/binary包")]),n._v(" "),s("h3",{attrs:{id:"一-binary包有哪些功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-binary包有哪些功能"}},[n._v("#")]),n._v(" (一)：binary包有哪些功能")]),n._v(" "),s("ul",[s("li",[n._v("此包实现了对数据与byte之间的转换，以及varint的编解码")])]),n._v(" "),s("h3",{attrs:{id:"二-binary的read方法-读取缓冲区的字节数据写入到数值类型变量中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-binary的read方法-读取缓冲区的字节数据写入到数值类型变量中"}},[n._v("#")]),n._v(" (二)：binary的Read方法，读取缓冲区的字节数据写入到数值类型变量中")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('func main() {\n\n\tvar pi float64\n\n\t// 3.1415926...的字节表示法, 当前是小端字节序\n\tb := []byte{0x18,0x2d,0x44,0x54,0xfb,0x21,0x09,0x40}\n\n\t// 将字节数组使用缓冲区封装\n\tbuf := bytes.NewBuffer(b)\n\n\t// 将缓冲区的字节数据，基于小端字节序，写入到float64类型的变量中\n\terr := binary.Read(buf, binary.LittleEndian, &pi)\n\n\tif err != nil {\n\t\tlog.Fatalln("binary.Read failed:", err)\n\t}\n\n\tfmt.Printf("pi=%f\\n", pi)\n\n}\n\n\n输出结果：\npi=3.141593\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br")])]),s("h3",{attrs:{id:"三-binary的write方法-将数值类型变量的数据-转换为字节数组-写入到缓冲区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-binary的write方法-将数值类型变量的数据-转换为字节数组-写入到缓冲区"}},[n._v("#")]),n._v(" (三)：binary的Write方法，将数值类型变量的数据，转换为字节数组，写入到缓冲区")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('func main() {\n\n\tbuf := new(bytes.Buffer)\n\n\tvar pi float64 = math.Pi\n\n\tif err := binary.Write(buf, binary.LittleEndian, pi); err != nil {\n\t\tfmt.Println("binary.Write failed:", err)\n\t}\n\n\tfmt.Printf("byte arr=%v\\n", buf.Bytes())\n\n}\n\n\n输出结果：\nbyte arr=[24 45 68 84 251 33 9 64]\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])]),s("h3",{attrs:{id:"四-在解决tcp粘包问题的时候-需要使用到binary包-将数据包的长度的数值类型转换为字节类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-在解决tcp粘包问题的时候-需要使用到binary包-将数据包的长度的数值类型转换为字节类型"}},[n._v("#")]),n._v(" (四)：在解决TCP粘包问题的时候，需要使用到binary包，将数据包的长度的数值类型转换为字节类型")])])}),[],!1,null,null,null);a.default=r.exports}}]);