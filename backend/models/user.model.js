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
const User = mongoose.model('User', userSchema);

module.exports = User;
