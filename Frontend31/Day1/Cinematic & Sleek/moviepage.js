let imdbId = JSON.parse(localStorage.getItem("id"));
let apiKey = "ecc57d86";
let display = document.getElementById("display");

let movieArr = [];
fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`)
  .then((res) => res.json())
  .then((data) => {
    movieArr = data;
    console.log(movieArr);
    displayData(movieArr);
  });

function displayData(arr) {
  display.innerHTML = "";
  if (!arr) {
    displayText.innerText = "MOVIE NOT FOUND";
  } else {
    let div = document.createElement("div");
    let poster = document.createElement("img");
    poster.src = arr.Poster;
    let title = document.createElement("h1");
    title.innerText = `Title:  ${arr.Title}`;
    let year = document.createElement("h2");
    let goback = document.createElement("a");
    goback.textContent = "Main page";
    goback.href = "index.html";
    let actors = document.createElement("h2");
    let imdbRating = document.createElement("h2");
    let released = document.createElement("h2");
    let imdbVotes = document.createElement("h2");
    imdbVotes.innerText = "IMDB Votes: " + arr.imdbVotes;
    released.innerText = "Released Year: " + arr.Released;
    imdbRating.innerText = "IMDB Rating: " + arr.imdbRating;
    let collection = document.createElement("h3");
    collection.innerText = `Box Office : ${arr.BoxOffice}`;

    actors.innerText = `Actors: ${arr.Actors}`;
    year.innerText = "Year: " + arr.Year;
    div.append(
      poster,
      title,
      actors,
      collection,
      imdbRating,
      imdbVotes,
      released,
      year,
      goback
    );
    display.append(div);
  }
}
