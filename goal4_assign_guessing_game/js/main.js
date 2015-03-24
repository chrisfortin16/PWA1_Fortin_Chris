/**
 * GUESSING GAME:
 *
 * Created By: Chris Fortin
 * Date: 03/17/15
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
var guessRemain = 3;
var guessMade  = 0;
var guess = 0;
var x;

var GansterNumber = Math.floor(Math.random() * (10 - 1)* 1);

var dom = { // object dom with keys outside
    input: document.querySelector("#input"), //key one
    output: document.querySelector("#output"),
    button: document.querySelector("button")
};

var OnButtonClick = function(){

    validateMe()
};

var validateMe = function(){
    x = parseInt(dom.input.value);
    if(isNaN(x)){
        dom.output.innerHTML = "Not Valid Enter a new Number"
    }
    if(x === ""){
        dom.output.innerHTML = "Not Valid Enter a new Number"
    }

};

obj.button.AddEventLisenter("click"), OnButtonClick, false;
   /* var min = 1;
    var max = 10;
    var randomNum = Math.random(min,max);

    var guess1 = prompt("Random number guess one");
    var guess2 = prompt("Random number guess two");
    var guess3 = prompt("Random number guess three");

    while(guess1 === "" || isNaN(guess1)){
     guess1 = prompt("You must choose a valid Random number, guess a number for guess one");
    }
    while(guess1 > 10 || guess1 < 1){
    guess1 = prompt("Random number must be between 1 and 10 guess a number for guess one");
    }
    while(guess2 === "" || isNaN(guess2)){
        guess2 = prompt("You must choose a valid Random number, guess a number for guess two");
    }
    while(guess2 > 10 || guess2 < 1){
        guess2 = prompt("Random number must be between 1 and 10 guess a number for guess two");
    }
    while(guess3 === "" || isNaN(guess3)){
        guess1 = prompt("You must choose a valid Random number, guess a number for guess three");
    }
    while(guess3 > 10 || guess3 < 1){
        guess1 = prompt("Random number must be between 1 and 10 guess a number for guess three");
    }

    if (guess1 || guess2 || guess3 === randomNum){
        alert('Right Answer');
    }else{
        alert("You guessed wrong");
    }
*/

})();