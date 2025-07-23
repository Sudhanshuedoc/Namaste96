console.log("Hello world");
let display = document.getElementById("display");
let search = document.getElementById("searchbtn");
let apiKey = "ecc57d86";
let displayText = document.getElementById("displayText");
let movieArr = [];

search.addEventListener("click", function (e) {
  let searchTerm = document.getElementById("searchTerm").value;
  e.preventDefault();
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      movieArr = data.Search;
      displayData(movieArr);
    });
});

function displayData(arr) {
  display.innerHTML = "";
  if (!arr || arr.length == 0) {
    displayText.innerText = "MOVIE NOT FOUND";
  } else {
    arr.forEach((ele) => {
      displayText.innerText = `${arr.length} movies found`;
      let div = document.createElement("div");
      let poster = document.createElement("img");
      poster.src = ele.Poster;
      let title = document.createElement("h1");
      title.innerText = ele.Title;
      let year = document.createElement("h2");
      year.innerText = ele.Year;
      div.append(poster, title, year);
      display.append(div);
    });
  }
}
