import { getJsonSettings, setLanguage } from './settings';
import showGreeting from '../greeting/greeting';
import handleWeather from '../weatherWidget/weatherWidget';
import showQuote from '../quoteWidget/quoteWidget';

const settingsButton = document.getElementById('settings');
const settingsModalWindow = document.getElementById('settings-modal-container');
const settingsInputs = document.querySelectorAll('.language input');

settingsButton.addEventListener('click', () => {
  settingsModalWindow.classList.toggle('hidden');
});

const setDefaultSettings = (elem) => {
  const input = elem;
  const settings = getJsonSettings();
  if (input.value === settings.lang) {
    input.checked = true;
  }
};

settingsInputs.forEach((elem) => {
  setDefaultSettings(elem);
  elem.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    showGreeting();
    handleWeather();
    showQuote();
  });
});
