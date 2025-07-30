//////////////////////////////////////////////////////
// Imports
import {} from "./films.js";
import { checkMap, removeMap } from "./restaurants.js";
import {} from "./activities.js";

//////////////////////////////////////////////////////
// Constants

//////////////////////////////////////////////////////
// DOM Elements

// Tabs
const tabBtns = document.querySelectorAll(".tab__btn");
const filmBtn = document.getElementById("filmTab");
const restaurantBtn = document.getElementById("restaurantTab");
const activityBtn = document.getElementById("activityTab");
const recipeBtn = document.getElementById("recipeTab");

// Content
const allContent = document.querySelectorAll(".content");
// const homepage = document.getElementById("home__content");
const filmPage = document.getElementById("film__content");
const restaurantPage = document.getElementById("restaurant__content");
const activityPage = document.getElementById("activity__content");

const posterSection = document.querySelector(".posters");
const restaurantSection = document.querySelector(".restaurants");

//////////////////////////////////////////////////////
// Event Listeners

filmBtn.addEventListener("click", function () {
    console.log("Film tab clicked");
    openTab.call(this);

    if (checkMap()) {
        removeMap();
    }

    // activate display for film page
    filmPage.style.display = "flex";
    posterSection.innerHTML = "";
    // activateFilmButtons();
});

restaurantBtn.addEventListener("click", function () {
    console.log("Restaurant tab clicked");
    openTab.call(this);

    restaurantPage.style.display = "flex";
    restaurantSection.innerHTML = "";
});

activityBtn.addEventListener("click", function () {
    console.log("Activity tab clicked");
    openTab.call(this);

    if (checkMap()) {
        removeMap();
    }

    activityPage.style.display = "flex";
});

//////////////////////////////////////////////////////
// Functions

function openTab() {
    tabBtns.forEach((tab) => {
        // hide displays for all contents
        allContent.forEach((content) => (content.style.display = "none"));

        // add class to style active tab
        tabBtns.forEach((btn) => btn.classList.remove("activeTab"));
        this.classList.add("activeTab");
    });
}
