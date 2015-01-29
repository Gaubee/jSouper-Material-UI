customTagInit("android:iconbutton", function(vm) {
	vm.set("$CPrivate.$Event.show", function() {
		vm.set("$CPrivate.$Cache.show_tooltip", true);
	});
	vm.set("$CPrivate.$Event.hidden", function() {
		vm.set("$CPrivate.$Cache.show_tooltip", false);
	});
});