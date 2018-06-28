// 2. Progress Tracker:
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