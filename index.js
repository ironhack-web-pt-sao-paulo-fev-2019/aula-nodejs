const express = require('express');
const app = express();

// get requisita e retorna pagina, nao retorna o post
// app.get('/home', (request, response) => {
//   response.send(`Recebi uma requisiçao via GET!`)
// })


//get requisita e retorna pagina - para aparecer o retorno do post
app.get('/home', (request, response) => {
  response.send(`
    <form action="/" method="post">
      <button type="submit">Postar dados</button>
    </form>
    `)
});

//post requiita e envia dados, retorna a pagina
app.post('/', (request, response) => {
  response.send(`Recebi uma requisiçao via POST!`)
})

app.listen(3000);