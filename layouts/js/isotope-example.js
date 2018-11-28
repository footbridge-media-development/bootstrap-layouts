$(window).on("load", function(){
	$('.x-cal-js-efjs-ajdnsl-dejn').isotope({
		masonry:{
			itemSelector: '.x-cal-js-efjs-ajdnsl-dejn a',
			columnWidth: 140
		}
	});

	$("button[filter]").on("click", function(){
		var filter = $(this).attr('filter');
		$('.x-cal-js-efjs-ajdnsl-dejn').isotope({
			filter:filter,
			masonry:{
				itemSelector: '.x-cal-js-efjs-ajdnsl-dejn a',
				columnWidth: 140
			}
		});
	});
});
