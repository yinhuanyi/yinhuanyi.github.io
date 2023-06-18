(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{2479:function(n,s,a){"use strict";a.r(s);var e=a(9),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"一-scala面向对象概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-scala面向对象概述"}},[n._v("#")]),n._v(" 一：Scala面向对象概述")]),n._v(" "),a("h3",{attrs:{id:"一-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-概述"}},[n._v("#")]),n._v(" (一)概述")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("封装：将属性和方法封装到类中\n继承：父类和子类之间的关系\n多态：父类引用指向子类对象\n\tPerson是父类，User是子类\n\tPerson person = new User()\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h3",{attrs:{id:"二-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-示例"}},[n._v("#")]),n._v(" (二)示例")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：_ 表示变量占位符")]),n._v(" "),a("li",[n._v("2：private [this] 表示属性在类中被隔离，属性私有，外界无法访问")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object ObjectApp {\n  def main(args: Array[String]): Unit = {\n    // 实例化类\n    val person = new People()\n    // 打印实例属性\n    println(person.name)\n    println(person.age)\n    // 调用方法\n    person.printInfo()\n\n  }\n}\n\n\nclass People{\n  // 声明类的属性\n  var name: String = _  // 可变, _表示占位\n  val age: Int = 10     // 不可变\n\n  // private [this]修饰的gender变量只能在当前类中被访问到，出了当前类无法访问\n  private [this] val gender: String = "male"\n\n  // 定义方法\n  def eat(): String = {\n    name + "在吃饭"\n  }\n\n  def sleep(): Unit ={\n    println(name + age + "在睡觉")\n  }\n  \n  // 方法访问私有变量\n  def printInfo(): Unit={\n    println(gender)\n  }\n\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br")])]),a("h2",{attrs:{id:"二-scala的主构造器和附属构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-scala的主构造器和附属构造器"}},[n._v("#")]),n._v(" 二：Scala的主构造器和附属构造器")]),n._v(" "),a("h3",{attrs:{id:"一-主构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-主构造器"}},[n._v("#")]),n._v(" (一)主构造器")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：People(val name: String, val age: Int)叫做主构造器")]),n._v(" "),a("li",[n._v("2：如果删除主构造器的val，那么外界无法访问类的变量")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object ObjectApp {\n  def main(args: Array[String]): Unit = {\n    // 实例化类\n    val person = new People("Robby", 28)\n    println(person.name)\n    println(person.age)\n  }\n}\n\n// 类名称后面的括号为主构造器\n// 如果这个val被删除，变量name在外界无法访问到\nclass People(val name: String, val age: Int){\n  println("name: " + name)\n  println("age: " + age)\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("h3",{attrs:{id:"二-附属构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-附属构造器"}},[n._v("#")]),n._v(" (二)附属构造器")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：def this(name: String, age: Int, gender: String)叫做附属构造器")]),n._v(" "),a("li",[n._v("2：this(name, age)附属构造器的第一行代码必须调用主构造器或者其他附属构造器")]),n._v(" "),a("li",[n._v("3：类在实例化的时候，首先调用主构造器，再调用附属构造器")]),n._v(" "),a("li",[n._v("4：附属构造器的变量名前不能带变量修饰符var")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object ObjectApp {\n  def main(args: Array[String]): Unit = {\n    // 实例化类\n    val person = new People("Robby", 28, "Male")\n    println(person.name)\n    println(person.age)\n    println(person.gender)\n\n  }\n}\n\n// 类名称后面的括号为主构造器\nclass People(val name: String, val age: Int){\n  println("name: " + name)\n  println("age: " + age)\n  println("gender: " + gender)\n\n  // 申明gender变量\n  var gender:String = _\n\n  // 附属构造器， 附属构造器的变量名前不能带变量修饰符var\n  def this(name: String, age: Int, gender: String){\n    // 附属构造器的第一行代码必须调用主构造器或者其他附属构造器\n    this(name, age)\n    // 将外界传递的gender变量，赋值给类中申明的gender\n    this.gender = gender\n  }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br")])]),a("h2",{attrs:{id:"三-scala的继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-scala的继承"}},[n._v("#")]),n._v(" 三：Scala的继承")]),n._v(" "),a("h3",{attrs:{id:"一-继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-继承"}},[n._v("#")]),n._v(" (一)继承")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1："),a("code",[n._v("class Student(name:String, age:Int, var major: String) extends People(name, age)")]),n._v(" 子类继承父类使用extends关键字，且父类需要指定构造方法的参数")]),n._v(" "),a("li",[n._v("2：继承中，会根据继承的父类参数的传递，调用父类的主构造方法和附属构造方法")]),n._v(" "),a("li",[n._v("3：如果父类有的属性，子类主构造方法中不需要写var，父类没有的属性，子类主构造方法中需要加上var")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object ObjectApp {\n  def main(args: Array[String]): Unit = {\n    // 实例化子类\n    val student = new Student("Robby", 28, "Male","Computer Science")\n\n    println("name: " + student.name + "\\n"\n      + "age: " + student.age + "\\n"\n      + "major: " + student.major + " "\n    )\n  }\n}\n\n// 类名称后面的括号为主构造器\nclass People(val name: String, val age: Int){\n\n  println("调用父类的主构造方法")\n\n  // 申明gender变量\n  var gender:String = _\n\n  // 附属构造器， 附属构造器的变量名前不能带变量修饰符var\n  def this(name: String, age: Int, gender: String){\n    // 附属构造器的第一行代码必须调用主构造器或者其他附属构造器\n    this(name, age)\n    // 将外界传递的gender变量，赋值给类中申明的gender\n    this.gender = gender\n    println("调用父类的附属构造方法")\n  }\n}\n\n\n// 如果父类有的属性，子类构造方法中不需要写var，父类没有的属性，子类构造方法中需要加上var\nclass Student(name: String, age: Int, gender: String,var major: String) extends People(name, age, gender){\n  println("调用子类的构造方法")\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br")])]),a("h2",{attrs:{id:"四-scala的重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-scala的重写"}},[n._v("#")]),n._v(" 四：Scala的重写")]),n._v(" "),a("h3",{attrs:{id:"一-重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-重写"}},[n._v("#")]),n._v(" (一)重写")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1："),a("code",[n._v('override def toString: String = "Student" + "{"')]),n._v(" 重写object的方法")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object ObjectApp {\n  def main(args: Array[String]): Unit = {\n    // 实例化子类\n    val student = new Student("Robby", 28, "Male","Computer Science")\n\n    println(student)\n  }\n}\n\n// 类名称后面的括号为主构造器\nclass People(val name: String, val age: Int){\n\n  println("调用父类的主构造方法")\n\n  // 申明gender变量\n  var gender: String = _\n\n  var country: String = "USA"\n\n  // 附属构造器， 附属构造器的变量名前不能带变量修饰符var\n  def this(name: String, age: Int, gender: String){\n    // 附属构造器的第一行代码必须调用主构造器或者其他附属构造器\n    this(name, age)\n    // 将外界传递的gender变量，赋值给类中申明的gender\n    this.gender = gender\n    println("调用父类的附属构造方法")\n  }\n}\n\n\n// 如果父类有的属性，子类构造方法中不需要写var，父类没有的属性，子类构造方法中需要加上var\nclass Student(name: String, age: Int, gender: String,var major: String) extends People(name, age, gender){\n  println("调用子类的构造方法")\n\n  // 重写父类的属性\n//  override var country = "China"\n\n\n  // 重写Obect类的toString方法\n  override def toString: String = "Student" + "{" +\n                                  "name: "+ name + ", " +\n                                  "age: "+ age + ", " +\n                                  "gender: "+ gender + ", " +\n                                  "major: "+ major + "}"\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br")])]),a("h2",{attrs:{id:"五-scala的抽象类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-scala的抽象类"}},[n._v("#")]),n._v(" 五：Scala的抽象类")]),n._v(" "),a("h3",{attrs:{id:"一-抽象类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-抽象类"}},[n._v("#")]),n._v(" (一)抽象类")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：抽象类：类的一个或多个方法没有完整的实现，只有定义")]),n._v(" "),a("li",[n._v("2：抽象类无法直接实例化")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("class APP1 {\n\n  def main(args: Array[String]): Unit = {\n    // 抽象类无法直接实例化\n    new Person()\n  }\n}\n\n// 类的一个或多个方法没有完整的实现，只有定义\nabstract class Person{\n  \n  def speak\n  def say: String\n  \n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("h3",{attrs:{id:"二-抽象类实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-抽象类实例化"}},[n._v("#")]),n._v(" (二)抽象类实例化")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：使用一个类继承抽象类，实现抽象类的所有的方法")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object Hello {\n  def main(args: Array[String]): Unit = {\n    val student = new Student()\n    student.speak\n    println(student.say)\n  }\n}\n\n\n\n// 类的一个或多个方法没有完整的实现，只有定义\nabstract class Person{\n\n  def speak\n  def say: String\n\n}\n\n// 继承抽象类，实现抽象类的所有的方法\nclass Student extends Person{\n\n  // 实现抽象类中的抽象方法\n  override def speak: Unit = {\n    println("Student speak")\n  }\n  override def say: String = {\n    "say"\n  }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br")])]),a("h2",{attrs:{id:"六-scala的伴生类和伴生对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-scala的伴生类和伴生对象"}},[n._v("#")]),n._v(" 六：Scala的伴生类和伴生对象")]),n._v(" "),a("h3",{attrs:{id:"一-伴生类和伴生对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-伴生类和伴生对象"}},[n._v("#")]),n._v(" (一)伴生类和伴生对象")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：一个类和一个对象名称相同，就是伴生类和伴生对象")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("object Hello {\n  def main(args: Array[String]): Unit = {\n\n  }\n}\n\n\n// 伴生类\nclass APP{\n\n}\n\n\n// 伴生对象\nobject APP{\n\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br")])]),a("h2",{attrs:{id:"七-scala的apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-scala的apply"}},[n._v("#")]),n._v(" 七：Scala的Apply")]),n._v(" "),a("h3",{attrs:{id:"一-object与class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-object与class"}},[n._v("#")]),n._v(" (一)object与class")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：APP对象是一个单例对象，每次调用只会初始化一次")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object Hello {\n  def main(args: Array[String]): Unit = {\n    for (i <- 1 to 10){\n      APP.increase\n    }\n    \n    // 返回结果为10\n    println(APP.count)\n  }\n}\n\n\n// 伴生类\nclass APP{\n\n}\n\n\n// 伴生对象\nobject APP{\n\n  println("Begin....")\n\n  var count = 0\n\n  def increase: Unit = {\n    count += 1\n  }\n\n  println("End....")\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br")])]),a("h3",{attrs:{id:"二-apply方法的调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-apply方法的调用"}},[n._v("#")]),n._v(" (二)apply方法的调用")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：类名( )会调用object的apply方法")]),n._v(" "),a("li",[n._v("2：实例名( )会调用class的apply方法")]),n._v(" "),a("li",[n._v("3：最佳写法是在object中new 类名")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object Hello {\n  def main(args: Array[String]): Unit = {\n\n    // 会调用APP对象中的apply方法\n    val b = APP()\n\n    println("~"*100)\n\n    val c = new APP()\n    println(c)\n    c()\n  }\n}\n\n\n// 伴生类\nclass APP{\n  def apply() = {\n    println("这是class APP的apply方法")\n\n    // 返回了一个实例\n    new APP\n  }\n}\n\n\n// 伴生对象\nobject APP{\n\n  println("Begin....")\n\n  var count = 0\n\n  def increase: Unit = {\n    count += 1\n  }\n  \n  // 在object中new 类名，\n  def apply() = {\n    println("这是object APP的apply方法")\n\n    // 返回了一个实例\n    new APP\n  }\n\n  println("End....")\n\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br")])]),a("h2",{attrs:{id:"八-scala的case-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八-scala的case-class"}},[n._v("#")]),n._v(" 八：Scala的Case Class")]),n._v(" "),a("h3",{attrs:{id:"一-case-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-case-class"}},[n._v("#")]),n._v(" (一)Case Class")]),n._v(" "),a("ul",[a("li",[n._v("知识点说明：\n"),a("ul",[a("li",[n._v("1：case class 与普通类的区别在于不用new")]),n._v(" "),a("li",[n._v("2：通常用在模式匹配中")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('object Hello {\n  def main(args: Array[String]): Unit = {\n\n    val person = Person("Robby")\n    println(person.name)\n\n  }\n}\n\ncase class Person(name: String)\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);