import {standardizeFill} from "./app/standards.js";
import {mouseOver, mouseOut, mouseClick} from "./app/highlights.js";
import {showCompares} from "./app/compares.js";

// After DOM loads...
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Set the fill color for all states.
    standardizeFill();

    // Highlight California. Show its data.
    mouseClick("california");
    showCompares("california");

    // Get "outlines" id (this houses all "states").
    const outlines = document.getElementById("outlines");

    // Monitor states for mouse overs.
    outlines.addEventListener("mouseover", function (event) {
        mouseOver(event.target.id);
    });

    // Monitor states for mouse outs.
    outlines.addEventListener("mouseout", function (event) {
        mouseOut(event.target.id);
    });

    // Monitor states for clicks.
    outlines.addEventListener("click", function (event) {
        mouseClick(event.target.id);
        showCompares(event.target.id);
    });

    // Monitor states for keyups.
    outlines.addEventListener("keyup", function (event) {
        if (event.code === "Enter") {
            mouseClick(event.target.id);
            showCompares(event.target.id);
        }
    });
});
