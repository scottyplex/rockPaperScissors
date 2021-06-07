const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log(`${userInput} is not valid`);
    }
}

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return `${userChoice} vs ${computerChoice} Cheater Cheater Pumpkin Eater.... ofcourse you Won!!! Shh.....`;
    }
    if (userChoice === computerChoice) {
        return `${userChoice} vs ${computerChoice} Tie!!!`;
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return `${userChoice} vs ${computerChoice} You Won!!!`;
        } else {
            return `${userChoice} vs ${computerChoice} You lost....`;
        }
    }
    if (userChoice == 'scissors') {
        if (computerChoice === 'paper') {
            return `${userChoice} vs ${computerChoice} You Won!!!`;
        } else {
            return `${userChoice} vs ${computerChoice} You lost....`;
        }
    }
    if (userChoice == 'paper') {
        if (computerChoice === 'rock') {
            return `${userChoice} vs ${computerChoice} You Won!!!`;
        } else {
            return `${userChoice} vs ${computerChoice} You lost....`;
        }
    }
}

function playGame(userChoice = getUserChoice('bomb'), computerChoice = getComputerChoice()) {
    console.log(`You choose ${userChoice} and the Computer chose ${computerChoice}`)
    console.log('And the Winner is.........')
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()