function rockPaperScissors (a, b) {
    var moves = {
        "rock": {
            "rock": "ties with",
            "paper": "loses to",
            "scissors": "beats"
        }, 
        "paper":  {          
            "rock": "beats",
            "paper": "ties with",
            "scissors": "loses to"
        },
        "scissors":  {          
            "rock": "loses to",
            "paper": "beats",
            "scissors": "ties with"
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var computerMoves = ["rock", "paper", "scissors"];

function playComputer (input) {
    rockPaperScissors(input, computerMoves[getRandomInt(0, 2)])
}

rockPaperScissors("rock", "paper")