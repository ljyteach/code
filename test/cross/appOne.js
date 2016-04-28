var express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(3000);
console.log("服务器一已经启动！")