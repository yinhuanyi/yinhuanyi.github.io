(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{2292:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"_1-index-jsp基本语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-index-jsp基本语法"}},[s._v("#")]),s._v(" 1: index.jsp基本语法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<html>\n<body>\n<%--<h2>Hello World!</h2>--%>\n\n<%\n    out.println("<h1>hello</h1>");\n    out.println("<h1>hello</h1>");\n%>\n</body>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"_2-jsp的执行过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-jsp的执行过程"}},[s._v("#")]),s._v(" 2: JSP的执行过程")]),s._v(" "),e("ul",[e("li",[s._v("JSP的执行过程")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\t当第一次访问jsp页面时，会向一个servlet容器（tomcat等）发出请求，servlet容器先要把JSP页面转化为Servlet代码（.java），再编译成.class文件，再进行调用。当再次访问jsp页面时，跳过翻译和编译的过程，直接调用。\n\n1、 客户端发出请求\n\n2、web容器将jsp转化为servlet代码（.java）\n\n3、web容器将转化为servlet代码编译（.class）\n\n4、web容器加载编译后的代码并执行\n\n5、将执行结果响应给客户端\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"_3-jsp语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-jsp语法"}},[s._v("#")]),s._v(" 3: JSP语法")]),s._v(" "),e("ul",[e("li",[s._v("JSP语法安装功能分类")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：JSP代码块\n2：JSP声明构造块\n3：JSP输出指令\n4：JSP处理指令\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("1：JSP代码块")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 输出helloworld\n<%out.println("Hello World");%>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("2：JSP声明构造块")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 函数定义\n<%!public int add(int a, int b){return a-b}%>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("3：JSP输出指令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 输出name的值\n<%="<b>" + name + "</b>"%>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("4：JSP处理指令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 导入包，全局设置\n<%@page import="java.util"%>\n\n// 将其他JSP页面导入到当前的JSP页面\n<%@include %>\n\n// 引入JSP的标签库\n<%@taglib %>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"_4-jsp注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-jsp注释"}},[s._v("#")]),s._v(" 4: JSP注释")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<% -- 注释 -- %### ：JSP注释，被注释语句不做任何处理\n\n//、 /*...*/ ：注释java代码\n\n\x3c!-- html --### ： HTML注释，被注释的语句不会被浏览器解释\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_5-jsp打印质数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-jsp打印质数"}},[s._v("#")]),s._v(" 5: JSP打印质数")]),s._v(" "),e("ul",[e("li",[s._v("新建index.jsp页面, 写一个质数输出的HTML页面，使用JSP的四种语法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<%-- 1：导入java包且设置字符集--%>\n<%@page import="java.util.*" contentType="text/html; charset=utf-8" %>\n\n<%-- 2：方法说明 --%>\n<%!\n    private boolean isPrime(int num){\n        boolean flag = true;\n        for (int j = 2; j < num; j++) {\n            if (num % j == 0){\n                flag = false;\n                break;\n            }\n        }\n        return flag;\n    }\n%>\n\n<%-- 3：JPS代码 --%>\n<%\n    // 泛型必须是包装类或自定义类型，不能是基本数据类型\n    List<Integer### primes = new ArrayList<Integer>();\n\n    for (int i = 2; i < 1000; i++) {\n        // 调用isPrime方法，判断是质数\n        boolean result = isPrime(i);\n\n        if (result){\n            primes.add(i);\n        }\n    }\n%>\n\n<%-- 这个for循环还有一半花括号写在低下 --%>\n<%\n    // 打印列表中的值\n    for(int i: primes){\n\n%>\n\n    <div>\n        <h2 style="color: red;">\n            <%-- 4：这里引用了i的值--%>\n            <%= i%### 是质数\n        </h2>\n    </div>\n\n<%-- 这个花括号连接for循环的花括号 --%>\n<%\n    }\n%>\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br")])]),e("ul",[e("li",[s._v("小结")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\t上面的代码涉及到四种语法，分别是<%  %>、<%! %>、<%@ %>、<%= %>, 在JSP页面的其他地方可以写HTML代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_6-解决在jsp代码中out-println-语法报错的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-解决在jsp代码中out-println-语法报错的问题"}},[s._v("#")]),s._v(" 6: 解决在JSP代码中out.println()，语法报错的问题")]),s._v(" "),e("ul",[e("li",[s._v("这个问题的产生是由于项目中没有导入jsp-api.jar的原因，导入的方式有两种")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：在pom.xml文件中添加依赖，重启IDEA\n    <dependency>\n      <groupId>javax.servlet.jsp</groupId>\n      <artifactId>javax.servlet.jsp-api</artifactId>\n      <version>2.3.3</version>\n      <scope>provided</scope>\n    </dependency>\n\n2：或者在webapp目录下，创建lib目录，将tomcat的lib下的jsp-api.jar拷贝到lib目录，选择项目，右键open module settings，将这jsp-api.jar选择到项目中，重启IDEA\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"_7-jsp页面使用include嵌入其他页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-jsp页面使用include嵌入其他页面"}},[s._v("#")]),s._v(" 7: JSP页面使用include嵌入其他页面")]),s._v(" "),e("ul",[e("li",[s._v("新建一个header.jsp页面, 用于显示网页的头部信息")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<div>\n    这是文章的标题部分\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("新建一个footer.jsp页面, 用于显示网页的尾部信息")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<div>\n    这是文章的尾部\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("新建一个fun_article.jsp，将头部和尾部的jsp页面嵌入进来")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n\n<html>\n<head>\n    <title>娱乐文章</title>\n</head>\n<body>\n    <%--嵌入头部jsp--%>\n    <%@include file="header.jsp"%>\n\n    <%\n        out.println("<h1>娱乐文章</h1>");\n    %>\n    <%--嵌入尾部jsp--%>\n    <%@include file="footer.jsp"%>\n</body>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("ul",[e("li",[s._v("新建一个sport_article.jsp，将头部和尾部的jsp页面嵌入进来")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n\n<html>\n<head>\n    <title>体育文章</title>\n</head>\n<body>\n    <%@include file="header.jsp"%>\n    <%\n        out.println("<h1>体育文章</h1>");\n    %>\n    <%@include file="footer.jsp"%>\n</body>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("ul",[e("li",[s._v("访问"),e("code",[s._v("http://node1:8080/tomcat-app/fun_article.jsp")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(862),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("访问"),e("code",[s._v("http://node1:8080/tomcat-app/sport_article.jsp")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(863),alt:"Alt text"}})])])}),[],!1,null,null,null);n.default=t.exports},862:function(s,n,a){s.exports=a.p+"assets/img/2019-10-1811.52.07.64935120.png"},863:function(s,n,a){s.exports=a.p+"assets/img/2019-10-1811.52.00.27805f2e.png"}}]);