"use strict";
//global variable 
var newAccountArray=[]
//generates value for the Account ID field
// this allows the data you enter to come up as a newAccountArray
function createId() {
  var fname = document.getElementById("fnameInput");
  var lname = document.getElementById("lnameInput");
  var number = document.getElementById("phoneInput");
  var address = document.getElementById("emailInput");
  var fields = document.getElementsByTagName("input");

  // creating an if function to ensure the fields on the application are not blank
  if (fname.value!==""&& lname.value!==""&& number.value!==""){
    newAccountArray = [];
    for (var i= 0; i < fields.length - 1; i++){
      newAccountArray.push(fields[i].value);
    }
  }
}
//create event listener
function createEventListeners(){
  var fname = document.getElementById("fnameInput");
  var lname = document.getElementById("lnameInput");
  var number = document.getElementById("phoneInput");
   var address = document.getElementById("emailInput");
  if (fname.addEventListener) {
    fname.addEventListener("change", createId, false);
    lname.addEventListener("change", createId, false);
    number.addEventListener("change", createId, false);
    address.addEventListener("change", createId, false);
  }
}
if (window.addEventListener){
  window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners, true); 
}

var validationSuccess = true;

//validate email 
function validateEmail() {
    var emailCheck = /^[_\w\-]+(.\[_\w\-]+)*@[_\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    var emailInput = document.getElementById("e-mail");
    if (emailCheck.test(emailInput.value) === false) {
        window.alert("Invalid email address. Please try again.");
        validationSuccess = false;
    }
}

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false; 
    }
    validationSuccess = true;
    validateEmail();
    if (validationSuccess === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

var validationSuccess = true;

var phoneNumber = document.getElementById("phoneInput");
function validatePhoneNumber() {
    if (phoneNumber.value.length < phoneNumber.maxLength) {
        validationSuccess = false;
    } 
    if (phoneNumber.value.charAt(3) !== "-" || phoneNumber.value.charAt(7) !== "-") {
        validationSuccess = false;
    }
    if (validationSuccess === false) {
        window.alert("Invalid Phone Number");
    }  
}

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false; 
    }
    validationSuccess = true;
    validatePhoneNumber();
    if (validationSuccess === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

/* create event listener for submit button on the form */
function createEventListener() {
    var submit = document.getElementById("submitButton");
    if (submit.addEventListener) {
    submit.addEventListener("click", validateForm, false);  
    } else if (submit.attachEvent) {
        submit.attachEvent("onsubmit", validateForm);
    }
}

function setUpPage() {
    createEventListener();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

