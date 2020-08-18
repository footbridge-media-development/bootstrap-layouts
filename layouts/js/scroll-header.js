const navigation = document.querySelector("nav");
const navigationY = navigation.offsetHeight;

window.addEventListener('scroll', function() {
	if (window.pageYOffset > navigationY) {
		navigation.classList.add("is-scrolled");
	} else {
		navigation.classList.remove("is-scrolled");
	}
});