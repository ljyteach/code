var oBtn = document.getElementById("btn");
oBtn.onclick = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("post","/posttxt",true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log(xhr.responseText);
		}
	}
}