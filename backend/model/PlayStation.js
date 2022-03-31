const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let PlayStation = new Schema({
  Game: {
    type: String
  },
  Dev: {
    type: String
  },
  Rating: {
    type: String
  },
  Time: {
    type: Int32
  },
  Players: {
    type: Int32
  }
}, {
  collection: 'PlayStation'
})

module.exports = mongoose.model('Student', Student)