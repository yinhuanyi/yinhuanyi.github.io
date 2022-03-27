(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{2299:function(s,n,a){"use strict";a.r(n);var t=a(9),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"python实现文件名批量处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python实现文件名批量处理"}},[s._v("#")]),s._v(" Python实现文件名批量处理")]),s._v(" "),a("h3",{attrs:{id:"一-需求-将data目录下的以-txt结尾的文件改为不带后缀名称的文件名-file1-txt-file1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-需求-将data目录下的以-txt结尾的文件改为不带后缀名称的文件名-file1-txt-file1"}},[s._v("#")]),s._v(" （一）：需求：将data目录下的以.txt结尾的文件改为不带后缀名称的文件名(file1.txt --\x3e file1)")]),s._v(" "),a("ul",[a("li",[s._v("相关代码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import os\nPROJECT_DIR_PATH = os.path.dirname(os.path.abspath(os.path.abspath(__file__)))\nDIR_PATH = os.path.join(PROJECT_DIR_PATH, 'data')\n\n\nfiles = os.listdir(DIR_PATH)\n\ndef is_suffix_txt(suffix: str):\n    if suffix == 'txt':\n        return True\n    return True\n\n\nfor filename in files:\n    name, suffix = os.path.splitext(filename)\n\n\n    if is_suffix_txt(suffix):\n\n        new_name = os.path.join(DIR_PATH, name)\n        old_name = os.path.join(DIR_PATH, filename)\n        os.rename(old_name, new_name)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"二-需求-将data目录下的以-txt结尾的文件改为以-log结尾的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-需求-将data目录下的以-txt结尾的文件改为以-log结尾的文件"}},[s._v("#")]),s._v(" （二）：需求：将data目录下的以.txt结尾的文件改为以.log结尾的文件")]),s._v(" "),a("ul",[a("li",[s._v("相关代码")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import os\nPROJECT_DIR_PATH = os.path.dirname(os.path.abspath(os.path.abspath(__file__)))\nDIR_PATH = os.path.join(PROJECT_DIR_PATH, 'data')\n\n\nfiles = os.listdir(DIR_PATH)\n\ndef is_suffix_txt(suffix: str):\n    if suffix == '.txt':\n        return True\n    return False\n\n\nfor filename in files:\n    name, suffix = os.path.splitext(filename)\n\n    if is_suffix_txt(suffix):\n        new_name = os.path.join(DIR_PATH, name) + '.log'\n        old_name = os.path.join(DIR_PATH, filename)\n        os.rename(old_name, new_name)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);