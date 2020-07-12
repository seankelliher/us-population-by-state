import {allStates} from "./states.js";

function defaultDc() {

    //Retrieve Washington, DC element.
    const dcCircle = document.getElementById("districtofcolumbia");

    //Highlight it.
    dcCircle.setAttribute("fill", "#FF6F60");

    //Retrieve heading and spans where census data goes.
    const ckState = document.getElementById("ck-state");
    const ck1980 = document.getElementById("ck-1980");
    const ck1990 = document.getElementById("ck-1990");
    const ck2000 = document.getElementById("ck-2000");
    const ck2010 = document.getElementById("ck-2010");

    //Retrieve Washington, DC from "allStates" object.
    const chosenState = allStates.districtofcolumbia;

    //Put census data in spans.
    //toLocalString() adds commas to numbers > three digits.
    ckState.textContent = chosenState.name;
    ck1980.textContent = chosenState.c1980.toLocaleString();
    ck1990.textContent = chosenState.c1990.toLocaleString();
    ck2000.textContent = chosenState.c2000.toLocaleString();
    ck2010.textContent = chosenState.c2010.toLocaleString();
}

export {defaultDc};