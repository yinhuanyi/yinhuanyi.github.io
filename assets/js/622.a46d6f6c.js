(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{2700:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一-告警脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-告警脚本"}},[s._v("#")]),s._v(" 一：告警脚本")]),s._v(" "),n("h3",{attrs:{id:"一-告警脚本定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-告警脚本定义"}},[s._v("#")]),s._v(" (一)：告警脚本定义")]),s._v(" "),n("ul",[n("li",[s._v("在zabbix server端配置文件zabbix_server.conf中，设定"),n("code",[s._v("AlertScriptsPath")]),s._v("为")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("AlertScriptsPath=/usr/lib/zabbix/alertscripts\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("因此，之前定义了告警脚本的名称为："),n("code",[s._v("zabbix_feishu_alarm.py")]),s._v(", 那告警脚本在zabbix server端的路径就是："),n("code",[s._v("/usr/lib/zabbix/alertscripts/zabbix_feishu_alarm.py")])])]),s._v(" "),n("h3",{attrs:{id:"二-告警脚本内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-告警脚本内容"}},[s._v("#")]),s._v(" (二)：告警脚本内容")]),s._v(" "),n("ul",[n("li",[s._v("zabbix_feishu_alarm.py代码如下")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import sys\nimport requests\nimport re\n\n\n\n\nif __name__ == '__main__':\n    subject = sys.argv[1]\n    content = sys.argv[2]\n    # 可以选择的值：Warning or Disaster\n    level = sys.argv[3]\n    # 可以选择的值：Alarm or Recovery or Ack\n    condition = sys.argv[4]\n    \n    item_id = re.search(r'告警指标ID：(\\d+)', content).group(1)\n    try:\n        event_id = re.search(r'事件ID：(\\d+)', content).group(1)\n    except Exception:\n        event_id = None\n    payload = {'subject': subject, 'content': content, 'item_id': item_id}\n\n    if level == 'Warning' and condition == 'Alarm':\n        if event_id:\n            payload['event_id'] = event_id\n        requests.get('http://10.102.0.11:8000/monitor/alarm_warning/', params=payload)\n\n    elif level == 'Warning' and condition == 'Recovery':\n        requests.get('http://10.102.0.11:8000/monitor/recovery_warning/', params=payload)\n\n    elif level == 'Warning' and condition == 'Ack':\n        requests.get('http://10.102.0.11:8000/monitor/ack_warning/', params=payload)\n\n    elif level == 'Disaster' and condition == 'Alarm':\n        if event_id:\n            payload['event_id'] = event_id\n        requests.get('http://10.102.0.11:8000/monitor/alarm_disaster/', params=payload)\n\n    elif level == 'Disaster' and condition == 'Recovery':\n        requests.get('http://10.102.0.11:8000/monitor/recovery_disaster/', params=payload)\n\n    elif level == 'Disaster' and condition == 'Ack':\n        requests.get('http://10.102.0.11:8000/monitor/ack_disaster/', params=payload)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("ul",[n("li",[n("code",[s._v("zabbix_feishu_alarm.py")]),s._v(" 思想")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\t①：由于无论是 告警、恢复告警、确认告警 都会调用告警脚本，且传递四个参数。第一个参数是告警主题，第二个参数是告警内容、第三个参数是告警级别、第四个参数是告警类型\n\t\n\t②：告警主题和告警内容都是在动作中定义的，告警级别和告警类型是在媒介中定义的\n\n\t③：告警级别有：Warning、Disaster。告警类型有：Alarm、 Recovery、Ack\n\n\t④：一个Warning级别的trigger，会触发 Warning Alarm 动作\n\t\t1：将告警主题和内容发送给对应的人，对应的人调用自己所拥有的媒介，发出告警\n\t\t2：媒介中会指定/usr/lib/zabbix/alertscripts/脚本的名称，以及给脚本传递的参数\n\t\t3：脚本会对参数进行判断，基于参数的内容，调用Fil Manager的接口\n\t\t4：在Fil Manager中，不同的接口会有不同的处理方法，这里是将消息发送到飞书中，带上当前的监控项截图\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);