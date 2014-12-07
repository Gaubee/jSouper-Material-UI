customTagInit("android:input", function(vm) {
	var inheritWrap = vm.getOneElementByTagName("inheritWrap");
	_registerAttr(vm, "input", "color", function(key, value) {
		inheritWrap.style.color = value;
		inheritWrap.style.backgroundColor = value;
	});
});
