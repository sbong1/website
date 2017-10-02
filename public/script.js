// this is where I will put the script file for the orders page
/* making array */ 

var products = ["Beard Wash $17.00" , "Beard Balm - small $21.99", "Beard Balm - large $29.99", "Beach Bottle Stoppers $13.99"];


var labels = document.getElementsByTagName("label");

  function processProducts() {
    for (var i=0; i < 4; i++) {
      labels[i].innerHTML=products[i]; 
    }
}
if (window.addEventListener){
    window.addEventListener("load", processProducts, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", processProducts);
  }
  
 
// calculate total $


function calcTotal(){

  var itemTotal = 0
  var salesRate = .06 // stores the sales rate
  var items = document.getElementsByTagName("input"); 
  
  for (var i=0; i<5; i++) { 
    if(items[i].checked){
      itemTotal += (items[i].value * 1);
    }
    }
  var orderTotal = itemTotal + (itemTotal * salesRate);
alert("Your cool thing(s) will cost ya $" + orderTotal.toFixed(2));
 
}
// add the event listener to call the function
var submitButton = document.getElementById("sButton");
submitButton.addEventListener("click", calcTotal);
