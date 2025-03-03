let taskTemplate = `<p draggable="true" class="board-item"></p>`;
const addClassBtn = document.querySelector(".add-class-btn");
const todoBoardItems = document.querySelector("#todo-board > .board-items");

addClassBtn.addEventListener("click", () => {
  // <p draggable="true" class="board-item"></p>

  const taskString = prompt("Enter the task.");

  if (!taskString) return;

  const task = document.createElement("p");
  task.className = "board-item";
  task.setAttribute("draggable", "true");
  task.innerHTML = taskString;

  todoBoardItems.append(task);
});
