import RandomQuote from './RandomQuote.js';

class RamdomQuatesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.textElement = document.getElementById('quote-text');
    this.authorElement = document.getElementById('quote-author');
    this.currentQuote = null;
    this.init();
  }
  displayCurrentQuote() {
    const { text, author } = this.currentQuote;
    this.textElement.textContent = text;
    this.authorElement.textContent = author;
  }
  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }
  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}
export default RamdomQuatesApp;
