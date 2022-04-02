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
  System: {
    type: String
  },
  Release: {
    type: Date
  }
}, {
  collection: 'PC'
})

module.exports = mongoose.model('PC', PC)