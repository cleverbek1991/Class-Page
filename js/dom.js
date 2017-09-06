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
                                    <img src=${promiseData[thing].fun}>
                                    <div id="studentBio">${promiseData[thing].bio}</div>
                                    <a href="${promiseData[thing].github}" class="bioLinks" target="_blank">GitHub</a><br>
                                    <a href="${promiseData[thing].linkedin}" class="bioLinks" target="_blank">LinkedIn</a><br>
                                    <a href="${promiseData[thing].personal}" class="bioLinks" target="_blank">Personal Website</a>
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