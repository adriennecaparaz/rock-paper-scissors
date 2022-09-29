const CHOICES = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice');
const dialogue = document.querySelector('#dialogue');
const score = document.querySelector('#score');

let roundResult = 2;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function updateScore(roundResult) {
    switch (roundResult) {
        case 0:
            playerScore++;
            break;
        case 1:
            computerScore++;
            break;
        default:
            break;
    }
    score.textContent = `YOU: ${playerScore} / CPU: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) endGame();
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function playRound(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    if (playerSelection == computerSelection) {
        dialogue.textContent = "* TIE!";
        updateScore(2);
        return;
    }
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "scissors":
                    dialogue.innerHTML = "* You won the round<br>* ROCK beats SCISSORS!";
                    updateScore(0);
                    return;
                case "paper":
                    dialogue.innerHTML = "* You lost the round<br>* PAPER beats ROCK!";
                    updateScore(1);
                    return;
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    dialogue.innerHTML = "* You won the round<br>* PAPER beats ROCK!";
                    updateScore(0);
                    return;
                case "scissors":
                    dialogue.innerHTML = "* You lost the round!<br>* SCISSORS beats PAPER!";
                    updateScore(1);
                    return;
            }
        case "scissors":
            switch (computerSelection) {
                case "paper":
                    dialogue.innerHTML = "* You won the round!<br>* SCISSORS beats PAPER!";
                    updateScore(0);
                    return;
                case "rock":
                    dialogue.innerHTML = "* You lost the round!<br>* ROCK beats SCISSORS!";
                    updateScore(1);
                    return;
            }
    }
}

function endGame() {
    if (playerScore > computerScore) {
        dialogue.innerHTML = "* YOU WON!<br>* PLAY AGAIN?";
    }
    else {
        dialogue.innerHTML = "* YOU LOST!<br>* PLAY AGAIN?";
    }
    resetScore();
}

buttons.forEach(button => {
    addEventListener('click', playRound);
});