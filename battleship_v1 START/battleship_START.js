

	/********************************** BATTLESHIP! ***********************************
	The board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long
	User can pick a number between 0-6 and try to hit the ship
	If the user hits the ship, they are alerted. They have to "hit" all three spaces 
	occupied by the ship to "SINK" the battleship.
	Once the ship is sunk, they win and are alerted to how many guesses it took so
	SINK THE BATTLESHIP!
	**********************************************************************************/
	
	
//CREATE VAR's for 3 LOCATIONS ON THE BOARD
	var location1 = 1;
	var location2 = 2;
	var location3 = 3;


//CREATE VARIABLES FOR INITIAL GUESS, HITS, & GUESSES (TALLY SHOULD START AT 0)

	var guess;
	var hits = 0;
	var guesses = 0;

//CREATE VARIABLE TO DETERMINE IF SUNK IS TRUE OR FALSE (INITIATE AS FALSE)

	var isSunk = false;


//CREATE A WHILE LOOP THAT WILL RUN UNTIL THE SHIP IS SUNK

while (isSunk == false) {
	console.log("Your ship is not sinking");
}


	//PROMPT USER TO GUESS A NUMBER ON THE BOARD (0-6)

	 guess = prompt("Please enter a number to shoot a rocket");
	
	//CREATE A CONDITIONAL STATEMENT TO VALIDATE THE USER'S GUESS
	//IS THE GUESS BETWEEN 0 AND 6?

	if(guess < 0 || guess > 0){
		alert("Please enter a valid number");
	} else {

		guesses = guesses + 1;

		if(guess == location1 || guess == location2 || guess == location3){

			alert("Hit");
			hits = hits + 1;
			if (hits == 3){
			isSunk = ture;
			alert("Battleship Sunk!");
		}else{
			alert("Miss");
			 }
		};
	
	
	//INSIDE OF THE ELSE STATEMENT, TALLY GUESSES FOR EACH ATTEMPT
	
	
	
		//USE A NESTED CONDITIONAL INSIDE OF THE ELSE STATEMENT
		//IF THE USER'S GUESS MATCHES ANY OF THE SHIPS OCCUPIED SPACES, ALERT "HIT"
	
	
	
			//TALLY HITS BY ADDING ONE EACH TIME THE LOOP RUNS
			
			
			
			//CONDITION - IF USER REACHES 3 HITS, THEN THE SHIP IS SUNK
		
		
		
			//ELSE ALERT MISS!	
			
			
//CREATE VAR AND ALERT FOR STATS (YOU TOOK ? GUESSES TO SINK THE BATTLESHIP)



			////////////// ON YOUR OWN ///////////////////

// 	Try to replace location 1 with a random location
// 	USE: var randomLoc = Math.floor(Math.random() * 5); FOR YOUR FIRST VAR
