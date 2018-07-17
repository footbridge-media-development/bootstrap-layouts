$(document.createElement("style")).html(`
	.accordion-toggle {cursor:pointer}
	.accordion-content {display:none}
	.accordion-content.default {display:block}
`).appendTo($("head"));

$('#accordion').find('.accordion-toggle').click(function(){

	//Expand or collapse this panel
	$(this).next().slideToggle('fast');

	//Hide the other panels
	$(".accordion-content").not($(this).next()).slideUp('fast');

});