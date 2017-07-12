'use strict';

let listRideNames = function(parkObj, areaObj, typesObj, attractionObj){
	
	let Handlebars = require('hbsfy/runtime');	
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');
	
	let searchRides = document.getElementById("search-bar");
	let submitSearch = document.getElementById("submit-button");

submitSearch.addEventListener("click", function() {

	for (let i = 0; i < attractionObj.length; i++) {
		
		if (searchRides.value === attractionObj[i].name) {
			
			if (attractionObj[i].hasOwnProperty("times")) {
				$("#ridesToDom").append(sideBarTemplate(attractionObj[i]));
				
			} else {
				$("#ridesToDom").append(altTimeTemplate(attractionObj[i]));
			}
		}
	}
	
});	
};

module.exports = {listRideNames};