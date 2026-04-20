fetch('https://prestigecarlusso.com/')
  .then(res => res.text())
  .then(html => {
    const urls = html.match(/[\w\/\-\.\:]+\/wp-content\/uploads\/[^\'\"]+\.(png|webp|svg)/gi);
    console.log([...new Set(urls)].join('\n'));
  });
