import {standardizeFill} from "./standards.js";

// Changes state's fill color when user mouses over.
function mouseOver(etid) {
    "use strict";

    // Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    // Change if needed.
    if (fill === "#cfe5ff") { // If fill is default color...
        target.setAttribute("fill", "#e8f2ff"); // make it mouse over color.
    }
}

// Changes state's fill color when user mouses out.
function mouseOut(etid) {
    "use strict";

    // Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    // Change if needed.
    if (fill === "#e8f2ff") { // If fill is mouse over color...
        target.setAttribute("fill", "#cfe5ff"); // make it the default color.
    }
}

// Changes state's fill color when user clicks on it.
function mouseClick(etid) {
    "use strict";

    // Resets all states to "default" fill color.
    standardizeFill();

    // Get target and its fill color.
    const target = document.getElementById(etid);

    // Change it.
    target.setAttribute("fill", "#ede76d"); // Make fill the selected color.
}

export {mouseOver, mouseOut, mouseClick};
