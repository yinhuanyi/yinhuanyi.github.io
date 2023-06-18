(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{1305:function(s,e,n){s.exports=n.p+"assets/img/2018-10-134.08.20.c585ef89.png"},2438:function(s,e,n){"use strict";n.r(e);var a=n(9),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1-将item保存以json格式保存到文件中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-将item保存以json格式保存到文件中"}},[s._v("#")]),s._v(" 1：将Item保存以json格式保存到文件中")]),s._v(" "),a("ul",[a("li",[s._v("在pipeline文件中创建JsonWithEncodingPipeline类用于将item写入json文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import codecs\nimport json\nclass JsonWithEncodingPipeline:\n    def __init__(self):\n\t    # codesc 对比open函数就是屏蔽了文件编码的问题\n\t    # 以写的方式打开文件，写入文件的编码为utf-8\n        self.file = codecs.open('article.json', mode='w', encoding='utf-8')\n\t\n\t# 处理item对象，将item先转化为dict对象，再转化为json对象，如果item对象中有除字符串、列表、字典其他类型的数据，需要将其先转化为这三种数据类型\n    def process_item(self, item, spider):\n        dict_item = dict(item)\n        lines = json.dumps(dict_item, ensure_ascii=False) + '\\n' # 如果item中数据有中文，必须设置ensure_ascii为False\n        self.file.write(lines)\n        return item\n        \n\t# 关闭文件\n    def spider_closed(self, spider):\n        self.file.close()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("使用scrapy中的接口，将item写入文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 使用scrapy提供的json exporter\nfrom scrapy.exporters import JsonItemExporter\n\nclass JsonExporterPipeline:\n    # 调用scrapy提供的jsonexport导出json文件\n    def __init__(self):\n        self.file = open('article.json', mode='wb')\n        # 初始化exporter\n        self.exporter = JsonItemExporter(self.file, encoding='utf-8', ensure_ascii=False)\n        # 启动exporter\n        self.exporter.start_exporting()\n\n    def process_item(self, item, spider):\n\t    # 处理item\n        self.exporter.export_item(item)\n        return item\n\t\n    def spider_closed(self, spider):\n\t    # 退出exporter\n        self.exporter.finish_exporting()\n        # 关闭文件\n        self.file.close()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ul",[a("li",[s._v("将这个JsonExporterPipeline加入settings文件中")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ITEM_PIPELINES = {\n    'ArticleSpider.pipelines.ArticlespiderPipeline': 300,\n    'ArticleSpider.pipelines.JsonExporterPipeline': 2, \n    'ArticleSpider.pipelines.ArticleImagePipeline': 1,\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-将item保存至mysql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-将item保存至mysql数据库"}},[s._v("#")]),s._v(" 2：将Item保存至MySQL数据库")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("创建数据库，且创建articles表")]),s._v(" "),a("img",{attrs:{src:n(1305),alt:"Alt text"}})])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("安装mysqlclient，使用MySQLdb操作数据库，MySQLdb比pymysql要快速")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install mysqlclient\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("新建MysqlPipeline，将item数据插入到MySQL,  只是插入部分字段的数据，且在settings文件中注释其他的pipeline, 先看看是否插入MySQL有数据")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ITEM_PIPELINES = {\n    # 'ArticleSpider.pipelines.ArticlespiderPipeline': 300,\n    'ArticleSpider.pipelines.MysqlPipeline': 3,\n    # 'ArticleSpider.pipelines.JsonExporterPipeline': 2,\n    # 'ArticleSpider.pipelines.ArticleImagePipeline': 1,\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class MysqlPipeline:\n\n    def __init__(self):\n        self.connect = MySQLdb.connect(host='localhost', user='article', password='123456', database='ArticleSpider', use_unicode=True, charset='utf8')\n        self.cursor = self.connect.cursor()\n\n    # 向表中插入数据\n    def process_item(self, item, spider):\n        insert_sql = 'insert into ' \\\n                     'articles(title, create_date, url) ' \\\n                     'values (%s, %s, %s)'\n\n        self.cursor.execute(insert_sql,\n                            args=(item['title'],\n                                  item['create_date'],\n                                  item['url'],))\n        self.connect.commit()\n\n\n    def spider_closed(self, spider):\n        self.cursor.close()\n        self.connect.close()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"_3-使用异步连接池写入数据到mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用异步连接池写入数据到mysql"}},[s._v("#")]),s._v(" 3：使用异步连接池写入数据到MySQL")]),s._v(" "),a("ul",[a("li",[s._v("在pipelines.py文件中，创建MysqlTwistedPipeline，")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import MySQLdb\nimport MySQLdb.cursors\nfrom twisted.enterprise import adbapi\n\n\n# 使用Twisted框架提供的异步连接池, 异步写入数据库，每一条记录将不会有顺序\nclass MysqlTwistedPipeline:\n    '''\n    MYSQL_HOST = 'localhost'\n    MYSQL_USER = 'article'\n    MYSQL_PASSWORD = '123456'\n    MYSQL_DB = 'ArticleSpider'\n    MYSQL_PORT = '3306'\n    MYSQL_OPTION = {\n        'USE_UNICODE': True,\n        'CHARSET': 'utf8',\n    }\n\n    '''\n\n    def __init__(self, dbpool):\n        self.dbpool = dbpool\n\n    # 重写from_settings方法，\n    @classmethod\n    def from_settings(cls, settings):\n        connkw = dict(\n            host=settings['MYSQL_HOST'],\n            user = settings['MYSQL_USER'],\n            password = settings['MYSQL_PASSWORD'],\n            db = settings['MYSQL_DB'],\n            port = settings['MYSQL_PORT'],\n            use_unicode = settings['MYSQL_OPTION']['USE_UNICODE'],\n            charset = settings['MYSQL_OPTION']['CHARSET'],\n            # 指定游标的类型\n            cursorclass = MySQLdb.cursors.DictCursor,\n        )\n\n        # 第一个参数MySQLdb表示使用的是MySQL数据库驱动模块，\n        dbpool = adbapi.ConnectionPool('MySQLdb', **connkw)\n\n        # 最后将这个pipeline实例返回\n        return  cls(dbpool)\n\n    # 重写process_item方法，实现数据库写入异步执行\n    def process_item(self, item, spider):\n        # 拿到异步查询对象\n        query = self.dbpool.runInteraction(self.do_insert, item)\n        # 添加异常回调函数\n        query.addErrback(self.handle_error)\n\n    # 获取异步插入的异常回调函数\n    def handle_error(self, failure):\n        print('Insert ========== {}'.format(failure))\n\n    # 插入数据的操作\n    def do_insert(self, cursor, item):\n        insert_sql = 'insert into ' \\\n                     'articles(title, create_date, url) ' \\\n                     'values (%s, %s, %s)'\n\n        cursor.execute(insert_sql,\n                        args=(item['title'],\n                              item['create_date'],\n                              item['url'],))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br")])]),a("h3",{attrs:{id:"_4-django-orm-插件-将item保存到数据库中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-django-orm-插件-将item保存到数据库中"}},[s._v("#")]),s._v(" 4：Django orm 插件， 将item保存到数据库中")]),s._v(" "),a("ul",[a("li",[s._v("这里也可以使用Django的orm插件 scrapy-djangoitem(https://github.com/scrapy-plugins/scrapy-djangoitem)")])]),s._v(" "),a("h3",{attrs:{id:"_5-使用-itemloader类来处理字段解析和构建item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用-itemloader类来处理字段解析和构建item"}},[s._v("#")]),s._v(" 5：使用 ItemLoader类来处理字段解析和构建item")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("这个爬虫解析逻辑是：")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("1：使用scrapy框架下载页面，将下载的页面通过parse_detail方法封装response")])]),s._v(" "),a("li",[a("strong",[s._v("2：通过xpath或css定位页面上的元素解析字段")])]),s._v(" "),a("li",[a("strong",[s._v("3：通过解析的字段的值，构建item模型")])]),s._v(" "),a("li",[a("strong",[s._v("4：通过在settings文件中指定的pipeline，将模型写入MySQL数据库")])])])]),s._v(" "),a("li",[a("strong",[s._v("使用ItemLoader类将2、3步骤合并，精简代码, 在items.py文件中，创建ArticalItemLoader类继承ItemLoader")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("from scrapy.loader import ItemLoader\n\n# 自定义的loader\nclass ArticalItemLoader(ItemLoader):\n    default_output_processor = TakeFirst()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("在jobbole.py文件中，引入这个ArticalItemLoader,  重写处理逻辑， loader有三类方法，add_css、add_xpath、add_value")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('from ArticleSpider.items import JobBoleArticleItem, ArticalItemLoader\n\ndef parse_detail(self, response):\n\t# 初始化Item\n    article_item = JobBoleArticleItem()\n\n\t# 使用loader解析\n\titem_loader = ArticalItemLoader(item=JobBoleArticleItem(), response=response, )\n\t\n\t# 定义元素解析标签的同时构建item_loader\n    front_image_url = response.meta.get("front_image_url", "")  # 文章封面图\n    item_loader.add_css(\'title\', \'.entry-header h1::text\')\n    item_loader.add_css(\'create_date\', \'p.entry-meta-hide-on-mobile::text\')\n    item_loader.add_value("url", response.url)\n    item_loader.add_value("url_object_id", get_md5(response.url))\n    item_loader.add_css("create_date", "p.entry-meta-hide-on-mobile::text")\n    item_loader.add_value("front_image_url", [front_image_url])\n    item_loader.add_css("praise_nums", ".vote-post-up h10::text")\n    item_loader.add_css("comment_nums", "a[href=\'#article-comment\'] span::text")\n    item_loader.add_css("fav_nums", ".bookmark-btn::text")\n    item_loader.add_css("tags", "p.entry-meta-hide-on-mobile a::text")\n    item_loader.add_css("content", "div.entry")\n    \n    # 获取item model\n    article_item = item_loader.load_item()\n    # 这里将model yield出去，那么scrapy就会识别到这个yield，将model返回给pipeline, 会被settings文件中指定的pipeline处理，也就是pipeline文件中的ArticlespiderPipeline\n    yield article_item\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"_6-使用-itemloader的预处理类来处理item的value值-之前的value值都是在解析的时候就处理-现在将这个处理过程封装在jobbolearticleitem类中来处理。articalitemloader中的默认预处理类可以被覆盖重写-其实这里也可以给jobbolearticleitem类写一个方法-将item的字段值处理-最后在pipeline类中将这个item实例写入数据库的时候-就调用这个方法-这样就不需要将item的字段进行预处理了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-使用-itemloader的预处理类来处理item的value值-之前的value值都是在解析的时候就处理-现在将这个处理过程封装在jobbolearticleitem类中来处理。articalitemloader中的默认预处理类可以被覆盖重写-其实这里也可以给jobbolearticleitem类写一个方法-将item的字段值处理-最后在pipeline类中将这个item实例写入数据库的时候-就调用这个方法-这样就不需要将item的字段进行预处理了"}},[s._v("#")]),s._v(" 6：使用 ItemLoader的预处理类来处理item的value值, 之前的value值都是在解析的时候就处理，现在将这个处理过程封装在JobBoleArticleItem类中来处理。ArticalItemLoader中的默认预处理类可以被覆盖重写（其实这里也可以给JobBoleArticleItem类写一个方法，将item的字段值处理，最后在pipeline类中将这个item实例写入数据库的时候，就调用这个方法，这样就不需要将item的字段进行预处理了）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 这里传递的值就是item的value值， 这个函数对value进行的处理\ndef add_jobbole(value):\n    return value + \".jobbole\"\n\n# 将字符串类型的时间转换为时间对象类型\ndef date_convert(value):\n    try:\n        value = value.strip().strip('·').strip()\n        create_date = datetime.datetime.strptime(value, \"%Y/%m/%d\").date()\n    except Exception as e:\n        create_date = datetime.datetime.now().date()\n\n    return create_date\n\n# 匹配数字\ndef get_num(value):\n    obj = regex_const.RE_NUM.match(value)\n\n    if obj:\n        number = int(obj.group(1))\n    else:\n        number = 0\n    return number\n\n# 删除tags中提取的 评论 两个字, 如果评论在列表中，那么返回空字符串，如果不在value原样返回\ndef remove_comment_tag(value):\n    if '评论' in value:\n        return \"\"\n    else:\n        return value\n\n\n\n\n# 文章数据存储的model, 这个model就类似于构建一个字典，\n# 在item中只有一个Field类型\nclass JobBoleArticleItem(scrapy.Item):\n    title = scrapy.Field(\n\n    )\n    create_date = scrapy.Field(\n        # 预处理，将字符串转变为时间类型\n        input_processor = MapCompose(date_convert),\n    )\n    # 这里的url是变长的，可以使用MD5来存储，使用url_object_id来标记这个url的MD5值， 实现MD5到图片的url的映射\n    url = scrapy.Field(\n\n    )\n    url_object_id = scrapy.Field(\n\n    )\n    front_image_url = scrapy.Field(\n        output_processor=MapCompose(lambda value: value)  # 让其返回的是一个列表, 不知道为什么，这里应该还是返回一个字符串才对\n    )\n    front_image_path = scrapy.Field(\n\n    )\n    praise_nums = scrapy.Field(\n        input_processor = MapCompose(get_num),\n    )\n    comment_nums = scrapy.Field(\n        input_processor = MapCompose(get_num),\n    )\n    fav_nums = scrapy.Field(\n        input_processor = MapCompose(get_num),\n    )\n    tags = scrapy.Field(\n        input_processor = MapCompose(remove_comment_tag),\n        output_processor = Join(',')\n    )\n    content = scrapy.Field(\n\t\n    )\n\n\n# 自定义的loader\nclass ArticalItemLoader(ItemLoader):\n    default_output_processor = TakeFirst()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("MapCompose类可以传递多个处理函数")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class MapCompose(object):\n\n    def __init__(self, *functions, **default_loader_context):\n        self.functions = functions\n        self.default_loader_context = default_loader_context\n\n    def __call__(self, value, loader_context=None):\n        values = arg_to_iter(value)\n        if loader_context:\n            context = MergeDict(loader_context, self.default_loader_context)\n        else:\n            context = self.default_loader_context\n        wrapped_funcs = [wrap_loader_context(f, context) for f in self.functions]\n        for func in wrapped_funcs:\n            next_values = []\n            for v in values:\n                next_values += arg_to_iter(func(v))\n            values = next_values\n        return values\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("ul",[a("li",[a("strong",[a("code",[s._v("文字页面爬虫完毕")])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);