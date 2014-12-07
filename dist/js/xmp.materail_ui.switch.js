customTagInit("android:switch", function(vm) {
	vm.set("$Private.$Event.check", function() {
		vm.set("$Private.$Cache.is_check", this.checked);
	});
	var containerInner = vm.getOneElementByTagName("containerInner");
	_registerAttr(vm, "input", "color", function(key, value) {
		value && (containerInner.style.borderColor = _hexToRGBA(value, 0.87));
	});
});