(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{1328:function(s,e,a){s.exports=a.p+"assets/img/2019-09-301.27.43.23dad31d.png"},1329:function(s,e,a){s.exports=a.p+"assets/img/2019-09-301.53.17.5283f9ff.png"},1330:function(s,e,a){s.exports=a.p+"assets/img/2019-09-302.29.50.1fa681ca.png"},2445:function(s,e,a){"use strict";a.r(e);var n=a(9),i=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"一-实现商品详情接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-实现商品详情接口"}},[s._v("#")]),s._v(" 一：实现商品详情接口")]),s._v(" "),n("ul",[n("li",[s._v("页面修改前展示")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(1328),alt:"Alt text"}})]),s._v(" "),n("ul",[n("li",[s._v("修改GoodsListViewSet，让这个viewset可以查询一个数据实例, 只需要GoodsListViewSet继承RetrieveModelMixin即可")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class GoodsListViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,viewsets.GenericViewSet)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("由于Goods这个Model被GoodsImage这个Model引用为image外键，因此在返回Goods实例中需要带上GoodsImage的实例的image字段。在goods.serializers.good.py模块中添加GoodsImageSerializer，只需要序列化image字段。GoodsSerializer中新创建images_to_goods字段，作为新序列化字段指向GoodsImageSerializer，images_to_goods需要与GoodsImage这个Model中的goods外键的related_name的名称一致, 因为有多张图片，所以设置many=True。此时GoodsImage作为GoodsSerializer子serializers被序列化通过API返回")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from rest_framework import serializers\nfrom ..models import Goods, GoodsImage\n\n# GoodsImage作为GoodsSerializer子serializers\nclass GoodsImageSerializer(serializers.ModelSerializer):\n\n    class Meta:\n        model = GoodsImage\n        fields = ('image', )\n\nclass GoodsSerializer(serializers.ModelSerializer):\n    '''\n    商品序列化\n    '''\n    # images_to_goods需要与GoodsImage这个Model中的goods外键的related_name的名称一致, 因为有多张图片，所以设置many=True\n    images_to_goods = GoodsImageSerializer(many=True)\n\n    class Meta:\n        model = Goods\n        fields = \"__all__\"\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("ul",[n("li",[s._v("在Vue中修改路由")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export const getGoodsDetail = goodId =### { return axios.get(`${local_host}/goods/${goodId}`+'/') }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("在DRF后台请求效果")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(1329),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"二-实现热卖商品接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-实现热卖商品接口"}},[s._v("#")]),s._v(" 二：实现热卖商品接口")]),s._v(" "),n("ul",[n("li",[s._v("对热卖商品只需要在goods.filters.good.py中的过滤字段中添加is_hot字段即可")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    class Meta:\n        model = Goods\n        fields = ['pricemin', 'pricemax', 'name', 'is_hot']\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("DRF页面就会有is_hot字段过滤")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(1330),alt:"Alt text"}})]),s._v(" "),n("h3",{attrs:{id:"三-用户收藏接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-用户收藏接口"}},[s._v("#")]),s._v(" 三：用户收藏接口")]),s._v(" "),n("ul",[n("li",[s._v("在urls.py中先注册路由")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 用户收藏功能\nrouter.register(r'userfavs', UserFavViewSet, base_name='userfavs')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("新建user_operation.django_rest_view.user_fav.py模块, 创建UserFavViewSet")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from rest_framework import mixins, viewsets\nfrom ..serializers import UserFavSerializer\nfrom ..models import UserFav\n\n# 收藏就是创建记录，取消收藏就是删除记录\nclass UserFavViewSet(mixins.CreateModelMixin,mixins.ListModelMixin, mixins.DestroyModelMixin,viewsets.GenericViewSet):\n\t\n\t# 这里赋值queryset的目的是因为继承了ListModelMixin，可以get重新\n    queryset = UserFav.objects.all()\n    serializer_class = UserFavSerializer\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("新建user_operation.serializers.user_fav.py模块，创建UserFavSerializer。user需要从当前登录用户获取，且不被序列化返回给前端，因此使用HiddenField类型字段。在Meta中设置('user', 'goods')为联合唯一索引, 如果用户可以删除，那么需要将id字段返回客户端")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from rest_framework import serializers\nfrom ..models import UserFav\nfrom rest_framework.validators import UniqueTogetherValidator\n\nclass UserFavSerializer(serializers.ModelSerializer):\n    # 因为这个user和goods都是外键，导致用户post只能选择数据进行post，因此这里的用户post应该是获取当前的用户\n    # 获取当前的用户, 此时post数据就不需要填写user这个字段了，而且get请求的时候，这个也不会将user字段序列化基于API返回\n    user = serializers.HiddenField(default=serializers.CurrentUserDefault())\n\n    class Meta:\n        model = UserFav\n        # 对一个Model实例需要有删除功能，就需要将id返回\n        fields = ('user', 'goods', 'id')\n\n        # 设置联合唯一字段, 让'user', 'goods'成为联合唯一，这是对数据库的操作，设置完毕后一定需要migration\n        unique_together = ('user', 'goods')\n\n        # 也可以使用rest_framework中的联合唯一索引\n        validators = [\n            UniqueTogetherValidator(queryset=UserFav.objects.all(), fields=('user', 'goods'), message='已经收藏过')\n        ]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"四-drf中认证控制和权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四-drf中认证控制和权限控制"}},[s._v("#")]),s._v(" 四：DRF中认证控制和权限控制")]),s._v(" "),n("ul",[n("li",[s._v("由于引入了第三方的JWT token认证机制，在原有的认证机制BasicAuthentication、SessionAuthentication之上添加了JSONWebTokenAuthentication。但是JSONWebTokenAuthentication不能够写在settings配置文件中全局配置，如果全局配置，那么如果用户访问公共数据，例如访问goods列表页就没有权限了，因为需要用户携带token才能访问。因此在全局DEFAULT_AUTHENTICATION_CLASSES中将JWT token认证注释。哪个view需要jwt的token认证就加入到哪里")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 5：设置DRF的token认证\nREST_FRAMEWORK = {\n    'DEFAULT_AUTHENTICATION_CLASSES': [\n        'rest_framework.authentication.BasicAuthentication',\n        'rest_framework.authentication.SessionAuthentication',\n        # 将JWT的token认证配置到具体的view中，不要配置到全局\n        # 'rest_framework_jwt.authentication.JSONWebTokenAuthentication',\n    ]\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("ul",[n("li",[s._v("由于在UserFavViewSet添加了删除功能，那么必须是当前登录用户才能够删除自己的收藏记录，而且在查看记录的时候必须是登录用户才能查看，也必须是查看自己的记录，不能查看其他用户的记录。因此创建utils.permissions.py模块，当前请求用户是否是创建记录的用户")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from rest_framework import permissions\n\nclass IsOwnerOrReadOnly(permissions.BasePermission):\n    def has_object_permission(self, request, view, obj):\n\t    # 如果是常规安全的请求方法直接允许\n        if request.method in permissions.SAFE_METHODS:\n            return True\n\t\t\n        # 如果不是安全的请求方法，例如delete方法，这里需要判断请求的用户是否是本条记录的用户，如果返回True才能够删除\n        return obj.user == request.user\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("修改UserFavViewSet，添加携带token或sessionid的用户才具有权限，且如果用户需要删除一条收藏记录，必须是此记录的owner，如果用户需要查看当前收藏记录，必须是登录用户，且只能查看自己的记录，因此重写get_queryset方法。因此在permission_classes中添加了(IsAuthenticated, IsOwnerOrReadOnly)，authentication_classes添加了(JSONWebTokenAuthentication, SessionAuthentication)")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("from rest_framework import mixins, viewsets\nfrom ..serializers import UserFavSerializer\nfrom ..models import UserFav\nfrom rest_framework.permissions import  IsAuthenticated\nfrom utils.permissions import IsOwnerOrReadOnly\n# 使得用户删除数据的时候必须使用JWT认证\nfrom rest_framework_jwt.authentication import JSONWebTokenAuthentication\n# 使得获取list列表页可以基于session认证\nfrom rest_framework.authentication import SessionAuthentication\n\n# 收藏就是创建记录，取消收藏就是删除记录\nclass UserFavViewSet(mixins.CreateModelMixin,mixins.ListModelMixin, mixins.DestroyModelMixin,viewsets.GenericViewSet):\n\n    queryset = UserFav.objects.all()\n    serializer_class = UserFavSerializer\n    # 让这个UserFavViewSet必须是登录用户才能访问\n    # 有了IsOwnerOrReadOnly，当用户删除的时候，就会获取其权限\n    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)\n    # 局部使用JWT的token认证，不用在全局都是用token认证\n    authentication_classes = (JSONWebTokenAuthentication, SessionAuthentication)\n    \n\n    # 当用户获取list列表的时候，不应该获取所有的数据，只能获取自己收藏的数据，因此需要重写get_queryset方法\n    def get_queryset(self):\n        queryset = UserFav.objects.filter(user=self.request.user)\n        return queryset\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"五-前端和后端对收藏功能联调"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五-前端和后端对收藏功能联调"}},[s._v("#")]),s._v(" 五：前端和后端对收藏功能联调")]),s._v(" "),n("ul",[n("li",[s._v("如果UserFavViewSet再继承RetrieveModelMixin，那么就可以使用"),n("code",[s._v("http://localhost:8000/userfavs/7/")]),s._v("获取指定单个收藏记录，但是这个id，前端无法知道，用户在访问某个商品的时候，前端只知道某个商品的id,如果前端想使用"),n("code",[s._v("http://localhost:8000/userfavs/good_id/")]),s._v("，通过商品的id获取到对应的商品收藏记录，那么就需要自己设置在RetrieveModelMixin中的get_object方法查询的是哪个字段，默认搜索的是"),n("code",[s._v("lookup_field = 'pk'")]),s._v("主键字段，也就是id字段，因此在UserFavViewSet的类变量中可以修改为搜索goods_id字段")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 指定RetrieveModelMixin查询的是goods_id字段\nlookup_field = 'goods_id'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);e.default=i.exports}}]);