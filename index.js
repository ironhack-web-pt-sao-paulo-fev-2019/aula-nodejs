const express = require('express');

const app = express();

app.get('/', (request, respose) => {
  respose.send('Calma Sany');
});

app.listen(3000);
