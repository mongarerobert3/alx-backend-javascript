const http = require('http');

const app = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello World"
  res.end('Hello Holberton School!\n');
});

// Listen on port 8080, IP defaults to 127.0.0.1
app.listen(1245);

module.exports = app;
