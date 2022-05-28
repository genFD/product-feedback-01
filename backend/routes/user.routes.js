const express = require('express');
const {
  loginUser,
  registerUser,
} = require('../controllers/user.controllers.js');
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);

module.exports = router;