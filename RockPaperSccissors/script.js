let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");

const drawGame = () => {
    console.log("Draw")
}

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        console.log("You lose!");
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice ", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
        msg.innerText = "Game was draw, Play again!";
        msg.style.backgroundColor = "#081b31";
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked ", userChoice);
        playGame(userChoice);
    })
})