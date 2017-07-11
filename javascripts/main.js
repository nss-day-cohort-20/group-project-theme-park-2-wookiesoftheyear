'use strict';



// const dataFactory = object.create(null);


$.ajax({
    url: "https://wookiesoftheyear-36e4a.firebaseio.com/.json"
}).done( (data) => {
	console.log("firebase", data);
}).fail( (error) => {
	console.log("error");
});



console.log("yo");