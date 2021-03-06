function standardizeFill() {
    "use strict";

    //Retrieve all states.
    const states = document.getElementsByClassName("states");

    //Modify the nodelist to real array.
    const statesArray = Array.from(states);

    //Loop through array of states.
    statesArray.forEach(function (state) {

        //Get the state's fill color.
        const fill = state.getAttribute("fill");

        //Reset it, if needed.
        if (fill !== "#EEE") { //grey 200.
            state.setAttribute("fill", "#EEE"); //grey 200.
        }
    });
}

export {standardizeFill};