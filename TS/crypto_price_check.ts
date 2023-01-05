const axios = require('axios');

async function getCryptoPrice(crypto: string): Promise<number> {
  const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
  return response.data[crypto].usd;
}

async function main() {
  const bitcoinPrice = await getCryptoPrice('bitcoin');
  console.log(`The current price of Bitcoin is $${bitcoinPrice}`);
}

main();