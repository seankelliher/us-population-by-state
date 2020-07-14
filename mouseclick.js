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
        document.getElementById(targetId).setAttribute("fill", "#F2CB05");

        //Retrieve spans where census data goes.
        //State's name and numbers.
        const ckState = document.getElementById("ck-state");
        const ck1980 = document.getElementById("ck-1980");
        const ck1990 = document.getElementById("ck-1990");
        const ck2000 = document.getElementById("ck-2000");
        const ck2010 = document.getElementById("ck-2010");

        //State's percentage change.
        const ck1990Sup = document.getElementById("ck-1990-sup");
        const ck2000Sup = document.getElementById("ck-2000-sup");
        const ck2010Sup = document.getElementById("ck-2010-sup");

        //Retrieve clicked state from "allStates" object.
        const chosenState = allStates[targetId];

        //Put census data in spans.
        //toLocalString() adds commas to numbers > three digits.
        //State's name and numbers.
        ckState.textContent = chosenState.name;
        ck1980.textContent = chosenState.c1980.toLocaleString();
        ck1990.textContent = chosenState.c1990.toLocaleString();
        ck2000.textContent = chosenState.c2000.toLocaleString();
        ck2010.textContent = chosenState.c2010.toLocaleString();

        //State's percentage change.
        ck1990Sup.textContent = `${chosenState.diff1980to1990()}%`;
        ck2000Sup.textContent = `${chosenState.diff1990to2000()}%`;
        ck2010Sup.textContent = `${chosenState.diff2000to2010()}%`;
    });
}

export {mouseClick};