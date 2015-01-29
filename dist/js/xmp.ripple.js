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