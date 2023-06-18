(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{2501:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-获取项目-精简项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-获取项目-精简项目"}},[s._v("#")]),s._v(" 一：获取项目，精简项目")]),s._v(" "),a("h3",{attrs:{id:"一-项目获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-项目获取"}},[s._v("#")]),s._v(" （一）项目获取")]),s._v(" "),a("ul",[a("li",[s._v("克隆")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/PanJiaChen/vue-element-admin\ncd vue-element-admin\nnpm i\nnpm run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"二-精简项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-精简项目"}},[s._v("#")]),s._v(" （二）精简项目")]),s._v(" "),a("ul",[a("li",[s._v("删除 src/views 下的源码，保留")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dashboard：首页\nerror-page：异常页面\nlogin：登录\nredirect：重定向\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("删除src/router/modules 文件夹")])]),s._v(" "),a("li",[a("p",[s._v("修改src/router/index.js，由于删除了组件，那么在对应的路由中就需要删除对应的引用。(这里有两个地方不知道是干嘛的，第一个是asyncRoutes、第二个是resetRouter函数)")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue'\nimport Router from 'vue-router'\n// 导入组件\nimport Layout from '@/layout'\n\n// 加载路由\nVue.use(Router)\n\n// 配置路由\nexport const constantRoutes = [\n  {\n    path: '/redirect',\n    component: Layout,\n    hidden: true,\n    children: [\n      {\n        path: '/redirect/:path(.*)',\n        component: () => import('@/views/redirect/index')\n      }\n    ]\n  },\n  {\n    path: '/login',\n    component: () => import('@/views/login/index'),\n    hidden: true\n  },\n  {\n    path: '/auth-redirect',\n    component: () => import('@/views/login/auth-redirect'),\n    hidden: true\n  },\n  {\n    path: '/404',\n    component: () => import('@/views/error-page/404'),\n    hidden: true\n  },\n  {\n    path: '/401',\n    component: () => import('@/views/error-page/401'),\n    hidden: true\n  },\n  {\n    path: '/',\n    component: Layout,\n    redirect: '/dashboard',\n    children: [\n      {\n        path: 'dashboard',\n        component: () => import('@/views/dashboard/index'),\n        name: 'Dashboard',\n        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }\n      }\n    ]\n  }\n]\n\n// Todo: 配置异步路由\nexport const asyncRoutes = [\n  { path: '*', redirect: '/404', hidden: true }\n]\n\n// 定义路由实例创建函数\nconst createRouter = () => new Router({\n  // 这个不知道干嘛的\n  scrollBehavior: () => ({ y: 0 }),\n  // 加载路由配置\n  routes: constantRoutes\n})\n\n// 创建路由实例\nconst router = createRouter()\n\n// Todo: 不知道干嘛\nexport function resetRouter() {\n  const newRouter = createRouter()\n  router.matcher = newRouter.matcher\n}\n\n// 导出路由实例\nexport default router\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("删除 src/vendor 文件夹")])]),s._v(" "),a("li",[a("p",[s._v("删除src/api目录下qiniu.js 和 article.js")])]),s._v(" "),a("li",[a("p",[s._v("重新运行项目")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("注意")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("使用vue-admin-template作为脚手架开发是一个更好的选择，因为只实现了最基础的部分\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"三-项目配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-项目配置"}},[s._v("#")]),s._v(" （三）项目配置")]),s._v(" "),a("ul",[a("li",[s._v("通过 src/settings.js 进行全局配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1：title：站点标题，进入某个页面后，显示：页面标题 - 站点标题\n\n2：showSettings：是否显示右侧悬浮配置按钮\n\n3：tagsView：是否显示页面标签功能条\n\n4：fixedHeader：是否将头部布局固定\n\n5：sidebarLogo：菜单栏中是否显示LOGO\n\n6：errorLog：默认显示错误日志的环境\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"四-打开源码调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-打开源码调试"}},[s._v("#")]),s._v(" （四 ）打开源码调试")]),s._v(" "),a("ul",[a("li",[s._v("如果需要进行源码调试，需要修改 vue.config.js(好像没有用)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("config\n  // https://webpack.js.org/configuration/devtool/#development\n  .when(process.env.NODE_ENV === 'development',\n    config => config.devtool('source-map')\n  )\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"五-整个项目的目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-整个项目的目录结构"}},[s._v("#")]),s._v(" （五）整个项目的目录结构")]),s._v(" "),a("ul",[a("li",[s._v("src项目结构")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("src\n├── api         # 对axios的方法进行了二次封装\n├── assets      # 静态文件，包括css和图片\n├── components  # 项目中的通用组件，小组件\n├── directive   # 自定义指令\n├── filters     # 自定义过滤器\n├── icons       # 图标组件\n├── layout      # 全局的框架组件，自己写的业务组件将会在AppMain.vue中展示\n├── router\t\t# vue-router\n├── store       # vuex\n├── styles      # 全局的样式文件\n├── utils       # 工具函数，例如：拼接页面的title\n├── views       # 页面组件\n├── App.vue     # 应用的根组件\n├── main.js     # 应用入口\n├── permission.js # 登录的校验和登录后的跳转\n├── settings.js   # 全局配置文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ul",[a("li",[s._v("单页应用vue-element-admin的渲染结构")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('App.vue -> Layout.vue -> AppMain.vue -> `<router-view :key="key" />`(页面组件) -> 自定义子组件 -> ElementUI组件\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);