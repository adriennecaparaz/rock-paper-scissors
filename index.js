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
        dialogue.textContent = "TIE!";
        updateScore(2);
        return;
    }
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "scissors":
                    dialogue.textContent = "You Win! ROCK beats SCISSORS!";
                    updateScore(0);
                    return;
                case "paper":
                    dialogue.textContent = "You Lose! PAPER beats ROCK!";
                    updateScore(1);
                    return;
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    dialogue.textContent = "You Win! PAPER beats ROCK!";
                    updateScore(0);
                    return;
                case "scissors":
                    dialogue.textContent = "You Lose! SCISSORS beats PAPER!";
                    updateScore(1);
                    return;
            }
        case "scissors":
            switch (computerSelection) {
                case "paper":
                    dialogue.textContent = "You Win! SCISSORS beats PAPER!";
                    updateScore(0);
                    return;
                case "rock":
                    dialogue.textContent = "You Lose! ROCK beats SCISSORS!";
                    updateScore(1);
                    return;
            }
    }
}

function endGame() {
    if (playerScore > computerScore) {
        dialogue.textContent = "YOU WIN! " + playerScore + ":" + computerScore + "\n PLAY AGAIN?";
    }
    else {
        dialogue.textContent = "YOU LOSE! " + playerScore + ":" + computerScore + "\n PLAY AGAIN?";
    }
    resetScore();
}

buttons.forEach(button => {
    addEventListener('click', playRound);
});