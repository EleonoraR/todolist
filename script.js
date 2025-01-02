function addTask() {
    const taskInput = document.getElementById('taskInput');
    const warningMessage = document.getElementById('warningMessage');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      warningMessage.style.display = 'block';
      return;
    } else {
      warningMessage.style.display = 'none';
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
  }

  function toggleComplete(task) {
    task.parentElement.classList.toggle('completed');
  }

  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  }