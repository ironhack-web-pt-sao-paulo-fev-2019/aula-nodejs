const express = require('express');
const app = express();

app.use(express.static('pubic'));  

app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/home.html`);
});

app.post('/', (request, response) => {
    response.send(`Recebi uma requisição via POST!`)
});

app.listen(3000);
console.log('Rolou!')