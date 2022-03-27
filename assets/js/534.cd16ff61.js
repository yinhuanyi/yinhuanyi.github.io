(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{2528:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-vue中事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-vue中事件处理"}},[s._v("#")]),s._v(" 一：Vue中事件处理")]),s._v(" "),a("h3",{attrs:{id:"一-监听事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-监听事件"}},[s._v("#")]),s._v(" （一）监听事件")]),s._v(" "),a("ul",[a("li",[s._v("v-on指令可以监听DOM事件，触发函数或表达式运行JavaScript代码，下面例子是触发一段JavaScript代码，让counter的值+1")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <div id="example-1">\n        <button v-on:click="counter += 1">Add 1</button>\n        <p>The button above has been clicked {{ counter }} times.</p>\n    </div>\n\n\n    <script>\n        var example1 = new Vue({\n            el: \'#example-1\',\n            data: {\n                counter: 0\n            }\n        })\n    <\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"二-事件处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-事件处理方法"}},[s._v("#")]),s._v(" （二）事件处理方法")]),s._v(" "),a("ul",[a("li",[s._v("一般情况下，事件处理逻辑比较复杂，那么就可以触发一个函数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<body>\n\n    <div id=\"app\">\n        <button v-on:click=\"greet\">Greet</button>\n    </div>\n\n\n    <script>\n        var app = new Vue({\n            el: '#app',\n            data: {\n                name: 'Vue.js'\n            },\n            methods: {\n                greet: function (event) {\n                    alert('Hello ' + this.name + '!')\n                    // `event` 是原生 DOM 事件\n                    if (event) {\n                        // 打印打印触发事件的标签名称\n                        alert(event.target.tagName)\n                    }\n                }\n            }\n        })\n    <\/script>\n\n</body>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"三-内联处理器中的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-内联处理器中的方法"}},[s._v("#")]),s._v(" （三）内联处理器中的方法")]),s._v(" "),a("ul",[a("li",[s._v("给方法传递参数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<body>\n\n    <div id=\"app\">\n        <button v-on:click=\"say('hi')\">Say hi</button>\n        <button v-on:click=\"say('what')\">Say what</button>\n    </div>\n\n\n    <script>\n        var app = new Vue({\n            el: '#app',\n            methods: {\n                say: function (message) {\n                    alert(message)\n                }\n            }\n        })\n    <\/script>\n\n</body>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("ul",[a("li",[s._v("传递参数的时候，可以传递一些特殊变量，例如 "),a("code",[s._v("$event")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<body>\n\n    <div id=\"app\">\n        <button v-on:click=\"warn('Form cannot be submitted yet.', $event)\">\n            Submit\n        </button>\n    </div>\n\n\n    <script>\n        var app = new Vue({\n            el: '#app',\n            methods: {\n                warn: function (message, event) {\n                    // 现在我们可以访问原生事件对象\n                    if (event) {\n                        event.preventDefault()\n                    }\n                    alert(message)\n                }\n            }\n        })\n    <\/script>\n\n</body>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"四-事件修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-事件修饰符"}},[s._v("#")]),s._v(" （四）事件修饰符")]),s._v(" "),a("ul",[a("li",[s._v("在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节，为了解决这个问题，Vue.js 为 v-on 提供了"),a("code",[s._v("事件修饰符")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".stop\n.prevent\n.capture\n.self\n.once\n.passive\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("事件修饰符常见的使用方式")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!-- 阻止单击事件继续传播 --\x3e\n<a v-on:click.stop="doThis"></a>\n\n\x3c!-- 提交事件不再重载页面 --\x3e\n<form v-on:submit.prevent="onSubmit"></form>\n\n\x3c!-- 修饰符可以串联 --\x3e\n<a v-on:click.stop.prevent="doThat"></a>\n\n\x3c!-- 只有修饰符 --\x3e\n<form v-on:submit.prevent></form>\n\n\x3c!-- 添加事件监听器时使用事件捕获模式 --\x3e\n\x3c!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 --\x3e\n<div v-on:click.capture="doThis">...</div>\n\n\x3c!-- 只当在 event.target 是当前元素自身时触发处理函数 --\x3e\n\x3c!-- 即事件不是从内部元素触发的 --\x3e\n<div v-on:click.self="doThat">...</div>\n\n\x3c!-- 点击事件将只会触发一次 --\x3e\n<a v-on:click.once="doThis"></a>\n\n\x3c!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 --\x3e\n\x3c!-- 而不会等待 `onScroll` 完成  --\x3e\n\x3c!-- 这其中包含 `event.preventDefault()` 的情况 --\x3e\n<div v-on:scroll.passive="onScroll">...</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"五-按键修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-按键修饰符"}},[s._v("#")]),s._v(" （五）按键修饰符")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("在监听键盘事件时")]),s._v("，我们经常需要检查详细的按键，Vue 允许为 v-on 在监听键盘事件时添加按键修饰符")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` --\x3e\n<input v-on:keyup.enter="submit">\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("你可以直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<input v-on:keyup.page-down="onPageDown">\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".enter\n.tab\n.delete (捕获“删除”和“退格”键)\n.esc\n.space\n.up\n.down\n.left\n.right\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("你还可以通过全局 config.keyCodes 对象自定义按键修饰符别名：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 可以使用 `v-on:keyup.f1`\nVue.config.keyCodes.f1 = 112\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"六-系统修饰键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-系统修饰键"}},[s._v("#")]),s._v(" （六）系统修饰键")]),s._v(" "),a("ul",[a("li",[s._v("可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".ctrl\n.alt\n.shift\n.meta\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("例如")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!-- Alt + C --\x3e\n<input v-on:keyup.alt.67="clear">\n\n\x3c!-- Ctrl + Click --\x3e\n<div v-on:click.ctrl="doSomething">Do something</div>\n\n\x3c!-- 即使 Alt 或 Shift 被一同按下时也会触发 --\x3e\n<button v-on:click.ctrl="onClick">A</button>\n\n\x3c!-- 有且只有 Ctrl 被按下的时候才触发 --\x3e\n<button v-on:click.ctrl.exact="onCtrlClick">A</button>\n\n\x3c!-- 没有任何系统修饰符被按下的时候才触发 --\x3e\n<button v-on:click.exact="onClick">A</button>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);