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
];

export function displayFilms() {
    getPosters();
}

function getPosters() {
    filmList.forEach((film) => {
        const Poster = document.createElement("img");
        Poster.classList.add("moviePoster");

        const filmStr = encodeURIComponent(film.title)
            .toLowerCase()
            .replace(" ", "+");
        const filmReleaseDate = film.year;

        fetch(
            `http://www.omdbapi.com/?t=${filmStr}&y=${filmReleaseDate}&apikey=6f14816c`
        )
            .then((res) => res.json())
            .then((data) => {
                Poster.src = data.Poster;

                posterSection.appendChild(Poster);
            });
    });
}

function randomize() {
    const filmCount = filmList.length;
    const randFilmNum = Math.floor(Math.random() * 10);
}

randomize();
