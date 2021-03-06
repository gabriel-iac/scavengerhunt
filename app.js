var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var databaseURL = 'mongodb://localhost:27017/scavenger-hunt'
mongoose.connect(databaseURL);

app.set("views", "./public");
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));


app.use(require('./controllers'));

app.listen(process.env.PORT || 3000);