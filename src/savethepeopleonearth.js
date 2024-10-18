let gameCanvas = document.querySelector(".gamecanvas");
let ctx = gameCanvas.getContext("2d");
let startBtn = document.querySelector(".startgamebtn");
let killedZombiesPara = document.querySelector("p.killedzombies");
let killedZombiesCoding = 0;
let killedZombies = 0;

function startGame() {
    startBtn.style.display = "none";
    console.log("5ets");
    ctx.font = "10px Arial";
    ctx.fillText("Click anywhere to start", gameCanvas.width / 2 - 50, gameCanvas.height / 2);
    startBtn.removeEventListener("click", startGame);
    gameCanvas.addEventListener("click", openGame);
};

function openGame() {
    console.log("Opened game.")
    gameCanvas.removeEventListener("click", openGame)
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.beginPath();
    ctx.arc(gameCanvas.width / 2 - 7.54, gameCanvas.height / 2, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "10px Arial";
    ctx.fillText("Kill Zombie", gameCanvas.width / 2 - 30, gameCanvas.height / 2);

    gameCanvas.addEventListener("click", killZombie);
};

function killZombie() {
    // for every 3 button pressed, add 1 killedZombie variable.
    killedZombiesCoding++
    console.log("In");
    if (killedZombiesCoding % 3 == 0) {
        console.log("In out IN");
        killedZombies++;
        killedZombiesPara.innerHTML = "Killed zombies: " + killedZombies;
    };
}

startBtn.addEventListener('click', startGame);
