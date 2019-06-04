const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res => {
  res.render('index');
}));

// Add functionality for a second page. localhost:3000/hello
app.get('/hello', (req, res => {
  res.render('index');
}));

app.listen(3000, () => {
  console.log('App is running on host 3000');
});
