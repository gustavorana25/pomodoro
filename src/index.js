import {createTimer} from './timer/index';
import {updatedView} from './updateView/index';
import { createButtonsListeners } from './buttonsListeners/index';
import { updateWallpaper } from './images/images';

var jobMinutes = 25;
var pauseMinutes = 5;
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
});