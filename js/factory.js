"use strict";

$.ajax({url: `class.json`,
        success: function(result){
            console.log("The data is ", result);
        //   if("copyright" in result) {
        //     $("#copyright").hide().text("Image Credits: " + result.copyright).fadeIn(2000);
        //   }
        //   else {
        //     $("#copyright").hide().text("Image Credits: " + "Public Domain").fadeIn(2000);
        //   }
        //   $("#apod_title").hide().text(result.title).fadeIn(2000);
    }
    });