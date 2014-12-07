customTagInit("android:progresscircular", function(vm) {
	_registerAttr(vm, "spinnerInner", "color", function(key, value) {
		this.style.borderColor = value;
	});
});