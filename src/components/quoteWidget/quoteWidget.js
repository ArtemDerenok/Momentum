import quotes from '../../data/quotes.json';
import getRandomNum from '../../utils/getRandomNum';

const quoteButton = document.querySelector('.change-quote');

const getQuote = (arr) => {
  const randomNum = getRandomNum(0, arr.length - 1);
  return arr[randomNum];
};

const showQuote = () => {
  const quoteDiv = document.querySelector('.quote');
  const authorDiv = document.querySelector('.author');
  const quote = getQuote(quotes);
  quoteDiv.innerText = quote.text.en;
  authorDiv.innerText = quote.author.en;
};

quoteButton.addEventListener('click', showQuote);

export default showQuote;
