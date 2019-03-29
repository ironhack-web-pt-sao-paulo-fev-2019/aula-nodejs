const http = require('http');

const server =
  http.createServer((request, response) => { //cria o servidor http(envia uma solicitacao, devolve a resposta - SERVIDOR)
    response.write('Hello, world!'); //servidor devolve a informacao
    response.end();
  });

server.listen(3000); //servidor ativo na porta 3000