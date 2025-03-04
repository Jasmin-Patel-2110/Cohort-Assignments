let taskTemplate = `<p draggable="true" class="board-item"></p>`;
const addClassBtn = document.querySelector(".add-class-btn");
const todoBoardItems = document.querySelector("#todo-board > .board-items");
let taskList = document.querySelectorAll(".board-item");
const dropBoardList = document.querySelectorAll(".board-items");

let draggedElement = null;
let dropBoard = null;

// console.log(typeof taskList[0]);
// console.log(dropBoardList);

addClassBtn.addEventListener("click", (e) => {
  // <p draggable="true" class="board-item"></p>

  console.log(e);

  const taskString = prompt("Enter the task.");

  if (!taskString) return;

  const task = document.createElement("p");
  task.className = "board-item";
  task.setAttribute("draggable", "true");
  task.innerHTML = taskString;

  todoBoardItems.append(task);

  // taskList = document.querySelectorAll(".board-item");
  // console.log(taskList);
});

taskList.forEach((val, key) => {
  val.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    // console.log(draggedElement);
  });
  val.addEventListener("dragend", (e) => {
    dropBoard.appendChild(draggedElement);
    draggedElement = null;
  });
  // val.addEventListener("dragover", (e) => {
  //   e.preventDefault();
  // });
});

dropBoardList.forEach((val, key) => {
  val.addEventListener("dragover", (e) => {
    if (e.target.className === "board-items") {
      dropBoard = e.target;
    }
    // console.log(e);
    // console.log(dropBoard);
  });
});
