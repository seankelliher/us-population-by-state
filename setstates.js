function setStates() {

    //Retrieve all states.
    const states = document.getElementsByClassName("states");

    //Modify the nodelist to real array.
    const statesArray = Array.from(states);

    //Reset each state's fill to the default color.
    statesArray.forEach(function (st) {
        st.setAttribute("fill", "#039BE5");
    });
}

export {setStates};