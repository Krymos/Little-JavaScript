'use strict';

let upArrow = document.createElement('div');
upArrow.id = 'up-arrow';

document.body.appendChild(upArrow);

window.onscroll = showAndHideUpArrow;

let getUpArrow = document.getElementById('up-arrow');

getUpArrow.onclick = scrollTop;

function showAndHideUpArrow() {

	if (window.scrollY > 450) {
		upArrow.style.display = "block";
	} else {
		upArrow.style.display = "none";
	}

}

function scrollTop() { 
	window.scrollTo(0, 0);
}
