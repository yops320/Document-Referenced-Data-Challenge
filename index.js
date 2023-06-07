const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/book_club', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
