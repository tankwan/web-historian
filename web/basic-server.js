var http = require('http');
var handler = require('./request-handler');
var initialize = require('./initialize.js');
var archive = require('../helpers/archive-helpers');
// var worker = require('../workers/htmlfetcher.js');
// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize('./archives');

var port = 8080;
var ip = '127.0.0.1';
var server = http.createServer(handler.handleRequest);

// worker.runWorker();
// archive.downloadUrls(['www.google.com', 'www.amazon.com']);
if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log('Listening on http://' + ip + ':' + port);
}
