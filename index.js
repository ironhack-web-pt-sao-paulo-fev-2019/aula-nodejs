const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);
    if (request.headers.host == '127.0.0.1:3000') {
        response.write('NAO USE O IP, tente localhost.');
        response.statusCode = 403;
        response.write('403 Page - Acesso proibido');
        response.end();  
    } else if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    }
    else {
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  });

server.listen(3000);