const aboutme = document.querySelector('.aboutme');
const aboutinfo = document.querySelector('.aboutinfo');
const playagame = document.querySelector('.playagame');
const tools = document.querySelector('.tools');

aboutme.addEventListener('click', () => {
    aboutinfo.classList.toggle('hide');
});

playagame.addEventListener('click', () => {
    window.location.href = 'searchagame.html';
});

tools.addEventListener('click', () => {
    window.location.href = 'tools.html';
});