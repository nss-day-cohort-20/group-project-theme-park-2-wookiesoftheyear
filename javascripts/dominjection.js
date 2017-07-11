'use strict';

const domStuff = Object.create(null);

let $areasContainer = $("#areas");

domStuff.listAreas = function(area) {
	console.log("areas from listAreas", area);
	$areasContainer.append('<h3>${area}</h2>');

};

module.exports = domStuff;

console.log("my dude");