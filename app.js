function addTask() {
    const taskInput = document.getElementById('task-input');
    const tasksContainer = document.getElementById('tasks-container');

    if (taskInput.value.trim() !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        tasksContainer.appendChild(taskDiv);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskDiv = button.parentElement;
    taskDiv.remove();
}
