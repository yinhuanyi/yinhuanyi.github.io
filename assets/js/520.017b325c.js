(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{2496:function(e,s,a){"use strict";a.r(s);var n=a(9),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"一-文件对象crud业务流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-文件对象crud业务流程"}},[e._v("#")]),e._v(" 一：文件对象CRUD业务流程")]),e._v(" "),a("h3",{attrs:{id:"一-业务功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-业务功能"}},[e._v("#")]),e._v(" （一）业务功能")]),e._v(" "),a("ul",[a("li",[e._v("当用户进入系统，"),a("code",[e._v("首先会渲染首页视图，一般是一个统计类的图标")]),e._v("。侧边栏有"),a("code",[e._v("图书管理")]),e._v("菜单栏，菜单栏下面有两个子菜单，分别是："),a("code",[e._v("上传图书")]),e._v("和"),a("code",[e._v("图书列表")]),e._v("，"),a("code",[e._v("图书编辑")]),e._v("的路由不会显示在侧边栏中。当路由渲染到"),a("code",[e._v("上传图书")]),e._v("或者"),a("code",[e._v("图书编辑")]),e._v("引入的都是"),a("code",[e._v("detail.vue")]),e._v("组件，只是会基于"),a("code",[e._v("is-edit")]),e._v(" props，来指定"),a("code",[e._v("detail.vue")]),e._v("组件哪些组件需要隐藏，哪些组件需要展示。"),a("code",[e._v("图书列表")]),e._v("中会从后台获取电子书列表数据，表格的每一行数据都可以编辑，那么就会跳转到编辑页面")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t当detail.vue组件的isEdit prop为ture的时候，sticky容器内的【显示帮助】按钮会隐藏，第二个按钮内容会变成【保存】，ebook-upload组件会禁用(但是这种再看下，我觉得还是隐藏比较好，或者给一个禁用的提示)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"二-上传图书和新增图书业务流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-上传图书和新增图书业务流程"}},[e._v("#")]),e._v(" （二）上传图书和新增图书业务流程")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("当用户点击"),a("code",[e._v("上传图书")]),e._v("子菜单后，会渲染"),a("code",[e._v("book/create.vue")]),e._v("组件，在create.vue中会引入"),a("code",[e._v("components/detail.vue")]),e._v("组件，在detail.vue组件的视图模板中，包含一个根组件"),a("code",[e._v("<el-form>")]),e._v("，目的是用来向后台提交文件解析信息的表单数据。在"),a("code",[e._v("<el-form>")]),e._v("组件下，分为两个部分："),a("strong",[e._v("第一个部分")]),e._v("是一个吸顶的"),a("code",[e._v("<sticky>")]),e._v("组件，sticky组件效果是当页面很长的时候，滚动条滚动，sticky组件内的元素不会动，保持吸附状态。"),a("code",[e._v("<sticky>")]),e._v("组件内部有两个按钮，一个是用于显示"),a("code",[e._v("使用说明")]),e._v("，另外一个是用于"),a("code",[e._v("提交<el-form>")]),e._v("中的表单数据到后台。"),a("strong",[e._v("第二个部分")]),e._v("是主题内容部分，其中又包含三块，"),a("strong",[e._v("第一块")]),e._v("是自定义的"),a("code",[e._v("<warning>")]),e._v("组件，用于提醒用户使用方式；"),a("strong",[e._v("第二块")]),e._v("是自定义的"),a("code",[e._v("<ebook-upload>")]),e._v("组件，用于向后台上传文件对象，以便于后台返回文件的解析数据；"),a("strong",[e._v("第三块")]),e._v("是表单的item项，使用"),a("code",[e._v("<el-row>")]),e._v("包裹的，因为有些"),a("code",[e._v("<el-form-item>")]),e._v("一行是一个，有些是一行两个，因此使用栅格布局一下")])]),e._v(" "),a("li",[a("p",[e._v("在自定义的"),a("code",[e._v("<warning>")]),e._v("组件中使用了一个"),a("code",[e._v("<aside>")]),e._v("h5标签做提醒功能")])]),e._v(" "),a("li",[a("p",[e._v("在自定义的"),a("code",[e._v("<ebook-upload>")]),e._v("组件中，主要是使用了"),a("code",[e._v("<el-upload>")]),e._v("组件，用于用户选择上传的文件对象，"),a("strong",[e._v("这里有个注意点")]),e._v("："),a("code",[e._v("<el-upload>组件的上传是基于自己的Ajax请求上传的，不会进入到封装的Axios拦截器中，因此，后台判断了上传的成功与失败后，需要基于以HTTP协议的响应码返回，这样才会正确的被el-upload组件的on-success、on-error的回调事件所捕获到")]),e._v("。当文件对象上传成功，后台解析到文件信息，会将数据返回，此时el-upload组件将数据抛出，以便detail.vue父组件可以获取到文件信息数据，那么就可以将数据填充到表单上了，此时用户就可以预览到文件对象的信息")])]),e._v(" "),a("li",[a("p",[e._v("文件对象的category消息无法从后台解析获取，需要用户在点击【新增电子书】按钮之前，需要发起Ajax请求，从后台接口获取分类信息，然后通过select选择器让用户手动选择")])]),e._v(" "),a("li",[a("p",[e._v("文件对象的数据映射到表单后，可以被查看，也可以被修改。如果用户确认没有问题，那么就可以点击"),a("code",[e._v("【新增电子书】")]),e._v("按钮，可以将文件的确认消息提交到后台存储")])])]),e._v(" "),a("h3",{attrs:{id:"三-编辑图书业务流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-编辑图书业务流程"}},[e._v("#")]),e._v(" （三）编辑图书业务流程")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("编辑图书")]),e._v("的菜单不会显示在侧边栏上，可以基于"),a("code",[e._v("图书列表")]),e._v("点击某个图书的编辑按钮，路由会访问"),a("code",[e._v("/book/edit/asdfadsfasdf")]),e._v("，会向后台发起请求，获取"),a("code",[e._v("asdfadsfasdf")]),e._v("对应的文件对象，获取后台存储的文件对象数据，然后将数据填充到"),a("code",[e._v("el-form")]),e._v("表单上，让用户修改，用户修改后，点击"),a("code",[e._v("【编辑电子书】")]),e._v("按钮，将编辑修改后的文件信息存储到后台")])]),e._v(" "),a("h3",{attrs:{id:"四-图书列表业务流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-图书列表业务流程"}},[e._v("#")]),e._v(" （四）图书列表业务流程")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("当用户点击"),a("code",[e._v("图书列表")]),e._v("菜单栏时，路由会渲染list.vue组件，这个组件视图分为三个部分：第一个部分是"),a("code",[e._v("过滤表单")]),e._v("，第二个部分是"),a("code",[e._v("el-table表格")]),e._v("，第三个部分是"),a("code",[e._v("my-pagination分页")]),e._v("。在第一个部分的过滤表单中，有5个元素，两个input元素用于过滤书名和作者、选择器用于过滤分类、第一个按钮负责根据input和select填写的数据，调用后台接口获取过滤后的数据。第二个按钮负责跳转到电子书新增页面，复选框控制了一个变量，用于对表格中某一列字段的显示和隐藏")])]),e._v(" "),a("li",[a("p",[e._v("el-table表格内有14个字段，在这个14个字段中，"),a("code",[e._v("书名字段")]),e._v("和"),a("code",[e._v("作者字段")]),e._v("比较特殊，在这里两个字段里面用到了template模板。由于搜索过滤的时候，需要使用正则匹配，让被匹配到的字符串高亮显示，那么就需要在字段内容中插入HTML，为了让HTML正常显示，那么在template模板中显示这个字段的值时候，就需要使用v-html指令")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t1：当用户点击【图书列表】菜单栏的时候，此时会先调用created方法，在created方法里调用了parseQuery方法，在parseQuery方法里面会先获取路由的查询参数，并且给listQuery对象的page、pageSize、sort三个字段赋值一个默认值，然后判断路由的查询参数是否有值，如果有值，将page和pageSize数据类型转换为number类型，并且获取到sort字段的值，根据sort字段的值获取排序规则和排序字段，然后让排序字段的排序图标亮起。最后让listQuery对象与query对象合并为一个listQuery对象\n\n\t2：created方法执行完毕后，会接着执行mounted方法，在mounted方法里面，会调用getCategoryList方法和getList方法。getCategoryList方法中会从后台获取分类数据列表，将分类数据列表赋值给categoryList，那么在分类的el-select中的el-option就可以遍历categoryList，展示分类数据了。getList方法会从后台获取电子书列表数据后，可以解构出电子书总数total和电子书列表list两个变量，会将list变量的值赋值给tableList，用于显示表格数据。当电子书列表不为空的情况下，遍历电子书列表，给每个电子书对象添加titleWrapper和authorWrapper两个对象，这两个对象的值是wrapperKeyword方法返回的结果，wrapperKeyword方法接收两个参数，一个是字段名称，另外一个是字段的内容，当listQuery对象中，没有对应的字段名称的时候，直接返回字段的内容，如果有，那么说明当前字段被搜索了，那么就调用字符串的replace方法，基于正则表达式匹配字符串，让匹配到的字符串被span标签包裹，span标签设置一个color样式，那么在titleWrapper和authorWrapper两个对象中，只要匹配到的字符串内容就会被高亮显示。在el-table-column字段上，获取在template模板中获取到titleWrapper和authorWrapper对象，通过v-html指令渲染其中的HTML内容，使得搜索匹配到的内容高亮显示\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ul",[a("li",[e._v("my-pagination组件是vue-elementui-admin自己封装的组件，封装过程非常简单，只是封装了组件样式和一些默认值。"),a("code",[e._v("total、page、limit")]),e._v("分别是显示了组件的"),a("code",[e._v("表格列表总数、当前页、一页显示多少数据")]),e._v("，由于在parseQuery方法里面已经确定了"),a("code",[e._v("page、limit")]),e._v("的初始化值，getList方法里可以获取后台的电子书"),a("code",[e._v("total")]),e._v("数据，那么my-pagination组件就可以正常显示了")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t当用户选择第几页的时候，会调用refresh方法，在refresh方法里面会手动跳转路由，并且携带this.listQuery查询参数，让路由跳转都会被beforeRouteUpdate方法捕获到，当跳转的路由路径相等，但是查询参数不一样的时候，会调用getList方法，基于新的listQuery参数获取后台电子书列表数据，然后刷新表格。此时JavaScript的路由跳转不会触发`created`和`mounted`两个方法，因此需要手动调用getList方法来刷新表格数据\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[e._v("在list.vue组件中，主要难点在于字段数据过滤，当"),a("code",[e._v("title、author、category")]),e._v("字段的过滤都会调用"),a("code",[e._v("handleFilter方法")]),e._v("，这个方法会让page查询字段为1，并且调用refresh方法跳转路由，又会被beforeRouteUpdate方法捕获到，然后再次调用getList方法")])]),e._v(" "),a("li",[a("p",[e._v("当用户点击一个电子书的编辑按钮的时候，路由会携带fileName参数，跳转到编辑页面")])]),e._v(" "),a("li",[a("p",[e._v("当用户点击一个电子书的删除按钮的时候，会弹出一个confirm提示弹窗，如果用户确定删除，那么会调用后台删除电子书的接口，将此电子书删除然后再调用handleFilter方法，刷新表格")])])]),e._v(" "),a("h3",{attrs:{id:"五-前端发起ajax请求的细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-前端发起ajax请求的细节"}},[e._v("#")]),e._v(" （五）前端发起Ajax请求的细节")]),e._v(" "),a("ul",[a("li",[e._v("当需要请求后台接口的时候，需要在"),a("code",[e._v("/src/api")]),e._v("目录下的JavaScript文件中，定义请求函数，函数返回一个Axios实例，在这个实例中会设置"),a("code",[e._v("请求的方法")]),e._v("、"),a("code",[e._v("请求的URL")]),e._v("、"),a("code",[e._v("请求的数据")]),e._v("，具体的数据传递方式分为如下几种")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('1：params 方式：参数会拼接到请求URL的后面，例如：/book/get?fileName=abcd\nexport function getBook(fileName) {\n  return request({\n    url: \'/book/get\',\n    method: \'get\',\n    params: { fileName }\n  })\n}\n\n2：application/x-www-form-urlencoded 表单方式：data是post请求的body参数，会被转换为字符串，例如：id=11&name=Robby，在前后端开发的应用中，这种方式一般很少用了\nexport function getUserInfo(id, name) {\n  return request({\n    url: \'/user/info\',\n    method: \'post\',\n    data: qs.stringify({\n\t    id: id,\n\t    name: name\n\t})\n  })\n}\n\n3：application/json json方式：data是post请求的body参数，会被转换为json字符串，例如：{"fileName":"abcd","title":"重复自由之路"}\nexport function createBook(book) {\n  return request({\n    url: "/book/create",\n    method: "post",\n    data: book,\n  })\n}\n\n4：multipart/form-data 文件方式：\nconst fileData = new FormData() \nfileData.append(\'file\', input标签的文件对象)\nexport function uploadBook(formData) {\n  return request({\n    url: "/book/upload",\n    method: "post",\n    headers: {\'Content-Type\': \'multipart/form-data\'},\n    data: fileData,\n  })\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br")])]),a("ul",[a("li",[e._v("如果后台是Golang的Gin框架的web服务器，那么获取以上请求参数的方式有：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('1：get或post请求的QueryString方式：例如请求为：/book/get?fileName=abcd\nfileName := c.Query("fileName")\n// 或者给一个默认参数\nfileName := c.DefaultQuery("fileName", "efg")\n\n2：post请求的form表单方式：例如：id=11&name=Robby\nid := c.PostForm("id")\nname := c.PostForm("name")\n\n3：post请求的json方式：例如：{"fileName":"abcd","title":"重复自由之路"}\n// 从c.Request.Body读取请求数据\njsonData, _ := c.GetRawData() \n// m是结构体或者map\njson.Unmarshal(jsonData, &m)\n\n4：path参数：例如：请求为/user/search/:username/:address\nusername := c.Param("username")\naddress := c.Param("address")\n\n5：ShouldBind参数绑定的方式获取请求参数，这是一种最常用的方式，Gin框架会判断Content-Type的值，提取请求中QueryString、Form表单、Json、XML等参数到结构体中。但是值得注意的是，在常用的几种请求方法中，如果是Get请求，结构体都使用Form解析，POST请求除了Content-Type为application/json，结构体使用Json解析，其他情况都是Form解析\nbookCreatePrams := new(model.BookCreateParams)\nc.ShouldBind(bookCreatePrams) // 参数会映射到结构体\n\n6：ShouldBind还可以分Content-Type进行参数绑定，例如使用ShouldBindJSON，就是获取json的数据绑定\nc.ShouldBindJSON(bookCreatePrams)\n\n7：单文件上传获取\nfile, _ := c.FormFile("file")\nc.SaveUploadedFile(file, 文件保存目录)\n\n8：多文件上传获取\nform, _ := c.MultipartForm()\nfiles := form.File["file"]\nfor index, file := range files {\n\tlog.Println(file.Filename) // 打印文件名称\n\tdst := fmt.Sprintf("/tmp/%s_%d", file.Filename, index)\n\t// 保存到指定目录\n\tc.SaveUploadedFile(file, dst)\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br")])]),a("ul",[a("li",[e._v("JavaScript在调用请求函数的时候，有两种方式：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1：一种是使用then+catch的方式，获取到请求成功的response或者请求失败的err信息。但是err信息会在request.js拦截器中捕获错误，并且弹出Message组件，所以一般只处理请求成功的response，从response获取返回的data数据\ncreateBook(newPostForm).then(response=>{\n  this.$notify({\n    title: '操作成功',\n    message: '新增成功',\n    type: 'success',\n    duration: 2 * 1000,\n  })\n  this.setDefault()\n  this.fileList = []\n  this.loading = false\n\n}).catch((msg) => {\n  // 由于拦截器拦截了错误，会抛出Message消息，这里就不需要msg了，不需要在此抛出消息\n  this.loading = false\n})\n\n\n2：由于错误的请求会在request.js拦截器中捕获，那么只需要获取response数据就可以了，由于请求是异步操作，那么需要使用promise进行阻塞，以便获取response响应数据\n// 从res中解构出data字段\nconst { data } = await new Promise((resolve) => {\n  const res = bookCategoryList() // 获取请求成功的数据\n  resolve(res)\n})\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);