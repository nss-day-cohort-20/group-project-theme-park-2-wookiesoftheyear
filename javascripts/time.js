'use strict';

let timeSort = function(parkObj, areaObj, typesObj, attractionObj){

	let Handlebars = require('hbsfy/runtime');	
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');
	let timeSearch = document.getElementById("time-search");

timeSearch.addEventListener("click", function() {
    $("#ridesToDom").empty();
	let chosenTime = event.target.getAttribute('value');
    console.log("time", chosenTime);	
	for (let i = 0; i < attractionObj.length; i++) {
        if (attractionObj[i].times) {
			// for (let x = 0; x < attractionObj[k].times.length; x++) {
			if (attractionObj[i].times.toString().includes(chosenTime)) {
                // console.log("attrObj", attractionObj[i].times.toString());
				$("#ridesToDom").append(sideBarTemplate(attractionObj[i]));
		    }  else {
				 $("#ridesToDom").append(altTimeTemplate(attractionObj[i]));
            }
        }	
	}
});
};

module.exports = {timeSort};