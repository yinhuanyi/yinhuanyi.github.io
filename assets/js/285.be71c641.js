(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1397:function(s,n,e){s.exports=e.p+"assets/img/2021-11-132.38.39.2ff7b2df.png"},2495:function(s,n,e){"use strict";e.r(n);var a=e(9),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-新建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-新建项目"}},[s._v("#")]),s._v(" 一：新建项目")]),s._v(" "),a("h3",{attrs:{id:"一-基于vuecli创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-基于vuecli创建项目"}},[s._v("#")]),s._v(" （一）基于vuecli创建项目")]),s._v(" "),a("ul",[a("li",[s._v("创建项目，然后直接选择vue2 default即可")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Vue create element-test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("安装Element UI依赖")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i element-ui -S\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二-简要介绍webpack模块化开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-简要介绍webpack模块化开发"}},[s._v("#")]),s._v(" （二）简要介绍webpack模块化开发")]),s._v(" "),a("ul",[a("li",[s._v("在新建的"),a("code",[s._v("element-test")]),s._v("目录下，会有这个几个文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("├── README.md\n├── babel.config.js // babel的预设配置\n├── node_modules // 当前项目依赖\n├── package-lock.json\n├── package.json // npm项目的配置文件\n├── public\t\t // 挂载点\n│   ├── favicon.ico\n│   └── index.html\n└── src          // 项目源码\n    ├── App.vue  // 这个是根组件\n    ├── assets\n    ├── components // 其他的组件放在这里\n    └── main.js  // 项目入口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("在main.js文件中，会基于App.vue初始化Vue的根实例，挂载到id为app的元素上")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue'\nimport App from './App.vue'\nimport ElementUI from 'element-ui'\n// 引入按钮样式\nimport 'element-ui/lib/theme-chalk/index.css'\n\n// 以插件的方式加载Element UI\nVue.use(ElementUI)\n\nVue.config.productionTip = false\n\nnew Vue({\n  // render: createElement => createElement(App)\n  render: h => h(App),\n}).$mount('#app')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("在App.vue这个根组件中，会将自己export 出去。APP.vue就是一个组件文件，文件中包含三个部分："),a("code",[s._v("组件视图模板")]),s._v("、"),a("code",[s._v("组件实例")]),s._v("、"),a("code",[s._v("组件样式")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!-- 1：组件视图模板 --\x3e\n<template>\n  <div id="app">\n    <el-button v-on:click="show">按钮</el-button>\n  </div>\n</template>\n\n\x3c!-- 2：组件实例 --\x3e\n<script>\n\n// 这个export default表示将这个组件导出，那么在其组件里面，就可以：import App from \'./App.vue\' 导入了\nexport default {\n  name: \'App\',\n  methods: {\n    show: function () {\n      // this.$message 是elementUI的一个组件，是一个提示\n      this.$message.success("使用了ElementUI")\n    }\n  }\n}\n\n<\/script>\n\n\x3c!-- 3：组件样式 --\x3e\n<style>\n\n</style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"三-按需加载第三方组件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-按需加载第三方组件库"}},[s._v("#")]),s._v(" （三）按需加载第三方组件库")]),s._v(" "),a("ul",[a("li",[s._v("如果导入第三方库直接全部导入，例如导入Element UI库，会使得打包后的项目非常大")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 全部导入\nimport ElementUI from 'element-ui'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("运行"),a("code",[s._v("npm run build")]),s._v("，构建项目，在当前项目会生成一个dist目录，这个dist目录就是打包好的项目文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dist\n├── css\n│   └── chunk-vendors.a16c4353.css // 第三方库的css\n├── favicon.ico\n├── fonts\n│   ├── element-icons.535877f5.woff\n│   └── element-icons.732389de.ttf\n├── index.html\n└── js\n    ├── app.4ceacc04.js  // 自己写的js\n    |── app.4ceacc04.js.map\n    ├── chunk-vendors.6ca06fb2.js // 第三方库的js\n    |—— chunk-vendors.6ca06fb2.js.map\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("此时查看一下chunk-vendors.6ca06fb2.js大小，发现有3M多")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-rw-r--r--  1 Robby  staff   807K Nov 13 00:32 chunk-vendors.6ca06fb2.js\n\n-rw-r--r--  1 Robby  staff   3.1M Nov 13 00:32 chunk-vendors.6ca06fb2.js.map\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("那么如果是按需加载，那么打包后就会小很多。使用 babel-plugin-component 来实现按需加载组件和样式，安装"),a("code",[s._v("babel-plugin-component")]),s._v("库")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// -D 表示 --dev\nnpm install babel-plugin-component -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("修改babel.config.js的配置，让babel可以预设ElementUI和其CSS")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('module.exports = {\n  presets: [\n    \'@vue/cli-plugin-babel/preset\'\n  ],\n  plugins: [\n    [\n      \'component\',\n      {\n        "libraryName": "element-ui",\n        "styleLibraryName": "theme-chalk"\n      }\n    ],\n  ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[s._v("那么在导入ElementUI的组件和CSS样式的时候，就可以按需导入了。"),a("code",[s._v("那么修改main.js文件如下")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue'\nimport App from './App.vue'\n\n// 按需导入Button组件\nimport { Button, Message } from \"element-ui\"\n\n/*\n不在像下面的样子，全部导入ElementUI组件，因此注释掉\n*/\n// import ElementUI from 'element-ui'\n// import 'element-ui/lib/theme-chalk/index.css'\n\n\n\n// 在使用Button这样的基础组件，可以全局注册到Vue中\n// Button.name：名称, Button：构造函数\nVue.component(Button.name, Button)\n// message组件需要加入到Vue的原型链上\nVue.prototype.$message = Message\n\nVue.config.productionTip = false\n\nnew Vue({\n  // render: createElement => createElement(App)\n  render: h => h(App),\n}).$mount('#app')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("ul",[a("li",[s._v("那么重新打包项目，可以发现第三方js文件大小明显小了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-rw-r--r--  1 Robby  staff   117K Nov 13 01:11 chunk-vendors.50ebdd90.js\n-rw-r--r--  1 Robby  staff   575K Nov 13 01:11 chunk-vendors.50ebdd90.js.map\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"四-使用vue的element插件-快速导入elementui组件库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-使用vue的element插件-快速导入elementui组件库"}},[s._v("#")]),s._v(" （四）使用vue的element插件，快速导入ElementUI组件库")]),s._v(" "),a("ul",[a("li",[s._v("重新创建一个项目")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vue create element-test-test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("直接在vue的基础上安装Element插件，完成对ElementUI组件库的集成。"),a("code",[s._v("那么这样就可以快速开始一个项目了，不需要再去安装ElementUI库了")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vue add element\n\n这里选择组件库全部导入：Fully import\n这里选择不覆盖原有的ElementUI变量 No\n语言选择中文 zh-CN\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("此时新项目会多了一个plugins/element.js文件，用于导入ElementUI库，element.js文件内容如下， 在main.js文件中会导入它")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue'\nimport Element from 'element-ui'\nimport 'element-ui/lib/theme-chalk/index.css'\n\nVue.use(Element)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"二-el-form组件的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-el-form组件的使用"}},[s._v("#")]),s._v(" 二：el-form组件的使用")]),s._v(" "),a("h3",{attrs:{id:"一-form-表单的字段校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-form-表单的字段校验"}},[s._v("#")]),s._v(" （一）Form 表单的字段校验")]),s._v(" "),a("ul",[a("li",[s._v("form表单的校验方式有两种：el-form-item的内容校验和form表单提交校验")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("第一种校验方式：el-form-item的内容校验\n\t在字段内容校验中，需要在<el-form>元素上绑定一个:rules，用于在data选项中定义校验规则，对需要校验内容的<el-form-item>上，绑定prop，用于在规则中指定对哪个<el-form-item>校验\n\n\n第二种校验方式：form表单提交校验\n\t需要提前给<el-form>元素绑定ref的ID，在提交按钮的方法中，获取到<el-form>组件实例，调用实例的validate()方法，如果表单填写不合法，那么需要对submit提交进行拦截\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("一般而言，在开发过程中，el-form-item的内容校验和form表单提交校验是同时使用的。el-form-item的内容校验只是给用户提示，form表单提交校验才能阻止表单数据的提交。下面是Form校验的组件代码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div id="app">\n\n    \x3c!-- :rules表示表单校验的规则 --\x3e\n    \x3c!-- ref="form"表示为这个组件绑定一个ID引用  --\x3e\n    <el-form inline :model="data" :rules="rules" ref="form">\n\n      \x3c!--  prop="user" 在rules校验的时候，会直接获取user输入的内容进行校验 --\x3e\n      <el-form-item label="审批人" prop="user">\n        <el-input v-model="data.user" placeholder="审批人"></el-input>\n      </el-form-item>\n\n      <el-form-item label="活动区域">\n        <el-select v-model="data.region" placeholder="活动区域">\n          <el-option label="区域一" value="shanghai"></el-option>\n          <el-option label="区域二" value="beijing"></el-option>\n        </el-select>\n      </el-form-item>\n\n      <el-form-item>\n        <el-button type="primary" @click="onSubmit">查询</el-button>\n      </el-form-item>\n\n    </el-form>\n  </div>\n</template>\n\n<script>\n\n  export default {\n    name: \'app\',\n    data: function () {\n      // 自定义校验规则\n      const userValidator = (rule, value, callback) => {\n        // 当输入大于3个字符\n        if (value.length > 3) {\n          callback() // 表示通过\n        } else {\n          callback(new Error(\'用户名长度必须大于3\'))\n        }\n      }\n\n      return {\n        data: {\n          user: \'sam\',\n          region: \'区域二\'\n        },\n        rules: {\n          // 给user这个prop定义两条规则, trigger表示：当内容变化的时候校验\n          user: [\n            { required: true, trigger: \'change\', message: \'用户名必须录入\' },\n            { validator: userValidator, trigger: \'change\' }\n          ]\n        }\n      }\n    },\n    methods: {\n      // 为什么要关闭eslint\n      /* eslint-disable */\n      onSubmit: function () {\n        console.log(this.data)\n        // 因为在组件模板设置了ref这个ID, this.$refs.form是获取当前的form组件实例\n        // 判断form组件实例提交的数据是否合法\n        this.$refs.form.validate((isValid, errors)=>{\n          console.log(isValid, errors)\n        })\n      }\n    }\n  }\n\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br")])]),a("h3",{attrs:{id:"二-手动添加校验方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-手动添加校验方法"}},[s._v("#")]),s._v(" （二）手动添加校验方法")]),s._v(" "),a("ul",[a("li",[s._v("对于每一个Form表单字段的校验规则，是开发过程中提前就定义好的。但是也可以通过JavaScript动态的加入校验规则。例如下面的form表单，再添加一个按钮，当点击按钮的时候，添加新的校验规则。校验规则的动态添加逻辑在addRule方法里面")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<template>\n  <div id="app">\n\n    \x3c!-- :rules表示表单校验的规则 --\x3e\n    \x3c!-- ref="form"表示为这个组件绑定一个ID引用  --\x3e\n    <el-form inline :model="data" :rules="rules" ref="form">\n\n      \x3c!--  prop="user" 在rules校验的时候，会直接获取user输入的内容进行校验 --\x3e\n      <el-form-item label="审批人" prop="user">\n        <el-input v-model="data.user" placeholder="审批人"></el-input>\n      </el-form-item>\n\n      <el-form-item label="活动区域">\n        <el-select v-model="data.region" placeholder="活动区域">\n          <el-option label="区域一" value="shanghai"></el-option>\n          <el-option label="区域二" value="beijing"></el-option>\n        </el-select>\n      </el-form-item>\n\n      <el-form-item>\n        <el-button type="primary" @click="onSubmit">查询</el-button>\n        <el-button type="primary" @click="addRule">添加校验规则</el-button>\n      </el-form-item>\n\n    </el-form>\n  </div>\n</template>\n\n<script>\n\n  export default {\n    name: \'app\',\n    data: function () {\n      // // 自定义校验规则\n      // const userValidator = (rule, value, callback) => {\n      //   // 当输入大于3个字符\n      //   if (value.length > 3) {\n      //     callback() // 表示通过\n      //   } else {\n      //     callback(new Error(\'用户名长度必须大于3\'))\n      //   }\n      // }\n\n      return {\n        data: {\n          user: \'sam\',\n          region: \'区域二\'\n        },\n        rules: {\n          // 给user这个prop定义两条规则, trigger表示：当内容变化的时候校验\n          user: [\n            { required: true, trigger: \'change\', message: \'用户名必须录入\' },\n            // { validator: userValidator, trigger: \'change\' }\n          ]\n        }\n      }\n    },\n    methods: {\n      // 为什么要关闭eslint\n      /* eslint-disable */\n      onSubmit: function () {\n        console.log(this.data)\n        // 因为在组件模板设置了ref这个ID, this.$refs.form是获取当前的form组件实例\n        // 判断form组件实例提交的数据是否合法\n        this.$refs.form.validate((isValid, errors)=>{\n          console.log(isValid, errors)\n        })\n      },\n      addRule: function () {\n        // 定义一个校验函数\n        const userValidator = (rule, value, callback) => {\n          if (value.length > 3) {\n            callback()\n          } else {\n            callback(new Error(\'用户名长度必须大于3\'))\n          }\n        }\n\n        const newRule = [\n          ...this.rules.user,\n          { validator: userValidator, trigger: \'change\' }\n        ]\n\n        // 将两个rule合并到一起\n        this.rules = Object.assign({}, this.rules, { user: newRule })\n\n      },\n    }\n  }\n\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br")])]),a("h3",{attrs:{id:"三-表单的相关样式属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-表单的相关样式属性"}},[s._v("#")]),s._v(" （三）表单的相关样式属性")]),s._v(" "),a("ul",[a("li",[s._v("el-form的样式属性（如果是字符串，那么就是attribute，所以不需要v-bind绑定，如果是其他类型需要v-bind绑定）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<el-form\n    :model="data"\n    :rules="rules"\n    ref="form"\n    \n    :inline="false"  // 设置表单是否在一行排列\n    :status-icon="true"\n    style="width: 500px"  // 设置表单组件的宽度\n    label-width="100px" // 设置label的宽度\n    label-position="left" // 设置label的位置\n    label-suffix=":" // 设置label内容后缀\n    disabled  // 设置是否禁用表单\n    size="small" // 设置表单的整体大小\n>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("这里重点介绍一下v-bind和非v-bind传递数据的意义(容易搞混淆的知识点)")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\t当引用了第三方组件的时候，经常需要传递一些attribute，用于修改第三方组件的样式。attribute数据类型往往是不一样，查看第三方组件源码的时候，可以看到组件会定义props，自定需要传递的数据类型。数据类型可以分为两类，一类是字符串类型，一类是非字符串类型。\n\n1：字符串类型的attribute传递：\n\t当需要传递的attribute是字符串类型，例如size这个attribute，第三方组件的props中size为String类型，那么父组件传递size的时候，也需要传递String类型的数据。例如在<el-form> 组件中，size="small"\n\n\n2：非字符串类型的attribute传递：\n\t当需要传递的attribute是非字符串类型，例如inline这个attribute，第三方组件的props中inline为Boolean类型，那么父组件传递inline的时候，也需要传递Boolean类型的数据，那么就需要使用v-bind绑定inline，例如在<el-form> 组件中，:inline="false"，这个时候false会被第三方组件认为是变量传递，且变量的类型是Boolean类型。如果是inline="false"这样传递，那么第三方组件认为false是字符串类型，就会报错: false is not a valid value for inline\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("最终渲染效果如下")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(1397),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("对于任何组件如何使用，需要查看ElementUI文档即可")])])])}),[],!1,null,null,null);n.default=t.exports}}]);