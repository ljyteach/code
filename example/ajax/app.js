var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen("3000");
console.log("服务器已经启动！");