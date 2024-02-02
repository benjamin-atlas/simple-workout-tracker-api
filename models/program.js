const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  "load": { type: mongoose.Schema.Types.Mixed },
  "lsrpe": { type: mongoose.Schema.Types.Mixed },
  "notes": String,
  "reps": { type: mongoose.Schema.Types.Mixed },
  "rest": { type: mongoose.Schema.Types.Mixed },
  "rpe": { type: mongoose.Schema.Types.Mixed },
  "workingSets": { type: mongoose.Schema.Types.Mixed },
  "workoutTitle": String
});

const daySchema = new mongoose.Schema({
  title: String,
  exercises: [exerciseSchema]
});

const weekSchema = new mongoose.Schema({
  week: String,
  days: [daySchema]
});

const programSchema = new mongoose.Schema({
  weeks: [weekSchema]
});

module.exports = mongoose.model('Program', programSchema);