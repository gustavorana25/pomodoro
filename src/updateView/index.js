const minuteElem = document.getElementById('minute');
const secondElem = document.getElementById('second');
const title = document.title;

export function updatedView(countDown, status="stoped") {
    const minutes = twoDigts(countDown / 60);
    const seconds = twoDigts(countDown % 60);
    const countText =  minutes + ":" + seconds;
    
    minuteElem.innerHTML = minutes;
    secondElem.innerHTML = seconds;

    if(status=== "playing")
        document.title = countText;
    else
        document.title = title
}

function twoDigts(num = 0) {
    const fixedNumber = Math.floor(num);
    return fixedNumber < 10 ? `0${fixedNumber}` : `${fixedNumber}`;
}