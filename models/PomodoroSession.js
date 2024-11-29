const mongoose = require('mongoose');

const pomodoroSessionSchema = new mongoose.Schema({
  user: { type: String, default: "default_user" },
  duration: { type: Number, default: 25 }, // Durée en minutes
  completedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PomodoroSession', pomodoroSessionSchema);
