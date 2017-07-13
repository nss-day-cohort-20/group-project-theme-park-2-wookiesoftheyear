'use strict';

let mapSort = function(parkObj, areaObj, typesObj, attractionObj){


	let Handlebars = require('hbsfy/runtime');
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');

	let fullMap = document.getElementById("map");
	let eachGrid = document.getElementsByClassName("grid");

	fullMap.addEventListener("click", function() {
		for (let i = 0; i < eachGrid.length; i++) {
			eachGrid[i].removeAttribute("style");
		}
		$("#ridesToDom").empty();
		let areaID = event.target.id;
		let borderColor = areaObj[areaID - 1].colorTheme;
		event.target.style.border = "thick solid #" + [borderColor];
		for (let i = 0; i < attractionObj.length; i++) {
			if (attractionObj[i].area_id.toString() === areaID.toString()) {
				if (attractionObj[i].hasOwnProperty("times")) {
				$("#ridesToDom").append(sideBarTemplate(attractionObj[i]));
				} else {
					$("#ridesToDom").append(altTimeTemplate(attractionObj[i]));
					}
			}
		}
	});
};

module.exports = {mapSort};