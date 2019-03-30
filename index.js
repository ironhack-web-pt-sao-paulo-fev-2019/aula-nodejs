const express = require('express');
const app = express();
//raiz para objetos estaticos(css,js,imagens...)
app.use(express.static('public'));
//estou enviando um arquivom para o browser
app.get('/home', (request, response) => {
  response.sendFile(`${__dirname}/views/home.html`)
});
//ele esta mandando um texto, apenas
app.post('/', (request, response) => {
  response.send(`Recebi uma requisição via POST`)
});

app.listen(3000);

// const server =
//   http.createServer((request, response) => {
//     console.log(`Someone has requested ${request.url}`);
//     // pasta raiz
//     if (request.url === '/') {
//       response.write('Hello, world!');
//       response.end();
//     }
//     else if (request.url === '/about') {
//       response.write('My name is Izzy');
//       response.end();
//     }
//     else {
//       response.statusCode = 404;
//       response.write('404 Page');
//       response.end();
//     }
//   });

// server.listen(3000);

