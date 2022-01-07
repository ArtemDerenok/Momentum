import { getJsonSettings } from '../components/settings/settings';
import getRandomNum from '../utils/getRandomNum';

export const getWeather = async () => {
  let city;
  const settings = getJsonSettings();

  if (!localStorage.getItem('city')) {
    city = 'Minsk';
    localStorage.setItem('city', city);
  } else {
    city = localStorage.getItem('city');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${settings.lang}&appid=9f0d62b52ad9fa09582c777373b26276&units=metric`;

  const data = await fetch(url);
  const result = await data.json();

  return result;
};

export const getQuote = async () => {
  const data = await fetch('./quotes.json');
  const result = await data.json();

  const randomNum = getRandomNum(0, result.length - 1);

  return result[randomNum];
};

export const getImagesByFlickr = async () => {
  const settings = getJsonSettings();
  if (!settings.searchTag) {
    settings.searchTag = 'nature';
  }
  const data = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=80b63f5d15e27bccde1dac2016d5f35f&tags=${settings.searchTag}&extras=url_l&format=json&nojsoncallback=1`
  );
  const result = await data.json();

  return result.photos.photo;
};
