(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let bios = require('./factory');

let buildCards = () => {
	let data;
	bios.getBios()
	.then(promiseData => {
		let htmlString= `<div class="container"><div class="row">`;
		let c = 0;
		for (var thing in promiseData){
			c++;
            htmlString += `<div class="col-md-4">
                                <div class="MyCard">
	                                    <img data-toggle="modal" data-target="#bioModal${promiseData[thing].first}" class="bioPic" src="../${promiseData[thing].picture}" style="width: 100%">
																			<div class="caption">
																				<h4 class="card-name" data-toggle="modal" data-target="#bioModal${promiseData[thing].first}">${promiseData[thing].first} ${promiseData[thing].last}</h4>
																					<a href="${promiseData[thing].linkedin}" target="_blank"><img class="linkPics" src="/images/linkedinLink.svg"></a>`;
						if (promiseData[thing].personal !== ""){
							htmlString += `<a href="${promiseData[thing].personal}" target="_blank"><img class="linkPics" src="/images/personalSiteLink.svg"></a>`;
						}
							htmlString +=	`<a href="${promiseData[thing].github}" target="_blank"><img class="linkPics" src="/images/gitHubLink.svg"></a>
																			</div>
																</div>
                            </div>
                            <div class="modal fade" id="bioModal${promiseData[thing].first}" tabindex="-1" role="dialog" aria-labelledby="bioModalLabel">
                              <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                     <h4 class="modal-title" id="myModalLabel"><div id="studentName">${promiseData[thing].first} ${promiseData[thing].last}</div></h4>
                                  </div>
                                  <div class="modal-body">
                                  	<div class="row">
                                  		<div class="col-md-6">
	                                    <img src=${promiseData[thing].fun}>
	                                    </div>
	                                    <div class="col-md-6">
	                                    	<div id="studentBio">${promiseData[thing].bio}</div>
																				<div class="row">
																					<div class="col-md-2"></div>
																					<div class="col-md-2">
			                                    <a href="${promiseData[thing].linkedin}" class="bioLinks col-md-2" target="_blank">
			                                    <img class="bioLinkPics" style="width:40px;" src="/images/linkedinLink.svg">
			                                    </a><br>
			                                    </div>`;
						if (promiseData[thing].personal !== ""){
							htmlString += `<div class="col-md-2"><a href="${promiseData[thing].personal}" target="_blank"><img class="linkPics" style="width:40px; margin-top:25px" src="/images/personalSiteLink.svg"></a></div>`;
						}
							htmlString +=	`<div class="col-md-2"><a href="${promiseData[thing].github}" target="_blank" class="bioLinks col-md-2" target="_blank"><img class="bioLinkPics" style="width:40px;" src="/images/gitHubLink.svg"></a></div>
																				</div>
																			</div>
																		</div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>`;
			}
			htmlString += `</div></div>`;
			$("#cards").append(htmlString);
			$("a").each(function ()
			{
				 $(this).trigger('click');//for clicking element
				 var href = $(this).attr("href");
			});
		});
};

buildCards();

},{"./factory":2}],2:[function(require,module,exports){
"use strict";

let getBios = () => {
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: "../Class-Page/class.json"
		}).done(data => {
			resolve(data);
		});
	});
};
module.exports = {getBios};
},{}]},{},[1,2]);
