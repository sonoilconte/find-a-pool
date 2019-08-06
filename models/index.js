const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/poolapp_test');

module.exports.Pool = require('./pool');
module.exports.Event = require('./event');
