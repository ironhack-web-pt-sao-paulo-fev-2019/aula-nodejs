const express = require('express');
const app = express();


app.use(express.static('public'));

//Hbs
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// // sendFile - envia arquivo
// app.get('/home', (request, response) => {
//   response.sendFile(`${__dirname}/views/home.html`)
// });

//add render do hbs
app.get('/home', (request, response) => {
  response.render('home');
});


// send - envia texto
app.post('/', (request, response) => {
  response.send(`Recebi uma requisiçao via POST!`)
})

app.listen(3000);