const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

// Middelware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World! node');
});


app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('Escuchando por el puerto '+ app.get('puerto'));
});