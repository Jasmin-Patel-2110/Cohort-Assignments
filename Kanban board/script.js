let taskTemplate = `<p draggable="true" class="board-item"></p>`;
const addClassBtn = document.querySelector(".add-class-btn");
const todoBoardItems = document.querySelector("#todo-board > .board-items");
let taskList = document.querySelectorAll(".board-item");
const dropBoardList = document.querySelectorAll(".board-items");

let draggedElement = null;
let dropBoard = null;

addClassBtn.addEventListener("click", (e) => {
  // <p draggable="true" class="board-item"></p>
  const innerText = prompt("Enter the task.");

  if (!innerText) return;

  todoBoardItems.append(createTaskElement(innerText));
});

taskList.forEach((val, key) => {
  addDragEvents(val);
});

dropBoardList.forEach((val, key) => {
  val.addEventListener("dragover", (e) => {
    if (e.target.className === "board-items") {
      dropBoard = e.target;
    }
  });
});

function createTaskElement(innerText) {
  const task = document.createElement("p");
  task.className = "board-item";
  task.setAttribute("draggable", "true");
  task.innerHTML = innerText;

  addDragEvents(task);

  return task;
}

function addDragEvents(element) {
  element.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    draggedElement.classList.add("dragging");
  });

  element.addEventListener("dragend", (e) => {
    dropBoard.appendChild(draggedElement);
    draggedElement.classList.remove("dragging");
    draggedElement = null;
  });
}
