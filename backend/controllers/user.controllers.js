const { StatusCodes } = require('http-status-codes');
const handleAsync = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');
const generateToken = require('../utils/generateToken.js');

//login user
const loginUser = handleAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  //check if user and passsword match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(StatusCodes.OK).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED);
    throw new Error('Invalid credentials');
  }
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
      token: generateToken(user._id),
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST);
    throw new error('Invalid user data');
  }
});

const getUser = handleAsync(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(StatusCodes.OK).json(user);
});

module.exports = { loginUser, registerUser, getUser };
