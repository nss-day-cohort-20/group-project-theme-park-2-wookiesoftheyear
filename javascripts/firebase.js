'use strict';

const areaFactory = Object.create(null);
areaFactory.getAreas = function(selectedArea){
	return new Promise(function(resolve, reject){
		$.ajax({
		    url: "https://wookiesoftheyear-36e4a.firebaseio.com/areas.json"
		}).done( (data) => {
			let areaArr = data.areas;
			let areaData = areaArr.filter( function(area){
				return area === selectedArea;
			})[0];
			console.log("areas", data);
			resolve(areaData);
		}).fail( (error) => {
			console.log("error");
		});
	});
};
module.exports = areaFactory;
console.log("areaArr", areaArr);


$.ajax({
    url: "https://wookiesoftheyear-36e4a.firebaseio.com/attraction_types.json"
}).done( (data) => {
	console.log("attraction_types", data);
}).fail( (error) => {
	console.log("error");
});


$.ajax({
    url: "https://wookiesoftheyear-36e4a.firebaseio.com/attractions.json"
}).done( (data) => {
	console.log("attractions", data);
}).fail( (error) => {
	console.log("error");
});


$.ajax({
    url: "https://wookiesoftheyear-36e4a.firebaseio.com/park-info.json"
}).done( (data) => {
	console.log("park info", data);
}).fail( (error) => {
	console.log("error");
});

console.log("ay");