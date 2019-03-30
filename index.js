// const http = require('http');

// const server =
//   http.createServer((request, response) => { //cria o servidor http(envia uma solicitacao, devolve a resposta - SERVIDOR)
//     response.write('Hello, world!'); //servidor devolve a informacao
//     response.end();
//   });

// server.listen(3000); //servidor ativo na porta 3000

// //Pode-se rodar por dois meios para apresentar o conteudo
// //curl http://localhost:3000 (via terminal)
// //node index.js (via navegador)

// const http = require('http');

// const server =
//   http.createServer((request, response) => {
//     console.log(`Someone has requested ${request.url}`);
//     //console.log(request); -> apresenta os dados de acesso

//     if (request.url === '/') {
//       response.write('Hello, world!');
//       response.end();
//     }
//     else {
//       response.statusCode = 404;
//       response.write('404 Page');
//       response.end();
//     }
//   });

// server.listen(3000);

// const http = require('http');

// const server =
//   http.createServer((request, response) => {
//     console.log(`Someone has requested ${request.url}`);

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


const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send(`calma!`)
})

app.listen(3000);