const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static('public'));


//HBS
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/home', (request, response) => {
  response.render('home');
});

app.post('/', (request, response) => {
  response.send('teste! post');
});

app.listen(3000);