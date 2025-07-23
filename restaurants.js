const access_token =
    "pk.eyJ1IjoiYm90aGVzbG90aCIsImEiOiJjbWRhdG0waGkwY3JiMmtzYmtrb2E0cDk5In0.eOoTxdbFyqX02dY6VYpIaw";

// Buttons
const restaurantDisplayBtn = document.getElementById("restaurant__display");
const restaurantMapBtn = document.getElementById("restaurant__map");
const restaurantRandomizeBtn = document.getElementById("restaurant__randomize");

// Sections
const topContent = document.getElementById("content");
const restaurantSection = document.querySelector(".restaurants");
let tableHeader;

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
        address: "8 Charlotte Street",
        postcode: "W1T2LS",
    },
    {
        name: "Dishoom",
        city: "London",
        type: "Meal",
        continentalCuisine: "Asian",
        countryCuisine: "Indian",
        address: "12 Upper St Martin's Lane",
        postcode: "WC2H9FB",
    },
    {
        name: "Angry Crab Shack",
        city: "London",
        type: "Meal",
        continentalCuisine: "Americas",
        countryCuisine: "USA",
        address: "19a Rupert Street",
        postcode: "W1D7PA",
    },
    {
        name: "Sweeney & Todd",
        city: "Reading",
        type: "Meal",
        continentalCuisine: "European",
        countryCuisine: "British",
        address: "10 Castle Street",
        postcode: "RG17RD",
    },
    {
        name: "Pink Berry",
        city: "London",
        type: "Dessert",
        continentalCuisine: "Americas",
        countryCuisine: "USA",
        address: "38 Upper Street",
        postcode: "N10PN",
    },
    {
        name: "Charm Thai",
        city: "Bath",
        type: "Meal",
        continentalCuisine: "Asian",
        countryCuisine: "Thai",
        address: "2 George Street",
        postcode: "BA12EH",
    },
    {
        name: "Yum Yum Thai",
        city: "Bath",
        type: "Meal",
        continentalCuisine: "Asian",
        countryCuisine: "Thai",
        address: "17 Kingsmead Square",
        postcode: "BA12AE",
    },
    {
        name: "The Scallop Shell",
        city: "Bath",
        type: "Meal",
        continentalCuisine: "European",
        countryCuisine: "British",
        address: "22 Monmouth Place",
        postcode: "BA12AY",
    },
];

/////////////////////////////////////////////////////
// Functions

// Map Functions
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
    L.marker([lat, lng]).addTo(map);
    // console.log(lat, lng);
}

function encodeAddress(restaurant) {
    const addressString = `${restaurant.address} ${restaurant.city} ${restaurant.postcode}`;
    return encodeURI(addressString);
}

// forward geocodes to get coordinates from address and creates marker
async function forwardGeocode(restaurant) {
    const locationString = encodeAddress(restaurant);

    const res = await fetch(
        `https://api.mapbox.com/search/geocode/v6/forward?q=${locationString}&access_token=${access_token}`
    );
    const data = await res.json();

    const lat = data.features[0].properties.coordinates.latitude;
    const lng = data.features[0].properties.coordinates.longitude;

    console.log(lat, lng);
    createMarker(lat, lng);
}

// function renderMarkers() {
//     restaurantList.forEach((restaurant) => {});
// }

// forwardGeocode(restaurantList[0]);
// createMarker([51.508, -0.09]);

// Display Restaurants Functions
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

    tableHeader.insertAdjacentHTML("afterend", html);
}

// Displays restaurants and their details in separate entries
function displayRestaurants() {
    // restaurantSection.style.display = "inline";
    const html = `<div class="table__header">
                        <div class="name__field">Name</div>
                        <div class="city__field">Location</div>
                        <div class="cuisine__field">Cuisine</div>
                    </div>`;
    restaurantSection.insertAdjacentHTML("afterbegin", html);
    tableHeader = document.querySelector(".table__header");

    restaurantList.forEach((restaurant) => {
        addRestaurantRow(
            restaurant.name,
            restaurant.city,
            restaurant.countryCuisine
        );
    });
}

// Removes the map html as there is error of reinitalising the map when the "Show on Map" button is pressed multiple times
function removeMap() {
    const contentChildren = topContent.children;
    const mapEl = contentChildren[contentChildren.length - 1];
    console.log(mapEl);
    mapEl.remove();
}

// Checks if map is rendered already or not. Error is thrown if map is rendered and trying to click another tab e.g. display restaurants
function checkMap() {
    const contentChildren = topContent.children;
    const lastChild = contentChildren[contentChildren.length - 1];
    if (lastChild.id === "map") {
        console.log("map is here!");
        return true;
    } else {
        console.log("map is NOT here!!");
        return false;
    }
}

restaurantDisplayBtn.addEventListener("click", function () {
    restaurantSection.innerHTML = "";

    if (checkMap()) {
        removeMap();
    }

    displayRestaurants();
});

restaurantMapBtn.addEventListener("click", function () {
    restaurantSection.innerHTML = "";
    renderMap();

    restaurantList.forEach((restaurant) => {
        forwardGeocode(restaurant);
    });
});
