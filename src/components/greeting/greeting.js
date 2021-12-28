const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours >= 6 && hours < 12) {
    timeOfDay = `Good morning`;
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = `Good afternoon`;
  } else if (hours >= 18 && hours < 24) {
    timeOfDay = `Good evening`;
  } else {
    timeOfDay = `Good night`;
  }
  return timeOfDay;
};

const setUserNameToLocalStorage = (name) => {
  localStorage.setItem('userName', name);
};

const setInputName = (inputElement) => {
  inputElement.addEventListener('blur', () => {
    setUserNameToLocalStorage(inputElement.value);
  });
};

const showGreeting = () => {
  const greetingElement = document.querySelector('.greeting');
  const inputUserName = document.querySelector('.name');

  greetingElement.innerText = getTimeOfDay();
  inputUserName.value = localStorage.getItem('userName');

  setInputName(inputUserName);
};

const time = document.querySelector('.time');

const timeObserver = new MutationObserver(() => {
  showGreeting();
});

timeObserver.observe(time, { attributes: true });

export default showGreeting;
