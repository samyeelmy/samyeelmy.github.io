//import serialport
var com = require("serialport");
//import express 
var express = require('express');
//create express object named app
var app = express();
//setup serialport
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/tty.usbmodem14201", {
    baudRate: 57600
});

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
const parser = port.pipe(new Readline({
    delimiter: "\r\n"
}));
parser.on("data", function (data) {
    console.log(data);
    io.sockets.emit('sensor', data);
});
//listen on port 8000 and pass the message on to a websocket
var oscServer = new osc.Server(8338, '0.0.0.0');
oscServer.on("message", function (msg, rinfo) {
      console.log(msg);
      io.sockets.emit('mysocket', msg);
});