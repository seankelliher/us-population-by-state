import {allStates} from "./states.js";
import {setStates} from "./setstates.js";

function mouseClick() {

    //Set the fill color for all states.
    setStates();

    //Retrieve the container for the states.
    const outlines = document.getElementById("outlines");

    //Add event listener. If user clicks on a state...
    outlines.addEventListener("click", function (event) {

        //Set the fill color for all states again.
        //This resets any state that was highlighted on a previous click.
        setStates();

        //Retrieve and highlight the clicked state.
        const targetId = event.target.id;
        document.getElementById(targetId).setAttribute("fill", "#FF6F60");

        //Retrieve heading and spans where census data goes.
        const ckState = document.getElementById("ck-state");
        const ck1980 = document.getElementById("ck-1980");
        const ck1990 = document.getElementById("ck-1990");
        const ck2000 = document.getElementById("ck-2000");
        const ck2010 = document.getElementById("ck-2010");

        //Retrieve clicked state from "allStates" object.
        const chosenState = allStates[targetId];

        //Put census data in spans.
        //toLocalString() adds commas to numbers > three digits.
        ckState.textContent = chosenState.name;
        ck1980.textContent = chosenState.c1980.toLocaleString();
        ck1990.textContent = chosenState.c1990.toLocaleString();
        ck2000.textContent = chosenState.c2000.toLocaleString();
        ck2010.textContent = chosenState.c2010.toLocaleString();
    });
}

export {mouseClick};