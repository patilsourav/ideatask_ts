
function addTask() {
const taskInput = document.querySelector('.taskName');
const taskContainer = document.getElementById('taskContainer');

if (taskInput.value.trim() !== "") {
const newTask = document.createElement('div');
newTask.classList.add('checkBox', 'flex', 'justify-between', 'items-center', 'p-2.5', 'bg-white/20', 'rounded-md', 'mb-2', 'break-words');

newTask.innerHTML = `
  <div class="left-side flex items-center">
    <input type="checkbox" onchange="updateTaskCount()">
    <span class="ml-2 max-w-[200px] break-words text-white">${taskInput.value}</span>
  </div>
`;

const removeButton = document.createElement('button');
removeButton.classList.add('bg-red-500', 'text-white', 'border-none', 'rounded-md', 'px-2', 'py-1', 'cursor-pointer', 'transition', 'ease-in-out', 'duration-300', 'hover:bg-red-700');
removeButton.textContent = 'Remove';

removeButton.addEventListener('click', function() {
  newTask.remove();
  updateTaskCount();
});

newTask.appendChild(removeButton);
taskContainer.appendChild(newTask);


taskInput.value = "";
updateTaskCount();
}
}

function updateTaskCount() {
const tasks = document.querySelectorAll('.checkBox input[type="checkbox"]');
let completedCount = 0;
let uncompletedCount = 0;

tasks.forEach(task => {
if (task.checked) {
  completedCount++;
} else {
  uncompletedCount++;
}
});

document.getElementById('completedCount').innerText = completedCount;
document.getElementById('uncompletedCount').innerText = uncompletedCount;
}

updateTaskCount();