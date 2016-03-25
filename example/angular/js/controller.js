app.controller("studentCtrl",function($scope,$http){
	$http({
		method:"get",
		url:"data/student.json"
	}).success(function(data){
		$scope.data = data;
	})
})

app.controller("teacherCtrl",function($scope,$http){
	$http({
		method:"get",
		url:"data/teacher.json"
	}).success(function(data){
		$scope.data = data;
	})
})