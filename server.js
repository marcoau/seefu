var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = exports.io = require('socket.io')(server);

app.use(express.static('./client'));
// basic request logger
app.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

require('./server/routes')(app);
require('./server/io-routes')(io);

server.listen(process.env.PORT || 8000);
console.log('C-Fu @ :8000');
