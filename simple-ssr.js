/**
 * Simple SSR module
 * Only used for SEO
 */
const http = require('http');
const puppeteer = require('puppeteer');
let browser = null;
let page = null;
const envPath = '.env';
require('dotenv-expand')(require('dotenv').config({path: envPath}));

const server = http.createServer(async (req, res) => {
  if (!browser) browser = await puppeteer.launch({ignoreHTTPSErrors: true});
  if (!page) {
    page = await browser.newPage();
    await page.setUserAgent('SSR-SERVER');
  }
  let urlToGo = process.env.APP_URL + req.url;
  console.log('urlToGo:', urlToGo);
  await page.goto(urlToGo, {waitUntil: 'networkidle0'});
  let html = await page.content();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(html);
  res.end();
});

server.listen(process.env.SSR_PORT);

console.log('Node.js web server at port ' + process.env.SSR_PORT + ' is running..')
