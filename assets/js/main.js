(function() {
	// flexible-nav.html
	(function() {
		var menu 	  = document.querySelector(".flexnav-main-grid");
		var menuItems = menu.children;
		var prompt 	  = document.querySelector(".flexnav-more__prompt");
		var moreList  = document.querySelector(".flexnav-more__wrapper");
		var moreItems = moreList.children;

		// display only # items that fit, hide rest in sub-menu
		document.addEventListener("DOMContentLoaded", resizeMenu)

		// repeat on resize
		window.addEventListener("resize", resizeMenu)

		// show/hide sub-menu
		prompt.addEventListener("click", showSubMenu);

		// function definitions:
		function resizeMenu() {
			// un-hide all items
			for (let item of menuItems) {
				item.classList.remove("hidden");
			}
			for (let item of moreItems) {
				item.classList.remove("hidden");
			}

			var menuItemWidths = Array.from(menuItems, item => parseInt(item.offsetWidth));
			var sumWidth 	   = 0;
			var i 			   = -1;

			// add more items to menu until run out of room
			while (sumWidth < (menu.offsetWidth - prompt.offsetWidth)) {
				i++;
				sumWidth += menuItemWidths[i];
			}
			
			// mark where that happens
			var splitIndex 	  = i;

			// hide post-split on main menu
			for (i; i < (menuItems.length - 1); i++) {
				menuItems[i].classList.add("hidden");
			}
			// hide pre-split on sub-menu
			for (var j=0; j < splitIndex; j++) {
				moreItems[j].classList.add("hidden");
			}
		}

		function showSubMenu() {
			// toggle if click directly
			moreList.classList.toggle("show-more-menu");

			// if showing and user clicks outside of it, hide again
			if (moreList.classList.length == 2) {
				window.addEventListener("click", function(e) {
					if (e.target.classList.contains("flexnav-more__item") == false && 
						e.target.classList.contains("flexnav-more__prompt") == false) {	
						console.log("this is when it should hide again");
						moreList.classList.remove("show-more-menu");
					}	
				});
			}
		} // end function definitions
	})(); // end flexible-nav.html
	
	// Research gallery:
	(function() {
		if (document.querySelector(".research-main-content")) {
			var items = document.querySelectorAll(".research__item");
			var galleries = document.querySelectorAll(".research-items-wrapper");

			document.addEventListener("DOMContentLoaded", setItemHeight)

			window.addEventListener("resize", setItemHeight);

			// equalize width & height
			function setItemHeight() {
				var width = items[0].offsetWidth;
				for (let item of items) {
					var newHeight = width.toString() + "px";
					item.style.height = newHeight;
				}

	//			var rowHeight = (width / 2).toString() + "px";
	//			for (let gallery of galleries) {
	//				gallery.style.gridAutoRows = "minmax(" + rowHeight + ", auto)";
	//			}
			}
		}
	})();

	// Progress Tracker:
	if (document.querySelector(".progress-main-wrapper")) {
		var statusElems = document.querySelectorAll(".progress-item__status div");
		var statuses = Array.from(statusElems, status => status.innerText.slice(1));
		var titleElems = document.querySelectorAll(".progress-item__name a");
		var numElems = document.querySelectorAll(".progress-item__num");
		for (var i=0; i < statuses.length; i++) {
			console.log(statuses[i]);
			if (statuses[i].includes('prototype done')) {
				var span = statusElems[i].querySelector("span");
				if (window.getComputedStyle(span, null).getPropertyValue('color') == 'rgb(255, 0, 255)') {
					statusElems[i].style.color = 'magenta';
					numElems[i].style.color = 'magenta';
					titleElems[i].style.borderBottomColor = 'magenta';
				}
				else {
					statusElems[i].style.color = 'hsla(186,80%,70%,1)';
					numElems[i].style.color = 'hsla(186,80%,70%,1)';
					titleElems[i].style.borderBottomColor = 'hsla(186,80%,70%,1)';
				}
			}
		}
	}

	// Blog:
//	if (document.querySelector(".blog-wrapper")) {
//		var main = document.querySelector("main");
//		main.style.backgroundColor = "hsla(186,80%,70%,.15)";
//	}

})();