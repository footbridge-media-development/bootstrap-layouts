$(function()
{		
		
		if ($(window).width() > 992)
		{
			 $('.fullwindow') .css({'min-height': (($(window).height()))+'px'});
		}
		else {
			$('.fullwindow') .css({'min-height': '400px'});
		}
       
    
        $(window).bind('resize', function(){
			if ($(window).width() > 992)
		{
			 $('.fullwindow') .css({'min-height': (($(window).height()))+'px'});
		}
		else {
			$('.fullwindow') .css({'min-height': '400px'});
		}
            
        });
});
$(".scroll-next").click(function() {
		var cls = $(this).closest(".section").next().offset().top;
		$("html, body").animate({scrollTop: cls}, "slow");

	});

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});