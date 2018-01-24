const express = require('express');
const path = require('path')
const app = express();


app.use('/', express.static('out'))

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/analysisTs', function (req, res) {
  console.info('[server][/analysisTs]')
  require('./bin/analysisTs').test()
  res.send('132')

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});