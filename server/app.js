/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var pusher = require("pusher");
var pusherClient = new pusher({ appId:"83207", key:"e6ce0ce34037b3106bc2" , secret:"468bef63e483945400d8"});

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

io.on('connection', function (socket) {
  socket.on('pedir', function (data) {
    pusherClient.trigger('pedidos','pedido:nuevo',data);
  });
});

// Expose app
exports = module.exports = app;