const fs = require('fs');
const https = require('https');

[1, 2, 3, 4, 5, 6, 7].forEach(i => {
  const url = `https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/${i}.png`;
  const dest = `c:/Users/micro/Desktop/Sito tramonti/public/immagini/brand_${i}.png`;
  https.get(url, res => {
    res.pipe(fs.createWriteStream(dest));
  }).on('error', err => {
    console.error(`Error downloading ${url}:`, err.message);
  });
});
