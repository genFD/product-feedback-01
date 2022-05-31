const express = require('express');
const router = express.Router();
const {
  createFeedback,
  getFeedbacks,
} = require('../controllers/feedback.controller.js');

router.route('/').get(getFeedbacks).post(createFeedback);

module.exports = router;
