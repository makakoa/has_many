/*jshint node: true*/
var mongoose = require('mongoose');

var groupSchema = mongoose.Schema({
  name: {type: String, required: 'Name required', unique: true},
  persons: []
});

module.exports = mongoose.model('Group', groupSchema);
