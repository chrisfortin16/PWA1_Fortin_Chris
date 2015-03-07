/**
 * Created by jessicagarlic on 3/7/15.
 * Chris Fortin
 */

var num1;
var num2;
var num3;

num1 = prompt("Please enter a number");
if((num1 === "") || isNaN(num1)){
    num1 = prompt("You did not enter a valid Number, please try again.");
}else{
    console.log("The number you chose for num1 is "+num1);
}
num2 = prompt("Please enter a different number");
if(num2 === num1) {
    num2 = prompt("You already entered this number Please try again");
}else if(num2 === ""){
    num2 = prompt("You did not put anything in the box, please try again");
}else if(isNaN(num2)){
    num2 = prompt("You did not put a Number, Please try again");
}else{
    console.log("The second number you chose for num2 is "+num2);
}
num3 = prompt("Please enter a different number");
if(num3 === num2) {
    num3 = prompt("You already entered this number Please try again");
}else if(num3 === ""){
    num3 = prompt("You did not put anything in the box, please try again");
}else if(isNaN(num3)){
    num3 = prompt("You did not put a Number, Please try again");
}else{
    console.log("The second number you chose for num2 is "+num3);
}


