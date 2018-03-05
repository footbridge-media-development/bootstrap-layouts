$(document).ready(function(){
	
	// Drop down functionality
	$(".has-dropdown").mouseenter(function(){
		var container = $(this).parent();
		var menu = container.find(".dropdown");
		if (container.length > 0){
			// Dropdown exists
			menu.show("fast");
		}
	});
	
	$(".has-dropdown").each(function(index, element){
		element = $(element); // Make the element a jQuery object
		var container = element.parent();
		var menu = container.find(".dropdown");
		container.mouseleave(function(){
			menu.hide("fast");
		})
	});
	
});