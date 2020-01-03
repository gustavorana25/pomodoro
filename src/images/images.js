import { pause } from "./pauseUrls";
import { work } from "./workUrls";

const bg = document.getElementById('bg');

const allCached = [];
const cachedImage = {
    work: getWorkWallpaper(),
    pause: getPauseWallpaper(),
}

export function updateWallpaper(type="job-timer"){
    const newImage = type==="job-timer" ? getWorkWallpaper() : getPauseWallpaper();
    const cached = type==="job-timer" ? cachedImage.work : cachedImage.pause;
    bg.style.backgroundImage = `url(${cached})`;
    
    cachedImage[type==="job-timer" ? 'work':'pause'] = newImage;
    preloadImage(newImage);
}

function getWorkWallpaper(){
    return work[Math.floor(Math.random()*work.length)];
}

function getPauseWallpaper(){
    return pause[Math.floor(Math.random()*pause.length)];
}

function preloadImage(url, callback=()=>{}){
    if(!allCached.includes(url)){
        const img = new Image();
        img.src = url;
        img.onload = ()=>{
            callback(url);
        }
        allCached.push(url)
    }
}

preloadImage("assets/bg.jpg", (url)=>{
    bg.style.backgroundImage = `url(${url})`;
    bg.style.filter = "none";
});

preloadImage(cachedImage.work);
preloadImage(cachedImage.pause);