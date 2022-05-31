const express = require('express');

const dotenv = require('dotenv').config();

const colors = require('colors');

const userRoutes = require('./routes/user.routes.js');

const feedbackRoutes = require('./routes/feedback.routes.js');

const { handleError } = require('./middleware/error.js');

const { connectDatabase } = require('./config/database.js');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use(handleError);

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(
      PORT,
      console.log(
        `SERVER IS LISTENING ON PORT ${PORT}`.bgGreen.black.underline.bold
      )
    );
  } catch (error) {
    console.log(`Cannot start server : ${error}`.bgRed.underline.bold);
  }
};
startServer();
