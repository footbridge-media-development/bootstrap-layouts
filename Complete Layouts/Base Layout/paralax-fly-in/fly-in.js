(function($) {
  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var flyBox = $(".flybox");
var flyBox2 = $(".flybox2");

flyBox.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
flyBox2.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
    flyBox2.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fly-ins2"); 
    } 
  });
  
  flyBox.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fly-ins"); 
    } 
  });
  
});