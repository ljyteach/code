var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/gettxt",function(req,res){
	fs.readFile("data/hello.txt","utf8",function(err,data){
		res.send(data);
	})
})

app.get("/getjson",function(req,res){
	fs.readFile("data/userlist.json","utf8",function(err,data){
		res.send(data);
	})
})

app.post("/posttxt",function(req,res){
	fs.readFile("data/hello.txt","utf8",function(err,data){
		res.send(data);
	})
})



app.listen("3000");
console.log("服务器已经启动！");