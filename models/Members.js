const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  favouriteBook: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
