import {standardizeFill} from "./standards.js";

//Changes state's fill color when user mouses over.
function mouseOver(etid) {
    "use strict";

    //Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    //Change if needed.
    if (fill === "#B6E1F2") {
        target.setAttribute("fill", "#9FC5D4");
    }
}

//Changes state's fill color when user mouses out.
function mouseOut(etid) {
    "use strict";

    //Get target and its fill color.
    const target = document.getElementById(etid);
    const fill = target.getAttribute("fill");

    //Change if needed.
    if (fill === "#9FC5D4") {
        target.setAttribute("fill", "#B6E1F2");
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
    target.setAttribute("fill", "#A1A608");
}

export {mouseOver, mouseOut, mouseClick};