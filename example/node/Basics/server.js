//阻塞与非阻塞
//事件驱动：当发生了xxx事情后，函数就会被调用。
var http = require("http");
var server = http.createServer(function(req,res){
	res.end("hello");
})
server.listen(3000); //指定http服务器监听的端口
console.log("服务器已经启动！")

/*
http是一个模块：使用require可以引入模块
模块的分类
核心模块：http fs path
文件模块：通过路径引入
第三方模块（node_modules,通过npm安装）

*/