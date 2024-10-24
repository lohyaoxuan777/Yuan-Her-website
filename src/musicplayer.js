let song1PlayBtn = document.querySelector(".play-song1");
let song1Audio = document.querySelector("audio.audio-song1");
let song1ProgressBar = document.querySelector(".song1-progress-bar");
let song1Time = document.querySelector(".time-song1");
let song1back5secBtn = document.querySelector('.back5sec-song1');
let song1forward5secBtn = document.querySelector('.forward5sec-song1');

song1PlayBtn.addEventListener('click', () => {
    if (song1Audio.paused) {
        song1PlayBtn.innerHTML = '<sl-icon name="pause"></sl-icon>';
        song1Audio.play();
    } else if (song1Audio.play) {
        song1PlayBtn.innerHTML = '<sl-icon name="play"></sl-icon>';
        song1Audio.pause();
    };

    song1Audio.addEventListener('timeupdate', () => {
        let song1CurrentTime = song1Audio.currentTime;
        let song1Duration = song1Audio.duration;
        let song1Percent = (song1CurrentTime / song1Duration) * 100;
        song1ProgressBar.value = song1Percent;
        song1Time.innerHTML = `${Math.floor(song1CurrentTime / 60)}:${Math.floor(song1CurrentTime % 60).toString().padStart(2, '0')} / ${Math.floor(song1Duration / 60)}:${Math.floor(song1Duration % 60).toString().padStart(2, '0')}`;
    });
});

song1back5secBtn.addEventListener('click', () => {
    song1Audio.currentTime = song1Audio.currentTime - 5;
});

song1forward5secBtn.addEventListener('click', () => {
    song1Audio.currentTime = song1Audio.currentTime + 5;
});