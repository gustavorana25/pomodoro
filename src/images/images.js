import { pause } from "./pauseUrls";
import { work } from "./workUrls";

const bg = document.getElementById('bg');

export function updateWallpaper(type="job-timer"){
    const url = type==="job-timer" ? getWorkWallpaper() : getPauseWallpaper();
    preloadImageAndChange(url);
}

function getWorkWallpaper(){
    return work[Math.floor(Math.random()*work.length)];
}

function getPauseWallpaper(){
    return pause[Math.floor(Math.random()*pause.length)];
}

function preloadImageAndChange(url){
    const img = new Image();
    img.src = url;
    img.onload = ()=>{
        bg.style.backgroundImage = `url(${url})`;
        bg.style.filter = "none";
    }
}

preloadImageAndChange("/assets/bg.jpg");