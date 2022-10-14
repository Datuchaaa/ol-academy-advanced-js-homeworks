const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", function (error, data) {
    // index.html must be in the same directory
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) console.log("Something went wrong", error);
  else console.log("Server is listening on port " + port);
});
