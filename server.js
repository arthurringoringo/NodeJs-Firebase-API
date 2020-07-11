/*
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

*/
//import * as firebase from 'firebase';
//import 'firebase/firestore';

var PORT = process.env.PORT;
var express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
var routeSaya = require('./route/route')

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routeSaya)

app.get('/', (req, res) => {
    res.send('<h1>Express & Firestore</h1>')
})

app.listen(PORT, function () {
    console.log('server running');
});

