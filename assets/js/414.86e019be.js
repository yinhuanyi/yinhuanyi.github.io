(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{2318:function(s,e,a){"use strict";a.r(e);var n=a(9),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-django-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-django-csrf"}},[s._v("#")]),s._v(" 一：Django CSRF")]),s._v(" "),a("h3",{attrs:{id:"一-django-csrf功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-django-csrf功能介绍"}},[s._v("#")]),s._v(" （一）：Django CSRF功能介绍")]),s._v(" "),a("ul",[a("li",[s._v("原理")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\tCSRF（Cross Site Request Forgery），跨站请求伪造。CSRF攻击者在用户已经登录目标网站之后，诱使用户访问一个攻击页面，利用目标网站对用户的信任，以用户身份在攻击页面对目标网站发起伪造用户操作的请求，达到攻击目的。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在settings文件中有一项配置，默认Django启用csrf认证")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',\n    'django.contrib.sessions.middleware.SessionMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    # csrf中间件\n    'django.middleware.csrf.CsrfViewMiddleware',\n    'django.contrib.auth.middleware.AuthenticationMiddleware',\n    'django.contrib.messages.middleware.MessageMiddleware',\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("因此当页面为form表单提交，一般都需要在form标签中加上, 例如之前写过的用户文件上传的示例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<form action="{% url \'users:image\' %}" method="post" enctype="multipart/form-data">\n{#  <input type="file" name="upload" accept="image/gif, image/jpeg, image/png, image/jpg">#}\n    <input type="file" name="upload">\n    <input type="submit" value="提交">\n    {% csrf_token %}\n</form>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("如果在settings文件中将csrf的中间件注释，那么form表单提交，将不再需要csrf token认证")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',\n    'django.contrib.sessions.middleware.SessionMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    # 注释csrf中间件\n    # 'django.middleware.csrf.CsrfViewMiddleware',\n    'django.contrib.auth.middleware.AuthenticationMiddleware',\n    'django.contrib.messages.middleware.MessageMiddleware',\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("在项目开发过程中，经常会碰到数据转发的问题，或 不同语言直接的数据交互。举一个实际例子："),a("strong",[s._v("Java开发的程序，需要向Django框架编写的后台服务器提交HTTP协议的post请求，Django给这个HTTP请求设置一条路由规则，经过request.POST拿到数据")])])]),s._v(" "),a("li",[a("p",[s._v("上面的例子中，Java程序扮演的是HTTP客户端，Django框架是HTTP服务器端，看似没有什么问题，但是POST请求进来的时候，会先经过Django的CsrfViewMiddleware，如果没有csrf token将会返回403的forbidden错误，为了避免这个问题通常的做法是：使用django.views.decorators.csrf.csrf_exempt装饰器来修饰这个处理POST请求的View, 这中方式是CSRF局部禁用")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("from django.views.generic import View\nfrom django.utils.decorators import method_decorator\nfrom django.views.decorators.csrf import csrf_exempt\nclass CSRFTestView(View):\n    @method_decorator(csrf_exempt)\n    def dispatch(self, request, *args, **kwargs):\n        return super().dispatch(request, *args, **kwargs)\n\t\n    def post(self, request):\n\t    pass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("既然有CSRF局部禁用，也有局部启用，局部启用需要先在settings文件中关闭"),a("code",[s._v("CsrfViewMiddleware")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("from django.views.generic import View\nfrom django.utils.decorators import method_decorator\nfrom django.views.decorators.csrf import csrf_protect\nclass CSRFTestView(View):\n    @method_decorator(csrf_protect)\n    def dispatch(self, request, *args, **kwargs):\n        return super().dispatch(request, *args, **kwargs)\n\t\n    def post(self, request):\n\t    pass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[a("strong",[a("code",[s._v("如果需要禁用Django CSRF功能项目都是启用全局的CSRF中间件，针对局部的View进行禁用")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);