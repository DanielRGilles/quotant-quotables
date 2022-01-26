const fetch = require('cross-fetch');

const getFuturamaQuote = async () => {
  
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    // eslint-disable-next-line no-console
    
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    const user = await res.json();
    return user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }};

module.exports = { getFuturamaQuote };
