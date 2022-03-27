(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{2344:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一-python-解释器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-python-解释器"}},[s._v("#")]),s._v(" 一：Python 解释器")]),s._v(" "),n("h3",{attrs:{id:"python版本详细介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python版本详细介绍"}},[s._v("#")]),s._v(" Python版本详细介绍")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("默认的主流操作系统目前都是Python 2.7版本")])]),s._v(" "),n("li",[n("p",[s._v("可以在Python的官网下载且安装Python的其他版本, Python官网：https://www.python.org/")])])]),s._v(" "),n("h3",{attrs:{id:"mac系统搭建python虚拟环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mac系统搭建python虚拟环境"}},[s._v("#")]),s._v(" Mac系统搭建Python虚拟环境")]),s._v(" "),n("ul",[n("li",[s._v("安装Homebrew")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1：使用Mac自带的ruby脚本解释器，执行安装homebrew的脚本")]),s._v("\n/usr/bin/ruby -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2：Homebrew 会将软件包安装到独立目录，并将其文件软链接至 /usr/local ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("将Homebrew的源更换为华中科技大学的源（华中科技大学的源和清华大学的源任选其一）")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1：替换brew.git:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --repo"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://mirrors.ustc.edu.cn/brew.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2：替换homebrew-core.git:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --repo"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/Library/Taps/homebrew/homebrew-core"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git\nbrew update\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("如果不想使用国内源，可以再次切换到官方的源")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1：重置brew.git:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --repo"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://github.com/Homebrew/brew.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2：重置homebrew-core.git:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --repo"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/Library/Taps/homebrew/homebrew-core"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin https://github.com/Homebrew/homebrew-core.git\nbrew update\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("brew 安装 pyenv")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1：更新brew")]),s._v("\nbrew update\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2：使用brew安装pyenv")]),s._v("\nbrew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pyenv\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("下载 pyenv-installer 并执行，安装需要的 pyenv 插件，包括 virtualenv")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("配置环境变量，在~/.bash_profile里面添加如下代码")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.pyenv/bin:'),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pyenv init -"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pyenv virtualenv-init -"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("让内核重读配置文件，使环境变量生效")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.bash_profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("通过pyenv安装需要的Python版本")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pyenv "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".10\npyenv "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3\npyenv "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),s._v(".3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("创建 virtualenv 虚拟环境")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pyenv virtualenv "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".10 xkd2.7.10\npyenv virtualenv "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3 xkd3.5.3\npyenv virtualenv "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),s._v(".3 xkd3.6.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("在用户的家目录下，创建两个目录")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/xkd_2.7.10\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/xkd_3.6.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("将不同的Python版本应用到对应的目录上, 使得不同目录对不同的Python版本相互隔离")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射2.7.10版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/xkd_2.7.10\npyenv "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" xkd2.7.10\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射3.6.3版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" xkd_3.6.3\npyenv "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" xkd_3.6.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"centos系统搭建python虚拟环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos系统搭建python虚拟环境"}},[s._v("#")]),s._v(" Centos系统搭建Python虚拟环境")]),s._v(" "),n("ul",[n("li",[s._v("安装pyenv的依赖包")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gcc "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" patch gdbm-devel openssl-devel sqlite-devel readline-devel zlib-devel bzip2-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("通过pyenv installer 安装 pyenv")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("配置环境变量，在~/.bash_profile里面添加如下代码")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.pyenv/bin:'),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pyenv init -"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pyenv virtualenv-init -"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("让内核重读配置文件，使环境变量生效")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.bash_profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("pyenv命令介绍")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ pyenv --help\nUsage: pyenv "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nSome useful pyenv commands are:\n   commands    List all available pyenv commands\n   "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("       设置当前目录的Python版本，例如：新建一个目录，在新建目录中执行 pyenv "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3，那么在这个新建目录里面就是3.5.3版本，切换到其他目录，自动变为系统的Python版本\n   global      设置系统当前的Python版本，最好不要修改。例如：pyenv global "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3\n   shell       设置当前登入shell的一个Python版本，当前shell断开，设置失效,例如：pyenv shell "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("     安装Python的哪个版本，也可以查看可以安装的Python版本，例如：pyenv "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -l\n   uninstall   卸载Python的哪个版本\n   rehash      Rehash pyenv shims "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("run this after installing executables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   version     此时系统正在使用的Python版本，python -V是查看当前Python版本号\n   versions    此时系统有哪些Python版本\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v("       Display the full path to an executable\n   whence      List all Python versions that contain the given executable\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("通过pyenv安装Python版本")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pyenv "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3\npyenv "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),s._v(".3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("通过pyenv查看所有的Python版本")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pyenv versions\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("通过pyenv卸载Python版本")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pyenv uninstall "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("创建 virtualenv 虚拟环境")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pyenv virtualenv "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(".10 xkd2.7.10\npyenv virtualenv "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v(".3 xkd3.5.3\npyenv virtualenv "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),s._v(".3 xkd3.6.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("在用户的家目录下，创建两个目录")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/xkd_2.7.10\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/xkd_3.6.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("将不同的Python版本应用到对应的目录上, 使得不同目录对不同的Python版本相互隔离")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射2.7.10版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/xkd_2.7.10\npyenv "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" xkd2.7.10\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射3.6.3版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" xkd_3.6.3\npyenv "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" xkd_3.6.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("当前目录解绑虚拟环境")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f .python-version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("卸载虚拟环境")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pyenv uninstall xkd2.7.10\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"pip-python-包管理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pip-python-包管理器"}},[s._v("#")]),s._v(" PIP Python 包管理器")]),s._v(" "),n("ul",[n("li",[s._v("pip 包管理器命令讲解")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7 blog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ pip --help\n\nUsage:   \n  pip "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nCommands:\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("                     下载且安装Python包，也可以从文件到安装包，例如：pip "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -r "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/blog/package.txt\n  download                    安装Python包\n  uninstall                   卸载Python包\n  freeze                      将项目中所依赖的包全部以指定格式备份出来，例如：pip freeze "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" package.txt ，那么在package.txt文件里面，就会有当前Python环境安装的所有的Python包，那么下次安装的时候，只需要读出文件里面的包，一键运行安装就ok\n  list                        列出已经安装的Python包\n  show                        显示Python的信息\n  check                       Verify installed packages have compatible dependencies.\n  search                      搜索指定的包\n  wheel                       Build wheels from your requirements.\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v("                        Compute hashes of package archives.\n  completion                  A helper "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" used "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" completion.\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("                        Show "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commands.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("pip 安装Python第三方包")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("pip "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ipython\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);