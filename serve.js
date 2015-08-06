// module.exports
// require
// http

'use strict';

var http = require('http');
var server = http.createServer();

// process.argv is the list of arguments in node
var port = process.argv[2] || 8080;

server.listen(port, function () {
  console.log('server is listening', server.address());
});

                              // http.incomingMessage, http.
server.on('request', function (request, response) {
  var result = { success: true };
  console.log(request.url);

  // response.statusCode = 200;
  response.setHeader(
    'Content-Type'
  , 'application/json; charset=utf-8'
  );
  // Error
  //response.write(result);
  response.write(JSON.stringify(result));
  response.end();
});
