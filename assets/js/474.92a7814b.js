(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{2412:function(s,n,a){"use strict";a.r(n);var r=a(9),t=Object(r.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一-numpy中的索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-numpy中的索引"}},[s._v("#")]),s._v(" "),a("code",[s._v("(一)Numpy中的索引")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("获取均值为0，标准差为1的随机矩阵，元素个数是1000万个\nimport numpy as np\nX = np.random.normal(0, 1, size=10000000) \nX\n输出结果：\narray([0.03068342, 1.0423689 , 1.21944207, ..., 0.70763946, 0.79306525,\n       0.37821044])\n       \n矩阵中最小值是：-5.102540077165403\nnp.min(X)\n输出结果：\n-5.102540077165403\n\n最小值在矩阵中的索引为：3191047\nnp.argmin(X)\n输出结果：\n3191047\n\n最大值在矩阵中的索引为：3191047\nnp.argmax(X)\n输出结果：\n7306085\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"二-numpy中排序和使用索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-numpy中排序和使用索引"}},[s._v("#")]),s._v(" "),a("code",[s._v("(二)Numpy中排序和使用索引")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("生成16个元素的向量\nx = np.arange(16)\n\n# 乱序排列\nnp.random.shuffle(x)\nx\n输出结果：\narray([13, 15,  0,  1,  2,  5,  4,  6,  8, 11,  7, 10, 14,  9, 12,  3])\n\n返回一个排序好的\nnp.sort(x)\n输出结果：\narray([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15])\n\n原矩阵不变\nx\n输出结果：\narray([13, 15,  0,  1,  2,  5,  4,  6,  8, 11,  7, 10, 14,  9, 12,  3])\n\n就地修改排序\nx.sort()\nx\n输出结果：\narray([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15])\n\n生成一个随机的4x4的矩阵\nX = np.random.randint(10, size=(4,4))\nX\n输出结果：\narray([[7, 7, 7, 4],\n       [2, 5, 3, 6],\n       [5, 7, 7, 9],\n       [1, 2, 1, 9]])\n       \n将每一行进行排序\nnp.sort(X)\n输出结果：\narray([[4, 7, 7, 7],\n       [2, 3, 5, 6],\n       [5, 7, 7, 9],\n       [1, 1, 2, 9]])\n\n按照列进行排序，就是沿着X轴进行排序，那么每一列排序\nnp.sort(X, axis=0)\n输出结果：\narray([[1, 2, 1, 4],\n       [2, 5, 3, 6],\n       [5, 7, 7, 9],\n       [7, 7, 7, 9]])\n\n按照行进行排序，就是沿着Y轴进行排序，那么每一行排序\nnp.sort(X, axis=1)\n输出结果：\narray([[4, 7, 7, 7],\n       [2, 3, 5, 6],\n       [5, 7, 7, 9],\n       [1, 1, 2, 9]])\n\n乱序排列\nnp.random.shuffle(x)\nx\n输出结果：\narray([ 1, 10,  3, 12,  9,  7, 13,  6,  4, 14, 11,  2,  5,  8, 15,  0])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br")])]),a("h3",{attrs:{id:"三-numpy中使用索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-numpy中使用索引"}},[s._v("#")]),s._v(" "),a("code",[s._v("(三)Numpy中使用索引")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("排序之后的索引列表\nnp.argsort(x)\narray([15,  0, 11,  2,  8, 12,  7,  5, 13,  4,  1, 10,  3,  6,  9, 14])\n\n区分比6小的元素和比6大的元素\nnp.partition(x, 6)\narray([15,  0, 11,  2,  8, 12,  7,  5, 13,  4,  1, 10,  3,  6,  9, 14])\n\nnp.argpartition(x, 3)\narray([15,  0, 11,  2,  8,  5,  6,  1,  3,  9, 10,  4, 12, 13, 14,  7])\n\n排序之后，通过索引矩阵来描述排序之后的矩阵结果\nnp.argsort(X, axis=1)\narray([[3, 0, 1, 2],\n       [0, 2, 1, 3],\n       [0, 1, 2, 3],\n       [0, 2, 1, 3]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);