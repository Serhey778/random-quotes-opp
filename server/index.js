const express = require('express');
const quotes = require('./data/quotes.js');
const cors = require('cors');
const app = express();
const PORT = 3000;
const corsOptions = {
  origin: '*', // all origin
  //  origin: 'http://127.0.0.1:8080', //one origin
};

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
app.use(cors(corsOptions));

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API servis is running on port ${PORT}`);
});
