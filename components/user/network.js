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

router.post('/', async (req, res) => {
  try {
    const newUser = await controller.addUser(req.body.name);
    success(req, res, newUser, 201);
  } catch (error) {
    problem(req, res, error, 401);
  }
});

module.exports = router;
