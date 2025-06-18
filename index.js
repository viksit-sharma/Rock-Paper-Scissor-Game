const score={
        wins:0,
        loses:0,
        ties:0,
      };
function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result;
        if (playerMove === "Scissors") {
          if (computerMove === "Rock") {
            result = "You lose";
          } else if (computerMove === "Paper") {
            result = "You win";
          } else if (computerMove === "Scissors") {
            result = "It's a tie";
          }
          if(result==='You win')
        {
          score.wins++;
        }
        else if(result==='You lose'){
          score.loses++;
        }
        else if(result==="It's a tie")
        {
          score.ties++; 
        }
          alert(
          `You picked ${playerMove}. \nComputer picked ${computerMove}. \n${result} \nWins : ${score.wins} Loses : ${score.loses} Ties : ${score.ties}`
        );
        } else if (playerMove === "Rock") {
          const computerMove = pickComputerMove();

        let result;
        if (computerMove === "Rock") {
            result = "It's a tie";
        } else if (computerMove === "Paper") {
            result = "You lose";
        } else if (computerMove === "Scissors") {
            result = "You win";
          }
          if(result==='You win')
        {
          score.wins++;
        }
        else if(result==='You lose'){
          score.loses++;
        }
        else if(result==="It's a tie")
        {
          score.ties++; 
        }
        alert(
          `You picked ${playerMove}. \nComputer picked ${computerMove}. \n${result} \nWins : ${score.wins} Loses : ${score.loses} Ties : ${score.ties}`
        );
        } else if (playerMove === "Paper") {
        const computerMove = pickComputerMove();

        let result;
        if (computerMove === "Rock") {
            result = "You win";
        } else if (computerMove === "Paper") {
            result = "It's a tie";
        } else if (computerMove === "Scissors") {
            result = "You lose";
        }

          if(result==='You win')
        {
          score.wins++;
        }
        else if(result==='You lose'){
          score.loses++;
        }
        else if(result==="It's a tie")
        {
          score.ties++; 
        }

        alert(
          `You picked ${playerMove}. \nComputer picked ${computerMove}. \n${result} \nWins : ${score.wins} Loses : ${score.loses} Ties : ${score.ties}`
        );
        }
      }
      function pickComputerMove() {
        let computerMove = "";

        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "Rock";
        } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "Paper";
        } else if (randomNumber > 2 / 3 && randomNumber < 1) {
          computerMove = "Scissors";
        }
        return computerMove;
      }