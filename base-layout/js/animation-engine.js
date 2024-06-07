const animatesOnMobile = false;
const classes = [
	"animated-pop-in",
	"animated-fade-in-start",
	"animated-fade-in-end",
	"animated-fade-in-top",
	"animated-fade-in-bottom"
];

const observer = new IntersectionObserver((entries, observer) => { 
	const screenWidth = document.documentElement.clientWidth;

	entries.forEach(entry => {
		const target = entry.target;
		const targetClassArray = target.classList;
		const classStringMatched = () => {
			for (const classString of targetClassArray){
				if (classes.indexOf(classString) > -1){
					return classString;
				}
			}
			return null;
		};

		if (entry.isIntersecting) {
			// animated-pop-in class animation
			if (classStringMatched() == "animated-pop-in") {
				if (!animatesOnMobile && screenWidth <= 765){
					anime({
						targets:target,
						scale:[0, 1],
						duration:0,
						easing:"easeInOutSine",
						autoplay:true
					});
				}else{
					anime({
						targets:target,
						scale:[0, 1],
						duration:600,
						easing:"easeInOutSine",
						autoplay:true
					});
				}

			}

			// animated-fade-in-start class animation
			if (classStringMatched() == "animated-fade-in-start") {
				if (!animatesOnMobile && screenWidth <= 765){
					anime({
						targets:target,
						translateX:[-100, 0],
						opacity:[0,1],
						duration:0,
						easing:"easeInOutSine",
						autoplay:true
					});
				}else{
					anime({
						targets:target,
						translateX:[-100, 0],
						opacity:[0,1],
						duration:600,
						easing:"easeInOutSine",
						autoplay:true
					});
				}
			}

			// animated-fade-in-end class animation
			if (classStringMatched() == "animated-fade-in-end") {
				if (!animatesOnMobile && screenWidth <= 765){
					anime({
						targets:target,
						translateX:[100, 0],
						opacity:[0,1],
						duration:0,
						easing:"easeInOutSine",
						autoplay:true
					});
				}else{
					anime({
						targets:target,
						translateX:[100, 0],
						opacity:[0,1],
						duration:600,
						easing:"easeInOutSine",
						autoplay:true
					});
				}
			}

			// animated-fade-in-top class animation
			if (classStringMatched() == "animated-fade-in-top") {
				if (!animatesOnMobile && screenWidth <= 765){
					anime({
						targets:target,
						translateY:[-100, 0],
						opacity:[0,1],
						duration:0,
						easing:"easeInOutSine",
						autoplay:true
					});
				}else{
					anime({
						targets:target,
						translateY:[-100, 0],
						opacity:[0,1],
						duration:600,
						easing:"easeInOutSine",
						autoplay:true
					});
				}
			}

			// animated-fade-in-bottom class animation
			if (classStringMatched() == "animated-fade-in-bottom") {
				if (!animatesOnMobile && screenWidth <= 765){
					anime({
						targets:target,
						translateY:[100, 0],
						opacity:[0,1],
						duration:0,
						easing:"easeInOutSine",
						autoplay:true
					});
				}else{
					anime({
						targets:target,
						translateY:[100, 0],
						opacity:[0,1],
						duration:600,
						easing:"easeInOutSine",
						autoplay:true
					});
				}
			}
			observer.unobserve(entry.target);
		}
	});
}, {rootMargin: "150px", threshold: 0.5});

for (const classString of classes) {
	const collection = document.querySelectorAll(`.${classString}`);
	const screenWidth = document.documentElement.clientWidth;
	for (const element of collection) {
		if (screenWidth <= 765){
			if (animatesOnMobile){
				observer.observe(element);
			}else{
				// Remove opacity and transform applied by the class in CSS
				element.style.opacity = "unset";	
				element.style.transform = "unset";
			}
		}else{
			observer.observe(element);
		}
	}
}