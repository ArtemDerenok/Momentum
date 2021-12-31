import quotes from '../../data/quotes.json';
import { getQuote } from '../../api/api';

const quoteButton = document.querySelector('.change-quote');

const showQuote = async () => {
  const quoteDiv = document.querySelector('.quote');
  const authorDiv = document.querySelector('.author');
  const quote = await getQuote(quotes);
  quoteDiv.innerText = quote.text.en;
  authorDiv.innerText = quote.author.en;
};

quoteButton.addEventListener('click', showQuote);

export default showQuote;
