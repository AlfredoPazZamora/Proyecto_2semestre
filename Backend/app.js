const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World! node');
});

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('Escuchando por el puerto '+ app.get('puerto'));
});