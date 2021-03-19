var http = require("http");
var fs = require("fs");

var page = "";
var mime = "";
var port = 3000;
var host = "localhost";

var server = http.createServer(function (req, res) {
  if (req.url == "/" || req.url == "/index.html" || req.url == "/index.htm") {
    page = "./public/index.html";
    mime = "text/html";
  } else {
    page = "./public" + req.url;
  }
  console.log(page);
  fs.readFile(page, "utf8", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  });
});

server.listen(port, host, function () {
  console.log(`Listening at http://${host}:${port}`);
});
