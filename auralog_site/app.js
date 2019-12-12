//import express 
var express = require('express');
//create express object named app
var app = express();

//import node-osc
var osc = require('node-osc');

//instantiate a server on port 3000
var server = app.listen(3000);
var io = require('socket.io')(server);

//expose the local public folder for inluding files js, css etc..
app.use(express.static('public'));

//on a request to / serve index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//listen on port 8000 and pass the message on to a websocket
var oscServer = new osc.Server(8338, '0.0.0.0');
oscServer.on("message", function (msg, rinfo) {
      console.log(msg);
      io.sockets.emit('mysocket', msg);
});
