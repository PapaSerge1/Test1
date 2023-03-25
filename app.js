document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });

    const taskList = document.getElementById('task-list');
    taskList.appendChild(listItem);

    taskInput.value = '';
});
