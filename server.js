const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const htmlDirectory = '/src/views/';
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `${htmlDirectory}index.html`));
});
/* eslint-disable no-console */
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port ${port}`);
    open(`http://localhost:${port}`);
  }
});
