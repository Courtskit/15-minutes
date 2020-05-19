'use strict';
/// GLOBAL VARIABLES:
var userData; // should be filled with an object containing what we want to remember about the user

//var activityBucket = []; // hold our activity objects. We might want to split this into 3 seperate arrays, not sure.

/// OBJECT CONSTRUCTORS:
// build object for userdata storage
function UserData(userName){ // params come from the form or from localstorage
  this.userName = userName;
  this.lastFitness = []; // I was thinking we could use arrays to store history.
  this.lastMental = []; // push title of activity into array, unshift if array is longer than certain length.
  this.lastNutrition = []; // gives us something for our random selector function to check against.
  this.lastQuote = [];
}; // we can expand this object later to store any user preferences. Maybe they can choose their own color theme?



/// PROTOTYPES:


/// FUNCTIONS:
// check localstorage for userdata, load it if we have it, call the form request function if we don't.
function loadUserData(){
  // if (we find userdata in localstorage){userData = new UserData(JSON.parse(the stuff we find in localstorage))}
  // else{userSetupForm();}
}

// prompt for user's name
function userSetupForm(){
  // grab a parent element
  // create a form element
  // create message element with instructions
  // create input elements
  // create submit element
  // attach listener
}

// update userdata and write to localstorage
function updateUserData(type, title){// type must be EXACTLY either 'fitness', 'mental', 'nutrition', or 'quote'. title is title property of an object.
  //cascading if/elif/else to push string in title to the correct array in the userData object.
  var saveUserData = JSON.stringify(userData); // stringify
  localStorage.setItem('userData', saveUserData); // save locally
}

// receive data from userSetupForm
function handleUserSetupForm(event){
  event.preventDefault();
  userData = new UserData(event.target.'SOMETHING'); // push form data directly to object constructor and our job is done.
}


/// EXECUTABLE CODE:

// loadUserData();
// loadQuotes();
// displayRandomQuote();
