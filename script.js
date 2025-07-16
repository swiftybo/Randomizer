//////////////////////////////////////////////////////
// Imports
import { renderUI as renderFilmUI } from "./films.js";

//////////////////////////////////////////////////////
// Constants
let activeTab;

//////////////////////////////////////////////////////
// DOM Elements

// Buttons
const tabBtns = document.querySelectorAll(".tab__btn");
const filmBtn = document.getElementById("filmTab");
const restaurantBtn = document.getElementById("restaurantTab");
const activityBtn = document.getElementById("activityTab");
const recipeBtn = document.getElementById("recipeTab");

// Content
const topContent = document.getElementById("content");
const allContent = document.querySelectorAll(".content");
const homepage = document.getElementById("home__content");
const filmpage = document.getElementById("film__content");

//////////////////////////////////////////////////////
// Event Listeners

filmBtn.addEventListener("click", function () {
    console.log("Film tab clicked");
    openTab.call(this);

    // activate display for film page
    filmpage.classList.add("activeContent");
});

function openTab() {
    tabBtns.forEach((tab) => {
        // hide displays for all contents i.e. remove active class from all contents
        allContent.forEach((content) =>
            content.classList.remove("activeContent")
        );

        // apply styling for active tab
        tabBtns.forEach((btn) => btn.classList.remove("activeTab"));
        this.classList.add("activeTab");
    });
}

//////////////////////////////////////////////////////
// PRACTICE

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
