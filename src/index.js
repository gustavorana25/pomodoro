import {createTimer} from './timer/index';
import {updatedView} from './updateView/index';
import { createButtonsListeners } from './buttonsListeners/index';
import { updateWallpaper } from './images/images';

var audio = new Audio('assets/timer.wav');
audio.volume = 0.4;
var jobMinutes = 1;
var pauseMinutes = 1;
const timer = createTimer();
const buttonsListener = createButtonsListeners();

const buttonsActions = {
    "job-timer": () => timer.play(jobMinutes * 60),
    "pause-timer": () => timer.play(pauseMinutes * 60),
    "stop": () => timer.stop(),
}

buttonsListener.onClick((buttonClicked)=>{
    updateWallpaper(buttonClicked)
    if(buttonsActions[buttonClicked])
        buttonsActions[buttonClicked]();
})

timer.onChange(({status, seconds})=>{
    updatedView(seconds, status);

    if(status === "end")
        audio.play();
});