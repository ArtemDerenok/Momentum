import './css/owfont-regular.css';
import './css/style.css';
import './components/settings/settings';
import './components/settings/settingsWindow';
import showTime from './components/watch/watch';
import showGreeting from './components/greeting/greeting';
import './components/backgroundSlider/backgroundSlider';
import handleWeather from './components/weatherWidget/weatherWidget';
import showQuote from './components/quoteWidget/quoteWidget';
import './components/audioPlayer/audioPlayer';

showTime();
showGreeting();
handleWeather();
showQuote();
