$(document).ready(function(){
	var dropdownOpenSpeed = 200; // in milliseconds

	// ***********************************
	// Code for large-screen dropdowns
	// ***********************************
		function turnRGBToRGBA(colorString, alpha){
			if (colorString.indexOf("rgba") !== -1){
				console.log("Already is rgba");
				return colorString.replace(/[\d\.]+\)/, alpha + ")"); // Already rgba
			}else{
				// Assume RGB
				if (alpha !== undefined){
					colorString = colorString.replace(")", ", " + alpha + ")").replace("rgb", "rgba");
				}else{
					colorString = colorString.replace(")", "0)").replace("rgb", "rgba");
				}
				return colorString
			}
		}

		function adjustNavFixedOpacity(forceFullOpacity){
			var windowScrollThreshold = 400; // How far to scroll, in pixels, before full opacity
			var currentScroll = $(window).scrollTop();
			var percentageScrolled = currentScroll / windowScrollThreshold;

			if (percentageScrolled > 1 || forceFullOpacity === true){
				percentageScrolled = 1;
			}

			var colorString = turnRGBToRGBA($(".nav-fixed").css("background-color"), percentageScrolled);
			console.log("Setting color of nav to " + colorString);

			$(".nav-fixed").css("background-color", colorString);
		}

		function setPageTopPaddingToHeight(height){
			$("#page").css({
				"padding-top":height
			});
		}

		// Determine if the navigation is compatible with nav-fixed
		var supportedFixedNavs = ["large-navigation-container-3"];
		if ($(".nav-fixed").length > 0){
			if (supportedFixedNavs.indexOf($(".nav-fixed").attr("id")) == -1){
				alert("You have placed the class 'nav-fixed' on an element that does not support it.");
			}else{
				// Hook the events and call the function once for the page load
				if ($(".nav-fixed").hasClass("interior")){
					adjustNavFixedOpacity(true);
					setPageTopPaddingToHeight($(".nav-fixed").height());
					$(window).on("scroll", function(){
						setPageTopPaddingToHeight($(".nav-fixed").height());
					});
					$(window).on("resize", function(){
						setTimeout(function(){
							setPageTopPaddingToHeight($(".nav-fixed").height());
						}, 55);
					});
				}else{
					$(window).on('scroll', adjustNavFixedOpacity);
					adjustNavFixedOpacity();
				}
			}
		}

	// ***********************************
	// Code for large-screen dropdowns
	// ***********************************
		/**
		*	Because the scrollHeight property of an element includes absolute-positioned
		*	children's height, this function exists to get the the total height of all
		*	direct children.
		*
		*	@param jQuery jQueryDropDown - the jQuery object of the dropdown div
		*/
		function getTotalHeightOfAllDirectChildren(jQueryDropdown){
			let totalHeight = 0;
			jQueryDropdown.children().each(function(){
				totalHeight += $(this).height();
			});

			return totalHeight;
		}

		$(".dropdown").parent()/*.children("a")*/.mouseenter(function(){
			var container = $(this);//.parent();
			var menu = container.children(".dropdown");
			if (container.length > 0 && menu.css("visibility") === "hidden"){
				// Dropdown exists
				menu.css("visibility", "visible").css("height", 0).animate({height: getTotalHeightOfAllDirectChildren(menu)}, dropdownOpenSpeed);
			}else if (menu.css("visibility") === "visible"){
				// The dropdown is currently visible, but the mouse entered? This means it was trying to close.
				// Close it immediately then open it again.
				menu.css("visibility", "hidden");
				menu.css("visibility", "visible").css("height", 0).animate({height: menu.get(0).scrollHeight}, dropdownOpenSpeed);
			}
		});

		$(".dropdown").parent().children("a").each(function(index, element){
			element = $(element); // Make the element a jQuery object
			var container = element.parent();
			var menu = container.children(".dropdown");
			container.mouseleave(function(){
				menu.css("visibility", "hidden");
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

				function closeSmallMenu1(){
					var backdrop = $("#small-navigation-container-1 .pullout-menu-backdrop");
					var navContainer = backdrop.children("div");

					// Close the menu
					navContainer.css("margin-right", navContainer.attr('data-original-margin-right'));

					setTimeout(function(){
						backdrop.removeClass("d-flex");
						backdrop.addClass("d-none");
					}, 150); // The 150ms timeout here is because the CSS animation is set to 150ms. If you change the CSS animation speed also change the timeout here.
				}

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
					closeSmallMenu1();
				});

				// Disallow bubbling
				$("#small-navigation-container-1").find(".pullout-menu-backdrop").children("div").click(function(e){
					// This stops the bubbling.
					// JavaScript events bubble up through their parent elements.
					// Without this code the event would bubble to the transparent backdrop and cause the menu to close whenever a user clicks or taps inside the actual menu.
					// That is ... undesirable ...
					if (e.target.tagName == "A"){
						return;
					}
					e.stopPropagation();
					return false;
				});

				// Close the small menu on resize.
				$(window).on('resize', function(){
					// timeout because of the "window resize" event fires before the resize happens
					setTimeout(function(){
						// Check if it's open first.
						if ($("#small-navigation-container-1 .pullout-menu-backdrop").is(":visible")){
							closeSmallMenu1();
						}
					}, 50);
				});

			}
});
