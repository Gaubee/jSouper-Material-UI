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

console.group("加载应用程序核心jSouper");
console.group("加载jQuery");
console.group("加载工具集函数");

// var server_url = appConfig.server_url = location.host.indexOf("dotnar.com")!==-1?"http://api.dotnar.com/":"http://"+location.hostname+":3000/";//dev.dotnar.com:3000
define("common", ["jSouper", "jQuery","tools","UI.Material"], function(jSouper) {
    console.groupEnd("加载应用程序核心jSouper");
    console.groupEnd("加载jQuery");
    console.groupEnd("加载工具集函数");

    console.info("核心组件加载完成");

    /*
     * 初始化jSouper程序
     */
    console.group("初始化jSouper程序");
    jSouper.ready(function() {
        jSouper.app({
            Id: "jSouperApp",
            Data: {
                title:"jSouper App"
            }
        });
        console.groupEnd("初始化jSouper程序");
    });
    return jSouper;
});