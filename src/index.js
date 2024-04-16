// Get the form and the list of tasks
const createTaskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

// Add an event listener to the form's submit button
createTaskForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the task description and due date values from the input fields
  const taskDescriptionInput = document.getElementById("new-task-description");
  const taskDescription = taskDescriptionInput.value;

  const taskDueDateInput = document.getElementById("new-task-due-date");
  const taskDueDate = taskDueDateInput.value;

  // Create a new list item element with the task description and due date as its text content
  const newTask = document.createElement("li");
  newTask.textContent = taskDescription + " (Due: " + taskDueDate + ")";

  // Create a delete button for the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    // Remove the corresponding list item element from the list of tasks
    newTask.remove();
  });

  // Append the delete button to the new task
  newTask.appendChild(deleteButton);

  // Append the new task to the list of tasks
  taskList.appendChild(newTask);

  // Reset the input field values to empty strings
  taskDescriptionInput.value = "";
  taskDueDateInput.value = "";
});