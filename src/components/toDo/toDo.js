const addTaskBtn = document.querySelector('.add-task');
const tasksList = document.querySelector('.todo-list');
const inputTask = document.getElementById('input-task');
const deleteAllBtn = document.querySelector('.deleteAll-tasks');

const clearLocalStorage = (index) => {
  const data = localStorage.getItem('tasks');
  let result = JSON.parse(data);
  result.splice(index, 1);
  result = JSON.stringify(result);
  localStorage.setItem('tasks', result);
};

const deleteAllTasks = () => {
  const tasks = document.querySelectorAll('.todo-list li');
  tasks.forEach((elem) => elem.remove());
  localStorage.removeItem('tasks');
};

const deleteTask = (element) => {
  element.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.todo-list li');
    const arr = Array.from(tasks);
    const index = arr.indexOf(element.parentElement);
    clearLocalStorage(index);
    element.parentElement.remove();
  });
};

const setTaskToList = (value) => {
  const task = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  deleteBtn.classList.add('delete-task');
  span.innerText = value;
  task.append(checkbox);
  task.append(span);
  task.append(deleteBtn);
  tasksList.append(task);
  deleteTask(deleteBtn);
};

const showToDoList = () => {
  const data = localStorage.getItem('tasks');
  let result;

  if (data) {
    result = JSON.parse(data);
    result.forEach((elem) => {
      setTaskToList(elem);
    });
  }
};

showToDoList();

const setTaskToLocalStorage = (task) => {
  const data = localStorage.getItem('tasks');
  let result = [];
  if (data) {
    result = JSON.parse(data);
    result.push(task);
    result = JSON.stringify(result);
  } else {
    result.push(task);
    result = JSON.stringify(result);
  }
  localStorage.setItem('tasks', result);
};

inputTask.addEventListener('blur', (event) => {
  setTaskToList(event.target.value);
  setTaskToLocalStorage(event.target.value);
  inputTask.classList.add('hidden');
});

addTaskBtn.addEventListener('click', () => {
  inputTask.classList.remove('hidden');
});

deleteAllBtn.addEventListener('click', () => {
  deleteAllTasks();
});
