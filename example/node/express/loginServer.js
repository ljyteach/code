var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.post("/login",function(req,res){
	fs.readFile("data/user.json","utf8",function(err,data){
		var userJson = JSON.parse(data);
		for(var i in userJson){
			if(userJson[i].username == req.body.username && userJson[i].password == req.body.password){
				res.send("登录成功")
				return;
			}
		}
		res.send("登录失败");
	})
})

app.listen(3000);
console.log("服务器已经成功启动！");