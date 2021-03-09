var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
    res.send('Hello world FROM MSIT\n');
});

app.listen(PORT);
console.log('Running on ' + PORT);