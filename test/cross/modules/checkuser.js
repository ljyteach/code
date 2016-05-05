var fs = require("fs");
function checkuser(opi,next){
	fs.readFile("data/user.json","utf8",function(err,data){
		var user = JSON.parse(data);
		console.log(opi);
		for(var i in user){

			if(user[i].username == opi.username && user[i].password == opi.password){
				next(true,user[i]);
				return;
			}
		}
		next(false);
	})
}

module.exports = checkuser;