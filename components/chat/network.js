const express = require('express');
const { success, problem } = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/:userId', async (req, res) => {
  try {
    const message = await controller.getChat(req.params.userId);
    success(req, res, message, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
});

router.post('/', function (req, res) {
  controller
    .addChat(req.body.users)
    .then((data) => {
      success(req, res, data, 201);
    })
    .catch((err) => {
      problem(req, res, 'Internal error', 500, err);
    });
});
module.exports = router;
