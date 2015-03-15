/*
 Name: Chris Fortin
 Date: 5/03/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");                                                                                            //Output fight

    //player name
    var playerOneName = "Spiderman";                                                                                    //Player one name spiderman
    var playerTwoName = "Batman";                                                                                       //Player two name is batman

    //player damage
    var player1Damage = 20;                                                                                             // damage player one can do
    var player2Damage = 20;                                                                                             // damage player two can do

    //player health
    var playerOneHealth = 100;                                                                                          //Health of player one
    var playerTwoHealth = 100;                                                                                          //Health of player two

    var round=0;

    function fight(){
        console.log ('in the fight function');                                                                          // Output In the fight function

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);                       // alerting the players of the start of the game

        for (var i=0; i < 10; i++){                                                                                     //For statement

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;                                                                        //multiplying the damage player1
            var minDamage2 = player2Damage * .5;                                                                        //multiplying the damage player2
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;                                                                                        // damage player one will do to player two
            playerTwoHealth-=f2;                                                                                        // damage player two will do to player one

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);                       // console loging the damage each player did

            var results = winnerCheck();                                                                                // checking for the winner
            console.log(results);                                                                                       // console.loging the results of damage

            if (results === "no winner"){                                                                               // if no winnner say this
                round++;                                                                                                // go on to the next round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth); // alert the players the round is over
            }else{
                alert(results);                                                                                         // if game is over display results
                break;                                                                                                  // line break
            };

        };

    };

    function winnerCheck(){
        console.log("in winnerCheck FN");                                                                               // checking for winner

        var result="no winner";                                                                                         // what will be displayed if there is no winner

        if (playerOneHealth<1 && playerTwoHealth<1){                                                                    // comparing the health of the players
            result = "You Both Die";                                                                                    // what will happen if both players die
        } else if(playerOneHealth<1){                                                                                   // if player one wins
            result =playerTwoName+" WINS!!!";                                                                           // display this
        } else if(playerTwoHealth<1){                                                                                   // if player 2 wins
            result =playerOneName+" WINS!!!";                                                                            // display this
        };

        return result;                                                                                                  //return the result

    };

    /*******  The program gets started below *******/
    console.log('program starts');                                                                                      // the program runs
    fight();

})();