// Buttons
const filmDisplayBtn = document.getElementById("film__display");
const filmBlitzBtn = document.getElementById("film__blitz");
const filmRandomizeBtn = document.getElementById("film__randomize");

// Sections
const posterSection = document.querySelector(".posters");

const filmList = [
    { title: "The Godfather", year: 1972, status: "not watched" },
    { title: "12 Angry Men", year: 1957, status: "not watched" },
    { title: "Attack on Titan", year: 2015, status: "not watched" },
    { title: "10 Cloverfield Lane", year: 2016, status: "not watched" },
    { title: "Memento", year: 2000, status: "not watched" },
    { title: "Shutter Island", year: 2010, status: "not watched" },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        status: "not watched",
    },
    {
        title: "Sweeney Todd: The Demon Barber of Fleet Street",
        year: 2007,
        status: "not watched",
    },
    { title: "A Star is Born", year: 2018, status: "not watched" },
    { title: "Your Name.", year: 2016, status: "not watched" },
    { title: "The Witches of Eastwick", year: 1987, status: "not watched" },
];

//////////////////////////////////////////////////////
// Functions

// fetches movie posters from OMDb API using film titles from film list
function getAllPosters() {
    filmList.forEach((film) => {
        getPoster(film);
    });
}

// // getPoster function WITHOUT using async await
// function getPoster(film) {
//     const Poster = document.createElement("img");
//     Poster.classList.add("moviePoster");

//     const filmStr = encodeURIComponent(film.title)
//         .toLowerCase()
//         .replace(" ", "+");
//     const filmReleaseDate = film.year;

//     fetch(
//         `http://www.omdbapi.com/?t=${filmStr}&y=${filmReleaseDate}&apikey=6f14816c`
//     )
//         .then((res) => res.json())
//         .then((data) => {
//             Poster.src = data.Poster;

//             posterSection.appendChild(Poster);
//         });
// }

async function getPoster(film) {
    const Poster = document.createElement("img");
    Poster.classList.add("moviePoster");

    const filmStr = encodeURIComponent(film.title)
        .toLowerCase()
        .replace(" ", "+");
    const filmReleaseDate = film.year;

    const res = await fetch(
        `http://www.omdbapi.com/?t=${filmStr}&y=${filmReleaseDate}&apikey=6f14816c`
    );
    const data = await res.json();
    Poster.src = data.Poster;

    posterSection.appendChild(Poster);
}

// generates random integer which relates to an index in the film list
function randomize() {
    const randFilmNum = Math.floor(Math.random() * filmList.length);
    const randomText = document.createElement("div");
    posterSection.appendChild(randomText);
    randomText.style.fontSize = "30px";
    randomText.style.color = "chartreuse";
    randomText.textContent = "The movie we're watching is...";

    setTimeout(() => {
        getPoster(filmList[randFilmNum]);
    }, 2000);
}

// generates to random movie posters for the user to choose from
function blitz() {
    const randNum = Math.floor(Math.random() * 7 + 3);
    console.log(randNum);

    getAllPosters();
    const displayedFilms = document.querySelectorAll(".moviePoster");
    console.log(displayedFilms);
}

filmDisplayBtn.addEventListener("click", function () {
    posterSection.innerHTML = "";
    console.log("display button clicked");
    getAllPosters();
});

filmRandomizeBtn.addEventListener("click", function () {
    posterSection.innerHTML = "";
    randomize();
});

filmBlitzBtn.addEventListener("click", function () {
    blitz();
});
