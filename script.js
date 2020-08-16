console.log("This is a rock-paper-scissors game.");

//function to compare selections and elect winner
// rock > scissors
// scissors > paper
// paper > rock
// equals = draw!
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    switch(playerSelection) {
        case "ROCK":
            if (computerSelection == "ROCK") {
                return "tie";
            }
            else if (computerSelection == "PAPER") {
                return "lose";
            }
            else {
                return "win";
            }
        case "PAPER":
            if (computerSelection == "ROCK") {
                return "win";
            }
            else if (computerSelection == "PAPER") {
                return "tie";
            }
            else {
                return "lose";
            }
        case "Scissors":
            if (computerSelection == "ROCK") {
                return "lose";
            }
            else if (computerSelection == "PAPER") {
                return "win";
            }
            else {
                return "tie";
            }
    }
}

//list for computer's play
const choices = ["rock", "paper", "scissors"];

//randomly pick a choice to play
function computerPlay(listOfChoices){
    let choice = Math.floor(Math.random() * listOfChoices.length);
    return listOfChoices[choice];
}

const playerSelection = "paper";
//const playerSelection = prompt("Players choice: ");

let scorePlayer = 0;
let scoreComputer = 0;
function game(){
    const result = playRound(playerSelection, computerPlay(choices));
    if (result == "tie"){
        console.log('Tie')
    }else{
        console.log(`You ${result}!`);
    }

    if(result == "win"){
        scorePlayer++;
    }else if(result == "lose"){
        scoreComputer++;
    }
    console.log(scorePlayer);
}


/* WORKING CODE
const playerSelection = "paper";
const computerSelection = computerPlay(choices);
console.log(playRound(playerSelection, computerSelection));
*/

let i;
for (i=0; i<5; i++){
    game();
}

console.log(`Final score, YOU ${scorePlayer} : CPU ${scoreComputer}`);