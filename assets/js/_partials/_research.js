// 3. Research Page:
if (document.querySelector(".research-landing-wrapper")) {
	var widthOnLoad = window.innerWidth;
	var galleryParent = document.querySelector(".research-folio__gallery-wrapper");
	var gallery = document.querySelector(".research-folio__gallery");
	var galleryItems = gallery.children;
	var btnLeft = document.querySelector(".research-nav__btn--left");
	var btnRight = document.querySelector(".research-nav__btn--right");
	var mc = new Hammer(gallery); // touch event handler

	gallery.setAttribute("data-translateX", "0");
	gallery.style.width = parseInt(galleryItems[0].offsetWidth * galleryItems.length) + "px";

	btnRight.addEventListener("click", moveGalleryRight);
	btnLeft.addEventListener("click", moveGalleryLeft);

	// go forward in gallery
	function moveGalleryRight() {
		var screenWidth = galleryItems[0].offsetWidth * Math.floor(galleryParent.offsetWidth / galleryItems[0].offsetWidth);
		var totalWidth = galleryItems[0].offsetWidth * galleryItems.length;
		var translateOld = parseInt(gallery.getAttribute("data-translateX"));
		var maxTranslate = Math.floor(totalWidth / screenWidth) * screenWidth - (screenWidth - (totalWidth%screenWidth));

		if ((Math.floor(Math.abs(translateOld) / screenWidth)) == (Math.floor(totalWidth / screenWidth) - 2)) {
			gallery.style.transform = `translateX(-${maxTranslate}px)`;
			gallery.setAttribute("data-translateX", `-${maxTranslate}`);
		}
		else if ((Math.abs(translateOld) + screenWidth) < totalWidth) {
			gallery.style.transform = `translateX(-${Math.abs(translateOld) + screenWidth}px)`;
			gallery.setAttribute("data-translateX", `-${Math.abs(translateOld) + screenWidth}`);
		}
	}
	// go backward in gallery
	function moveGalleryLeft() {
		var screenWidth = galleryItems[0].offsetWidth * Math.floor(galleryParent.offsetWidth / galleryItems[0].offsetWidth);
		var translateOld = parseInt(gallery.getAttribute("data-translateX"));

		if ((translateOld + screenWidth) >= 0) {
			gallery.style.transform = `translateX(0px)`;
			gallery.setAttribute("data-translateX", "0");
		}
		else if (translateOld < 0) {
			gallery.style.transform = `translateX(${translateOld + screenWidth}px)`;
			gallery.setAttribute("data-translateX", `${translateOld + screenWidth}`);
		}
	}

	// okay, this doesn't work right now, but
	// is for making up for difference between mobile
	// item widths and width > 500px (diff is 60px but
	// compounds as click through gallery)
	window.addEventListener("resize", adjustForWidth)

	// ^corresponding function:
	function adjustForWidth() {
		var translateOld = parseInt(gallery.getAttribute("data-translateX"));
		if (window.innerWidth <= 500 && widthOnLoad >= 500) {
			gallery.style.transform = `translateX(-${Math.abs(translateOld) + 0}px)`;
		}
		else {
			gallery.style.transform = `translateX(-${Math.abs(translateOld)}px)`;
		}
	}
}