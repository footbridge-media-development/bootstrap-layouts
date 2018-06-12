// Converts relative URLs to absolute

if ($ === undefined){
	throw "links.js requires jQuery. jQuery is not loaded or a restricted package is not defining the '$' variable.";
}

$(document).ready(function(){
	var baseUrl = window.location.protocol + "//" + window.location.hostname;
	var convertedLinks = 0;

	$("a").each(function(i,v){
		var anchor = $(v);
		var href = anchor.attr('href');

		if (href !== undefined){
			if (href.substr(0, 1) === "/"){
				// Relative URL. Convert to absolute
				anchor.attr('href', baseUrl + href);
				convertedLinks++;
			}
		}
	});

	console.log("Converted " + convertedLinks + " relative links to absolute.");
});
