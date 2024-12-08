let aboutmeBtn = document.querySelector("button.aboutmeBtn");
let searchagameBtn = document.querySelector("button.searchagamebtn");
let aboutmePara = document.querySelector("p.info");

aboutmeBtn.addEventListener('click', () => {
    aboutmePara.classList.toggle("hidden");
});

searchagameBtn.addEventListener('click', () => {
    location.href = "searchagame.html";
});