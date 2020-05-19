'use strict';
/// GLOBAL VARIABLES:
var userData = JSON.parse(localStorage.getItem('userData')); // should be filled with an object containing what we want to remember about the user
var activityBucket = []; // hold our activity objects. We might want to split this into 3 seperate arrays, not sure.
var pageTitle = document.getElementById(''); // this should be a header element who's ID tells us which activity page we're on.

/// OBJECT CONSTRUCTORS:
// build activity objects
function Activity(category, title, image, shortContent, extendedContent){
  this.category = category; // either 'fitness' or 'nutrition' or 'mental'.
  this.title = title; // each activity needs a unique title. We'll display this title to the user.
  this.image = image; // image file path. Should point to something in the ./img/ folder.
  this.shortContent = shortContent; // brief explaination. A long string that we can put inside a <p>
  this.extendedContent = extendedContent; // we talked about the user being able to click for more details to be displayed.
};

/// PROTOTYPES:
// activity render self to DOM
Activity.prototype.render = function(){
  // grab parent element
  // create new element(s) + fill with content
  // append, append, append,
  // attach a listener?
}

/// FUNCTIONS:
// load activities from activities.json
function loadActivities(){
  activityBucket = JSON.parse(Activities);
}

// select a random activity
function selectActivity(category){
  // select an object at index of [Math.random within the range of activityBucket.length]
  // check if category===activityBucket[index].category, if not, select again. This can be a while loop.
  // activityBucket[index].render();
  // push selection title to userData and updateUserData();
}

/// EXECUTABLE CODE:


