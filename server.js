const express = require('express');

const router = require('./network/routes');
//requirimos express
const app = express();
//trabajar json
app.use(express.json());
//iniciamos el router
router(app);

app.use('/app', express.static('static'));
//prendemos express
app.listen(3000);
console.log(`la aplicacion esta escuchando en http://localhost:3000`);
