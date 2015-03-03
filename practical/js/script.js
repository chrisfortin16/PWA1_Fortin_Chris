/*
Chris Fortin
PWA Campus
3/03/15
Day Four In Class Assignments
 */

alert("Welcome to my Online Store!");

var potato = prompt("Please enter the cost of an item.");
if (potato === "" || isNaN(potato)); {
    //User did not type anything in
   var potato = prompt("Please do not leave blank. Enter in the cost of the item");
}
var discount = prompt("Please enter the percent off the item between 1 - 100");
while (discount === "" || isNaN(discount) || discount > 100 || discount < 1); {
	var discount = prompt("You must keep the number between 1 and 100 and it must be a number. Please try again");
}

function calc() {
var total = potato * discount / 100;
console.log("The total is "+total);
}


calc();







