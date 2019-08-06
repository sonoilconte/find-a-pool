const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
  dayOfWeek: String,
  date: Date,
  title: String,
  description: String,
  startTime: String,
  endTime: String,
  isRecurring: Boolean,
});

module.exports = mongoose.model('Events', EventsSchema);
