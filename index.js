const express = require('express');
const app = express();

app.get('/', (req,resp) => {
    console.log('No console!')
    resp.send('Calma Sany!')
});

app.listen(3000);

// const server =
//     http.createServer((request, response) => {
//         console.log(`Someone has requested ${request.url}`);

//         if (request.headers.host == '127.0.0.1:3000'){
//             response.statusCode = 403;
//             response.write('Use o localhost!');
//             response.end();
//         }
//         else if (request.url === '/') {
//             response.write('Hello, world!');
//             response.end();
//         }
//         else {
//             response.statusCode = 404;
//             response.write('404 Page');
//             response.end();
//         }
//     });

// server.listen(3000);