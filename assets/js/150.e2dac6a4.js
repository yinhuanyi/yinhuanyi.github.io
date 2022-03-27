(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{2388:function(s,a,t){"use strict";t.r(a);var n=t(9),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"web开发基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web开发基础"}},[s._v("#")]),s._v(" Web开发基础")]),s._v(" "),n("h3",{attrs:{id:"一-python-web-开发基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-python-web-开发基本概念"}},[s._v("#")]),s._v(" (一) Python Web 开发基本概念")]),s._v(" "),n("ul",[n("li",[s._v("WSGI")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("WSGI是作为Web服务器与Web应用程序或应用框架之间的一种低级别的接口，以提升可移植Web应用开发的共同点。WSGI是基于现存的CGI标准而设计的。\n\nWSGI可以认为是一种web server如何与web application通信的规范，或者是一种协议\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("服务器与应用程序直接的关系")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("WSGI区分为两个部分：一为“服务器”或“网关”，另一为“应用程序”或“应用框架”。在处理一个WSGI请求时，服务器会为应用程序提供环境信息及一个回调函数（Callback Function）。当应用程序完成处理请求后，透过前述的回调函数，将结果回传给服务器。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("WSGI中间件")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("所谓的 WSGI 中间件同时实现了API的两方，因此可以在WSGI服务器和WSGI应用之间起调解作用：从Web服务器的角度来说，中间件扮演应用程序，而从应用程序的角度来说，中间件扮演服务器。“中间件”组件可以执行以下功能：\n\n1:重写环境变量后，根据目标URL，将请求消息路由到不同的应用对象。\n2:允许在一个进程中同时运行多个应用程序或应用框架。\n3:负载均衡和远程处理，通过在网络上转发请求和响应消息。\n4:进行内容后处理，例如应用XSLT样式表。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("Python应用程序示例")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("def "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("environ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" start_response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("start_response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200 OK'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/plain'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world!\\n"')]),s._v("\n\n\n第一行定义了一个名为app的callable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 接受两个参数，environ和start_response，environ是一个字典包含了"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CGI")]),s._v("中的环境变量，start_response也是一个callable，接受两个必须的参数，status（"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),s._v("状态）和response_headers（响应消息的头）。\n\n第二行调用了start_response，状态指定为“"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("”，消息头指定为内容类型是“text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plain”。\n\n第三行将响应消息的消息体返回\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("支持WSGI规范的Web应用框架")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("BlueBream\nbobo\nBottle\nCherryPy\nDjango\nFlask\nGoogle App Engine's webapp2\nGunicorn\nprestans\nPylons\nPyramid\nrestlite\nTornado\nTrac\nTurboGears\nUliweb\nweb.py\nweb2py\nweblayer\nWerkzeug\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("ul",[n("li",[s._v("什么是uwsgi")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("uwsgi与WSGI一样是一种通信协议或规范，是uWSGI服务器的独占协议，用于定义传输信息的类型(type of information)，每一个uwsgi packet前4byte为传输信息类型的描述，与WSGI协议是两种东西，据说该协议是fcgi协议的10倍快\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("什么是uWSGI服务器")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(950),alt:"什么是uWSGI服务器"}})]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("uWSGI服务器是一个web服务器，实现了基于uwsgi协议的server部分，类似于Java的Tomcat,实现了WSGI协议、uwsgi协议、http协议等， 能够将http请求进行处理，在内部处理的逻辑从表面上看类似将HTTP请求转化为WSGI协议的请求。其为部署分布式集群的网络应用提供了一套完整的解决方案\n\nuWSGI的主要特点是：强悍的响应性能，低内存占用，多app管理，详尽的日志功能以及高度可定制，只需要在uWSGI的配置文件中指定application的地址，uWSGI就能直接和应用框架中的WSGI application通信，这就是常用的uWSGI + Django开发模式，如果需要Nginx做反向代理等功能，可以将整个web服务器扩展为 Nginx + uWSGI + Django 开发模式\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("wsgiref 模块实现的HTTP服务器 与 Django框架实现的HTTP demo server 实现原理对比")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(951),alt:"wsgiref"}})]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1：绿色部分是wsgiref模块中WSGI Server的实现\n\n2：黄色部分是Django框架中WSGI Server的实现\n\n3：蓝色部分是Django框架中Application的实现\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("需要注意的地方")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("wsgiref模块的中没有对Application实现，可以参照Django对Application的实现自己实现, application的必须是一个可调用对象，映射到Python的数据结构应该是函数、类、和实现了__call__方法的类实例对象\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"二-python-web-开发入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-python-web-开发入门"}},[s._v("#")]),s._v(" (二) Python Web 开发入门")]),s._v(" "),n("ul",[n("li",[s._v("wsgiref 模块实现的 WSGI Server + 自实现的 WSGI Application")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("from wsgiref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("simple_server "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" make_server\n\ndef "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wsgi_application")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("environ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" start_response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    status "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200 OK'")]),s._v("\n    headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/html;charset=utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("start_response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    html_template "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<h1> Hello World <h1>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("encode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("html_template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HOST")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PORT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make_server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HOST")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PORT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" wsgi_application"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("serve_forever")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("浏览器访问")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(952),alt:"浏览器访问"}})]),s._v(" "),n("ul",[n("li",[s._v("需要注意的地方")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：wsgiref模块提供了一个"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" Server服务器实现的参照样本，在生产开发Web服务器不能使用这个模块，仅仅是用来学习的服务器模块，重点是学习"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" Server实现的原理。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：Django的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" Server服务器也不能作为生产Web服务器提供服务，因为Django的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" Server也是一个实验类型的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" Server\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：在生产中通常使用高性能的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Server，例如：uWSGI服务器，Gunicorn服务器")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Jumpserver使用这个这个"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" Server服务器， 后端的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WSGI")]),s._v(" Application是Django的Application"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports},950:function(s,a,t){s.exports=t.p+"assets/img/2021-12-2421.39.11.1ac4d83d.png"},951:function(s,a,t){s.exports=t.p+"assets/img/wsgi.de3aeb89.png"},952:function(s,a,t){s.exports=t.p+"assets/img/2021-12-2421.43.01.d8c27d84.png"}}]);