'use strict';

let hyperLinks = function(){

	let attractionSection = document.getElementById("ridesToDom");
		attractionSection.addEventListener("click", function() {
			event.target.parentNode.nextSibling.nextSibling.classList.toggle("attractionInfo");
		});
};

module.exports = {hyperLinks};