const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUsers,
  deleteUsers,
} = require('../controller/tasks');

router.get('/users', getUsers);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUsers);

module.exports = router;