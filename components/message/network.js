const express = require('express');
const { success, problem } = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', async (req, res) => {
  const filterMessages = req.query.user || null;
  try {
    const message = await controller.getMessages(filterMessages);
    success(req, res, message, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
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
router.patch('/:id', async (req, res) => {
  try {
    const newMessage = await controller.updateMessage(
      req.params.id,
      req.body.message
    );
    success(req, res, newMessage, 200);
  } catch (error) {
    problem(req, res, error, 500);
  }
  /*
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      success(req, res, data, 200);
    })
    .catch((e) => {
      problem(req, res, e, 500);
    });
*/
});

router.post('/headers', (req, res) => {
  console.log(req.headers);
  res.header({ 'coustum-type': 'nuestrovalor' });

  success(req, res, 'hola desde router post', 202);
});

router.delete('/:id', async (req, res) => {
  try {
    const message = req.params.id;
    await controller.deleteMessage(message);
    success(req, res, `Mensaje eliminado ${message}`);
  } catch (error) {
    problem(req, res, error, 500);
  }
});

module.exports = router;
