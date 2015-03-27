/*
	* Mid Terms for PWA-1
	* Chris Fortin
	* 03/26/15
*/
var button = document.getElementById;
var person = {                                          // Created variable 1 called person
    name: "JBond",                                      // declaring the name of var person
    gpa: [2.5, 3.5, 4.0],                               // declaring the gpa of var person
    address:'3300 University Blv, Winter Park, Florida' // starting he address
};

var newPerson = {                                       // Created variable 2 called newperson
    name:'super man',                                   // declaring the name of var newperson
    gpa:[3.2, 4.0, 2.2],                                // declaring the gpa of var newPerson
    address:'123 Test Dr, Orlando, Florida'             // declaring the address of var newPerson
};
var lastPerson = {                                      // Created variable 3 called lastPerson
    name: 'mmouse',                                     // declaring the name of var lastPerson
    gpa: [2.7, 1.7, 3.0],                               // declaring the gpa of var lastPerson
    address: '802 Vermont Rocks Rd, Jericho, Vermont'   // declaring the address of var lastPerson
};


var thisArray = [person,newPerson];                     // creating the array to hold the first 2 variables

console.log(person.name);                               // console.loging the name of the first person
console.log(person.gpa);                                // console.loging the gpa of the first person
console.log(person.address);                            // console.loging the address of the first person

console.log(newPerson.name);                            // console.loging the name of the new person
console.log(newPerson.gpa);                             // console.loging the gpa of the new person
console.log(newPerson.address);                         // console.loging the address of the new person

console.log(lastPerson.name);                           // console.loging the name of the last person
console.log(lastPerson.gpa);                            // console.loging the gpa of the last person
console.log(lastPerson.address);                        // console.loging the address of the last person

                                                        // Starting to use the dom that does not work correctly
var display1 = function() {
    document.getElementById('name');
    document.getElementById('gpa');
    document.getElementById('address');
};

var display2 = function(){
    document.getElementById('name');
    document.getElementById('gpa');
    document.getElementById('address');
};

var display3 = function(){
    document.getElementById('name');
    document.getElementById('gpa');
    document.getElementById('address');
};

button.onclick=display1;                                // on click run first function
    while(thisArray.length === 2){                      // while the array length is 2 push in a new person
        thisArray.push(lastPerson);                     // .push a new item into the array
    }

