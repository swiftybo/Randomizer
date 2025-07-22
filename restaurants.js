const access_token =
    "pk.eyJ1IjoiYm90aGVzbG90aCIsImEiOiJjbWRhdG0waGkwY3JiMmtzYmtrb2E0cDk5In0.eOoTxdbFyqX02dY6VYpIaw";

// Buttons
const restaurantDisplayBtn = document.getElementById("restaurant__display");
const restaurantMapBtn = document.getElementById("restaurant__map");
const restaurantRandomizeBtn = document.getElementById("restaurant__randomize");

// Sections
const topContent = document.getElementById("content");
const restaurantSection = document.querySelector(".restaurants");

// Constants
let map;

const restaurantList = [
    {
        name: "The Bap",
        city: "Reading",
        type: "Meal",
        continentalCuisine: "Asian",
        countryCuisine: "Korean",
        address: "23 Market Place",
        postcode: "RG1 2DE",
    },
    {
        name: "Norma",
        city: "London",
        type: "Meal",
        continentalCuisine: "European",
        countryCuisine: "Italian",
    },
    {
        name: "Dishoom",
        city: "London",
        type: "Meal",
        continentalCuisine: "Asian",
        countryCuisine: "Indian",
    },
    {
        name: "Angry Crab",
        city: "London",
        type: "Meal",
        continentalCuisine: "Americas",
        countryCuisine: "USA",
    },
    {
        name: "Sweeney & Todd",
        city: "Reading",
        type: "Meal",
        continentalCuisine: "European",
        countryCuisine: "British",
    },
    {
        name: "Pink Berry",
        city: "London",
        type: "Dessert",
        continentalCuisine: "Americas",
        countryCuisine: "USA",
    },
    {
        name: "Charm Thai",
        city: "Bath",
        type: "Meal",
        continentalCuisine: "Asian",
        countryCuisine: "Thai",
    },
    {
        name: "Yum Yum Thai",
        city: "Bath",
        type: "Meal",
        continentalCuisine: "Asian",
        countryCuisine: "Thai",
    },
    {
        name: "The Scallop Shell",
        city: "Bath",
        type: "Meal",
        continentalCuisine: "European",
        countryCuisine: "British",
    },
    {
        name: "Pink Berry",
        city: "London",
        type: "Dessert",
        continentalCuisine: "Americas",
        countryCuisine: "USA",
    },
];

/////////////////////////////////////////////////////
// Functions

function renderMap() {
    console.log("creating map now");

    const html = `<div id="map"></div>`;
    topContent.insertAdjacentHTML("beforeend", html);

    map = L.map("map").setView([51.505, -0.09], 8);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
}

function createMarker(lat, lng) {
    const restaurantMarker = L.marker([lat, lng]).addTo(map);
}

function encodeAddress(restaurant) {
    const addressString = `${restaurant.address} ${restaurant.city} ${restaurant.postcode}`;
    const encodedAddress = encodeURI(addressString);

    console.log(addressString);
    console.log(encodedAddress);
}

encodeAddress(restaurantList[0]);

function addRestaurantRow(
    restaurant_name,
    restaurant_location,
    restaurant_cuisine
) {
    const html = `<div class="table__row">
                        <div class="name__field">${restaurant_name}</div>
                        <div class="city__field">${restaurant_location}</div>
                        <div class="cuisine__field">${restaurant_cuisine}</div>
                    </div>`;

    restaurantSection.insertAdjacentHTML("beforeend", html);
}

function displayRestaurants() {
    restaurantSection.style.display = "inline";

    restaurantList.forEach((restaurant) => {
        addRestaurantRow(
            restaurant.name,
            restaurant.city,
            restaurant.countryCuisine
        );
    });
}

function removeMap() {
    const contentChildren = topContent.children;
    const mapEl = contentChildren[contentChildren.length - 1];
    mapEl.remove();
}

restaurantDisplayBtn.addEventListener("click", function () {
    restaurantSection.innerHTML = "";
    displayRestaurants();
});

restaurantMapBtn.addEventListener("click", function () {
    restaurantSection.innerHTML = "";
    renderMap();
    createMarker(51.45607, -0.96966);

    setTimeout(() => {
        removeMap();
    }, 3000);
});
