const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const userRoutes = require('./routes/user.routes.js');
const { handleError } = require('./middleware/error.js');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use(handleError);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is listening on ${PORT}
  `.yellow.bold
  );
});
