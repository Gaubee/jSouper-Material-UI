function customTagInit(tagName, handle) {
	jSouper.customTagsInit[tagName.toLowerCase()] = handle;
}
customTagInit("paperbutton", function(vm) {
    var _show_ti;
    vm.set("$Private.$Event.show", function(e) {
        vm.set("$Private.$Cache.show", false);
        clearTimeout(_show_ti);

        vm.set("$Private.$Cache.show", true);
        // console.log(e.pageY,e.offsetY);
        vm.set("$Private.$Cache.top", e.offsetY);
        vm.set("$Private.$Cache.left", e.offsetX);
        _show_ti = setTimeout(function() {
            vm.set("$Private.$Cache.show", false);
        }, 500)
    });
});