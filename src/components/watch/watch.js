import { getJsonSettings } from '../settings/settings';

export const showCurrentDay = () => {
  const settings = getJsonSettings();
  const dateContainer = document.querySelector('.date');
  const date = new Date();
  const optionsDate = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat(
    `${settings.lang === 'ru' ? 'ru' : 'en-US'}`,
    optionsDate
  );
  if (dateContainer.innerText !== formatter.format(date)) {
    dateContainer.innerText = formatter.format(date);
  }
};

const chechCurrentHour = (num, elem) => {
  const time = elem;
  if (time.dataset.hour === undefined) {
    time.dataset.hour = num;
  }
  if (time.dataset.hour !== undefined && +time.dataset.hour !== +num) {
    time.dataset.hour = num;
  }
};

export const showTime = () => {
  const time = document.querySelector('.time');
  const date = new Date();

  time.innerText = date.toLocaleTimeString();
  chechCurrentHour(date.getHours(), time);

  showCurrentDay();
  setTimeout(() => {
    showTime();
  }, 1000);
};
