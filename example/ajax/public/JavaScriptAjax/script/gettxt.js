var oBtn = document.getElementById("btn");
oBtn.onclick = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("get","/gettxt",true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			alert(xhr.responseText);
		}
	}
}