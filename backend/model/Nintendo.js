const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Nintendo = new Schema({
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
  collection: 'nintendo'
})

module.exports = mongoose.model('Nintendo', Nintendo)