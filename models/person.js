/*jshint node: true*/
var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: { type: String, required: 'Name required', unique: true},
    group: { type: String, required: 'Group required'}
});

module.exports = mongoose.model('Person', personSchema);
