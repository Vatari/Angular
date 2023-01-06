import * as request from 'request-promise';

async function getBitcoinPrice() {
  const response = await request.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  const data = JSON.parse(response);
  return data.bpi.USD.rate_float;
}

(async () => {
  const price = await getBitcoinPrice();
  console.log(`The current price of Bitcoin is $${price}`);
})();