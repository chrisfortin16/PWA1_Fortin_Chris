/*
 Name: Chris Fortin
 Date: 5/03/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");                                                                                            //Output fight

    //player name
    var playerOne = ["Spiderman",20,100];
    var playerTwo = ["Batman", 20, 100];

    var round=0;

    function fight(){
        console.log ('in the fight function');                                                                          // Output In the fight function

        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);                       // alerting the players of the start of the game

        for (var i=0; i < 10; i++){                                                                                     //For statement

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = playerOne[1] * .5;                                                                        //multiplying the damage player1
            var minDamage2 = playerTwo[1] * .5;                                                                        //multiplying the damage player2
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            playerOne[2]-=f1;                                                                                        // damage player one will do to player two
            playerTwo[2]-=f2;                                                                                        // damage player two will do to player one

            console.log(playerOne[0]+":"+playerOne[2]+" "+playerTwo[0]+":"+playerTwo[2]);                       // console loging the damage each player did

            var results = winnerCheck();                                                                                // checking for the winner
            console.log(results);                                                                                       // console.loging the results of damage

            if (results === "no winner"){                                                                               // if no winnner say this
                round++;                                                                                                // go on to the next round
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[2]); // alert the players the round is over
            }else{
                alert(results);                                                                                         // if game is over display results
                break;                                                                                                  // line break
            };

        };

    };

    function winnerCheck(){
        console.log("in winnerCheck FN");                                                                               // checking for winner

        var result="no winner";                                                                                         // what will be displayed if there is no winner

        if (playerOne[2]<1 && playerTwo[2]<1){                                                                    // comparing the health of the players
            result = "You Both Die";                                                                                    // what will happen if both players die
        } else if(playerOne[2]<1){                                                                                   // if player one wins
            result =playerTwo[0]+" WINS!!!";                                                                           // display this
        } else if(playerTwo[2]<1){                                                                                   // if player 2 wins
            result =playerOne[0]+" WINS!!!";                                                                            // display this
        };

        return result;                                                                                                  //return the result

    };

    /*******  The program gets started below *******/
    console.log('program starts');                                                                                      // the program runs
    fight();

})();