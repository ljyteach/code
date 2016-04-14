var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","jade");  //设置模板引擎为jade
app.set("views","public");  //设置视图对应目录,默认为views文件夹
app.get("/",function(req,res){
	res.render("test",{title:"hahaha"})
})
app.listen(3000);
console.log("服务器已经启动");