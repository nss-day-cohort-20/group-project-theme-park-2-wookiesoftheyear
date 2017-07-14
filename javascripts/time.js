'use strict';

let timeSort = function(parkObj, areaObj, typesObj, attractionObj){

	let Handlebars = require('hbsfy/runtime');	
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');
	let timeSearch = document.getElementById("time-search");

	let eachGrid = document.getElementsByClassName("grid");

	let timeID = "";

	timeSearch.addEventListener("click", function() {
		for (let i = 0; i < eachGrid.length; i++) {
			eachGrid[i].removeAttribute("style");
		}
	  $("#ridesToDom").empty();
		let chosenTime = event.target.getAttribute('value');
	  console.log("time", chosenTime);	
		for (let i = 0; i < attractionObj.length; i++) {
			timeID = attractionObj[i].type_id;
	    	if (attractionObj[i].times) {
	    		for (let q = 0; q < typesObj.length; q++) {
				if(timeID === typesObj[q].id) {
				timeID = typesObj[q].name;

				if (attractionObj[i].times.toString().includes(chosenTime)) {
					let tempObj = {};
					tempObj.name = attractionObj[i].name;
					tempObj.id = timeID;
					tempObj.description = attractionObj[i].description;
					tempObj.times = attractionObj[i].times;
					console.log("tempObj", tempObj);
	       
					$("#ridesToDom").append(sideBarTemplate(tempObj));
			    }  else {
			    	let tempObj = {};
					tempObj.name = attractionObj[i].name;
					tempObj.id = timeID;
					tempObj.description = attractionObj[i].description;
					tempObj.times = attractionObj[i].times;
					$("#ridesToDom").append(altTimeTemplate(tempObj));
        }
      }}}
		}
	});
};

module.exports = {timeSort};