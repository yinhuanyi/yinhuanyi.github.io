(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1425:function(s,a,n){s.exports=n.p+"assets/img/2019-11-1412.54.47.694a6293.png"},1426:function(s,a,n){s.exports=n.p+"assets/img/2019-11-1412.55.16.f09c1df6.png"},1427:function(s,a,n){s.exports=n.p+"assets/img/2019-11-141.01.10.d519c64f.png"},2511:function(s,a,n){"use strict";n.r(a);var t=n(9),l=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一-layui基础说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-layui基础说明"}},[s._v("#")]),s._v(" 一：LayUI基础说明")]),s._v(" "),t("h3",{attrs:{id:"_1-模块使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-模块使用"}},[s._v("#")]),s._v(" 1：模块使用")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<script>\n// layui模块的使用， 这里使用了layer、form两个模块\nlayui.use(['layer', 'form'], function(){\n\n  // 获取这两个模块的对象\n  var layer = layui.layer\n  ,form = layui.form;\n\n  // 打印 Hello World消息\n  layer.msg('Hello World');\n});\n<\/script>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"_2-css命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-css命名规范"}},[s._v("#")]),s._v(" 2：CSS命名规范")]),s._v(" "),t("ul",[t("li",[s._v("CSS命名格式")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('命名格式一般分为两种：\n\t1：layui-状态或类型，例如：class="layui-inline"， 公共样式类\n\t2：layui-模块名-状态或类型，例如 class="layui-btn layui-btn-primary"，如果没有layui-btn，那么这个元素看起来将不会是一个按钮\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("自定义CSS规范")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 首先声明是一个markdown组件样式\n.layui-markdown{\n\tborder: 1px solid #e2e2e2;\n}\n\n// 再次在markdown组件基础上，对样式进行修饰\n.layui-markdown-tools{\n\n}\n\n.layui-markdown-text{\n\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[s._v("CSS的内置公共基础类")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(1425),alt:"Alt text"}})]),s._v(" "),t("p",[t("img",{attrs:{src:n(1426),alt:"Alt text"}})]),s._v(" "),t("h3",{attrs:{id:"_3-html规范-结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-html规范-结构"}},[s._v("#")]),s._v(" 3：HTML规范：结构")]),s._v(" "),t("ul",[t("li",[s._v("Layui在解析HTML元素时，必须充分确保其结构是被支持的，因此需要查阅文档。以Tab选项卡为例")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\x3c!--最外面定义了这个组件是一个tab组件--\x3e\n<div class="layui-tab">\n   \x3c!--tab组件内部支持layui-tab-title样式--\x3e\n  <ul class="layui-tab-title">\n    <li class="layui-this">标题一</li>\n    <li>标题二</li>\n    <li>标题三</li>\n  </ul>\n  \x3c!--tab组件内部支持layui-tab-content样式--\x3e\n  <div class="layui-tab-content">\n    <div class="layui-tab-item layui-show">内容1</div>\n    <div class="layui-tab-item">内容2</div>\n    <div class="layui-tab-item">内容3</div>\n  </div>\n</div>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"_4-常用公共属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用公共属性"}},[s._v("#")]),s._v(" 4：常用公共属性")]),s._v(" "),t("ul",[t("li",[s._v("以lay-开头的属性就是自定义公共属性")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// lay-submit定义表单提交的按钮, lay-filter非常重要，主要语法是监听事件\n\n<form class="layui-form" action="">\n\t<button class="layui-btn" lay-submit lay-filter="login">登入</button###  \n</form>\n\n<script>\n//Demo\nlayui.use(\'form\', function(){\n  var form = layui.form;\n  \n  //监听提交, submit(login)就是绑定登录按钮的提交事件\n  form.on(\'submit(login)\', function(data){\n    layer.msg(JSON.stringify(data.field));\n    return false;\n  });\n});\n<\/script>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ul",[t("li",[s._v("其他的自定义公共属性")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(1427),alt:"Alt text"}})]),s._v(" "),t("h3",{attrs:{id:"_5-预加载模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-预加载模块"}},[s._v("#")]),s._v(" 5：预加载模块")]),s._v(" "),t("ul",[t("li",[s._v("这个form.on('submit(test)', function(data){})是jQuery的写法")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/*\n  Demo1.js\n  使用Layui的form和upload模块\n*/\nlayui.use(['form', 'upload'], function(){  //如果只加载一个模块，可以不填数组。如：layui.use('form')\n  var form = layui.form //获取form模块\n  ,upload = layui.upload; //获取upload模块\n  \n  //监听提交按钮， 这个test应该是一个选择器\n  form.on('submit(test)', function(data){\n    console.log(data);\n  });\n  \n  //实例化一个上传控件\n  upload({\n    url: '上传接口url'\n    ,success: function(data){\n      console.log(data);\n    }\n  })\n});\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"_6-加载模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-加载模块"}},[s._v("#")]),s._v(" 6：加载模块")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("layui.use(['layer', 'laypage', 'laydate'], function(){\n  var layer = layui.layer //获得layer模块\n  ,laypage = layui.laypage //获得laypage模块\n  ,laydate = layui.laydate; //获得laydate模块\n  \n  //使用模块\n});\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_7-创建自己的layui模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-创建自己的layui模块"}},[s._v("#")]),s._v(" 7：创建自己的layui模块")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("第一步：确认模块名，假设为：mymod，然后新建一个mymod.js 文件放入项目任意目录下（注意：不用放入layui目录）")])]),s._v(" "),t("li",[t("p",[s._v("第二步：编写test.js 如下：")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/**\n  扩展一个test模块\n**/\nlayui.define(function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);\n  var obj = {\n    hello: function(str){\n      alert('Hello '+ (str||'mymod'));\n    }\n  };\n  \n  //输出test接口\n  exports('mymod', obj);\n});\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[s._v("第三步：设定扩展模块所在的目录，然后就可以在别的JS文件中使用了")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//config的设置是全局的\nlayui.config({\n  base: '/res/js/' //假设这是你存放拓展模块的根目录\n}).extend({ //设定模块别名\n  mymod: 'mymod' //如果 mymod.js 是在根目录，也可以不用设定别名\n  ,mod1: 'admin/mod1' //相对于上述 base 目录的子目录\n});\n \n//你也可以忽略 base 设定的根目录，直接在 extend 指定路径（主要：该功能为 layui 2.2.0 新增）\nlayui.extend({\n  mod2: '{/}http://cdn.xxx.com/lib/mod2' // {/}的意思即代表采用自有路径，即不跟随 base 路径\n})\n \n//使用拓展模块\nlayui.use(['mymod', 'mod1'], function(){\n  var mymod = layui.mymod\n  ,mod1 = layui.mod1\n  ,mod2 = layui.mod2;\n  \n  mymod.hello('World!'); //弹出 Hello World!\n});\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"_8-layui中-表单元素不显示的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-layui中-表单元素不显示的问题"}},[s._v("#")]),s._v(" 8：layui中，表单元素不显示的问题")]),s._v(" "),t("ul",[t("li",[s._v("当你使用表单时，layui 会对 select、checkbox、radio 等原始元素隐藏，从而进行美化修饰处理。但这需要依赖于 form 组件，所以你必须加载 form，并且执行一个实例")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("layui.use('form', function(){\n  var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功\n  \n  //……\n  \n  //但是，如果你的HTML是动态生成的，自动渲染就会失效\n  //因此你需要在相应的地方，执行下述方法来进行渲染\n  form.render();\n}); \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);a.default=l.exports}}]);