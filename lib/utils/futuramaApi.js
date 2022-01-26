const fetch = require('cross-fetch');

const getFuturamaQuote = async () => {
  const quote = await fetch.get('https://futuramaapi.herokuapp.com/api/quotes/1');
  return quote.body;

};
module.exports = { getFuturamaQuote };
