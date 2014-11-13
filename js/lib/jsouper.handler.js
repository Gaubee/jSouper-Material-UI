define("jSouper", ["jSouper_base",  "moment", "moment-locale-zh-cn"], function(jSouper,  moment) {

	//jSouper自定义函数
	jSouper.registerHandle("#Time", function(time, format) {
		time = (+time == time) ? +time : time;
		var date = moment(time);
		if (format) {
			return date.format(format);
		}
		return date.fromNow() + date.format(" LT");
	});
	jSouper.registerHandle("#Time_MH", function(time) {
		var date = moment("2001-1-1 " + time);
		return date.format("H:mm");
	});
	/*使用缓存*/
	var _ajax = jSouper.$.ajax;
	jSouper.$.ajax = function(config) {
		var text_url = "r_text!" + config.url;
		var _cache = _getCache(text_url);
		if (_cache) {
			var xhr = {
				responseText: _cache
			}
			config.success && config.success(200, xhr);
			config.complete && config.complete(200, xhr);
			return xhr;
		} else {
			var _success = config.success;
			config.success = function(state, xhr) {
				LS.set(text_url, xhr.responseText);
				_success && _success.apply(this,arguments);
			}
			return _ajax.call(this,config)
		}
	}
	return jSouper;
});