const express = require('express');
const app = express();

app.use(express.static('public'));

//sendFile - utilizando arquivo externo com "__dirname" (variavel que identifica o caminho do arquivo)
app.get('/home', (request, response) => {
  response.sendFile(`${__dirname}/views/home.html`)
});

app.post('/', (request, response) => {
  response.send(`Recebi uma requisiçao via POST!`)
})

app.listen(3000);