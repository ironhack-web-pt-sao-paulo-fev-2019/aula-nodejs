const express = require('express');
const app = express();

// metodo .use - (caminho, callback) - middlewares: funcao que sera executada dentro. Metodo adicional.
// metodo .static - todo arquivo imutavel (ex.: imagem)
app.use(express.static('public'));

//get requisita e retorna pagina - para aparecer o retorno do post
app.get('/home', (request, response) => {
  response.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <form action="/" method="post">
          Nome: <input name="name" value=""/>
          <button type="submit">Postar dados</button>
        </form>
      </body>
    </html>
    `)
});

//post requiita e envia dados, retorna a pagina
app.post('/', (request, response) => {
  response.send(`Recebi uma requisiçao via POST!`)
})

app.listen(3000);