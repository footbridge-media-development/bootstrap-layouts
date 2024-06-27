
window.addEventListener('scroll', ()=>{
	updateNav();
});
window.addEventListener('DOMContentLoaded', ()=>{
	updateNav();
});

function updateNav() {
	const nav = document.querySelector("#lg-nav-v2-1");
	const call = document.querySelector(".call-num");

	if (window.pageYOffset >= 5) {
		call.classList.add("is-scrolled");
		nav.classList.add("is-scrolled");
	} else {
		call.classList.remove("is-scrolled");
		nav.classList.remove("is-scrolled");
	}
}
