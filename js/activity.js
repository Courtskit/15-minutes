'use strict';
/// GLOBAL VARIABLES:
var userData; // should be filled with an object containing what we want to remember about the user
var activityBucket = []; // hold our activity objects. We might want to split this into 3 seperate arrays, not sure.
var pageTitle = document.getElementById(''); // this should be a header element who's ID tells us which activity page we're on.

/// OBJECT CONSTRUCTORS:
// build activity objects
function Activity(title, image, shortContent, extendedContent){
  this.title = title; // each activity needs a unique title. We'll display this title to the user.
  this.image = image; // image file path. Should point to something in the ./img/ folder.
  this.shortContent = shortContent; // brief explaination. A long string that we can put inside a <p>
  this.extendedContent = extendedContent; // we talked about the user being able to click for more details to be displayed.
};

/// PROTOTYPES:
// activity render self to DOM
Activity.prototype.render = function(){

}

/// FUNCTIONS:
function Select

/// EXECUTABLE CODE:


