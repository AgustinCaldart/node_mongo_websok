const express = require('express');
const { success, problem } = require('./../../network/response');

const router = express.Router();

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

router.post('/', (req, res) => {
  console.log(req.headers);
  res.header({ 'coustum-type': 'nuestrovalor' });

  success(req, res, 'hola desde router post', 202);
});

module.exports = router;
