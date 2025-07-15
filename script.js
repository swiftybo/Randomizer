"use strict";

// Practice with tabs

import { renderUI } from "./films.js";

const tabContents = document.querySelectorAll(".tabcontent");
const tabLinks = document.querySelectorAll(".tablink");
const content = document.getElementById("content");
const displayBtn = document.querySelector(".btn__display");
const filmButton = document.getElementById("filmtab");

// // Practice with tabs
// const openColour = function (colour) {
//     // Hide all tab content
//     tabContents.forEach((tab) => {
//         return (tab.style.display = "none");
//     });

//     // Remove active tab styling
//     tabLinks.forEach((tab) => {
//         return tab.classList.remove("active");
//     });

//     // Display tab content of colour
//     const colourContent = document.getElementById(colour);
//     colourContent.style.display = "block";
// };

// tabLinks.forEach((tab) => {
//     tab.addEventListener("click", function (event) {
//         const colour = tab.textContent.toLowerCase();
//         openColour(colour);

//         // console.log(event.currentTarget);
//         event.currentTarget.classList.add("active");
//     });
// });

filmButton.addEventListener("click", function () {
    console.log("film tab clicked");
    renderUI();
});
