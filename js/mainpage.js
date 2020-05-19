'use strict';
/// GLOBAL VARIABLES:
var userData; // should be filled with an object containing what we want to remember about the user
var quoteBucket = []; // hold our Quote objects
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

// build object for quotes
function Quote(title, quoteText, author){
  this.title = title; // each quote will need a unique short title for reference. String, 1-3 words, camel-case, no spaces. Not displayed to user.
  this.quoteText = quoteText; // actual text of the quote. Displayed to the user.
  this.author = author; // who said it. Displayed to the user. 
  // keeping author name seperate from text but grouped together in object lets us call them together but render them with different styling.
};

// build activity objects
// function Activity(title, image, shortContent, extendedContent){
//   this.title = title; // each activity needs a unique title. We'll display this title to the user.
//   this.image = image; // image file path. Should point to something in the ./img/ folder.
//   this.shortContent = shortContent; // brief explaination. A long string that we can put inside a <p>
//   this.extendedContent = extendedContent; // we talked about the user being able to click for more details to be displayed.
// };

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
function updateUserData(){
  var saveUserData = JSON.stringify(userData);
  localStorage.setItem('userData', saveUserData);
}

// receive data from userSetupForm
function handleUserSetupForm(event){
  event.preventDefault();
  userData = new UserData(event.target.'SOMETHING'); // push form data directly to object constructor and our job is done.
}

// load the quotes from quotes.json
function loadQuotes(){
  quoteBucket = JSON.parse(Quotes);
}

// display a random quote
function displayRandomQuote(){
  // grab parent element inside of quote bubble.
  // select an object at index of [Math.random within the range of quoteBucket.length]
  // create a <p> element, fill it with text from quoteBucket[index].quoteText, append to parent.
  // create a <p> element, (or other type?), fill it with quoteBucket[index].author, maybe as a string literal like `~ ${author}`
  // and append to parent.
  // push title to UserData.lastQuote[]
  // attach event listener for 'click'
}

// called when user clicks on quote to generate a new quote.
function rotateQuote(event){
  event.preventDefault();
  // grab parent element inside of quote bubble.
  // clear contents of parent.
  displayRandomQuote();
}

/// EXECUTABLE CODE:

// loadUserData();
// loadQuotes();
// displayRandomQuote();
