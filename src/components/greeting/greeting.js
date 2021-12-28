import getTimeOfDay from '../../utils/getTimeOfDay';

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

  greetingElement.innerText = `Good ${getTimeOfDay()}`;
  inputUserName.value = localStorage.getItem('userName');

  setInputName(inputUserName);
};

const time = document.querySelector('.time');

const timeObserver = new MutationObserver(() => {
  showGreeting();
});

timeObserver.observe(time, { attributes: true });

export default showGreeting;
