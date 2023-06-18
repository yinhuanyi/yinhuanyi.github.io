(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{2119:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0618.03.34.aea5447d.png"},2120:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0619.10.43.4e3f1c99.png"},2121:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0619.19.26.87d91bd8.png"},2122:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0619.30.51.c53664e6.png"},2123:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0620.26.18.5247b49a.png"},2124:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0620.37.50.03f8882d.png"},2125:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0621.02.22.806868eb.png"},2126:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0621.07.37.7e293cf4.png"},2127:function(s,t,a){s.exports=a.p+"assets/img/2022-03-0621.10.44.496cf527.png"},2776:function(s,t,a){"use strict";a.r(t);var e=a(9),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-虚拟内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-虚拟内存"}},[s._v("#")]),s._v(" 一：虚拟内存")]),s._v(" "),e("h3",{attrs:{id:"一-单片机内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-单片机内存"}},[s._v("#")]),s._v(" (一)：单片机内存")]),s._v(" "),e("ul",[e("li",[s._v("单片机的 CPU 是直接操作内存的物理地址")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("如果一个程序在 100 的位置写入一个新的值，将会擦掉其他程序存放在相同位置上的所有内容，所以同时运行两个以上程序是根本行不通的\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"二-虚拟内存隔离物理内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-虚拟内存隔离物理内存"}},[s._v("#")]),s._v(" (二)：虚拟内存隔离物理内存")]),s._v(" "),e("p",[e("img",{attrs:{src:a(2119),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("操作系统会提供一种机制，将"),e("code",[s._v("不同进程的内存虚拟地址")]),s._v("和"),e("code",[s._v("真实的内存物理地址")]),s._v("映射起来。如果程序要访问虚拟地址的时候，由操作系统映射到不同的物理地址，这样写入的是不同的物理地址，这样就不会冲突了。因此程序使用的内存地址叫做"),e("strong",[s._v("虚拟内存地址")]),s._v("，实际存在硬件里面的空间地址叫"),e("strong",[s._v("物理内存地址")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(2120),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("进程持有的虚拟地址")]),s._v("会通过 CPU 芯片中的内存管理单元（MMU）的映射关系，来转换变成物理地址，然后再通过物理地址访问内存")])]),s._v(" "),e("h2",{attrs:{id:"二-内存分段和内存分页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-内存分段和内存分页"}},[s._v("#")]),s._v(" 二：内存分段和内存分页")]),s._v(" "),e("h3",{attrs:{id:"一-虚拟地址与物理地址之间的映射关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-虚拟地址与物理地址之间的映射关系"}},[s._v("#")]),s._v(" (一)：虚拟地址与物理地址之间的映射关系")]),s._v(" "),e("ul",[e("li",[s._v("操作系统通过"),e("strong",[s._v("内存分段和内存分页")]),s._v("来映射内存的虚拟地址和物理地址")])]),s._v(" "),e("h3",{attrs:{id:"二-内存分段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-内存分段"}},[s._v("#")]),s._v(" (二)：内存分段")]),s._v(" "),e("ul",[e("li",[s._v("程序是由若干个逻辑分段组成的，如可由"),e("code",[s._v("代码分段、数据分段、栈段、堆段组成")]),s._v("。不同的段是有不同的属性的，所以就用分段的形式把这些段分离出来。分段机制下的虚拟地址由两部分组成，段选择子和段内偏移量。")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(2121),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("分段内存解决了"),e("strong",[s._v("程序本身不需要关心具体的物理内存地址的问题")]),s._v("，但它也有一些不足之处：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：内存碎片：\n\t①：外部内存碎片，也就是产生了多个不连续的小物理内存，导致新的程序无法被装载\n\t②：内部内存碎片，程序所有的内存都被装载到了物理内存，但是这个程序有部分的内存可能并不是很常使用，这也会导致内存的浪费\n\n\n2：内存交换的效率低\n\t我们常看到的 Swap 空间，这块空间是从硬盘划分出来的，用于内存与硬盘的空间交换，因为硬盘的访问速度要比内存慢太多了，内存交换效率很低\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"三-内存分页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-内存分页"}},[s._v("#")]),s._v(" (三)：内存分页")]),s._v(" "),e("ul",[e("li",[s._v("分页是把"),e("strong",[s._v("整个虚拟和物理内存空间切成一段段固定尺寸的大小")]),s._v("，这样一个连续并且尺寸固定的内存空间，我们叫页（Page），在 Linux 下，每一页的大小为 4KB。那么"),e("code",[s._v("虚拟地址与物理地址之间通过 页表 来映射")]),s._v("，页表实际上存储在 CPU 的内存管理单元 （MMU） 中，于是 CPU 就可以直接通过 MMU，找出要实际要访问的物理内存地址。而"),e("code",[s._v("当进程访问的虚拟地址在页表中查不到时")]),s._v("，系统会产生一个"),e("code",[s._v("缺页异常")]),s._v("，进入系统内核空间分配物理内存、更新进程页表，最后再返回用户空间，恢复进程的运行")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(2122),alt:"Alt text"}})]),s._v(" "),e("h3",{attrs:{id:"四-分页解决了分段的内存碎片、内存交换效率低的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-分页解决了分段的内存碎片、内存交换效率低的问题"}},[s._v("#")]),s._v(" (四)：分页解决了分段的内存碎片、内存交换效率低的问题")]),s._v(" "),e("ul",[e("li",[s._v("由于内存空间都是预先划分好的，"),e("strong",[s._v("也就不会像分段内存会产生间隙小的内存段")]),s._v("，采用了分页内存，那么释放的内存都是以页为单位释放的。如果内存空间不够用的时候，操作系统会把其他正在运行中的进程，"),e("code",[s._v("最近没被使用的内存页")]),s._v("给释放掉，将数据暂时写在硬盘上，"),e("code",[s._v("称为换出（Swap Out）")]),s._v("。一旦需要的时候，再加载进来，"),e("code",[s._v("称为换入（Swap In）")]),s._v("。一次性写入磁盘的也只有少数的一个页或者几个页，不会花太多时间，内存交换的效率就相对比较高。用分页的方式管理虚拟内存和物理内存，只有当程序在运行中的时候，用到"),e("code",[s._v("虚拟内存页里面的指令和数据")]),s._v("时，才需要将"),e("code",[s._v("磁盘中的程序指令和数据加载到物理内存")]),s._v("里面去，"),e("code",[s._v("以便CPU能够读取到物理内存中的指令和数据")])])]),s._v(" "),e("h3",{attrs:{id:"五-分页机制下-虚拟地址和物理地址的映射关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-分页机制下-虚拟地址和物理地址的映射关系"}},[s._v("#")]),s._v(" (五)：分页机制下，虚拟地址和物理地址的映射关系")]),s._v(" "),e("p",[e("img",{attrs:{src:a(2123),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("当CPU需要获取内存指令或数据的时候，虚拟内存地址到物理内存地址的映射过程如下")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：把虚拟内存地址，切分成页号和偏移量\n\n2：根据页号，从页表里面，查询对应的物理页号\n\n3：直接拿物理页号，加上前面的偏移量，就得到了物理内存地址\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"六-为什么使用多级页表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六-为什么使用多级页表"}},[s._v("#")]),s._v(" (六)：为什么使用多级页表")]),s._v(" "),e("ul",[e("li",[s._v("避免把全部页表一直保存在内存中，特别是那些从不需要的页表就不应该保留")])]),s._v(" "),e("h2",{attrs:{id:"三-段页式内存管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-段页式内存管理"}},[s._v("#")]),s._v(" 三：段页式内存管理")]),s._v(" "),e("h3",{attrs:{id:"一-段页式内存管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-段页式内存管理"}},[s._v("#")]),s._v(" (一)：段页式内存管理")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("内存分段和内存分页，可以组合起来在同一个系统中使用")]),s._v("。那么组合起来后，通常称为"),e("code",[s._v("段页式内存管理")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(2124),alt:"Alt text"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：先将程序划分为多个有逻辑意义的段，也就是前面提到的分段机制；\n\n2：接着再把每个段划分为多个页，也就是对分段划分出来的连续空间，再划分固定大小的页\n\n3：地址结构就由段号、段内页号和页内位移三部分组成\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"四-linux-内存管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-linux-内存管理"}},[s._v("#")]),s._v(" 四：Linux 内存管理")]),s._v(" "),e("h3",{attrs:{id:"一-linux-内存管理机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-linux-内存管理机制"}},[s._v("#")]),s._v(" (一)：Linux 内存管理机制")]),s._v(" "),e("ul",[e("li",[s._v("Linux 内存主要采用的是页式内存管理，但同时也不可避免地涉及了段机制。Linux 系统中的每个段都是从 0 地址开始的整个 4GB 虚拟空间（32 位环境下），也就是所有的段的起始地址都是一样的。这意味着，Linux 系统中的代码，包括操作系统本身的代码和应用程序代码，所面对的地址空间都是线性地址空间（虚拟地址），这种做法相当于屏蔽了处理器中的逻辑地址概念，段只被用于访问控制和内存保护。")])]),s._v(" "),e("h3",{attrs:{id:"二-linux-的虚拟地址空间分布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-linux-的虚拟地址空间分布"}},[s._v("#")]),s._v(" (二)：Linux 的虚拟地址空间分布")]),s._v(" "),e("p",[e("img",{attrs:{src:a(2125),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("虚拟地址空间的内部又被分为"),e("strong",[s._v("内核空间")]),s._v("和"),e("strong",[s._v("用户空间")]),s._v("两部分，32 位系统的内核空间占用 1G，位于最高处，剩下的 3G 是用户空间；64 位系统的内核空间和用户空间都是 128T，分别占据整个内存空间的最高和最低处，剩下的中间部分是未定义的")])]),s._v(" "),e("h3",{attrs:{id:"三-内核空间与用户空间的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-内核空间与用户空间的区别"}},[s._v("#")]),s._v(" (三)：内核空间与用户空间的区别")]),s._v(" "),e("p",[e("img",{attrs:{src:a(2126),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[e("strong",[e("code",[s._v("进程在用户态时，只能访问用户空间内存；只有进入内核态后，才可以访问内核空间的内存")])]),s._v("，虽然每个进程都各自有独立的虚拟内存，"),e("code",[s._v("但是每个虚拟内存中的内核地址，其实关联的都是相同的物理内存")]),s._v("。这样当进程切换到内核态后，就可以很方便地访问内核空间内存。也就是说每个进程的内核空间都是一致的，"),e("strong",[s._v("这就是为什么Linux内存管理会出现"),e("code",[s._v("用户态")]),s._v("和"),e("code",[s._v("内核态")])])])]),s._v(" "),e("h3",{attrs:{id:"四-进程的虚拟内存用户空间发布情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-进程的虚拟内存用户空间发布情况"}},[s._v("#")]),s._v(" (四)：进程的虚拟内存用户空间发布情况")]),s._v(" "),e("p",[e("img",{attrs:{src:a(2127),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("用户空间内存，从低到高分别是 6 种不同的内存段，"),e("strong",[s._v("堆段")]),s._v("和"),e("strong",[s._v("文件映射段")]),s._v("的内存是动态分配的")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1：程序文件段，包括二进制可执行代码\n\n2：已初始化数据段，包括静态常量\n\n3：未初始化数据段，包括未初始化的静态变量\n\n4：堆段，包括动态分配的内存，从低地址开始向上增长\n\n5：文件映射段，包括动态库、共享内存等，从低地址开始向上增长（跟硬件和内核版本有关）\n\n6：栈段，包括局部变量和函数调用的上下文等。栈的大小是固定的，一般是 8 MB。当然系统也提供了参数，以便我们自定义大小；\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);