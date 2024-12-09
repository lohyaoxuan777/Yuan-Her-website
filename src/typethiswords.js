"use strict";
let gameCanvas = document.querySelector('canvas');
let canvasContext = gameCanvas.getContext('2d');
let playgameBtn = document.querySelector('.playbtn');

function waitSleep(ms) {
    return new Promise(reslove, () => {
        setTimeout(reslove, ms);
    });
};

function startGame() {
    console.log("Started Game, please get ready!");
    
};

playgameBtn.addEventListener('click', startGame);