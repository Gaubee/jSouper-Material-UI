/*
 * 应用启动
 */
var express = require("express");
var path = require('path');
var app = express();

/*
 * 配置
 */
var port = 9009;

app.all("/*", function(req, res) {
	var file = req.params[0] || "index.html";
	// console.log('请求文件： ' + file + ' ...');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.sendfile('./' + file, {
		'root': __dirname
	}, function(err) {
		if (err) {
			//保护服务器信息
			err.path = file;
			res.send(404, err);
			// res.send(404, 'Sorry! We could not give you what you want.');
			// console.log('　　文件： ' + file + ' 请求失败');
		} else {
			// console.log('　　文件： ' + file + ' 请求成功');
		}
	});
})

app.listen(port);
console.log("HTTP服务开启在" + port + "端口上。");