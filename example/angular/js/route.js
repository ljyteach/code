var app = angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"pages/home.html"
	}).when("/teacher",{
		templateUrl:"pages/teacher.html",
		controller:"teacherCtrl"
	}).when("/student",{
		templateUrl:"pages/student.html",
		controller:"studentCtrl"
	}).otherwise({
		templateUrl:"pages/notFound.html"
	})
})