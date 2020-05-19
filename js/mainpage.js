'use strict';
/// GLOBAL VARIABLES:
var userData; // should be filled with an object containing what we want to remember about the user

/// OBJECT CONSTRUCTORS:
// build object for userdata storage
function UserData(userName){ // params come from the form or from localstorage
  this.userName = userName;
  this.lastFitness = []; // I was thinking we could use arrays to store history.
  this.lastMental = []; // push title of activity into array, unshift if array is longer than certain length.
  this.lastNutrition = []; // gives us something for our random selector function to check against.
  this.lastQuote = [];
}; // we can expand this object later to store any user preferences. Maybe they can choose their own color theme?

// build object for quotes.
function Quote(title, quoteText, author){
  this.title = title; // each quote will need a unique short title. String, 1-3 words, camel-case, no spaces. Not displayed to user.
  this.quoteText = quoteText; // actual text of the quote. Displayed to the user.
  this.author = author; // who said it. Displayed to the user. 
  // keeping author name seperate from text but grouped together in object lets us call them together but render them with different styling.
};



/// PROTOTYPES:


/// FUNCTIONS:


/// EXECUTABLE CODE:


