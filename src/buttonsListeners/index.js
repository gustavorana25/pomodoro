export function createButtonsListeners(){
    const state = {
        observers:[]
    }

    function onClick(observerFunction){
        state.observers.push(observerFunction);
    }
    
    function notify(buttonClicked){
        for (const observerFunction of state.observers) {
            observerFunction(buttonClicked);
        }
    }

    document.querySelectorAll(".actions button").forEach(button=>{
        button.addEventListener("click", ()=> notify(button.id));
    })

    return {
        onClick
    }
}