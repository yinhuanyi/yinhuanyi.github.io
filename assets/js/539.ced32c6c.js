(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{2536:function(s,a,e){"use strict";e.r(a);var n=e(9),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-插槽使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-插槽使用"}},[s._v("#")]),s._v(" 一：插槽使用")]),s._v(" "),e("h3",{attrs:{id:"一-插槽内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-插槽内容"}},[s._v("#")]),s._v(" （一）插槽内容")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("<slot>插槽")]),s._v("的意义在于父组件引用子组件的同时，可以将一些内容写入到子组件的插槽中。例如在父组件引入了一个"),e("code",[s._v("<navigation-link>")]),s._v("子组件，"),e("code",[s._v("<navigation-link>")]),s._v("子组件的视图模板如下")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<a\n  v-bind:href="url"\n  class="nav-link"\n>\n  <slot></slot>\n</a>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("那么在父组件中引入子组件如下")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<navigation-link url="/profile">\n  这里可以是任何内容\n</navigation-link>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("如果"),e("code",[s._v("<navigation-link>")]),s._v("子组件中没有定义"),e("code",[s._v("<slot>插槽")]),s._v("，那么父组件写入的内容将会被忽略")])]),s._v(" "),e("h3",{attrs:{id:"二-编译作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-编译作用域"}},[s._v("#")]),s._v(" （二）编译作用域")]),s._v(" "),e("ul",[e("li",[s._v("父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。给子组件的插槽传递的内容如果涉及到模板语法，例如  url ，那么url变量必须在父组件被定义，如果url在子组件中定义，那么父组件是无法访问到的")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!--  url变量必须在父组件中被定义， url 才会有值  --\x3e\n<navigation-link url="/profile">\n  Clicking here will send you to: {{ url }}\n</navigation-link>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"三-插槽的默认内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-插槽的默认内容"}},[s._v("#")]),s._v(" （三）插槽的默认内容")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("<slot>插槽")]),s._v("在子组件中需要被父组件传递的内容替代掉，但是如果父组件没有传递内容，会使用"),e("code",[s._v("<slot>插槽")]),s._v("的默认内容，例如下面"),e("code",[s._v("<submit-button>")]),s._v("子组件，默认的按钮文本是Submit")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<button type="submit">\n  <slot>Submit</slot>\n</button>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("如果父组件引用子组件时传递了内容，就会被替换掉")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<submit-button>\n  Save\n</submit-button>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"四-命名插槽"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-命名插槽"}},[s._v("#")]),s._v(" （四）命名插槽")]),s._v(" "),e("ul",[e("li",[s._v("有时候在一个"),e("code",[s._v("<base-layout>")]),s._v("基础组件中需要有多个插槽。"),e("code",[s._v("<slot> 标签")]),s._v("有一个特殊的attribute，可以设置额外插槽的name，用于区分不同插槽的作用，一个不带 name 的"),e("code",[s._v("<slot> 插槽")]),s._v("会带有隐含的名字“default”。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div class="container">\n  <header>\n    <slot name="header"></slot>\n  </header>\n  <main>\n    <slot></slot>\n  </main>\n  <footer>\n    <slot name="footer"></slot>\n  </footer>\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ul",[e("li",[s._v("那么在父组件中引入"),e("code",[s._v("<base-layout>")]),s._v("基础组件的时候，可以在"),e("code",[s._v("<template> 标签")]),s._v("上使用 v-slot 指令来指定template标签中的内容插入到哪个插槽("),e("code",[s._v("v-slot 只能添加在 <template> 上")]),s._v(")")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<base-layout>\n  \x3c!--  h1标签会插入到name为header的插槽  --\x3e\n  <template v-slot:header>\n    <h1>Here might be a page title</h1>\n  </template>\n   \n  \x3c!--  没有指定插槽的内容将会被插入到默认插槽中  --\x3e  \n  <template v-slot:default>\n    <p>A paragraph for the main content.</p>\n    <p>And another one.</p>\n  </template>\t\n  \n  \x3c!--  p标签会插入到name为footer的插槽  --\x3e\t\n  <template v-slot:footer>\n    <p>Here's some contact info</p>\n  </template>\n</base-layout>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("ul",[e("li",[s._v("最终子组件视图模板渲染的结果如下")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div class="container">\n  <header>\n    <h1>Here might be a page title</h1>\n  </header>\n  <main>\n    <p>A paragraph for the main content.</p>\n    <p>And another one.</p>\n  </main>\n  <footer>\n    <p>Here\'s some contact info</p>\n  </footer>\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"二-作用域插槽"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-作用域插槽"}},[s._v("#")]),s._v(" 二：作用域插槽")]),s._v(" "),e("h3",{attrs:{id:"一-插槽访问子组件数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-插槽访问子组件数据"}},[s._v("#")]),s._v(" （一）插槽访问子组件数据")]),s._v(" "),e("ul",[e("li",[s._v("默认情况下，插槽的内容中无法访问子组件的数据，但是有时候需要访问，那么这种情况下，就需要使用到插槽 prop。下面的例子中："),e("code",[s._v("子组件的视图模板将user对象绑定到slot标签的user attribute上，父组件在引用子组件时，将插槽所有的prop 的对象命名为slotProps，那么在子组件中绑定的user attribute将会存在于slotProps对象中，那么父组件就可以访问到user对象了")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!--  下面是子组件的视图模板  --\x3e\n<span>\n  <slot v-bind:user="user">\n    {{ user.lastName }}\n  </slot>\n</span>\n\n\n\n\x3c!--  父组件引用子组件  --\x3e\n<current-user>\n  <template v-slot:default="slotProps">\n    \x3c!--  通过slotProps对象获取子组件的user对象  --\x3e\n    {{ slotProps.user.firstName }}\n  </template>\n</current-user>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"二-默认插槽的语法糖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-默认插槽的语法糖"}},[s._v("#")]),s._v(" （二）默认插槽的语法糖")]),s._v(" "),e("ul",[e("li",[s._v("如果子组件只有一个默认插槽，就可以不写template，直接将v-slot写在子组件的标签上即可")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<current-user v-slot:default="slotProps">\n  {{ slotProps.user.firstName }}\n</current-user>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("也可以将default去掉，因为只有一个slot，就是default插槽")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<current-user v-slot="slotProps">\n  {{ slotProps.user.firstName }}\n</current-user>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("如果子组件有多个插槽，必须使用template标签指定插槽")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<current-user>\n  <template v-slot:default="slotProps">\n    {{ slotProps.user.firstName }}\n  </template>\n\n  <template v-slot:other="otherSlotProps">\n    ...\n  </template>\n</current-user>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"三-子组件插槽的prop-可以在父组件中被直接解构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-子组件插槽的prop-可以在父组件中被直接解构"}},[s._v("#")]),s._v(" （三）子组件插槽的prop，可以在父组件中被直接解构")]),s._v(" "),e("ul",[e("li",[s._v("由于slotProps是一个对象，那么可以直接解构")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!--  由于slotProps只有一个user对象  --\x3e\n<current-user v-slot="{ user }">\n  {{ user.firstName }}\n</current-user>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("你也可以在解构的过程中重新命名")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<current-user v-slot="{ user: person }">\n  {{ person.firstName }}\n</current-user>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("如果插槽 prop可能是 undefined，那么还可以设置默认值")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<current-user v-slot=\"{ user = { firstName: 'Guest' } }\">\n  {{ user.firstName }}\n</current-user>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("父组件中使用插槽，还可以动态指定")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<base-layout>\n  <template v-slot:[dynamicSlotName]>\n    ...\n  </template>\n</base-layout>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"四-v-slot指令的缩写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-v-slot指令的缩写"}},[s._v("#")]),s._v(" （四）v-slot指令的缩写")]),s._v(" "),e("ul",[e("li",[s._v("与v-bind、v-on指令一样，v-slot指令也有对应的缩写"),e("code",[s._v("#")]),s._v("，例如 v-slot:header 可以被重写为 #header：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<base-layout>\n  <template #header>\n    <h1>Here might be a page title</h1>\n  </template>\n\n  <p>A paragraph for the main content.</p>\n  <p>And another one.</p>\n\n  <template #footer>\n    <p>Here's some contact info</p>\n  </template>\n</base-layout>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("ul",[e("li",[s._v("如果是default 插槽，可以写成这样")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<current-user #:default="{ user }">\n  {{ user.firstName }}\n</current-user>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);