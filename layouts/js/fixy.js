$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		let largeNavHeight = $("#large-navigation-container-2").outerHeight();
		$("#large-navigation-container-2").addClass("turnME").css("top", 0);
		$("#pusher").height(largeNavHeight);
	}else{
		$("#large-navigation-container-2").removeClass("turnME");
		$("#pusher").height(0);
	}
});
