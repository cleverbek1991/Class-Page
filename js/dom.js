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
                                <div data-toggle="modal" data-target="#bioModal${promiseData[thing].first}">
                                    <img class="bioPic" src="../${promiseData[thing].picture}">
                                    <h2>${promiseData[thing].first} ${promiseData[thing].last}</h2>
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
                                    <img src="images/default-image.png">
                                    <div id="studentBio">${promiseData[thing].bio}</div>
                                    <a href class="bioLinks">${promiseData[thing].github}</a><br>
                                    <a href class="bioLinks">${promiseData[thing].linkedin}</a><br>
                                    <a href class="bioLinks">${promiseData[thing].personal}</a>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>`;
			/*htmlString += `<div class="col-md-4">
								<img class="bioPic" src="../${promiseData[thing].picture}">
								<h2>${promiseData[thing].first} ${promiseData[thing].last}</h2>
								<div class="row">
									<a target="_blank" href="${promiseData[thing].linkedin}">
										<img class="linkPics" src="../images/linkedinLink.svg">
									</a>
									<a target="_blank" href="${promiseData[thing].personal}">
										<img class="linkPics" src="../images/personalSiteLink.svg">
									</a>
									<a target="_blank" href="${promiseData[thing].github}">
										<img class="linkPics" src="../images/gitHubLink.svg">
									</a>
								</div>
							</div>`;*/
			}
			htmlString += `</div></div>`;
			console.log("string");
			console.log("htmlString", htmlString);
			$("#cards").append(htmlString);
		});
};

buildCards();