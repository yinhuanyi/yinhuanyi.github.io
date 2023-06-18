(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1841:function(s,n,a){s.exports=a.p+"assets/img/2019-09-157.33.28.d4c8e7ff.png"},1842:function(s,n,a){s.exports=a.p+"assets/img/2019-09-1612.13.43.9aa578a8.png"},1843:function(s,n,a){s.exports=a.p+"assets/img/2019-09-1612.42.20.b2192056.png"},2725:function(s,n,a){"use strict";a.r(n);var e=a(9),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-service概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-service概述"}},[s._v("#")]),s._v(" 一：Service概述")]),s._v(" "),e("ul",[e("li",[s._v("Service类型")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1: ClusterIP\n\t通过集群内部IP地址暴露服务，此地址仅在集群内部可达，而无法被集群外部的客户端访问\n\n2: NodePort\n\t这种类型建立在ClusterIP之上，其在每个节点的IP地址的某静态端口暴露服务，因此，它依然会为service分配集群IP地址，并将此作为NodePort的路由目标\n\t请求调度路径为：client -### NodeIP:NodePort -> ServiceIp:ServicePort -> PodIP:PodPort\n\t\n3: LoadBalance\n\t这种类型建构在NodePort之上，其通过cloud provider提供的负载均衡器将服务暴露到集群外部，因此LoadBalancer一样具有NodePort和ClusterIP\n\t\n4: ExternalName\n\t其通过将service映射至由externalName字段的内容指定的主机名来暴露服务，此主机名需要被dns服务解析至cname类型的记录。此种类型并非定义由k8s集群提供的服务，而是把集群外部的某服务以dns cname记录的方式映射到集群内，从而让集群内的pod资源能够访问外部的service的一种实现方式\n\n5：No ClusterIP: Headless Service\n\tservice基于kube-dns使用名称做解析，解析的IP为端口的pod的IP\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"二-ingress和ingress-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-ingress和ingress-controller"}},[s._v("#")]),s._v(" 二：Ingress和Ingress Controller")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1841),alt:"Alt text"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\t首先流量由外部的负载均衡器externalLB将请求调度到一个NodePort定义的service上，然后service再将请求调度到内部的一个pod叫IngressController中，IngressController根据Ingress中的虚拟主机或URL的定义，将请求调度到后端的一组pod之上，每一组pod是基于service进行分组的，Ingress会将service中的分组同步到自身的定义中\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("在k8s中创建namespace的方法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建\nkubectl create namespace dev \n\n# 查看\nkubectl get ns\n\n# 删除\nkubectl delete ns/dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[s._v("从ingress-nginx项目中，下载下面几个yaml文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建ingress-nginx\nmkdir ingress-nginx\ncd ingress-nginx\n\n# 从github上下载文件, 其实只需要下载mandatory.yaml这一个文件就好了，其他的yaml文件内容在这个文件中都有\nwget https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/configmap.yaml\nwget https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml\nwget https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/namespace.yaml\nwget https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/rbac.yaml\nwget https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/with-rbac.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("ul",[e("li",[s._v("基于这几个yaml文件创建nginx-ingress-controller资源")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 基于下载的yaml文件创建pod资源\nkubectl apply -f ./\n\n# 查看在ingress-nginx名称空间下，查看pod资源, 如果使用-n指定名称空间，默认的名称空间是default\nkubectl get pods -n ingress-nginx\nNAME                                        READY   STATUS    RESTARTS   AGE\nnginx-ingress-controller-79f6884cf6-qqj99   1/1     Running   0          25m\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[s._v("编写ingress的后端调度的service yaml文件，创建一个ingress的后端调度service，这个service接收ingress的调度请求，且service后端还有一组deployment的pod, 文件名为ingress-backend.yaml")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  selector:\n    app: myapp\n    release: canary\n  ports:\n  - name: http\n    port: 80\n    targetPort: 80\n---\napiVersion: apps/v1\n# 类型是Deployment\nkind: Deployment\nmetadata:\n  name: myapp-deploy\n  namespace: default\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: myapp\n      release: canary\n  template:\n    metadata:\n      labels:\n        app: myapp\n        release: canary\n    spec:\n      containers:\n      - name: myapp\n        image: ikubernetes/myapp:v2\n        ports:\n        - name: http\n          containerPort: 80\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])]),e("ul",[e("li",[s._v("将之前的myapp-deploy的pod资源停止，创建新的myapp service和myapp-deploy的pod")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl delete -f deploy-demo.yaml \n\n# 基于ingress-demo.yaml创建资源\nkubectl apply -f ingress-backend.yaml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("将github上的service-nodeport.yaml下载到本地， 作为ingress-controller的外网流量接入点")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 下载yaml\nwget https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/baremetal/service-nodeport.yaml\n\n# 修改vi service-nodeport.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: ingress-nginx\n  namespace: ingress-nginx\n  labels:\n    app.kubernetes.io/name: ingress-nginx\n    app.kubernetes.io/part-of: ingress-nginx\nspec:\n  type: NodePort\n  ports:\n    - name: http\n      port: 80\n      targetPort: 80\n      protocol: TCP\n      # 指定一个http的nodePort\n      nodePort: 30080\n    - name: https\n      port: 443\n      targetPort: 443\n      protocol: TCP\n      # 指定一个https的nodePort\n      nodePort: 30443\n  selector:\n    # 这个选择器会选择到ingressController这个pod, 因为ingressController的label就是name: ingress-nginx和part-of: ingress-nginx\n    app.kubernetes.io/name: ingress-nginx\n    app.kubernetes.io/part-of: ingress-nginx\n\n---\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("ul",[e("li",[s._v("再下载下来的ymal文件全部创建一次， 也可以创建nodePort这一个文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建，也可以直接指定service-nodeport.yaml文件创建\nkubectl apply -f ./\n\n# 查看这个ingress-nginx nodePort service\nkubectl get svc -n ingress-nginx\nNAME            TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE\ningress-nginx   NodePort   10.1.202.110   <none###        80:30080/TCP,443:30443/TCP   9m34s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[s._v("编写ingress的yaml文件， 文件名为：ingress-myapp.yaml")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: ingress-myapp\n  # 这个名称空间必须与deployment pod和service在同一名称空间中\n  namespace: default\n  annotations:\n    # kubernetes.io为前置，ingress.class键名, 这里是指定ingress按照nginx去生产调度规则\n    kubernetes.io/ingress.class: "nginx"\nspec:\n  # rules是定义规则，将什么调度请求转发到后端的哪个pod资源上\n  rules:\n  # 保证在集群外部，可以解析这个myapp.hut.com主机名，且解析的IP为nodeport的IP\n  - host: myapp.hut.com\n    # 基于http字段定义前后端的路径\n    http:\n      paths:\n      # 定义前端路径\n      - path:\n        # 定义后端路径\n        backend:\n          # 依据哪个service生产upstream地址后端pod队列， 可以使用 kubectl describe service myapp 查看myapp这个service的pod地址\n          serviceName: myapp\n          servicePort: 80\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("ul",[e("li",[s._v("基于ingress-myapp.yaml，创建ingress")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 创建ingress\nkubectl apply -f ingress-myapp.yaml\n\n# 查看ingress\nkubectl get ingress\nNAME            HOSTS           ADDRESS   PORTS   AGE\ningress-myapp   myapp.hut.com             80      18s\n\n# 查看ingress-myapp的详细信息\nkubectl describe  ingress ingress-myapp\nName:             ingress-myapp\nNamespace:        default\nAddress:          \nDefault backend:  default-http-backend:80 (<none>)\n# 这里是rules规则，Backends为myapp这个service，\nRules:\n  Host           Path  Backends\n  ----           ----  --------\n  myapp.hut.com        myapp:80 (10.244.3.17:80,10.244.4.28:80)\n\nAnnotations:\n  kubectl.kubernetes.io/last-applied-configuration:  {"apiVersion":"extensions/v1beta1","kind":"Ingress","metadata":{"annotations":{"kubernetes.io/ingress.class":"nginx"},"name":"ingress-myapp","namespace":"default"},"spec":{"rules":[{"host":"myapp.hut.com","http":{"paths":[{"backend":{"serviceName":"myapp","servicePort":80},"path":null}]}}]}}\n  kubernetes.io/ingress.class:  nginx\nEvents:\n  Type    Reason  Age   From                      Message\n  ----    ------  ----  ----                      -------\n  Normal  CREATE  82s   nginx-ingress-controller  Ingress default/ingress-myapp\n\n\n# 一旦Ingress创建完毕，那么这些规则将会注入到ingressController中，也就是直接生产nginx的配置文件\n# 查看nginx配置文件nginx.conf\nkubectl exec -n ingress-nginx  -it nginx-ingress-controller-79f6884cf6-qqj99 -- /bin/sh\ncat nginx.conf\n\n# 修改Mac笔记本的/etc/hosts文件，将myapp.hut.com解析到master\n\n# 那么在浏览器或Terminal上直接可以访问nodePort的service\ncurl http://myapp.hut.com:30080/\nHello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br")])]),e("ul",[e("li",[s._v("小结 ingress")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\t对于ingress配置过程中，首先需要创建一个nodePort的service，让这个service选择ingressController这个pod，然后再创建一个ingress，这个ingress中就需要指定调度的service和pod，最后pod响应请求。\n\t在ingress中规则指定好了，会同步到ingressController这个pod中，可以pod就是一个nginx容器，nginx的配置文件会依据ingress中指定的规则动态生成，会自动配置server和upsteam后端服务器的IP地址和调度的策略\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"三-创建一个tomcat的service和pod-让请求调度到这个tomcat的pod中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-创建一个tomcat的service和pod-让请求调度到这个tomcat的pod中"}},[s._v("#")]),s._v(" 三：创建一个Tomcat的service和pod，让请求调度到这个Tomcat的pod中")]),s._v(" "),e("ul",[e("li",[s._v("创建一个Tomcat的service和pod，名称为ingress-backend-tomcat.yaml")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: tomcat\n  namespace: default\nspec:\n  selector:\n    app: tomcat\n    release: canary\n  ports:\n  - name: http\n    # 容器使用8080，那么service也使用8080\n    port: 8080\n    targetPort: 8080\n  - name: ajp\n    # 容器使用8080，那么service也使用8080\n    port: 8009\n    targetPort: 8009\n---\napiVersion: apps/v1\n# 类型是Deployment\nkind: Deployment\nmetadata:\n  name: tomcat-deploy\n  namespace: default\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: tomcat\n      release: canary\n  template:\n    metadata:\n      labels:\n        app: tomcat\n        release: canary\n    spec:\n      containers:\n      - name: tomcat\n        image: registry.cn-hangzhou.aliyuncs.com/acs-sample/tomcat\n        ports:\n        - name: http\n          containerPort: 8080\n        - name: ajp\n          containerPort: 8009\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br")])]),e("ul",[e("li",[s._v("创建一个Tomcat的ingress(这里的ingress端口，默认的端口是80，指定了Tomcatservice的端口为8080)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('vi ingress-tomcat.yaml \napiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: ingress-tomcat\n  namespace: default\n  annotations:\n    kubernetes.io/ingress.class: "nginx"\nspec:\n  rules:\n  - host: tomcat.hut.com\n    http:\n      paths:\n      - path:\n        backend:\n          serviceName: tomcat\n          servicePort: 8080\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("ul",[e("li",[s._v("在worker1和worker2拖Tomcat镜像")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker pull registry.cn-hangzhou.aliyuncs.com/acs-sample/tomcat\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("基于yaml文件创建service和ingress")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 创建service\nkubectl apply -f ingress-backend-tomcat.yaml\n\n# 查看\n[root@master ingress]# kubectl get pods\nNAME                             READY   STATUS    RESTARTS   AGE\ntomcat-deploy-5d68b657bf-27lpt   1/1     Running   0          11s\ntomcat-deploy-5d68b657bf-dsgwn   1/1     Running   0          11s\n\nkubectl get services\nNAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)             AGE\ntomcat           ClusterIP   10.1.99.225    <none###        8080/TCP,8009/TCP   15s\n\n\n# 创建ingress\nkubectl apply -f ingress-tomcat.yaml \n\n# 查看ingress\nkubectl get ingress\nNAME             HOSTS            ADDRESS   PORTS   AGE\ningress-myapp    myapp.hut.com              80      57s\ningress-tomcat   tomcat.hut.com             80      7s\n\n\n# 查看ingress-tomcat调度规则\nkubectl describe ingress ingress-tomcat\nName:             ingress-tomcat\nNamespace:        default\nAddress:          \nDefault backend:  default-http-backend:80 (<none>)\nRules:\n  Host            Path  Backends\n  ----            ----  --------\n  tomcat.hut.com        tomcat:8080 (10.244.3.18:8080,10.244.4.29:8080)\nAnnotations:\n  kubectl.kubernetes.io/last-applied-configuration:  {"apiVersion":"extensions/v1beta1","kind":"Ingress","metadata":{"annotations":{"kubernetes.io/ingress.class":"nginx"},"name":"ingress-tomcat","namespace":"default"},"spec":{"rules":[{"host":"tomcat.hut.com","http":{"paths":[{"backend":{"serviceName":"tomcat","servicePort":8080},"path":null}]}}]}}\n\n  kubernetes.io/ingress.class:  nginx\nEvents:\n  Type    Reason  Age    From                      Message\n  ----    ------  ----   ----                      -------\n  Normal  CREATE  3m49s  nginx-ingress-controller  Ingress default/ingress-tomcat\n\n# 在Mac上/etc/hosts将tomcat.hut.com对应master主机\n\n# 请求nodePort这个service的30080端口\ncurl tomcat.hut.com  (返回tomcat欢迎页面)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1842),alt:"Alt text"}})]),s._v(" "),e("h2",{attrs:{id:"四-将tomcat的服务使用https访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-将tomcat的服务使用https访问"}},[s._v("#")]),s._v(" 四：将Tomcat的服务使用https访问")]),s._v(" "),e("ul",[e("li",[s._v("本地生成证书, 制作成k8s格式的secret")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 生成私钥和证书\nopenssl req -new -x509 -key tls.key -out tls.crt\n\nopenssl req -new -x509 -key tls.key -out tls.crt -subj /C=CN/ST=Beijing/L=Beijing/O=DevOps/CN=tomcat.hut.com\n\n# 基于生成私钥和证书，制作成k8s格式的secret， tomcat-ingress-secret是secret的名称\nkubectl create secret tls tomcat-ingress-secret --cert=tls.crt --key=tls.key\n\n\n# 查看secret\nkubectl describe secret tomcat-ingress-secret\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ul",[e("li",[s._v("创建ingress-tomcat-tls.yaml文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: ingress-tomcat-tls\n  namespace: default\n  annotations:\n    kubernetes.io/ingress.class: "nginx"\nspec:\n  # 指定tls配置\n  tls:\n  - hosts:\n      # 将tomcat.hut.com配置为tls\n    - tomcat.hut.com\n    secretName: tomcat-ingress-secret\n  rules:\n  - host: tomcat.hut.com\n    http:\n      paths:\n      - path:\n        backend:\n          serviceName: tomcat\n          servicePort: 8080\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("ul",[e("li",[s._v("创建tls的ingress")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 创建ingress\nkubectl apply -f ingress-tomcat-tls.yaml\n\n\n# 查看ingress\nkubectl get ingress\nNAME                 HOSTS            ADDRESS   PORTS     AGE\ningress-myapp        myapp.hut.com              80        34m\ningress-tomcat       tomcat.hut.com             80        33m\ningress-tomcat-tls   tomcat.hut.com             80, 443   12s\n\n# 查看ingress-tomcat-tls规则\nName:             ingress-tomcat-tls\nNamespace:        default\nAddress:          \nDefault backend:  default-http-backend:80 (<none>)\nTLS:\n  tomcat-ingress-secret terminates tomcat.hut.com\nRules:\n  Host            Path  Backends\n  ----            ----  --------\n  tomcat.hut.com        tomcat:8080 (10.244.3.18:8080,10.244.4.29:8080)\nAnnotations:\n  kubernetes.io/ingress.class:                       nginx\n  kubectl.kubernetes.io/last-applied-configuration:  {"apiVersion":"extensions/v1beta1","kind":"Ingress","metadata":{"annotations":{"kubernetes.io/ingress.class":"nginx"},"name":"ingress-tomcat-tls","namespace":"default"},"spec":{"rules":[{"host":"tomcat.hut.com","http":{"paths":[{"backend":{"serviceName":"tomcat","servicePort":8080},"path":null}]}}],"tls":[{"hosts":["tomcat.hut.com"],"secretName":"tomcat-ingress-secret"}]}}\n\nEvents:\n  Type    Reason  Age   From                      Message\n  ----    ------  ----  ----                      -------\n  Normal  CREATE  101s  nginx-ingress-controller  Ingress default/ingress-tomcat-tls\n\n# 此时的配置会立即同步到ingressController中\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br")])]),e("ul",[e("li",[s._v("使用https://tomcat.hut.com:30443/访问Tomcat服务")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1843),alt:"Alt text"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);