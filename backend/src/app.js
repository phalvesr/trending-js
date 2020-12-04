const syncFunctions = require('./javascrit-modules/sync-functions.js');
const asyncFunctions = require('./javascrit-modules/async-functions.js');
const manipulate = require('./javascrit-modules/puppeteer.js');

(async () => {
  try {
    const countryCode = syncFunctions.getCountryCode();
    const trending = await asyncFunctions.requestWhatIsTrending(countryCode);
    console.log(trending.data.trending_topics)
    const trendingTerms = syncFunctions.getNames(trending.data.trending_topics, 3);
    const obj = await manipulate.startPuppeteer(trendingTerms);
    console.log(obj[1])
  } catch(e) {
    console.error('something went wrong: ', e.message)
  }
})();





