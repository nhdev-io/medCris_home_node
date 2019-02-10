const express = require('express');

const sass = require('node-sass-middleware');

const fs = require('fs');

const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(
  sass({
    src: path.join(__dirname, '/styles/sass'),
    dest: path.join(__dirname, '/public/css'),
    debug: true,
  }),
);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/main.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/css/main.css'));
});

app.listen(3000, () => console.log(`Listening on port 3000!`));
