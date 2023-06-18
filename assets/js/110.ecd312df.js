(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1677:function(s,t,a){s.exports=a.p+"assets/img/2022-02-1914.56.01.283f60c2.png"},1678:function(s,t,a){s.exports=a.p+"assets/img/2022-02-1915.03.34.556ba4f3.png"},1679:function(s,t,a){s.exports=a.p+"assets/img/2022-02-1915.13.35.1b0479f0.png"},1680:function(s,t,a){s.exports=a.p+"assets/img/2022-02-1915.17.10.e844ddef.png"},1681:function(s,t,a){s.exports=a.p+"assets/img/2022-02-1916.01.43.b4ee3902.png"},2637:function(s,t,a){"use strict";a.r(t);var r=a(9),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h2",{attrs:{id:"一-mysql连接池"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-mysql连接池"}},[s._v("#")]),s._v(" 一：MySQL连接池")]),s._v(" "),r("h3",{attrs:{id:"一-client端和server端的连接池"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-client端和server端的连接池"}},[s._v("#")]),s._v(" (一)：client端和server端的连接池")]),s._v(" "),r("ul",[r("li",[s._v("当使用客户端的驱动库去访问 MySQL 数据库的时候，Client端和Server端都会维护一个连接池，例如使用sqlx驱动连接MySQL的时候，会设置如下语句")])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 连接池最大的活动连接")]),s._v("\nDb"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetMaxOpenConns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cfg"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MaxOpenConns"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 连接池中最大的空闲连接")]),s._v("\nDb"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetMaxIdleConns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cfg"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MaxIdleConns"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("ul",[r("li",[s._v("在客户端通过线程调用 Client端 的连接池，Server端 的连接池响应请求后，也获取连接池中的连接，然后调用SQL接口，通过SQL线程完成SQL语句的执行")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(1677),alt:"Alt text"}})]),s._v(" "),r("h2",{attrs:{id:"二-mysql查询解析器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-mysql查询解析器"}},[s._v("#")]),s._v(" 二：MySQL查询解析器")]),s._v(" "),r("h3",{attrs:{id:"一-查询解析器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-查询解析器"}},[s._v("#")]),s._v(" (一)：查询解析器")]),s._v(" "),r("ul",[r("li",[s._v("例如下面执行一条SQL语句")])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[s._v("select username"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age from user where id"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("ul",[r("li",[s._v("这个 SQL 是写给人看的，SQL在MySQL中需要进行解析，还会帮我们选择最优的查询路径(选择最高效的方式去查询)")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(1678),alt:"Alt text"}})]),s._v(" "),r("h2",{attrs:{id:"三-mysql查询优化器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-mysql查询优化器"}},[s._v("#")]),s._v(" 三：MySQL查询优化器")]),s._v(" "),r("h3",{attrs:{id:"一-查询优化器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-查询优化器"}},[s._v("#")]),s._v(" (一)：查询优化器")]),s._v(" "),r("ul",[r("li",[s._v("MySQL 会帮我去使用他自己认为的最好的方式去优化这条 SQL 语句，并生成一条条的执行计划，例如MySQL 会依据成本最小原则来选择使用对应的索引。优化器执行选出最优索引等步骤后，"),r("code",[s._v("会通知执行器去调用存储引擎接口，这时候才真正开始执行SQL语句")])])]),s._v(" "),r("p",[r("img",{attrs:{src:a(1679),alt:"Alt text"}})]),s._v(" "),r("h2",{attrs:{id:"四-mysql执行器和存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-mysql执行器和存储引擎"}},[s._v("#")]),s._v(" 四：MySQL执行器和存储引擎")]),s._v(" "),r("h3",{attrs:{id:"一-执行器和存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-执行器和存储引擎"}},[s._v("#")]),s._v(" (一)：执行器和存储引擎")]),s._v(" "),r("ul",[r("li",[s._v("执行器最终最根据一系列的执行计划去调用存储引擎的接口去完成 SQL 的执行")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(1680),alt:"Alt text"}})]),s._v(" "),r("h2",{attrs:{id:"五-存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五-存储引擎"}},[s._v("#")]),s._v(" 五：存储引擎")]),s._v(" "),r("h3",{attrs:{id:"一-存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-存储引擎"}},[s._v("#")]),s._v(" (一)：存储引擎")]),s._v(" "),r("ul",[r("li",[s._v("MySQL中常用的存储引擎有：InnoDB和MyISAM。在执行这个 SQL 的时候 SQL 语句对应的数据要么是在内存中，要么是在磁盘中。如果数据在磁盘中，磁盘的随机IO读写的速度非常慢，"),r("strong",[s._v("因此每次执行SQL的时候，会将数据先查询出来，加载到内存中。如果是查询SQL语句，直接过滤后返回数据；如果是修改语句，会现在内存中修改，在写入到磁盘中")]),s._v("。"),r("strong",[s._v("这里的内存就是"),r("code",[s._v("Buffer Pool")])])])]),s._v(" "),r("h3",{attrs:{id:"二-buffer-pool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-buffer-pool"}},[s._v("#")]),s._v(" (二)：Buffer Pool")]),s._v(" "),r("ul",[r("li",[s._v("Buffer Pool（缓冲池）是 存储引擎中非常重要的内存结构，当第一次在查询的时候会将查询的结果存到 Buffer Pool 中，这样后面再有请求的时候就会先从缓冲池中去查询。如果没有再去磁盘中查找，然后在放到 Buffer Pool 中")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(1681),alt:"Alt text"}})]),s._v(" "),r("ul",[r("li",[s._v("按照上面的那幅图，这条 SQL 语句的执行步骤大致是这样子的")])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：存储引擎会在缓冲池中查找 id"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 的这条数据是否存在\n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：发现不存在，那么就会去磁盘中加载，并将其存放在缓冲池中\n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("：该条记录会被加上一个独占锁")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("此时不能被其他的"),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("语句修改"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br")])]),r("h3",{attrs:{id:"三-undo-log-日志文件-记录数据被修改前的样子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-undo-log-日志文件-记录数据被修改前的样子"}},[s._v("#")]),s._v(" (三)：undo log 日志文件：记录数据被修改前的样子")]),s._v(" "),r("ul",[r("li",[r("p",[r("strong",[s._v("当第一次将数据从磁盘加载到Buffer pool 中，不会立马修改数据，会往 undo 日志文件中写入一条日志")]),s._v("，将数据记录下来")])]),s._v(" "),r("li",[r("p",[s._v("以InnoDB存储引擎为例，InnoDB存储引擎最大的特点是"),r("strong",[s._v("支持事务(MyISAM存储引擎不支持事务)")]),s._v("：如果事务提交失败，那么该事务中的所有的操作都必须回滚到执行前的样子。此时数据已经被加载到 Buffer Pool 中了，然后开始更新Buffer Pool 中的数据。数据更新完毕后，此时 Buffer Pool 中的数据与磁盘中的数据出现了不一致的情况，"),r("strong",[s._v("那么此时Buffer Pool 中的数据就是脏数据")]),s._v("。那么这种情况下如何处理呢?")])])]),s._v(" "),r("h3",{attrs:{id:"四-redo-log-日志文件-记录数据被修改后的样子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-redo-log-日志文件-记录数据被修改后的样子"}},[s._v("#")]),s._v(" (四)：redo log 日志文件：记录数据被修改后的样子")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("当前Buffer Pool 中的数据并没有写入到磁盘中，此时的数据就是脏数据。如果现在服务器宕机了，那么Buffer Pool 中的数据就丢失了，"),r("strong",[s._v("但是此时并没有关系，客户端代码中会记录错误，因此客户端就知道当前的SQL没有执行成功。并且MySQL 会认为本次事务是失败的，所以数据依旧是更新前的样子")]),s._v("。当数据库启动的时候，客户端又可以重新执行SQL操作了")])]),s._v(" "),r("li",[r("p",[s._v("当Buffer Pool 中的数据被修改后，会被记录到"),r("code",[s._v("redo log buffer")]),s._v("中，并不会记录到redo log中，因为MySQL 为了提高效率，会在某个时机将其再从 redo log buffer 写入到 redo log 中。如果此时服务器宕机了，那么也没有关系，MySQL 也会认为本次事务是失败的所以数据依旧是更新前的样子")])]),s._v(" "),r("li",[r("p",[s._v("此时Buffer Pool 中被修改后的数据写入到 redo log buffer 中后，接下来会将 redo log buffer 中的数据持久化到redo log中(可以通过 innodb_flush_log_at_trx_commit 参数来设置，0不是不刷磁盘，"),r("strong",[s._v("1表示立即写入磁盘")]),s._v("，2表示先写入到 os cache中)。"),r("strong",[s._v("此时MySQL会提交事务，认为此次更新成功了，然后将Buffer Pool 中的数据更新到磁盘中")]),s._v("。如果此时服务器宕机了，虽然Buffer Pool 中的数据会丢失，但是MySQL重启后，会将 redo log 文件内容恢复到 Buffer Pool 中，再将Buffer Pool 中的数据更新到磁盘中，此时数据更新结束")])])]),s._v(" "),r("h3",{attrs:{id:"五-bin-log-日志文件-记录事务操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五-bin-log-日志文件-记录事务操作"}},[s._v("#")]),s._v(" (五)：bin log 日志文件：记录事务操作")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("当MySQL在提交事务的时候，不仅仅将redo log buffer的数据写入到redo log 文件中，也会写入到bin log文件中，同时会将本次修改的bin log文件名和修改的内容在bin log中的位置记录到redo log中，"),r("strong",[s._v("最后还会在redo log文件的最后写入 commit 标记")]),s._v("，"),r("strong",[s._v("这样就表示本次事务被成功的提交了")]),s._v("。因此事务提交成功的标志是：redo log buffer的数据成功写入到redo log 和 bin log中，并且redo log中有commit标记")])]),s._v(" "),r("li",[r("p",[s._v("bin log 文件的写入是有相关的策略的，策略可以通过sync_binlog来修改，默认为 0，表示先写入 os cache，也就是说在提交事务的时候，数据不会直接到磁盘中，这样如果宕机bin log数据仍然会丢失。"),r("strong",[s._v("所以建议将sync_binlog设置为 1 表示直接将数据写入到磁盘文件中，保证主从同步的过程中不丢失数据")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);