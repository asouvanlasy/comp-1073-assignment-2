const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Xbox = new Schema({
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
  collection: 'xbox'
})

module.exports = mongoose.model('Xbox', Xbox)