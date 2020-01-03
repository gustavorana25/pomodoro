export function createTimer(){
    const state = {
        timerInterval: null,
        status: "stoped",
        secondsCountDown: 0,
        observers:[]
    }

    function onChange(observerFunction){
        state.observers.push(observerFunction);
    }
    
    function notify(){
        for (const observerFunction of state.observers) {
            observerFunction({
                status: state.status,
                seconds: state.secondsCountDown
            })
        }
    }

    function play(seconds){
        changeState(seconds, 'start');
        startInterval();
    }

    function stop(){
        clear();
        changeState(0, 'stoped');
    }

    function clear(){
        if (state.timerInterval) clearInterval(state.timerInterval);
    }

    function changeState(seconds, status){
        state.status = status;
        state.secondsCountDown = seconds;
        notify();
    }

    function startInterval(){
        clear();

        state.timerInterval = setInterval(function () {
            const countDown = state.secondsCountDown-1;

            if(countDown>0)
                changeState(countDown, 'playing');
            else{
                changeState(0, 'end');
                clear();
            }
        }, 1000);
    }

    return {
        onChange,
        play,
        stop
    }
}