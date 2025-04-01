let humanScores = 0;
let computerScore = 0;
let gameRound = 0;

// get the elements from the HTML and create the event.

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
    document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
    document.getElementById('playerScore').textContent = humanScores;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('gameRound').textContent = gameRound;
});

    
// create the function getComputerChoice to get the option rock, paper or scissors from the computer and save it in the cChoice variable.

function getComputerChoice (){
    const choices = ['rock','paper', 'scissors'];
    const cChoice = Math.floor(Math.random() * choices.length);
    return choices[cChoice];
}     


// create the function playRound to make the logic of the game.

function playRound(humanChoice, computerChoice) {
    let message = ''; 

    if (humanChoice === computerChoice) {
        message = `It's a tie! ${humanChoice} = ${computerChoice}`;
        gameRound++;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScores++;
        gameRound++;
        message = `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        gameRound++;
        message = `Computer Wins! ${computerChoice} beats ${humanChoice}`;
    }

    if (humanScores == 5 || computerScore == 5) {
        message = `${humanScores == 5 ? "Human" : "Computer"} WINS the game!`;
        humanScores = 0;
        computerScore = 0;
        gameRound = 0;

    }
    

    // upload the DOM with the message and the score.
    document.getElementById('roundResults').textContent = message;
    document.getElementById('playerScore').textContent = humanScores;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('gameRound').textContent = gameRound;
    
}


  