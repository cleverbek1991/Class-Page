"use strict";

let bios = require('./factory');

let buildCards = () => {
	let data;
	bios.getBios()
	.then(promiseData => {
		console.log(promiseData);
		for (var thing in promiseData){
			console.log(promiseData[thing]);
		}
	});
};

buildCards();