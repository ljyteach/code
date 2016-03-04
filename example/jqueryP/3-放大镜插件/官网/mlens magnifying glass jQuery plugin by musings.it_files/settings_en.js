$(document).ready(function()
{
	$("#mlens_logo").mlens(
	{
		imgSrc: $("#mlens_logo").attr("data-big"),
		lensShape: "circle",
		borderSize: 3,
		lensSize: 110
	});
	
	$("#green_monster").mlens(
	{
		imgSrc: $("#green_monster").attr("data-big"),
		imgSrc2x: $("#green_monster").attr("data-big2x"),
		lensShape: "circle",
		lensSize: 180,
		borderSize: 4,
		borderColor: "#fff",
		imgOverlay: $("#green_monster").attr("data-overlay"),
		zoomLevel: 1
	});
	
	$("#form_button").click(function(e)
	{
		e.preventDefault();
		var $new_settings = [];
		$("#real_time_form select, #real_time_form input").each(function(index)
		{
			$new_settings[index] = $(this).val();
		});
		
		$("#green_monster").mlens("update",
		{
			imgSrc: $("#green_monster").attr("data-big"),
			imgSrc2x: $("#green_monster").attr("data-big2x"),
			lensShape: $new_settings[0],
			lensSize: $new_settings[1],
			borderSize: $new_settings[2],
			borderColor: $new_settings[3],
			borderRadius: $new_settings[4],
			zoomLevel: $new_settings[5]
		});
		
		var $risposta = "<p>&larr; New values setted, try now!</p>";
		$("#risposta").html($risposta).show().fadeOut(4000);
	
	});
	
	$("#form_button_reset").click(function(e)
	{
		$("#green_monster").mlens("update",
		{
			imgSrc: $("#green_monster").attr("data-big"),
			imgSrc2x: $("#green_monster").attr("data-big2x"),
			lensShape: "circle",
			lensSize: 180,
			borderSize: 4,
			borderColor: "#fff",
			zoomLevel: 1
		});
	});
	
	//riporta valori del form allo stato iniziale con refresh F5
	$(window).unload(function()
	{
		$("#form_button_reset").click();
	});
	
	
	$("#share").share(
	{
		networks: ['facebook','pinterest','googleplus','twitter','linkedin','tumblr','in1','email','stumbleupon','digg']
	});
	
	$("a[href^='http://']").attr("target","_blank");
});