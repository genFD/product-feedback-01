const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model('User', userSchema);
