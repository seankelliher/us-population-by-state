import {standardizeFill} from "./standards.js";

// Changes state's fill color when user mouses over.
function mouseOver(etid) {
    "use strict";

    // Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    // Change if needed.
    if (fill === "#8fadbf") { // medium blue grey.
        target.setAttribute("fill", "#b0cdd9"); // light blue grey.
    }
}

// Changes state's fill color when user mouses out.
function mouseOut(etid) {
    "use strict";

    // Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    // Change if needed.
    if (fill === "#b0cdd9") { // light blue grey.
        target.setAttribute("fill", "#8fadbf"); // medium blue grey.
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
    target.setAttribute("fill", "#f28a2e"); // orange.
}

export {mouseOver, mouseOut, mouseClick};
