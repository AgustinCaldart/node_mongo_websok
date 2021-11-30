const express = require('express');
const router = express.Router();

const { success, problem } = require('./network/response');
//requirimos express
const app = express();
//trabajar json
app.use(express.json());
//iniciamos el router
app.use(router);

router.get('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send('Hola desde router');
});
router.get('/format', (req, res) => {
  if (req.query.error == 'ok') {
    problem(req, res, 'Error simulado', 401);
  } else {
    success(req, res, 'Creado correctamente', 201);
  }
});

router.post('/message', (req, res) => {
  console.log(req.headers);
  res.header({ 'coustum-type': 'nuestrovalor' });

  res.status(201).send('hola desde router post');
});

//prendemos express
app.listen(3000);
console.log(`la aplicacion esta escuchando en http://localhost:3000`);
