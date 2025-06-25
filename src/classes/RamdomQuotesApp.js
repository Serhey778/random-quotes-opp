import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RamdomQuatesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteAPIBtn = document.getElementById('random-quote-api-btn');
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
  async getRandomQuoteViaAPI() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaAPI());
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.getRandomQuoteViaAPI()
    );
  }
}
export default RamdomQuatesApp;
