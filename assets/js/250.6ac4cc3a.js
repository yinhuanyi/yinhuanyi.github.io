(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{2250:function(n,s,a){"use strict";a.r(s);var e=a(9),r=Object(e.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"一-优化点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-优化点"}},[n._v("#")]),n._v(" 一：优化点")]),n._v(" "),e("h3",{attrs:{id:"一-每个任务的执行都是新启动一个goroutine-没有使用协程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-每个任务的执行都是新启动一个goroutine-没有使用协程池"}},[n._v("#")]),n._v(" (一) 每个任务的执行都是新启动一个goroutine，没有使用协程池")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("goroutine池的作用：提高响应速度，减少创建协程的时间，更好的管理goroutine，定期回收")])]),n._v(" "),e("li",[e("p",[n._v("goroutine池实现思想：基于for循环将函数任务写入到EntryChannel，在Pool运行的时候，协程启动多个worker，并且同时从EntryChannel中读取任务写入到JobsChannel中，worker内部从JobsChannel中读取任务，并且执行。如下图，创建了三个协程，协程执行完任务后不会退出，只要jobChannel中有任务，worker协程就会读取到，并且执行")])])]),n._v(" "),e("p",[e("img",{attrs:{src:a(776),alt:"Alt text"}})]),n._v(" "),e("ul",[e("li",[n._v("相关代码")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('/* 有关Task任务相关定义及操作 */\n//定义任务Task类型,每一个任务Task都可以抽象成一个函数\n\ntype Task struct {\n    f func() error //一个无参的函数类型\n}\n// NewTask Task构造函数，\nfunc NewTask(f func() error) *Task {\n    t := Task{\n        f: f,\n    }\n\n    return &t\n}\n\n// Execute 执行Task任务的方法\nfunc (t *Task) Execute() {\n    _ = t.f() //调用任务所绑定的函数\n}\n\n/* 有关协程池的定义及操作 */\n//定义池类型\n\ntype Pool struct {\n    // 对外接收Task的入口\n    EntryChannel chan *Task\n\n    // 协程池最大worker数量,限定Goroutine的个数\n    workerNum int\n\n    // 协程池内部的任务就绪队列, // 就绪队列是什么\n    JobsChannel chan *Task\n}\n\n// NewPool 创建一个协程池\nfunc NewPool(cap int) *Pool {\n    p := Pool{\n        EntryChannel: make(chan *Task),\n        workerNum:    cap,\n        JobsChannel:  make(chan *Task),\n    }\n\n    return &p\n}\n\n// worker 协程池创建一个worker并且开始工作，worker的目的是获取task，并且执行\nfunc (p *Pool) worker(workId int) {\n    //worker不断的从JobsChannel内部任务队列中拿任务\n    for task := range p.JobsChannel {\n        //如果拿到任务,则执行task任务\n        task.Execute()\n        fmt.Println("worker ID ", workId, " 执行完毕任务")\n    }\n}\n\n// Run 让协程池Pool开始工作\nfunc (p *Pool) Run() {\n    // 首先根据协程池的worker数量限定,开启固定数量的Worker, 每一个Worker用一个Goroutine承载\n    for i := 1; i <= p.workerNum; i++ {\n        go p.worker(i)\n    }\n\n    // 将entry中获取任务，写入到jobs中\n    for task := range p.EntryChannel {\n        p.JobsChannel <- task\n    }\n\n    // 执行完毕需要关闭JobsChannel\n    close(p.JobsChannel)\n\n    // 执行完毕需要关闭EntryChannel\n    close(p.EntryChannel)\n}\n\n//主函数\nfunc main() {\n    // 创建一个任务函数\n    task := func() error {\n        fmt.Println(time.Now())\n        time.Sleep(1 * time.Second)\n        return nil\n    }\n\n    //创建一个Task\n    t := NewTask(task)\n\n    //创建一个协程池,最大开启个协程worker\n    p := NewPool(3)\n\n    //开一个协程 不断的向 Pool 输送打印一条时间的task任务\n    go func() { // 这里是不断写入任务\n        for {\n            p.EntryChannel <- t\n        }\n    }()\n\n    //启动协程池p\n    p.Run()\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br"),e("span",{staticClass:"line-number"},[n._v("81")]),e("br"),e("span",{staticClass:"line-number"},[n._v("82")]),e("br"),e("span",{staticClass:"line-number"},[n._v("83")]),e("br"),e("span",{staticClass:"line-number"},[n._v("84")]),e("br"),e("span",{staticClass:"line-number"},[n._v("85")]),e("br"),e("span",{staticClass:"line-number"},[n._v("86")]),e("br"),e("span",{staticClass:"line-number"},[n._v("87")]),e("br"),e("span",{staticClass:"line-number"},[n._v("88")]),e("br"),e("span",{staticClass:"line-number"},[n._v("89")]),e("br"),e("span",{staticClass:"line-number"},[n._v("90")]),e("br"),e("span",{staticClass:"line-number"},[n._v("91")]),e("br"),e("span",{staticClass:"line-number"},[n._v("92")]),e("br"),e("span",{staticClass:"line-number"},[n._v("93")]),e("br"),e("span",{staticClass:"line-number"},[n._v("94")]),e("br"),e("span",{staticClass:"line-number"},[n._v("95")]),e("br"),e("span",{staticClass:"line-number"},[n._v("96")]),e("br"),e("span",{staticClass:"line-number"},[n._v("97")]),e("br"),e("span",{staticClass:"line-number"},[n._v("98")]),e("br"),e("span",{staticClass:"line-number"},[n._v("99")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports},776:function(n,s,a){n.exports=a.p+"assets/img/2021-08-243.21.41.d02f0b6e.png"}}]);