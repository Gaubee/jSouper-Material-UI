customTagInit("android:paperbutton", function(vm) {
    var buttonNode = vm.getOneElementByTagName("button");
    var spanInnerNode = vm.getOneElementByTagName("spanInner");
    var layer_num_normal;
    var layer_num_clicking;
    jSouper.onElementPropertyChange(buttonNode, "layer-num", function(attrKey, attrValue) {
        var layer_num = attrValue ? ~~attrValue : 1;
        if (layer_num < 1) {
            layer_num_normal = 0;
            layer_num_clicking = 0;
        } else if (layer_num > 4) {
            layer_num_normal = 4;
            layer_num_clicking = 5;
        } else {
            layer_num_normal = layer_num;
            layer_num_clicking = layer_num + 1;
        }
    }, true);
    //初始化
    _normal();

    function _clicking() {
        vm.set("$CPrivate.$Cache.layer_num", layer_num_clicking);
        vm.set("$CPrivate.$Cache.show", true);
    }

    function _normal() {
        vm.set("$CPrivate.$Cache.layer_num", layer_num_normal);
        vm.set("$CPrivate.$Cache.show", false);
        vm.set("$CPrivate.$Cache.width", 0);
        vm.set("$CPrivate.$Cache.height", 0);
    }

    jSouper.onElementPropertyChange(buttonNode, "round", function(attrKey, attrValue) {
        vm.set("$CPrivate.$Cache.round", !!attrValue);
    }, true);

    // var _show_ti;
    vm.set("$CPrivate.$Event.show", function(e) {
        _normal();
        // clearTimeout(_show_ti);
        var offset = this.getBoundingClientRect();
        var _re_y = e.pageY - offset.top - scrollY;
        var _re_x = e.pageX - offset.left - scrollX;
        vm.set("$CPrivate.$Cache.top", _re_y);
        vm.set("$CPrivate.$Cache.left", _re_x);
        var _re_x_2 = offset.width - _re_x;
        if (_re_x_2 < _re_x) {
            _re_x_2 = _re_x;
        }
        _re_x_2 *= 2;
        vm.set("$CPrivate.$Cache.width", _re_x_2);
        vm.set("$CPrivate.$Cache.height", _re_x_2);
        _clicking();
        // _show_ti = setTimeout(function() {
        //     _normal();
        // }, 500)
    });
    vm.set("$CPrivate.$Event.hidden", _normal);
});