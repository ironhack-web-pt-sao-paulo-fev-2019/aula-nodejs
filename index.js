
const express = require('express');
const app = express();


app.user(static.express('public'))

app.get('/home', (request, response) => {
    response.send(`
    <link rel="stylesheet" href="/public/css/style.css" />
        <form action="/" method="post">
            <button type="submit">Postar dados</button>
        </form>
    `)
});

app.post('/', (request, response) => {
    response.send(`Recebi uma requisição via POST!`)
});

app.listen(3000);
 

