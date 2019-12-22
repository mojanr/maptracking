var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mqtt = require('mqtt')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// // connect mqtt
// var mqttServer = mqtt.connect('mqtt://103.54.225.243:1883', {
//     username: 'iotkai2019',
//     password: 'iot123456'
// })

// mqttServer.on('connect', () => {
//     mqttServer.subscribe('#')
// })

// mqttServer.on('message', (topic, payload) => {
//     console.log(payload.toString())
// })


module.exports = app;
