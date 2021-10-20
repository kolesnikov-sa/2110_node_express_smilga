const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short story");
  } else {
    res.end(
      `<h1>Oops!</h1><p>This page does not exist</p><a href="/">Back home</a>`
    );
  }
});

server.listen(5000);
