//url模块的使用
//通过对路由的设置，可将请求分发给实际的处理程序。
var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	res.end(pathname)
});
server.listen(3000);
console.log("服务器已经成功启动！");