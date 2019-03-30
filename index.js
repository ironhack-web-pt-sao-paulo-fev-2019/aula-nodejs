const express = require('express');
const app = express ();

app.use(express.static('public'));

app.get('/home', (request, response) => {
    response.send(`
        <form action="/" method="post">
            <button type="submit">Postar dados</button>
        </form>
    `)
});

app.post('/', (request, response) => {
    response.send('Recebi uma requisiçao via POST!')
});

app.listen(3000);

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