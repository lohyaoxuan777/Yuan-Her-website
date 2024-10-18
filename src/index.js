const aboutme = document.querySelector('.aboutme');
const aboutinfo = document.querySelector('.aboutinfo');
const playagame = document.querySelector('.playagame');

aboutme.addEventListener('click', () => {
    aboutinfo.classList.toggle('hide');
});

playagame.addEventListener('click', () => {
    window.location.href = 'searchagame.html';
});
