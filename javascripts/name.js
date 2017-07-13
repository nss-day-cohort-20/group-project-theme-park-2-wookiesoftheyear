'use strict';

let listRideNames = function(parkObj, areaObj, typesObj, attractionObj){

	console.log("stuff", attractionObj);
	
	let Handlebars = require('hbsfy/runtime');	
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');
	
	let searchRides = document.getElementById("search-bar");
	let submitSearch = document.getElementById("submit-button");

submitSearch.addEventListener("click", function() {
$("#ridesToDom").empty();
	for (let i = 0; i < attractionObj.length; i++) {
		if (attractionObj[i].name.toUpperCase().includes(searchRides.value.toUpperCase())) {
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