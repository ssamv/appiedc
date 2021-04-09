var express = require('express');
var app = express();
var port = 3002;
var path = require('path');


// archivos estaticos img/css/js
app.use(express.static('public'));

// routes
app.get('/auditorio', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/auditorio.html'));
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