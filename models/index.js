const mongoose = require('mongoose');

// Use the global NodeJS promise library
mongoose.Promise = global.Promise;
const mongoString = process.env.MONGODB_URI || 'mongodb://localhost/poolapp_test';
mongoose.connect(mongoString, { useNewUrlParser: true });

module.exports.Pool = require('./pool');
module.exports.Event = require('./event');
