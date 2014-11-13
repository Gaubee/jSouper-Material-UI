define("core", ["common", "jQuery", "r_css", "jQuery.notify"], function(jSouper, $, cssAPI) {

    /*
     * 重写弹出框
     */
    require(["color"], function(color) {
        var _alert = window.alert;
        window.alert = function() {
            var args = arguments;
            var result;
            if (args.length === 1) {
                var alert_str = args[0];
                if (typeof alert_str === "string") {
                    result = $.Notify.show(alert_str)
                } else {
                    result = $.Notify(alert_str);
                }
            } else if (args.length >= 2) {
                var type = args[0];
                var alert_str = args[1];
                var time = (args[2] === undefined) ? 3000 : args[2];
                var class_color = color[type];
                result = $.Notify({
                    style: {
                        background: class_color,
                        color: "white"
                    },
                    content: alert_str,
                    timeout: time
                });
            }
            return result;
        }
    });
    return jSouper;
});
