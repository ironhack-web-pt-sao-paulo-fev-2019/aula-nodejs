const express = require('express');
const hbs = require('hbs');

const app = express();

// Hbs
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('pubic'));  

app.get('/home', (request, response) => {
    response.render('home')
});

app.post('/', (request, response) => {
    response.send(`Recebi uma requisição via POST!`)
});

app.listen(3005);
console.log('Rolou!')