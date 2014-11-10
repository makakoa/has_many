/*jshint node: true*/
'use strict';

var Group = require('../models/group');
var Person = require('../models/person');

module.exports = function(app) {
    app.get('/api/groups', function(req, res) {
        Group.find({}, function(err, data) {
            if (err) return res.status(500).send('error');
            res.json(data);
        });
    });
    
    app.get('/api/groups/:name', function(req, res) {
        Group.findOne({name: req.params.name}, function(err, data) {
            if (err) return res.status(500).send('error');
            res.json(data);
        });
    });
    
    app.post('/api/groups', function(req, res) {
        var group = new Group(req.body);
        group.save(function(err, data) {
            if (err) return res.status(500).send('error');
            res.json(data);
        });
    });
    
    app.delete('/api/notes/:name', function(req, res)  {
        Group.remove({name:req.params.name}, function(err) {
        if (err) return res.status(500).send('error');
            res.json({msg: 'success!'});
        });
    });
};
