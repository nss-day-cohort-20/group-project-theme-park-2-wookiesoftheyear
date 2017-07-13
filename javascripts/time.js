'use strict';

let timeSort = function(parkObj, areaObj, typesObj, attractionObj){

	let Handlebars = require('hbsfy/runtime');	
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');

	let timeSearch = document.getElementById("time-search");

timeSearch.addEventListener("click",function() {
	let chosenTime = "";
	chosenTime = event.target.innerHTML;
	let time = chosenTime.split(' ');
	let finalTime = time[0];
		
	for (let k = 0; k < attractionObj.length; k++) {

		if (attractionObj[k].times) {
			
			// for (let x = 0; x < attractionObj[k].times.length; x++) {
				

				if (attractionObj[k].times.includes(finalTime)) {
					
					$("#ridesToDom").append(sideBarTemplate(attractionObj[k]));
				}
			// } 
		// } else {
				// $("#ridesToDom").append(altTimeTemplate(attractionObj[k]));
		}	
	}
});
};

module.exports = {timeSort};