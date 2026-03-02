/**
 * Скрипт загрузки изображений аппаратов с сайтов bellasystech.ru и fotona.ru
 * Сохраняет в seed-images-equipment/
 */
require('dotenv').config();
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'seed-images-equipment');

// Карта: имя файла -> URL страницы продукта (bellasystech.ru, fotona.ru)
const pageUrls = {
  'equipment-genius.jpg': 'https://bellasystech.ru/catalog/equipment/genius/',
  'equipment-dermav.jpg': 'https://bellasystech.ru/catalog/equipment/derma-v/',
  'equipment-spectra.jpg': 'https://bellasystech.ru/catalog/equipment/hollywood-spectra/',
  'equipment-healite.jpg': 'https://bellasystech.ru/catalog/equipment/healite-ii/',
  'equipment-ultraformer.jpg': 'https://bellasystech.ru/catalog/equipment/ultraformer-mpt/',
  'equipment-lasemd.jpg': 'https://bellasystech.ru/catalog/equipment/lasemd-ultra/',
  'equipment-bbl.jpg': 'https://bellasystech.ru/catalog/equipment/hollywood-spectra/',
  'equipment-fotona.jpg': 'https://fotona.ru/catalog/dynamispro/',
  'equipment-volnewmer.jpg': 'https://bellasystech.ru/catalog/equipment/volnewmer/',
  'equipment-picoplus.jpg': 'https://bellasystech.ru/catalog/equipment/picoplus/',
  'equipment-ulfit.jpg': 'https://bellasystech.ru/catalog/equipment/ulfit/',
  'equipment-clatuu.jpg': 'https://bellasystech.ru/catalog/equipment/clatuu/',
  'equipment-coresculpt.jpg': 'https://bellasystech.ru/catalog/equipment/coresculpt/',
};

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractImageUrl(html, baseUrl) {
  const origin = new URL(baseUrl).origin;
  // og:image
  const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  if (ogMatch) {
    let url = ogMatch[1].trim();
    if (url.startsWith('//')) url = 'https:' + url;
    if (url.startsWith('/')) url = origin + url;
    return url;
  }
  // img src или data-src с upload/iblock
  const imgMatches = html.matchAll(/(?:src|data-src)=["']([^"']*(?:upload|iblock)[^"']*\.(?:jpg|jpeg|png|webp)[^"']*)["']/gi);
  for (const m of imgMatches) {
    let url = m[1].trim();
    if (url.startsWith('//')) url = 'https:' + url;
    if (url.startsWith('/')) url = origin + url;
    if (url.length > 20) return url;
  }
  return null;
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(filepath, () => {}); reject(err); });
  });
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

  for (const [filename, pageUrl] of Object.entries(pageUrls)) {
    try {
      console.log(`Загрузка ${filename} с ${pageUrl}...`);
      const html = await fetchHtml(pageUrl);
      const imgUrl = extractImageUrl(html, pageUrl);
      if (!imgUrl) {
        console.warn(`  Не найдено изображение на странице`);
        continue;
      }
      const filepath = path.join(IMAGES_DIR, filename);
      await downloadImage(imgUrl, filepath);
      console.log(`  Сохранено: ${filename}`);
    } catch (err) {
      console.error(`  Ошибка: ${err.message}`);
    }
  }
  console.log('\nГотово.');
}

main();
