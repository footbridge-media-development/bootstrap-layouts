class VideoLoader {
	constructor() {
		const videoContainer = document.querySelector("#banner-video");
		
		document.addEventListener("DOMContentLoaded", () => {
			this.LoadVideo(videoContainer);
		});
	}
	
	LoadVideo(videoContainer) {
		const iframe = document.createElement("iframe");
		
		iframe.setAttribute("src", "https://player.vimeo.com/video/770867734?background=1");
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("webkitallowfullscreen", "");
		iframe.setAttribute("mozallowfullscreen", "");
		iframe.setAttribute("allowfullscreen", "");
		iframe.setAttribute("title", "Riverside Washing ");
		
		videoContainer.append(iframe);
	}
}

new VideoLoader();