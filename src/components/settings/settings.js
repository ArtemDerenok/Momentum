let settings = {
  lang: 'en',
  sourceImage: 'github',
  searchTag: 'nature',
};

const toJSON = () => {
  return JSON.stringify(settings);
};

export const getJsonSettings = () => {
  const json = localStorage.getItem('settings');
  const result = JSON.parse(json);
  return result;
};

const setLocalStorage = (json) => {
  localStorage.setItem('settings', json);
};

if (!localStorage.getItem('settings')) {
  setLocalStorage(toJSON());
} else {
  settings = getJsonSettings();
}

export const setLanguage = (lang) => {
  settings.lang = lang;
  setLocalStorage(toJSON());
};

export const setSourceImages = (source) => {
  settings.sourceImage = source;
  setLocalStorage(toJSON());
};

export const setTag = (tag) => {
  settings.searchTag = tag;
  setLocalStorage(toJSON());
};

export const translateSettings = () => {
  const setting = getJsonSettings();
  const headingLanguage = document.querySelector('.language p');
  const englishLabel = document.getElementById('english-label');
  const russianLabel = document.getElementById('russian-label');
  const headingToDo = document.querySelector('.todo p');
  const headingSource = document.querySelector('.source-images p');
  const searchInput = document.querySelector('.search-input');

  if (setting.lang === 'ru') {
    headingLanguage.innerText = 'Язык:';
    englishLabel.innerText = 'Английский';
    russianLabel.innerText = 'Русский';
    headingToDo.innerText = 'Мои задачи:';
    headingSource.innerText = 'Источник изображений:';
    searchInput.placeholder = 'Тeг для поиска';
  } else {
    headingLanguage.innerText = 'Language:';
    englishLabel.innerText = 'English';
    russianLabel.innerText = 'Russian';
    headingToDo.innerText = 'My tasks';
    headingSource.innerText = 'Source images:';
    searchInput.placeholder = 'Tag for search';
  }
};
