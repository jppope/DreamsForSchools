let mongoose = require('mongoose');

let EventSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
  }
});

let Event = mongoose.model('Event', EventSchema);
module.exports = Event;
