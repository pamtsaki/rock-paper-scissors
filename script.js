/**
 * TODO: CLEAN UP CODE, MAKE THE GAME STOP AT 5 WINS AND RELOAD THE WINDOW WHEN THAT HAPPENS
 */

//function to compare selections and elect winner
// rock > scissors
// scissors > paper
// paper > rock
// equals = draw!
//list for computer's play
let playerSelection = '';
let scorePlayer = 0;
let scoreComputer = 0;
const choices = ['rock', 'paper', 'scissors'];

//randomly pick a choice to play
function computerPlay(listOfChoices) {
  let choice = Math.floor(Math.random() * listOfChoices.length);
  return listOfChoices[choice];
}

function determineWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  switch (playerSelection) {
    case 'ROCK':
      if (computerSelection == 'ROCK') {
        return 'tie';
      } else if (computerSelection == 'PAPER') {
        return 'lose';
      } else {
        return 'win';
      }
    case 'PAPER':
      if (computerSelection == 'ROCK') {
        return 'win';
      } else if (computerSelection == 'PAPER') {
        return 'tie';
      } else {
        return 'lose';
      }
    case 'SCISSORS':
      if (computerSelection == 'ROCK') {
        return 'lose';
      } else if (computerSelection == 'PAPER') {
        return 'win';
      } else {
        return 'tie';
      }
  }
}

const playerScoreUpdate = document.querySelector('#player-score');
const computerScoreUpdate = document.querySelector('#computer-score');
const finalScoreUpdate = document.querySelector('.score-final');

function playGame() {
  document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', (event) => {
      console.log(item.textContent);
      playerSelection = item.textContent;
      let computerSelection = computerPlay(choices);
      console.log(`computer chose: ${computerSelection}`);
      let result = determineWinner(playerSelection, computerSelection);
      console.log(result);
      //round winning logic
      if (result == 'win') {
        scorePlayer++;
        playerScoreUpdate.textContent = `Player: ${scorePlayer}`;
      } else if (result == 'lose') {
        scoreComputer++;
        computerScoreUpdate.textContent = `Computer: ${scoreComputer}`;
      }
      if (scorePlayer == 5 || scoreComputer == 5) {
        const winner = document.createElement('h1');
        winner.classList.add('final-score-text');
        if (scorePlayer == 5) {
          winner.textContent = 'Player wins!';
        }
        if (scoreComputer == 5) {
          winner.textContent = 'Computer wins!';
        }
        finalScoreUpdate.appendChild(winner);
        return;
      }
    });
  });
}

playGame();

console.log('exited');
