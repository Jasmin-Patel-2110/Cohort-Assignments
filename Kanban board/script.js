const addClassBtn = document.querySelector(".add-class-btn");
const todoBoardItems = document.querySelector("#todo-board > .task-list");
let taskList = document.querySelectorAll(".board-item");
const dropBoardList = document.querySelectorAll(".task-list");

let draggedElement = null;
let dropBoard = null;

// add task button
addClassBtn.addEventListener("click", (e) => {
  const taskText = prompt("Enter the task.");

  if (!taskText) return;

  todoBoardItems.append(createTaskElement(taskText));
});

// create task element function
function createTaskElement(taskText) {
  const task = document.createElement("p");
  task.className = "board-item";
  task.setAttribute("draggable", "true");
  task.innerHTML = `<span class="task-text">${taskText}</span>
            <span class="edit-task fa-solid fa-pen-to-square"> </span>
            <span class="delete-task fa-solid fa-trash"> </span>`;

  addDragEvents(task);
  addEditEvent(task.children[1]);
  addDeleteEvent(task.children[2]);

  return task;
}

// applying drag events to every task.
taskList.forEach((val, key) => {
  addDragEvents(val);
});

// applying drop events to every board.
dropBoardList.forEach((val, key) => {
  addDropEvent(val);
});

// Adds a dragstart and dragend event listeners to tasks to select and append a task to the selected drop board.
function addDragEvents(element) {
  element.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    draggedElement.classList.add("dragging");
    draggedElement.style.cursor = "grabbing";
  });

  element.addEventListener("dragend", (e) => {
    try {
      draggedElement.classList.remove("dragging");
      draggedElement.style.cursor = "grab";
      dropBoard.appendChild(draggedElement);
    } catch (e) {
    } finally {
      draggedElement = null;
      dropBoard = null;
    }
  });
}

// Adds a dragover event listener to select the drop board
function addDropEvent(board) {
  board.addEventListener("dragover", (e) => {
    if (e.target.classList.contains("task-list")) {
      dropBoard = e.target;
    }
  });
}

// edit task
const editTaskBtn = document.querySelectorAll(".edit-task");
editTaskBtn.forEach(addEditEvent);

// delete task
const deleteTaskBtnList = document.querySelectorAll(".delete-task");
deleteTaskBtnList.forEach(addDeleteEvent);

// Adds a click event listener to a button to delete task.
function addDeleteEvent(btn) {
  btn.addEventListener("click", function (e) {
    this.parentElement.remove();
  });
}

// Adds a click event listener to a button to edit task.
function addEditEvent(btn) {
  btn.addEventListener("click", function (e) {
    const taskText = prompt("Enter the task.");

    if (!taskText) return;

    this.parentElement.children[0].innerHTML = taskText;
  });
}
