const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'RDqkTeYLCOoFZyNK4TYu0DWV1spNwcsE4VCSq91qTJLVFGWmeMzKXwcb1FtDIA2l',
  APISECRET: 'EjAd9ZgscDy9mO4cT7ypcXcqKuvDbSrsn94W51UlV0yw6HOkHMIiRM0bShCn8iCo'
});

coin = "BTC"

binance.prices(coin+'BUSD', (error, ticker) => {
    console.log("BTC: ", ticker.BTCBUSD);
  });