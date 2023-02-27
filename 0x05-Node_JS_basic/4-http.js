const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
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
