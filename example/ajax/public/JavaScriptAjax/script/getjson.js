var oBtn = document.getElementById("btn");
oBtn.onclick = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("get","/getjson",true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var json = JSON.parse(xhr.responseText);
			console.log(json);
		}
	}
}