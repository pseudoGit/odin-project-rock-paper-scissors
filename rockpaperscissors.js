function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Error.");
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                return "You Lose! Paper beats Rock";
            }
            else if (computerSelection == "scissors") {
                return "You Win! Rock beats Scissors";
            }
        }
        else if (playerSelection == "paper") {
            if (computerSelection = "rock") {
                return "You Win! Paper beats Rock";
            }
            else if (computerSelection == "scissors") {
                return "You Lose! Scissors beats Paper";
            }
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                return "You Lose! Rock beats Scissors";
            }
            else if (computerSelection == "paper") {
                return "You Win! Scissors beats Paper";
            }
        }
    }
}

function game() {
    let userScore = 0, computerScore = 0;
    /*
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors: ");
        let result = playRound(playerSelection, computerPlay());
        if (result.includes("Win")) {
            userScore++;
        }
        else {
            computerScore++;
        }
    }
    */
    (userScore > computerScore) ? console.log(`User wins! ${userScore} to ${computerScore}`) : console.log(`Computer wins! ${userScore} to ${computerScore}`);
}

const results = document.querySelector('#results');
const btns = document.querySelectorAll('button');
let userScore = 0, computerScore = 0;
let playCount = 0;
btns.forEach((btn) => {
    
        btn.addEventListener('click', () => {
            if (playCount < 5) {
                let result = playRound(btn.textContent, computerPlay());
                const div = document.createElement('div');
                div.textContent = result;
                results.appendChild(div);
                if (result.includes("Win")) {
                    userScore++;
                }
                else {
                    computerScore++;
                }
                playCount++;
            }
            else {
                let result = (userScore > computerScore) ? `User wins! ${userScore} to ${computerScore}` : `Computer wins! ${userScore} to ${computerScore}`;
                const div = document.createElement('div');
                div.textContent = result;
                results.appendChild(div);
            }
        });
});


