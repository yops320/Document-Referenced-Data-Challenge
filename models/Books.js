const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  authorName: { type: String, required: true },
  yearPublished: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
