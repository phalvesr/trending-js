const axios = require('axios').default;

function requestWhatIsTrending(countryCode) {
  return axios.get(`https://api.breakingapi.com/trending?api_key=demo&locale=${countryCode}`)
}

module.exports = { requestWhatIsTrending }