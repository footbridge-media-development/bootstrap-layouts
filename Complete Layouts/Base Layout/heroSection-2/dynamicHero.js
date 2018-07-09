// DYNAMIC ABOVE THE FOLD HERO IMAGE SECTION
    
$(function(){    
    //FIND THE HEIGHT AND DEFINE IT IN CSS
    
    function defineHeight(){
    var windowHeight = $(window).height();
    var dynamicSection = $('.dynamic-hero-section');
    dynamicSection.css('height', windowHeight)
    }
    defineHeight();


    //SCROLL DOWN TO NEXT SECTION

    function scrollDown(){
        var windowHeight = $(window).height();
        var headerHeight = $('#large-navigation-container-2').height();

        $('html, body').animate({
        scrollTop: windowHeight - headerHeight
      }, 1000);

    }

    function parallaxAnimation(){
        $('.parallax-bg').addClass('animate-bg');
        setTimeout(function(){
        $('.parallax-bg').removeClass('animate-bg');    
        },1000);
    }

    // CLICK BUTTON TO CALL scrollDown() FUNCTION

      $('#scroll-next').click(function(){
        scrollDown();
        parallaxAnimation();
      });


    //KEEP UP ON WINDOW RESIZE

    $(window).resize(function(){
        setTimeout(function(){
        defineHeight();
    }, 250);
    });
    
});