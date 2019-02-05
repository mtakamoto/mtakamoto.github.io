$(document).ready(function() {
	$("#animationButton").on("click", function() {
		var top = $("#top"), myPic = $("#myPic");
		myPic.css("border", "3px solid red");
        top.css("color", "red");
		top.animate({fontSize: '3em' }, "1000");
		top.animate({fontSize: '2em' }, "500", function() {
        /* Put things back */    
        top.css("color", "purple");
        myPic.css("border", "3px", "none");    
		});
	});
});