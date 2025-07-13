"use strict";

// Practice with tabs

const tabContents = document.querySelectorAll(".tabcontent");
const tabLinks = document.querySelectorAll(".tablink");

const openColour = function (colour) {
    // Hide all tab content
    tabContents.forEach((tab) => {
        return (tab.style.display = "none");
    });

    // Remove active tab styling
    tabLinks.forEach((tab) => {
        return tab.classList.remove("active");
    });

    // Display tab content of colour
    const colourContent = document.getElementById(colour);
    colourContent.style.display = "block";
};

tabLinks.forEach((tab) => {
    tab.addEventListener("click", function (event) {
        const colour = tab.textContent.toLowerCase();
        openColour(colour);

        // console.log(event.currentTarget);
        event.currentTarget.classList.add("active");
    });
});
