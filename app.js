var http = require('http');
var url = require('url');
var fs = require('fs');

var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/topic', function(req, res) {
    res.sendFile(path.join(__dirname+'/topic.html'))
})

router.get('/add', function(req, res) {
    res.sendFile(path.join(__dirname+'/add.html'))
})

app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Running on port 3000");