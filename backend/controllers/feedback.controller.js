const handleAsync = require('express-async-handler');
const User = require('../models/user.model.js');
const Feedback = require('../models/feedback.model.js');
const { StatusCodes } = require('http-status-codes');

const getFeedbacks = handleAsync(async (req, res) => {
  const feedbacks = await Feedback.find({});
  res.status(StatusCodes.OK).json(feedbacks);
});

const getFeedback = handleAsync(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (feedback) {
    res.status(StatusCodes.OK).json(feedback);
  } else {
    res.status(StatusCodes.NOT_FOUND);
    throw new Error('product not found');
  }
});

const createFeedback = handleAsync(async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'create feedbacks' });
});

module.exports = {
  getFeedbacks,
  getFeedback,
  createFeedback,
};
