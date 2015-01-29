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