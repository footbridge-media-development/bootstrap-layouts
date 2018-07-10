// Pure JavaScript. No dependencies
// Written by Garet C. Green

var INTERIOR_NAV_COLOR = "rgba(0,0,0,0.88)";

if (!("location" in window)){
	throw new ReferenceError("You are using an outdated browser. It does not support window.location");
}

var URI = window.location.pathname;

// Below checks if the URI is not a /. This is a "if this page is not the home page" check
if (URI !== "/"){
	var smallNavContainer = document.getElementById("small-navigation-container-1");
	var boxSizedHeight = smallNavContainer.clientHeight; // Includes the height + padding + borders
	smallNavContainer.style.position = "fixed";
	smallNavContainer.style.top = 0;
	smallNavContainer.style.marginTop = 0;
	smallNavContainer.style.backgroundColor = INTERIOR_NAV_COLOR;

	// Adjust margins
	var pusher = document.createElement("div");
	pusher.setAttribute("id", "pusher");
	document.body.insertBefore(pusher, smallNavContainer);
	pusher.style.height = String(boxSizedHeight) + "px";

	window.addEventListener("DOMContentLoaded", function(){
		var smallNavContainer = document.getElementById("small-navigation-container-1");
		var pusher = document.getElementById("pusher");
		var boxSizedHeight = smallNavContainer.clientHeight;
		pusher.style.height = String(boxSizedHeight) + "px";
	});
}
