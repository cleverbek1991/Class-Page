(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
},{"./factory":4}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[1,2,3,4,5]);
