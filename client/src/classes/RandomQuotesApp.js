import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuatesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuotePublicAPIBtn = document.getElementById(
      'random-quote-public-api-btn'
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      'random-quote-own-api-btn'
    );
    this.textElement = document.getElementById('quote-text');
    this.authorElement = document.getElementById('quote-author');
    this.currentQuote = null;
    this.init();
  }
  displayCurrentQuote() {
    this.textElement.textContent = this.currentQuote.formatText();
    this.authorElement.textContent = this.currentQuote.formatAuthor();
  }
  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }
  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteViaAPI(apiIsOwn = false) {
    this.changeCurrentQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnAPI()
        : await RandomQuote.getRandomQuoteViaPublicAPI()
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuotePublicAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI()
    );
    this.randomQuoteOwnAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI(true)
    );
  }
}
export default RandomQuatesApp;
