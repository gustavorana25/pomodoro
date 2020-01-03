const work =[
    "http://www.4usky.com/data/out/20/164153873-city-wallpapers.jpg",
    "http://www.4usky.com/data/out/20/164153914-city-wallpapers.jpg",
    "http://www.4usky.com/data/out/20/164153978-city-wallpapers.jpg",
    "http://www.4usky.com/data/out/20/164154080-city-wallpapers.jpg",
    "http://www.4usky.com/data/out/103/164936567-working-wallpapers.jpg",
    "http://www.4usky.com/data/out/100/164905615-vintage-wallpapers.jpg",
    "http://www.4usky.com/data/out/100/164905966-vintage-wallpapers.jpg",
    "http://www.4usky.com/data/out/95/164862012-times-square-wallpapers.jpg",
    "http://www.4usky.com/data/out/10/164064315-big-ben-wallpapers.jpg"
];

const pause = [
    "http://www.4usky.com/data/out/68/164610068-palms-wallpapers.jpg",
    "http://www.4usky.com/data/out/97/164880380-tropical-wallpapers.jpg",
    "http://www.4usky.com/data/out/97/164880821-tropical-wallpapers.jpg",
    "http://www.4usky.com/data/out/100/164905273-vintage-wallpapers.jpg",
    "http://www.4usky.com/data/out/100/164905512-vintage-wallpapers.jpg",
    "http://www.4usky.com/data/out/100/164905531-vintage-wallpapers.jpg"
];

function getWorkWallpaper(){
    return work[Math.floor(Math.random()*work.length)];
}

function getPauseWallpaper(){
    return pause[Math.floor(Math.random()*pause.length)];
}