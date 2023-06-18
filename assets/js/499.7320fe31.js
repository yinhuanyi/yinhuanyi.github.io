(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{2475:function(s,a,n){"use strict";n.r(a);var t=n(9),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一-scala的不可变数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-scala的不可变数组"}},[s._v("#")]),s._v(" 一：Scala的不可变数组")]),s._v(" "),n("h3",{attrs:{id:"一-使用类创建数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-使用类创建数组"}},[s._v("#")]),s._v(" (一)使用类创建数组")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1："),n("code",[s._v("object Hello extends App")]),s._v("可以直接作为程序的入口，不需要写main函数了")]),s._v(" "),n("li",[s._v("2：可以使用Array这个类创建空数组")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 程序的入口\nobject Hello extends App {\n  // 初始化一个字符串类型的空数组，长度为5\n  val array = new Array[String](5)\n\n  // 基于索引给数组赋值\n  array(0) = "Robby"\n  array(1) = "Marry"\n  array(2) = "Seve"\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"二-赋值创建数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-赋值创建数组"}},[s._v("#")]),s._v(" (二)赋值创建数组")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1："),n("code",[s._v('Array("Robby", "Marry", "Petter")')]),s._v("可以直接变成字符串")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('object Hello extends App {\n  // 初始化一个字符串类型的空数组，长度为5\n  // 这个Array赋值的方式是调用了apply方法\n  val array = Array("Robby", "Marry", "Petter")\n  println(array.length)\n\n  println(array.min)\n  println(array.max)\n  // 将数组转换为string类型\n  println(array.mkString(","))\n  // Marry\n  // Robby\n  // Robby,Marry,Petter\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"二-scala的可变数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-scala的可变数组"}},[s._v("#")]),s._v(" 二：Scala的可变数组")]),s._v(" "),n("h3",{attrs:{id:"一-可变数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-可变数组"}},[s._v("#")]),s._v(" (一)可变数组")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1：添加元素，插入元素，遍历等")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 程序的入口\nobject Hello extends App {\n\n  val mutableArray = scala.collection.mutable.ArrayBuffer[Int]()\n\n  // 添加一个元素\n  mutableArray += 1\n  mutableArray += 100\n  // 添加多个元素\n  mutableArray += (3,4,5)\n  // 添加一个数组\n  mutableArray ++= Array(10,20,30)\n  // 基于索引插入元素\n  mutableArray.insert(0,999)\n  // 基于索引替换元素\n  mutableArray(1) = 10000\n  // 删除索引为1的元素\n  mutableArray.remove(1)\n  // 删除多个连续元素\n  mutableArray.remove(1,4)\n  // 删除最后一个元素\n  mutableArray.trimEnd(1)\n  // 转换为Array\n  val array = mutableArray.toArray\n\n  println(mutableArray.mkString(","))\n\n  \n  // 遍历直接取元素\n  for (i <- mutableArray){\n    println(i)\n  }\n\n  // 反向遍历\n  for(i <- (0 until mutableArray.length).reverse){\n    println(mutableArray(i))\n  }\n  \n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("h2",{attrs:{id:"三-scala的list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-scala的list"}},[s._v("#")]),s._v(" 三：Scala的List")]),s._v(" "),n("h3",{attrs:{id:"一-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-list"}},[s._v("#")]),s._v(" (一)list")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1：list有两种，一种是长度不可变，一种是长度可变")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 程序的入口\nobject Hello extends App {\n\n  // 长度不可变\n  var list = List(1,2,3,4,5)\n  println(list.head) // 1\n  println(list.tail) // List(2, 3, 4, 5)\n\n  println(1::Nil) // List(1)\n  println(100::list) // List(100, 1, 2, 3, 4, 5)\n\n  // 长度可变\n  var list1 = scala.collection.mutable.ListBuffer[Int](5) // ListBuffer(5)\n  list1 += 5 // ListBuffer(5, 5)\n  println(list1)\n\n  def sum(nums: Int*): Int = {\n    if (nums.length == 0){\n      0\n    }else{\n      // 不断迭代\n      nums.head + sum(nums.tail:_*)\n    }\n  }\n  println(sum(1,2,3,4,5)) // 15\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h2",{attrs:{id:"四-scala的set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-scala的set"}},[s._v("#")]),s._v(" 四：Scala的Set")]),s._v(" "),n("h3",{attrs:{id:"一-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-set"}},[s._v("#")]),s._v(" (一)Set")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1：Set主要是元素无法重复,且无序")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("object Hello extends App {\n\n  var set = Set(1,2,2,2,3,1) // 不可重复Set(1, 2, 3)\n\n  var set1 = scala.collection.mutable.Set[Int]()\n  set += 1\n  println(set)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"五-scala的map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五-scala的map"}},[s._v("#")]),s._v(" 五：Scala的Map")]),s._v(" "),n("h3",{attrs:{id:"一-map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-map"}},[s._v("#")]),s._v(" (一)Map")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1：创建不可变map, 可变map，hashMap")]),s._v(" "),n("li",[s._v("2：map的取值，赋值，遍历操作")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import scala.collection.mutable\n\n// 程序的入口\nobject Hello extends App {\n  var map = Map("name" -### "Robby", "age" -> 28)  // Map(name -> Robby, age -> 28)\n  var name = map("name") // Robby\n\n  // 初始化可变map\n  var map1 = scala.collection.mutable.Map("name" -### "Robby", "age" -> 28) // Map(age -> 28, name -> Robby)\n\n  // 初始化hashmap\n  var map2 = mutable.HashMap[String, Int]()\n\n  // Marry是默认值\n  name = map.getOrElse("name", "Marry") // Some(Robby)\n\n\n  // 添加元素\n  map2("weight") = 20 // Map(weight -### 20)\n\n  map2 += ("feature1" -### 1, "feature2" -> 2 ) // Map(feature2 -> 2, weight -> 20, feature1 -> 1)\n\n  map2 -= "feature1"  // Map(feature2 -### 2, weight -> 20)\n\n\n  // 遍历1\n  for ((key, value) <- map2){\n    println(key + ": " + value)  // feature2: 2    weight: 20\n  }\n\n  // 遍历2\n  for (key <- map2.keySet){\n    println(key + ": " + map2.getOrElse(key, 1))  // feature2: 2    weight: 20\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h2",{attrs:{id:"六-scala的option、some、none"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六-scala的option、some、none"}},[s._v("#")]),s._v(" 六：Scala的Option、Some、None")]),s._v(" "),n("h3",{attrs:{id:"一-option、some、none"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-option、some、none"}},[s._v("#")]),s._v(" (一)Option、Some、None")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1：None是case object， Some是case class")])])])]),s._v(" "),n("h3",{attrs:{id:"七-scala的tuple"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七-scala的tuple"}},[s._v("#")]),s._v(" 七：Scala的Tuple")]),s._v(" "),n("h2",{attrs:{id:"一-option、some、none-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-option、some、none-2"}},[s._v("#")]),s._v(" (一)Option、Some、None")]),s._v(" "),n("ul",[n("li",[s._v("知识点说明：\n"),n("ul",[n("li",[s._v("1："),n("code",[s._v("tuple1._1")]),s._v("：取第一个元素，值为1")]),s._v(" "),n("li",[s._v("2："),n("code",[s._v("tuple1.productArity")]),s._v(": 获得元组的长度")]),s._v(" "),n("li",[s._v("3："),n("code",[s._v("tuple1.productElement(i)")]),s._v(": 基于索引取元组的元素")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 程序的入口\nobject Hello extends App {\n\n  val tuple1 = (1,2,3,4,5)\n  println(tuple1._1) // 取第一个元素，值为1\n\n  // tuple1.productArity 获得元组的长度\n  for (i <- 0 until tuple1.productArity){\n    // tuple1.productElement()基于索引取元组的元素\n    println(tuple1.productElement(i))\n  }\n  \n  val hostPort = ("192.168.23.1", 8080)\n  var host = hostPort._1  // "192.168.23.1"\n  var port = hostPort._2  // 8080\n  \n  \n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);