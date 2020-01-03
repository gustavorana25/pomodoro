import { pause } from "./pauseUrls";
import { work } from "./workUrls";

export function updateWallpaper(type="job-timer"){
    const url = type==="job-timer" ? getWorkWallpaper() : getPauseWallpaper();
    document.body.style.backgroundImage = `url(${url})`;
}

function getWorkWallpaper(){
    return work[Math.floor(Math.random()*work.length)];
}

function getPauseWallpaper(){
    return pause[Math.floor(Math.random()*pause.length)];
}

updateWallpaper('pause-timer');