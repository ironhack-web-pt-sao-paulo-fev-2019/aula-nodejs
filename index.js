
const express = require('express');
const app = express();


app.use(express.static('public'))

app.set('views',__dirname + '/views');
app.set('view engine','hbs');


app.get('/home', (request, response) => {
    response.render('home')
});

app.post('/', (request, response) => {
    response.send(`Recebi uma requisição via POST!`)
});

app.listen(3000);
 

