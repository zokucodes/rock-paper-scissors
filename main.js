function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == "0") {
        return("paper");
    }
    else if(computerChoice == "1") {
        return("scissors")
    }
    else {
        return("rock")
    }
}

console.log(getComputerChoice());