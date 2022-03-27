(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{2433:function(s,n,a){"use strict";a.r(n);var r=a(9),e=Object(r.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一-使用numpy创建数组和矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-使用numpy创建数组和矩阵"}},[s._v("#")]),s._v(" "),a("code",[s._v("(一)使用Numpy创建数组和矩阵")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("①：定义0向量，默认所有元素是浮点数\nimport numpy as np\nnp.zeros(10)\n输出结果: array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.]) 为0向量\n\n\nnp.zeros(10).dtype \ndtype('float64') # 默认是浮点数\n\n# 也可以指定元素为整数\nnp.zeros(10, dtype=int)\n输出结果：array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])\n\n②：创建一个3行5列的0矩阵\nnp.zeros(shape=(3, 5), dtype=int)\n输出结果：array([[0, 0, 0, 0, 0],\n\t\t       [0, 0, 0, 0, 0],\n\t\t       [0, 0, 0, 0, 0]])\n\n③：创建一个全部都是1的向量\nnp.ones(shape=10, dtype=int)\n输出结果：array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])\n\n④：创建一个全部都是1的3行5列的矩阵\nnp.ones(shape=(3,5), dtype=int)\n输出结果：array([[1, 1, 1, 1, 1],\n\t\t       [1, 1, 1, 1, 1],\n\t\t       [1, 1, 1, 1, 1]])\n\n⑤：创建一个固定数值的矩阵\nnp.full(shape=(3,5), fill_value=666)\n输出结果：array([[666, 666, 666, 666, 666],\n\t\t       [666, 666, 666, 666, 666],\n\t\t       [666, 666, 666, 666, 666]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h3",{attrs:{id:"二-使用numpy指定arange、linspace范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-使用numpy指定arange、linspace范围"}},[s._v("#")]),s._v(" "),a("code",[s._v("(二)使用Numpy指定arange、linspace范围")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("①：创建一个向量，符合步长为0.2\nnp.arange(0,1,0.2) \n输出结果：array([0. , 0.2, 0.4, 0.6, 0.8])\n\n②：从[0,20] 中，取11个数， 且步长为2\nnp.linspace(0, 20, 11)\n输出结果：array([ 0.,  2.,  4.,  6.,  8., 10., 12., 14., 16., 18., 20.])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"三-使用numpy的random方法-生成随机向量和矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-使用numpy的random方法-生成随机向量和矩阵"}},[s._v("#")]),s._v(" "),a("code",[s._v("(三)使用Numpy的random方法，生成随机向量和矩阵")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("①：从0-10取随机数，取10个元素，组成随机向量\nnp.random.randint(0, 10, size=10)\n输出结果：array([5, 1, 7, 7, 8, 1, 0, 6, 4, 0])\n\n②：从0-10取随机数，取10个元素，组成随机3行5列矩阵\nnp.random.randint(0, 10, size=(3,5))\n输出结果：\narray([[7, 0, 9, 1, 9],\n       [7, 3, 7, 9, 3],\n       [4, 3, 4, 2, 3]])\n\n③：生成0-1的浮点矩阵\nnp.random.random(size=(3,5))\n输出结果：\narray([[0.22989156, 0.97564793, 0.16438542, 0.60857111, 0.03824363],\n       [0.48981617, 0.98868886, 0.99062584, 0.42959734, 0.30264565],\n       [0.67446341, 0.32567993, 0.78619339, 0.13263172, 0.83406361]])\n\n④：生成符合正态分布的，均值为0，方差为1的随机数\nnp.random.normal()\n输出结果：0.6439308653126352\n\n⑤：生成符合正态分布的，均值为0，方差为1的随机矩阵\nnp.random.normal(0,1,(3,5))\n输出结果：\narray([[-0.84604185, -0.90686711,  0.06112086, -1.74069731, -0.79830912],\n       [-0.76396172, -0.47282335, -1.07277601,  1.27912384, -1.36151922],\n       [-1.07456902, -0.33996119,  0.8568066 ,  0.53047228,  1.43009474]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"四-使用numpy的reshape方法创建矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-使用numpy的reshape方法创建矩阵"}},[s._v("#")]),s._v(" "),a("code",[s._v("(四)使用Numpy的reshape方法创建矩阵")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("①：先创建一个一维向量，再创建一个二维矩阵\nx = np.arange(15).reshape(3,5)\nx\n输出结果:\narray([[ 0,  1,  2,  3,  4],\n       [ 5,  6,  7,  8,  9],\n       [10, 11, 12, 13, 14]])\n\n查看x是几维矩阵\nx.ndim\n输出结果：2\n\n查看每个维度中包含几个元素\nx.shape\n输出结果：(3, 5)\n\n查看一个有多少个元素\nx.size\n输出结果：15\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h3",{attrs:{id:"五-numpy元素的访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-numpy元素的访问"}},[s._v("#")]),s._v(" "),a("code",[s._v("(五)Numpy元素的访问")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("①：先创建一个一维向量，再创建一个二维矩阵\nx = np.arange(15).reshape(3,5)\nx\n输出结果:\narray([[ 0,  1,  2,  3,  4],\n       [ 5,  6,  7,  8,  9],\n       [10, 11, 12, 13, 14]])\n\n第一行的最后一个元素，不推荐这种方式访问numpy中的元素\nx[0][-1]\n输出结果：4\n\n访问第三行的第4个元素 ，这种方式访问numpy中的元素是推荐的，依然是以索引的方式访问\nx[2,3]\n输出结果：14\n\n访问前前2行，前3列的元素\nx[:2, :3]\n输出结果：\narray([[0, 1, 2],\n       [5, 6, 7]])\n\n访问前前2行，且步长为2的元素\nx[:2, ::2]\n输出结果：\narray([[0, 2, 4],\n       [5, 7, 9]])\n\n将矩阵进行反转，行和列都反向访问\nx[::-1, ::-1]\n输出结果：\narray([[14, 13, 12, 11, 10],\n       [ 9,  8,  7,  6,  5],\n       [ 4,  3,  2,  1,  0]])\n\n取二维矩阵中的第一行\nx[0, :]\n输出结果：array([0, 1, 2, 3, 4])\n\n取二维矩阵中的第一列\nx[:, 0]\n输出结果：array([ 0,  5, 10])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h3",{attrs:{id:"六-修改子矩阵的元素会改变原矩阵的元素-numpy使用引用的方式创建子矩阵-注意与python的切片进行区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-修改子矩阵的元素会改变原矩阵的元素-numpy使用引用的方式创建子矩阵-注意与python的切片进行区别"}},[s._v("#")]),s._v(" "),a("code",[s._v("(六)修改子矩阵的元素会改变原矩阵的元素(numpy使用引用的方式创建子矩阵)， 注意与Python的切片进行区别")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("创建矩阵\nx = np.arange(15).reshape(3,5)\nx\narray([[ 0,  1,  2,  3,  4],\n       [ 5,  6,  7,  8,  9],\n       [10, 11, 12, 13, 14]])\n\n获取子矩阵\nsubx = x[:2, :4]\nsubx\narray([[0, 1, 2, 3],\n       [5, 6, 7, 8]])\n\n将子矩阵一个元素重新赋值\nsubx[1,1] = 100 \nsubx\n\n父矩阵的元素也改变了\nx\n输出结果：\narray([[  0,   1,   2,   3,   4],\n       [  5, 100,   7,   8,   9],\n       [ 10,  11,  12,  13,  14]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"七-使用copy方法-对原矩阵进行复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-使用copy方法-对原矩阵进行复制"}},[s._v("#")]),s._v(" "),a("code",[s._v("(七)使用copy方法，对原矩阵进行复制")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("x = np.arange(15).reshape(3,5)\nx\n输出结果：\narray([[ 0,  1,  2,  3,  4],\n       [ 5,  6,  7,  8,  9],\n       [10, 11, 12, 13, 14]])\n\n拷贝的方式获取子矩阵\nsubx = x[:2, :4].copy()\nsubx\narray([[0, 1, 2, 3],\n       [5, 6, 7, 8]])\n\n将子矩阵一个元素重新赋值\nsubx[1,1] = 100  \nsubx\n\n源矩阵的值没有发生改变\narray([[ 0,  1,  2,  3,  4],\n       [ 5,  6,  7,  8,  9],\n       [10, 11, 12, 13, 14]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"八-numpy的reshape方法详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八-numpy的reshape方法详解"}},[s._v("#")]),s._v(" "),a("code",[s._v("(八)Numpy的reshape方法详解")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("创建一个一维向量\nx = np.arange(10) \nx\narray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])\n\n查看向量的元素个数\nx.shape\n(10,)\n\n查看向量的维度\nx.ndim\n1\n\n使用向量获取一个2行5列的矩阵\nA = x.reshape(2,5) \narray([[0, 1, 2, 3, 4],\n       [5, 6, 7, 8, 9]])\n       \n返回一个 1行10列的矩阵\nB = x.reshape(1,10) \narray([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]])\n\n创建一个10行1列的矩阵，-1表示向量有多少个元素补充多少个元素\nx.reshape(10, -1) \narray([[0],\n       [1],\n       [2],\n       [3],\n       [4],\n       [5],\n       [6],\n       [7],\n       [8],\n       [9]])\n\n创建一个1行10列的矩阵\nx.reshape(-1, 10)\narray([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h3",{attrs:{id:"九-numpy的合并操作-concatenate函数-矩阵拼接必须是相同维度的矩阵进行拼接-vstack可以是不同维度的矩阵相互叠加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九-numpy的合并操作-concatenate函数-矩阵拼接必须是相同维度的矩阵进行拼接-vstack可以是不同维度的矩阵相互叠加"}},[s._v("#")]),s._v(" "),a("code",[s._v("(九)Numpy的合并操作 concatenate函数，矩阵拼接必须是相同维度的矩阵进行拼接, vstack可以是不同维度的矩阵相互叠加")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("合并两个向量\na = np.array([1,2,3])\nb = np.array([100,200,300])\nnp.concatenate([a, b])\n输出结果：\narray([  1,   2,   3, 100, 200, 300])\n\n创建一个2行3列的矩阵, 也可以这样初始化一个矩阵\nA = np.array([[1,2,3], [4,5,6]])\n合并为了一个4行3列的矩阵\nnp.concatenate([A,A], axis=0)\n输出结果：\narray([[1, 2, 3],\n       [4, 5, 6],\n       [1, 2, 3],\n       [4, 5, 6]])\n\n合并成为了一个2行6列的矩阵\nnp.concatenate([A,A], axis=1)\narray([[1, 2, 3, 1, 2, 3],\n       [4, 5, 6, 4, 5, 6]])\n\nvstack方法，可以将矩阵与向量叠在垂直方向加起来\nnp.vstack([A, a, b])\n输出结果：\narray([[  1,   2,   3],\n       [  4,   5,   6],\n       [  1,   2,   3],\n       [100, 200, 300]])\n       \n将矩阵在水平方向叠加\nnp.hstack([A, A])\n输出结果：\narray([[1, 2, 3, 1, 2, 3],\n       [4, 5, 6, 4, 5, 6]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h3",{attrs:{id:"十-numpy的切割操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十-numpy的切割操作"}},[s._v("#")]),s._v(" "),a("code",[s._v("(十)Numpy的切割操作")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("①：向量切割\nx = np.arange(10)\nx\n输出结果：array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])\n\n将x向量从索3和索引7进行切割\nx1, x2, x3 = np.split(x, [3,7])\nx1\n输出结果：\narray([0, 1, 2])\nx2\n输出结果：\narray([3, 4, 5, 6])\nx3\n输出结果：\narray([7, 8, 9])\n\n②：矩阵切割\nA = np.arange(16).reshape([4,4])\nA\n输出结果：\narray([[ 0,  1,  2,  3],\n       [ 4,  5,  6,  7],\n       [ 8,  9, 10, 11],\n       [12, 13, 14, 15]])\n\n按照第3行进行切割\nA1, A2 = np.split(A, [2])\nA1\n输出结果：\narray([[0, 1, 2, 3],\n       [4, 5, 6, 7]])\n       \nA2\n输出结果：\narray([[ 8,  9, 10, 11],\n       [12, 13, 14, 15]])\n\n按照第3列进行切割\nB1, B2 = np.split(A, [2], axis=1)\nB1\narray([[ 0,  1],\n       [ 4,  5],\n       [ 8,  9],\n       [12, 13]])\nB2\narray([[ 2,  3],\n       [ 6,  7],\n       [10, 11],\n       [14, 15]])\n\n按照行进行切割\nupper, lower = np.vsplit(A, [2])\nupper\n输出结果：\narray([[0, 1, 2, 3],\n       [4, 5, 6, 7]])\n\nlower\n输出结构：\narray([[ 8,  9, 10, 11],\n       [12, 13, 14, 15]])\n\n\n将矩阵最后一列分离\ncolume1, colume2 = np.hsplit(A, [-1])\ncolume1\n输出结果：\narray([[ 0,  1,  2],\n       [ 4,  5,  6],\n       [ 8,  9, 10],\n       [12, 13, 14]])\n\ncolume2\n输出结果：\narray([[ 3],\n       [ 7],\n       [11],\n       [15]])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);