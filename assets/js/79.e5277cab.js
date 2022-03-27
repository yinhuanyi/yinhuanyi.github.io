(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1784:function(s,n,a){s.exports=a.p+"assets/img/monitor.bc5a6a2c.png"},1785:function(s,n,a){s.exports=a.p+"assets/img/2020-06-0511.21.55.ddd25751.png"},1786:function(s,n,a){s.exports=a.p+"assets/img/2020-06-0511.22.52.77e97e3f.png"},1787:function(s,n,a){s.exports=a.p+"assets/img/2020-06-0511.31.27.c0f20cfe.png"},1788:function(s,n,a){s.exports=a.p+"assets/img/2020-06-0511.36.06.52f8d8c9.png"},1789:function(s,n,a){s.exports=a.p+"assets/img/2020-06-0511.39.26.16c21b65.png"},1790:function(s,n,a){s.exports=a.p+"assets/img/2020-06-0511.42.17.7d927bc9.png"},2698:function(s,n,a){"use strict";a.r(n);var e=a(9),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一-基于zabbix监控系统设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-基于zabbix监控系统设计"}},[s._v("#")]),s._v(" 一：基于Zabbix监控系统设计")]),s._v(" "),e("h3",{attrs:{id:"一-软件版本介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-软件版本介绍"}},[s._v("#")]),s._v(" (一)：软件版本介绍")]),s._v(" "),e("ul",[e("li",[s._v("整体架构截图")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1784),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("基于Zabbix Server + Zabbix Proxy + Zabbix Agent 监控平台(5.0版本)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\t由于服务器主机在机房，每个机房有几千台主机的规模，因此在Zabbix的基础之上，选择Zabbix Proxy代理，Zabbix Proxy代理的主要功能是降低Zabbix Server端的负载。Agent端直接上报数据给Proxy端，Proxy端接收数据后写入到本地数据库，\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("Zabbix Server端的进程种类("),e("a",{attrs:{href:"https://www.dazhuanlan.com/2019/09/26/5d8bff65197c9/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Zabbix Server端配置参数"),e("OutboundLink")],1),s._v(")")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  Zabbix服务器端进程有多达二十多种（当我们在操作系统下用ps –ef命令来查看时，往往看到很多zabbix系统进程，而这些系统进程在zabbix内部称为实例。这些实例各处负责不同的工作，就形成了不同种类型的进程)，各种类型进程的说明如下:\n  \n\t1: alerter: 负责发送告警通知\n\t2：configuration syncer: 用于将配置文件中的配置信息同步到内存中缓存\n\t3：data sender：在zabbix proxy端用于向zabbix server端发送数据的进程\n\t4：discoverer：用于自动发现设备的进程\n\t5：escalator：用于处理动作中的步骤的进程\n\t6：heartbeat sender：在zabbix proxy端用于发送心跳信息\n\t7：history syncer：用于写历史数据表\n\t8：housekeeper：用于清理过期的历史数据的进程\n\t9：http poller：用于轮询web类的监控项目\n\t10：icmp pinger：用于定期的进行ICMP PING检查\n\t11：ipmi poller：用于定期进行ipmi监控项目的检查\n\t12：java poller：用于轮询java 监控项目\n\t13：poller：用于普通的被动监控项目的轮询\n\t14：proxy poller：用于服务器代理的被动轮询\n\t15：self-monitoring：用于收集Zabbix系统内部的监控信息\n\t16：timer：用于处理触发器中与时间相关的函数和维护模式的进程\n\t17：trapper：用于处理主动采集、trapper类型上报数据以及分布式节点间或服务器代理的通信\n\t18：unreachable poller：用于轮询不可到达到的设备\n\t19：task manager：手动关闭问题的进程\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h3",{attrs:{id:"二-server端、proxy端、agent端调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-server端、proxy端、agent端调优"}},[s._v("#")]),s._v(" (二)：Server端、Proxy端、Agent端调优")]),s._v(" "),e("ul",[e("li",[s._v("Server端调优")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("LogFile=/var/log/zabbix/zabbix_server.log\nLogFileSize=0\nPidFile=/var/run/zabbix/zabbix_server.pid\nSocketDir=/var/run/zabbix\nDBName=zabbix\nDBUser=zabbix\nDBPassword=zHAs3erVUnD0DkJz\nSNMPTrapperFile=/var/log/snmptrap/snmptrap.log\nTimeout=30\nAlertScriptsPath=/usr/lib/zabbix/alertscripts\nExternalScripts=/usr/lib/zabbix/externalscripts\nFpingLocation=/usr/bin/fping\nFping6Location=/usr/bin/fping6\nLogSlowQueries=3000\nStatsAllowedIP=127.0.0.1\n\n# 被动监控的进程\nStartPollers=5\n# 预处理进程\nStartPreprocessors=10\n# 主动监控的进程\nStartTrappers=100\n# 告警进程\nStartAlerters=5\n# 过期数据2小时清理一次\nHousekeepingFrequency=2\n# 清理数据最大100000\nMaxHousekeeperDelete=1000000\n# 获取配置信息、item信息等缓存大小，管理的主机越多，值越大\nCacheSize=8G\n# 将缓存数据同步到数据库的进程\nStartDBSyncers=100\n# 设置划分多少共享内存用于存储采集的历史数据，此数值越大，数据库读压力越小\nHistoryCacheSize=2G\n# 历史数据索引\nHistoryIndexCacheSize=2G\n# 趋势数据缓存大小\nTrendCacheSize=1G\n# 历史数据缓存大小\nValueCacheSize=1G\n# 与proxy通信的进程\nStartProxyPollers=10\n# 启动的low level discovery 进程\nStartLLDProcessors=100\n# 告警升级的进程\nStartEscalators=10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br")])]),e("ul",[e("li",[s._v("Proxy端调优（只有主动监控）")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Server=10.102.0.4\nServerPort=10051\n# 名称与zabbix代理中的名称一致\nHostname=Zabbix proxy\nListenPort=10051\nLogFile=/var/log/zabbix/zabbix_proxy.log\nLogFileSize=0\nPidFile=/var/run/zabbix/zabbix_proxy.pid\nSocketDir=/var/run/zabbix\nDBHost=127.0.0.1\nDBName=zabbix\nDBUser=zabbix\nDBPassword=zHAs3erVUnD0DkJz\nSNMPTrapperFile=/var/log/snmptrap/snmptrap.log\nExternalScripts=/usr/lib/zabbix/externalscripts\nFpingLocation=/usr/bin/fping\nFping6Location=/usr/bin/fping6\nLogSlowQueries=3000\nStatsAllowedIP=127.0.0.1\n\n\n# Proxy调优\n# zabbix proxy暂存在本地mysql的监控数据的时间，0为不存储\nProxyLocalBuffer=0\n# zabbix proxy无法连接到zabbix server，数据存储的时间，默认是1小时\nProxyOfflineBuffer=1\n# Zabbix server检查proxy是否可用的时间间隔,默认是1分钟\nHeartbeatFrequency=60\n# proxy从Zabbix server收集items配置信息的时间间隔，设置为60秒\nConfigFrequency=60\n# proxy发送收集的监控数据到Zabbix server的时间间隔, 设置为5秒\nDataSenderFrequency=1\n# 处理数据的进程数为5，默认是5，属于被动监控\nStartPollers=30\n# 不启用IPMIPollers\nStartIPMIPollers=0\n# 预处理进程，默认是3\nStartPreprocessors=3\n# 不可达数据轮询进程，默认是1\nStartPollersUnreachable=1\n# agent端主动连接和server端主动连接进程\nStartTrappers=80\n# IPMI ping进程1个\nStartPingers=1\n# 自动发现进程1个\nStartDiscoverers=1\n# web监控1个\nStartHTTPPollers=1\n# 是否启用java网关\nStartJavaPollers=0\n# 1个小时清理一次过期数据\nHousekeepingFrequency=1\n# 存储配置数据的缓存大小\nCacheSize=7G\n# 存数据同步到数据库，默认是4，设置为20\nStartDBSyncers=30\n# 历史数据的缓存\nHistoryCacheSize=1024M\n# 历史数据索引的缓存\nHistoryIndexCacheSize=256M\n# agent数据的超时时长\nTimeout=30\n# trapper数据的超时时长\nTrapperTimeout=300\n# 多长时间认为一台主机不在线\nUnreachablePeriod=45\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br")])]),e("ul",[e("li",[s._v("Proxy端调优（有主动也有被动）")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Server=10.102.0.4\nServerPort=10051\nHostname=Zabbix-proxy-4-2\nListenPort=10051\nLogFile=/var/log/zabbix/zabbix_proxy.log\nLogFileSize=0\nPidFile=/var/run/zabbix/zabbix_proxy.pid\nSocketDir=/var/run/zabbix\nDBHost=127.0.0.1\nDBName=zabbix_proxy\nDBUser=zabbix_proxy\nDBPassword=zabbix_proxy\nSNMPTrapperFile=/var/log/snmptrap/snmptrap.log\nTimeout=4\nExternalScripts=/usr/lib/zabbix/externalscripts\nFpingLocation=/usr/bin/fping\nFping6Location=/usr/bin/fping6\nLogSlowQueries=3000\nStatsAllowedIP=127.0.0.1\n\n# Proxy调优\n# zabbix proxy暂存在本地mysql的监控数据的时间，0为不存储\nProxyLocalBuffer=0\n# zabbix proxy无法连接到zabbix server，数据存储的时间，默认是1小时\nProxyOfflineBuffer=1\n# Zabbix server检查proxy是否可用的时间间隔,默认是1分钟\nHeartbeatFrequency=60\n# proxy从Zabbix server收集items配置信息的时间间隔，设置为60秒\nConfigFrequency=60\n# proxy发送收集的监控数据到Zabbix server的时间间隔, 设置为5秒\nDataSenderFrequency=5\n#DataSenderFrequency=1\n# 处理数据的进程数为5，默认是5，属于被动监控\nStartPollers=60\n# 不启用IPMIPollers\nStartIPMIPollers=0\n# 预处理进程，默认是3\nStartPreprocessors=3\n# 不可达数据轮询进程，默认是1\nStartPollersUnreachable=1\n# agent端主动连接和server端主动连接进程\nStartTrappers=50\n# IPMI ping进程1个\nStartPingers=1\n# 自动发现进程1个\nStartDiscoverers=1\n# web监控1个\nStartHTTPPollers=1\n# 是否启用java网关\nStartJavaPollers=0\n# 1个小时清理一次过期数据\nHousekeepingFrequency=1\n# 存储配置数据的缓存大小\nCacheSize=8G\n# 存数据同步到数据库，默认是4，设置为20\nStartDBSyncers=30\n# 历史数据的缓存\nHistoryCacheSize=2G\n# 历史数据索引的缓存\nHistoryIndexCacheSize=1G\n# agent数据的超时时长\nTimeout=4\n# trapper数据的超时时长\nTrapperTimeout=300\n# 多长时间认为一台主机不在线\nUnreachablePeriod=45\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br")])]),e("ul",[e("li",[s._v("Agent端(只开启主动模式)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("PidFile=/var/run/zabbix/zabbix_agentd.pid\nLogFile=/var/log/zabbix/zabbix_agentd.log\nLogFileSize=0\nDenyKey=system.run[*]\n# 代理的地址\nServerActive=10.102.0.1\nHostname=xb-cl01-se-000-003\nHostMetadata=seal\nInclude=/etc/zabbix/zabbix_agentd.d/*.conf\nStartAgents=0\nTimeout=30\n\n# 自定义脚本\nUserParameter=linux.discovery[*],/usr/bin/python /etc/zabbix/linux_info.py -a $1 -i $2\nUserParameter=linux.io[*],/usr/bin/python /etc/zabbix/linux_info.py -a $1 -i $2 -t $3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("ul",[e("li",[s._v("Agent端(主动 + 被动)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("PidFile=/var/run/zabbix/zabbix_agentd.pid\nLogFile=/var/log/zabbix/zabbix_agentd.log\nLogFileSize=0\nDenyKey=system.run[*]\n# 代理的地址\nServer=10.102.0.14\nServerActive=10.102.0.14\nHostname=xb-cl01-st-056-007\nHostMetadata=st-se\nInclude=/etc/zabbix/zabbix_agentd.d/*.conf\nStartAgents=3\nTimeout=30\n\nUserParameter=linux.discovery[*],/usr/bin/python /etc/zabbix/linux_info.py -a $1 -i $2\nUserParameter=linux.io[*],/usr/bin/python /etc/zabbix/linux_info.py -a $1 -i $2 -t $3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"二-zabbix-proxy-代理配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-zabbix-proxy-代理配置"}},[s._v("#")]),s._v(" 二：Zabbix Proxy 代理配置")]),s._v(" "),e("h3",{attrs:{id:"一-创建zabbix代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-创建zabbix代理"}},[s._v("#")]),s._v(" (一)：创建zabbix代理")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1785),alt:"Alt text"}})]),s._v(" "),e("h3",{attrs:{id:"二-代理配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-代理配置"}},[s._v("#")]),s._v(" (二)：代理配置")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1786),alt:"Alt text"}})]),s._v(" "),e("h3",{attrs:{id:"三-创建被监控主机的时候-选择由代理监控主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-创建被监控主机的时候-选择由代理监控主机"}},[s._v("#")]),s._v(" (三)：创建被监控主机的时候，选择由代理监控主机")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1787),alt:"Alt text"}})]),s._v(" "),e("h2",{attrs:{id:"三-zabbix-low-level-discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-zabbix-low-level-discovery"}},[s._v("#")]),s._v(" 三：Zabbix Low Level Discovery")]),s._v(" "),e("h3",{attrs:{id:"一-lld主要是给zabbix推送宏变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-lld主要是给zabbix推送宏变量"}},[s._v("#")]),s._v(" (一)：LLD主要是给zabbix推送宏变量")]),s._v(" "),e("ul",[e("li",[s._v("基于模板创建自动发现规则")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1788),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("以创建一个"),e("code",[s._v("Linux Disk")]),s._v("类型的规则为例，目的是获取当前主机需要被监控的磁盘")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1789),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("在过滤器中指定宏变量名称")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1790),alt:"Alt text"}})]),s._v(" "),e("ul",[e("li",[s._v("在agent配置文件中执行zabbix_get命令输出结果如下(输出的宏变量未去重)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('root@west-yw4-1:/etc/zabbix# zabbix_get -s localhost -k \'linux.discovery[disk,type]\'\n{"data": [{"{#DISK}": "sda"}, {"{#DISK}": "sdb"}, {"{#DISK}": "sda"}, {"{#DISK}": "sdb"}]}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);