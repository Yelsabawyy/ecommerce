const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  _id: {
    type: String,
    unique: true
  },
  children: [
    {
      type: String,
      required: false
    }
  ]
});

module.exports = mongoose.model('Category', categorySchema);

