var express = require("express");
var dataHandle = require("./modules/dataHandle")
var app = express();
app.use(express.static("public"));
app.set("view engine","jade");

app.get("/user",function(req,res){
	dataHandle.filterData("data/userlist.json",req.query.key,function(data){
		console.log(data);
		console.log(req.query.key);
		res.render("filter",{data:data})
	})
})

// app.get("/user:id",function(req,res){
// 	console.log(req.params.id);
// 	dataHandle.filterData("data/userlist.json",req.params.searchCon,function(data){
// 		res.render("filter",{data:data});
// 	})
// })

app.get("/",function(req,res){
	res.send("nihao")
})

app.listen(3000);
console.log("服务器已经启动！")