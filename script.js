function addTask() {
    var taskInput = document.querySelector('.taskName');
    var taskContainer = document.getElementById('taskContainer');
    if (taskInput.value.trim() !== "") {
        var newTask_1 = document.createElement('div');
        newTask_1.classList.add('checkBox', 'flex', 'justify-between', 'items-center', 'p-2.5', 'bg-white/20', 'rounded-md', 'mb-2', 'break-words');
        newTask_1.innerHTML = "\n  <div class=\"left-side flex items-center\">\n    <input type=\"checkbox\" onchange=\"updateTaskCount()\">\n    <span class=\"ml-2 max-w-[200px] break-words text-white\">".concat(taskInput.value, "</span>\n  </div>\n");
        var removeButton = document.createElement('button');
        removeButton.classList.add('bg-red-500', 'text-white', 'border-none', 'rounded-md', 'px-2', 'py-1', 'cursor-pointer', 'transition', 'ease-in-out', 'duration-300', 'hover:bg-red-700');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            newTask_1.remove();
            updateTaskCount();
        });
        newTask_1.appendChild(removeButton);
        taskContainer.appendChild(newTask_1);
        taskInput.value = "";
        updateTaskCount();
    }
}
function updateTaskCount() {
    var tasks = document.querySelectorAll('.checkBox input[type="checkbox"]');
    var completedCount = 0;
    var uncompletedCount = 0;
    tasks.forEach(function (task) {
        if (task.checked) {
            completedCount++;
        }
        else {
            uncompletedCount++;
        }
    });
    document.getElementById('completedCount').innerText = completedCount;
    document.getElementById('uncompletedCount').innerText = uncompletedCount;
}
updateTaskCount();
