//JSON.parse(jsonstr) 可以讲json字符串转换成json对象
//JSON.stringify(jsonobj) 可以讲json对象转换成json字符串
var fs = require("fs");
//readFile方法需要设置编码
// fs.readFile("data/userList.json","utf8",function(err,data){  
// 	var userList = JSON.parse(data);  //转换成json对象
// 	console.log(userList[0].name);
// })

/*
//删除文件
fs.unlink("data/name.txt") //直接删除文件
fs.unlink("data/name.txt",function(err){
	console.log(err); //删除未成功会返回错误信息。
})
*/

// fs.rename("data/name.txt","data/haha.json",function(err){
// 	console.log(err);
// });  //修改文件名

//判断文件是否存在，返回布尔值
// fs.exists("data/name.txt",function(exists){
// 	console.log(exists)
// })

//在文件中写入内容，并覆盖之前的内容
// fs.writeFile("data/name.txt","哈哈哈",function(err){
// 	console.log(err);
// })

fs.appendFile("data/name.txt","appendContent",function(err){
	console.log(err);
})

