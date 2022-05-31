const handleAsync = require('express-async-handler');
const User = require('../models/user.model.js');
const Feedback = require('../models/feedback.model.js');
const { StatusCodes } = require('http-status-codes');

const getFeedbacks = handleAsync(async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'get feedbacks' });
});
const createFeedback = handleAsync(async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'create feedbacks' });
});

module.exports = {
  getFeedbacks,
  createFeedback,
};
