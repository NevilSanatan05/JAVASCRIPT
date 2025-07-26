const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
  taskList.innerHTML = "";
  tasks.forEach((task,index) =>{
    const li = document.createElement("li");
    li.textContent = task.text;
    if(task.completed) li.classList.add("completed");
    li.addEventListener("click",() => toggleTask(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle
      deleteTask(index);
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask(){
  const text = taskInput.value.trim();
  if(text === "") return ;
  tasks.push({text,completed:false});
  taskInput.value = "";
  saveAndRender();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

function deleteTask(index){
tasks.splice(index,1);
saveAndRender();
}

function saveAndRender(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
  renderTasks();
}

addTaskBtn.addEventListener("click",addTask);

taskInput.addEventListener("keyup",(e)=>{
 if(e.key==="Enter") addTask();
});
renderTasks();