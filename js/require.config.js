/*
 * 本地存储功能
 */
(function(window) {
    //准备模拟对象、空函数等
    var LS, noop = function() {},
        document = window.document,
        notSupport = {
            set: noop,
            get: noop,
            remove: noop,
            clear: noop,
            each: noop,
            obj: noop,
            length: 0
        };

    //优先探测userData是否支持，如果支持，则直接使用userData，而不使用localStorage
    //以防止IE浏览器关闭localStorage功能或提高安全级别(*_* 万恶的IE)
    //万恶的IE9(9.0.11）)，使用userData也会出现类似seesion一样的效果，刷新页面后设置的东西就没有了...
    //只好优先探测本地存储，不能用再尝试使用userData
    (function() {
        // 先探测本地存储 2013-06-06 马超
        // 尝试访问本地存储，如果访问被拒绝，则继续尝试用userData，注： "localStorage" in window 却不会返回权限错误
        // 防止IE10早期版本安全设置有问题导致的脚本访问权限错误
        if ("localStorage" in window) {
            try {
                LS = window.localStorage;
                return;
            } catch (e) {
                //如果报错，说明浏览器已经关闭了本地存储或者提高了安全级别
                //则尝试使用userData
            }
        }

        //继续探测userData
        var o = document.getElementsByTagName("head")[0],
            hostKey = window.location.hostname || "localStorage",
            d = new Date(),
            doc, agent;

        //typeof o.addBehavior 在IE6下是object，在IE10下是function，因此这里直接用!判断
        //如果不支持userData则跳出使用原生localStorage，如果原生localStorage报错，则放弃本地存储
        if (!o.addBehavior) {
            try {
                LS = window.localStorage;
            } catch (e) {
                LS = null;
            }
            return;
        }

        try { //尝试创建iframe代理，以解决跨目录存储的问题
            agent = new ActiveXObject('htmlfile');
            agent.open();
            agent.write('<s' + 'cript>document.w=window;</s' + 'cript><iframe src="/favicon.ico"></iframe>');
            agent.close();
            doc = agent.w.frames[0].document;
            //这里通过代理document创建head，可以使存储数据垮文件夹访问
            o = doc.createElement('head');
            doc.appendChild(o);
        } catch (e) {
            //不处理跨路径问题，直接使用当前页面元素处理
            //不能跨路径存储，也能满足多数的本地存储需求
            //2013-03-15 马超
            o = document.getElementsByTagName("head")[0];
        }

        //初始化userData
        try {
            d.setDate(d.getDate() + 36500);
            o.addBehavior("#default#userData");
            o.expires = d.toUTCString();
            o.load(hostKey);
            o.save(hostKey);
        } catch (e) {
            //防止部分外壳浏览器的bug出现导致后续js无法运行
            //如果有错，放弃本地存储
            //2013-04-23 马超 增加
            return;
        }
        //开始处理userData
        //以下代码感谢瑞星的刘瑞明友情支持，做了大量的兼容测试和修改
        //并处理了userData设置的key不能以数字开头的问题
        var root, attrs;
        try {
            root = o.XMLDocument.documentElement;
            attrs = root.attributes;
        } catch (e) {
            //防止部分外壳浏览器的bug出现导致后续js无法运行
            //如果有错，放弃本地存储
            //2013-04-23 马超 增加
            return;
        }
        var prefix = "p__hack_",
            spfix = "m-_-c",
            reg1 = new RegExp("^" + prefix),
            reg2 = new RegExp(spfix, "g"),
            encode = function(key) {
                return encodeURIComponent(prefix + key).replace(/%/g, spfix);
            },
            decode = function(key) {
                return decodeURIComponent(key.replace(reg2, "%")).replace(reg1, "");
            };
        //创建模拟对象
        LS = {
            length: attrs.length,
            isVirtualObject: true,
            getItem: function(key) {
                //IE9中 通过o.getAttribute(name);取不到值，所以才用了下面比较复杂的方法。
                return (attrs.getNamedItem(encode(key)) || {
                    nodeValue: null
                }).nodeValue || root.getAttribute(encode(key));
            },
            setItem: function(key, value) {
                //IE9中无法通过 o.setAttribute(name, value); 设置#userData值，而用下面的方法却可以。
                try {
                    root.setAttribute(encode(key), value);
                    o.save(hostKey);
                    this.length = attrs.length;
                } catch (e) { //这里IE9经常报没权限错误,但是不影响数据存储
                }
            },
            removeItem: function(key) {
                //IE9中无法通过 o.removeAttribute(name); 删除#userData值，而用下面的方法却可以。
                try {
                    root.removeAttribute(encode(key));
                    o.save(hostKey);
                    this.length = attrs.length;
                } catch (e) { //这里IE9经常报没权限错误,但是不影响数据存储
                }
            },
            clear: function() {
                while (attrs.length) {
                    this.removeItem(attrs[0].nodeName);
                }
                this.length = 0;
            },
            key: function(i) {
                return attrs[i] ? decode(attrs[i].nodeName) : undefined;
            }
        };
        //提供模拟的"localStorage"接口
        if (!("localStorage" in window))
            window.localStorage = LS;
    })();

    //二次包装接口
    window.LS = !LS ? notSupport : {
        set: function(key, value) {
            //fixed iPhone/iPad 'QUOTA_EXCEEDED_ERR' bug
            if (this.get(key) !== undefined)
                this.remove(key);
            LS.setItem(key, value);
            this.length = LS.length;
        },
        //查询不存在的key时，有的浏览器返回null，这里统一返回undefined
        get: function(key) {
            var v = LS.getItem(key);
            return v === null ? undefined : v;
        },
        remove: function(key) {
            LS.removeItem(key);
            this.length = LS.length;
        },
        removeByPrefix: function(prefix) {
            window.LS.each(function(key, value) {
                if (key.indexOf(prefix) === 0) {
                    window.LS.remove(key)
                }
            });
        },
        clear: function() {
            LS.clear();
            this.length = 0;
        },
        //本地存储数据遍历，callback接受两个参数 key 和 value，如果返回false则终止遍历
        each: function(callback) {
            var list = this.obj(),
                fn = callback || function() {},
                key;
            for (key in list)
                if (fn.call(this, key, this.get(key)) === false)
                    break;
        },
        //返回一个对象描述的localStorage副本
        obj: function() {
            var list = {},
                i = 0,
                n, key;
            if (LS.isVirtualObject) {
                list = LS.key(-1);
            } else {
                n = LS.length;
                for (; i < n; i++) {
                    key = LS.key(i);
                    list[key] = this.get(key);
                }
            }
            return list;
        },
        length: LS.length
    };
    //如果有jQuery，则同样扩展到jQuery
    if (window.jQuery) window.jQuery.LS = window.LS;
})(window);;
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
/*
 * requireJS配置
 */
(function() {
    var dispatchEvent = window.dispatchEvent;
    /*
     * 基础配置
     */
    window.server_url = (location.host == "dev.dotnar.com:2222" || location.host.indexOf("192.168.") == 0) ? "http://" + location.hostname + ":3000/" : "http://api.dotnar.com/";

    var requireConfig = {
        // baseUrl: "./",
        paths: {
            //应用程序核心
            "jSouper_base": [ "http://localhost:9000/build/jSouper", "./js/lib/jSouper"],
            "jSouper": "./js/lib/jsouper.handler",
            "tools": "./js/lib/tools",
            "appConfig": window.server_url + "./config/config.json?_=" + Math.random(),
            // "jSouper":"./js/lib/jSouper",
            //交互层核心
            "jQuery": "./js/lib/jquery-1.11.1.min",
            "jQuery.widget": "./js/lib/jquery.widget.min",
            "jQuery.easing": "./js/lib/jquery.easing.1.3.min",
            "jQuery.mousewheel": "./js/lib/jquery.mousewheel",
            "jQuery.colorPicker": "./js/lib/colorpicker/js/colorpicker",

            //弹出框插件
            "jQuery.notify": "./js/lib/jquery.notify",

            //二维码应用插件
            "jQuery.qrcode": "./js/lib/jquery.qrcode.min",

            //hash路由组件
            "routie": "./js/lib/routie.min",
            //Cookies操作库
            "Cookies": "./js/lib/cookies.min",

            "shim_json": "./js/lib/json3",
            "shim_html5": "./js/lib/html5",
            "flashcanvas": "./js/lib/FlashCanvasPro/flashcanvas",
            "localResizeIMG": "./js/lib/localResizeIMG/LocalResizeIMG",
            "ueditor.config": "./js/lib/ueditor/ueditor.config",
            "ueditor.core": "./js/lib/ueditor/ueditor.all.min", //.min
            "ueditor.lang.zh-cn": "./js/lib/ueditor/lang/zh-cn/zh-cn",

            /*
             * RequireJs 插件，这里命名决定使用前缀，如"css" => "css!"
             */
            //requireJs CSS插件
            "l_css": "./js/lib/require.css",
            // "r_css": "./js/lib/require.css2",
            "r_css": "./js/lib/require.css",
            //requireJs Text插件
            "l_text": "./js/lib/require.text",
            // "r_text": "./js/lib/require.text2",
            "r_text": "./js/lib/require.text",
            //requireJs 国际化插件
            "r_i18n": "./js/lib/require.i18n",

            /*
             * 通用组件包
             * 包括jSouper、jQuery、require.css"
             */
            "common": "./js/require.common",
            /*
             * 时间插件
             */
            "moment": "./js/lib/moment.min",
            "moment-locale-zh-cn": "./js/lib/moment.locale.zh-cn",
            /*
             * Socket 客户端
             */
            "SockJS": "./js/lib/sock",
            /*
             * 应用程序主体
             */
            "core": "./js/lib/_core"
        },
        shim: {
            "jSouper": {
                deps: ["jSouper_base"]
            },
            "jQuery.widget": {
                deps: ["jQuery", "jQuery.easing", "jQuery.mousewheel"]
            },
            "jQuery.easing": {
                deps: ["jQuery"]
            },
            "jQuery.mousewheel": {
                deps: ["jQuery"]
            },
            "jQuery.notify": {
                deps: ["jQuery"]
            },
            "jQuery.qrcode": {
                deps: ["jQuery"]
            },
            "jQuery.colorPicker": {
                deps: ["jQuery", "l_css!./js/lib/colorpicker/css/colorpicker"]
            },
            "localResizeIMG": {
                deps: ["jQuery"]
            },
            "metro": {
                deps: ["jQuery", "jQuery.widget", "metro-core"]
            },
            "moment-locale-zh-cn": {
                deps: ["moment"]
            },

            "ueditor.lang.zh-cn": {
                deps: ["ueditor.core"]
            },
            "ueditor.core": {
                deps: ["ueditor.config"]
            }
        }
    };
    define("ueditor", ["ueditor.core", "ueditor.lang.zh-cn"], function() {
        return UE
    });
    if (!dispatchEvent) {
        /*
         * 非现代浏览器的话则加入html5 history垫片
         */
        // requireConfig.shim.routie = {deps:["./js/lib/history.min.js"]};
        /*
         * 不支持JSON的浏览器加入JSON3包的支持
         */
        requireConfig.shim.SockJS = {
            deps: ["shim_json"]
        };
    }

    /*
     * 完成配置
     */
    define("require.config", requireConfig)
    require.config(requireConfig);

}());
/*
 * 模板模块的定义与解析
 */
;
(function() {

    /*
     * jSouper的模板文件 ==> UI组件
     * 使用html后缀确保编辑器能自动高亮
     */
    var jSouperTemplates = {
        "UI.Material": [
            "r_text!./build/xmp.material_ui.html",
            "r_css!./build/material_ui.css",
            "./build/xmp.material_ui"
        ]
    };
    var tpl_shims;
    for (var templateName in jSouperTemplates) {
        //生成requireJS的依赖关系数组
        tpl_shims = jSouperTemplates[templateName].slice();
        tpl_shims.unshift("jSouper");
        //定义require的UI模块
        define(templateName, tpl_shims, function(jSouper) {
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            //解析所有模板文件
            for (var i = 0, len = args.length; i < len; i += 1) {
                args[i] && jSouper.parse(args[i]);
            };
            //手动触发更新页面
            jSouper.App && jSouper.App.model.touchOff(".");
        });
    }
}());