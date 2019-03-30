const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
  response.send(`
  <html>
    <head>  
    </head>
    <body>  
      <link rel="stylesheet" href="/css/styles.css" />
      <form action ="/" method="post">
        <button type="submit"> Postar dados</button>
       </form>
    </body>
  </html>`)
});

app.post('/', (request, response) => {
  response.send(`teste! post`)
});

app.listen(3000);