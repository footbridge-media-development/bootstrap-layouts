// DYNAMIC ABOVE THE FOLD HERO IMAGE SECTION
    
function defineHeight(){
    var vh = $(window).height();
    var d = $('.dynamic-fold');
    d.css('height', vh)
}
defineHeight();


//SCROLL DOWN TO NEXT SECTION

function scrollDown(){
    var vh = $(window).height();
    
    $('html, body').animate({
    scrollTop: vh
  }, 1000);
    
}

function parallaxAnimation(){
    $('.parallax-bg').addClass('animate-bg');
    setTimeout(function(){
    $('.parallax-bg').removeClass('animate-bg');    
    },1000);
}

// CLICK BUTTON TO CALL scrollDown() FUNCTION

  $('.scroll-next').click(function(e){
    scrollDown();
    parallaxAnimation();
  });


//KEEP UP ON WINDOW RESIZE

$(window).resize(function(){
    setTimeout(function(){
    defineHeight();
}, 250);
});