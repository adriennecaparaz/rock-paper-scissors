const CHOICES = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice');
const dialogue = document.querySelector('#dialogue');

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    if (playerSelection == computerSelection) {
        dialogue.textContent = "TIE!";
        return 2;
    }
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "scissors":
                    dialogue.textContent = "You Win! ROCK beats SCISSORS!";
                    return 0;
                case "paper":
                    dialogue.textContent = "You Lose! PAPER beats ROCK!";
                    return 1;
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    dialogue.textContent = "You Win! PAPER beats ROCK!";
                    return 0;
                case "scissors":
                    dialogue.textContent = "You Lose! SCISSORS beats PAPER!";
                    return 1;
            }
        case "scissors":
            switch (computerSelection) {
                case "paper":
                    dialogue.textContent = "You Win! SCISSORS beats PAPER!";
                    return 0;
                case "rock":
                    dialogue.textContent = "You Lose! ROCK beats SCISSORS!";
                    return 1;
            }
    }
}

function game() {
    let roundResult = 2;
    let playerScore = 0;
    let computerScore = 0;
    
    // for (let i = 1; i < 6; i++) {
    //     do {
    //         roundResult = playRound(getPlayerChoice(), getComputerChoice());
    //     } while (roundResult == 2);
    //     switch (roundResult) {
    //         case 0:
    //             playerScore++;
    //         case 1:
    //             computerScore++;
    //     }
    // }
    
    
    if (playerScore > computerScore) {
        dialogue.textContent = "YOU WIN! " + playerScore + ":" + computerScore;
    }
    else {
        dialogue.textContent = "YOU LOSE! " + playerScore + ":" + computerScore;
    }
}

buttons.forEach(button => {
    addEventListener('click', playRound);
});

game();