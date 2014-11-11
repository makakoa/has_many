/*jshint node: true*/
var express = require('express');
var mongoose = require('mongoose');
var bp = require('body-parser');
var app = express();
app.use(bp.json());

mongoose.connect('mongodb://localhost/networking');

require('./routes/person_routes')(app);
require('./routes/group_routes')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
