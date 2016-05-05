var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var checkuser = require("./modules/checkuser");
var app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
	secret:"lee"
}))
app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("index");
})
app.use(express.static("public"));
app.post("/login",function(req,res){
	checkuser(req.body,function(result,user){
		if(result){
			req.session.user = user;
			res.redirect("/list")
		}else{
			res.redirect("/")
		}
	})
})

app.get("/list",function(req,res){
	var user = req.session.user;
	if(user){

		res.render("list",{user:user})
	}else{
		res.redirect("/")
	}
})

app.listen(3000);