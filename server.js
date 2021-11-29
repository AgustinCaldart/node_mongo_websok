const express = require('express');
//requirimos express
const app = express();

//utilizamos endpoint gracias a use
app.use('/', (req, res) => {
  res.send('Hola');
});

//prendemos express
app.listen(3000);
console.log(`la aplicacion esta escuchando en http://localhost:3000`);
