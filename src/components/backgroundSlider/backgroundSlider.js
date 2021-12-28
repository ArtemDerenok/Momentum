import getRandomNum from '../../utils/getRandomNum';
import getTimeOfDay from '../../utils/getTimeOfDay';

const slideNextBtn = document.querySelector('.slide-next');
const slidePrevBtn = document.querySelector('.slide-prev');

let randomNum = getRandomNum(1, 20);

const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return String(num);
};

const setBg = (num) => {
  const timeOfDay = getTimeOfDay();
  const bgNum = addZero(num);
  const image = document.createElement('img');
  image.src = `https://raw.githubusercontent.com/ArtemDerenok/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

  image.onload = () => {
    document.body.style.backgroundImage = `url(${image.src})`;
  };
};

setBg(randomNum);

const getSlideNext = () => {
  if (randomNum !== 20) {
    randomNum += 1;
  } else {
    randomNum = 1;
  }

  setBg(randomNum);
};

const getSlidePrev = () => {
  if (randomNum !== 1) {
    randomNum -= 1;
  } else {
    randomNum = 20;
  }

  setBg(randomNum);
};

slideNextBtn.addEventListener('click', getSlideNext);

slidePrevBtn.addEventListener('click', getSlidePrev);
