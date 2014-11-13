define(["appConfig"], function() {
    if (typeof window == "undefined") return {
        load: function(n, r, load) {
            load()
        }
    };
    var cssAPI = {};
    cssAPI.pluginBuilder = "./css-builder";
    cssAPI.normalize = function(name, normalize) {
        if (name.substr(name.length - 4, 4) == ".css") name = name.substr(0, name.length - 4);
        return normalize(name)
    };
    cssAPI.load = function(cssId, req, load, config) {
        require(["r_text!" + cssId + ".css"], function(css_text) {
            css_text = cssAPI.middleware(css_text)
            addSheet(css_text);
            load();
        });
    };
    cssAPI.toRGBA = function(hex) {
        if (hex.indexOf("#") === 0) {
            hex = hex.substr(1);
        }
        var _r = hex.substring(0, 2);
        var _g = hex.substring(2, 4);
        var _b = hex.substring(4, 6);
        return parseInt(_r, 16) + "," + parseInt(_g, 16) + "," + parseInt(_b, 16)
    }
    cssAPI.middleware = function(css_text) {
        var themeConfig = (appConfig.site_info.config && appConfig.site_info.config.theme) || {};
        var first_color = themeConfig.first_color || "#45b97c";
        var second_color = themeConfig.second_color || "#fa6800";
        var font_color = themeConfig.font_color || "#FFFFFF";
        //主色
        css_text = css_text.replace(/#aaabb1/ig, first_color);
        css_text = css_text.replace(new RegExp(cssAPI.toRGBA("#aaabb1"),"ig"), cssAPI.toRGBA(first_color));
        //辅助色
        css_text = css_text.replace(/#aaabb2/ig, second_color);
        css_text = css_text.replace(new RegExp(cssAPI.toRGBA("#aaabb2"),"ig"), cssAPI.toRGBA(second_color));
        //字体色
        css_text = css_text.replace(/#aaabb3/ig, font_color);
        css_text = css_text.replace(new RegExp(cssAPI.toRGBA("#aaabb3"),"ig"), cssAPI.toRGBA(font_color));
        return css_text;
    }
    return cssAPI
});