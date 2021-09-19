var path = require('path');
var express = require('express');
var app = express()
app.use(express.static('views'))
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/lotto.html");
})
app.listen(3500);