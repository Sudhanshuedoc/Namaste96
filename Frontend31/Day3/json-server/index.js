console.log("hi from index.js");
let root = document.getElementById("root");
async function init() {
  let request = await fetch("http://localhost:3000/tasks");
  let res = await request.json();
  displayData(res);
}

init();

function displayData(arr) {
  arr.forEach((ele) => {
    let div = document.createElement("div");
    if (ele.isCompleted) {
      div.style.backgroundColor = "lightgreen";
      div.style.boxShadow = "10px 10px 10px lightgreen";
    } else {
      div.style.backgroundColor = "#ffb3c1";
      div.style.boxShadow = "10px 10px 10px #ffb3c1";
    }

    let h1 = document.createElement("h1");
    h1.textContent = ele.task;
    let update = document.createElement("button");
    let del = document.createElement("button");
    update.textContent = `Status : ${
      ele.isCompleted ? "Completed" : "Not Completed"
    }`;
    del.textContent = "Delete";
    del.addEventListener("click", async function () {
      let request = await fetch(`http://localhost:3000/tasks/${ele.id}`, {
        method: "DELETE",
      });
      let res = await request.json();
      console.log(res);
    });
    update.addEventListener("click", async () => {
      let request = await fetch(`http://localhost:3000/tasks/${ele.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: !ele.isCompleted }),
      });
      let res = await request.json();
      console.log(res);
    });
    div.append(h1, del, update);
    root.append(div);
  });
}
