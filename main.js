let playerTotalPoints = 0;
let computerTotalPoints = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == "0") {
        return("paper");
    }
    else if(computerChoice == "1") {
        return("scissors");
    }
    else {
        return("rock");
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
   
    if(playerSelection ==='scissors') {
        if(computerSelection ==='paper') {
            result="You Win! Scissor beats Paper";
            playerTotalPoints++;
        } else if(computerSelection ==='rock') {
            result="You Lose! Rock beats Scissors";
            computerTotalPoints;
        } else {
            result='No one wins, You both picked Scissors ';
        } 
    } else if(playerSelection ==='paper') {
        if(computerSelection ==='rock') {
            result="You Win! Paper beats Rock";
            playerTotalPoints++;
        } else if(computerSelection ==='scissors') {
            result="You Lose! Scissors beats Paper";
            computerTotalPoints;
        } else {
            result='No one wins, You both picked Paper';
        }
    } else if(playerSelection ==='rock') {
        if(computerSelection ==='scissors') {
            result="You Win! Rock beats Scissors";
            playerTotalPoints++;
        } else if(computerSelection ==='paper') {
            result="You Lose! Paper beats rock";
            computerTotalPoints;
        } else {
            result='No one wins, You both picked Rock ';
        }
        
    }
    return result;
}


function game() {

    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Please choose and enter either Rock, Paper or Scissors").toLowerCase();
        
        let singleRound = console.log(playRound(playerSelection, computerSelection));

        if (playerTotalPoints >= 5 && computerTotalPoints < 5) {
            console.log("You win the best of five!");
        } else if (computerTotalPoints >= 5 && playerTotalPoints < 5) {
            console.log("You lost the best of five!");
        } 
    }
    
}

console.log(game());






