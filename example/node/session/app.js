var express = require("express");
var bodyParser = require("body-parser");
// var cookieParser = require("cookie-parser");
var session = require("express-session");
var user = require("./modules/user");
var app = express();
app.set("view engine","jade");
app.use(bodyParser.urlencoded({extended:false}));
// app.use(cookieParser());
app.use(session({
  // resave:false,

  // saveUninitialized:false,
  //通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。
  secret: 'leeSession' 
}));

app.get("/",function(req,res){
	res.render("login");
})

app.post("/login",function(req,res){
	user(req.body,function(result,user){
		if(result){
			req.session.user = user;
			res.redirect("/index")
		}else{	
			res.redirect("/")
		}
	})
})

app.get("/index",function(req,res){
	if(req.session.user){
		res.render("index",{user:req.session.user});
	}else{
		res.redirect("/");
	}
})

app.get("/logout",function(req,res){
	req.session.user = null
	res.redirect("/");
})

app.listen("3000");
console.log("服务器已经启动！");