var $picList =  $("#picList");
	//cycle('blindX');
	//cycle('blindY')
	//cycle('curtainX')
	//cycle('fade')  
	//cycle('fadeZoom')
	//cycle('growX')
	//cycle('scrollUp')
	//cycle('scrollHorz')
	//cycle('scrollVert')   
	//cycle('shuffle')
	//cycle('slideX')
	//cycle('slideY')
	//cycle('toss')
	//cycle('turnUp')
	//cycle('wipe')
	//cycle('zoom')
	//cycle('fade')
$picList.cycle({
		"fx":"blindX",
		speed:500,
		timeout:2000,
		pause:true,
		"before":function(){
			var index = $(this).index();
			$("#numList li").eq(index)
							.addClass("active")
							.siblings()
							.removeClass("active");
		}
	});
$("#numList li").click(function(){
	var index = $(this).index();
	$picList.cycle(index);
	$(this).addClass("active").siblings().removeClass("active");
});
$("#left").click(function(){
	$picList.cycle("prev");
});
$("#right").click(function(){
	$picList.cycle("next");
});