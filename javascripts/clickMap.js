'use strict';

let mapSort = function(parkObj, areaObj, typesObj, attractionObj){


	let Handlebars = require('hbsfy/runtime');
	let sideBarTemplate = require('../templates/sideBar.hbs');
	let altTimeTemplate = require('../templates/timeSideBar.hbs');

	let fullMap = document.getElementById("map");
	let eachGrid = document.getElementsByClassName("grid");

	let mapID = "";

	fullMap.addEventListener("click", function() {
		for (let i = 0; i < eachGrid.length; i++) {
			eachGrid[i].removeAttribute("style");
		}
		$("#ridesToDom").empty();
		let areaID = event.target.id;
		
		let borderColor = areaObj[areaID - 1].colorTheme;
		event.target.style.border = "thick solid #" + [borderColor];
		for (let i = 0; i < attractionObj.length; i++) {
			mapID = attractionObj[i].type_id;
			if (attractionObj[i].area_id.toString() === areaID.toString()) {
				for (let q = 0; q < typesObj.length; q++) {
				if(mapID === typesObj[q].id) {
				mapID = typesObj[q].name;
				if (attractionObj[i].hasOwnProperty("times")) {
					let tempObj = {};
					tempObj.name = attractionObj[i].name;
					tempObj.id = mapID;
					tempObj.description = attractionObj[i].description;
					tempObj.times = attractionObj[i].times;
					$("#ridesToDom").append(sideBarTemplate(tempObj));
				} else {
					let tempObj = {};
					tempObj.name = attractionObj[i].name;
					tempObj.id = mapID;
					tempObj.description = attractionObj[i].description;
					tempObj.times = attractionObj[i].times;
					$("#ridesToDom").append(altTimeTemplate(tempObj));
					}
			}
		}}}
	});
};

module.exports = {mapSort};