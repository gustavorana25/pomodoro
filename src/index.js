import {createTimer} from './timer/index';
import {updatedView} from './updateView/index';
import { createButtonsListeners } from './buttonsListeners/index';
import { updateWallpaper } from './images/images';
import whitesoundPlayer from './whiteSound/index'

var audio = new Audio('assets/timer.wav');
audio.volume = 0.4;
var jobMinutes = 25;
var pauseMinutes = 5;
const whiteSound = whitesoundPlayer();
const timer = createTimer();
const buttonsListener = createButtonsListeners();

const buttonsActions = {
    "job-timer": () => {
        whiteSound.play();
        timer.play(jobMinutes * 60);
    },
    "pause-timer": () => {
        whiteSound.stop();
        timer.play(pauseMinutes * 60);
    },
    "stop": () => {
        whiteSound.stop();
        timer.stop()
    },
}

buttonsListener.onClick((buttonClicked)=>{
    updateWallpaper(buttonClicked)
    if(buttonsActions[buttonClicked])
        buttonsActions[buttonClicked]();
})

timer.onChange(({status, seconds})=>{
    updatedView(seconds, status);

    if(status === "end"){
        audio.play();
    }
});