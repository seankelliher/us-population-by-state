import {standardizeFill} from "./standards.js";

//Changes state's fill color when user mouses over.
function mouseOver(etid) {
    "use strict";

    //Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    //Change if needed.
    if (fill === "#EEE") { //grey 200.
        target.setAttribute("fill", "#E0E0E0"); //grey 300.
    }
}

//Changes state's fill color when user mouses out.
function mouseOut(etid) {
    "use strict";

    //Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    //Change if needed.
    if (fill === "#E0E0E0") { //grey 300.
        target.setAttribute("fill", "#EEE"); //grey 200.
    }
}

//Changes state's fill color when user clicks on it.
function mouseClick(etid) {
    "use strict";

    //Resets all states to "default" fill color.
    standardizeFill();

    //Get target and its fill color.
    const target = document.getElementById(etid);

    //Change it.
    target.setAttribute("fill", "#4FC3F7"); //light blue 300.
}

export {mouseOver, mouseOut, mouseClick};