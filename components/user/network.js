const express = require('express');
const { success, problem } = require('./../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newUser = await controller.addUser(req.body.name);
    success(req, res, newUser, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
});

module.exports = router;
