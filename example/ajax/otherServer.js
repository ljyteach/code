var express = require("express");
var app = express();
app.use(express.static("otherserver"));
app.listen(8080);
console.log("另一台服务器已经启动！");