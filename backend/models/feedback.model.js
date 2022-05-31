const mongoose = require('mongoose');
const Comment = require('./comment.model');

const feedbackSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a title'],
    },
    category: {
      type: String,
      required: true,
      enum: ['enhancement', 'feature', 'bug', 'UX', 'UI'],
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['suggestion', 'planned', 'in-progress', 'live'],
      default: 'suggestion',
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
    },
    comments: [
      {
        content: String,
        user: {
          image: String,
          name: String,
          username: String,
        },
        replies: [
          {
            content: String,
            replyingTo: String,
            user: {
              image: String,
              name: String,
              username: String,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model('Feedback', feedbackSchema);
