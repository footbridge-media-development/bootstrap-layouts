/*document.addEventListener("scroll", fixFunction);
function fixFunction(){
	let scroll = window.scrollTop;
	if (scroll > 200) {
		// Sets the height of the .pusher element to fix top-spacing
		// for fixed-pos navs on interior pages
		let navH = document.getElementById("#large-navigation-container-2").outerHeight();
		document.getElementById("#large-navigation-container-2").classList.toggle("turnME");
		document.getElementById(".pusher").css({"height": navH});
	}else{
		document.getElementById("#large-navigation-container-2").classList.toggle("turnME");
		document.getElementById(".pusher").style.cssText({"height": ""});
	}
}
*/
$(window).scroll(function (event) {
	let scroll = $(window).scrollTop();
	if (scroll > 200) {
		// Sets the height of the .pusher element to fix top-spacing
		// for fixed-pos navs on interior pages
		let navH = $("#large-navigation-container-2").outerHeight();
		$("#large-navigation-container-2").addClass("turnME");
		$(".pusher").css({"height": navH});
	}else{
		$("#large-navigation-container-2").removeClass("turnME");
		$(".pusher").css({"height": ""});
	}
});
