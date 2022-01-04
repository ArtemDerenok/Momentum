const settings = {
  lang: 'en',
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
}

export const setLanguage = (lang) => {
  settings.lang = lang;
  setLocalStorage(toJSON());
};
