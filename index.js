const express = require('express');
const app = express ();
const hbs = require('hbs');

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/home', (request, response) => {
    response.render('home');
});


app.post('/', (request, response) => {
    response.send('Recebi uma requisiçao via POST!')
});

app.listen(3000);