
document.addEventListener("DOMContentLoaded", () => {
//your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskDescription = document.getElementById("new-task-description").value;
    const taskList = document.getElementById("tasks");
    
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
    taskList.appendChild(newTask);
    
    document.getElementById("new-task-description").value = "";
  });
});