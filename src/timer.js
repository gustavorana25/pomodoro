var timer;
var jobMinutes = 35;
var pauseMinutes = 10;
var countDownInSeconds = 0;
var audio = new Audio('assets/timer.wav');
var whitesound = whitesoundPlayer();
var minuteElem = document.getElementById('minute');
var secondElem = document.getElementById('second');

function doTimer(type = "job") {
    if (timer) stop();

    countDownInSeconds = type === "job" ? jobMinutes * 60 : pauseMinutes * 60;
    const background = type === "job" ? getWorkWallpaper() : getPauseWallpaper();

    showCountDownInView(countDownInSeconds);

    document.body.style.backgroundImage = `url(${background})`;

    if(type==="job")
        whitesound.play();

    timer = setInterval(function () {
        countDownInSeconds--;
        if (countDownInSeconds > 0)
            showCountDownInView(countDownInSeconds);
        else {
            audio.play();
            stop();
        }
    }, 1000);
}

function stop(){
    if (timer) clearInterval(timer);
    whitesound.stop();
    showCountDownInView(0);
    document.title = "Job Timer";
    document.body.style.backgroundImage = `url(${getPauseWallpaper()})`;
}

function showCountDownInView(countDown) {
    const minutes = twoDigts(countDown / 60);
    const seconds = twoDigts(countDown % 60);
    const countText =  minutes + ":" + seconds;
    document.title = countText;
    minuteElem.innerHTML = minutes;
    secondElem.innerHTML = seconds;
}

function twoDigts(num = 0) {
    const fixedNumber = Math.floor(num);
    return fixedNumber < 10 ? `0${fixedNumber}` : `${fixedNumber}`;
}