const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ChangelogSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  details:{
    type: String,
    required: true
  },
  reference:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: false
  },
  author:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('changelogs', ChangelogSchema);