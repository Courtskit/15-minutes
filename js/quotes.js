'use strict';

/// GLOBAL VARIABLES:
var quoteBucket = []; // hold our Quote objects

/// OBJECT CONSTRUCTORS:
// build object for quotes
function Quote(title, quoteText){
  this.title = title; // each quote will need a unique short title for reference. String, 1-3 words, camel-case, no spaces. Not displayed to user.
  this.quoteText = quoteText; // actual text of the quote. Displayed to the user.
};

/// FUNCTIONS:
// load the quotes from quotes.json
function loadQuotes(){
  var quotesJSONified = JSON.parse(Quotes); //read the JSON file
  for (var i=0; i<quotesJSONified.length; i++){
    quoteBucket.push(new Quote( //process contents through object constructor and push to array.
      quotesJSONified[i].title,
      quotesJSONified[i].quoteText
    ));
  }
}

// display a random quote
function displayRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quoteBucket.length);
  while (quoteBucket[randomNumber].quoteText === userData.lastQuote[0]){ // make sure this isn't repeating the user's most recent activity
    randomNumber = Math.floor(Math.random() * quoteBucket.length);
  }
  var quoteContainer = document.getElementById('quote');//check if that's the right ID
  var content = document.createElement('p');
  content.id = 'quote-body'; //just in case we need to target this for styling.
  content.textContent = quoteBucket[randomNumber].quoteText;
  quoteContainer.appendChild(content);

  updateUserData('quote', quoteBucket[randomNumber].quoteText);
  quoteContainer.addEventListener('click', rotateQuote);
}

// called when user clicks on quote to generate a new quote.
function rotateQuote(event){
  event.preventDefault();
  var quoteBody = document.getElementById('quote-body');
  quoteBody.remove();
  displayRandomQuote();
}

/// EXECUTIBLE CODE:

loadQuotes();
displayRandomQuote();
