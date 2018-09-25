// POPUP WINDOW  
$(document).ready(function() {
	var popupStatus = 0;
	$('body').append('<div id="fade"></div>');
	$('body').append('<div id="popupblock" class="centerblock"></div>');
	$('#popupblock').append('<h1>Website Layout Proof</h1>');
	$('#popupblock').append('<h2>These pages will be created once you approve this design layout.</h2>');
	$('#popupblock').append('<p>This page will determine the design structure of your website.</p>');
	$('#popupblock').append('<p>Please email us to let us know of any design changes that you would like to make before moving forward with your new website.</p>');
	$('#popupblock').append('<a href="#link" class="close">Close Window</a>');
	$('a[href^=#link]:not(.dropdown)').click(function() {
		if (popupStatus == 0) {
			$('.centerblock').css({
				left: ($(window).width() - $('.centerblock').outerWidth()) / 2,
				top: ($(window).height() - $('.centerblock').innerHeight()) / 2
			});
			$("body").scrollTop(0);
			$("#fade").fadeIn("slow");
			$("#popupblock").fadeIn("slow");
			popupStatus = 1;
			return false;
		} else {
			$('#fade').fadeOut("slow");
			$('#popupblock').fadeOut("slow");
			popupStatus = 0;
			return false;
		}
	});
});
// END POPUP WINDOW