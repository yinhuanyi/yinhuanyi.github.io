(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{2247:function(t,s,n){"use strict";n.r(s);var a=n(9),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-基本概念"}},[t._v("#")]),t._v(" 一：基本概念")]),t._v(" "),a("h3",{attrs:{id:"一-mutex互斥锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-mutex互斥锁"}},[t._v("#")]),t._v(" (一) Mutex互斥锁")]),t._v(" "),a("ul",[a("li",[t._v("sync.Mutex是一把互斥锁，零值Mutex为未上锁状态，"),a("code",[t._v("Mutex一旦被使用要禁止被拷贝，因为在Lock()、Unlock()频繁调用中，可能造成死锁")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func main() {\n\n\tvar m sync.Mutex\n\tm.Lock()\n\tdefer m.Unlock()\n\t\n\t执行下面的代码...\n\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"二-mutex的两种模式-正常模式、饥饿模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-mutex的两种模式-正常模式、饥饿模式"}},[t._v("#")]),t._v(" (二) Mutex的两种模式：正常模式、饥饿模式")]),t._v(" "),a("ul",[a("li",[t._v("正常模式：非公平模式")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t没有获取到锁的goroutine是存放在Fifo队列中，一旦锁被释放，Fifo队列中的goroutine会被唤醒，与新启动的goroutine一起竞争锁资源，但是由于新的goroutine占用了CPU资源，因此新的goroutine更有可能竞争到锁，如果Fifo中被唤醒的goroutine获取锁失败超过1ms，则会将Mutex切换为饥饿模式\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("饥饿模式：公平模式")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t在饥饿模式下，一旦锁被释放，Fifo队列头部的goroutine会直接获得锁，新的goroutine会直接插入到Fifo队尾\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("Mutex的正常模式、饥饿模式是动态平衡的")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t如果一个在等待队列队尾或等待小于1ms的goroutine获得了锁，那么Mutex将会切入到正常模式，正常模式有更好的性能，新来的goroutine通过几次竞争可以直接获取到锁\n\t\n\t饥饿模式则是对正常模式的补充，防止等待队列中的goroutine永远没有机会获取锁。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"三-mutex结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-mutex结构体"}},[t._v("#")]),t._v(" (三) Mutex结构体")]),t._v(" "),a("ul",[a("li",[t._v("Mutex结构体代码如下")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("type Mutex struct {\n\tstate int32  // 竞争的状态值\n\tsema  uint32 // 信号量\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("state竞争状态有四种")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(774),alt:"Alt text"}})]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mutexLocked = 1 << iota // 被锁\nmutexWoken              // 正常模式 \nmutexStarving\t\t\t// 饥饿模式\nmutexWaiterShift = iota // goroutine等待数量\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"二-获取锁-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-获取锁-lock"}},[t._v("#")]),t._v(" 二：获取锁 Lock()")]),t._v(" "),a("h3",{attrs:{id:"一-fast-path、slow-path两种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-fast-path、slow-path两种状态"}},[t._v("#")]),t._v(" (一) fast-path、slow-path两种状态")]),t._v(" "),a("ul",[a("li",[t._v("Fast-path：在Lock()方法中，通过调用"),a("code",[t._v("atomic.CompareAndSwapInt32原子性操作")]),t._v("，判断m.state是否为0，如果是0，那么使用mutexLocked的值，如果状态修改成功，那么表示获得锁，调用"),a("code",[t._v("race.Acquire()加锁")]),t._v("，然后函数结束。如果无法获取到锁，调用lockSlow()函数，进入slow-path。"),a("code",[t._v("Mutex是互斥排他锁且不可重入锁")]),t._v("，当我们在一个goroutine获取同一个锁会导致死锁。")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func (m *Mutex) Lock() {\n\t// 尝试原子性修改state的值，如果成功，获得锁\n\tif atomic.CompareAndSwapInt32(&m.state, 0, mutexLocked) {\n\t\tif race.Enabled {\n\t\t\trace.Acquire(unsafe.Pointer(m))\n\t\t}\n\t\treturn\n\t}\n\t// 无论是否成功获得锁都会进入到slow-path\n\tm.lockSlow()\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[t._v("Slow-path：在这个过程中，默认Mutex为正常模式，然后goroutine进行自旋，如果自旋1ms无法获取锁，直接让新进来的goroutine都进入Fifo等待队列，然后进入饥饿状态。如果在饥饿模式获得锁，Mutex会切换到正常模型")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('func (m *Mutex) lockSlow() {\n\tvar waitStartTime int64\n\tstarving := false\n\tawoke := false\n\titer := 0\n\told := m.state\n\n\tfor {\n\n\t\t// 这里是正常模式下，goroutine进行自旋等待锁\n\t\tif old&(mutexLocked|mutexStarving) == mutexLocked && runtime_canSpin(iter) {\n\n\t\t\tif !awoke && old&mutexWoken == 0 && old>>mutexWaiterShift != 0 &&\n\t\t\t\tatomic.CompareAndSwapInt32(&m.state, old, old|mutexWoken) {\n\t\t\t\tawoke = true\n\t\t\t}\n\t\t\truntime_doSpin()\n\t\t\titer++\n\t\t\told = m.state\n\t\t\tcontinue\n\t\t}\n\n\t\t// 如果自旋等待结束后，还是没拿到锁\n\t\tnew := old\n\n\t\t// 让mutex处于加上状态\n\t\tif old&mutexStarving == 0 {\n\t\t\tnew |= mutexLocked\n\t\t}\n\n\t\t// 让新进来的goroutine都进入Fifo等待队列\n\t\tif old&(mutexLocked|mutexStarving) != 0 {\n\t\t\tnew += 1 << mutexWaiterShift\n\t\t}\n\n\t\t// 将Mutex切换为饥饿模式\n\t\tif starving && old&mutexLocked != 0 {\n\t\t\tnew |= mutexStarving\n\t\t}\n\n\n\t\tif awoke {\n\n\t\t\tif new&mutexWoken == 0 {\n\t\t\t\tthrow("sync: inconsistent mutex state")\n\t\t\t}\n\t\t\tnew &^= mutexWoken\n\t\t}\n\n\t\tif atomic.CompareAndSwapInt32(&m.state, old, new) {\n\t\t\tif old&(mutexLocked|mutexStarving) == 0 {\n\t\t\t\tbreak \n\t\t\t}\n\n\t\t\tqueueLifo := waitStartTime != 0\n\t\t\tif waitStartTime == 0 {\n\t\t\t\twaitStartTime = runtime_nanotime()\n\t\t\t}\n\t\t\truntime_SemacquireMutex(&m.sema, queueLifo, 1)\n\t\t\tstarving = starving || runtime_nanotime()-waitStartTime > starvationThresholdNs\n\t\t\told = m.state\n\t\t\tif old&mutexStarving != 0 {\n\n\t\t\t\tif old&(mutexLocked|mutexWoken) != 0 || old>>mutexWaiterShift == 0 {\n\t\t\t\t\tthrow("sync: inconsistent mutex state")\n\t\t\t\t}\n\t\t\t\tdelta := int32(mutexLocked - 1<<mutexWaiterShift)\n\t\t\t\tif !starving || old>>mutexWaiterShift == 1 {\n\n\t\t\t\t\tdelta -= mutexStarving\n\t\t\t\t}\n\t\t\t\tatomic.AddInt32(&m.state, delta)\n\t\t\t\tbreak\n\t\t\t}\n\t\t\tawoke = true\n\t\t\titer = 0\n\t\t} else {\n\t\t\told = m.state\n\t\t}\n\n\t}\n\n\tif race.Enabled {\n\t\trace.Acquire(unsafe.Pointer(m))\n\t}\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br"),a("span",{staticClass:"line-number"},[t._v("75")]),a("br"),a("span",{staticClass:"line-number"},[t._v("76")]),a("br"),a("span",{staticClass:"line-number"},[t._v("77")]),a("br"),a("span",{staticClass:"line-number"},[t._v("78")]),a("br"),a("span",{staticClass:"line-number"},[t._v("79")]),a("br"),a("span",{staticClass:"line-number"},[t._v("80")]),a("br"),a("span",{staticClass:"line-number"},[t._v("81")]),a("br"),a("span",{staticClass:"line-number"},[t._v("82")]),a("br"),a("span",{staticClass:"line-number"},[t._v("83")]),a("br"),a("span",{staticClass:"line-number"},[t._v("84")]),a("br"),a("span",{staticClass:"line-number"},[t._v("85")]),a("br"),a("span",{staticClass:"line-number"},[t._v("86")]),a("br")])]),a("h2",{attrs:{id:"三-获取锁-unlock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-获取锁-unlock"}},[t._v("#")]),t._v(" 三：获取锁 Unlock()")]),t._v(" "),a("h3",{attrs:{id:"一-unlock、unlockslow两个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-unlock、unlockslow两个阶段"}},[t._v("#")]),t._v(" (一) unlock、unlockSlow两个阶段")]),t._v(" "),a("ul",[a("li",[t._v("先释放锁，判断当前Mutex的状态，如果没有goroutine等待锁，那么直接结束。如果有goroutine等待锁，进入到unlockSlow逻辑")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func (m *Mutex) Unlock() {\n\n\t// 释放锁\n\tif race.Enabled {\n\t\t_ = m.state\n\t\trace.Release(unsafe.Pointer(m))\n\t}\n\n\t// 判断当前Mutex状态\n\tnew := atomic.AddInt32(&m.state, -mutexLocked)\n\n\t// 如果有goroutine等待，进入到unlockSlow的逻辑\n\tif new != 0 {\n\t\tm.unlockSlow(new)\n\t}\n\t\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("ul",[a("li",[t._v("在unlockSlow逻辑中，"),a("code",[t._v("如果Mutex是正常模式")]),t._v("，当前存在等待的goroutine会被唤醒。如果当前存在自旋等待的goroutine，则不唤醒其他等待goroutine。"),a("code",[t._v("如果Mutex是饥饿模式")]),t._v("，直接将锁交给队列的第一个goroutine")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('func (m *Mutex) unlockSlow(new int32) {\n\n\t// 未加锁的情况下多次调用unlock会抛异常\n\tif (new+mutexLocked)&mutexLocked == 0 {\n\t\tthrow("sync: unlock of unlocked mutex")\n\t}\n\n\t// 如果Mutex是正常模式，当前存在等待goroutine然后唤醒它，唤醒一个goroutine。如果当前存在自旋等待的goroutine，则不唤醒其他等待gorotune\n\tif new&mutexStarving == 0 {\n\t\told := new\n\n\t\tfor {\n\t\t\tif old>>mutexWaiterShift == 0 || old&(mutexLocked|mutexWoken|mutexStarving) != 0 {\n\t\t\t\treturn\n\t\t\t}\n\n\t\t\tnew = (old - 1<<mutexWaiterShift) | mutexWoken\n\t\t\tif atomic.CompareAndSwapInt32(&m.state, old, new) {\n\t\t\t\truntime_Semrelease(&m.sema, false, 1)\n\t\t\t\treturn\n\t\t\t}\n\t\t\told = m.state\n\t\t}\n\n\t// 如果是饥饿模式下\n\t} else {\n\n\t\t// 直接将锁交给队列的第一个goroutine\n\t\truntime_Semrelease(&m.sema, true, 1)\n\n\t}\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("h2",{attrs:{id:"四-信号量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-信号量"}},[t._v("#")]),t._v(" 四：信号量")]),t._v(" "),a("h3",{attrs:{id:"一-goroutine的阻塞和唤醒通过semaphore来实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-goroutine的阻塞和唤醒通过semaphore来实现"}},[t._v("#")]),t._v(" (一) goroutine的阻塞和唤醒通过semaphore来实现")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当goroutine未获取到锁，需要阻塞时调用"),a("code",[t._v("sync.runtime_SemacquireMutex")]),t._v("进入阻塞逻辑")])]),t._v(" "),a("li",[a("p",[t._v("当goroutine要释放锁，唤醒等待的goroutine时，调用"),a("code",[t._v("sync.runtime_Semrelease")])])])]),t._v(" "),a("h2",{attrs:{id:"五-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-小结"}},[t._v("#")]),t._v(" 五：小结")]),t._v(" "),a("ul",[a("li",[t._v("在源码中，如果goroutine1加的锁，可以被另一个goroutine2解锁，但是等到goroutine1解锁的时候就会panic")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t这种问题的解决思想是：通过一个标识来标记，锁是否属于当前的goroutine即可，如果是自己的锁才可以被解锁，如果是别人的，那么什么都不干。\n\t\n\t最常见的是使用Redis实现分布式锁的时候，可以使用requestId或者cookie作为标识，来判断是否当前的锁属于当前的goroutine\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports},774:function(t,s,n){t.exports=n.p+"assets/img/2021-10-204.56.36.8e81ed42.png"}}]);