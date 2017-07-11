'use strict';



let Things = {
	areas: require('./firebase.js'),
	domStuff: require('./dominjection.js')
};

$("section").change( function() {
	let selectedArea = $(this).val();
	Things.areas.getAreas(selectedArea)
	.then( function(dataFromAreas) {
		return Things.areas.getAreas(dataFromAreas);
	});
});





console.log("yo");