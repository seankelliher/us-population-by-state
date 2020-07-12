function mouseOver() {

    //Retrieve the container for the states.
    const outlines = document.getElementById("outlines");

    //Add event listener. If user mouses-over a state...
    outlines.addEventListener("mouseover", function (event) {

        //Retrieve and modify color on moused-over state.
        const targetId = event.target.id;
        const getTarget = document.getElementById(targetId);
        const currentFill = getTarget.getAttribute("fill");

        if (currentFill === "#039BE5") {
            getTarget.setAttribute("fill", "#03A9F4");
        }
    });
}

export {mouseOver};