/**
* Should be modulated into OOP classes, but modules don't work without
* a server... so just a single script for now.
* @author Garet C. Green
*/
(() => {
	let activeSliderButton = null;
	let activeSliderDOM = null;
	let lastMouseX = null;
	const sliders = document.querySelectorAll(".image-slider");

	/**
	* Register a slider DOM instance
	* @param {DOMNode} slider
	* @return {undefined}
	*/
	function registerSlider(slider){
		const button = slider.querySelector("button");
		const imagesContainer = slider.querySelector(".images-container");
		updateRectClip(slider);
		button.addEventListener("mousedown", e => {
			activeSliderDOM = slider;
			activeSliderButton = button;
			lastMouseX = e.pageX;
		});
		button.addEventListener("touchstart", e => {
			e.preventDefault();
			activeSliderDOM = slider;
			activeSliderButton = button;
			lastMouseX = e.touches[0].pageX;
		});
	}

	/**
	* Updates the rectangular clipping on the slider
	* @param {DOMNode} slider
	*/
	function updateRectClip(slider){
		const sliderControls = slider.querySelector(".slider-controls");
		const sliderControlsWidth = parseInt(sliderControls.clientWidth);
		const sliderLeft = parseInt(window.getComputedStyle(sliderControls).left);
		const image2 = slider.querySelector(".image-2");
		image2.style.clipPath = `inset(0 0 0 ${sliderLeft + sliderControlsWidth/2}px)`;
	}

	/**
	* Event for when the mouse moves in the document.
	* Moves the active slider, if there is one
	* @return {undefined}
	*/
	function onMouseMove(e){
		if (activeSliderDOM){
			const sliderWidth = parseInt(activeSliderDOM.clientWidth);
			const sliderControls = activeSliderDOM.querySelector(".slider-controls");
			const sliderControlsWidth = parseInt(sliderControls.clientWidth);
			const currentLeft = parseInt(window.getComputedStyle(sliderControls).left);
			let deltaX = null;

			if ("touches" in e){
				deltaX = e.touches[0].pageX - lastMouseX;
				lastMouseX = e.touches[0].pageX;
			}else{
				deltaX = e.pageX - lastMouseX;
				lastMouseX = e.pageX;
			}

			const newLeftValue = currentLeft + deltaX;

			// Clamps
			if (newLeftValue + (sliderControlsWidth/2) < 0){
				sliderControls.style.left = `${-sliderControlsWidth/2}px`;
			}else if (newLeftValue + (sliderControlsWidth/2) > sliderWidth){
				sliderControls.style.left = `${sliderWidth - sliderControlsWidth/2}px`;
			}else{
				sliderControls.style.left = `${newLeftValue}px`;
			}
			updateRectClip(activeSliderDOM);
		}
	}

	for (const slider of sliders){
		registerSlider(slider);
	}

	window.addEventListener("mouseup", () => {
		if (activeSliderButton){
			activeSliderButton = null;
			activeSliderDOM = null;
		}
	});

	window.addEventListener("mousemove", e => {
		onMouseMove(e);
	});

	window.addEventListener("touchmove", e => {
		if (activeSliderButton){
			onMouseMove(e);
		}
	});

	window.addEventListener("touchend", e => {
		if (activeSliderButton){
			activeSliderButton = null;
			activeSliderDOM = null;
		}
	});
})();
