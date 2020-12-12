const readLineSync = require('readline-sync');


function getNames(dataArray, size = 5) {
  if (size > 10) {
    size = 10;
  }
  const names = [];
  dataArray.forEach(element => {
    if(names.length >= size) return;
    names.push(element.name);
  });
  console.clear();
  return names;
}

function getCountryCode() {
  try {
    const countryName = readLineSync.question('What country would you like to get trending news from? ').toLowerCase();
    
    switch(countryName) {
      case 'brasil':
      case 'brazil':
      case 'br':
        return 'pt-BR';
        break;
      case 'united states':
      case 'estados unidos':
      case 'eua':
        return 'en-US';
        break;
      case 'australia':
      case 'austrália':
      case 'au':
        return 'en-AU'
        break;
      default:
        //throw new Error('Couldn\'t recognize the country name')
        return 'pt-br';
        break;
    }
  } catch(e) {
    console.error('==========================================================================================\n' + e.message)
  }
}

module.exports = { getNames, getCountryCode }
