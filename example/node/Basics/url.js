var url = require("url");  //url是一个模块
var address = "http://news.cnblogs.com/n/542977/?username=lee";
var urlObj = url.parse(address);

console.log(urlObj.pathname);  //资源的路径名
console.log(urlObj.path);  //资源路径
console.log(urlObj.host);  //主机名
console.log(urlObj.query);  //参数