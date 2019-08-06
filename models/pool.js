const mongoose = require('mongoose');
const Event = require('./event');

const PoolSchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: String,
  contactEmail: String,
  monday: String,
  tuesday: String,
  wednesday: String,
  thursday: String,
  friday: String,
  saturday: String,
  sunday: String,
  special: String,
  map: String,
  maps: {
    lat: Number,
    long: Number,
  },
  events: [Event.schema],
  tags: [String],
  imageURL: String,
});

module.exports = mongoose.model('Pool', PoolSchema);
