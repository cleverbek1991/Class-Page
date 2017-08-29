"use strict";

let bios = require('./factory');

let buildCards = () => {
	let data;
	bios.getBios()
	.then(promiseData => {
		console.log(promiseData);
		let htmlString= `<div class="container"><div class="row">`;
		let c = 0;
		for (var thing in promiseData){
			c++;
			console.log(promiseData[thing]);
			htmlString += `<div class="col-md-4">
								<img class="bioPic" src="../${promiseData[thing].picture}">
								<h2>${promiseData[thing].first} ${promiseData[thing].last}</h2>
							</div>`;
			}
			htmlString += `</div></div>`;
			console.log("string");
			console.log("htmlString", htmlString);
			$("#cards").append(htmlString);
		});
};

buildCards();