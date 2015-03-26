/*
	* Mid Terms for PWA-1
	* Chris Fortin
	* 03/26/15
*/

var person = {
    name: "JBond",
    gpa: [2.5, 3.5, 4.0],
    address: {
        street: '3300 University Blv',
        city: 'Winter Park',
        state: 'Florida'
    }
};

var newPerson = {
    name:'super man',
    Gpa:[3.2, 4.0, 2.2],
    address: {
        street: '123 Test Dr',
        city: 'Orlando',
        state: 'Florida'
    }
};

var thisArray = [person,newPerson];

console.log(person.name);
console.log(person.gpa);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);

console.log(newPerson.name);
console.log(newPerson.gpa);
console.log(newPerson.address.street);
console.log(newPerson.address.city);
console.log(newPerson.address.state);


var addData = function(){

    document.getElementById("name").innerHTML = person.name;
    document.getElementById("name").innerHTML = person.address;
    document.getElementById("name").innerHTML = person.gpa;


};

button.onclick = addData();
