var express = require('express');
var app = express();
var port = 3001;
var path = require('path');


// archivos estaticos img/css/js
app.use(express.static('public'));

// routes
app.get('/lobby', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/lobby.html'));
});
app.get('/expositores', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/expositores.html'));
});
app.get('/stand', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/stand.html'));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/home.html'));
});
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})