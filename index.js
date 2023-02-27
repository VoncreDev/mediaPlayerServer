const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  console.log('ok');
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/debug', (req, res) => {
  console.log('ok2');
  res.sendFile(path.resolve('pages/debug.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
