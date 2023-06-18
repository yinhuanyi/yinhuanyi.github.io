(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{2147:function(n,s,t){"use strict";t.r(s);var e=t(9),a=Object(e.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"一-grpc-重试机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-grpc-重试机制"}},[n._v("#")]),n._v(" 一：GRPC 重试机制")]),n._v(" "),t("h3",{attrs:{id:"一-go-grpc-middleware包的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-go-grpc-middleware包的使用"}},[n._v("#")]),n._v(" (一)：go-grpc-middleware包的使用")]),n._v(" "),t("ul",[t("li",[n._v("在客户端调用服务器端的"),t("code",[n._v("grpc")]),n._v("连接的时候，需要配置【重试机制】。下面是客户端重试")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('/**\n * @Author: Robby\n * @File name: client.go\n * @Create date: 2021-06-29\n * @Function:\n **/\n\npackage main\n\nimport (\n\t"all-server/test/test3/proto"\n\t"context"\n\t"fmt"\n\tgrpc_retry "github.com/grpc-ecosystem/go-grpc-middleware/retry"\n\t"google.golang.org/grpc"\n\t"google.golang.org/grpc/codes"\n\t"time"\n)\n\nfunc main() {\n\n\tinterceptor := func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {\n\t\tstart := time.Now()\n\t\terr := invoker(ctx, method, req, reply, cc, opts...)\n\t\tfmt.Printf("耗时: %s\\n", time.Since(start))\n\t\treturn err\n\t}\n\n\t// 重试的选项\n\tretryOpts := []grpc_retry.CallOption{\n\t\tgrpc_retry.WithMax(3),\n\t\tgrpc_retry.WithPerRetryTimeout(1 * time.Second),\n\t\tgrpc_retry.WithCodes(codes.NotFound, codes.Aborted, codes.Unavailable, codes.DeadlineExceeded),\n\t}\n\n\tvar opts []grpc.DialOption\n\topts = append(opts, grpc.WithInsecure())\n\topts = append(opts, grpc.WithUnaryInterceptor(interceptor))\n\t// 客户端启用一个重试拦截器\n\topts = append(opts, grpc.WithUnaryInterceptor(grpc_retry.UnaryClientInterceptor(retryOpts...)))\n\n\t// 1：连接服务器\n\tconn, err := grpc.Dial("127.0.0.1:8080", opts...)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer conn.Close()\n\n\t// 通过conn，创建client\n\tc := proto.NewGreeterClient(conn)\n\n\t// 2：调用服务器的方法\n\t/*\n\t\t重试机制需要解决的问题：\n\t\t\t1：这个请求应该多长时间超时\n\t\t\t2：这个重试需要重试几次\n\t\t\t3：当服务器返回什么状态码的时候重试\n\t*/\n\tr, err := c.SayHello(context.Background(),\n\t\t \t\t\t     &proto.HelloRequest{Name: "Robby"},\n\t\t\t\t\t\t //// 设置客户端的最大重试次数\n\t\t \t\t\t     //grpc_retry.WithMax(3),\n\t\t \t\t\t     //// 请求超时时间为1秒后，请求超时\n\t\t \t\t\t     //grpc_retry.WithPerRetryTimeout(1*time.Second),\n\t\t \t\t\t     //// 服务器端的grpc返回什么状态码的时候重试\n\t\t \t\t\t     //grpc_retry.WithCodes(codes.Unknown, codes.DeadlineExceeded, codes.Unavailable),\n\t)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tfmt.Printf("%s", r.Message)\n\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br"),t("span",{staticClass:"line-number"},[n._v("57")]),t("br"),t("span",{staticClass:"line-number"},[n._v("58")]),t("br"),t("span",{staticClass:"line-number"},[n._v("59")]),t("br"),t("span",{staticClass:"line-number"},[n._v("60")]),t("br"),t("span",{staticClass:"line-number"},[n._v("61")]),t("br"),t("span",{staticClass:"line-number"},[n._v("62")]),t("br"),t("span",{staticClass:"line-number"},[n._v("63")]),t("br"),t("span",{staticClass:"line-number"},[n._v("64")]),t("br"),t("span",{staticClass:"line-number"},[n._v("65")]),t("br"),t("span",{staticClass:"line-number"},[n._v("66")]),t("br"),t("span",{staticClass:"line-number"},[n._v("67")]),t("br"),t("span",{staticClass:"line-number"},[n._v("68")]),t("br"),t("span",{staticClass:"line-number"},[n._v("69")]),t("br"),t("span",{staticClass:"line-number"},[n._v("70")]),t("br"),t("span",{staticClass:"line-number"},[n._v("71")]),t("br"),t("span",{staticClass:"line-number"},[n._v("72")]),t("br"),t("span",{staticClass:"line-number"},[n._v("73")]),t("br"),t("span",{staticClass:"line-number"},[n._v("74")]),t("br")])]),t("h3",{attrs:{id:"二-python中grpc的重试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-python中grpc的重试"}},[n._v("#")]),n._v(" (二)：Python中grpc的重试")]),n._v(" "),t("ul",[t("li",[n._v("RetryInterceptor源码(这个源码好像有问题)")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('# coding: utf-8\n"""\n"""\n\nfrom grpc import StatusCode, RpcError, UnaryUnaryClientInterceptor, UnaryStreamClientInterceptor\nimport time\nimport random\n\n\nclass RetryInterceptor(UnaryUnaryClientInterceptor, UnaryStreamClientInterceptor):\n\n    def __init__(self, max_retries=3, retry_codes=None, retry_timeout_ms=100, retry_jitter_ms=20):\n        if retry_codes is None:\n            retry_codes = [StatusCode.UNAVAILABLE, StatusCode.DEADLINE_EXCEEDED]\n        self.max_retries = max_retries\n        self.retry_codes = retry_codes\n        self.retry_timeout_ms = retry_timeout_ms\n        self.retry_jitter_ms = retry_jitter_ms\n\n        if self.retry_jitter_ms > self.retry_timeout_ms:\n            raise ValueError(\'retry_jitter_ms cannot be greater than retry_timeout_ms\')\n\n    def _next_retry_timeout_seconds(self):\n        ms_timeout = self.retry_timeout_ms + (random.randint(-1, 1) * self.retry_jitter_ms)\n        s_timeout = ms_timeout / 1000\n        return s_timeout\n\n    def intercept_unary_unary(self, continuation, client_call_details, request):\n        retry_count = 0\n        while True:\n            try:\n                response = continuation(client_call_details, request)\n                return response\n            except RpcError as e:\n                if e.code() not in self.retry_codes:\n                    raise e\n                if retry_count >= self.max_retries:\n                    raise e\n                retry_count += 1\n                time.sleep(self._next_retry_timeout_seconds())\n\n    def intercept_unary_stream(self, continuation, client_call_details, request):\n\n        def intercept(continuation, client_call_details, request):\n\n            def iterator_wrapper(gen):\n\n                retry_count = 0\n                has_started = False\n                while True:\n                    try:\n                        val = next(gen)\n                        has_started = True\n                        yield val\n                    except RpcError as e:\n                        if has_started:\n                            raise e\n                        if e.code() not in self.retry_codes:\n                            raise e\n                        if retry_count >= self.max_retries:\n                            raise e\n\n                        retry_count += 1\n                        timeout = self._next_retry_timeout_seconds()\n                        time.sleep(timeout)\n\n                        gen = continuation(client_call_details, request)\n                    except StopIteration:\n                        return\n\n            return iterator_wrapper(continuation(client_call_details, request))\n\n        return intercept(continuation, client_call_details, request)\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br"),t("span",{staticClass:"line-number"},[n._v("39")]),t("br"),t("span",{staticClass:"line-number"},[n._v("40")]),t("br"),t("span",{staticClass:"line-number"},[n._v("41")]),t("br"),t("span",{staticClass:"line-number"},[n._v("42")]),t("br"),t("span",{staticClass:"line-number"},[n._v("43")]),t("br"),t("span",{staticClass:"line-number"},[n._v("44")]),t("br"),t("span",{staticClass:"line-number"},[n._v("45")]),t("br"),t("span",{staticClass:"line-number"},[n._v("46")]),t("br"),t("span",{staticClass:"line-number"},[n._v("47")]),t("br"),t("span",{staticClass:"line-number"},[n._v("48")]),t("br"),t("span",{staticClass:"line-number"},[n._v("49")]),t("br"),t("span",{staticClass:"line-number"},[n._v("50")]),t("br"),t("span",{staticClass:"line-number"},[n._v("51")]),t("br"),t("span",{staticClass:"line-number"},[n._v("52")]),t("br"),t("span",{staticClass:"line-number"},[n._v("53")]),t("br"),t("span",{staticClass:"line-number"},[n._v("54")]),t("br"),t("span",{staticClass:"line-number"},[n._v("55")]),t("br"),t("span",{staticClass:"line-number"},[n._v("56")]),t("br"),t("span",{staticClass:"line-number"},[n._v("57")]),t("br"),t("span",{staticClass:"line-number"},[n._v("58")]),t("br"),t("span",{staticClass:"line-number"},[n._v("59")]),t("br"),t("span",{staticClass:"line-number"},[n._v("60")]),t("br"),t("span",{staticClass:"line-number"},[n._v("61")]),t("br"),t("span",{staticClass:"line-number"},[n._v("62")]),t("br"),t("span",{staticClass:"line-number"},[n._v("63")]),t("br"),t("span",{staticClass:"line-number"},[n._v("64")]),t("br"),t("span",{staticClass:"line-number"},[n._v("65")]),t("br"),t("span",{staticClass:"line-number"},[n._v("66")]),t("br"),t("span",{staticClass:"line-number"},[n._v("67")]),t("br"),t("span",{staticClass:"line-number"},[n._v("68")]),t("br"),t("span",{staticClass:"line-number"},[n._v("69")]),t("br"),t("span",{staticClass:"line-number"},[n._v("70")]),t("br"),t("span",{staticClass:"line-number"},[n._v("71")]),t("br"),t("span",{staticClass:"line-number"},[n._v("72")]),t("br"),t("span",{staticClass:"line-number"},[n._v("73")]),t("br")])]),t("ul",[t("li",[n._v("client调用的时候是这样的")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import grpc\nfrom test.proto import helloworld_pb2, helloworld_pb2_grpc\nfrom datetime import datetime\n\n\nclass MyInterceptro(grpc.UnaryUnaryClientInterceptor):\n\n    def intercept_unary_unary(self, continuation, client_call_details, request):\n        start_time = datetime.now()\n        rsp = continuation(client_call_details, request)\n        print('耗时：{}ms'.format((datetime.now()-start_time).total_seconds() * 1000))\n        return rsp\n\n\n\nif __name__ == '__main__':\n\n    from common.grpc_interceptor.retry import RetryInterceptor\n\n    retry_codes = [grpc.StatusCode.UNAVAILABLE,\n                   grpc.StatusCode.DEADLINE_EXCEEDED,\n                   grpc.StatusCode.UNKNOWN]\n\n    # 创建一个拦截器\n    retry_interceptor = RetryInterceptor(retry_codes=retry_codes)\n\n\n    with grpc.insecure_channel(\"localhost:18080\") as channel:\n        # 添加拦截器\n        interceptor_channel = grpc.intercept_channel(channel, MyInterceptro(), retry_interceptor)\n        stub = helloworld_pb2_grpc.GreeterStub(interceptor_channel)\n\n        hello_request = helloworld_pb2.HelloRequest()\n        hello_request.name = \"Robby\"\n\n        resp = stub.SayHello(hello_request)\n\n        print(resp.message)\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br"),t("span",{staticClass:"line-number"},[n._v("28")]),t("br"),t("span",{staticClass:"line-number"},[n._v("29")]),t("br"),t("span",{staticClass:"line-number"},[n._v("30")]),t("br"),t("span",{staticClass:"line-number"},[n._v("31")]),t("br"),t("span",{staticClass:"line-number"},[n._v("32")]),t("br"),t("span",{staticClass:"line-number"},[n._v("33")]),t("br"),t("span",{staticClass:"line-number"},[n._v("34")]),t("br"),t("span",{staticClass:"line-number"},[n._v("35")]),t("br"),t("span",{staticClass:"line-number"},[n._v("36")]),t("br"),t("span",{staticClass:"line-number"},[n._v("37")]),t("br"),t("span",{staticClass:"line-number"},[n._v("38")]),t("br")])]),t("h2",{attrs:{id:"二-如何让接口具有幂等性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-如何让接口具有幂等性"}},[n._v("#")]),n._v(" 二：如何让接口具有幂等性")]),n._v(" "),t("h3",{attrs:{id:"一-技术方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-技术方案"}},[n._v("#")]),n._v(" (一)：技术方案")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1：查询操作：查询一次和查询多次，在数据不变的情况下，查询结果是一样的。select是天然的幂等操作；\n\n2：删除操作：删除操作也是幂等的，删除一次和多次删除都是把数据删除。(注意可能返回结果不一样，删除的数据不存在，返回0，删除的数据多条，返回结果多个) ；\n\n3：唯一索引，防止新增脏数据。比如：支付宝的资金账户，支付宝也有用户账户，每个用户只能有一个资金账户，怎么防止给用户创建资金账户多个，那么给资金账户表中的用户ID加唯一索引，所以一个用户新增成功一个资金账户记录。要点：唯一索引或唯一组合索引来防止新增数据存在脏数据（当表存在唯一索引，并发时新增报错时，再查询一次就可以了，数据应该已经存在了，返回结果即可）；\n\n4：token机制，防止页面重复提交。业务要求： 页面的数据只能被点击提交一次；发生原因： 由于重复点击或者网络重发，或者nginx重发等情况会导致数据被重复提交；解决办法： 集群环境采用token加redis(redis单线程的，处理需要排队)；单JVM环境：采用token加redis或token加jvm内存。处理流程：1. 数据提交前要向服务的申请token，token放到redis或jvm内存，token有效时间；2. 提交后后台校验token，同时删除token，生成新的token返回。token特点：要申请，一次有效性，可以限流。注意：redis要用删除操作来判断token，删除成功代表token校验通过，如果用select+delete来校验token，存在并发问题，不建议使用；\n\n5：悲观锁——获取数据的时候加锁获取。select * from table_xxx where id='xxx' for update; 注意：id字段一定是主键或者唯一索引，不然是锁表，会死人的悲观锁使用时一般伴随事务一起使用，数据锁定时间可能会很长，根据实际情况选用； \n\n6：乐观锁——乐观锁只是在更新数据那一刻锁表，其他时间不锁表，所以相对于悲观锁，效率更高。乐观锁的实现方式多种多样可以通过version或者其他状态条件：1. 通过版本号实现update table_xxx set name=#name#,version=version+1 where version=#version#如下图(来自网上)；2. 通过条件限制 update table_xxx set avai_amount=avai_amount-#subAmount# where avai_amount-#subAmount# >= 0要求：quality-#subQuality# >= ，这个情景适合不用版本号，只更新是做数据安全校验，适合库存模型，扣份额和回滚份额，性能更高；\n\n7：分布式锁——还是拿插入数据的例子，如果是分布是系统，构建全局唯一索引比较困难，例如唯一性的字段没法确定，这时候可以引入分布式锁，通过第三方的系统(redis或zookeeper)，在业务系统插入数据或者更新数据，获取分布式锁，然后做操作，之后释放锁，这样其实是把多线程并发的锁的思路，引入多多个系统，也就是分布式系统中得解决思路。要点：某个长流程处理过程要求不能并发执行，可以在流程执行之前根据某个标志(用户ID+后缀等)获取分布式锁，其他流程执行时获取锁就会失败，也就是同一时间该流程只能有一个能执行成功，执行完成后，释放分布式锁(分布式锁要第三方系统提供)；\n\n8： select + insert——并发不高的后台系统，或者一些任务JOB，为了支持幂等，支持重复执行，简单的处理方法是，先查询下一些关键数据，判断是否已经执行过，在进行业务处理，就可以了。注意：核心高并发流程不要用这种方法；\n\n9： 状态机幂等——在设计单据相关的业务，或者是任务相关的业务，肯定会涉及到状态机(状态变更图)，就是业务单据上面有个状态，状态在不同的情况下会发生变更，一般情况下存在有限状态机，这时候，如果状态机已经处于下一个状态，这时候来了一个上一个状态的变更，理论上是不能够变更的，这样的话，保证了有限状态机的幂等。注意：订单等单据类业务，存在很长的状态流转，一定要深刻理解状态机，对业务系统设计能力提高有很大帮助 \n\n10： 对外提供接口的api如何保证幂等。如银联提供的付款接口：需要接入商户提交付款请求时附带：source来源，seq序列号 \nsource+seq在数据库里面做唯一索引，防止多次付款(并发时，只能处理一个请求) 。重点：对外提供接口为了支持幂等调用，接口有两个字段必须传，一个是来源source，一个是来源方序列号seq，这个两个字段在提供方系统里面做联合唯一索引，这样当第三方调用时，先在本方系统里面查询一下，是否已经处理过，返回相应处理结果；没有处理过，进行相应处理，返回结果。注意，为了幂等友好，一定要先查询一下，是否处理过该笔业务，不查询直接插入业务系统，会报错，但实际已经处理了。 \n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);