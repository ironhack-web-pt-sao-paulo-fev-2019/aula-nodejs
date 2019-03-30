const express = require('express');
const app = express();

app.get('/', (request, response)=> {
  response.send(`teste!`)
})
app.listen(3000);