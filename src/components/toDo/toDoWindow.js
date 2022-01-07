const toDoBtn = document.getElementById('todo-btn');
const toDoModalWindow = document.getElementById('todo-modal-container');
const settingsModalWindow = document.getElementById('settings-modal-container');
const overlay = document.querySelector('.modal-overlay');

toDoBtn.addEventListener('click', () => {
  toDoModalWindow.classList.toggle('hidden');

  if (!settingsModalWindow.classList.contains('hidden')) {
    settingsModalWindow.classList.add('hidden');
  }

  if (toDoModalWindow.classList.contains('hidden')) {
    overlay.classList.add('overlay-hidden');
  } else {
    overlay.classList.remove('overlay-hidden');
  }
});

overlay.addEventListener('click', () => {
  toDoModalWindow.classList.add('hidden');
  overlay.classList.add('overlay-hidden');
});
