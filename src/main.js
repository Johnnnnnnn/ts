const express = require('express');
const path = require('path')
const app = express();

app.use('/', express.static('out'))

app.post('/analysisTs', function (req, res) {
  console.info('[server][/analysisTs]')
  require('bin/analysisTs')
})
app.get('/analysisTs', function (req, res) {
  console.info('[server][/analysisTs]')
  require('./bin/analysisTs').test()
  res.send('')


})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});