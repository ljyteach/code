var express = require("express");
var app = express();
app.use(express.static("webApp"));
app.listen(3000);
console.log("服务器已经启动！");