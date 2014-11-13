;(function (global) {if (typeof jSouper === "object") {    _material_ui_init_(jSouper);} else if (typeof require === "function") {    require(["jSouper_base"],function (jSouper) {        _material_ui_init_(jSouper);    });}else{    var _ti = setInterval(function(){        if (typeof jSouper === "object"){            clearInterval(_ti);            _material_ui_init_(jSouper);        }    });}function _material_ui_init_(jSouper){
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

}
}(this));