$(document).ready(function(){
	
	// TODO -> fix for dropdown not re-appearing when mouse re-enters too quickly is not to check if it's visible but to simply call hide() without the animation before re-displaying it again.
	
	// ***********************************
	// Code for large-screen dropdowns
	// ***********************************
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
		
	// ***********************************
	// Code for small-screen dropdowns
	// ***********************************
	
	$(".tap-dropdown").parent().children("a").click(function(e){
		e.preventDefault(); // Prevent being linked somewhere
		
		var menu = $(this).parent().children(".tap-dropdown");
		menu.toggle("fast");
		
		// Close any sub-menus inside this sub-menu as well
		menu.find(".tap-dropdown").hide();
		
		return false; // Prevent being directed somewhere on older browser (idk which)
	});
	
	// ***********************************
	// Code for opening navigation menus
	// ***********************************
	
		// ***********************************
		// Small navigation menu 1
		// ***********************************
		
			// Does this menu exist?
			
			if ($("#small-navigation-container-1").length > 0){
		
				// Open hamburger pressed
				$("#small-navigation-menu-opener-1").click(function(){
					var container = $(this).parent().parent().parent(); 
					var backdrop = container.find(".pullout-menu-backdrop"); // This is the transparent black backdrop

					// Upon opening, remove d-none
					backdrop.removeClass("d-none");
					
					// Add d-flex
					backdrop.addClass("d-flex");
					
					// Get the actual container of the nav links
					var navContainer = backdrop.children("div");
					console.log(navContainer);
					
					// Change the margin. CSS will animate it into view
					navContainer.attr('data-original-margin-right', navContainer.css("margin-right")).css("margin-right", 0);
				});
				
				// Clicked on the transparent backdrop! Close the menu
				$("#small-navigation-container-1").find(".pullout-menu-backdrop").click(function(){
					var backdrop = $(this);
					var navContainer = $(this).children("div");
					
					// Close the menu
					navContainer.css("margin-right", navContainer.attr('data-original-margin-right'));
					
					setTimeout(function(){
						backdrop.removeClass("d-flex");
						backdrop.addClass("d-none");
					}, 150); // The 150ms timeout here is because the CSS animation is set to 150ms. If you change the CSS animation speed also change the timeout here.
				});
				
				// Disallow bubbling
				$("#small-navigation-container-1").find(".pullout-menu-backdrop").children("div").click(function(e){
					// This stops the bubbling.
					// JavaScript events bubble up through their parent elements.
					// Without this code the event would bubble to the transparent backdrop and cause the menu to close whenever a user clicks or taps inside the actual menu.
					// That is ... undesirable ...
					e.stopPropagation();
					return false;
				});
	
			}
});