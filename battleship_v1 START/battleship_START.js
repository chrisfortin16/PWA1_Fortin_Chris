

	/********************************** BATTLESHIP! ***********************************
	The board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long
	User can pick a number between 0-6 and try to hit the ship
	If the user hits the ship, they are alerted. They have to "hit" all three spaces 
	occupied by the ship to "SINK" the battleship.
	Once the ship is sunk, they win and are alerted to how many guesses it took so
	SINK THE BATTLESHIP!
	**********************************************************************************/
	
	
//CREATE VAR's for 3 LOCATIONS ON THE BOARD
	var randomLoc = Math.floor(Math.random() * 5);
	var location1 = randomLoc;
	var location2 = randomLoc;
	var location3 = randomLoc;


//CREATE VARIABLES FOR INITIAL GUESS, HITS, & GUESSES (TALLY SHOULD START AT 0)

	var guess;
	var hits = 0;
	var guesses = 0;

//CREATE VARIABLE TO DETERMINE IF SUNK IS TRUE OR FALSE (INITIATE AS FALSE)

	var isSunk = false;


//CREATE A WHILE LOOP THAT WILL RUN UNTIL THE SHIP IS SUNK

while (isSunk == false) {

	//PROMPT USER TO GUESS A NUMBER ON THE BOARD (0-6)

	guess = prompt("Please enter a number to shoot a rocket");

	//CREATE A CONDITIONAL STATEMENT TO VALIDATE THE USER'S GUESS
	//IS THE GUESS BETWEEN 0 AND 6?

	if (guess < 0 || guess > 5) {
		alert("Please enter a valid number");
	} else {

		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {

			alert("Hit");
			hits++;
			if (hits == 3) {
				isSunk = true;
				alert("Battleship Sunk!");
			} else {
				alert("Miss");
			}
		}
	}
}
	//INSIDE OF THE ELSE STATEMENT, TALLY GUESSES FOR EACH ATTEMPT
	
	
	
		//USE A NESTED CONDITIONAL INSIDE OF THE ELSE STATEMENT
		//IF THE USER'S GUESS MATCHES ANY OF THE SHIPS OCCUPIED SPACES, ALERT "HIT"
	
	
	
			//TALLY HITS BY ADDING ONE EACH TIME THE LOOP RUNS
			
			
			
			//CONDITION - IF USER REACHES 3 HITS, THEN THE SHIP IS SUNK
		
		
		
			//ELSE ALERT MISS!	
			
			
//CREATE VAR AND ALERT FOR STATS (YOU TOOK ? GUESSES TO SINK THE BATTLESHIP)

var stats = "You took "+guesses+" guesses to sink the battleship.";
	alert(stats);

			////////////// ON YOUR OWN ///////////////////

// 	Try to replace location 1 with a random location
// 	USE: var randomLoc = Math.floor(Math.random() * 5); FOR YOUR FIRST VAR
