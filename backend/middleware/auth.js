const jwt = require('jsonwebtoken');
const handleAsync = require('express-async-handler');
const User = require('../models/user.model.js');
const { StatusCodes } = require('http-status-codes');

const protect = handleAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //Get token from Header
      token = req.headers.authorization.split(' ')[1];
      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from token
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.UNAUTHORIZED);
      throw new Error('Not Authorized');
    }
  }

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED);
    throw new Error('Not Authorized');
  }
});

module.exports = { protect };
