'use strict';

let portfolioHover = document.getElementsByClassName("portfolio-mini__hover");
let portfolioHoverClass = document.getElementsByClassName("portfolio-mini-hover__class");
for (let i = 0; i < portfolioHover.length; i++) {
	portfolioHover[i].onmouseover = function (event) {
		portfolioHoverClass[i].style.display = 'block';	
	};

	portfolioHover[i].onmouseout = function(event) { 
	  portfolioHoverClass[i].style.display = 'none';
	};	
}
