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
	let cls = $(this).closest(".section").next().offset().top;
	$("html, body").animate({scrollTop: cls}, "slow");
});
