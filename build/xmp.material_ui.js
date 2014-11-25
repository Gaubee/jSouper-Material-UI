;(function (global) {if (typeof jSouper === "object") {    _material_ui_init_(jSouper);} else if (typeof require === "function") {    require(["jSouper_base"],function (jSouper) {        _material_ui_init_(jSouper);    });}else{    var _ti = setInterval(function(){        if (typeof jSouper === "object"){            clearInterval(_ti);            _material_ui_init_(jSouper);        }    },100);}function _material_ui_init_(jSouper){
function customTagInit(tagName, handle) {
	jSouper.customTagsInit[tagName.toLowerCase()] = handle;
}
customTagInit("android:switch", function(vm) {
	vm.set("$Private.$Event.check",function () {
		vm.set("$Private.$Cache.is_check",this.checked);
	});
});
customTagInit("android:paperbutton", function(vm) {

    //初始化
    _normal();

    function _clicking() {
        vm.set("$Private.$Cache.layer_num", 2);
        vm.set("$Private.$Cache.show", true);
    }

    function _normal() {
        vm.set("$Private.$Cache.layer_num", 1);
        vm.set("$Private.$Cache.show", false);
    }
    var _show_ti;
    vm.set("$Private.$Event.show", function(e) {
        _normal();
        clearTimeout(_show_ti);
        _clicking();
        // console.log(e.pageY,e.offsetY);
        vm.set("$Private.$Cache.top", e.offsetY);
        vm.set("$Private.$Cache.left", e.offsetX);
        _show_ti = setTimeout(function() {
            _normal();
        }, 500)
    });
});
customTagInit("android:dropdownmenu", function(vm) {
});
customTagInit("android:input", function(vm) {

});

}
}(this));