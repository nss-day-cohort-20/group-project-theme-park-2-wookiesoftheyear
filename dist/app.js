(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

const domStuff = Object.create(null);

let $areasContainer = $("#areas");

domStuff.listAreas = function(area) {
	console.log("areas from listAreas", area);
	$areasContainer.append('<h3>${area}</h2>');

};

module.exports = domStuff;

console.log("my dude");
},{}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],4:[function(require,module,exports){
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

module.exports = {promiseArea, promiseAttraction, promisePark, promiseType};
},{}],5:[function(require,module,exports){
'use strict';

let mapStuff = {
	loader: require("./firebase"),
	nameFilter: require("./name"),
};

let parkObj = {};
let areaObj = {};
let typesObj = {};
let attractionObj = {};

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
	mapStuff.nameFilter.test(parkObj, areaObj, typesObj, attractionObj);
	// do something here
})
.catch(function(error){
	console.log("error", error.statusText);
});


},{"./firebase":4,"./name":6}],6:[function(require,module,exports){
'use strict';

let test = function(parkObj, areaObj, typesObj, attractionObj){
	console.log("Data",areaObj[0].name);
	
};

module.exports = {test};
},{}],7:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[1,2,3,4,5,6,7]);
