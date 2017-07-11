'use strict';



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

module.exports = {promiseAttraction, promiseType, promiseArea, promisePark};