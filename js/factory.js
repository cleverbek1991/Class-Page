"use strict";

let getBios = () => {
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: "../class.json"
		}).done(data => {
			resolve(data);
		});
	});
};
module.exports = {getBios};