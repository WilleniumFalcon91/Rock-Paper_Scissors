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
   return a + " " + moves[a][b] + " " + b;
}

rockPaperScissors("rock", "paper")