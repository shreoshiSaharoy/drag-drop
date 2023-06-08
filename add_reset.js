const form = document.getElementById("myform");
const input = document.getElementById("add");
const leftList = document.getElementById("left-list");
const rightList = document.getElementById("right-list");

//function for adding new items to the left list
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  leftList.appendChild(newTask);

  input.value = "";
});

//funtion to reset both the lists to initial state
form.addEventListener("reset", (e) => {
    leftList.innerHTML = "";
    rightList.innerHTML = "";
});