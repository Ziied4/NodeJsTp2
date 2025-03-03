const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes')
const AuthRoutes = require('./routes/auth.routes')
dotenv.config();
const app = express();


app.use(express.json());
app.use("/api/user",userRoutes);
app.use("/api/auth", AuthRoutes)
// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to database server');
  })
  .catch((err) => {
    console.log('Error connecting to database: ', err);
  });


const port = process.env.PORT || 9000;

// Start the server
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
