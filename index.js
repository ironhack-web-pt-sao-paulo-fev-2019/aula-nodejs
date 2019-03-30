const express = require('express');

const app = express();

app.get('/home', (request, response) => {
  response.send(`
  <form action ="/" method="post">
  <button type="submit"> Postar dados</button>
  </form>`)
});

app.post('/', (request, response) => {
  response.send(`teste! post`)
});

app.listen(3000);