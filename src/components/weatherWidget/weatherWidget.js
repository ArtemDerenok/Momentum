import { getWeather } from '../../api/api';
import { getJsonSettings } from '../settings/settings';

const inputCity = document.querySelector('.city');

const isInputValue = () => {
  if (inputCity.value) {
    return true;
  }
  return false;
};

const showWeather = (data) => {
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const weatherIcon = document.querySelector('.weather-icon');
  const settings = getJsonSettings();
  inputCity.value = localStorage.getItem('city');

  wind.innerText =
    settings.lang === `en`
      ? `Wind speed: ${data.wind.speed} m/s`
      : `Скорость ветра: ${data.wind.speed} м/с`;
  humidity.innerText =
    settings.lang === `en`
      ? `Humidity: ${data.main.humidity}%`
      : `Влажность: ${data.main.humidity}%`;
  temperature.innerText = `${data.main.temp}°C`;
  weatherDescription.innerText = data.weather[0].description;
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
};

const handleWeather = async () => {
  if (isInputValue()) {
    localStorage.setItem('city', inputCity.value);
  }
  const weatherData = await getWeather();
  showWeather(weatherData);
};

inputCity.addEventListener('blur', handleWeather);

export default handleWeather;
