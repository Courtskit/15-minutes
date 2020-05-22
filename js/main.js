'use strict';
/// GLOBAL VARIABLES:
var userData; // should be filled with an object containing what we want to remember about the user

/// OBJECT CONSTRUCTORS:
// build object for userdata storage
function UserData(userName, lastFitness=[], lastMental=[], lastNutrition=[], lastQuote=[]){ // params come from the form or from localstorage
  this.userName = userName;
  this.lastFitness = lastFitness; // I was thinking we could use arrays to store history.
  this.lastMental = lastMental; // push title of activity into array, unshift if array is longer than certain length.
  this.lastNutrition = lastNutrition; // gives us something for our random selector function to check against.
  this.lastQuote = lastQuote;
}; // we can expand this object later to store any user preferences. Maybe they can choose their own color theme?



/// PROTOTYPES:


/// FUNCTIONS:
// render user's name to the greeting message
function greetUser(){
  var welcomeBubble = document.getElementById('username');
  var displayUserName = document.createElement('p');
  displayUserName.textContent = `${userData.userName}!`;
  welcomeBubble.appendChild(displayUserName);
}


// receive data from userSetupForm
function handleUserSetupForm(event){
  event.preventDefault();
  userData.userName = event.target.nameField.value; // push form data directly to object constructor and our job is done.
  var form = document.getElementById('username-form');
  form.remove(); // make form go bye-bye.
  saveUserData();
  greetUser();
}


// prompt for user's name
function userSetupForm(){
  var mainContainer = document.getElementById('allCirclesContainer'); //id="form" is applied to <main>
  
  var bubble = document.createElement('div');
  bubble.className = 'circle grow targetBubbles img'; // so the circle styling applies to it
  bubble.id = 'username-form'; // so additional styling rules for size/position can be applied.
  mainContainer.appendChild(bubble);
  var form = document.createElement('form'); // form
  form.id = 'delete-me'; // tag it so we can make it disappear again when we're finished with it.
  bubble.appendChild(form);
  var label = document.createElement('label'); // label linked to input
  label.for = 'name-field';
  label.textContent = 'Please enter your name here:';
  form.appendChild(label);
  var nameField = document.createElement('input'); // they type there name here
  nameField.id = 'name-field';
  nameField.name = 'nameField';
  nameField.type = 'text';
  nameField.id = 'input-field';
  form.appendChild(nameField);

  var submitButton = document.createElement('input'); // submit button
  submitButton.type = 'submit';
  submitButton.name = 'submit';
  submitButton.textContent = 'submit';
  submitButton.id = 'submit-button';
  form.appendChild(submitButton);
  form.addEventListener('submit', handleUserSetupForm);

}

// check localstorage for userdata, load it if we have it, call the form request function if we don't.
function loadUserData(){
  // if (we find userdata in localstorage){userData = new UserData(JSON.parse(the stuff we find in localstorage))}
  // else{userSetupForm();}
  try { // try/catch instead of if/else
    var userDataFromStorage = JSON.parse(localStorage.getItem('userData'));
    
    userData = new UserData(
      userDataFromStorage.userName,
      userDataFromStorage.lastFitness,
      userDataFromStorage.lastMental,
      userDataFromStorage.lastNutrition,
      userDataFromStorage.lastQuote
    ); 
  } catch (error) {
    userData = new UserData('');
    // userSetupForm();
    // break;
  }
  if (userData.userName === ''){
    userSetupForm();
  }else{
    if (!document.getElementsByClassName('activitypage')){
      greetUser();
    }
  }
}

function saveUserData(){
  var saveUserData = JSON.stringify(userData); // stringify
  localStorage.setItem('userData', saveUserData); // save locally
}

// update userdata and write to localstorage
function updateUserData(type, title){// type must be EXACTLY either 'fitness', 'mental', 'nutrition', or 'quote'. title is title property of an object.
  //used switch/case instead of if/else
  switch(type){
    case 'fitness':
      userData.lastFitness.unshift(title);
      break;
    case 'mental':
      userData.lastMental.unshift(title);
      break;
    case 'nutrition':
      userData.lastNutrition.unshift(title);
      break;
    case 'quote':
      userData.lastQuote.unshift(title);
      break;
  }
  saveUserData();
}



/// EXECUTABLE CODE:

loadUserData();
