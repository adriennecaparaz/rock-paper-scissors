const CHOICES = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice');

buttons.forEach(button => {
    addEventListener('click', playRound);
})

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;inde
    if (playerSelection == computerSelection) {
        alert("TIE!");
        return 2;
    }
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "scissors":
                    alert("You Win! ROCK beats SCISSORS!");
                    return 0;
                case "paper":
                    alert("You Lose! PAPER beats ROCK!");
                    return 1;
            }
        case "paper":
            switch (computerSelection) {
                case "rock":
                    alert("You Win! PAPER beats ROCK!");
                    return 0;
                case "scissors":
                    alert("You Lose! SCISSORS beats PAPER!");
                    return 1;
            }
        case "scissors":
            switch (computerSelection) {
                case "paper":
                    alert("You Win! SCISSORS beats PAPER!");
                    return 0;
                case "rock":
                    alert("You Lose! ROCK beats SCISSORS!");
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
        alert("YOU WIN! " + playerScore + ":" + computerScore);
    }
    else {
        alert("YOU LOSE! " + playerScore + ":" + computerScore);
    }
}

// game();