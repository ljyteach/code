var express = require("express");
var bodyParser = require("body-parser");
var app = express();
//use方法，使用中间件
// app.use(bodyParser.urlencoded({ extended: false })); //req.body可以获取参数
app.use(bodyParser.urlencoded()); //req.body可以获取参数
app.use(express.static("public"));  //设置静态文件目录

//设置路由，接收get请求
app.get("/",function(req,res){
	res.send("hello express");
});

//设置路由，接收post请求
app.post("/login",function(req,res){
	console.log(req.body);  //post请求参数用body属性获取，但是要引入body-parser模块
	res.send("post用户登录");
})

app.get("/login",function(req,res){
	console.log(req.query);  //get求情可以直接使用query属性获取
	res.send("get用户登录");
})
//处理404
app.use(function(req,res){
	res.status(404).send("no page");
})
var server = app.listen(3000,function(req,res){
	console.log("服务器已经启动!");
});
