const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
  response.sendfile(`${__dirname}/views/home.html`);
});

app.post('/', (request, response) => {
  response.send(`teste! post`)
});

app.listen(3000);