const express = require('express');
const {
  loginUser,
  registerUser,
  getUser,
} = require('../controllers/user.controllers.js');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUser);

module.exports = router;
