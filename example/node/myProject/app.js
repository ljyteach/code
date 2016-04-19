var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine","jade");
app.get("/",function(req,res){
  res.render("login",{"title":"用户登陆"});
});
app.post("/login",function(req,res){
  fs.readFile("data/userlist.json","utf8",function(err,data){
    var userlist = JSON.parse(data);
    for(var i in userlist){
      if(req.body.username == userlist[i].username && req.body.password == userlist[i].password){
        res.render("list",{"result":"登陆成功","data":userlist});
      }
    }
    console.log(req.body.username);
    console.log(req.body.password);
    res.render("list",{"result":"登陆失败"});
  })
})
app.listen(3000);
console.log("服务器已经启动!");
