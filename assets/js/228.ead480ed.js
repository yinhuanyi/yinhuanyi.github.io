(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{2148:function(s,n,t){"use strict";t.r(n);var e=t(9),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-user-web端-集成-jaeger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-user-web端-集成-jaeger"}},[s._v("#")]),s._v(" 一：user-web端 集成 jaeger")]),s._v(" "),e("h3",{attrs:{id:"一-在配置中添加jaeger的相关配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-在配置中添加jaeger的相关配置"}},[s._v("#")]),s._v(" (一)：在配置中添加jaeger的相关配置")]),s._v(" "),e("ul",[e("li",[s._v("修改"),e("code",[s._v("all-server/user_web/config/config.go")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 添加\ntype JaegerConfig struct {\n\tHost string `mapstructure:"host" json:"host"`\n\tPort int    `mapstructure:"port" json:"port"`\n\tName string `mapstructure:"name" json:"name"`\n}\n\n# 修改\ntype ServerConfig struct {\n\tName    string   `mapstructure:"name" json:"name"`\n\tHost    string   `mapstructure:"host" json:"host"`\n\tPort    int      `mapstructure:"port" json:"port"`\n\tLogMode string   `mapstructure:"log_mode" json:"log_mode"`\n\tTags    []string `mapstructure:"tags" json:"tags"`\n\n\t*JWTConfig     `mapstructure:"jwt" json:"jwt"`\n\t*UserSrvConfig `mapstructure:"user_srv" json:"user_srv"`\n\t*AliSmsConfig  `mapstructure:"sms" json:"sms"`\n\t*RedisConfig   `mapstructure:"redis" json:"redis"`\n\t*ConsulConfig  `mapstructure:"consul" json:"consul"`\n\t*JaegerConfig  `mapstructure:"jaeger" json:"jaeger"`\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("ul",[e("li",[s._v("在nacos中，将配置文件更新，添加jaeger配置段")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"jaeger":{\n    "host":"192.168.100.203",\n    "port":6831,\n    "name": "user-web"\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"二-添加链路追踪中间件-且配置到路由表中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-添加链路追踪中间件-且配置到路由表中"}},[s._v("#")]),s._v(" (二)：添加链路追踪中间件，且配置到路由表中")]),s._v(" "),e("ul",[e("li",[s._v("在"),e("code",[s._v("all-server/user_web/middleware/tracing.go")]),s._v("，创建Trace中间件，目的是在gin的context对象中封装"),e("code",[s._v("trace")]),s._v("和"),e("code",[s._v("parentSpan")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import (\n\t"all-server/user_web/global"\n\t"fmt"\n\t"github.com/gin-gonic/gin"\n\t"github.com/uber/jaeger-client-go"\n\tjaegercfg "github.com/uber/jaeger-client-go/config"\n)\n\n// Trace 添加一个链路追踪\nfunc Trace() gin.HandlerFunc {\n\treturn func(context *gin.Context) {\n\t\taddr := fmt.Sprintf("%s:%d", global.Conf.JaegerConfig.Host, global.Conf.JaegerConfig.Port)\n\t\tfmt.Println(addr)\n\t\t// 生成tracer\n\t\tcfg := jaegercfg.Configuration{\n\t\t\tSampler: &jaegercfg.SamplerConfig{\n\t\t\t\tType:  jaeger.SamplerTypeConst,\n\t\t\t\tParam: 1,\n\t\t\t},\n\t\t\tReporter: &jaegercfg.ReporterConfig{\n\t\t\t\tLogSpans: true,\n\t\t\t\t// 设置jaeger的地址\n\t\t\t\tLocalAgentHostPort: fmt.Sprintf("%s:%d", global.Conf.JaegerConfig.Host, global.Conf.JaegerConfig.Port),\n\t\t\t},\n\t\t\t// 服务名称\n\t\t\tServiceName: global.Conf.JaegerConfig.Name,\n\t\t}\n\n\t\t// 获取tracer\n\t\ttracer, closer, err := cfg.NewTracer(jaegercfg.Logger(jaeger.StdLogger))\n\t\tif err != nil {\n\t\t\tpanic(err)\n\t\t}\n\t\tdefer closer.Close()\n\n\t\t// 将url请求的路径，作为span的起点名称\n\t\tstartSpan := tracer.StartSpan(context.Request.URL.Path)\n\t\tdefer startSpan.Finish()\n\n\t\tcontext.Set("tracer", tracer)\n\t\tcontext.Set("parentSpan", startSpan)\n\n\t\tcontext.Next()\n\n\t}\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br")])]),e("ul",[e("li",[s._v("在路由分组中，添加链路追踪中间件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import (\n\t"all-server/user_web/api/user"\n\t"all-server/user_web/middleware"\n\t"github.com/gin-gonic/gin"\n)\n\nfunc InitUserRouter(Router *gin.RouterGroup){\n\tUserRouter := Router.Group("user").Use(middleware.Trace())\n\t{\n\t\tUserRouter.GET("list", middleware.JWTAuth(), middleware.IsAdminAuth(), user.GetUserList)\n\t\tUserRouter.POST("pwd_login", user.PasswordLogin)\n\t\tUserRouter.POST("register", user.Register)\n\n\t\tUserRouter.GET("detail", middleware.JWTAuth(), user.GetUserDetail)\n\t\tUserRouter.PATCH("update", middleware.JWTAuth(), user.UpdateUser)\n\t}\n\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h3",{attrs:{id:"三-在handler中-在context对象中封装gin的context-并且传递到grpc中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-在handler中-在context对象中封装gin的context-并且传递到grpc中"}},[s._v("#")]),s._v(" (三)：在handler中，在context对象中封装gin的context，并且传递到grpc中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// GetUserList  用户列表\nfunc GetUserList(ctx *gin.Context) {\n\n\tuserSrvClient := global.UserSrvClient\n\t// 基于context的WithValue方法，将 {"ginContext": ctx}传递到grpc的拦截器中，使得在grpc的拦截器中，可以获取到ctx对象，进一步可以获取到trace和parentSpan对象\n\tlocalCtx := context.WithValue(context.Background(), "ginContext", ctx)\n\n\tuserInfos, err := userSrvClient.GetUserList(localCtx, &proto.PageInfo{\n\t\tPn: uint32(pnInt),\n\t\tPSize: uint32(pSizeInt),\n\t})\n\n\tif err != nil {\n\t\tzap.L().Error("userSrvClient.GetUserList Error 服务不可达", zap.Error(err))\n\t\tapi.HandleGrpcErrorToHttp(ctx, err)\n\t\treturn\n\t}\n\n\tresult := make([]*response.UserResponse, 0)\n\n\tfor _, userInfo := range userInfos.Data {\n\t\tuser := &response.UserResponse{}\n\t\tuser.Id = userInfo.Id\n\t\tuser.NickName = userInfo.NickName\n\t\tuser.Birthday = response.JsonDate(time.Unix(int64(userInfo.Birthday), 0)) // 这里的response.JsonTime()是类型强制转换\n\t\tuser.Gender = userInfo.Gender\n\t\tuser.Mobile = userInfo.Mobile\n\n\t\tresult = append(result, user)\n\t}\n\n\tctx.JSON(http.StatusOK, gin.H{\n\t\t"code": 10001,\n\t\t"data": map[string]interface{}{\n\t\t\t"totol": userInfos.Total,\n\t\t\t"data": result,\n\t\t},\n\t\t"msg": "获取成功",\n\t})\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br")])]),e("h3",{attrs:{id:"四-从github的grpc-ecosystem-grpc-opentracing库中-现在otgrpc-golang-的代码-放在utils目录下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-从github的grpc-ecosystem-grpc-opentracing库中-现在otgrpc-golang-的代码-放在utils目录下"}},[s._v("#")]),s._v(" (四)：从github的grpc-ecosystem/grpc-opentracing库中，现在otgrpc(golang)的代码，放在utils目录下")]),s._v(" "),e("ul",[e("li",[s._v("拷贝到all-server/user_web/utils/otgrpc，修改client.go代码，获取gin的context对象，覆盖源码中自己生成的trace和parentSpan对象")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('func OpenTracingClientInterceptor(tracer opentracing.Tracer, optFuncs ...Option) grpc.UnaryClientInterceptor {\n\totgrpcOpts := newOptions()\n\totgrpcOpts.apply(optFuncs...)\n\treturn func(\n\t\tctx context.Context,\n\t\tmethod string,\n\t\treq, resp interface{},\n\t\tcc *grpc.ClientConn,\n\t\tinvoker grpc.UnaryInvoker,\n\t\topts ...grpc.CallOption,\n\t) error {\n\t\tvar err error\n\t\tvar parentCtx opentracing.SpanContext\n\n\t\tif parent := opentracing.SpanFromContext(ctx); parent != nil {\n\t\t\tparentCtx = parent.Context()\n\t\t}\n\n\t\t// Todo: 修改源码, 这里主要是获取到context中，传递进来的ginContext\n\t\tginContext := ctx.Value("ginContext")\n\t\t// 判断ginContext的类型，获取到ginContext中传递进来的tracer和parentSpan\n\t\tswitch ginContext.(type) {\n\t\tcase *gin.Context:\n\t\t\tif iTracer, ok := ginContext.(*gin.Context).Get("tracer"); ok {\n\t\t\t\t// 这里覆盖掉了传递进来的tracer，使用ginContext中添加的tracer\n\t\t\t\ttracer = iTracer.(opentracing.Tracer)\n\t\t\t}\n\n\t\t\tif iParentSpan, ok := ginContext.(*gin.Context).Get("parentSpan"); ok {\n\t\t\t\t// 将这个span的值覆盖掉，使用Trace中间件中创建的parentSpan\n\t\t\t\tparentCtx = iParentSpan.(*jaegerClient.Span).Context() // 获取SpanContext, 作为parentCtx\n\t\t\t}\n\t\t}\n\t\t\n\t\tif otgrpcOpts.inclusionFunc != nil &&\n\t\t\t!otgrpcOpts.inclusionFunc(parentCtx, method, req, resp) {\n\t\t\treturn invoker(ctx, method, req, resp, cc, opts...)\n\t\t}\n\t\tclientSpan := tracer.StartSpan(\n\t\t\tmethod,\n\t\t\topentracing.ChildOf(parentCtx),\n\t\t\text.SpanKindRPCClient,\n\t\t\tgRPCComponentTag,\n\t\t)\n\t\tdefer clientSpan.Finish()\n\t\tctx = injectSpanContext(ctx, tracer, clientSpan)\n\t\tif otgrpcOpts.logPayloads {\n\t\t\tclientSpan.LogFields(log.Object("gRPC request", req))\n\t\t}\n\t\terr = invoker(ctx, method, req, resp, cc, opts...)\n\t\tif err == nil {\n\t\t\tif otgrpcOpts.logPayloads {\n\t\t\t\tclientSpan.LogFields(log.Object("gRPC response", resp))\n\t\t\t}\n\t\t} else {\n\t\t\tSetSpanTags(clientSpan, err, true)\n\t\t\tclientSpan.LogFields(log.String("event", "error"), log.String("message", err.Error()))\n\t\t}\n\t\tif otgrpcOpts.decorator != nil {\n\t\t\totgrpcOpts.decorator(clientSpan, method, req, resp, err)\n\t\t}\n\t\treturn err\n\t}\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br")])]),e("h2",{attrs:{id:"二-user-srv端-集成-jaeger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-user-srv端-集成-jaeger"}},[s._v("#")]),s._v(" 二：user-srv端 集成 jaeger")]),s._v(" "),e("h3",{attrs:{id:"一-在server-py文件中-先创建拦截器再将拦截器注册到server中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-在server-py文件中-先创建拦截器再将拦截器注册到server中"}},[s._v("#")]),s._v(" (一)：在server.py文件中，先创建拦截器再将拦截器注册到server中")]),s._v(" "),e("ul",[e("li",[s._v("创建拦截器再将拦截器注册到server中")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("from concurrent import futures\nimport grpc\nfrom loguru import logger\nimport signal\nimport sys\nimport os\nimport argparse\nimport socket\nimport uuid\nfrom functools import partial\n\nfrom grpc_opentracing import open_tracing_server_interceptor\nfrom jaeger_client import Config\nfrom grpc_opentracing.grpcext import intercept_server\n\n# 添加Python环境搜索路径\nSERVER_PATH = os.path.abspath(__file__)\nPROJECT_DIR = os.path.dirname(os.path.dirname(SERVER_PATH))\nsys.path.insert(0, PROJECT_DIR)\n\n# 引入用户服务的handler\nfrom user_srv.proto import user_pb2_grpc\nfrom user_srv.handlers.user import UserService\n\n# 引入监控接口的handler\nfrom common.grpc_health.v1 import health_pb2_grpc\nfrom common.grpc_health.v1.health import HealthServicer\nfrom common.register.register_consul import ConsulRegister\nfrom user_srv.settings import setting\n\n\ndef on_exit(signo, frame, service_id):\n    register = ConsulRegister(setting.CONSUL_HOST, setting.CONSUL_PORT)\n    logger.info(\"注销 {} 服务\".format(service_id))\n    register.deregister(service_id=service_id)\n    setting.client.remove_config_watcher(setting.NACOS[\"DataId\"], setting.NACOS[\"Group\"], setting.update_cfg)\n    logger.info(\"注销成功\")\n    sys.exit(0)\n\n# 获取当前主机的一个随机的端口地址\ndef get_free_tcp_port():\n    tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    tcp.bind((\"\", 0))\n    _, port = tcp.getsockname()\n    tcp.close()\n    return port\n\ndef serve():\n    # 配置jaeger\n    config = Config(\n        config={\n            'sampler': {\n                'type': 'const',  # 全部\n                'param': 1,  # 1 开启全部采样 0 表示关闭全部采样\n            },\n            'local_agent': {\n                'reporting_host': '192.168.100.203',\n                'reporting_port': '6831',\n            },\n            'logging': True,\n        },\n        service_name='user-srv',\n        validate=True,\n    )\n    # 创建 tracer\n    tracer = config.initialize_tracer()\n    parser = argparse.ArgumentParser()\n    parser.add_argument('--ip', nargs='?', type=str, default=setting.SERVICE_IP, help='Binding IP ADDR')\n    parser.add_argument('--port', nargs='?', type=int, default=0, help='Binding PORT')\n    args = parser.parse_args()\n    if args.port == 0:\n        port = get_free_tcp_port() # 获取随机端口\n    else:\n        port = args.port\n\n    if not args.ip or not args.port:\n        logger.info(\"Server Default Binding {}:{}\".format(setting.SERVICE_IP, port))\n    else:\n        logger.info(\"Server Binding {}:{}\".format(args.ip, port))\n\n    logger.add(\"logs/user_srv_{time}.log\")\n    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))\n    # 创建tracer拦截器\n    tracing_interceptor = open_tracing_server_interceptor(tracer)\n    # 将拦截器绑定到server端\n    server = intercept_server(server, tracing_interceptor)\n\n    # 注册用户服务的handler\n    user_pb2_grpc.add_UserServicer_to_server(UserService(), server)\n    # 注册健康检查的handler\n    health_pb2_grpc.add_HealthServicer_to_server(HealthServicer(), server)\n\n    server.add_insecure_port('{}:{}'.format(args.ip, port))\n\n    # 主进程退出信号处理\n    service_id = str(uuid.uuid1())\n    signal.signal(signal.SIGINT, partial(on_exit, service_id=service_id))\n    signal.signal(signal.SIGTERM, partial(on_exit, service_id=service_id))\n    server.start()\n\n    logger.info(f\"user-srv服务注册开始\")\n\n    register = ConsulRegister(setting.CONSUL_HOST, setting.CONSUL_PORT)\n\t\n    # 注册访问\n    if not register.register(name=setting.SERVICE_NAME,\n                             id=service_id,\n                             address=args.ip,\n                             port=port,\n                             tags=setting.SERVICE_TAGS,\n                             check=None):\n\n        logger.info(f\"服务注册失败, 停止服务\")\n        sys.exit(0)\n\n    logger.info(f\"user-srv服务注册成功\")\n\n    server.wait_for_termination()\n\n\nif __name__ == '__main__':\n    # 监听nacos配置的修改\n    setting.client.add_config_watcher(setting.NACOS[\"DataId\"], setting.NACOS[\"Group\"], setting.update_cfg)\n    serve()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br"),e("span",{staticClass:"line-number"},[s._v("118")]),e("br"),e("span",{staticClass:"line-number"},[s._v("119")]),e("br"),e("span",{staticClass:"line-number"},[s._v("120")]),e("br"),e("span",{staticClass:"line-number"},[s._v("121")]),e("br"),e("span",{staticClass:"line-number"},[s._v("122")]),e("br"),e("span",{staticClass:"line-number"},[s._v("123")]),e("br"),e("span",{staticClass:"line-number"},[s._v("124")]),e("br")])]),e("h3",{attrs:{id:"二-在all-service-user-srv-handlers-user-py文件中-获取到拦截器中的active-span对象-计算数据库执行时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-在all-service-user-srv-handlers-user-py文件中-获取到拦截器中的active-span对象-计算数据库执行时间"}},[s._v("#")]),s._v(" (二)：在all-service/user_srv/handlers/user.py文件中，获取到拦截器中的active span对象，计算数据库执行时间")]),s._v(" "),e("ul",[e("li",[s._v("创建tracer对象，基于with语句获取active span")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('def GetUserList(self, request: user_pb2.PageInfo, context):\n    """用户列表\n    """\n    print("用户列表")\n    # 创建一个新的tracer\n    tracer = opentracing.global_tracer()\n    # 获取拦截器中的父span\n    with tracer.start_span(\'GetUserList\', child_of=context.get_active_span()) as get_user_list_span:\n\n        resp = user_pb2.UserListResponse()\n\n        # 判断是否传递了分页数据，如果没有直接使用默认值\n        pSize = 10    # 一页多少条数据\n        start = 0     # 多少页\n        all_users = User.select()\n        resp.total = all_users.count()\n        if request.pn and request.pSize:\n            pSize = request.pSize\n            start = (request.pn - 1) * pSize\n\n        # 获取分页后的数据, 在peewee中，直接可以通过User这个model操作数据表\n        users = all_users.limit(pSize).offset(start)\n        # resp.total = users.count()\n\n        # 将分页后的数据，赋值给message返回\n        for user in users:\n            resp.data.append(self.convert_user_to_user_info_resp(user))\n\n    return resp\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("h3",{attrs:{id:"三-此时访问用户列表-效果如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-此时访问用户列表-效果如下"}},[s._v("#")]),s._v(" (三)：此时访问用户列表，效果如下")]),s._v(" "),e("p",[e("img",{attrs:{src:t(604),alt:"Alt text"}})])])}),[],!1,null,null,null);n.default=a.exports},604:function(s,n,t){s.exports=t.p+"assets/img/2021-07-129.54.27.b836139d.png"}}]);