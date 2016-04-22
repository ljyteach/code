var oBtn = document.getElementById("btn");
oBtn.onclick = function(){
	var xhr = new XMLHttpRequest();
	xhr.open("post","/sendParam",true);
	xhr.send("key=haha");  //未获取参数
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log(xhr.responseText);
		}
	}
}