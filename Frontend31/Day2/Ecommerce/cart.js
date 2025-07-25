let cart = JSON.parse(localStorage.getItem("cart"));
let collection = document.getElementById("collection");
let para = document.getElementById("para");
let logo = document.getElementById("logo");
logo.addEventListener("click", function () {
  location.href = "index.html";
});
let locateCart = document.querySelector("#cart-icon");
locateCart.style.color = "white";
locateCart.style.cursor = "pointer";
locateCart.addEventListener("click", function () {
  location.href = "cart.html";
});

function init() {
  para.textContent = "Loading..."; // Show before fetch
  setTimeout(() => {
    displayData(cart);
    para.remove(); // Clear after data loads
    console.log(cart);
  }, 500);
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
    btn.textContent = "remove";
    btn.className = "button-49";
    btn.addEventListener("click", function () {
      cart = cart.filter((item) => {
        return item.id != ele.id;
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      btn.parentNode.remove();
      counter.innerText = cart.length;
    });

    div.append(image, title, price, btn);
    collection.append(div);
  });
}
