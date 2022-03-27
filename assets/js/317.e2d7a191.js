(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{1814:function(s,n,a){s.exports=a.p+"assets/img/2018-08-3011.21.59.ab04ded9.png"},2709:function(s,n,a){"use strict";a.r(n);var t=a(9),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"一-本地测试是否可以运行djangoblog容器-正常被访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-本地测试是否可以运行djangoblog容器-正常被访问"}},[s._v("#")]),s._v(" （一）本地测试是否可以运行DjangoBlog容器，正常被访问")]),s._v(" "),t("ul",[t("li",[s._v("注册一个shell类型的runner, 或者确保有一个shell类型的runner可用")]),s._v(" "),t("li",[s._v("确保这个docker_runner1状态是绿色的\n"),t("img",{attrs:{src:a(1814),alt:"Alt text"}})]),s._v(" "),t("li",[s._v("首先在Gitlab-ci服务器创建pull 下来Python:3.5的docker镜像")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker pull python:3.5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("使用这个python:3.5构建一个新的镜像，取名为"),t("code",[s._v("registry.9xkd.com:5000/python3.5:2018-08-30")]),s._v(", Dockerfile如下")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('FROM python:3.5\n# 安装mysql客户端\nRUN apt-get update \\\n    && apt-get install -y --no-install-recommends \\\n        mysql-client \\\n    && rm -rf /var/lib/apt/lists/*\n# 换源\nRUN mkdir /root/.pip\nRUN echo "[global]\\ntimeout = 6000\\nindex-url = http://mirrors.aliyun.com/pypi/simple/\\ntrusted-host = mirrors.aliyun.com" ### /root/.pip/pip.conf\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("构建的命令如下")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('docker build -t registry.9xkd.com:5000/python3.5:`date +"%F"` .\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("编写构建Djangoblog镜像的Dockerfile文件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('FROM registry.9xkd.com:5000/python3.5:2018-08-30\n# 指定container的工作目录\nWORKDIR /app\n# 拷贝clone的所有文件到/app\nCOPY . ./\n# 安装依赖\nRUN pip install -Ur requirements.txt\nRUN python manage.py makemigrations\nRUN python manage.py migrate\nRUN python manage.py collectstatic --noinput\nRUN python manage.py compress --force\n\n\n# 对外暴露3000端口\nEXPOSE 3000\n# 运行Django\nCMD ["python", "manage.py", "runserver", "0.0.0.0:3000"]\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("ul",[t("li",[s._v("在Gitlab-CI服务器上先构建一个Django的镜像，运行，看看是否可以跑起来")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用Dockerfile构建容器")]),s._v("\ndocker build -t registry.9xkd.com:5000/xkd_course_django:"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%F_%H_%m"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用")]),s._v("\ndocker run -itd --name xkd_course_django -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":3000 registry.9xkd.com:5000/xkd_course_django:2018-08-30_10_14 \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it xkd_course_django /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("访问Gitlab-CI服务器上3000端口")])]),s._v(" "),t("h3",{attrs:{id:"二-在gitlab服务器上通过git-push部署django-blog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-在gitlab服务器上通过git-push部署django-blog"}},[s._v("#")]),s._v(" （二）在Gitlab服务器上通过Git push部署Django Blog")]),s._v(" "),t("ul",[t("li",[s._v("确保本地gitlab仓库中有Dockerfile文件")]),s._v(" "),t("li",[s._v("当"),t("code",[s._v("registry.9xkd.com:5000/python3.5")]),s._v("镜像在gitlab-ci服务器上准备好了之后，就可以编写.gitlab-ci.yml文件了")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('stages:\n  - test\n  - deploy\n\njob1:\n  stage: test\n  tags:\n    - xkd_course_runner1\n  script:\n    - echo "test success"\n\n\n\njob2:\n  stage: deploy\n  tags:\n    - xkd_course_runner1\n  script:\n    - docker build -t registry.9xkd.com:5000/xkd_course_django` .\n    - docker run -itd --name xkd_course_django -p 80:3000 registry.9xkd.com:5000/xkd_course_django\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("ul",[t("li",[s._v("将.gitlab-ci.yml文件添加到本地的gitlab仓库之后，就可以push到gitlab服务器上了")]),s._v(" "),t("li",[s._v("在gitlab-ci 服务器上校验容器是否启动成功，使用IP访问服务")])])])}),[],!1,null,null,null);n.default=e.exports}}]);