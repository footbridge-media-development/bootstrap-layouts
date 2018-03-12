$(document).ready(function(){
	
	// Drop down functionality
	$(".dropdown").parent().children("a").mouseenter(function(){
		var container = $(this).parent();
		var menu = container.children(".dropdown");
		if (container.length > 0 && !menu.is(":visible")){
			// Dropdown exists
			menu.show("fast");
		}
	});
	
	$(".dropdown").parent().children("a").each(function(index, element){
		element = $(element); // Make the element a jQuery object
		var container = element.parent();
		var menu = container.children(".dropdown");
		container.mouseleave(function(){
			menu.hide("fast");
		})
	});
	
});