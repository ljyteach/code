var express = require("express");
var bodyParser = require("body-parser")
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded());
app.post("/login",function(req,res){
  console.log(req.body);
  res.end("success")
})
app.listen(3000);
console.log("服务器已经启动!");
