const express = require('express');
const router = express.Router();
//requirimos express
const app = express();

//iniciamos el router
app.use(router);

router.get('/', (req, res) => {
  res.send('Hola desde router');
});

//prendemos express
app.listen(3000);
console.log(`la aplicacion esta escuchando en http://localhost:3000`);
