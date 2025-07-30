// Buttons
const activityDisplayBtn = document.getElementById("activity__display");
const activityAddBtn = document.getElementById("activity__add");
const activityRandomizeBtn = document.getElementById("activity__randomize");

// Sections
const activitiesSection = document.querySelector(".activities");
let activityTable;

const activitesList = [
    { name: "Kayaking", type: "sport, day-out", season: "Summer" },
    {
        name: "Durdle Door Hike",
        type: "day-out",
        season: "Spring, Summer, Autumn",
    },
    { name: "Spa Day", type: "day-out", season: "Autumn, Winter" },
    {
        name: "Indoor Badminton",
        type: "sport",
        season: "Spring, Summer, Autumn, Winter",
    },
    { name: "Tennis", type: "sport", season: "Spring, Summer, Autumn, Winter" },
    {
        name: "The Foo",
        type: "games",
        season: "Spring, Summer, Autumn, Winter",
    },
    {
        name: "Bowling & Arcade (Reading)",
        type: "day-out",
        season: "Spring, Summer, Autumn, Winter",
    },
    {
        name: "Indoor Skiing",
        type: "sport, day-out",
        season: "Autumn, Winter",
    },
    {
        name: "Jigsaw couples competition",
        type: "day-out",
        season: "Spring, Summer",
    },
    {
        name: "Pottery",
        type: "day-out",
        season: "Spring, Summer, Autumn, Winter",
    },
    { name: "Foraging", type: "day-out", season: "Spring, Summer" },
    {
        name: "Midnight at Spitalfields Market",
        type: "day-out",
        season: "Summer, Autumn",
    },
    { name: "Fruit picking", type: "day-out", season: "Summer" },
    { name: "Theme park", type: "day-out", season: "Spring, Summer, Autumn" },
];

function renderTable() {
    const html = `<table class="activity__table" style="width: 100%">
    <tr>
    <th>Activity Name</th>
    <th>Type</th>
    <th>Season</th>
    </tr>
    </table>`;

    activitiesSection.insertAdjacentHTML("afterbegin", html);
    activityTable = document.querySelector(".activity__table");
}

function renderRows() {
    activitesList.forEach((activity) => {
        const queryString = activity.name.replaceAll(" ", "+").toLowerCase();
        const weblink = `https://www.google.com/search?q=${queryString}+near+me`;

        const rowHTML = `<tr>
    <td><a target="_blank" rel="noopener noreferrer" href=${weblink}>${activity.name}</a></td>
    <td>${activity.type}</td>
    <td>${activity.season}</td>
    </tr>`;

        activityTable.insertAdjacentHTML("beforeend", rowHTML);
    });
}

function renderForm() {
    const formHTML = `<form>
    <label style="padding:8px">Activity Name:</label><input type="text">
    </form>`;

    activitiesSection.insertAdjacentHTML("afterbegin", formHTML);
}

activityDisplayBtn.addEventListener("click", function () {
    console.log("Displaying activities");
    renderTable();
    renderRows();
});

activityAddBtn.addEventListener("click", function () {
    renderForm();
});
