(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{2294:function(s,e,n){"use strict";n.r(e);var t=n(9),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"_1-j2ee与tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-j2ee与tomcat"}},[s._v("#")]),s._v(" 1：J2EE与Tomcat")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("J2EE是一套技术实现方案，Tomcat实现了J2EE中的Servlet和JSP， Servlet用于处理java应用程序\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-tomcat开启jmx-在idea中直接部署代码到开发服务器中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-tomcat开启jmx-在idea中直接部署代码到开发服务器中"}},[s._v("#")]),s._v(" 2：Tomcat开启JMX, 在IDEA中直接部署代码到开发服务器中")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载Tomcat二进制安装包")])]),s._v(" "),t("li",[t("p",[s._v("编辑/root/tomcat/bin/catalina.sh，添加如下配置选项，开启jmx")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 192.168.43.203这个IP需要在/etc/hosts文件中被解析到\nCATALINA_OPTS="$CATALINA_OPTS -Dcom.sun.management.jmxremote -Djava.rmi.server.hostname=192.168.43.203 -Dcom.sun.management.jmxremote.port=9999 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false"\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("使用catalina.sh重启tomcat")])]),s._v(" "),t("li",[t("p",[s._v("查看jmx的9999端口是否已经监听, 如果9999端口监听，说明jxm正常开启")])])]),s._v(" "),t("h3",{attrs:{id:"_3-配置tomcat管理权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置tomcat管理权限"}},[s._v("#")]),s._v(" 3：配置tomcat管理权限")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('1: vi /opt/modules/apache-tomcat-8.5.45/webapps/manager/META-INF/context.xml ，注释掉访问控制\n<Context antiResourceLocking="false" privileged="true" >\n\x3c!--\n  <Valve className="org.apache.catalina.valves.RemoteAddrValve"\n         allow="127\\.\\d+\\.\\d+\\.\\d+|::1|0:0:0:0:0:0:0:1" />\n  <Manager sessionAttributeValueClassNameFilter="java\\.lang\\.(?:Boolean|Integer|Long|Number|String)|org\\.apache\\.catalina\\.filters\\.CsrfPreventionFilter\\$LruCache(?:\\$1)?|java\\.util\\.(?:Linked)?HashMap"/>\n --\x3e\n</Context>\n\n\n2: vi /opt/modules/apache-tomcat-8.5.45/webapps/host-manager/META-INF/context.xml\n\n3：vi /opt/modules/apache-tomcat-8.5.45/conf/tomcat-users.xml\n        <role rolename="manager-gui"/>\n        <role rolename="admin-gui"/>\n        <user username="tomcat" password="tomcat" roles="manager-gui,admin-gui"/>\n        \n3: 重启tomcat\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h3",{attrs:{id:"_4-在idea中创建tomcat-remote-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-在idea中创建tomcat-remote-server"}},[s._v("#")]),s._v(" 4：在IDEA中创建Tomcat Remote Server")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在Mac本地下载Tomcat二进制包")])]),s._v(" "),t("li",[t("p",[s._v("配置SFTP连接Tomcat服务器， 编辑项目的configurations文件")])])]),s._v(" "),t("p",[t("img",{attrs:{src:n(864),alt:"Alt text"}})]),s._v(" "),t("p",[t("img",{attrs:{src:n(865),alt:"Alt text"}})]),s._v(" "),t("p",[t("img",{attrs:{src:n(866),alt:"Alt text"}})]),s._v(" "),t("h3",{attrs:{id:"_5-创建servlet应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建servlet应用"}},[s._v("#")]),s._v(" 5：创建Servlet应用")]),s._v(" "),t("ul",[t("li",[s._v("由于本地开发需要导入tomcat的一下包，因此，选择项目，点击右键选择 "),t("code",[s._v("open module settings")]),s._v("， 选择Libraries，点击+号，将本地的Tomcat的"),t("code",[s._v("servlet-api包")]),s._v("导入到模块中")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(867),alt:"Alt text"}})]),s._v(" "),t("ul",[t("li",[s._v("当然也可以在pom.xml文件中添加对应的jar包依赖")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    <dependency>\n      <groupId>javax.servlet</groupId>\n      <artifactId>javax.servlet-api</artifactId>\n      <version>4.0.1</version>\n      <scope>provided</scope>\n    </dependency>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("在main下创建java、resources两个目录，且将resources标记为资源目录，java为Root目录")])]),s._v(" "),t("li",[t("p",[s._v("在java目录中创建ServletApp类，作为第一个servlet应用接口")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import javax.servlet.ServletException;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\nimport java.io.IOException;\nimport java.io.PrintWriter;\n\n\n/**\n * Description:\n * Author:         Robby\n * CreateDate:     2019-10-16 23:29\n * Version:        1.0.0\n */\n\n\npublic class ServletApp extends HttpServlet {\n\n    // 重写service方法\n    @Override\n    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n    \n        // 获取浏览器端传递的参数\n        String name = req.getParameter("name");\n        // 构建HTML\n        String html = "<h1 style=\'color: red\'>Hello Tomcat. My name is " + name +"</h1>";\n        System.out.println(html);\n        // 创建响应报文，返回浏览器\n        PrintWriter writer = resp.getWriter();\n        writer.println(html);\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("ul",[t("li",[s._v("编辑WEB-INF下的web.xml文件, 配置servlet别名，配置路由映射。这里的"),t("code",[s._v("servlet-name")]),s._v("为别名，"),t("code",[s._v("url-pattern")]),s._v("为请求的url路径。意思是请求 "),t("code",[s._v("http://192.168.43.201:8080/tomcat-app/hello")]),s._v("交由"),t("code",[s._v("ServletApp")]),s._v("类处理")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<!DOCTYPE web-app PUBLIC\n "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"\n "http://java.sun.com/dtd/web-app_2_3.dtd" >\n\n<web-app>\n  <display-name>Archetype Created Web Application</display-name>\n\n\n  \x3c!--配置servlet, 给ServletApp取别名--\x3e\n  <servlet>\n    <servlet-name>firstapp</servlet-name>\n    <servlet-class>ServletApp</servlet-class>\n  </servlet>\n\n  \x3c!--配置路由映射，让来自/hello的请求交由firstapp处理--\x3e\n  <servlet-mapping>\n    <servlet-name>firstapp</servlet-name>\n    <url-pattern>/hello</url-pattern>\n  </servlet-mapping>\n\n</web-app>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"_6-标准的java-web工程的目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-标准的java-web工程的目录结构"}},[s._v("#")]),s._v(" 6：标准的Java Web工程的目录结构")]),s._v(" "),t("p",[t("img",{attrs:{src:n(868),alt:"Alt text"}})]),s._v(" "),t("h3",{attrs:{id:"_7-解决tomcat远程服务器无法本地调试问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-解决tomcat远程服务器无法本地调试问题"}},[s._v("#")]),s._v(" 7：解决Tomcat远程服务器无法本地调试问题")]),s._v(" "),t("ul",[t("li",[s._v("在IDEA中，如果需要远程调试Tomcat服务器代码，那么需要配置debug的端口")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(869),alt:"Alt text"}})]),s._v(" "),t("ul",[t("li",[s._v("将远程连接debug端口参数添加到catalina.sh中")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 再加上一行端口参数配置选项\nCATALINA_OPTS="$CATALINA_OPTS -Dcom.sun.management.jmxremote \n               -Djava.rmi.server.hostname=192.168.43.201 \n               -Dcom.sun.management.jmxremote.port=9999 \n               -Dcom.sun.management.jmxremote.ssl=false \n               -Dcom.sun.management.jmxremote.authenticate=false\n               -agentlib:jdwp=transport=dt_socket,address=5214,suspend=n,server=y"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("此时，使用run debug的方式启动Tomcat项目，在IDEA中就可以打断点了")])]),s._v(" "),t("h3",{attrs:{id:"_8-编写一个form表单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-编写一个form表单"}},[s._v("#")]),s._v(" 8：编写一个form表单")]),s._v(" "),t("ul",[t("li",[s._v("在webapp目录下创建index.html")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<html>\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n\n\n<body>\n<h2>Hello World!</h2>\n<h2>Hello World!</h2>\n<h2>Hello World!</h2>\n<h2>Hello World!</h2>\n\n<div >\n    <form action="login">\n        <div>\n\n            <label for="username">用户名</label>\n            <input type="text" id="username" name="username">\n\n            <label for="password">密码</label>\n            <input type="text" id="password" name="password">\n\n            <input type="radio" name="gender" value="1" checked="checked">男\n            <input type="radio" name="gender" value="0">女\n\n            <input type="submit" name="提交">\n\n        </div>\n\n    </form>\n</div>\n</body>\n</html>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("ul",[t("li",[s._v("在java目录中创建SecondApp类，处理login请求")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import javax.servlet.ServletException;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\nimport java.io.IOException;\nimport java.io.PrintWriter;\n\npublic class SecondApp extends HttpServlet {\n\n    @Override\n    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n\n        String username = req.getParameter("username");\n        String password = req.getParameter("password");\n\n        // 获取到同名的参数列表\n        req.getParameterValues("milti_args");\n\n        // 构建HTML\n        String html = "<h1 style=\'color: red\'>Hello Tomcat. My name is " + username +", password is " + password + "</h1>";\n\n        // 创建响应报文，返回浏览器\n        PrintWriter writer = resp.getWriter();\n        writer.println(html);\n\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("ul",[t("li",[s._v("在WEB-INF目录的web.xml文件中，创建路由映射")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  <servlet>\n    <servlet-name>secondapp</servlet-name>\n    <servlet-class>SecondApp</servlet-class>\n  </servlet>\n\n  <servlet-mapping>\n    <servlet-name>secondapp</servlet-name>\n    <url-pattern>/login</url-pattern>\n  </servlet-mapping>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"_9-get和post请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-get和post请求"}},[s._v("#")]),s._v(" 9：GET和POST请求")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("public class GetPostMethod extends HttpServlet {\n\n    // GET请求\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n\n    }\n\n\n    // POST请求\n    @Override\n    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        \n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"_10-servlet生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-servlet生命周期"}},[s._v("#")]),s._v(" 10：Servlet生命周期")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1: 装载：web.xml\n\n2: 创建：调用构造函数\n\n3：初始化：init()\n\n4：提供服务：service()\n\n5：销毁：destroy()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("示例")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import javax.servlet.ServletConfig;\nimport javax.servlet.ServletException;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\nimport java.io.IOException;\n\n/**\n * Description:\n * Author:         Robby\n * CreateDate:     2019-10-18 00:10\n * Version:        1.0.0\n */\npublic class GetPostMethod extends HttpServlet {\n\n    // 1：构造器方法\n    public GetPostMethod() {\n        System.out.println("调用构造器，创建实例对象");\n    }\n\n    // 2：初始化方法\n    @Override\n    public void init(ServletConfig config) throws ServletException {\n        System.out.println("调用init方法");\n\n    }\n\n    // 3：GET请求\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n\n    }\n\n\n    // 3：POST请求\n    @Override\n    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n\n    }\n\n    // 4：销毁方法\n    @Override\n    public void destroy() {\n        System.out.println("调用destroy方法");\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br")])]),t("h3",{attrs:{id:"_11-servlet中的注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-servlet中的注解"}},[s._v("#")]),s._v(" 11：Servlet中的注解")]),s._v(" "),t("ul",[t("li",[t("p",[s._v('Servlet 引入"注解 Annotation"特性，与Springboot类似，用于简化配置。Servlet核心注解是'),t("code",[s._v("@WebServlet")])])]),s._v(" "),t("li",[t("p",[s._v("在java目录下创建AnnotationServlet类")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import javax.servlet.ServletException;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\nimport java.io.IOException;\n\n/**\n * Description:\n * Author:         Robby\n * CreateDate:     2019-10-18 00:38\n * Version:        1.0.0\n */\n\npublic class AnnotationServlet extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        resp.getWriter().println(\"<h1 style='color: green'>Hello Tomcat. My name is Robby </h1>\");\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("ul",[t("li",[s._v("无需配置web.xml文件，直接部署，在浏览器请求"),t("code",[s._v("http://192.168.43.201:8080/tomcat-app/register")])])]),s._v(" "),t("h3",{attrs:{id:"_12-servlet中启动时加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-servlet中启动时加载"}},[s._v("#")]),s._v(" 12：Servlet中启动时加载")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在web.xml中配置"),t("code",[s._v("<load-on-startup>0~9999</load-on-startup>")]),s._v(" 设置启动加载，0~9999是启动加载的优先级，0表示最先被加载")])]),s._v(" "),t("li",[t("p",[s._v("在java目录下创建InitServlet类")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('import javax.servlet.ServletException;\nimport javax.servlet.http.HttpServlet;\n\n/**\n * Description:\n * Author:         Robby\n * CreateDate:     2019-10-18 00:49\n * Version:        1.0.0\n */\npublic class InitServlet extends HttpServlet {\n\n    @Override\n    public void init() throws ServletException {\n        System.out.println("1：初始化数据库");\n        System.out.println("2：将配置加载到本地");\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("ul",[t("li",[s._v("在web.xml中设置这个类的优先级")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  <servlet>\n    <servlet-name>init</servlet-name>\n    <servlet-class>InitServlet</servlet-class>\n    <load-on-startup>0</load-on-startup>\n  </servlet>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("通过打断点可以发现，初始化servlet的时候，这个类中的init方法被执行了")])]),s._v(" "),t("li",[t("p",[s._v("或者在不配置web.xml文件的前提下，使用"),t("code",[s._v("注解")]),s._v("的方式，设置初始化servlet")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\nimport javax.servlet.ServletException;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.HttpServlet;\n\n/**\n * Description:\n * Author:         Robby\n * CreateDate:     2019-10-18 00:49\n * Version:        1.0.0\n */\npublic class InitServlet extends HttpServlet {\n\n    @Override\n    public void init() throws ServletException {\n        System.out.println("1：初始化数据库");\n        System.out.println("2：将配置加载到本地");\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])}),[],!1,null,null,null);e.default=a.exports},864:function(s,e,n){s.exports=n.p+"assets/img/2019-10-1712.25.37.191340da.png"},865:function(s,e,n){s.exports=n.p+"assets/img/2019-10-1712.31.54.7dc13462.png"},866:function(s,e,n){s.exports=n.p+"assets/img/2019-10-1710.05.03.e234db85.png"},867:function(s,e,n){s.exports=n.p+"assets/img/2019-10-1611.38.36.e27cc6bf.png"},868:function(s,e,n){s.exports=n.p+"assets/img/2019-10-1712.43.18.56fcfbc2.png"},869:function(s,e,n){s.exports=n.p+"assets/img/2019-10-171.11.47.8c81437c.png"}}]);