const express = require('express');
const { success, problem } = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send('Hola desde router');
});
router.post('/', (req, res) => {
  controller
    .addMessagePromise(req.body.user, req.body.message)
    .then((fullMessage) => {
      success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      problem(req, res, 'Error simulado', 401);
    });
});

router.post('/async', async (req, res) => {
  try {
    const newMessage = await controller.addMessageAsync(
      req.body.user,
      req.body.message
    );
    success(req, res, newMessage, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
});

router.post('/headers', (req, res) => {
  console.log(req.headers);
  res.header({ 'coustum-type': 'nuestrovalor' });

  success(req, res, 'hola desde router post', 202);
});

module.exports = router;
