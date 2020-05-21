'use strict';
// this script will direct user to one of the activity pages at random when they click the random bubble.
var pages = ['mental.html', 'nutrition.html', 'physical.html'];
var randomNumber = Math.floor(Math.random() * pages.length);
var randomLink = pages[randomNumber];
var randomBubble = document.getElementById('random');

function handleClickOnRandom(){
  window.location.href = randomLink;
}

randomBubble.addEventListener('click', handleClickOnRandom);