import { getJsonSettings, setLanguage, setSourceImages, setTag } from './settings';
import { setBgByApi, setBgByGitHub } from '../backgroundSlider/backgroundSlider';
import getRandomNum from '../../utils/getRandomNum';
import showGreeting from '../greeting/greeting';
import handleWeather from '../weatherWidget/weatherWidget';
import showQuote from '../quoteWidget/quoteWidget';

const settingsButton = document.getElementById('settings');
const settingsModalWindow = document.getElementById('settings-modal-container');
const settingsInputsLang = document.querySelectorAll('.language input');
const settingsInputsImage = document.querySelectorAll('.source-images input');
const tagInput = document.querySelector('.search-input');

const randomNum = getRandomNum(1, 20);

settingsButton.addEventListener('click', () => {
  settingsModalWindow.classList.toggle('hidden');
});

const settings = getJsonSettings();

if (settings.sourceImage === 'flickr') {
  tagInput.classList.remove('hidden');
}

const setDefaultSettings = (elem) => {
  const input = elem;
  const setting = getJsonSettings();
  if (input.value === setting.lang || input.value === setting.sourceImage) {
    input.checked = true;
  }
};

settingsInputsLang.forEach((elem) => {
  setDefaultSettings(elem);
  elem.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    showGreeting();
    handleWeather();
    showQuote();
  });
});

settingsInputsImage.forEach((elem) => {
  setDefaultSettings(elem);
  elem.addEventListener('change', (event) => {
    setSourceImages(event.target.value);
    const setting = getJsonSettings();
    if (setting.sourceImage === 'github') {
      setBgByGitHub(randomNum);
    } else {
      setBgByApi();
    }
    if (event.target.value === 'flickr') {
      tagInput.classList.remove('hidden');
    } else {
      tagInput.classList.add('hidden');
    }
  });
});

tagInput.addEventListener('blur', (event) => {
  setTag(event.target.value);
});
