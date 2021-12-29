const getWeather = async () => {
  let city;
  if (!localStorage.getItem('city')) {
    city = 'Minsk';
    localStorage.setItem('city', city);
  } else {
    city = localStorage.getItem('city');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=9f0d62b52ad9fa09582c777373b26276&units=metric`;

  const data = await fetch(url);
  const result = await data.json();

  return result;
};

export default getWeather;
