const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let PlayStation = new Schema({
  game: {
    type: String
  },
  dev: {
    type: String
  },
  system: {
    type: String
  },
  release: {
    type: Date
  }
}, {
  collection: 'playstation'
})

module.exports = mongoose.model('PlayStation', PlayStation)