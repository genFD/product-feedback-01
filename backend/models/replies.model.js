const RepliesSchema = mongoose.Schema({
  content: String,
  replyingTo: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
