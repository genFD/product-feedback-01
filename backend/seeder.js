const handleAsync = require('express-async-handler');
const dotenv = require('dotenv').config();
const colors = require('colors');
const User = require('./models/user.model');
const Feedback = require('./models/feedback.model');
const Comment = require('./models/comment.model');
const users = require('./data/users');
const feedbacks = require('./data/data');
const comments = require('./data/comments');
const { connectDatabase } = require('./config/database');

connectDatabase();

const importData = async () => {
  try {
    //clear collections off to avoid import data that's already in the db
    await User.deleteMany();
    // await Comment.deleteMany();
    // await Feedback.deleteMany();

    //inserting colllection we getting from our models
    await User.insertMany(users);
    // await Comment.insertMany(comments);
    // await Feedback.insertMany(feedbacks);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Comment.deleteMany();
    // await Feedback.deleteMany();
    await User.deleteMany();
    console.log('Data destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
