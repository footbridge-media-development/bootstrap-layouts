$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll > 50) {
		$("#large-navigation-container-2").addClass("turnME"); 
		console.log('fired add class');
	}
		
	else {
		$("#large-navigation-container-2").removeClass("turnME");
		console.log('fired remove')
		}
	
});

