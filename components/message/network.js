const express = require('express');
const multer = require('multer');
const path = require('path')
const { success, problem } = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static/files/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})
var upload = multer({ storage: storage })

router.get('/', async (req, res) => {
  const filterMessages = req.query.user || null;
  try {
    const message = await controller.getMessages(filterMessages);
    success(req, res, message, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
});

router.post('/f', upload.single('file'), function (req, res) {
  controller

    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
      success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      error(req, res, 'Informacion invalida', 400, 'Error en el controlaor');
    });
});

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const newMessage = await controller.addMessageAsync(
      req.body.chat,
      req.body.user,
      req.body.message,
      req.file,
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
