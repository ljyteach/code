var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine","jade");

app.get("/gettxt",function(req,res){
	fs.readFile("data/hello.txt","utf8",function(err,data){
		res.send(data);
	})
})

app.get("/sendParam",function(req,res){
	var para = req.query;
	res.send(para);
})

app.post("/sendParam",function(req,res){
	var para = req.body;
	res.send(para);
})

app.get("/getjson",function(req,res){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		// var json = JSON.parse(data);
		// res.send(json);
		res.send(data);
	})
})

app.post("/posttxt",function(req,res){
	fs.readFile("data/hello.txt","utf8",function(err,data){
		res.send(data);
	})
})

app.get("/gettab:id",function(req,res){
	var key = req.params.id;
	res.render("tab"+key)
	//res.send("haha")
})

app.post("/serialize",function(req,res){
	console.log(req.body);
	res.send("数据接收成功")
})

app.get("/cross",function(req,res){
	res.header("Access-Control-Allow-Origin","*")
	res.send("跨域请求的数据");
})

app.get("/jsonp",function(req,res){
	var params = req.query;
	res.jsonp({key:"lee",test:params.test})
})

app.post("/jsonp",function(req,res){
	var params = req.body;
	console.log("post")
	res.jsonp({key:"lee",test:params.test})
})



app.listen("3000");
console.log("服务器已经启动！");
