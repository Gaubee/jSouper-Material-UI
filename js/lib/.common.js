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
console.group("加载应用程序核心");
console.group("加载jQuery");

define("common", ["jSouper", "jQuery", "css"], function() {
    console.groupEnd("加载应用程序核心");
    console.groupEnd("加载jQuery");

    console.info("核心组件加载完成");

    //解析基础UI组件
    console.group("解析基础UI组件");
    var baseUI = ["input.html", "index.xmp.html"];
    var baseURL = "/template/"
    jSouper.forEach(baseUI, function(url, index) {
        var url = baseUI[index] = baseURL + url;
        jSouper.build({
            Url: url
        });
    });
    console.groupEnd("解析基础UI组件");


    console.group("初始化jSouper程序");
    jSouper.ready(function() {
        jSouper.app({
            Id: "jSouperApp",
            Data: {
                a: "aaa"
            }
        });
        dom = document.getElementById("jSouperApp");
        if (dom.style.display==="none") {
            dom.style.display="auto";
        }
        console.groupEnd("初始化jSouper程序");
    });
});
