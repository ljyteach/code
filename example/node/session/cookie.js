var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser("my test!"))
app.get("/",function(req,res){
	//编辑相应头可以在客户端写入cookie
	//res.setHeader("set-cookie",["name=lee","age=30"]);
	//res.send("hello");

	//使用cookie-parser可以读取客户端cookie
	// var name = req.cookie.name;
	// var age = req.cookie.age;

	console.log(req.cookies);
	res.send(req.cookies);

})
app.listen(3000);
console.log("服务器已经启动！");