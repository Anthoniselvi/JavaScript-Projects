// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var taskItem = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);

    taskItem.appendChild(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// Function to toggle the status of a task
function toggleTask() {
  var taskItem = this.parentNode;
  taskItem.classList.toggle("completed");
}

// Event listener for the add button
var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTask);

// Event listener for the Enter key
var taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});
