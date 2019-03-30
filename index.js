const express = require('express');
const app = express();


app.use(express.static('public'));

//Hbs
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//add render do hbs
app.get('/home', (request, response) => {
  let data = {
    name: 'Ke',
    age: 20,
    cities: [
      {
          name: "Miami",
          friends: 150,
          special: true
      }, 
      { 
          name: "Madrid",
          friends: 185000
      },
      { 
          name: "Barcelona",
          friends: 1500
      }
    ]
  };  
  response.render('home', data);
});

// send - envia texto
app.post('/', (request, response) => {
  response.send(`Recebi uma requisiçao via POST!`)
})

app.listen(3000);