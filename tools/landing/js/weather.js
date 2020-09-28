/**
Copyright 2015 Bsharp Inc. http://bsharp.jp/
Licensed under GPL.
Download, Support: http://mamewaza.com/tools/
*/

var debug = function (obj, layer) {
	if (typeof (obj) != "object") {
		return obj;
	}

	var txt = "";
	layer = layer ? layer : 0;
	for (var i in obj) {
		for (var j = 0; j < layer; j++) {
			txt += "\t";
		}

		if (typeof (obj[i]) == "object") {
			txt += i + " :\n" + debug(obj[i], layer + 1);
		} else {
			txt += i + " : " + obj[i] + "\n";
		}
	}
	return txt;
};
window.onload = function () {
	var mamewaza_weather = function (conf) {
		var root = "https://mamewaza.net/",
			label2img = {
				"晴れ": 1, "晴時々曇": 2, "晴時々雨": 3, "晴時々雪": 4, "晴のち曇": 5,
				"晴のち雨": 6, "晴のち雪": 7, "曇": 8, "曇り": 8, "曇のち時々晴": 9, "曇時々晴": 9, "曇時々雨": 10,
				"曇時々雪": 11, "曇のち晴": 12, "曇のち雨": 13, "曇一時雨": 10, "曇のち雪": 14, "雨": 15,
				"雨時々晴": 16, "雨時々曇": 17, "雨時々雪": 18, "雨のち晴": 19, "雨のち曇": 20,
				"雨のち雪": 21, "暴風雨": 22, "雪": 23, "雪時々晴": 24, "雪時々曇": 25,
				"雪時々雨": 26, "雪のち晴": 27, "雪のち曇": 28, "雪のち雨": 29, "暴風雪": 30
			};
		if (!conf.region || !conf.region.toString().match(/^\d{6}$/)) {
			return "";
		}
		var set = function (e) {
			if ("object" != typeof e || "object" != typeof e.channel || "object" != typeof e.channel.item) {
				return "";
			}
			var t = -1 != conf.layout.indexOf("horizontal"),
				a = -1 != conf.layout.indexOf("Mini"),
				l = -1 != conf.layout.indexOf("Micro"),
				n = !a && !l,
				s = '<table class="mamewaza_weather">';
			if ("vertical" == conf.layout && (s += '<tr><th>日付</th><th>天気</th><th>最高<span class="mamewaza_weather_small">℃</span></th><th>最低<span class="mamewaza_weather_small">℃</span></th></tr>'), t) {
				if (n) {
					var c = {
						col1: "<th>日付</th>",
						col2: "<th>天気</th>",
						col3: '<th>最高<span class="mamewaza_weather_small">℃</span></th>',
						col4: '<th>最低<span class="mamewaza_weather_small">℃</span></th>'
					};
				} else {
					c = { col1: "", col2: "", col3: "", col4: "" };
				}
			}
			for (var r = e.channel.item, m = 0, o = 0; m < r.length; m++) {
				if ("PR" != r[m].category) {
					if ("1day" == conf.when && 1 == o || "2days" == conf.when && 2 == o) {
						break;
					}
					if (r[m].description && r[m].description.match(/(\d{2})日（(月|火|水|木|金|土|日)）の天気は([^、]+)、最高気温は([\d\.-]*)℃ (?:最低気温は([\d\.-]*)℃)?でしょう。/)) {
						var i = parseInt(RegExp.$1, 10).toString(), d = RegExp.$2, h = RegExp.$3, p = RegExp.$4, f = RegExp.$5, w = "&#xe" + (800 + label2img[h]).toString() + ";";
						if ("weekend" != conf.when || "土" == d || "日" == d) {
							var g = a ?
								i + '<span class="mamewaza_weather_small">' + d + "</span>"
								:
								i + '<span class="mamewaza_weather_small">日(' + d + ")</span>",
							y = l ?
								f || p ?
									f + "～" + p + '<span class="mamewaza_weather_small">℃</span>'
									:
									""
								:
								a ?
									'<span class="mamewaza_weather_small">' + h + "</span>"
									:
									h,
							u = "土" == d ?
								' class="mamewaza_weather_sat"'
								:
								"日" == d ?
								' class="mamewaza_weather_sun"'
								:
								"";
							t ? (c.col1 += "<td" + u + ">" + g + "</td>",
								c.col2 += '<td><span class="mamewaza_weather_icon">' + w + "</span><br />" + y + "</td>",
								a ?
									c.col3 += "<td>" +
									(f || p ?
										f + "～" + p + '<span class="mamewaza_weather_small">℃</span>'
										:
										""
									) +
									"</td>"
									:
									n && (c.col3 += "<td>" + p + "</td>", c.col4 += "<td>" + f + "</td>"))
								:
								(s += "<tr><td" + u + ">" + g + "</td><td" + (a ? u : "") + '><span class="mamewaza_weather_icon">' +
							w + "</span><br />" + y + "</td>", s += l ? "" : a ? "<td" + u + ">" + (f || p ? f + "～" + p + '<span class="mamewaza_weather_small">℃</span>' : "") + "</td>" : "<td>" + p + "</td><td>" + f + "</td>", s += "</tr>"),
							o++;
						}
					}
				}
			}
			t && (s += "<tr>" + c.col1 + "</tr><tr>" + c.col2 + "</tr>" + (c.col3 ? "<tr>" + c.col3 + "</tr>" : "") + (c.col4 ? "<tr>" + c.col4 + "</tr>" : "")), s += "</table>";
				var _ = document.createElement("span");
				_.innerHTML = (conf.explanation ? e.channel.description.replace(/[\r?\n]{2}/g, "<br />") : "") + '<a href="' + e.channel.link + '" target="_blank">' + e.channel.title + "</a>";
				var b = document.getElementsByClassName("mamewaza_weather_exp").item(0);
				b.insertBefore(_, b.childNodes.item(0)), b.style.display = "block", b.style.display = "inline-block", b.innerHTML = '横浜市の天気';
				var z = document.createElement("div");
				z.innerHTML = s;
				b.appendChild(z);
			},
			style_apply = function (e, t, a) {
				if (!e || !t || !a) return "";
				if ("function" == typeof a.addRule) {
					for (var l, n = [], s = new RegExp("([^\r\n:;]+):([^\r\n;]+?);", "g"); null != (l = s.exec(t));) {
						n.push(l[1].replace(/^ +| +$/g, "") + ":" + l[2].replace(/^ +| +$/g, ""));
					}
					for (var c = 0; c < n.length; c++) {
						if (n[c]) {
							try { a.addRule(e, n[c], 0)
							} catch (e) {

							}
						}
					}
				} else if ("function" == typeof a.insertRule) {
					try {
						a.insertRule(e + " { " + t + " }", 0)
					} catch (e) {

					}
				}
			},
			init = function () {
				if (conf.style) {
					var style = document.createElement("style"), sheet;
					style.setAttribute("title", "mamewaza_weather"), style.type = "text/css", document.getElementsByTagName("head").item(0).appendChild(style);
					for (var i = document.styleSheets.length - 1; i >= 0; i--) {
						if ("mamewaza_weather" == document.styleSheets.item(i).title) {
							sheet = document.styleSheets.item(i);
							break;
						}
					}
					for (var reg = new RegExp("([^{}]+){((?:[^{}]+{[^{}]+})+|[^{}]+);?}", "g"), matched; null != (matched = reg.exec(conf.style));) {
						style_apply(matched[1], matched[2], sheet)
					}
				}
				if (document.createStyleSheet) {
					document.createStyleSheet(root + "weather.css?170610");
				} else {
					var link = document.createElement("link");
					link.href = root + "weather.css?170610", link.rel = "stylesheet", link.type = "text/css", document.getElementsByTagName("head").item(0).appendChild(link)
				}
				var d = new Date, callback = "callback" + d.getFullYear().toString() + (d.getMonth() < 9 ? "0" : "") + (d.getMonth() + 1).toString() + (d.getDate() < 10 ? "0" : "") + d.getDate().toString() + Math.floor(d.getHours() / 6).toString();
				eval(callback + " = function(json) { set(json); }");
				var script = document.createElement("script");
				script.setAttribute("src", root + "/w/?area=" + conf.region + "&callback=" + callback), script.type = "text/javascript", document.getElementsByTagName("head").item(0).appendChild(script) };
		init()
	};

	mamewaza_weather(
		{
			layout: "horizontalMini",
			when: "7days",
			explanation: false,
			region: "140010",
			style: "div.mamewaza_weather > div{background-color: rgba(255,255,255,0.5);}div.mamewaza_weather th,div.mamewaza_weather td,div.mamewaza_weather div.mamewaza_weather_exp{padding:10px;}div.mamewaza_weather > div{padding:10px;border-radius:5px;-webkit-box-shadow:rgba(0,0,0,0.5) 0 0 5px;box-shadow:rgba(0,0,0,0.5) 0 0 5px;font-size:14px;}div.mamewaza_weather th,div.mamewaza_weather td{border:none;border-bottom:1px dashed #eeeeee; text-shadow: 0 0 10px #fff;}div.mamewaza_weather,div.mamewaza_weather a{color:#000;}div.mamewaza_weather span.mamewaza_weather_icon{color:inherit;font-size:36px;text-shadow:none;}div.mamewaza_weather div.mamewaza_weather_exp,div.mamewaza_weather div.mamewaza_weather_exp a{color:#000000;font-size:12px;}div.mamewaza_weather td.mamewaza_weather_sat,div.mamewaza_weather td.mamewaza_weather_sat span.mamewaza_weather_icon{color:#00f;}div.mamewaza_weather td.mamewaza_weather_sun,div.mamewaza_weather td.mamewaza_weather_sun span.mamewaza_weather_icon{color:#f00;}"
		}
	);
}
