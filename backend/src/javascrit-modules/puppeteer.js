const puppeteer = require('puppeteer');

async function startPuppeteer(searchTerms) {
  const browser = await puppeteer.launch({
    product: 'chrome', 
    headless: true,
    defaultViewport: null,
   });
    let headline = []
    headline = searchTerms.map(async (element) => {
      const page = await browser.newPage();
      await page.goto(`https://www.bing.com/news/search?q=${element}&qs=n&form=QBNT&sp=-1&pq=brasil&sc=8-6&sk=&cvid=8BD35AE65AAA48CF948A98F4F2F286CF`);

      return page.evaluate(() => {
        return {
          title: document.querySelector('.title').textContent,
          link:  document.querySelector('.title').href,
          image: document.querySelector('img[class=rms_img]').src
        }
      })

    })

  await Promise.all(headline);
  await browser.close();
  return headline;

}


module.exports = {
  startPuppeteer,
}


/**
 * 
 *  headline[index] = await page.evaluate(() => {
      return {
        title: document.querySelector('.title').textContent,
        link: document.querySelector('.title').href,
        image: document.querySelector('img[class=rms_img]').src
      }
    })
 * 
 */
