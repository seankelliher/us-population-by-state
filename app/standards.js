function standardizeFill() {
    "use strict";

    // Retrieve all states.
    const states = document.getElementsByClassName("states");

    // Modify the nodelist to real array.
    const statesArray = Array.from(states);

    // Loop through array of states.
    statesArray.forEach(function (state) {

        // Get the state's fill color.
        const fill = state.getAttribute("fill");

        // Reset it, if needed.
        if (fill !== "#cfe5ff") { // If fill is not the default color...
            state.setAttribute("fill", "#cfe5ff"); // make it the default color.
        }
    });
}

export {standardizeFill};
