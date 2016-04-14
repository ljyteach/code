var express = require("express");
var app = express();
app.set("view engine","jade");
app.use(express.static("public"));
app.get("/",function(req,res){
	res.render("cssAndJs",{"title":"我的网站"});
})
app.listen("3000");
console.log("服务器已经启动！");