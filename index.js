const express = require('express');
const app = express();

app.get('/', function(request,response){
  response.send('Vai Corinthians!')

})

app.listen(3000);
