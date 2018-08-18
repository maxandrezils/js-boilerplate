const express = require('express');
const path = require('path');
const open = require('open');
const chalk = require('chalk');

const app = express();
const htmlDirectory = '/src/views/';
const port = 3000;

/* TODO: add static file reading */
app.use(express.static('/static', path.join(__dirname, '/src')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `${htmlDirectory}index.html`));
});
/* eslint-disable no-console */

app.listen(port, (err) => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green(`Listening on port ${port}`));
    open(`http://localhost:${port}`);
  }
});
