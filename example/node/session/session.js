var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret: 'lee',
  cookie:{
  	maxAge:1000
  }
}))
app.get("/",function(req,res){
	session.count = session.count || 0;
	var n = session.count ++;
	res.send(session.id + " " +n);
})
app.listen(3000);