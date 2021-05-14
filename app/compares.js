import {allStates} from "./states.js";

function showCompares(etid) {
    "use strict";

    //Gather elements where state name and census counts go.
    const state = document.getElementById("state-name");
    const c1980 = document.getElementById("c1980");
    const c1990 = document.getElementById("c1990");
    const c2000 = document.getElementById("c2000");
    const c2010 = document.getElementById("c2010");
    const c2020 = document.getElementById("c2020");

    //Gather elements where percentage changes go.
    const c1990Dif = document.getElementById("c1990-dif");
    const c2000Dif = document.getElementById("c2000-dif");
    const c2010Dif = document.getElementById("c2010-dif");
    const c2020Dif = document.getElementById("c2020-dif");

    //Retrieve clicked state from "allStates" object.
    const stateName = allStates[etid].name;
    const c1980Data = allStates[etid].c1980;
    const c1990Data = allStates[etid].c1990;
    const c2000Data = allStates[etid].c2000;
    const c2010Data = allStates[etid].c2010;
    const c2020Data = allStates[etid].c2020;

    //Calculate percentage change between census counts.
    function getChange(count1, count2) {
        const percent = count1 / count2;
        const fromOne = 1 - percent;
        const perDiff = fromOne * 100;
        return (
            perDiff < 0
            ? (perDiff.toFixed(1))
            : ("+" + perDiff.toFixed(1))
        );
    }

    //Place state name and census counts into elements.
    //toLocalString() adds commas to numbers > three digits.
    state.textContent = stateName;
    c1980.textContent = c1980Data.toLocaleString();
    c1990.textContent = c1990Data.toLocaleString();
    c2000.textContent = c2000Data.toLocaleString();
    c2010.textContent = c2010Data.toLocaleString();
    c2020.textContent = c2020Data.toLocaleString();

    //Place percentage of change into elements.
    c1990Dif.textContent = `${getChange(c1980Data, c1990Data)}%`;
    c2000Dif.textContent = `${getChange(c1990Data, c2000Data)}%`;
    c2010Dif.textContent = `${getChange(c2000Data, c2010Data)}%`;
    c2020Dif.textContent = `${getChange(c2010Data, c2020Data)}%`;
}

export {showCompares};