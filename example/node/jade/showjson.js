var express = require("express");
var fs = require("fs");
var app = express();
app.set("view engine","jade");

app.get("/",function(req,res){
	//res.render("list",{"test":"这是一个测试网页"});
	fs.readFile("data/list.json",function(err,data){
		var listJson = JSON.parse(data);
		res.render("list",{"data":listJson});
	})
})

app.listen(3000);
console.log("服务器已经启动！");
