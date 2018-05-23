let mongoose = require('mongoose');

let JudgeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
      },
    events: [{}]
});

let Judge = mongoose.model('Judge', JudgeSchema);
module.exports = Judge;
