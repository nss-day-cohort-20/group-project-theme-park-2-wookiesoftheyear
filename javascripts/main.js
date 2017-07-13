'use strict';

let mapStuff = {
	loader: require("./firebase"),
	nameFilter: require("./name"),
	timeFilter: require("./time"),
	areaFilter: require("./area"),
	mapFilter: require("./clickMap"),
	links: require("./clickHyperLinks")
};

let parkObj = [];
let areaObj = [];
let typesObj = [];
let attractionObj = [];

mapStuff.loader.promisePark()
.then( function(dataPromisePark) {
	parkObj = dataPromisePark;
	// console.log("park", parkObj);
	return mapStuff.loader.promiseArea();
}).then( function(dataPromiseArea){
	areaObj = dataPromiseArea;
	// console.log("areas", areaObj);
	return mapStuff.loader.promiseType();
}).then( function(dataPromiseType) {
	typesObj = dataPromiseType;
	// console.log("types", typesObj);
	return mapStuff.loader.promiseAttraction();
}).then( function(dataPromiseAttraction) {
	attractionObj = dataPromiseAttraction;
	mapStuff.mapFilter.mapSort(parkObj, areaObj, typesObj, attractionObj);
	mapStuff.timeFilter.timeSort(parkObj, areaObj, typesObj, attractionObj);
	mapStuff.nameFilter.listRideNames(parkObj, areaObj, typesObj, attractionObj);
	mapStuff.links.hyperLinks(parkObj, areaObj, typesObj, attractionObj);
	// do something here
})
.catch(function(error){
	console.log("error", error);
});