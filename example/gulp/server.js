var express = require("express");
var app = express();
app.get("/",function(req,res){
	res.send("hahahaha")
})
app.listen(3000);
console.log("服务器已经启动");