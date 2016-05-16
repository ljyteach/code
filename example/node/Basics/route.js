var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname == "/home"){
		res.end("home");
	}else if(pathname == "/about"){
		res.end("about me");
	}else{
		res.end("404");
	}
});
server.listen(3000);
console.log("服务器已经启动！");

//http请求方法和url组成了路由。