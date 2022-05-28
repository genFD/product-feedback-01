const { StatusCodes } = require('http-status-codes');
const handleAsync = require('express-async-handler');

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
});
module.exports = { loginUser, registerUser };
