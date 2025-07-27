let root = document.getElementById("root");
let input = document.createElement("input");
input.type = "text";
let btn = document.createElement("button");
btn.textContent = "ADD TASK";
input.placeholder = "Enter the Task";
root.append(input, btn);

btn.addEventListener("click", async function () {
  try {
    let request = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: input.value, isCompleted: false }),
    });
    let res = await request.json();
    console.log(res);
    location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
});
