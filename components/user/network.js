const express = require('express');
const { success, problem } = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', async (req, res) => {
  const filterUser = req.query.name || null;
  try {
    const user = await controller.getUser(filterUser);
    success(req, res, user, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
});

router.get('/:userId', function (req, res) {
  controller
    .listChats(req.params.userId)
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.post('/', async (req, res) => {
  try {
    const newUser = await controller.addUser(req.body.name);
    success(req, res, newUser, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
});

module.exports = router;
