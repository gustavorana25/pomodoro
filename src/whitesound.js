function whitesoundPlayer() {
    let config = {
        volume: 0.4,
        sounds: [
            new Audio('assets/1a.ogg'),
            new Audio('assets/4a.ogg'),
            new Audio('assets/5a.ogg'),
            new Audio('assets/6a.ogg'),
            new Audio('assets/8a.ogg'),
        ]
    }

    return {
        play() {
            config.sounds.forEach(audio => {
                audio.volume = config.volume;
                audio.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
                randomDelayPlay(audio);
            })
        },
        stop() {
            config.sounds.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
                audio.removeEventListener('ended', function () { });
            })
        }
    }
}

function randomDelayPlay(audio) {
    const minMileSeconds = 500;
    const maxMileSeconds = 8000;
    const randomMileSeconds = Math.floor(Math.random() * (maxMileSeconds - minMileSeconds + 1) + minMileSeconds);

    setTimeout(() => {
        audio.play();
    }, randomMileSeconds);
}