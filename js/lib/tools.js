/*
 * 颜色集合
 */
define("color", function() {
	var color = {
		white: "#ffffff",
		ashen: "#d9d6c3",
		silver: "#a1a3a6",
		gray: "#555555",
		black: "#21242b",
		red: "#e51400",
		crimson: "#a20025",
		green: "#60a917",
		blue: "#00aff0",
		yellow: "#e3c800",
		yellowish: "#dec674",
		gold: "#fffcb0",
		orange: "#fa6800",
		apricot: "#fab27b",
		brownness: "#843900",
		colormoment: "#f7acbc",
		cherry: "#feeeed",
		roseous: "#f05b72",
		redplum: "#f69c9f",
		lime: "#a4c400",
		whitegreen: "#cde6c7",
		inst: "#90d7ec",
		cyan: "#1ba1e2",
		emerald: "#008a00",
		teal: "#00aba9",
		cobalt: "#0050ef",
		indigo: "#6a00ff",
		violet: "#aa00ff",
		pink: "#dc4fad",
		magenta: "#d80073",
		amber: "#f0a30a",
		brown: "#825a2c",
		olive: "#6d8764",
		steel: "#647687",
		mauve: "#76608a",
		taupe: "#87794e",
		dark: "#333333",
		darker: "#222222",
		darkBrown: "#63362f",
		darkCrimson: "#640024",
		darkMagenta: "#81003c",
		darkIndigo: "#4b0096",
		darkCyan: "#1b6eae",
		darkCobalt: "#00356a",
		darkTeal: "#004050",
		darkEmerald: "#003e00",
		darkGreen: "#128023",
		darkOrange: "#bf5a15",
		darkRed: "#9a1616",
		darkPink: "#9a165a",
		darkViolet: "#57169a",
		darkBlue: "#16499a",
		lightBlue: "#4390df",
		lightRed: "#ff2d19",
		lightGreen: "#7ad61d",
		lighterBlue: "#00ccff",
		lightTeal: "#45fffd",
		lightOlive: "#78aa1c",
		lightOrange: "#c29008",
		lightPink: "#f472d0",
		grayDark: "#333333",
		grayDarker: "#222222",
		grayLight: "#999999",
		grayLighter: "#eeeeee",
		ink: "#464547",
		lightWhite: "#f6f5ec"
	};
	color.error = "#a20025"
	color.warn = "#fa6800"
	color.success = "#60a917"
	color.info = "#1ba1e2"
	return color;
});
/*
 * document.title
 */
define("title", function() {
	return function(title) {
		title === undefined && (title = document.title);
		var bus_name = window.appConfig && appConfig.site_info && appConfig.site_info.info.title;
		if (title.indexOf(bus_name) === -1) {
			document.title = title + (title ? ("-" + bus_name) : bus_name);
		} else {
			document.title = title
		}
	}
});
/*浏览器判断工具*/
define("browser", function() {
	var tool = {
		isMobile: function(_mobileAgent) {
			var mobileAgent = _mobileAgent || ["iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire", "ucbrowser"];
			var browser = navigator.userAgent.toLowerCase();
			var isMobile = false;
			for (var i = 0; i < mobileAgent.length; i++) {
				if (browser.indexOf(mobileAgent[i]) != -1) {
					isMobile = true;
					break;
				}
			}
			return isMobile;
		}
	}
	return tool;
});
/*
 * queryString处理工具
 */
;
(function() {
	define("queryString", function() {
		function QueryString(url) {
			if (!(this instanceof QueryString)) {
				return new QueryString(url)
			}
			this.init(url);
		};
		QueryString.prototype = {
			init: function(url) {
				url || (url = location.search);
				var queryStr = url.substr(url.indexOf("?") + 1);
				this._init_queryStr(queryStr);
			},
			_init_queryStr: function(queryStr) {
				var queryList = queryStr.split("&");
				var queryHash = {};
				for (var i = 0, queryInfo, len = queryList.length; i < len; i += 1) {
					if (queryInfo = queryList[i]) {
						queryInfo = queryInfo.split("=");
						if (queryInfo[1]) {
							queryHash[queryInfo[0]] = decodeURIComponent(queryInfo[1]);
						}
					}
				}
				this.queryHash = queryHash;
			},
			get: function(key) {
				var queryHash = this.queryHash || {};
				return queryHash[key];
			},
			set: function(key, value) {
				var queryHash = this.queryHash || (this.queryHash = {});
				queryHash[key] = value;
			},
			toSting: function(origin) {
				origin || (origin = location.origin);
				var queryHash = this.queryHash || {};
				var queryStr = "";
				for (var key in queryHash) {
					if (queryHash.hasOwnProperty(key)) {
						queryStr += (key + "=" + encodeURIComponent(queryHash[key]));
					}
				}
				var url = origin + "?" + queryStr;
			}
		}
		return QueryString;
	});
	/*
	 * 数据核心工具，用于处理数据
	 */
	;
	(function() {
		/*
		 * 数据解析工具
		 */
		var dataFormat = function(success, error) {
			error || (error = function() {});
			return function(data, textStatus, jqXHR) {
				switch (data.type) {
					case "json":
						try {
							var result = $.parseJSON(data.toString);
						} catch (e) {
							data.error = e;
							error.call(this, "JSON Parse Error" /*解析错误*/ , jqXHR);
							return;
						}
						data.result = result;
						success.apply(this, arguments);
						break;
					case "html":
						data.result = jQuery(data.toString);
						success.apply(this, arguments);
						break;
					case "template":
						data.result = jSouper.parse(data.toString);
						success.apply(this, arguments);
						break;
					case "error":
						// data.error = result;
						var result = $.parseJSON(data.toString);
						error.call(this, result.errorCode, jqXHR, result.errorMsg, data)
						break;
					default: //JSON without error
						try {
							var result = $.parseJSON(data.toString);
						} catch (e) {}
						data.result = result;
						success.apply(this, arguments);
						break;
				}
			}
		};
		define("dataFormat", function() {
			return dataFormat
		});
		//判断是否支持跨域
		function can_co(method, url) {
			var result = false;
			if (window.XMLHttpRequest && "withCredentials" in (new XMLHttpRequest)) {
				result = true;
			}
			return result
		}
		if (can_co()) { //老旧浏览器的数据请求解决方案
			/*
			 * 基于jQ的跨域ajax工具函数
			 */
			define("coAjax", ["jQuery"], function($) {
				var ajax = {
					_addCookiesInUrl: function(url) {
						// if(url.indexOf("?")==-1){
						// 	url+="?"
						// }else{
						// 	url+="&"
						// }
						// url += "cors_cookie="+encodeURI(document.cookie);
						return url;
					},
					get: function(url, data, success, error, net_error) {
						url = ajax._addCookiesInUrl(url);
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						return $.ajax({
							url: url,
							data: data,
							success: dataFormat(success, error),
							error: net_error,
							xhrFields: {
								withCredentials: true
							}
						});
					},
					post: function(url, data, success, error, net_error) {
						url = ajax._addCookiesInUrl(url);
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						return $.ajax({
							url: url,
							type: "post",
							data: data,
							success: dataFormat(success, error),
							error: net_error,
							xhrFields: {
								withCredentials: true
							}
						});
					},
					put: function(url, data, success, error, net_error) {
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						url = ajax._addCookiesInUrl(url);
						return $.ajax({
							url: url,
							type: "put",
							data: data,
							success: dataFormat(success, error),
							error: net_error,
							xhrFields: {
								withCredentials: true
							}
						});
					},
					"delete": function(url, data, success, error, net_error) {
						url = ajax._addCookiesInUrl(url);
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						return $.ajax({
							url: url,
							type: "delete",
							data: data,
							success: dataFormat(success, error),
							error: net_error,
							xhrFields: {
								withCredentials: true
							}
						});
					}
				};
				return ajax;
			});
		} else {
			/*
			 * 以及jsonp的跨域请求方式
			 */
			define("coAjax", ["Cookies", "shim_json", "queryString"], function(Cookies, JSON, QueryString) {
				var format_back_data = function(info) {
					var cookies = info.cookies;
					for (var key in cookies) {
						if (cookies.hasOwnProperty(key)) {
							Cookies.set(key, cookies[key]);
						}
					}
				};
				var jsonp = {
					_form_data: function(url, method, data) { //method:GET POST PUT DELETE;data:JSON
						// //更新Cookie解析的缓存
						// Cookies.get();
						var json = JSON.stringify({
							// cookies:Cookies._cache,
							method: method,
							query: (new QueryString(url)).queryHash,
							data: data //
						});
						return url.replace(appConfig.server_url, appConfig.server_url + "jsonp/") + "?_=" + (+new Date) + "&co_data=" + encodeURIComponent(json);
					},
					_cb_funs: {},
					_register: function(cb) {
						var hash = Math.random().toString().substr(2);
						jsonp._cb_funs[hash] = cb;
						return hash;
					},
					get: function(url, data, success, error, net_error) {
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						var co_url = jsonp._form_data(url, "get", data);
						require([co_url], dataFormat(success, error), net_error);
						// console.log(co_url);
					},
					post: function(url, data, success, error, net_error) {
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						var co_url = jsonp._form_data(url, "post", data);
						require([co_url], dataFormat(success, error), net_error);
						// console.log(co_url);
					},
					put: function(url, data, success, error, net_error) {
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						var co_url = jsonp._form_data(url, "put", data);
						require([co_url], dataFormat(success, error), net_error);
						// console.log(co_url);
					},
					"delete": function(url, data, success, error, net_error) {
						if (data instanceof Function) {
							net_error = error;
							error = success;
							success = data;
							data = {};
						};
						var co_url = jsonp._form_data(url, "delete", data);
						require([co_url], dataFormat(success, error), net_error);
						// console.log(co_url);
					}
				}
				return jsonp;
			});
		}
	}());
	define("page_onload", function() {
		var _aNode = document.createElement("a");
		var load = {
			_pages: {},
			register: function(pathname, fun) {
				_aNode.href = pathname;
				pathname = _aNode.pathname;
				load._pages[pathname] = fun;
				if (location.pathname == pathname) {
					load.emit(pathname);
				}
				if (pathname === "/*") {
					load.emit("/*");
				}
			},
			emit: function(pathname) {
				_aNode.href = pathname;
				pathname = _aNode.pathname;
				var foo = load._pages[pathname];
				if (foo) {
					foo();
				}
				if (pathname !== "/*") {
					load._pages["/*"] && load._pages["/*"]();
				}
			}
		}
		return load;
	})
	/*
	 * 常用地址工具
	 */
	define("href", ["jSouper", "page_onload", "jQuery", "title"], function(jSouper, page_onload, $, title) {
		var href = {
			toLogin: function() {
				// location.href = "http://"+location.host+"/sign_in.html?id=1&cb_url="+encodeURIComponent(location.href);
				href.jump("/sign_in.html?id=1&cb_url=" + encodeURIComponent(location.href))
			},
			toBusLogin: function() {
				// location.href = "http://"+location.host+"/admin-login.html?id=1&cb_url="+encodeURIComponent(location.href);
				href.jump("/admin-login.html?id=1&cb_url=" + encodeURIComponent(location.href))
			},
			toMain: function() {
				// location.href = "http://"+location.host+"/main-beta.html";
				href.jump("/main-beta.html")
			}
		}

		function fire_onlad() {
			window.onmypageload && window.onmypageload();
		}
		if (window.history && history.pushState) {
			var _ajax_get_page;
			var first_state = {
				current_url: location.href
			};
			history.replaceState(first_state, document.title);
			var _map_cache = {};
			var ScriptLinkNodeString = /<script[^>]*?src=([\'\"\"])([^\'\"\"]*?)\1[^>]*?>/gi;
			var ScriptNodeString = /<script[^>]*>([\s\S]*?)<\/script>/gi;
			var LinkNodeString = /<link[^>]*?href=([\'\"\"])([^\'\"\"]*?)\1[^>]*?>/gi;
			var BodyNodeString = /<body[^>]*>([\s\S]*?)<\/body>/gi;
			var TitleNodeString = /<title[^>]*>([\s\S]*?)<\/title>/gi;
			var _aNode = document.createElement("a");
			var _aNode_1 = document.createElement("a");
			var mobile_jump;
			href.jump = function(url, no_pushState, method) {
				url = (mobile_jump || (mobile_jump = require("mobile_jump"))).parse(url);
				_aNode.href = url;
				url = _aNode.href;
				var current_state = {
					before_url: location.href,
					current_url: url
				};
				method || (method = "pushState");
				var location_pathname = location.pathname;
				if (no_pushState) {
					_aNode_1.href = no_pushState;
					var location_pathname = _aNode_1.pathname;
				}
				if ((_aNode.pathname === location_pathname) && (!no_pushState) || (_ajax_get_page && _ajax_get_page.__pathname === _aNode.pathname)) {
					//默认的HASH触发
					history[method](current_state, null, url);
					return;
				}
				//缓存当前页面
				var _current_cache = _map_cache[location_pathname] || (_map_cache[location_pathname] = {
					title: document.title,
					app: App
				});
				_current_cache.nodes = Array.prototype.slice.call(document.body.childNodes);
				//获取下一个页面的缓存
				var _next_cache = _map_cache[_aNode.pathname];
				//中断前一个AJAX请求（可能误触）
				if (_ajax_get_page) {
					_ajax_get_page.abort();
				}
				var url = _aNode.href;
				//有缓存就用缓存的，没有就直接请求
				if (_next_cache) {
					!no_pushState && history[method](current_state, "加载中……", url);
					_current_cache.nodes.forEach(function(node) {
						document.body.removeChild(node);
					});

					window.App = _next_cache.app;

					_next_cache.nodes.forEach(function(node) {
						document.body.appendChild(node);
					});
					var jSouperAppNode = document.getElementById("jSouperApp")
					jSouperAppNode && (jSouperAppNode.style.display = "block");

					title(_next_cache.title);
					page_onload.emit(_aNode.pathname);
					return false;
				} else {
					_ajax_get_page = $.ajax({
						url: url,
						type: 'get',
						beforeSend: function() {},
						error: function(request) {},
						success: function(data) {
							!no_pushState && history[method](current_state, "加载中……", url);

							var $cacheHTML = $(data);
							//解析jSouper Body
							var page_vm;
							data.replace(BodyNodeString, function(outerHTML, innerHTML) {
								page_vm = jSouper.parse(innerHTML)(App.getModel());
							});
							if (!page_vm) {
								location.href = url;
							}
							window.App = page_vm;

							//加载JS文件、运行JS嵌套脚本
							var _scriptSrc = []
							data.replace(ScriptLinkNodeString, function(outerHTML, strq, scriptSrc) {
								_scriptSrc.push(scriptSrc);
							});
							// console.log(_scriptSrc);
							var _scriptFoo = []
							data.replace(ScriptNodeString, function(outerHTML, scriptText) {
								if (scriptText.trim()) {
									try {
										_scriptFoo.push(Function(scriptText));
									} catch (e) {
										location.href = url;
									}
								}
							});
							require(_scriptSrc, function() {
								_scriptFoo.forEach(function(foo) {
									try {
										foo()
									} catch (e) {
										location.href = url;
									}
								});
							});
							//加载CSS文件
							data.replace(LinkNodeString, function(outerHTML, strq, linkHref) {
								require(["r_css!" + linkHref]);
							});

							//准备就绪
							_current_cache.nodes.forEach(function(node) {
								document.body.removeChild(node);
							});

							page_vm.append(document.body);
							var jSouperAppNode = document.getElementById("jSouperApp")
							jSouperAppNode && (jSouperAppNode.style.display = "block");

							data.replace(TitleNodeString, function(outerHTML, titleText) {
								title(titleText);
							});
							// page_onload.emit(_ajax_get_page.pathname);//初始化的时候会自动触发
							_ajax_get_page = null;
						}
					});
					_ajax_get_page.__pathname = _aNode.pathname;
				}
				return false;
			}
			window.addEventListener("popstate", function(e) {
				var state = e.state || history.state;
				// console.log(state);
				if (state) {
					href.jump(location.href, state.current_url);
				}
			});
			href.replace = function(url) {
				href.jump(url, null, "replaceState");
			};
		} else {
			href.jump = function(url) {
				location.href = url;
			}
			href.replace = href.jump;
		}
		return href;
	});
	/*
	 * 通用的单页HASH路由功能
	 */
	define("hash_routie", ["queryString"], function(QueryString) {
		function hash_routie(config) {
			var base_HTML_url = config.html_url;
			var base_js_url = config.js_url;
			var common_hash = config.hash_prefix;
			var default_hash = config.default_hash;
			var tele_name = config.teleporter;
			require(["routie", "jSouper"], function(routie, jSouper) {
				/*
				 * HASH路由
				 */
				var _viewModules = {};

				function _routie_common(key) {
					key = hash_routie.get_pathname(key);
					jSouper.ready(function() {
						if (!key) {
							return;
						}
						var rightVM = _viewModules[key];
						// console.log(_viewModules,rightVM,key);
						if (!rightVM) {
							$.get(base_HTML_url + key + ".html", function success(html) {
								_viewModules[key] = rightVM = jSouper.parse(html)(App.getModel());
								App.teleporter(rightVM, tele_name);
							});
							require([base_js_url + key]);
						} else {
							App.teleporter(rightVM, tele_name);
							_on[key] && _on[key]();
						}
					});
				};
				var routie_config = {};
				routie_config[common_hash] = _routie_common;
				routie_config["*"] = function(hash) {
					var index = hash.indexOf("?")
					if (index !== -1) { //如果有参数，过滤参数
						_routie_common(hash.substring(0, index))
					}
					_routie_common(default_hash);
				}
				routie(routie_config);
			});
		}
		_on = {};
		hash_routie.on = function(key, cb) {
			_on[key] = cb;
			cb();
		}
		hash_routie.get_pathname = function(hash) {
			var index = hash.indexOf("?")
			if (index !== -1) { //如果有参数，过滤参数
				hash = hash.substring(0, index);
			}
			return hash;
		}
		hash_routie.hash = function(hashMap, clear) {
			if (!clear) {
				var queryString = new QueryString(location.hash);
				var queryHash = queryString.queryHash;
				//和原有HASH变量进行混合
				for (var key in queryHash) {
					if (queryHash.hasOwnProperty(key) && !hashMap.hasOwnProperty(key)) {
						hashMap[key] = queryHash[key];
					}
				}
			}
			var hash_str = "";
			for (var key in hashMap) {
				if (hashMap.hasOwnProperty(key)) {
					hash_str += "&" + key + "=" + encodeURIComponent(hashMap[key]);
				}
			}
			hash_str = hash_str.replace("&", "?");
			location.hash = hash_routie.get_pathname(location.hash) + hash_str;
		}
		return hash_routie;
	});


}());
/*通用翻页函数*/
define("jSouper_page", ["common", "hash_routie", "queryString"], function(jSouper, hash_routie, QueryString) {
	var _default_num = 10;
	var queryString = new QueryString();

	function _init() {
		var App = jSouper.App;
		App.set("$Event.__common__.pre_page", function(e, vm) {
			//被禁用
			var self = $(this);
			if (self.hasClass("disabled")) {
				return;
			}
			var _page = self.attr("jsouper-p-page");
			if (!_page) {
				queryString.init(location.hash);
				_page = ~~queryString.get("page") - 1 || 0;
			}
			var _num = self.attr("jsouper-p-num") || _default_num;

			hash_routie.hash({
				num: _num,
				page: _page
			});
		});
		App.set("$Event.__common__.next_page", function(e, vm) {
			//被禁用
			var self = $(this);
			if (self.hasClass("disabled")) {
				return;
			}
			var _page = self.attr("jsouper-p-page");
			if (!_page) {
				queryString.init(location.hash);
				_page = ~~queryString.get("page") + 1;
			}
			var _num = self.attr("jsouper-p-num") || _default_num;

			hash_routie.hash({
				num: _num,
				page: _page
			});
		});
		App.set("$Event.__common__.change_page", function(e, vm) {
			//被禁用
			var self = $(this);
			if (self.hasClass("disabled")) {
				return;
			}
			var _page = +self.attr("jsouper-p-page");
			if (isNaN(_page)) {
				console.log("分页参数错误");
				return;
			}
			var _num = self.attr("jsouper-p-num") || _default_num;

			hash_routie.hash({
				num: _num,
				page: vm.get("$Index")
			});
		});
		//仅仅初始化一次
		_init = function() {};
	}

	function _jSouper_page() {
		_init();
	}
	return _jSouper_page;
});
/*confirm*/
;
(function() {
	var _confirm = window.confirm;
	window.myConfirm = function(str, cb_true, cb_false) {
		cb_true || (cb_true = function() {});
		cb_false || (cb_false = cb_true);
		if (_confirm(str)) {
			cb_true();
		} else {
			cb_false();
		}
	}
}());
/*
 * 手机端跳转
 */
define("mobile_jump", ["browser", "href"], function(browser, href) {
	//手机端正确跳转
	var _mobile_page_map = {
			"/admin-login.html": "/m.admin-login.html",
			"/admin-beta.html": "/m.admin.html",
			"/all-goods-beta.html": "/m.all-goods.html",
			"/cart-beta.html": "/m.cart.html",
			"/goods-details.html": "/m.goods-details.html",
			"/help.html": "/m.help.html",
			"/sign_in.html": "/m.login.html",
			"/": "/m.main.html",
			"/main-beta.html": "/m.main.html",
			"/pay.beta.html": "/m.pays.html",
			"/personal-beta.html": "/m.personal.html",
			"/store-int.html": "/m.store-int.html"
		}
		//方向到PC
	var _pc_page_map = {};
	for (var i in _mobile_page_map) {
		_mobile_page_map.hasOwnProperty(i) && (_pc_page_map[_mobile_page_map[i]] = i);
	}

	function mobile_jump() {
		console.log("mobile_jump");
		if (browser.isMobile()) {
			var mobile_page = _mobile_page_map[location.pathname]
			if (mobile_page) {
				href.replace(mobile_page + location.search + location.hash);
			}
		} else {
			var pc_page = _pc_page_map[location.pathname]
			if (pc_page) {
				href.replace(pc_page + location.search + location.hash);
			}
		}
	}
	var _aNode = document.createElement("a");
	mobile_jump.parse = function(to_url) {
		_aNode.href = to_url;
		if (_aNode.host === location.host) {
			if (browser.isMobile()) {
				var mobile_page = _mobile_page_map[_aNode.pathname]
				if (mobile_page) {
					to_url = mobile_page + _aNode.search + _aNode.hash;
				}
			} else {
				var pc_page = _pc_page_map[_aNode.pathname]
				if (pc_page) {
					to_url = pc_page + _aNode.search + _aNode.hash;
				}
			}
		}
		return to_url;
	}
	return mobile_jump;
});
require(["mobile_jump"]);

define("serverNotify", ["SockJS", "dataFormat", "coAjax"], function(SockJS, dataFormat, coAjax) {
	var conns = {};
	return function(type) {
		type || (type = "user"); //默认是user类型
		if (conns[type]) { //同类型只能有一个sock连接
			return conns[type];
		}
		var event_cache = {};
		var exports = {
			_send_queue: function() {
				for (var i = 0, data; data = _send_queue[i]; i += 1) {
					sock.send(JSON.stringify(data));
				}
				_send_queue = [];
			},
			send: function(type, value) {
				// if (arguments.length == 1) {
				// 	value = type;
				// }
				var data = {
					type: type,
					value: value
				}
				_send_queue.push(data)
				if (_is_opened) {
					this._send_queue();
				}
			},
			on: function(eventName, fun) {
				var event_col = event_cache[eventName] || (event_cache[eventName] = []);
				event_col.push(fun);
			},
			emit: function(eventName, value) {
				var event_col = event_cache[eventName];
				if (event_col) {
					event_col.forEach(function(fun) {
						fun(value)
					});
				}
			}
		};
		var sock = new SockJS(appConfig.socketNotify);
		var _is_opened = false;
		var _send_queue = [];
		sock.onopen = function() {
			console.log('+Sock 连接已经打开');
			_is_opened = true;
			exports._send_queue();
		};
		var data_handle = dataFormat(function(result) {
			exports.emit(result.type, result.result)
		}, function(errorCode, xhr, errorMsg, result) {
			exports.emit(result.type + "-error", result.toString)
		});
		sock.onmessage = function(e) {
			console.log('message', e.data);
			try {
				var data = JSON.parse(e.data);
				data_handle(data);
			} catch (e) {
				exports.emit("error", e.data);
			}
		};
		sock.onclose = function() {
			// console.log('close');
			console.log('-Sock 连接已经断开');
			alert("warn", "与服务器的连接断开")
		};
		//获取连接密匙
		coAjax.post(appConfig.socketNotify_key, {
			type: type
		}, function(result) {
			var s_key = result.result.s_key;
			exports.send("init", {
				s_key: s_key
			});
			exports.on("init-success", function() {
				alert("success", "连接已建立");
			});
			exports.on("init-error", function(errorMsg) {
				alert("error", errorMsg);
			});
		});
		return (conns[type] = exports);
	}
});

define("eventManager", function() {
	var _eventCache = {};
	var _eventMap = {};
	return {
		is: function(check_obj, eventName, handle) {
			if (check_obj) {
				handle();
			} else {
				eventManager.on(eventName, handle);
			}
		},
		on: function(eventName, handle) {
			var eventList = _eventCache[eventName] || (_eventCache[eventName] = []);
			var _id = Math.random().substring(2);
			eventList.push(_eventMap[_id] = {
				_id: _id,
				handle: handle
			});
			return _id;
		},
		off: function(eventName, handle) {
			if (arguments.length === 1) {
				_id = eventName;
				var eventObj = _eventMap[_id];
				eventObj.handle = null;
			} else if (_eventCache.hasOwnProperty(eventName)) {
				var eventList = _eventCache[eventName];
				for (var i = 0, eventObj; eventObj = eventList[i]; i += 1) {
					if (eventObj.handle == handle) {
						eventObj.handle = null;
					}
				}
			}
		},
		fire: function(eventName) {
			if (_eventCache.hasOwnProperty(eventName)) {
				var eventList = _eventCache[eventName];
				for (var i = 0, eventObj; eventObj = eventList[i]; i += 1) {
					eventObj.handle && eventObj.handle();
				}
			}
		},
		clear: function(eventName) {
			if (_eventCache.hasOwnProperty(eventName)) {
				var eventList = _eventCache[eventName];
				for (var i = 0, eventObj; eventObj = eventList[i]; i += 1) {
					_eventMap[eventObj._id] = null;
				}
				eventList.length = 0;
			}
		}
	}
})