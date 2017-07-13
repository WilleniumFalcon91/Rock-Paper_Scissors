function rockPaperScissors (a, b) {
    var moves = {
        "rock": {
            "rock": "tie with",
            "paper": "loses to",
            "scissors": "beats"
        }, 
        "paper":  {          
            "rock": "beats",
            "paper": "tie with",
            "scissors": "loses to"
        },
        "scissors":  {          
            "rock": "loses to",
            "paper": "beats",
            "scissors": "tie with"
        }
    }
   var result = a + " " + moves[a][b] + " " + b + "!";
   for (i = 0; i < result.length; i++) {
     if (result[i] == "b") {
       console.log("You win!");
     } else if (result[i] =="w") {
       console.log("You tied. Play again!");
     } else if (result[i] == "l") {
       console.log("Loser!");
     }
   }
   return result
}

rockPaperScissors("rock", "paper")