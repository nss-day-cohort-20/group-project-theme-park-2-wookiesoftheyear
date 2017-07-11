'use strict';

let loader = require("./firebase");
let parkObj = {};
let areaObj = {};
let typesObj = {};
let attractionObj = {};

loader.promisePark()
.then( function(dataPromisePark) {
	parkObj = dataPromisePark;
	// console.log("park", parkObj);
	return loader.promiseArea();
}).then( function(dataPromiseArea){
	areaObj = dataPromiseArea;
	// console.log("areas", areaObj);
	return loader.promiseType();
}).then( function(dataPromiseType) {
	typesObj = dataPromiseType;
	// console.log("types", typesObj);
	return loader.promiseAttraction();
}).then( function(dataPromiseAttraction) {
	attractionObj = dataPromiseAttraction;
	console.log("Data", parkObj, areaObj, typesObj, attractionObj);
})
.catch(function(error){
	console.log("error", error.statusText);
});