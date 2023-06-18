(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{2380:function(t,e,s){"use strict";s.r(e);var a=s(9),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一-scrapy框架介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-scrapy框架介绍"}},[t._v("#")]),t._v(" 一：scrapy框架介绍")]),t._v(" "),s("h3",{attrs:{id:"一-基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-基本概念"}},[t._v("#")]),t._v(" （一）：基本概念")]),t._v(" "),s("ul",[s("li",[t._v("概念")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tScrapy，Python开发的一个快速、高层次的屏幕抓取和web抓取框架，用于抓取web站点并从页面中提取结构化的数据。Scrapy用途广泛，可以用于数据挖掘、监测和自动化测试。\n    Scrapy吸引人的地方在于它是一个框架，任何人都可以根据需求方便的修改。它也提供了多种类型爬虫的基类，如BaseSpider、sitemap爬虫等，最新版本又提供了web2.0爬虫的支持。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"二-使用scrapy框架对-https-dribbble-com-stories-文章页面进行爬取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-使用scrapy框架对-https-dribbble-com-stories-文章页面进行爬取"}},[t._v("#")]),t._v(" （二）：使用scrapy框架对 https://dribbble.com/stories 文章页面进行爬取")]),t._v(" "),s("ul",[s("li",[t._v("创建Python虚拟环境")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mkdir Scrapy_Project\npyenv virtualenv 3.6.3 XKD_Dribbble3.6.3\ncd Scrapy_Project && pyenv local XKD_Dribbble3.6.3\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("安装 scrapy框架")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pip install scrapy \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("创建模板")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("scrapy  startproject XKD_Dribbble_Spider\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("在XKD_Dribbble_Spider模板目录下，创建dribble.py")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("scrapy genspider dribbble dribbble.com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("在命令行启动 dribble")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("scrapy crawl dribbble\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("创建xkd_start_spider.py文件，用于项目调试")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('from scrapy.cmdline import execute\n\nexecute(["scrapy", "crawl", "dribbble",])\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("dribbble.py模块解析")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import scrapy\n\n\nclass DribbbleSpider(scrapy.Spider):\n\t# 蜘蛛名称\n    name = 'dribbble'\n    # 允许下载的地址\n    allowed_domains = ['dribbble.com']\n    # 页面下载的URL列表, \n    start_urls = ['https://dribbble.com/']\n\n\t# response是响应实例对象\n    def parse(self, response):\n        pass\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("ul",[s("li",[t._v("修改settings文件")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ROBOTSTXT_OBEY = False\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"三-元素定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-元素定位"}},[t._v("#")]),t._v(" （三）：元素定位")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("Xpath选择器")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("表达式书写方式")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("表达式意义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选择HTML页面中任意的节点")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("从根节点选取")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取当前节点")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("..")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取当前节点的父节点")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bookstore/book[1]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取属于 bookstore 子元素的第一个 book 元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bookstore/book[last()]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取属于 bookstore 子元素的最后一个 book 元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bookstore/book[last()-1]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取属于 bookstore 子元素的倒数第二个 book 元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//title[@lang]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取所有拥有名为 lang 的属性的 title 元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//title[@lang='eng']")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取所有 title 元素，且这些元素拥有值为 eng 的 lang 属性")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bookstore/book[price>35.00]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取 bookstore 元素的所有 book 元素，且其中的 price 元素的值须大于 35.00")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bookstore/book[price>35.00]/title")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取 bookstore 元素中的 book 元素的所有 title 元素，且其中的 price 元素的值须大于 35.00")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//*")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取文档中的所有元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//title[@*]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取所有带有属性的 title 元素")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//book/title")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("//book/price")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//title")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("//price")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("child::book")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取所有属于当前节点的子元素的 book 节点")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("child::text()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取当前节点的所有文本子节点")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bookstore/book/title")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取所有 title 节点")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bookstore/book/price/text()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("选取 price 节点中的所有文本")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("//*")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任意元素")])])])]),t._v(" "),s("ul",[s("li",[t._v("示例")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('from lxml import etree\n\nhtml = \'\'\'\n<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport"\n          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n</head>\n<body>\n    <div class="box">\n        <div class="banner">\n            <div class="inner">\n                <a title="xkd" href="http://www.baidu.com">点我跳转到百度 </a>\n            </div>\n        </div>\n    </div>\n</body>\n</html>\n\'\'\'\n\nselector = etree.HTML(html)\n\ncontent = selector.xpath(\'//a[@title]/text()\')\nprint(content)\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import scrapy\n\n\nclass DribbbleSpider(scrapy.Spider):\n    name = 'dribbble'\n    allowed_domains = ['dribbble.com']\n    start_urls = ['http://dribbble.com/']\n\n    def parse(self, response):\n        pass\n\n        ret = response.xpath('//*[@class=\"enrique-text p text-lead\"]/text()').extract()[0]\n        print(ret)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("ul",[s("li",[s("p",[s("strong",[s("code",[t._v("CSS选择器")])]),t._v("\n| 表达式书写方式     |     表达式意义 |"),s("br"),t._v('\n| :--------: | :--------😐\n|#box    | 选取id为box的元素 |\n|.box   | 选取class为box的元素 |\n|p  | \t选择所有 p 元素 |\n|div img| 选取div下的img元素 |\n|div,img| 选择所有 div 元素和所有 img 元素 |\n|div#box    | 选取 id为box的div元素 |\n|div>p   | 选择父元素为 div 元素的所有 p 元素 |\n|[title~=flower]   | 选择 title 属性包含单词 "flower" 的所有元素 |\n|a[href="/page/2"]    | 选取href属性为/page/2的a元素 |\n|a[href^="/page"]    | 选取href属性以/page开头的a元素 |\n|a[href$=".png"]    | 选取href属性以png结尾的a元素 |')])]),t._v(" "),s("li",[s("p",[t._v("示例")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import scrapy\n\n\nclass DribbbleSpider(scrapy.Spider):\n    name = 'dribbble'\n    allowed_domains = ['dribbble.com']\n    start_urls = ['http://dribbble.com/']\n\n    def parse(self, response):\n        pass\n\n        # 抛出异常\n        # ret = response.css('.enrique-text p').extract()[0]\n        \n        # 正确选择到标签，获取到标签内容\n        ret = response.css('.enrique-copy .enrique-text::text').extract_first(\"\")\n        \n        print(ret)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);