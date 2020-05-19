'use strict';

/// GLOBAL VARIABLES:
var quoteBucket = []; // hold our Quote objects

/// OBJECT CONSTRUCTORS:
// build object for quotes
function Quote(title, quoteText, author){
  this.title = title; // each quote will need a unique short title for reference. String, 1-3 words, camel-case, no spaces. Not displayed to user.
  this.quoteText = quoteText; // actual text of the quote. Displayed to the user.
  this.author = author; // who said it. Displayed to the user. 
  // keeping author name seperate from text but grouped together in object lets us call them together but render them with different styling.
};


/// PROTOTYPES:


/// FUNCTIONS:
// load the quotes from quotes.json
function loadQuotes(){
  // think we need a local var here, so we can run all this through the constructor function.
  quoteBucket = JSON.parse(Quotes);
}

// display a random quote
function displayRandomQuote(){
  // grab parent element inside of quote bubble.
  // select an object at index of [Math.random within the range of quoteBucket.length]
  // create a <p> element, fill it with text from quoteBucket[index].quoteText, append to parent.
  // create a <p> element, (or other type?), fill it with quoteBucket[index].author, maybe as a string literal like `~ ${author}`
  // and append to parent.
  // updateUserData('quote', quoteBucket[index].title);
  // attach event listener for 'click'
}

// called when user clicks on quote to generate a new quote.
function rotateQuote(event){
  event.preventDefault();
  // grab parent element inside of quote bubble.
  // clear contents of parent.
  displayRandomQuote();
}


/// EXECUTIBLE CODE: