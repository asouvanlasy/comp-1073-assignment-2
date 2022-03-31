const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let PC = new Schema({
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
    type: String
  },
  Player: {
    type: String
  }
}, {
  collection: 'PC'
})

module.exports = mongoose.model('Student', Student)