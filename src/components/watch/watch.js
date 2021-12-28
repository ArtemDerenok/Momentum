const showCurrentDay = () => {
  const dateContainer = document.querySelector('.date');
  const date = new Date();
  const optionsDate = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  if (dateContainer.innerText !== date.toLocaleDateString('en-US', optionsDate)) {
    dateContainer.innerText = date.toLocaleDateString('en-US', optionsDate);
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

const showTime = () => {
  const time = document.querySelector('.time');
  const date = new Date();

  time.innerText = date.toLocaleTimeString();
  chechCurrentHour(date.getHours(), time);

  showCurrentDay();
  setTimeout(() => {
    showTime();
  }, 1000);
};

export default showTime;
