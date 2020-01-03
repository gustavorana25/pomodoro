function whitesoundPlayer() {
    const audio = new Audio('assets/whitesound.wav');
    audio.volume = 0.4;

    return {
        play() {
            audio.play();
            audio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
        },
        stop() {
            audio.pause();
            audio.currentTime = 0;
            audio.removeEventListener('ended', function () { });
        }
    }
}

export default whitesoundPlayer;