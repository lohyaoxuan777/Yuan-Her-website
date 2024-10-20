let rockBtn = document.querySelector(".rockbtn");
let paperBtn = document.querySelector(".paperbtn");
let scissorsBtn = document.querySelector(".scissorsbtn");

let botChoice = document.querySelector(".botchoose");
let userChoice = document.querySelector(".userchoose");
let Choises = ["Rock", "Paper", "Scissors"];
let gameInfo = document.querySelector(".gameinfo");


rockBtn.addEventListener("click", () => {
    botChoice.innerHTML = "Scissors";
    userChoice.innerHTML = "Rock";
});

paperBtn.addEventListener("click", () => {
    botChoice.innerHTML = "Paper";
    userChoice.innerHTML = "Paper";
});

scissorsBtn.addEventListener("click", () => {
    botChoice.innerHTML = "Rock";
    userChoice.innerHTML = "Scissors";
});


if (botChoice.innerHTML == "Rock" && userChoice.innerHTML == "Paper") {
    gameInfo.innerHTML = "You win";
    alert("You win");
};

if (botChoice.innerHTML == "Rock" && userChoice.innerHTML == "Scissors") {
    gameInfo.innerHTML = "You lose";
};

if (botChoice.innerHTML == "Paper" && userChoice.innerHTML == "Rock") {
    gameInfo.innerHTML = "You lose";
};

if (botChoice.innerHTML == "Paper" && userChoice.innerHTML == "Scissors") {
    gameInfo.innerHTML = "You win";
};

if (botChoice.innerHTML == "Scissors" && userChoice.innerHTML == "Rock") {
    gameInfo.innerHTML = "You win";
};

if (botChoice.innerHTML == "Scissors" && userChoice.innerHTML == "Paper") {
    gameInfo.innerHTML = "You lose";
};