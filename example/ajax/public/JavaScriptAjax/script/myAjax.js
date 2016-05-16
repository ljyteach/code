var myAjax = (function(){
	var xhr = null;
	if (window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}
	else{
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}

	function get(url,next){
		xhr.open("get",url,true);
		xhr.send()
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				next(xhr.responseText);
			}
		}
	}
	
	return {
		get:get
	}

})()