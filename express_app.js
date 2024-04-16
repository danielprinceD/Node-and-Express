const http = require("http");
const { readFileSync } = require("fs");
const { type } = require("os");

http
  .createServer((req, res) => {
    // console.log(req.method);
    if (req.url === "/") {
      res.write(readFileSync("./HTML/demo.html", "utf-8"));
    }
    if (req.url === "/style.css") {
      res.write(readFileSync("./HTML/style.css", "utf-8"));
    }
    console.log(req.url);
    res.end();
  })
  .listen(1000, () => {
    console.log("Express App is Running...!");
  });
