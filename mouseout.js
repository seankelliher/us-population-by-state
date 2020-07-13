function mouseOut() {

    //Retrieve the container for the states.
    const outlines = document.getElementById("outlines");

    //Add event listener. If user mouses-out of a state...
    outlines.addEventListener("mouseout", function (event) {

        //Retrieve and modify color on moused-out of state.
        const targetId = event.target.id;
        const getTarget = document.getElementById(targetId);
        const currentFill = getTarget.getAttribute("fill");

        if (currentFill === "#63A5BF") {
            getTarget.setAttribute("fill", "#71BBD9");
        }
    });
}

export {mouseOut};