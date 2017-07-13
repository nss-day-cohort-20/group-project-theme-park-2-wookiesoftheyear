'use strict';


let timeSort = function(parkObj, areaObj, typesObj, attractionObj){


	
	let Handlebars = require('hbsfy/runtime');	
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');

	let timeSearch = document.getElementById("time-search");

timeSearch.addEventListener("click",function() {
	let chosenTime = "";
	chosenTime = event.target.innerHTML;
	let time = chosenTime.split(':');
	let finalTime = time[0];
	console.log(finalTime);
		
	for (let k = 0; k < attractionObj.length; k++) {
		console.log("for loop");
		if (attractionObj[k].hasOwnProperty("times")!=true) {
			console.log(attractionObj[k]);
			$("#ridesToDom").append(altTimeTemplate(attractionObj[k]));
		} else {}
	
}
});
};



module.exports = {timeSort};