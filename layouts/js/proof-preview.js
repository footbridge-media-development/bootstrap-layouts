$(document).on("click", "a", function(e){
	e.preventDefault();
	e.stopPropagation();
	$("#preview-only-notice").modal("show");
});
