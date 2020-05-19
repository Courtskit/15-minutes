'use strict';
/// GLOBAL VARIABLES:
//var userData = JSON.parse(localStorage.getItem('userData')); // should be filled with an object containing what we want to remember about the user
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
  // grab parent element
  var container = document.getElementById('');
  // create new element(s) + fill with content
  var activityCard = document.createElement('');
  activityCard.id = 'activity-card';
  container.appendChild(activityCard);
  var activityTitle = document.createElement('h2');
  activityTitle.textContent = this.title;
  activityCard.appendChild(activityTitle); //render title
  var activityImage = document.createElement('img');
  activityImage.src = this.image;
  activityCard.appendChild(activityImage); //render image
  var activityBody = document.createElement('p');
  activityBody.textContent = this.shortContent;
  activityCard.appendChild(activityBody); //render text
}

/// FUNCTIONS:
// load activities from activities.json
function loadActivities(){
  var activitiesJSONified = JSON.parse(Activities); //read the JSON file
  for (var i=0; i<activitiesJSONified.length; i++){
    activityBucket.push(new Activity( //process contents through object constructor and push to array.
      activitiesJSONified[i].title,
      activitiesJSONified[i].image,
      activitiesJSONified[i].shortContent,
      activitiesJSONified[i].extendedContent
    ));
  }
}

// select a random activity
function selectActivity(){
  var randomNumber = Math.floor(Math.random() * activityBucket.length);
  
  // select an object at index of [Math.random within the range of activityBucket.length]
  // check if category===activityBucket[index].category, if not, select again. This can be a while loop.
  // activityBucket[index].render();
  // push selection title to userData and updateUserData();
}

/// EXECUTABLE CODE:
loadActivities();
//selectActivity();

