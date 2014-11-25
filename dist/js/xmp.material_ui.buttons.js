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