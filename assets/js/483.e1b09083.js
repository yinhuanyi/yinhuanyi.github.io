(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{2441:function(s,e,a){"use strict";a.r(e);var n=a(9),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一-配置drf内存缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-配置drf内存缓存"}},[s._v("#")]),s._v(" 一：配置DRF内存缓存")]),s._v(" "),a("ul",[a("li",[s._v("安装drf-extensions, 这里安装最新版"),a("code",[s._v("drf-extensions==0.5.0")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1: 需要升级Django和DRF版本\npip install --upgrade django==1.11.6\npip install --upgrade djangorestframework==3.10.3\n\n2： 安装drf-extensions\npip install --upgrade drf-extensions==0.5.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("drf-extensions缓存配置的地方可以有很多，这里对viewset的list、retrieve操作配置, 在GoodsListViewSet接口添加一个CacheResponseMixin")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class GoodsListViewSet(CacheResponseMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,viewsets.GenericViewSet):\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在settings文件中设置默认的缓存时长")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 10：设置全局缓存过期时间为5秒\nREST_FRAMEWORK_EXTENSIONS = {\n    'DEFAULT_CACHE_RESPONSE_TIMEOUT': 5,\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"二-配置redis缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-配置redis缓存"}},[s._v("#")]),s._v(" 二：配置Redis缓存")]),s._v(" "),a("ul",[a("li",[s._v("安装django-redis")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install django-redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在settings文件中配置django-redis")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 11：配置redis缓存\nCACHES = {\n    "default": {\n        "BACKEND": "django_redis.cache.RedisCache",\n        # 密码是123456, 1表示数据库\n        "LOCATION": "redis://:123456@localhost:6379/1",\n        "OPTIONS": {\n            "CLIENT_CLASS": "django_redis.client.DefaultClient",\n        }\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("进入Redis客户端")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 进入客户端\nredis-cli -h localhost -p 6379 -a 123456\n\n# 选择数据库\nselect 1\n\n# 查看当前的key\nkeys *\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("将接口继承CacheResponseMixin")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class GoodsListViewSet(CacheResponseMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,viewsets.GenericViewSet):\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"三-限速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-限速"}},[s._v("#")]),s._v(" 三：限速")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用DRF的throttling限速")])]),s._v(" "),a("li",[a("p",[s._v("settings文件中配置限速")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 5：设置DRF的token认证和配置限速\nREST_FRAMEWORK = {\n    'DEFAULT_AUTHENTICATION_CLASSES': [\n        'rest_framework.authentication.BasicAuthentication',\n        'rest_framework.authentication.SessionAuthentication',\n    ],\n    # 配置限速\n    'DEFAULT_THROTTLE_CLASSES': [\n        'rest_framework.throttling.AnonRateThrottle',\n        'rest_framework.throttling.UserRateThrottle'\n    ],\n    'DEFAULT_THROTTLE_RATES': {\n        'anon': '100/day',\n        'user': '1000/day'\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("在GoodsListViewSet接口中使用")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("throttle_classes = (UserRateThrottle, AnonRateThrottle)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"四-第三方登录-oauth2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-第三方登录-oauth2-0"}},[s._v("#")]),s._v(" 四：第三方登录 Oauth2.0")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("国内的第三方登录主要是"),a("code",[s._v("QQ开放平台，微信开放平台，微博开放平台等")])])]),s._v(" "),a("li",[a("p",[s._v("这一块内容用到再补上")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);