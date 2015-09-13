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

	function _initCalendar(current_date, init_data) {
		var today = new Date;
		vm.set("$CPrivate.$Cache.currentShortMonth", date_time.getShortMonth(init_data));
		vm.set("$CPrivate.$Cache.currentMonth", date_time.getFullMonth(init_data));
		vm.set("$CPrivate.$Cache.currentDay", date_time.getDayOfWeek(init_data));
		vm.set("$CPrivate.$Cache.currentDate", init_data.getDate());
		vm.set("$CPrivate.$Cache.currentYear", init_data.getFullYear());

		var weekArray = date_time.getWeekArray(init_data);
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
		//标记为已经选中
		var select_date = cvm.get();
		current_date = select_date;
		_initCalendar(current_date, init_data);//完全刷新，确保以前标记的显示no_select状态
		//保存新标记
		vm.set("$CPrivate.$Cache.select_date", select_date);
	});


	var init_data, //initdata用来处理日历信息
		current_date; //currentdata用来标记用户选中的日期

	//对话框的弹出与隐藏
	vm.set("$CPrivate.$Event.show_dialog", function(e, cvm) {
		vm.set("$CPrivate.$Cache.is_show", true);
		//初始化 current_data init_data 
		current_date = new Date(androidInputNode.getValue());
		init_data = isNaN(current_date) ? new Date : current_date;
		_initCalendar(current_date, init_data);
	});
	vm.set("$CPrivate.$Event.hidden_dialog", function(e, cvm) {
		vm.set("$CPrivate.$Cache.is_show", false);
	});
	vm.set("$CPrivate.$Event.set_select", function(e, cvm) {
		var select_date = androidDatepickerNode.getDate();
		select_date && androidInputNode.setValue(date_time.format(select_date));
		vm.get("$CPrivate.$Event.hidden_dialog")();
	});
	androidDatepickerNode.getDate = function() {
		return vm.get("$CPrivate.$Cache.select_date"); //|| new Date;
	};

	//月份的切换
	vm.set("$CPrivate.$Event.prev_month", function() {
		init_data.setMonth(init_data.getMonth() - 1);
		_initCalendar(current_date, init_data);
	});
	vm.set("$CPrivate.$Event.next_month", function() {
		init_data.setMonth(init_data.getMonth() + 1);
		_initCalendar(current_date, init_data);
	});
});