const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();

    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// const getWinner = function(cChoice, pChoice) {
    // if (cChoice === pChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     (cChoice === ROCK && pChoice === PAPER) || 
    //     (cChoice === PAPER && pChoice === SCISSORS) || 
    //     (cChoice === SCISSORS && pChoice === ROCK)
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }
// }

// general syntax: (arg1, arg2) => { ... } 
// no arg: () => { ... } 
// exactly one arg: arg => { ... }
//exactly one expression: (arg1, arg2) => a + b
const getWinner = (cChoice, pChoice=DEFAULT_USER_CHOICE) => 
    cChoice === pChoice 
    ? RESULT_DRAW 
    : (cChoice === ROCK && pChoice === PAPER) || 
      (cChoice === PAPER && pChoice === SCISSORS) || 
      (cChoice === SCISSORS && pChoice === ROCK) 
    ? RESULT_PLAYER_WINS 
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', () => {
    if (gameRunning){
        return;
    }
    gameRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const compuerChoice = getComputerChoice();

    let winner;
    if (playerChoice) {
        winner = getWinner(compuerChoice, playerChoice);
    } else {
        winner = getWinner(compuerChoice, playerChoice);
    }
    console.log(winner);

    let message = `You ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${compuerChoice}, therefore you`;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameRunning = false;
});