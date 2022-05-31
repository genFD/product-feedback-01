const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  content: String,
});

module.exports = mongoose.model('Comment', commentSchema);
