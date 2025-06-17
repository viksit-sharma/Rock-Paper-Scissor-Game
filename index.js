function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result;
        if (playerMove === "Scissors") {
          if (computerMove === "Rock") {
            result = "You lose";
          } else if (computerMove === "Paper") {
            result = "You win";
          } else if (computerMove === "Scissors") {
            result = "Tie";
          }
          alert(
            `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
          );
        } else if (playerMove === "Rock") {
          const computerMove = pickComputerMove();

        let result;
        if (computerMove === "Rock") {
            result = "You win";
        } else if (computerMove === "Paper") {
            result = "Tie";
        } else if (computerMove === "Scissors") {
            result = "You lose";
        }
        alert(
            `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
        );
        } else if (playerMove === "Paper") {
        const computerMove = pickComputerMove();

        let result;
        if (computerMove === "Rock") {
            result = "Tie";
        } else if (computerMove === "Paper") {
            result = "You lose";
        } else if (computerMove === "Scissors") {
            result = "You win";
        }
        alert(
          `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`
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