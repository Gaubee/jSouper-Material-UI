;(function (global) {if (typeof jSouper === "object") {    _material_ui_init_(jSouper);} else if (typeof require === "function") {    require(["jSouper_base"],function (jSouper) {        _material_ui_init_(jSouper);    });}else{    var _ti = setInterval(function(){        if (typeof jSouper === "object"){            clearInterval(_ti);            _material_ui_init_(jSouper);        }    },100);}function _material_ui_init_(jSouper){
function customTagInit(tagName, handle) {
	jSouper.customTagsInit[tagName.toLowerCase()] = handle;
}

function _registerAttr(vm, tagName, attrKey, handle) {
	var nodes = vm.queryElement({
		tagName: tagName.toUpperCase()
	});
	jSouper.forEach(nodes, function(node) {
		jSouper.onElementPropertyChange(node, attrKey, handle, true);
	})
}
var _colors = {
	"aliceblue": "f0f8ff",
	"antiquewhite": "faebd7",
	"aqua": "00ffff",
	"aquamarine": "7fffd4",
	"azure": "f0ffff",
	"beige": "f5f5dc",
	"bisque": "ffe4c4",
	"black": "000000",
	"blanchedalmond": "ffebcd",
	"blue": "0000ff",
	"blueviolet": "8a2be2",
	"brown": "a52a2a",
	"burlywood": "deb887",
	"cadetblue": "5f9ea0",
	"chartreuse": "7fff00",
	"chocolate": "d2691e",
	"coral": "ff7f50",
	"cornflowerblue": "6495ed",
	"cornsilk": "fff8dc",
	"crimson": "dc143c",
	"cyan": "00ffff",
	"darkblue": "00008b",
	"darkcyan": "008b8b",
	"darkgoldenrod": "b8860b",
	"darkgray": "a9a9a9",
	"darkgreen": "006400",
	"darkkhaki": "bdb76b",
	"darkmagenta": "8b008b",
	"darkolivegreen": "556b2f",
	"darkorange": "ff8c00",
	"darkorchid": "9932cc",
	"darkred": "8b0000",
	"darksalmon": "e9967a",
	"darkseagreen": "8fbc8f",
	"darkslateblue": "483d8b",
	"darkslategray": "2f4f4f",
	"darkturquoise": "00ced1",
	"darkviolet": "9400d3",
	"deeppink": "ff1493",
	"deepskyblue": "00bfff",
	"dimgray": "696969",
	"dodgerblue": "1e90ff",
	"firebrick": "b22222",
	"floralwhite": "fffaf0",
	"forestgreen": "228b22",
	"fuchsia": "ff00ff",
	"gainsboro": "dcdcdc",
	"ghostwhite": "f8f8ff",
	"gold": "ffd700",
	"goldenrod": "daa520",
	"gray": "808080",
	"green": "008000",
	"greenyellow": "adff2f",
	"honeydew": "f0fff0",
	"hotpink": "ff69b4",
	"indianred ": "cd5c5c",
	"indigo": "4b0082",
	"ivory": "fffff0",
	"khaki": "f0e68c",
	"lavender": "e6e6fa",
	"lavenderblush": "fff0f5",
	"lawngreen": "7cfc00",
	"lemonchiffon": "fffacd",
	"lightblue": "add8e6",
	"lightcoral": "f08080",
	"lightcyan": "e0ffff",
	"lightgoldenrodyellow": "fafad2",
	"lightgrey": "d3d3d3",
	"lightgreen": "90ee90",
	"lightpink": "ffb6c1",
	"lightsalmon": "ffa07a",
	"lightseagreen": "20b2aa",
	"lightskyblue": "87cefa",
	"lightslategray": "778899",
	"lightsteelblue": "b0c4de",
	"lightyellow": "ffffe0",
	"lime": "00ff00",
	"limegreen": "32cd32",
	"linen": "faf0e6",
	"magenta": "ff00ff",
	"maroon": "800000",
	"mediumaquamarine": "66cdaa",
	"mediumblue": "0000cd",
	"mediumorchid": "ba55d3",
	"mediumpurple": "9370d8",
	"mediumseagreen": "3cb371",
	"mediumslateblue": "7b68ee",
	"mediumspringgreen": "00fa9a",
	"mediumturquoise": "48d1cc",
	"mediumvioletred": "c71585",
	"midnightblue": "191970",
	"mintcream": "f5fffa",
	"mistyrose": "ffe4e1",
	"moccasin": "ffe4b5",
	"navajowhite": "ffdead",
	"navy": "000080",
	"oldlace": "fdf5e6",
	"olive": "808000",
	"olivedrab": "6b8e23",
	"orange": "ffa500",
	"orangered": "ff4500",
	"orchid": "da70d6",
	"palegoldenrod": "eee8aa",
	"palegreen": "98fb98",
	"paleturquoise": "afeeee",
	"palevioletred": "d87093",
	"papayawhip": "ffefd5",
	"peachpuff": "ffdab9",
	"peru": "cd853f",
	"pink": "ffc0cb",
	"plum": "dda0dd",
	"powderblue": "b0e0e6",
	"purple": "800080",
	"red": "ff0000",
	"rosybrown": "bc8f8f",
	"royalblue": "4169e1",
	"saddlebrown": "8b4513",
	"salmon": "fa8072",
	"sandybrown": "f4a460",
	"seagreen": "2e8b57",
	"seashell": "fff5ee",
	"sienna": "a0522d",
	"silver": "c0c0c0",
	"skyblue": "87ceeb",
	"slateblue": "6a5acd",
	"slategray": "708090",
	"snow": "fffafa",
	"springgreen": "00ff7f",
	"steelblue": "4682b4",
	"tan": "d2b48c",
	"teal": "008080",
	"thistle": "d8bfd8",
	"tomato": "ff6347",
	"turquoise": "40e0d0",
	"violet": "ee82ee",
	"wheat": "f5deb3",
	"white": "ffffff",
	"whitesmoke": "f5f5f5",
	"yellow": "ffff00",
	"yellowgreen": "9acd32"
};

function _colorNameToHex(color) {
	var hex = _colors[color.toLowerCase()]
	return hex ? ("#" + hex) : "";
}

function _hexToRGBA(hex, opacity) {
	hex = _colorNameToHex(hex) || hex;
	hex = hex.replace("#", "");
	if (hex.length <= 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	var _R = hex.substr(0, 2);
	var _G = hex.substr(2, 2);
	var _B = hex.substr(4, 2);
	return "rgba(" + parseInt(_R, 16) + "," + parseInt(_G, 16) + "," + parseInt(_B, 16) + "," + opacity || 1 + ")"
}
var date_time = {

	addDays: function(d, days) {
		var newDate = this.clone(d);
		newDate.setDate(d.getDate() + days);
		return newDate;
	},

	addMonths: function(d, months) {
		var newDate = this.clone(d);
		newDate.setMonth(d.getMonth() + months);
		return newDate;
	},

	clone: function(d) {
		return new Date(d.getTime());
	},

	getDaysInMonth: function(d) {
		var resultDate = this.getFirstDayOfMonth(d);

		resultDate.setMonth(resultDate.getMonth() + 1);
		resultDate.setDate(resultDate.getDate() - 1);

		return resultDate.getDate();
	},

	getFirstDayOfMonth: function(d) {
		return new Date(d.getFullYear(), d.getMonth(), 1);
	},

	getFullMonth: function(d) {
		var month = d.getMonth();
		switch (month) {
			// case 0:
			// 	return 'January';
			// case 1:
			// 	return 'February';
			// case 2:
			// 	return 'March';
			// case 3:
			// 	return 'April';
			// case 4:
			// 	return 'May';
			// case 5:
			// 	return 'June';
			// case 6:
			// 	return 'July';
			// case 7:
			// 	return 'August';
			// case 8:
			// 	return 'September';
			// case 9:
			// 	return 'October';
			// case 10:
			// 	return 'November';
			// case 11:
			// 	return 'December';
			case 0:
				return '一月';
			case 1:
				return '二月';
			case 2:
				return '三月';
			case 3:
				return '四月';
			case 4:
				return '五月';
			case 5:
				return '六月';
			case 6:
				return '七月';
			case 7:
				return '八月';
			case 8:
				return '九月';
			case 9:
				return '十月';
			case 10:
				return '十一月';
			case 11:
				return '十二月';
		}
	},

	getShortMonth: function(d) {
		var month = d.getMonth();
		switch (month) {
			// case 0:
			// 	return 'Jan';
			// case 1:
			// 	return 'Feb';
			// case 2:
			// 	return 'Mar';
			// case 3:
			// 	return 'Apr';
			// case 4:
			// 	return 'May';
			// case 5:
			// 	return 'Jun';
			// case 6:
			// 	return 'Jul';
			// case 7:
			// 	return 'Aug';
			// case 8:
			// 	return 'Sep';
			// case 9:
			// 	return 'Oct';
			// case 10:
			// 	return 'Nov';
			// case 11:
			// 	return 'Dec';
			case 0:
				return '一月';
			case 1:
				return '二月';
			case 2:
				return '三月';
			case 3:
				return '四月';
			case 4:
				return '五月';
			case 5:
				return '六月';
			case 6:
				return '七月';
			case 7:
				return '八月';
			case 8:
				return '九月';
			case 9:
				return '十月';
			case 10:
				return '十一月';
			case 11:
				return '十二月';
		}
	},

	getDayOfWeek: function(d) {
		var dow = d.getDay();
		switch (dow) {
			// case 0:
			// 	return 'Sunday';
			// case 1:
			// 	return 'Monday';
			// case 2:
			// 	return 'Tuesday';
			// case 3:
			// 	return 'Wednesday';
			// case 4:
			// 	return 'Thursday';
			// case 5:
			// 	return 'Friday';
			// case 6:
			// 	return 'Saturday';
			case 0:
				return '周日';
			case 1:
				return '周一';
			case 2:
				return '周二';
			case 3:
				return '周三';
			case 4:
				return '周四';
			case 5:
				return '周五';
			case 6:
				return '周六';
		}
	},

	getWeekArray: function(d) {
		var dayArray = [];
		var daysInMonth = this.getDaysInMonth(d);
		var daysInWeek;
		var emptyDays;
		var firstDayOfWeek;
		var week;
		var weekArray = [];

		for (var i = 1; i <= daysInMonth; i++) {
			dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
		};

		while (dayArray.length) {
			firstDayOfWeek = dayArray[0].getDay();
			daysInWeek = 7 - firstDayOfWeek;
			emptyDays = 7 - daysInWeek;
			week = dayArray.splice(0, daysInWeek);

			for (var i = 0; i < emptyDays; i++) {
				week.unshift(null);
			};

			weekArray.push(week);
		}

		return weekArray;
	},

	format: function(date) {
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var y = date.getFullYear();
		return y + "-" + m + '-' + d;
	},

	isEqualDate: function(d1, d2) {
		return d1 && d2 &&
			(d1.getDate() === d2.getDate()) &&
			(d1.getFullYear() === d2.getFullYear()) &&
			(d1.getMonth() === d2.getMonth());
	},

	monthDiff: function(d1, d2) {
		var m;
		m = (d1.getFullYear() - d2.getFullYear()) * 12;
		m += d1.getMonth();
		m -= d2.getMonth();
		return m;
	}

};
customTagInit("android:datepicker", function(vm) {
	var androidInputNode = vm.getOneElementByTagName("android:Input");
	var androidDatepickerNode = vm.getOneElementByTagName("android:datepicker");

	function _initCalendar(current_date) {
		var today = new Date;
		vm.set("$CPrivate.$Cache.currentShortMonth", date_time.getShortMonth(current_date));
		vm.set("$CPrivate.$Cache.currentMonth", date_time.getFullMonth(current_date));
		vm.set("$CPrivate.$Cache.currentDay", date_time.getDayOfWeek(current_date));
		vm.set("$CPrivate.$Cache.currentDate", current_date.getDate());
		vm.set("$CPrivate.$Cache.currentYear", current_date.getFullYear());

		var weekArray = date_time.getWeekArray(current_date);
		weekArray.forEach(function(week) {
			week.forEach(function(date) {
				if (!date) {
					return
				}
				date.date = date.getDate();
				date.is_today = date_time.isEqualDate(date, today);
				date.is_select = date_time.isEqualDate(date, current_date);
			});
		});
		vm.set("$CPrivate.$Cache.weekArray", weekArray);
	};
	vm.set("$CPrivate.$Event.select_date", function(e, cvm) {
		var select_date = cvm.get();
		vm.set("$CPrivate.$Cache.select_date", select_date);
		_initCalendar(select_date);
	});

	//对话框的弹出与隐藏
	var current_date
	vm.set("$Private.$Event.show_dialog", function(e, cvm) {
		vm.set("$CPrivate.$Cache.is_show", true);
		current_date = new Date(androidInputNode.getValue());
		_initCalendar(current_date);
	});
	vm.set("$Private.$Event.hidden_dialog", function(e, cvm) {
		vm.set("$CPrivate.$Cache.is_show", false);
	});
	vm.set("$Private.$Event.set_select", function(e, cvm) {
		var select_date = androidDatepickerNode.getDate();
		androidInputNode.setValue(date_time.format(select_date));
		vm.get("$Private.$Event.hidden_dialog")();
	});
	androidDatepickerNode.getDate = function() {
		return vm.get("$CPrivate.$Cache.select_date") || new Date;
	}

	//月份的切换
	vm.set("$CPrivate.$Event.prev_month", function() {
		current_date.setMonth(current_date.getMonth() - 1);
		_initCalendar(current_date);
	});
	vm.set("$CPrivate.$Event.next_month", function() {
		current_date.setMonth(current_date.getMonth() + 1);
		_initCalendar(current_date);
	});
});
customTagInit("android:switch", function(vm) {
	var containerInner = vm.getOneElementByTagName("containerInner");
	var inputNode = vm.getOneElementByTagName("input");

	jSouper.onElementPropertyChange(inputNode, "checked", function(attrKey, checked) {
		vm.set("$CPrivate.$Cache.is_check", checked);
	}, true);

	jSouper.onElementPropertyChange(inputNode, "color", function(key, value) {
		value && (containerInner.style.borderColor = _hexToRGBA(value, 0.87));
	}, true);
});
customTagInit("android:paperbutton", function(vm) {
    var buttonNode = vm.getOneElementByTagName("button");
    var spanInnerNode = vm.getOneElementByTagName("spanInner");
    var layer_num_normal;
    var layer_num_clicking;
    jSouper.onElementPropertyChange(buttonNode, "layer-num", function(attrKey, attrValue) {
        var layer_num = attrValue ? ~~attrValue : 1;
        if (layer_num < 1) {
            layer_num_normal = 0;
            layer_num_clicking = 0;
        } else if (layer_num > 4) {
            layer_num_normal = 4;
            layer_num_clicking = 5;
        } else {
            layer_num_normal = layer_num;
            layer_num_clicking = layer_num + 1;
        }
    }, true);
    //初始化
    _normal();

    function _clicking() {
        vm.set("$CPrivate.$Cache.layer_num", layer_num_clicking);
        vm.set("$CPrivate.$Cache.show", true);
    }

    function _normal() {
        vm.set("$CPrivate.$Cache.layer_num", layer_num_normal);
        vm.set("$CPrivate.$Cache.show", false);
        vm.set("$CPrivate.$Cache.width", 0);
        vm.set("$CPrivate.$Cache.height", 0);
    }

    jSouper.onElementPropertyChange(buttonNode, "round", function(attrKey, attrValue) {
        vm.set("$CPrivate.$Cache.round", !!attrValue);
    }, true);

    // var _show_ti;
    vm.set("$CPrivate.$Event.show", function(e) {
        _normal();
        // clearTimeout(_show_ti);
        var offset = this.getBoundingClientRect();
        var _re_y = e.pageY - offset.top - scrollY;
        var _re_x = e.pageX - offset.left - scrollX;
        vm.set("$CPrivate.$Cache.top", _re_y);
        vm.set("$CPrivate.$Cache.left", _re_x);
        var _re_x_2 = offset.width - _re_x;
        if (_re_x_2 < _re_x) {
            _re_x_2 = _re_x;
        }
        _re_x_2 *= 2;
        vm.set("$CPrivate.$Cache.width", _re_x_2);
        vm.set("$CPrivate.$Cache.height", _re_x_2);
        _clicking();
        // _show_ti = setTimeout(function() {
        //     _normal();
        // }, 500)
    });
    vm.set("$CPrivate.$Event.hidden", _normal);
});
customTagInit("android:dropdownmenu", function(vm) {
});
customTagInit("android:iconbutton", function(vm) {
	vm.set("$CPrivate.$Event.show", function() {
		vm.set("$CPrivate.$Cache.show_tooltip", true);
	});
	vm.set("$CPrivate.$Event.hidden", function() {
		vm.set("$CPrivate.$Cache.show_tooltip", false);
	});
});
var _icon_map = {
	"toggle-check-box": "\ue600",
	"toggle-check-box-outline-blank": "\ue601",
	"toggle-radio-button-off": "\ue602",
	"toggle-radio-button-on": "\ue603",
	"social-cake": "\ue604",
	"social-domain": "\ue605",
	"social-group": "\ue606",
	"social-group-add": "\ue607",
	"social-location-city": "\ue608",
	"social-mood": "\ue609",
	"social-notifications": "\ue60a",
	"social-notifications-none": "\ue60b",
	"social-notifications-off": "\ue60c",
	"social-notifications-on": "\ue60d",
	"social-notifications-paused": "\ue60e",
	"social-pages": "\ue60f",
	"social-party-mode": "\ue610",
	"social-people": "\ue611",
	"social-people-outline": "\ue612",
	"social-person": "\ue613",
	"social-person-add": "\ue614",
	"social-person-outline": "\ue615",
	"social-plus-one": "\ue616",
	"social-poll": "\ue617",
	"social-public": "\ue618",
	"social-school": "\ue619",
	"social-share": "\ue61a",
	"social-whatshot": "\ue61b",
	"notification-adb": "\ue61c",
	"notification-bluetooth-audio": "\ue61d",
	"notification-disc-full": "\ue61e",
	"notification-dnd-forwardslash": "\ue61f",
	"notification-do-not-disturb": "\ue620",
	"notification-drive-eta": "\ue621",
	"notification-event-available": "\ue622",
	"notification-event-busy": "\ue623",
	"notification-event-note": "\ue624",
	"notification-folder-special": "\ue625",
	"notification-mms": "\ue626",
	"notification-more": "\ue627",
	"notification-network-locked": "\ue628",
	"notification-phone-bluetooth-speaker": "\ue629",
	"notification-phone-forwarded": "\ue62a",
	"notification-phone-in-talk": "\ue62b",
	"notification-phone-locked": "\ue62c",
	"notification-phone-missed": "\ue62d",
	"notification-phone-paused": "\ue62e",
	"notification-play-download": "\ue62f",
	"notification-play-install": "\ue630",
	"notification-sd-card": "\ue631",
	"notification-sim-card-alert": "\ue632",
	"notification-sms": "\ue633",
	"notification-sms-failed": "\ue634",
	"notification-sync": "\ue635",
	"notification-sync-disabled": "\ue636",
	"notification-sync-problem": "\ue637",
	"notification-system-update": "\ue638",
	"notification-tap-and-play": "\ue639",
	"notification-time-to-leave": "\ue63a",
	"notification-vibration": "\ue63b",
	"notification-voice-chat": "\ue63c",
	"notification-vpn-lock": "\ue63d",
	"navigation-apps": "\ue63e",
	"navigation-arrow-back": "\ue63f",
	"navigation-arrow-drop-down": "\ue640",
	"navigation-arrow-drop-down-circle": "\ue641",
	"navigation-arrow-drop-up": "\ue642",
	"navigation-arrow-forward": "\ue643",
	"navigation-cancel": "\ue644",
	"navigation-check": "\ue645",
	"navigation-chevron-left": "\ue646",
	"navigation-chevron-right": "\ue647",
	"navigation-close": "\ue648",
	"navigation-expand-less": "\ue649",
	"navigation-expand-more": "\ue64a",
	"navigation-fullscreen": "\ue64b",
	"navigation-fullscreen-exit": "\ue64c",
	"navigation-menu": "\ue64d",
	"navigation-more-horiz": "\ue64e",
	"navigation-more-vert": "\ue64f",
	"navigation-refresh": "\ue650",
	"navigation-unfold-less": "\ue651",
	"navigation-unfold-more": "\ue652",
	"maps-beenhere": "\ue653",
	"maps-directions": "\ue654",
	"maps-directions-bike": "\ue655",
	"maps-directions-bus": "\ue656",
	"maps-directions-car": "\ue657",
	"maps-directions-ferry": "\ue658",
	"maps-directions-subway": "\ue659",
	"maps-directions-train": "\ue65a",
	"maps-directions-transit": "\ue65b",
	"maps-directions-walk": "\ue65c",
	"maps-flight": "\ue65d",
	"maps-hotel": "\ue65e",
	"maps-layers": "\ue65f",
	"maps-layers-clear": "\ue660",
	"maps-local-airport": "\ue661",
	"maps-local-atm": "\ue662",
	"maps-local-attraction": "\ue663",
	"maps-local-bar": "\ue664",
	"maps-local-cafe": "\ue665",
	"maps-local-car-wash": "\ue666",
	"maps-local-convenience-store": "\ue667",
	"maps-local-drink": "\ue668",
	"maps-local-florist": "\ue669",
	"maps-local-gas-station": "\ue66a",
	"maps-local-grocery-store": "\ue66b",
	"maps-local-hospital": "\ue66c",
	"maps-local-hotel": "\ue66d",
	"maps-local-laundry-service": "\ue66e",
	"maps-local-library": "\ue66f",
	"maps-local-mall": "\ue670",
	"maps-local-movies": "\ue671",
	"maps-local-offer": "\ue672",
	"maps-local-parking": "\ue673",
	"maps-local-pharmacy": "\ue674",
	"maps-local-phone": "\ue675",
	"maps-local-pizza": "\ue676",
	"maps-local-play": "\ue677",
	"maps-local-post-office": "\ue678",
	"maps-local-print-shop": "\ue679",
	"maps-local-restaurant": "\ue67a",
	"maps-local-see": "\ue67b",
	"maps-local-shipping": "\ue67c",
	"maps-local-taxi": "\ue67d",
	"maps-location-history": "\ue67e",
	"maps-map": "\ue67f",
	"maps-my-location": "\ue680",
	"maps-navigation": "\ue681",
	"maps-pin-drop": "\ue682",
	"maps-place": "\ue683",
	"maps-rate-review": "\ue684",
	"maps-restaurant-menu": "\ue685",
	"maps-satellite": "\ue686",
	"maps-store-mall-directory": "\ue687",
	"maps-terrain": "\ue688",
	"maps-traffic": "\ue689",
	"image-add-to-photos": "\ue68a",
	"image-adjust": "\ue68b",
	"image-assistant-photo": "\ue68c",
	"image-audiotrack": "\ue68d",
	"image-blur-circular": "\ue68e",
	"image-blur-linear": "\ue68f",
	"image-blur-off": "\ue690",
	"image-blur-on": "\ue691",
	"image-brightness-1": "\ue692",
	"image-brightness-2": "\ue693",
	"image-brightness-3": "\ue694",
	"image-brightness-4": "\ue695",
	"image-brightness-5": "\ue696",
	"image-brightness-6": "\ue697",
	"image-brightness-7": "\ue698",
	"image-brush": "\ue699",
	"image-camera": "\ue69a",
	"image-camera-alt": "\ue69b",
	"image-camera-front": "\ue69c",
	"image-camera-rear": "\ue69d",
	"image-camera-roll": "\ue69e",
	"image-center-focus-strong": "\ue69f",
	"image-center-focus-weak": "\ue6a0",
	"image-collections": "\ue6a1",
	"image-color-lens": "\ue6a2",
	"image-colorize": "\ue6a3",
	"image-compare": "\ue6a4",
	"image-control-point": "\ue6a5",
	"image-control-point-duplicate": "\ue6a6",
	"image-crop-3-2": "\ue6a7",
	"image-crop-5-4": "\ue6a8",
	"image-crop-7-5": "\ue6a9",
	"image-crop-16-9": "\ue6aa",
	"image-crop": "\ue6ab",
	"image-crop-din": "\ue6ac",
	"image-crop-free": "\ue6ad",
	"image-crop-landscape": "\ue6ae",
	"image-crop-original": "\ue6af",
	"image-crop-portrait": "\ue6b0",
	"image-crop-square": "\ue6b1",
	"image-dehaze": "\ue6b2",
	"image-details": "\ue6b3",
	"image-edit": "\ue6b4",
	"image-exposure": "\ue6b5",
	"image-exposure-minus-1": "\ue6b6",
	"image-exposure-minus-2": "\ue6b7",
	"image-exposure-plus-1": "\ue6b8",
	"image-exposure-plus-2": "\ue6b9",
	"image-exposure-zero": "\ue6ba",
	"image-filter-1": "\ue6bb",
	"image-filter-2": "\ue6bc",
	"image-filter-3": "\ue6bd",
	"image-filter-4": "\ue6be",
	"image-filter-5": "\ue6bf",
	"image-filter-6": "\ue6c0",
	"image-filter-7": "\ue6c1",
	"image-filter-8": "\ue6c2",
	"image-filter-9": "\ue6c3",
	"image-filter-9-plus": "\ue6c4",
	"image-filter": "\ue6c5",
	"image-filter-b-and-w": "\ue6c6",
	"image-filter-center-focus": "\ue6c7",
	"image-filter-drama": "\ue6c8",
	"image-filter-frames": "\ue6c9",
	"image-filter-hdr": "\ue6ca",
	"image-filter-none": "\ue6cb",
	"image-filter-tilt-shift": "\ue6cc",
	"image-filter-vintage": "\ue6cd",
	"image-flare": "\ue6ce",
	"image-flash-auto": "\ue6cf",
	"image-flash-off": "\ue6d0",
	"image-flash-on": "\ue6d1",
	"image-flip": "\ue6d2",
	"image-gradient": "\ue6d3",
	"image-grain": "\ue6d4",
	"image-grid-off": "\ue6d5",
	"image-grid-on": "\ue6d6",
	"image-hdr-off": "\ue6d7",
	"image-hdr-on": "\ue6d8",
	"image-hdr-strong": "\ue6d9",
	"image-hdr-weak": "\ue6da",
	"image-healing": "\ue6db",
	"image-image": "\ue6dc",
	"image-image-aspect-ratio": "\ue6dd",
	"image-iso": "\ue6de",
	"image-landscape": "\ue6df",
	"image-leak-add": "\ue6e0",
	"image-leak-remove": "\ue6e1",
	"image-lens": "\ue6e2",
	"image-looks-3": "\ue6e3",
	"image-looks-4": "\ue6e4",
	"image-looks-5": "\ue6e5",
	"image-looks-6": "\ue6e6",
	"image-looks": "\ue6e7",
	"image-looks-one": "\ue6e8",
	"image-looks-two": "\ue6e9",
	"image-loupe": "\ue6ea",
	"image-movie-creation": "\ue6eb",
	"image-nature": "\ue6ec",
	"image-nature-people": "\ue6ed",
	"image-navigate-before": "\ue6ee",
	"image-navigate-next": "\ue6ef",
	"image-palette": "\ue6f0",
	"image-panorama": "\ue6f1",
	"image-panorama-fisheye": "\ue6f2",
	"image-panorama-horizontal": "\ue6f3",
	"image-panorama-vertical": "\ue6f4",
	"image-panorama-wide-angle": "\ue6f5",
	"image-photo": "\ue6f6",
	"image-photo-album": "\ue6f7",
	"image-photo-camera": "\ue6f8",
	"image-photo-library": "\ue6f9",
	"image-portrait": "\ue6fa",
	"image-remove-red-eye": "\ue6fb",
	"image-rotate-left": "\ue6fc",
	"image-rotate-right": "\ue6fd",
	"image-slideshow": "\ue6fe",
	"image-straighten": "\ue6ff",
	"image-style": "\ue700",
	"image-switch-camera": "\ue701",
	"image-switch-video": "\ue702",
	"image-tag-faces": "\ue703",
	"image-texture": "\ue704",
	"image-timelapse": "\ue705",
	"image-timer-3": "\ue706",
	"image-timer-10": "\ue707",
	"image-timer": "\ue708",
	"image-timer-auto": "\ue709",
	"image-timer-off": "\ue70a",
	"image-tonality": "\ue70b",
	"image-transform": "\ue70c",
	"image-tune": "\ue70d",
	"image-wb-auto": "\ue70e",
	"image-wb-cloudy": "\ue70f",
	"image-wb-incandescent": "\ue710",
	"image-wb-irradescent": "\ue711",
	"image-wb-sunny": "\ue712",
	"hardware-cast": "\ue713",
	"hardware-cast-connected": "\ue714",
	"hardware-computer": "\ue715",
	"hardware-desktop-mac": "\ue716",
	"hardware-desktop-windows": "\ue717",
	"hardware-dock": "\ue718",
	"hardware-gamepad": "\ue719",
	"hardware-headset": "\ue71a",
	"hardware-headset-mic": "\ue71b",
	"hardware-keyboard": "\ue71c",
	"hardware-keyboard-alt": "\ue71d",
	"hardware-keyboard-arrow-down": "\ue71e",
	"hardware-keyboard-arrow-left": "\ue71f",
	"hardware-keyboard-arrow-right": "\ue720",
	"hardware-keyboard-arrow-up": "\ue721",
	"hardware-keyboard-backspace": "\ue722",
	"hardware-keyboard-capslock": "\ue723",
	"hardware-keyboard-control": "\ue724",
	"hardware-keyboard-hide": "\ue725",
	"hardware-keyboard-return": "\ue726",
	"hardware-keyboard-tab": "\ue727",
	"hardware-keyboard-voice": "\ue728",
	"hardware-laptop": "\ue729",
	"hardware-laptop-chromebook": "\ue72a",
	"hardware-laptop-mac": "\ue72b",
	"hardware-laptop-windows": "\ue72c",
	"hardware-memory": "\ue72d",
	"hardware-mouse": "\ue72e",
	"hardware-phone-android": "\ue72f",
	"hardware-phone-iphone": "\ue730",
	"hardware-phonelink": "\ue731",
	"hardware-phonelink-off": "\ue732",
	"hardware-security": "\ue733",
	"hardware-sim-card": "\ue734",
	"hardware-smartphone": "\ue735",
	"hardware-speaker": "\ue736",
	"hardware-tablet": "\ue737",
	"hardware-tablet-android": "\ue738",
	"hardware-tablet-mac": "\ue739",
	"hardware-tv": "\ue73a",
	"hardware-watch": "\ue73b",
	"file-attachment": "\ue73c",
	"file-cloud": "\ue73d",
	"file-cloud-circle": "\ue73e",
	"file-cloud-done": "\ue73f",
	"file-cloud-download": "\ue740",
	"file-cloud-off": "\ue741",
	"file-cloud-queue": "\ue742",
	"file-cloud-upload": "\ue743",
	"file-file-download": "\ue744",
	"file-file-upload": "\ue745",
	"file-folder": "\ue746",
	"file-folder-open": "\ue747",
	"file-folder-shared": "\ue748",
	"editor-attach-file": "\ue749",
	"editor-attach-money": "\ue74a",
	"editor-border-all": "\ue74b",
	"editor-border-bottom": "\ue74c",
	"editor-border-clear": "\ue74d",
	"editor-border-color": "\ue74e",
	"editor-border-horizontal": "\ue74f",
	"editor-border-inner": "\ue750",
	"editor-border-left": "\ue751",
	"editor-border-outer": "\ue752",
	"editor-border-right": "\ue753",
	"editor-border-style": "\ue754",
	"editor-border-top": "\ue755",
	"editor-border-vertical": "\ue756",
	"editor-format-align-center": "\ue757",
	"editor-format-align-justify": "\ue758",
	"editor-format-align-left": "\ue759",
	"editor-format-align-right": "\ue75a",
	"editor-format-bold": "\ue75b",
	"editor-format-clear": "\ue75c",
	"editor-format-color-fill": "\ue75d",
	"editor-format-color-reset": "\ue75e",
	"editor-format-color-text": "\ue75f",
	"editor-format-indent-decrease": "\ue760",
	"editor-format-indent-increase": "\ue761",
	"editor-format-italic": "\ue762",
	"editor-format-line-spacing": "\ue763",
	"editor-format-list-bulleted": "\ue764",
	"editor-format-list-numbered": "\ue765",
	"editor-format-paint": "\ue766",
	"editor-format-quote": "\ue767",
	"editor-format-size": "\ue768",
	"editor-format-strikethrough": "\ue769",
	"editor-format-textdirection-l-to-r": "\ue76a",
	"editor-format-textdirection-r-to-l": "\ue76b",
	"editor-format-underline": "\ue76c",
	"editor-functions": "\ue76d",
	"editor-insert-chart": "\ue76e",
	"editor-insert-comment": "\ue76f",
	"editor-insert-drive-file": "\ue770",
	"editor-insert-emoticon": "\ue771",
	"editor-insert-invitation": "\ue772",
	"editor-insert-link": "\ue773",
	"editor-insert-photo": "\ue774",
	"editor-merge-type": "\ue775",
	"editor-mode-comment": "\ue776",
	"editor-mode-edit": "\ue777",
	"editor-publish": "\ue778",
	"editor-vertical-align-bottom": "\ue779",
	"editor-vertical-align-center": "\ue77a",
	"editor-vertical-align-top": "\ue77b",
	"editor-wrap-text": "\ue77c",
	"device-access-alarm": "\ue77d",
	"device-access-alarms": "\ue77e",
	"device-access-time": "\ue77f",
	"device-add-alarm": "\ue780",
	"device-airplanemode-off": "\ue781",
	"device-airplanemode-on": "\ue782",
	"device-battery-20": "\ue783",
	"device-battery-30": "\ue784",
	"device-battery-50": "\ue785",
	"device-battery-60": "\ue786",
	"device-battery-80": "\ue787",
	"device-battery-90": "\ue788",
	"device-battery-alert": "\ue789",
	"device-battery-charging-20": "\ue78a",
	"device-battery-charging-30": "\ue78b",
	"device-battery-charging-50": "\ue78c",
	"device-battery-charging-60": "\ue78d",
	"device-battery-charging-80": "\ue78e",
	"device-battery-charging-90": "\ue78f",
	"device-battery-charging-full": "\ue790",
	"device-battery-full": "\ue791",
	"device-battery-std": "\ue792",
	"device-battery-unknown": "\ue793",
	"device-bluetooth": "\ue794",
	"device-bluetooth-connected": "\ue795",
	"device-bluetooth-disabled": "\ue796",
	"device-bluetooth-searching": "\ue797",
	"device-brightness-auto": "\ue798",
	"device-brightness-high": "\ue799",
	"device-brightness-low": "\ue79a",
	"device-brightness-medium": "\ue79b",
	"device-data-usage": "\ue79c",
	"device-developer-mode": "\ue79d",
	"device-devices": "\ue79e",
	"device-dvr": "\ue79f",
	"device-gps-fixed": "\ue7a0",
	"device-gps-not-fixed": "\ue7a1",
	"device-gps-off": "\ue7a2",
	"device-location-disabled": "\ue7a3",
	"device-location-searching": "\ue7a4",
	"device-multitrack-audio": "\ue7a5",
	"device-network-cell": "\ue7a6",
	"device-network-wifi": "\ue7a7",
	"device-nfc": "\ue7a8",
	"device-now-wallpaper": "\ue7a9",
	"device-now-widgets": "\ue7aa",
	"device-screen-lock-landscape": "\ue7ab",
	"device-screen-lock-portrait": "\ue7ac",
	"device-screen-lock-rotation": "\ue7ad",
	"device-screen-rotation": "\ue7ae",
	"device-sd-storage": "\ue7af",
	"device-settings-system-daydream": "\ue7b0",
	"device-signal-cellular-0-bar": "\ue7b1",
	"device-signal-cellular-1-bar": "\ue7b2",
	"device-signal-cellular-2-bar": "\ue7b3",
	"device-signal-cellular-3-bar": "\ue7b4",
	"device-signal-cellular-4-bar": "\ue7b5",
	"device-signal-cellular-connected-no-internet-0-bar": "\ue7b6",
	"device-signal-cellular-connected-no-internet-1-bar": "\ue7b7",
	"device-signal-cellular-connected-no-internet-2-bar": "\ue7b8",
	"device-signal-cellular-connected-no-internet-3-bar": "\ue7b9",
	"device-signal-cellular-connected-no-internet-4-bar": "\ue7ba",
	"device-signal-cellular-no-sim": "\ue7bb",
	"device-signal-cellular-null": "\ue7bc",
	"device-signal-cellular-off": "\ue7bd",
	"device-signal-wifi-0-bar": "\ue7be",
	"device-signal-wifi-1-bar": "\ue7bf",
	"device-signal-wifi-2-bar": "\ue7c0",
	"device-signal-wifi-3-bar": "\ue7c1",
	"device-signal-wifi-4-bar": "\ue7c2",
	"device-signal-wifi-off": "\ue7c3",
	"device-signal-wifi-statusbar-1-bar-26x24px": "\ue7c4",
	"device-signal-wifi-statusbar-2-bar-26x24px": "\ue7c5",
	"device-signal-wifi-statusbar-3-bar-26x24px": "\ue7c6",
	"device-signal-wifi-statusbar-4-bar-26x24px": "\ue7c7",
	"device-signal-wifi-statusbar-connected-no-internet-1-26x24px": "\ue7c8",
	"device-signal-wifi-statusbar-connected-no-internet-2-26x24px": "\ue7c9",
	"device-signal-wifi-statusbar-connected-no-internet-3-26x24px": "\ue7ca",
	"device-signal-wifi-statusbar-connected-no-internet-4-26x24px": "\ue7cb",
	"device-signal-wifi-statusbar-connected-no-internet-26x24px": "\ue7cc",
	"device-signal-wifi-statusbar-not-connected-26x24px": "\ue7cd",
	"device-signal-wifi-statusbar-null-26x24px": "\ue7ce",
	"device-storage": "\ue7cf",
	"device-usb": "\ue7d0",
	"device-wifi-lock": "\ue7d1",
	"device-wifi-tethering": "\ue7d2",
	"content-add": "\ue7d3",
	"content-add-box": "\ue7d4",
	"content-add-circle": "\ue7d5",
	"content-add-circle-outline": "\ue7d6",
	"content-archive": "\ue7d7",
	"content-backspace": "\ue7d8",
	"content-block": "\ue7d9",
	"content-clear": "\ue7da",
	"content-content-copy": "\ue7db",
	"content-content-cut": "\ue7dc",
	"content-content-paste": "\ue7dd",
	"content-create": "\ue7de",
	"content-drafts": "\ue7df",
	"content-filter-list": "\ue7e0",
	"content-flag": "\ue7e1",
	"content-forward": "\ue7e2",
	"content-gesture": "\ue7e3",
	"content-inbox": "\ue7e4",
	"content-link": "\ue7e5",
	"content-mail": "\ue7e6",
	"content-markunread": "\ue7e7",
	"content-redo": "\ue7e8",
	"content-remove": "\ue7e9",
	"content-remove-circle": "\ue7ea",
	"content-remove-circle-outline": "\ue7eb",
	"content-reply": "\ue7ec",
	"content-reply-all": "\ue7ed",
	"content-report": "\ue7ee",
	"content-save": "\ue7ef",
	"content-select-all": "\ue7f0",
	"content-send": "\ue7f1",
	"content-sort": "\ue7f2",
	"content-text-format": "\ue7f3",
	"content-undo": "\ue7f4",
	"communication-business": "\ue7f5",
	"communication-call": "\ue7f6",
	"communication-call-end": "\ue7f7",
	"communication-call-made": "\ue7f8",
	"communication-call-merge": "\ue7f9",
	"communication-call-missed": "\ue7fa",
	"communication-call-received": "\ue7fb",
	"communication-call-split": "\ue7fc",
	"communication-chat": "\ue7fd",
	"communication-clear-all": "\ue7fe",
	"communication-comment": "\ue7ff",
	"communication-contacts": "\ue800",
	"communication-dialer-sip": "\ue801",
	"communication-dialpad": "\ue802",
	"communication-dnd-on": "\ue803",
	"communication-email": "\ue804",
	"communication-forum": "\ue805",
	"communication-import-export": "\ue806",
	"communication-invert-colors-off": "\ue807",
	"communication-invert-colors-on": "\ue808",
	"communication-live-help": "\ue809",
	"communication-location-off": "\ue80a",
	"communication-location-on": "\ue80b",
	"communication-message": "\ue80c",
	"communication-messenger": "\ue80d",
	"communication-no-sim": "\ue80e",
	"communication-phone": "\ue80f",
	"communication-portable-wifi-off": "\ue810",
	"communication-quick-contacts-dialer": "\ue811",
	"communication-quick-contacts-mail": "\ue812",
	"communication-ring-volume": "\ue813",
	"communication-stay-current-landscape": "\ue814",
	"communication-stay-current-portrait": "\ue815",
	"communication-stay-primary-landscape": "\ue816",
	"communication-stay-primary-portrait": "\ue817",
	"communication-swap-calls": "\ue818",
	"communication-textsms": "\ue819",
	"communication-voicemail": "\ue81a",
	"communication-vpn-key": "\ue81b",
	"av-album": "\ue81c",
	"av-av-timer": "\ue81d",
	"av-closed-caption": "\ue81e",
	"av-equalizer": "\ue81f",
	"av-explicit": "\ue820",
	"av-fast-forward": "\ue821",
	"av-fast-rewind": "\ue822",
	"av-games": "\ue823",
	"av-hearing": "\ue824",
	"av-high-quality": "\ue825",
	"av-loop": "\ue826",
	"av-mic": "\ue827",
	"av-mic-none": "\ue828",
	"av-mic-off": "\ue829",
	"av-movie": "\ue82a",
	"av-my-library-add": "\ue82b",
	"av-my-library-books": "\ue82c",
	"av-my-library-music": "\ue82d",
	"av-new-releases": "\ue82e",
	"av-not-interested": "\ue82f",
	"av-pause": "\ue830",
	"av-pause-circle-fill": "\ue831",
	"av-pause-circle-outline": "\ue832",
	"av-play-arrow": "\ue833",
	"av-play-circle-fill": "\ue834",
	"av-play-circle-outline": "\ue835",
	"av-play-shopping-bag": "\ue836",
	"av-playlist-add": "\ue837",
	"av-queue": "\ue838",
	"av-queue-music": "\ue839",
	"av-radio": "\ue83a",
	"av-recent-actors": "\ue83b",
	"av-repeat": "\ue83c",
	"av-repeat-one": "\ue83d",
	"av-replay": "\ue83e",
	"av-shuffle": "\ue83f",
	"av-skip-next": "\ue840",
	"av-skip-previous": "\ue841",
	"av-snooze": "\ue842",
	"av-stop": "\ue843",
	"av-subtitles": "\ue844",
	"av-surround-sound": "\ue845",
	"av-video-collection": "\ue846",
	"av-videocam": "\ue847",
	"av-videocam-off": "\ue848",
	"av-volume-down": "\ue849",
	"av-volume-mute": "\ue84a",
	"av-volume-off": "\ue84b",
	"av-volume-up": "\ue84c",
	"av-web": "\ue84d",
	"alert-error": "\ue84e",
	"alert-warning": "\ue84f",
	"action-3d-rotation": "\ue850",
	"action-accessibility": "\ue851",
	"action-account-balance": "\ue852",
	"action-account-balance-wallet": "\ue853",
	"action-account-box": "\ue854",
	"action-account-child": "\ue855",
	"action-account-circle": "\ue856",
	"action-add-shopping-cart": "\ue857",
	"action-alarm": "\ue858",
	"action-alarm-add": "\ue859",
	"action-alarm-off": "\ue85a",
	"action-alarm-on": "\ue85b",
	"action-android": "\ue85c",
	"action-announcement": "\ue85d",
	"action-aspect-ratio": "\ue85e",
	"action-assessment": "\ue85f",
	"action-assignment": "\ue860",
	"action-assignment-ind": "\ue861",
	"action-assignment-late": "\ue862",
	"action-assignment-return": "\ue863",
	"action-assignment-returned": "\ue864",
	"action-assignment-turned-in": "\ue865",
	"action-autorenew": "\ue866",
	"action-backup": "\ue867",
	"action-book": "\ue868",
	"action-bookmark": "\ue869",
	"action-bookmark-outline": "\ue86a",
	"action-bug-report": "\ue86b",
	"action-cached": "\ue86c",
	"action-check-circle": "\ue86d",
	"action-class": "\ue86e",
	"action-credit-card": "\ue86f",
	"action-dashboard": "\ue870",
	"action-delete": "\ue871",
	"action-description": "\ue872",
	"action-dns": "\ue873",
	"action-done": "\ue874",
	"action-done-all": "\ue875",
	"action-event": "\ue876",
	"action-exit-to-app": "\ue877",
	"action-explore": "\ue878",
	"action-extension": "\ue879",
	"action-face": "\ue87a",
	"action-favorite": "\ue87b",
	"action-favorite-outline": "\ue87c",
	"action-find-in-page": "\ue87d",
	"action-find-replace": "\ue87e",
	"action-flip-to-back": "\ue87f",
	"action-flip-to-front": "\ue880",
	"action-get-app": "\ue881",
	"action-grade": "\ue882",
	"action-group-work": "\ue883",
	"action-help": "\ue884",
	"action-highlight-remove": "\ue885",
	"action-history": "\ue886",
	"action-home": "\ue887",
	"action-https": "\ue888",
	"action-info": "\ue889",
	"action-info-outline": "\ue88a",
	"action-input": "\ue88b",
	"action-invert-colors": "\ue88c",
	"action-label": "\ue88d",
	"action-label-outline": "\ue88e",
	"action-language": "\ue88f",
	"action-launch": "\ue890",
	"action-list": "\ue891",
	"action-lock": "\ue892",
	"action-lock-open": "\ue893",
	"action-lock-outline": "\ue894",
	"action-loyalty": "\ue895",
	"action-markunread-mailbox": "\ue896",
	"action-note-add": "\ue897",
	"action-open-in-browser": "\ue898",
	"action-open-in-new": "\ue899",
	"action-open-with": "\ue89a",
	"action-pageview": "\ue89b",
	"action-payment": "\ue89c",
	"action-perm-camera-mic": "\ue89d",
	"action-perm-contact-cal": "\ue89e",
	"action-perm-data-setting": "\ue89f",
	"action-perm-device-info": "\ue8a0",
	"action-perm-identity": "\ue8a1",
	"action-perm-media": "\ue8a2",
	"action-perm-phone-msg": "\ue8a3",
	"action-perm-scan-wifi": "\ue8a4",
	"action-picture-in-picture": "\ue8a5",
	"action-polymer": "\ue8a6",
	"action-print": "\ue8a7",
	"action-query-builder": "\ue8a8",
	"action-question-answer": "\ue8a9",
	"action-receipt": "\ue8aa",
	"action-redeem": "\ue8ab",
	"action-report-problem": "\ue8ac",
	"action-restore": "\ue8ad",
	"action-room": "\ue8ae",
	"action-schedule": "\ue8af",
	"action-search": "\ue8b0",
	"action-settings": "\ue8b1",
	"action-settings-applications": "\ue8b2",
	"action-settings-backup-restore": "\ue8b3",
	"action-settings-bluetooth": "\ue8b4",
	"action-settings-cell": "\ue8b5",
	"action-settings-display": "\ue8b6",
	"action-settings-ethernet": "\ue8b7",
	"action-settings-input-antenna": "\ue8b8",
	"action-settings-input-component": "\ue8b9",
	"action-settings-input-composite": "\ue8ba",
	"action-settings-input-hdmi": "\ue8bb",
	"action-settings-input-svideo": "\ue8bc",
	"action-settings-overscan": "\ue8bd",
	"action-settings-phone": "\ue8be",
	"action-settings-power": "\ue8bf",
	"action-settings-remote": "\ue8c0",
	"action-settings-voice": "\ue8c1",
	"action-shop": "\ue8c2",
	"action-shop-two": "\ue8c3",
	"action-shopping-basket": "\ue8c4",
	"action-shopping-cart": "\ue8c5",
	"action-speaker-notes": "\ue8c6",
	"action-spellcheck": "\ue8c7",
	"action-star-rate": "\ue8c8",
	"action-stars": "\ue8c9",
	"action-store": "\ue8ca",
	"action-subject": "\ue8cb",
	"action-supervisor-account": "\ue8cc",
	"action-swap-horiz": "\ue8cd",
	"action-swap-vert": "\ue8ce",
	"action-swap-vert-circle": "\ue8cf",
	"action-system-update-tv": "\ue8d0",
	"action-tab": "\ue8d1",
	"action-tab-unselected": "\ue8d2",
	"action-theaters": "\ue8d3",
	"action-thumb-down": "\ue8d4",
	"action-thumb-up": "\ue8d5",
	"action-thumbs-up-down": "\ue8d6",
	"action-toc": "\ue8d7",
	"action-today": "\ue8d8",
	"action-track-changes": "\ue8d9",
	"action-translate": "\ue8da",
	"action-trending-down": "\ue8db",
	"action-trending-neutral": "\ue8dc",
	"action-trending-up": "\ue8dd",
	"action-turned-in": "\ue8de",
	"action-turned-in-not": "\ue8df",
	"action-verified-user": "\ue8e0",
	"action-view-agenda": "\ue8e1",
	"action-view-array": "\ue8e2",
	"action-view-carousel": "\ue8e3",
	"action-view-column": "\ue8e4",
	"action-view-day": "\ue8e5",
	"action-view-headline": "\ue8e6",
	"action-view-list": "\ue8e7",
	"action-view-module": "\ue8e8",
	"action-view-quilt": "\ue8e9",
	"action-view-stream": "\ue8ea",
	"action-view-week": "\ue8eb",
	"action-visibility": "\ue8ec",
	"action-visibility-off": "\ue8ed",
	"action-wallet-giftcard": "\ue8ee",
	"action-wallet-membership": "\ue8ef",
	"action-wallet-travel": "\ue8f0",
	"action-work": "\ue8f1"
};
customTagInit("android:icon", function(vm) {
	var iconNode = vm.queryElement({
		className: "materail-icon-contain"
	})[0];

	;
	jSouper.onElementPropertyChange(iconNode, "type", function(attrKey,attrValue) {
		var type = String(attrValue || "").toLowerCase();
		result = _icon_map[type] || "";
		iconNode.innerHTML = result;
	}, true);
})
customTagInit("android:input", function(vm) {
	var androidInputNode = vm.getOneElementByTagName("android:input");
	var inheritWrap = vm.getOneElementByTagName("inheritWrap");
	var inputNode = vm.getOneElementByTagName("input");
	_registerAttr(vm, "input", "color", function(key, value) {
		inheritWrap.style.color = value;
		inheritWrap.style.backgroundColor = value;
	});
	androidInputNode.getValue = function() {
		return inputNode.value;
	};
	androidInputNode.setValue = function(value) {
		inputNode.value = value;
		jSouper.dispatchEvent(inputNode, "change");
	};
});
customTagInit("android:progresscircular", function(vm) {
	_registerAttr(vm, "spinnerInner", "color", function(key, value) {
		this.style.borderColor = value;
	});
});
customTagInit("android:ripple", function(vm) {
	var rippleNode = vm.getOneElementByTagName("android:ripple");
	vm.set("$CPrivate.$Event.start_touch_ripple", function() {
		vm.set("$CPrivate.$Cache.start_touch_ripple", true)
		vm.set("$CPrivate.$Cache.end_touch_ripple", false)
	});
	vm.set("$CPrivate.$Event.end_touch_ripple", function() {
		if (!vm.get("$CPrivate.$Cache.end_touch_ripple")) {
			vm.set("$CPrivate.$Cache.end_touch_ripple", true)
		} else {
			vm.set("$CPrivate.$Cache.start_touch_ripple", false)
			vm.set("$CPrivate.$Cache.end_touch_ripple", false)
		}
	});
	vm.set("$CPrivate.$Event.show_focus_ripple", function() {
		vm.set("$CPrivate.$Cache.focus_ripple", true)
	});
	vm.set("$CPrivate.$Event.hidden_focus_ripple", function() {
		vm.set("$CPrivate.$Cache.focus_ripple", false)
	});
});

}
}(this));