let mongoose = require('mongoose');

let TeamSchema = new mongoose.Schema({
  mentor: {
    type: String,
    trim: true
  },
  score: {
    type: Number,
  },
  school_name: {
    type: String,
    trim: true
  },
  team_name: {
    type: String,
    trim: true
  },
  banner_votes: {
    type: Number,
    default: 0
  },
  event: {
    type: String,
    trim: true
  }
});

let Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
