'use strict';

let listRideNames = function(parkObj, areaObj, typesObj, attractionObj){

	// console.log("stuff", attractionObj);
	
	let Handlebars = require('hbsfy/runtime');	
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');
	// let typesTemplate = require('../templates/partials/types.hbs');
	// Handlebars.registerPartial("h4", require('../templates/partials/types.hbs'));
	
	let searchRides = document.getElementById("search-bar");
	let submitSearch = document.getElementById("submit-button");
	let eachGrid = document.getElementsByClassName("grid");

	let typeID = "";
	console.log("please work", typeID);

submitSearch.addEventListener("click", function() {

  for (let i = 0; i < eachGrid.length; i++) {
		eachGrid[i].removeAttribute("style");
	}
$("#ridesToDom").empty();
	for (let i = 0; i < attractionObj.length; i++) {
		typeID = attractionObj[i].type_id;
		// for (let q = 0; q < typesObj.length; q++) {
		// 	if(typeID === typesObj[q].id) {
		// 		typeID = typesObj[q].name;
		// 		console.log("maybe", typeID);
				// $("#metaHandleBars").append(typesTemplate(typesObj[q].name));
				// console.log("Hello!?!", typesObj[q].name);
			
		if (attractionObj[i].name.toUpperCase().includes(searchRides.value.toUpperCase())) {
			for (let q = 0; q < typesObj.length; q++) {
			if(typeID === typesObj[q].id) {
				typeID = typesObj[q].name;
				if (attractionObj[i].hasOwnProperty("times")) {
					let tempObj = {};
					tempObj.name = attractionObj[i].name;
					tempObj.id = typeID;
					tempObj.description = attractionObj[i].description;
					tempObj.times = attractionObj[i].times;
					console.log("tempObj", tempObj);
					$("#ridesToDom").append(sideBarTemplate(tempObj));
				} else {
					let tempObj = {};
					tempObj.name = attractionObj[i].name;
					tempObj.id = typeID;
					tempObj.description = attractionObj[i].description;
					tempObj.times = attractionObj[i].times;
					console.log("tempObj", tempObj);
					$("#ridesToDom").append(altTimeTemplate(tempObj));
				}
		}
	}}}
	
});	

};

module.exports = {listRideNames};