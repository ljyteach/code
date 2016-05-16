var fs = require("fs");
var dataUrl = "data/userList.json";
var addData = function(option){
	fs.readFile(dataUrl,"utf8",function(err,data){
		if(!err){
			var userList = JSON.parse(data);
			userList.push(option);
			var userStr = JSON.stringify(userList,null,4);
			fs.writeFile(dataUrl,userStr,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("数据添加成功！");
				}
			})
		}
	})
}

var deleteData = function(option){
	fs.readFile(dataUrl,"utf8",function(err,data){
		if(!err){
			var userList = JSON.parse(data);
			var newUserList = [];
			for(var i in userList){
				if(userList[i].name == option.name && userList[i].age == option.age){
					continue;
				}
				newUserList.push(userList[i]);
			}
			var userStr = JSON.stringify(newUserList,null,4);
			fs.writeFile(dataUrl,userStr,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("数据删除成功！");
				}
			})
		}
	})
}

var updateData = function(oriOpi,newOpi){
	fs.readFile(dataUrl,"utf8",function(err,data){
		if(!err){
			var userList = JSON.parse(data);
			for(var i in userList){
				if(userList[i].name == oriOpi.name && userList[i].age == oriOpi.age){
					userList[i].name = newOpi.name;
					userList[i].age = newOpi.age;
				}
			}
			var userStr = JSON.stringify(userList,null,4);
			fs.writeFile(dataUrl,userStr,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("数据修改成功！");
				}
			})
		}
	})
}

var oriData = {
	"name":"小亮",
	"age":56
}

var newData = {
	"name":"小哈哈",
	"age":6
}

updateData(oriData,newData);