
    // Hero Slider Controller
	
	// function to preload images to avoid flashing
	function preload(url){
		var img = new Image();
		img.src = url;
	}

    function heroSlider(obj) {
		
		// preload all of them
		$.each(obj.images, function(i, url){
			preload(url);
		});
        
        obj.heroContainer.css('background', 'url(' + obj.images[0] + ')');
          
        var int = 0;

        setInterval(function(){
            obj.heroContainer.css({
                background: 'url(' + obj.images[int = ++int % obj.images.length ] + ')'
            });
        }, obj.speed);
                    
    }
    

