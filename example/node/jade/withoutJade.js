var express = require("express");
var fs = require("fs");
var app = express();
app.get("/",function(req,res){
	fs.readFile("data/list.json","utf8",function(err,data){
		var htmlTop = 	"<!DOCTYPE html>" +
						"<html lang='en'>" +
						"<head>" +
							"<meta charset='UTF-8'>" +
							"<title>Document</title>" +
						"</head>" +
						"<body><ul>"
		var htmlBottom = "</ul></body></html>"
		var listJson = JSON.parse(data);
		var allLi = ""
		for(var i in listJson){
			var liStart = "<li>";
			var liEnd = "</li>";
			var item = liStart + listJson[i] + liEnd;
			allLi += item;
		}
		var html = htmlTop + allLi + htmlBottom;
		res.send(html);
	})
})
app.listen(3000);
console.log("服务器已经启动!");