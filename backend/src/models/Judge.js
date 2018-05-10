let mongoose = require('mongoose');

let JudgeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
      },
    team: [{
        team_name: { type: String, trim: true },
        individual_score: [Number],
        score: { type: Number }
    }]
});

let Judge = mongoose.model('Judge', JudgeSchema);
module.exports = Judge;