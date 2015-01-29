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