import quotes from '../../data/quotes.json';
import { getQuote } from '../../api/api';
import { getJsonSettings } from '../settings/settings';

const quoteButton = document.querySelector('.change-quote');

const showQuote = async () => {
  const settings = getJsonSettings();
  const quoteDiv = document.querySelector('.quote');
  const authorDiv = document.querySelector('.author');
  const quote = await getQuote(quotes);
  quoteDiv.innerText = settings.lang === 'en' ? quote.text.en : quote.text.ru;
  authorDiv.innerText = settings.lang === 'en' ? quote.author.en : quote.author.ru;
};

quoteButton.addEventListener('click', showQuote);

export default showQuote;
