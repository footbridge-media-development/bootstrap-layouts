$(".scroll-next").click(function() {
	let cls = $(this).closest(".section").next().offset().top;
	$("html, body").animate({scrollTop: cls}, "slow");
});
