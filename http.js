// The Http Module in JavaScript is a core module that allows you to create a server or recive a request from a server.
// The program allows communication and data transfer between a users web browser and a website.

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`Request received for ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello, There!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
