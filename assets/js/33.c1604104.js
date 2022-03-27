(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1315:function(e,s,a){e.exports=a.p+"assets/img/2019-09-306.12.41.4706cddd.png"},1316:function(e,s,a){e.exports=a.p+"assets/img/2019-09-309.30.12.734837ef.png"},1317:function(e,s,a){e.exports=a.p+"assets/img/2019-10-0112.12.13.cbddada7.png"},1318:function(e,s,a){e.exports=a.p+"assets/img/2019-10-0112.24.33.77e089e9.png"},1319:function(e,s,a){e.exports=a.p+"assets/img/2019-10-0112.47.01.28eaaff0.png"},1320:function(e,s,a){e.exports=a.p+"assets/img/2019-10-011.15.44.40b80b27.png"},1321:function(e,s,a){e.exports=a.p+"assets/img/2019-10-011.31.15.74d57fd7.png"},1322:function(e,s,a){e.exports=a.p+"assets/img/2019-10-011.38.56.04285e3b.png"},1323:function(e,s,a){e.exports=a.p+"assets/img/2019-10-013.17.17.1595832d.png"},1324:function(e,s,a){e.exports=a.p+"assets/img/2019-10-013.23.30.5e7b85fa.png"},1325:function(e,s,a){e.exports=a.p+"assets/img/2019-10-013.25.48.46d95bc7.png"},1326:function(e,s,a){e.exports=a.p+"assets/img/2019-10-014.00.39.d960abe8.png"},1327:function(e,s,a){e.exports=a.p+"assets/img/2019-10-014.02.20.7c1b258e.png"},2443:function(e,s,a){"use strict";a.r(s);var r=a(9),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"一-drf接口文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-drf接口文档"}},[e._v("#")]),e._v(" 一：DRF接口文档")]),e._v(" "),r("ul",[r("li",[e._v("访问"),r("code",[e._v("http://localhost:8000/docs/")]),e._v("可以看到DRF自生成文档的接口")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1315),alt:"Alt text"}})]),e._v(" "),r("h3",{attrs:{id:"二-用户中心页面-获取用户详细信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-用户中心页面-获取用户详细信息"}},[e._v("#")]),e._v(" 二：用户中心页面，获取用户详细信息")]),e._v(" "),r("ul",[r("li",[e._v("当用户点击用户信息，需要获取用户的信息")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1316),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("此时前端请求/users/user_id的时候，对应用户的信息。因此在UserViewSet需要继承RetrieveModelMixin, 但是此时客户端无法知道用户的user_id，那么这里就需要重写get_object方法，get_object方法默认是基于user_id在User这个Model中的查询对应的记录并返回，但是前端不知道此时登录用户的user_id，如果想随意给一个user_id，也能够返回当前登录用户的详细信息，就需要重写get_object方法，在get_object方法中直接将请求用户记录返回。")])]),e._v(" "),r("li",[r("p",[e._v('用户详情信息的获取需要用户在登录情况下才具有权限，但是这个UserViewSet接口还具有用户create功能，在调用create时候不需要用户登录，因此这里就不能够简单的使用permission_classes，而是根据用户是的action动作分情况赋予permission，因此需要重写get_permissions方法，当用户的行为是retrieve的时候，才需要用户必须是登录状态。因此这里也需要设置authentication_classes，指定用户登录的方法，默认是settings文件中配置的BasicAuthentication和SessionAuthentication认证，在这个接口中不使用BasicAuthentication认证，使用JSONWebTokenAuthentication, SessionAuthentication两种登录认证方式，如果用户在没有登录认证情况下，调用UserViewSet接口，执行了retrieve动作，那么就会返回"detail": "身份认证信息未提供。"信息。')])]),e._v(" "),r("li",[r("p",[e._v("用户信息返回的是UserRegSerializer类中序列化的字段，有四个'username', 'code', 'mobile', 'password'，其中code、password都是write_only字段，不会序列化返回，显然字段信息不足，因此需要根据用户的action动作绑定不同的serializer_class，因此需要重写genericAPIView中的get_serializer_class方法，明确指定如果是用户的详细信息使用UserDetailSerializer, 其他情况使用UserRegSerializer")])]),e._v(" "),r("li",[r("p",[e._v("创建users.serializers.user_detail.py模块，添加UserDetailSerializer序列化类, 明确指定序列化返回的字段有'name', 'gender', 'birthday', 'email', 'mobile'")])])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework import serializers\nfrom django.contrib.auth import get_user_model\n\nUser = get_user_model()\n\n# 返回用户详情的序列化字段\nclass UserDetailSerializer(serializers.ModelSerializer):\n\n    class Meta:\n        model = User\n        fields = ('name', 'gender', 'birthday', 'email', 'mobile')\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br")])]),r("ul",[r("li",[e._v("最后UserViewSet接口代码为：")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework import mixins, viewsets\nfrom ..serializers import UserRegSerializer, UserDetailSerializer\nfrom django.contrib.auth import get_user_model\nfrom rest_framework.response import Response\nfrom rest_framework import status\nfrom rest_framework_jwt.serializers import jwt_encode_handler, jwt_payload_handler\nfrom rest_framework import permissions\nfrom rest_framework.authentication import SessionAuthentication, BasicAuthentication\nfrom rest_framework_jwt.authentication import JSONWebTokenAuthentication\n\nUser = get_user_model()\n\n# 这里是CreateModelMixin，表示只处理post请求\n#\nclass UserViewSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):\n    queryset = User.objects.all()\n    # 默认的序列化类\n    serializer_class = UserRegSerializer\n\n    # 这里是保证用户在登录的情况下才能访问这个接口\n    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication, )\n    # authentication_classes = (SessionAuthentication, )\n\n    # 如果用户注册完毕之后，让用户直接登录了，那么就需要将JWT的token返回给用户\n    def create(self, request, *args, **kwargs):\n        serializer = self.get_serializer(data=request.data)\n        serializer.is_valid(raise_exception=True)\n        user = self.perform_create(serializer)\n\n        # 返回请求的时候，将用户的token也返回\n        re_dict = serializer.data\n        payload = jwt_payload_handler(user)\n        re_dict['token'] = jwt_encode_handler(payload)\n        re_dict['name'] = user.name if user.name else user.username\n\n        headers = self.get_success_headers(serializer.data)\n        return Response(re_dict, status=status.HTTP_201_CREATED, headers=headers)\n\n    def perform_create(self, serializer):\n        return serializer.save()\n\n    # 重写get_object方法，返回当前用户的数据库记录\n    def get_object(self):\n        return self.request.user\n\n    # 重写get_permissions方法，明确指明如果是retrive，用户才需要处于登录状态，其他情况不需要\n    # 目的是客户端请求用户详情数据时候，需要在登录状态\n    def get_permissions(self):\n        return [permissions.IsAuthenticated()] if self.action == 'retrieve' else []\n\n    # 重写genericAPIView中的get_serializer_class方法，明确指定如果是用户的详细信息使用UserDetailSerializer, 其他情况使用UserRegSerializer\n    # 目的是客户端请求用户详情页的时候，返回需要的字段\n    def get_serializer_class(self):\n        return UserDetailSerializer if self.action == 'retrieve' else UserRegSerializer\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br"),r("span",{staticClass:"line-number"},[e._v("25")]),r("br"),r("span",{staticClass:"line-number"},[e._v("26")]),r("br"),r("span",{staticClass:"line-number"},[e._v("27")]),r("br"),r("span",{staticClass:"line-number"},[e._v("28")]),r("br"),r("span",{staticClass:"line-number"},[e._v("29")]),r("br"),r("span",{staticClass:"line-number"},[e._v("30")]),r("br"),r("span",{staticClass:"line-number"},[e._v("31")]),r("br"),r("span",{staticClass:"line-number"},[e._v("32")]),r("br"),r("span",{staticClass:"line-number"},[e._v("33")]),r("br"),r("span",{staticClass:"line-number"},[e._v("34")]),r("br"),r("span",{staticClass:"line-number"},[e._v("35")]),r("br"),r("span",{staticClass:"line-number"},[e._v("36")]),r("br"),r("span",{staticClass:"line-number"},[e._v("37")]),r("br"),r("span",{staticClass:"line-number"},[e._v("38")]),r("br"),r("span",{staticClass:"line-number"},[e._v("39")]),r("br"),r("span",{staticClass:"line-number"},[e._v("40")]),r("br"),r("span",{staticClass:"line-number"},[e._v("41")]),r("br"),r("span",{staticClass:"line-number"},[e._v("42")]),r("br"),r("span",{staticClass:"line-number"},[e._v("43")]),r("br"),r("span",{staticClass:"line-number"},[e._v("44")]),r("br"),r("span",{staticClass:"line-number"},[e._v("45")]),r("br"),r("span",{staticClass:"line-number"},[e._v("46")]),r("br"),r("span",{staticClass:"line-number"},[e._v("47")]),r("br"),r("span",{staticClass:"line-number"},[e._v("48")]),r("br"),r("span",{staticClass:"line-number"},[e._v("49")]),r("br"),r("span",{staticClass:"line-number"},[e._v("50")]),r("br"),r("span",{staticClass:"line-number"},[e._v("51")]),r("br"),r("span",{staticClass:"line-number"},[e._v("52")]),r("br"),r("span",{staticClass:"line-number"},[e._v("53")]),r("br"),r("span",{staticClass:"line-number"},[e._v("54")]),r("br")])]),r("ul",[r("li",[e._v("请求任意的user_id，例如： "),r("code",[e._v("http://localhost:8000/users/12/")]),e._v("， 返回的结果如下")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1317),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[e._v("修改vue中api.js修改请求地址为localhost，前端访问用户详情页如下")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1318),alt:"Alt text"}})]),e._v(" "),r("h3",{attrs:{id:"三-用户中心页面-修改用户详细信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-用户中心页面-修改用户详细信息"}},[e._v("#")]),e._v(" 三：用户中心页面，修改用户详细信息")]),e._v(" "),r("ul",[r("li",[e._v("这里需要修改用户详情信息，因此UserViewSet需要继承UpdateModelMixin, 而且在get_serializer_class方法中指定partial_update也是用UserDetailSerializer更新数据")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    def get_serializer_class(self):\n        return UserDetailSerializer if self.action == 'retrieve' or self.action == 'partial_update' else UserRegSerializer\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h3",{attrs:{id:"四-用户中心页面-完成用户的收藏功能-收藏的展示和删除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-用户中心页面-完成用户的收藏功能-收藏的展示和删除"}},[e._v("#")]),e._v(" 四：用户中心页面，完成用户的收藏功能，收藏的展示和删除")]),e._v(" "),r("ul",[r("li",[e._v("用户收藏功能页面如下")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1319),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[e._v("之前开发的UserFavViewSet接口的list操作，只能返回goods、id两个字段。如果需要获取商品名称、商品价格，那么需要新建一个user_fav.UserFavDetailSerializer，将goods作为序列化外键")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("class UserFavDetailSerializer(serializers.ModelSerializer):\n\n    goods = GoodsSerializer(many=True)\n    class Meta:\n        model = UserFav\n        # 对一个Model实例需要有删除功能，就需要将id返回\n        fields = ('user', 'goods', 'id')\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br")])]),r("ul",[r("li",[e._v("当用户在进行list操作的时候调用UserFavDetailSerializer序列化字段返回，其他操作依然调用UserFavSerializer， 因此需要在UserFavViewSet接口中重写get_serializer_class方法")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 根据用户的操作选择不同的序列化类\n    def get_serializer_class(self):\n        return UserFavDetailSerializer if self.action == 'list' else UserFavSerializer\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("ul",[r("li",[e._v("在用户登录状态下，请求"),r("code",[e._v("http://localhost:8000/userfavs/")]),e._v("效果如下，将goods字段的详细信息返回了")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1320),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[r("p",[e._v("注意，这里返回的是当前登录用户的收藏记录，因为在UserFavViewSet接口中，重写了get_queryset方法，过滤出了当前登录用户的收藏信息")])]),e._v(" "),r("li",[r("p",[e._v("在Vue中修改localhost地址")])])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1321),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[e._v("当用户点击删除的时候，调用的是"),r("code",[e._v("http://127.0.0.1:8000/userfavs/2/")]),e._v("， 2是good_id，由于UserFavViewSet接口继承了DestroyModelMixin类，会调用get_object方法，获取记录对象，get_object中是根据lookup_field来查找记录的。由于"),r("code",[e._v("lookup_field = 'goods_id'")]),e._v("，那么get_object方法会返回UserFav中goods_id=2这条记录，然后删除。因此删除功能已经做好了")])]),e._v(" "),r("h3",{attrs:{id:"五-用户中心页面-完成用户的留言功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五-用户中心页面-完成用户的留言功能"}},[e._v("#")]),e._v(" 五：用户中心页面，完成用户的留言功能")]),e._v(" "),r("ul",[r("li",[e._v("开发前页面")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1322),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[e._v("先在urls.py文件中注册路由")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 用户留言信息\nrouter.register(r'messages', UserLivingMessageViewSet, base_name='messages')\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("ul",[r("li",[e._v("创建user_operation.django_rest_view.user_message.py模块，创建UserLivingMessageViewSet，这个留言功能具有list, destroy, create 操作，也需要用户登录才能够有权限访问这个接口，因此需要设置permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)，用户的登录认证为authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication)。用户只能查看到自己的留言信息，因此需要重写get_queryset方法。UserLivingMessageViewSet如下")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework import mixins, viewsets\nfrom ..serializers import UserLivingMessageSerializer\nfrom ..models import UserLeavingMessage\nfrom rest_framework_jwt.authentication import JSONWebTokenAuthentication\nfrom rest_framework.authentication import SessionAuthentication\nfrom rest_framework.permissions import IsAuthenticated\nfrom utils.permissions import IsOwnerOrReadOnly\n\n\nclass UserLivingMessageViewSet(mixins.ListModelMixin,\n                               mixins.DestroyModelMixin,\n                               mixins.CreateModelMixin,\n                               viewsets.GenericViewSet):\n\n    queryset = UserLeavingMessage.objects.all()\n    serializer_class = UserLivingMessageSerializer\n    # 有了IsOwnerOrReadOnly，当用户删除的时候，就会获取其权限\n    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)\n    # 局部使用JWT的token认证，不用在全局都是用token认证\n    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication)\n\n\n    def get_queryset(self):\n        return UserLeavingMessage.objects.filter(user=self.request.user)\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br"),r("span",{staticClass:"line-number"},[e._v("25")]),r("br")])]),r("ul",[r("li",[e._v("创建user_operation.serializers.user_message.py模块，创建UserLivingMessageSerializer，继承ModelSerializer， 由于用户返回的是当前用户的留言信息，因此user字段不需要被序列化，且create留言信息的时候直接获取当前登录用户，那么user字段应该是HiddenField类型字段。由于需要API返回留言信息的创建时间，但是这个add_time字段在create操作时候不需要用到，那么设置add_time为read_only=True，且设置add_time字段返回的格式。在fields中添加了id字段返回给客户端，因为客户端需要使用ID字段对留言记录进行删除操作。UserLivingMessageSerializer如下")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework import serializers\nfrom ..models import UserLeavingMessage\n\nclass UserLivingMessageSerializer(serializers.ModelSerializer):\n    user = serializers.HiddenField(default=serializers.CurrentUserDefault())\n    # add_time字段设置read_only=True，明确指定字段不写入数据表，只返回客户端\n    add_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')\n    class Meta:\n        model = UserLeavingMessage\n        fields = ('id','user', 'message_type', 'subject', 'message', 'file','add_time')\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br")])]),r("ul",[r("li",[e._v("在DRF browser API中，发送list请求，显示如下。Post请求的时候，只能发送'message_type', 'subject', 'message', 'file'四个字段，因为id是主键，自动生成，user字段是隐藏字段类型，add_time是read_only字段")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1323),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[e._v("修改Vue中的localhost后，页面如下")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1324),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[r("code",[e._v("这里特别需要说明一下这个文件的提交思想: 由于文件上传是Vue中的一个标签或控件，那么点击选中文件的时候，文件路径写入到Vue中，Vue提交post请求的时候，会写入Content-Type到请求头，headers:{ 'Content-Type': 'multipart/form-data' }，明确指明此表单包含文件，那么Django接口处理这个请求的时候，会将文件地址存储到数据库，文件对象保存到本地")])])]),e._v(" "),r("h3",{attrs:{id:"六-用户中心页面-收货地址信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六-用户中心页面-收货地址信息"}},[e._v("#")]),e._v(" 六：用户中心页面，收货地址信息")]),e._v(" "),r("ul",[r("li",[e._v("页面开发前")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1325),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[e._v("在urls.py文件中，添加路由")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 用户后货地址\nrouter.register(r'address', UserAddressViewSet, base_name='address')\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("ul",[r("li",[e._v("创建user_operation.django_rest_view.user_address.py，创建UserAddressViewSet, 继承ModelViewSet，因为涉及到所有的action操作")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework import  viewsets\nfrom ..models import UserAddress\nfrom rest_framework_jwt.authentication import JSONWebTokenAuthentication\nfrom rest_framework.authentication import SessionAuthentication\nfrom rest_framework.permissions import IsAuthenticated\nfrom utils.permissions import IsOwnerOrReadOnly\nfrom ..serializers import UserAddressSerializer\n\n# 这里继承ModelViewSet是因为这个接口有create, list, update, destroy操作，那么直接继承ModelViewSet就都有了\nclass UserAddressViewSet(viewsets.ModelViewSet):\n\n    queryset = UserAddress.objects.all()\n    serializer_class = UserAddressSerializer\n    # 有了IsOwnerOrReadOnly，当用户删除的时候，就会获取其权限\n    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)\n    # 局部使用JWT的token认证，不用在全局都是用token认证\n    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication)\n\n\n    def get_queryset(self):\n        return UserAddress.objects.filter(user=self.request.user)\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br")])]),r("ul",[r("li",[e._v("创建user_operation.serializers.user_address.py， 创建UserAddressSerializer")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from rest_framework import serializers\nfrom ..models import UserAddress\n\nclass UserAddressSerializer(serializers.ModelSerializer):\n    # user字段不返回，也不能post数据，因此使用HiddenField\n    user = serializers.HiddenField(default=serializers.CurrentUserDefault())\n    # add_time字段设置read_only=True，明确指定字段不写入数据表，只返回客户端\n    add_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')\n    class Meta:\n        model = UserAddress\n        fields = ('id','user', 'province', 'city', 'district', 'address','signer_name', 'signer_mobile', 'add_time')\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br")])]),r("ul",[r("li",[e._v("在DRF browser API中，发送list请求，显示如下")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1326),alt:"Alt text"}})]),e._v(" "),r("ul",[r("li",[e._v("vue中修改localhost")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(1327),alt:"Alt text"}})])])}),[],!1,null,null,null);s.default=t.exports}}]);