const express = require('express');
const router = express.Router();
const {
  createFeedback,
  getFeedbacks,
  getFeedback,
} = require('../controllers/feedback.controller.js');

router.route('/').get(getFeedbacks).post(createFeedback);

router.route('/:id').get(getFeedback).delete().put();

module.exports = router;
