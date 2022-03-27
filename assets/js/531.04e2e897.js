(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{2521:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一-vue中绑定-html-class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-vue中绑定-html-class"}},[s._v("#")]),s._v(" 一：Vue中绑定 HTML Class")]),s._v(" "),n("h3",{attrs:{id:"一-对象语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-对象语法"}},[s._v("#")]),s._v(" （一）对象语法")]),s._v(" "),n("ul",[n("li",[s._v("由于v-bind指令可以接受参数，可以给 v-bind:class 传递一个对象，以动态的切换class的值。下面代码中："),n("code",[s._v("active这个class存在与否，取决于变量isActive是否为真")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div v-bind:class="{ active: isActive }"></div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("v-bind:class 同样可以与普通的class属性共存，当isActive或hasError变量变化时，class列表也会变化，这里text-danger使用引号是因为有中划线")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div\n  class="static"\n  v-bind:class="{ active: isActive, \'text-danger\': hasError }"\n></div>\n\n如果Vue实例的数据对象data如下：\ndata: {\n  isActive: true,\n  hasError: false\n}\n\n那么被渲染的结果为：\n<div class="static active"></div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[s._v("v-bind绑定的数据对象，不是必须写在视图中，可以写在JavaScript的Vue实例里面。当classObject变量变化了，对应的标签中class的列表也会变化，控制Vue实例从而控制Dom树")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div v-bind:class=\"classObject\"></div>\n\ndata: {\n  classObject: {\n    active: true,\n    'text-danger': false\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("当然也可以写在计算属性中，这种写法比较好")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div v-bind:class=\"classObject\"></div>\n\n\nvar app = new Vue({\n    el: '#app',\n    data: {\n\t  isActive: true,\n\t  error: null\n\t},\n\tcomputed: {\n\t  classObject: function () {\n\t    return {\n\t      active: this.isActive && !this.error,\n\t      'text-danger': this.error && this.error.type === 'fatal'\n\t    }\n\t  }\n\t}\n})\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"二-数组语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-数组语法"}},[s._v("#")]),s._v(" （二）数组语法")]),s._v(" "),n("ul",[n("li",[s._v("可以将一个对象赋值给"),n("code",[s._v("v-bind:class")]),s._v("，也可以将一个数组赋值给"),n("code",[s._v("v-bind:class")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div v-bind:class=\"[activeClass, errorClass]\"></div>\n\n\ndata: {\n  activeClass: 'active',\n  errorClass: 'text-danger'\n}\n\n\n// 渲染的结果为\n<div class=\"active text-danger\"></div>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("在数组中也可以使用"),n("code",[s._v("三元表达式")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div v-bind:class=\"[isActive ? activeClass : '', errorClass]\"></div>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("在数组中也可以使用对象语法")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div v-bind:class="[{ active: isActive }, errorClass]"></div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("v-bind也可以用在组件上")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 定义一个组件，将组件挂载到id=my-component的标签上\nVue.component(\'my-component\', {\n  template: \'<p class="foo bar">Hi</p>\'\n})\n\n// 组件绑定\n<my-component v-bind:class="{ active: isActive }"></my-component>\n\n// 当isActive为true时\n<p class="foo bar active">Hi</p>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"二-vue中绑定内联样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-vue中绑定内联样式"}},[s._v("#")]),s._v(" 二：Vue中绑定内联样式")]),s._v(" "),n("h3",{attrs:{id:"一-对象语法-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-对象语法-2"}},[s._v("#")]),s._v(" （一）对象语法")]),s._v(" "),n("ul",[n("li",[s._v("内联样式绑定的属性是style")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div v-bind:style=\"styleObject\"></div>\n\ndata: {\n  styleObject: {\n    color: 'red',\n    fontSize: '13px'\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("当然也可以改写为计算属性")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div v-bind:style=\"styleObject\"></div>\n\ndata: {\n\tisRed: true,\n\tsize: 13\n}\n\ncomputed: {\n      styleObject: function () {\n        return {\n          color: 'red'? isRed:''\n          fontSize: this.size + 'px'\n        }\n      }\n    }\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"二-数组语法-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-数组语法-2"}},[s._v("#")]),s._v(" （二）数组语法")]),s._v(" "),n("ul",[n("li",[s._v("v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div v-bind:style=\"[baseStyles, overridingStyles]\"></div>\n\ndata: {\n\tbaseStyles: {\n\t\tcolor: 'red'\n\t\tfontSize: '12px'\n\t},\n\toverridingStyles: {\n\t\tbackground-color: 'red'\n\t}\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"三-自动添加前缀"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-自动添加前缀"}},[s._v("#")]),s._v(" （三）自动添加前缀")]),s._v(" "),n("ul",[n("li",[s._v("当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS property 时，如 transform，Vue.js 会自动侦测并添加相应的前缀")])]),s._v(" "),n("h3",{attrs:{id:"四-多重值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-多重值"}},[s._v("#")]),s._v(" （四）多重值")]),s._v(" "),n("ul",[n("li",[s._v("从 2.3.0 起，你可以为 style 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div :style=\"{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }\"></div>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex")])])])}),[],!1,null,null,null);a.default=t.exports}}]);