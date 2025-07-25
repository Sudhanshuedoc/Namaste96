console.log("hello world");
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : null;
if (cart == null) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}

let collection = document.getElementById("collection");
let para = document.getElementById("para");
let counter = document.querySelector("#counter");
console.log(cart.length);
counter.innerHTML = cart.length;
let locateCart = document.querySelector("#cart-icon");
locateCart.style.color = "white";
locateCart.style.cursor = "pointer";
locateCart.addEventListener("click", function () {
  location.href = "cart.html";
});
let logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  location.href = "index.html";
});

function init() {
  try {
    para.textContent = "Loading..."; // Show before fetch
    setTimeout(async () => {
      let request = await fetch("https://fakestoreapi.com/products");
      let data = await request.json();
      displayData(data);
      para.remove(); // Clear after data loads
      console.log(data);
    }, 500);
  } catch (error) {
    para.textContent = "Something went wrong.";
    console.log(error);
  }
}

init();

function displayData(arr) {
  console.log("hello again");
  console.log(arr);

  arr.forEach((ele) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.image;

    let title = document.createElement("h2");
    title.textContent = ele.title;

    let price = document.createElement("h2");
    price.textContent = "$" + ele.price;

    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.className = "button-49";
    btn.addEventListener("click", function () {
      cart.push(ele);
      localStorage.setItem("cart", JSON.stringify(cart));
      counter.innerText = cart.length;
    });

    div.append(image, title, price, btn);
    collection.append(div);
  });
}
