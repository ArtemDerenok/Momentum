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
