// DYNAMIC ABOVE THE FOLD HERO IMAGE SECTION
    
function defineHeight(){
    var h = $(window).height();
    var d = $('.dynamic-fold');
    d.css('height', h)
}
defineHeight();

//KEEP UP ON WINDOW RESIZE

$(window).resize(function(){
    setTimeout(function(){
    defineHeight();
}, 250);
});
