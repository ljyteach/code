var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/cross",function(req,res){
	res.header("Access-Control-Allow-Origin","*")
	res.send("hello");
})
app.get("/jsonp",function(req,res){
	res.jsonp({name:"server2data"})
})
app.listen(8080);
console.log("服务器二已经启动！")