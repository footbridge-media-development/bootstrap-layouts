$(document.createElement("style")).html(`
	.accordion-toggle {cursor:pointer}
	.accordion-content {display:none}
	.accordion-content.default {display:block}
`).appendTo($("head"));

$('.accordion').find('.accordion-toggle').click(function(){

	var thisContent = $(this).parent().find(".accordion-content");

	//Hide the other panels
	$(".accordion-content").not(thisContent).slideUp('fast');

	//Expand or collapse this panel
	thisContent.slideToggle('fast');

});
