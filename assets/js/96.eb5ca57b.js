(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{2150:function(s,n,t){"use strict";t.r(n);var a=t(9),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-oss对象存储接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-oss对象存储接入"}},[s._v("#")]),s._v(" 一：OSS对象存储接入")]),s._v(" "),a("h3",{attrs:{id:"一-安装与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-安装与配置"}},[s._v("#")]),s._v(" (一)：安装与配置")]),s._v(" "),a("ul",[a("li",[s._v("安装依赖")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("go get github.com/aliyun/aliyun-oss-go-sdk/oss\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("测试版本")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import (\n\t"fmt"\n\t"github.com/aliyun/aliyun-oss-go-sdk/oss"\n)\n\nfunc main() {\n\tfmt.Println("OSS Go SDK Version: ", oss.Version)\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"二-测试文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-测试文件上传"}},[s._v("#")]),s._v(" (二)：测试文件上传")]),s._v(" "),a("ul",[a("li",[s._v("文件上传需要使用到阿里云的accessKeyId和accessKeySecret，那么需要开通RAM，在RAM中创建用户")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(605),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("记录下accessKeyId和accessKeySecret。一个用户也可以生成多个AccessKey")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("用户登录名称 all-server-file@1726855610969442.onaliyun.com\n\nAccessKey ID：xxxxx\nAccessKey Secret：xxxxxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("给用户添加权限，添加管理对象访问权限，那么现在就可以通过accessKeyId和accessKeySecret完成代码访问OSS了")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(606),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("文件上传代码如下，运行代码就可以将文件上传了")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('import (\n\t"fmt"\n\t"github.com/aliyun/aliyun-oss-go-sdk/oss"\n\t"os"\n)\n\nfunc handleError(err error) {\n\tfmt.Println("Error:", err)\n\tos.Exit(-1)\n}\nfunc main() {\n\t// 外网访问，数据写入。访问数据使用Bucket域名访问\n\tendpoint := "oss-cn-shenzhen.aliyuncs.com"\n\t// 这里需要开头子账户的accesskey，那么就需要开启一个子用户，启用RAM访问控制\n\taccessKeyId := "xxxxxxxxxx"\n\taccessKeySecret := "xxxxxxxxxxx"\n\tbucketName := "all-server-file"\n\t// <yourObjectName>上传文件到OSS时需要指定包含文件后缀在内的完整路径，例如abc/efg/123.jpg。\n\tobjectName := "goods/haha.png"\n\t// <yourLocalFileName>由本地文件路径加文件名包括后缀组成，例如/users/local/myfile.txt。\n\tlocalFileName := "/Users/Robby/Yinhuanyi_Project/Golang/all-server/test/oss/架构图.png"\n\t// 创建OSSClient实例。\n\tclient, err := oss.New(endpoint, accessKeyId, accessKeySecret)\n\tif err != nil {\n\t\thandleError(err)\n\t}\n\t// 获取存储空间。\n\tbucket, err := client.Bucket(bucketName)\n\tif err != nil {\n\t\thandleError(err)\n\t}\n\t// 上传文件。\n\terr = bucket.PutObjectFromFile(objectName, localFileName)\n\tif err != nil {\n\t\thandleError(err)\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("h3",{attrs:{id:"三-文件上传流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-文件上传流程"}},[s._v("#")]),s._v(" (三)：文件上传流程")]),s._v(" "),a("ul",[a("li",[s._v("传统的文件上传流程如下：通过前端传递给后台，后台再上传到OSS。但是这种上传有个问题，就是传递了两次文件，浪费了流量")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(607),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("Web端只传方案：前端先请求Gin后台，获取签名，再上传文件到OSS，OSS将文件上传的结果，基于AccessKeyID返回给Gin")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(608),alt:"Alt text"}})]),s._v(" "),a("ul",[a("li",[s._v("如果在用户上传文件后，需要打印一些日志，也可以使用基于回调的直传机制：浏览器请求Gin后获取签名和一个url回调地址，再带上签名和回调地址上传文件到OSS，OSS获取回调地址，请求Gin，Gin在返回信息给OSS，OSS最后返回给前端")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(609),alt:"Alt text"}})]),s._v(" "),a("h3",{attrs:{id:"四-在bff层开发oss服务-处理文件上传请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-在bff层开发oss服务-处理文件上传请求"}},[s._v("#")]),s._v(" (四)：在BFF层开发OSS服务，处理文件上传请求")]),s._v(" "),a("ul",[a("li",[s._v("新建一个BFF层的服务，取名为oss_web。在这里需要实现两个接口，分别是Get请求的"),a("code",[s._v("/token")]),s._v("和Post请求的"),a("code",[s._v("/callback")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/token：接口用于返回签名和callback接口地址\n\n/callback：接口用于Gin处理OSS的callback请求，需要先验证请求合法性和数据合法性，验证通过后，再自定义业务逻辑\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("回调函数处理逻辑如下：下面代码中只是返回了OSS存储文件的路径，在实际业务中，需要将"),a("code",[s._v("文件的OSS访问路径")]),s._v("保存在DB中，然后再打印对应日志，或者做数据埋点工作")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('func HandlerRequest(ctx *gin.Context) {\n\n\t// ... 这里都是验证数据的过程\n\n\tif (utils.VerifySignature(bytePublicKey, byteMD5, byteAuthorization)) {\n\n\t\t// 这里的业务逻辑很简单，直接将文件路径返回给OSS。\n\t\tctx.JSON(http.StatusOK, gin.H{\n\t\t\t"url":fileUrl,\n\t\t})\n\t\t\n\t} else {\n\t\tutils.ResponseFailed(ctx)\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports},605:function(s,n,t){s.exports=t.p+"assets/img/1641886903388.4c6fd1bf.png"},606:function(s,n,t){s.exports=t.p+"assets/img/2022-01-11.44.15.c80d4e98.png"},607:function(s,n,t){s.exports=t.p+"assets/img/2022-01-11.54.32.15a2d49a.png"},608:function(s,n,t){s.exports=t.p+"assets/img/2022-01-11.57.17.0555042f.png"},609:function(s,n,t){s.exports=t.p+"assets/img/2022-01-11.04.21.dde65610.png"}}]);