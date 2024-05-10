const http = require("http"); // Import Node.js core module

// Create an HTTP server with a request listener function
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

// Start the server on port 3000 or the port specified in the environment
server.listen(process.env.PORT || 3000);
