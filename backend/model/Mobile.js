const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Mobile = new Schema({
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
  collection: 'mobile'
})

module.exports = mongoose.model('Mobile', Mobile)