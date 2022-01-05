const toDoBtn = document.getElementById('todo-btn');
const toDoModalWindow = document.getElementById('todo-modal-container');

toDoBtn.addEventListener('click', () => {
  toDoModalWindow.classList.toggle('hidden');
});
