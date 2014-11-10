/*jshint node: true*/
'use strict';

var Person = require('../models/person');
var Group = require('../models/group');

module.exports = function(app) {
    app.get('/api/persons', function(req, res) {
        Person.find({}, function(err, data) {
            if (err) return res.status(500).send('error');
            res.json(data);
        });
    });
    
    app.get('/api/persons/:name', function(req, res) {
        Person.findOne({name: req.params.name}, function(err, data) {
            if (err) return res.status(500).send('error');
            res.json(data);
        });
    });
    
    app.post('/api/persons', function(req, res) {
        var person = new Person(req.body);
        person.save(function(err, data) {
            if (err) return res.status(500).send('error');
            res.json(data);
            Group.findOneAndUpdate({name: req.body.group}, {$push: {persons: data.name}},
                {safe: true, upsert: true},
                function(err) {
                    if (err) console.log(err);
                });
        });
    });    
};
