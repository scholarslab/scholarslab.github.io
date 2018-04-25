(function() {
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

				var rowHeight = (width / 2).toString() + "px";
				for (let gallery of galleries) {
					gallery.style.gridAutoRows = "minmax(" + rowHeight + ", auto)";
				}
			}
		}
	})();

	// Recent posts:
	(function() {
		if (document.querySelector(".person-wrapper")) {
			var postList = document.querySelector(".person-posts__list");
			var posts = postList.children;

			document.addEventListener("DOMContentLoaded", setItemHeight)

			window.addEventListener("resize", setItemHeight);

			// equalize width & height
			function setItemHeight() {

				var width = posts[0].offsetWidth;
				var n = 1;
				for (let post of posts) {
					post.style.gridColumn = n.toString();
				//	let width = post.offsetWidth / posts.length;
				//	var newHeight = width.toString() + "px";
					post.style.height = width.toString() + "px";
					// increment
					n = n+1;
				}

		//		var rowHeight = (width / 2).toString() + "px";
		//		for (let gallery of galleries) {
		//			gallery.style.gridAutoRows = "minmax(" + rowHeight + ", auto)";
		//		}
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