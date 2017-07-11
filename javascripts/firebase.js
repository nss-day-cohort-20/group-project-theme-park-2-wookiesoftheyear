'use strict';
let parkObj = {};
let areaObj = {};
let typesObj = {};
let attractionObj = {};


let promisePark = function() {
	return new Promise( function(resolve, reject) {
		$.ajax({
		    url: "https://wookiesoftheyear-36e4a.firebaseio.com/park-info.json"
		}).done( (data) => {
			resolve(data);
			// console.log("park info", data);
		}).fail( (reject) => {
			console.log("error");
		});
	});
};

let promiseArea = function() {
	return new Promise(function(resolve, reject){
		$.ajax({
		    url: "https://wookiesoftheyear-36e4a.firebaseio.com/areas.json"
		}).done( (data) => {
			resolve(data);
			// console.log("areas", data);
		}).fail( (reject) => {
			console.log("error");
		});
	});
};



let promiseType = function() {
	return new Promise( function(resolve, reject) {
		$.ajax({
		    url: "https://wookiesoftheyear-36e4a.firebaseio.com/attraction_types.json"
		}).done( (data) => {
			resolve(data);
			// console.log("attraction_types", data);
		}).fail( (reject) => {
			console.log("error");
		});
	});
};


let promiseAttraction = function(dataPromisePark, dataPromiseArea, dataPromiseType) {
	return new Promise( function(resolve, reject) {
		$.ajax({
		    url: "https://wookiesoftheyear-36e4a.firebaseio.com/attractions.json"
		}).done( (data) => {
			resolve(data);
			// console.log("attractions", data);
		}).fail( (reject) => {
			console.log("error");
		});
	});
};



promisePark()
.then( function(dataPromisePark) {
	parkObj = dataPromisePark;
	// console.log("park", parkObj);
	return promiseArea();
}).then( function(dataPromiseArea){
	areaObj = dataPromiseArea;
	// console.log("areas", areaObj);
	return promiseType();
}).then( function(dataPromiseType) {
	typesObj = dataPromiseType;
	// console.log("types", typesObj);
	return promiseAttraction();
}).then( function(dataPromiseAttraction) {
	attractionObj = dataPromiseAttraction;
	console.log("Data", parkObj, areaObj, typesObj, attractionObj);
})
.catch(function(error){
	console.log("error", error.statusText);
});

console.log("ay");