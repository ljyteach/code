// var test = require("./modules/url"); //可以
// var test = require("modules/url"); //不可以
// var test = require("/modules/url"); //不可以
// var test = require("url"); //不可以
// var test = require("modules/url.js"); //不可以
// var test = require("/modules/url.js"); //不可以
// var test = require("./modules/url.js"); //可以
//test();

var fs = require("fs");
// var url = "data/userlist.json"; //可以
// var url = "./data/userlist.json"; //可以
var url = "/data/userlist.json"; //不可以
fs.readFile(url,"utf8",function(err,data){
  console.log(data);
  console.log(url);
})
