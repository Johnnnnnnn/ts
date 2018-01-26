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

app.get('/favicon.ico', function(req, res) {
	res.status(204);
});

var fs = require('fs');
var Busboy = require('busboy');
app.post('/analysisTs', function (req, res) {
	let busboy = new Busboy({ headers: req.headers });
	busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
		var saveTo = path.join('.', filename);
		console.log('Uploading: ' + saveTo);

		file.on('data', function(data) {
        	console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
      	});
      	// file.on('end', function() {
       //  	console.log('File [' + fieldname + '] Finished');
      	// });
	});
	busboy.on('finish', function() {
		console.log('Upload complete2');
		res.writeHead(200, { 'Connection': 'close' });
		res.end("That's all folks!");
	});
	req.pipe(busboy);
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});