console.log("Hello");
let input = document.getElementById("debounce");
  let timerid;
input.addEventListener("input", function () {


  if (timerid) {
    clearTimeout(timerid);
  }
  timerid = setTimeout(() => {
    console.log("Api call made", Date.now());
  }, 1000);
});
