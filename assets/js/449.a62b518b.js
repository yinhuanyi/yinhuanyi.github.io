(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{2368:function(s,a,e){"use strict";e.r(a);var n=e(9),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-scrapy页面元素解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-scrapy页面元素解析"}},[s._v("#")]),s._v(" 一：Scrapy页面元素解析")]),s._v(" "),e("h3",{attrs:{id:"一-解析字段信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-解析字段信息"}},[s._v("#")]),s._v(" （一）：解析字段信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import scrapy\nfrom urllib import parse\nfrom scrapy.http import Request\n\n\nclass DribbbleSpider(scrapy.Spider):\n    name = 'dribbble'\n    allowed_domains = ['dribbble.com']\n    start_urls = ['https://dribbble.com/stories']\n\n\n    def parse(self, response):\n        # 获取a标签的url值\n        # urls = response.css('h2 a::attr(href)').extract()\n        a_nodes = response.css('header div.teaser a')\n        for a_node in a_nodes:\n            # print(a_node)\n            a_url = a_node.css('::attr(href)').extract()[0]\n            a_image_url = a_node.css('img::attr(src)').extract()[0]\n\n\n            yield Request(url=parse.urljoin(response.url, a_url), callback=self.parse_analyse, meta={'a_image_url': a_image_url})\n\n\n\n    def parse_analyse(self, response):\n        a_image_url = response.meta.get('a_image_url')\n        title = response.css('.post header h1::text').extract()[0]\n        date = response.css('span.date::text').extract_first()\n\n        print('图片的url是：{}'.format(a_image_url))\n        print('标题是: {}'.format(title))\n        print('时间是：{}'.format(date.strip()))\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("h3",{attrs:{id:"二-构建数据模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-构建数据模型"}},[s._v("#")]),s._v(" （二）：构建数据模型")]),s._v(" "),e("ul",[e("li",[s._v("编辑items.py文件构建模型")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import scrapy\n\n\nclass XkdDribbbleSpiderItem(scrapy.Item):\n\n    title = scrapy.Field()\n    a_image_url = scrapy.Field()\n    date = scrapy.Field()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[s._v("在spider中添加构建模型")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import scrapy\nfrom urllib import parse\nfrom scrapy.http import Request\nfrom ..items import XkdDribbbleSpiderItem\nfrom datetime import datetime\n\n\nclass DribbbleSpider(scrapy.Spider):\n    name = 'dribbble'\n    allowed_domains = ['dribbble.com']\n    start_urls = ['https://dribbble.com/stories']\n\n\n    def parse(self, response):\n        # 获取a标签的url值\n        # urls = response.css('h2 a::attr(href)').extract()\n        a_nodes = response.css('header div.teaser a')\n        for a_node in a_nodes:\n            # print(a_node)\n            a_url = a_node.css('::attr(href)').extract()[0]\n            a_image_url = a_node.css('img::attr(src)').extract()[0]\n\n\n            yield Request(url=parse.urljoin(response.url, a_url), callback=self.parse_analyse, meta={'a_image_url': a_image_url})\n\n\n\n    def parse_analyse(self, response):\n        a_image_url = response.meta.get('a_image_url')\n        title = response.css('.post header h1::text').extract()[0]\n        date = response.css('span.date::text').extract_first()\n        date = date.strip()\n        date = datetime.strptime(date, '%b %d, %Y').date()\n\n        # 构建模型\n        dri_item = XkdDribbbleSpiderItem()\n        dri_item['a_image_url'] = a_image_url\n        dri_item['title'] = title\n        dri_item['date'] = date\n\n        yield dri_item\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);