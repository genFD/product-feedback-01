const { StatusCodes } = require('http-status-codes');
const handleAsync = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');

const loginUser = handleAsync(async (req, res) => {
  res.send('user logged in');
});

const registerUser = handleAsync(async (req, res) => {
  const { name, email, password } = req.body;
  //validation
  if (!name || !email || !password) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Please include all Fields');
  }
  //Find if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('User already exists');
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user

  const user = await User.create({ name, email, password: hashedPassword });
  if (user) {
    res.status(StatusCodes.CREATED).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST);
    throw new error('Invalid user data');
  }
});
module.exports = { loginUser, registerUser };
