import { getImagesByFlickr } from '../../api/api';
import getRandomNum from '../../utils/getRandomNum';
import getTimeOfDay from '../../utils/getTimeOfDay';
import { getJsonSettings } from '../settings/settings';

const slideNextBtn = document.querySelector('.slide-next');
const slidePrevBtn = document.querySelector('.slide-prev');

let randomNum = getRandomNum(1, 20);
let apiImages;
const settings = getJsonSettings();

const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return String(num);
};

export const setBgByGitHub = (num) => {
  const timeOfDay = getTimeOfDay();
  const bgNum = addZero(num);
  const image = document.createElement('img');
  image.src = `https://raw.githubusercontent.com/ArtemDerenok/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

  image.onload = () => {
    document.body.style.backgroundImage = `url(${image.src})`;
  };
};

export const setBgByApi = async () => {
  const num = getRandomNum(0, apiImages.length - 1);
  const image = document.createElement('img');

  image.src = apiImages[num].url_l;

  image.onload = () => {
    document.body.style.backgroundImage = `url(${image.src})`;
  };
};

export const getImages = async () => {
  apiImages = await getImagesByFlickr();
  const setting = getJsonSettings();
  if (setting.sourceImage === 'flickr') {
    setBgByApi();
  }
};

getImages();

if (settings.sourceImage === 'github') {
  setBgByGitHub(randomNum);
}

const getSlideNext = () => {
  const setting = getJsonSettings();
  if (randomNum !== 20) {
    randomNum += 1;
  } else {
    randomNum = 1;
  }

  if (setting.sourceImage === 'github') {
    setBgByGitHub(randomNum);
  } else {
    setBgByApi();
  }
};

const getSlidePrev = () => {
  const setting = getJsonSettings();
  if (randomNum !== 1) {
    randomNum -= 1;
  } else {
    randomNum = 20;
  }

  if (setting.sourceImage === 'github') {
    setBgByGitHub(randomNum);
  } else {
    setBgByApi();
  }
};

slideNextBtn.addEventListener('click', getSlideNext);

slidePrevBtn.addEventListener('click', getSlidePrev);
