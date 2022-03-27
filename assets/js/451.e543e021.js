(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{2369:function(s,n,e){"use strict";e.r(n);var a=e(9),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-使用twist框架实现mysql写入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-使用twist框架实现mysql写入"}},[s._v("#")]),s._v(" 一：使用twist框架实现MySQL写入")]),s._v(" "),e("h3",{attrs:{id:"一-mysql数据库信息保存到settings文件中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-mysql数据库信息保存到settings文件中"}},[s._v("#")]),s._v(" （一）：MySQL数据库信息保存到settings文件中")]),s._v(" "),e("ul",[e("li",[s._v("编辑settings文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("MYSQL_HOST = 'localhost'\nMYSQL_USER = 'xkd'\nMYSQL_PASSWORD = '123456'\nMYSQL_DATABASE = 'item_database'\nMYSQL_PORT = 3306\nMYSQL_OPTIONAL = dict(\n    USE_UNICODE = True,\n    CHARSET = 'utf8',\n)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("ul",[e("li",[s._v("编辑pipeline.py文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from .settings import MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_PORT, MYSQL_OPTIONAL\n\nclass MysqlPipeline:\n    def __init__(self):\n        self.conn = MySQLdb.connect(host=MYSQL_HOST, user=MYSQL_USER, password=MYSQL_PASSWORD, database=MYSQL_DATABASE, use_unicode=MYSQL_OPTIONAL.get('USE_UNICODE'), charset=MYSQL_OPTIONAL.get('CHARSET'))\n        self.cursor = self.conn.cursor()\n\n    def process_item(self, item, spider):\n        sql = 'insert into item(title, image_url, date, image_path, url, url_id)' \\\n              'values (%s, %s, %s, %s, %s, %s)'\n        date = item['date']\n\n        self.cursor.execute(sql, args=(item['title'], item['image_url'], date, item['image_path'], item['url'], item['url_id']))\n\n        self.conn.commit()\n        return item\n\n    def spider_closed(self, spider):\n        self.cursor.close()\n        self.conn.close()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h3",{attrs:{id:"二-创建异步pipeline写入数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-创建异步pipeline写入数据库"}},[s._v("#")]),s._v(" （二）：创建异步Pipeline写入数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from twisted.enterprise import adbapi\nimport MySQLdb.cursors\n\nclass AIOMysqlItemPipeline:\n\n\n\n    def __init__(self, pool):\n        self.connection_pool = pool\n\n    # 1：调用类方法\n    @classmethod\n    def from_settings(cls, settings):\n\n        connkw = {\n            'host': MYSQL_HOST,\n            'user': MYSQL_USER,\n            'password': MYSQL_PASSWORD,\n            'db': MYSQL_DATABASE,\n            'port': MYSQL_PORT,\n            'use_unicode': MYSQL_OPTIONAL.get('USE_UNICODE'),\n            'charset': MYSQL_OPTIONAL.get('CHARSET'),\n            'cursorclass': MySQLdb.cursors.DictCursor,\n        }\n\n\n        pool = adbapi.ConnectionPool('MySQLdb', **connkw)\n        return cls(pool)\n\n    # 2：执行process_item\n    def process_item(self, item, spider):\n        ret = self.connection_pool.runInteraction(self.mysql_insert, item)\n        ret.addErrback(self.error_callback)\n\n    def mysql_insert(self, cursor, item):\n        sql = 'insert into item(title, image_url, date, image_path, url, url_id)' \\\n              'values (%s, %s, %s, %s, %s, %s)'\n        date = item['date']\n        cursor.execute(sql, args=(item['title'], item['image_url'], date, item['image_path'], item['url'], item['url_id']))\n\n    def error_callback(self, error):\n        print('insert_error =========== {}'.format(error))\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br")])]),e("ul",[e("li",[s._v("修改settings文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ITEM_PIPELINES = {\n   # 'XKD_Dribbble_Spider.pipelines.XkdDribbbleSpiderPipeline': 300,\n\n   # 当items.py模块yield之后，默认就是下载image_url的页面\n   'XKD_Dribbble_Spider.pipelines.ImagePipeline': 1,\n   'XKD_Dribbble_Spider.pipelines.AIOMysqlItemPipeline': 2,\n\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);