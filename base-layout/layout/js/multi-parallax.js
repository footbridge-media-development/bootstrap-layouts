/**
 * Hacky utility function to see if webp is supported.
 *
 * @returns {boolean} False if support is not detected.
 */
function webpIsSupported() {
	let elem = document.createElement('canvas');

	if (!!(elem.getContext && elem.getContext('2d'))) {
		// was able or not to get WebP representation
		return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
	} else {
		// very old browser like IE 8, canvas not supported
		return false;
	}
}

/**
 * Updates background style of parallax elements with img and sources from the first picture element inside.
 */
function setBackgroundStyle() {
	const parallaxElements = document.querySelectorAll(".bg-parallax");
	for (const parallaxElement of parallaxElements) {
		let pictureElement = parallaxElement.querySelector("picture");
		let imageElement;
		let sourceAttribute;

		if (webpIsSupported()) {
			// We need to check window width to see which source element to pull, if more than one exist
			const sourceElementList = pictureElement.querySelectorAll("source");
			imageElement = getSourceElementByDataMaxWidth(sourceElementList);

			// If no acceptable source was found, use the img src attribute, otherwise set the source srcset attribute.
			if (!imageElement) {
				imageElement = pictureElement.querySelector("img");
				sourceAttribute = imageElement.getAttribute("src");
			} else {
				sourceAttribute = imageElement.getAttribute("srcset");
			}

		} else {
			// webp is not supported. Just use the img element
			imageElement = pictureElement.querySelector("img");
			sourceAttribute = imageElement.getAttribute("src");
		}

		parallaxElement.setAttribute("style", "background: url(" + sourceAttribute + ") 50% 50% / cover fixed");
	}
}

/**
 * Return the first source element that has valid parameters, just like an html picture element would do.
 * That means either unrestricted source or source with workable 'data-max-width' attribute.
 *
 * @param sourceElementList
 * @returns {string|boolean}
 */
function getSourceElementByDataMaxWidth(sourceElementList) {
	let acceptableSource = false;

	for (const sourceElement of sourceElementList) {
		if (sourceElement.hasAttribute("data-max-width")) {

			// If the attribute is a number, we can compare sizes
			const sourceElementMaxWidth = sourceElement.getAttribute("data-max-width");
			if (!isNaN(sourceElementMaxWidth)) {

				// If element max width larger than the window width, use this.
				if (sourceElementMaxWidth > window.innerWidth) {
					acceptableSource = sourceElement;
					break;
				}
			}
		} else {
			// no 'data-max-width' attribute on element. Use this.
			acceptableSource = sourceElement;
			break;
		}
	}

	return acceptableSource;
}

// Run script once initially, and then again whenever window is resized.
setBackgroundStyle();
window.addEventListener('resize', setBackgroundStyle);
