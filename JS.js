let humanScores = 0;
let computerScore = 0;

// create the function getHumanChoice to get the option rock, papero or scissors from the human and save it in the hchoice variable.

function getHumanChoice (){
    let hchoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    return hchoice;
}
    
// create the function getComputerChoice to get the option rock, paper or scissors from the computer and save it in the cChoice variable.

function getComputerChoice (){
    const choices = ['rock','paper', 'scissors'];
    const cChoice = Math.floor(Math.random() * choices.length);
    return choices[cChoice];
}     


// create the function playRound to make the logic of the game.

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice){
            console.log(`it's a tie ${humanChoice} = ${computerChoice}`);
            
        }
        else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper'))
                {
                    humanScores++;
                    console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
                    

        } else if  ( (humanChoice === 'rock' && computerChoice === 'paper') ||
                    (humanChoice === 'paper' && computerChoice === 'scissors') ||
                    (humanChoice === 'scissors' && computerChoice === 'rock')
                     ){
                        computerScore++;
                        console.log(`Computer Win! ${computerChoice} Beats ${humanChoice}`);
                        
        } 

        console.log(`Scores - You: ${humanScores}, Computer: ${computerScore}`);
            } 
  
     
      function playGame() {
        
        for (let i = 0; i < 5; i++) {
            console.log(`\nRound ${i + 1}:`);
            const humanSelection = getHumanChoice(); // new choice of the player
            const computerSelection = getComputerChoice(); // new choice of the computer
            playRound(humanSelection, computerSelection);
        }
    
        console.log("Game Over");
        if(humanScores > computerScore){
            console.log("You Won ");
        } else if ( computerScore > humanScores){
            console.log("Computer Won");
        } else{
            console.log("it's a tie")
        }
    }
    //loop

// game start
playGame();

  