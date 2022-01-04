import getTimeOfDay from '../../utils/getTimeOfDay';
import { getJsonSettings } from '../settings/settings';

const getGreetingText = () => {
  const settings = getJsonSettings();
  const timeOfDay = getTimeOfDay();

  let result;

  if (settings.lang === 'en') {
    result = `Good ${timeOfDay}`;
  } else if (timeOfDay === 'morning') {
    result = 'Доброе утро';
  } else if (timeOfDay === 'afternoon') {
    result = 'Добрый день';
  } else if (timeOfDay === 'evening') {
    result = 'Добрый вечер';
  } else {
    result = 'Доброй ночи';
  }

  return result;
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
  const settings = getJsonSettings();

  greetingElement.innerText = getGreetingText();
  inputUserName.placeholder = settings.lang === 'en' ? '[Enter name]' : '[Введите имя]';
  inputUserName.value = localStorage.getItem('userName');

  setInputName(inputUserName);
};

const time = document.querySelector('.time');

const timeObserver = new MutationObserver(() => {
  showGreeting();
});

timeObserver.observe(time, { attributes: true });

export default showGreeting;
