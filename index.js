const express = require('express');
const app = express();

app.use(express.static('pubic'));  

app.get('/home', (request, response) => {
    response.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <form action="/" method="post">
            <button type="submit">Postar dados</button>
        </form>
      </body>
    </html>
    `)
});

app.post('/', (request, response) => {
    response.send(`Recebi uma requisição via POST!`)
});

app.listen(3000);
console.log('Rolou!')