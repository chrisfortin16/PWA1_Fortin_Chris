/**
 * Created by jessicagarlic on 3/7/15.
 * Chris Fortin
 */

var width;
var height;

width = prompt("Enter a number");
height = prompt("Enter a second number");

var total = calcArea(width,height); //Call function pass arguments
calcArea(40,50);
function calcArea(w, h){ //create a basic function
                        // catches width and height in the parameters (w,h)
var area = w*h;
    console.log(area);
    return(area);
}


var min=100;
var max=200;


function randomizer(mn, mx){

    var randomNumber = Math.round(Math.random()*(mx-mn)+mn);
    return randomNumber;
}

var rarNum = randomizer(min,max);

console.log(rarNum);


//ANNONOMYS FUNCTION

var width = 10;
var height = 20;

var areaTotal = function(w,h){
    var area = w*h;
    console.log(area);
    return area;
}

var total = areaTotal(width,height);











