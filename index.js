const express = require('express');
const app = express ();

app.use(express.static('public'));

app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/home.html`); //colocar ${__dirname} e nao './' para falar para o browser pegar a raiz no computador
});

app.post('/', (request, response) => {
    response.send('Recebi uma requisiçao via POST!')
});

app.listen(3000);