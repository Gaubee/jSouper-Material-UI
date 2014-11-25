customTagInit("android:switch", function(vm) {
	vm.set("$Private.$Event.check",function () {
		vm.set("$Private.$Cache.is_check",this.checked);
	});
});