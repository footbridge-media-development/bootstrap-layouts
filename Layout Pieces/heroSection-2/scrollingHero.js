
    // Hero Slider Controller

    function heroSlider(obj) {
        
        obj.heroContainer.css('background', 'url(' + obj.images[0] + ')');
          
        var int = 0;

        setInterval(function(){
            obj.heroContainer.css({
                background: 'url(' + obj.images[int = ++int % obj.images.length ] + ')'
            });
        }, obj.speed);
                    
    }
    

