const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "TIE!";
    }
    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "PAPER":
                    return "You Lose! PAPER beats ROCK!";
                case "SCISSORS":
                    return "You Win! ROCK beats SCISSORS!";
            }
        case "PAPER":
            switch (computerSelection) {
                case "SCISSORS":
                    return "You Lose! SCISSORS beats PAPER!";
                case "ROCK":
                    return "You Win! PAPER beats ROCK!";
            }
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    return "You Lose! ROCK beats SCISSORS!";
                case "PAPER":
                    return "You Win! SCISSORS beats PAPER!";
            }
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));