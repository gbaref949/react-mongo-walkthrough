const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUsers,
  deleteUsers,
} = require('../controllers/users');

router.get('/', getUsers);
router.post('/', createUsers);
router.delete('/:id', deleteUsers);

module.exports = router;